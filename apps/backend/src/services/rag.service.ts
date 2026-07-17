// apps/backend/src/services/rag.service.ts

import OpenAI from 'openai'
import { RAG_CONSTANTS } from '../constants/rag'
import { ragRepository } from '../repositories/rag.repository'
import type { RagResponse } from '../interfaces/rag.interface'
const pdfParse = require('pdf-parse-fork')

const client = new OpenAI({
  baseURL: RAG_CONSTANTS.OLLAMA_BASE_URL,
  apiKey: 'ollama'
})

const SYSTEM_PROMPT = `
Eres un modelo RAG. Acompañas a estudiantes de bachillerato en el aprendizaje de la historia local de Ocaña y sus pueblos indígenas originarios.

---

## Tu identidad

- Eres un guía experto en el contenido del curso, no un buscador de respuestas.
- Tu objetivo no es solo responder: es ayudar al estudiante a pensar, conectar ideas y desarrollar criterio propio.
- Hablas con un tono amable, cercano y juvenil, pero siempre con respeto y seriedad académica.
- Nunca inventas información. Solo usas lo que está en el contexto que te proporcionan.

---

## Fuente de conocimiento

Respondes ÚNICAMENTE con base en los fragmentos de conocimiento que se te entregan en cada consulta.

- Si la información está en el contexto → responde con seguridad.
- Si la información NO está en el contexto → dilo con honestidad:
  "Esa pregunta está fuera del contenido que hemos trabajado hasta ahora. ¡Pero es buena curiosidad!"
- Nunca completes con suposiciones, datos externos ni conocimiento general tuyo.

---

## Cómo decides cómo responder

Antes de responder, identifica qué tipo de pregunta es:

### Pregunta factual directa
*Ejemplo: "¿Cuántos nombres ha tenido el Río Tejo?" / "¿Qué comían los Argutacaca?"*
→ Responde de forma clara y directa, pero no te quedes en la lista seca.
→ Agrega una oración que dé sentido o relevancia al dato.
→ Cierra con una pregunta corta que invite a seguir pensando.

### Pregunta de comprensión o relación
*Ejemplo: "¿Por qué se mudaban si tenían cultivos?" / "¿Qué tiene que ver la luna con la agricultura?"*
→ Explica con tus propias palabras usando el contenido del contexto.
→ Usa una analogía o ejemplo cercano a la vida del estudiante si ayuda a entender.
→ Cierra invitando a reflexionar o conectar con algo actual.

### Pregunta reflexiva o de opinión
*Ejemplo: "¿Crees que los españoles actuaron bien?" / "¿Era justa su sociedad sin líderes?"*
→ No des tu opinión como verdad.
→ Presenta los elementos del contexto que permiten al estudiante formarse su propia posición.
→ Hazle preguntas que lo lleven a argumentar: "¿Qué crees tú? ¿Con qué criterio lo juzgarías?"

### Pregunta fuera del contenido
→ Sé honesto y amable. No finjas saber.
→ Redirige hacia lo que sí está disponible si hay relación.

---

## Cierre de cada respuesta

Casi siempre termina con UNA sola pregunta. Que sea:
- Genuina, no retórica.
- Conectada con lo que acabas de explicar.
- Que no se pueda responder con sí o no.

---

## Lo que nunca harás

- Inventar datos, fechas, nombres o eventos que no estén en el contexto.
- Dar la respuesta completa a una tarea o taller sin promover el razonamiento propio.
- Juzgar culturas como "inferiores" o "primitivas".
- Usar el término "primitivo" para describir a los pueblos indígenas.
- Responder como si fueras un motor de búsqueda. Eres un guía, no un índice.

## Formato

- Responde con un texto plano.
`

//3. Menciona siempre de cual misión viene la información y a qué subtítulo pertenece.
// ── Chunking ──────────────────────────────────────────────────────────────

function splitIntoChunks(text: string): string[] {
  const words = text.split(/\s+/).filter(Boolean)
  const chunks: string[] = []
  const step = RAG_CONSTANTS.CHUNK_SIZE - RAG_CONSTANTS.CHUNK_OVERLAP
  let i = 0

  while (i < words.length) {
    const chunk = words.slice(i, i + RAG_CONSTANTS.CHUNK_SIZE).join(' ')
    if (chunk.trim().length > 20) chunks.push(chunk)
    i += step
  }

  return chunks
}

// ── Embeddings ────────────────────────────────────────────────────────────

async function generateEmbedding(text: string): Promise<number[]> {
  const response = await client.embeddings.create({
    model: RAG_CONSTANTS.EMBEDDING_MODEL,
    input: text
  })
  if (!response.data || response.data[0] === undefined) {
    throw new Error('No se recibió embedding de Ollama')
  }
  return response.data?.[0].embedding
}

// ── Ingesta de documento ──────────────────────────────────────────────────

export async function ingestDocument(params: {
  fileBuffer: Buffer
  documentId: string
  documentName: string
}): Promise<{ chunksCreated: number }> {
  const { fileBuffer, documentId, documentName } = params

  // 1. Extraer texto del PDF
  const { text } = await pdfParse(fileBuffer)

  // 2. Dividir en chunks con overlap
  const chunks = splitIntoChunks(text)

  // pirmero creamos el documento
  await ragRepository.createDocument({
    id: documentId,
    name: documentName,
    chunkCount: chunks.length
  })

  // 3. Generar embedding y guardar cada chunk
  //    Procesamos de a 5 en paralelo para no saturar Ollama
  const BATCH = 5
  for (let i = 0; i < chunks.length; i += BATCH) {
    const batch = chunks.slice(i, i + BATCH)

    await Promise.all(
      batch.map((content, j) =>
        generateEmbedding(content).then(embedding =>
          ragRepository.saveChunk({
            documentId,
            content,
            embedding,
            chunkIndex: i + j,
            metadata: { documentName, chunkIndex: i + j }
          })
        )
      )
    )

    // Pausa pequeña entre lotes para no saturar Ollama
    if (i + BATCH < chunks.length) {
      await new Promise(r => setTimeout(r, 300))
    }
  }

  return { chunksCreated: chunks.length }
}

// ── Consulta RAG ──────────────────────────────────────────────────────────

export async function askQuestion(question: string): Promise<RagResponse> {
  // 1. Convertir la pregunta en embedding
  const queryEmbedding = await generateEmbedding(question)

  // 2. Buscar chunks relevantes
  const chunks = await ragRepository.findSimilarChunks(queryEmbedding)

  // 3. Si no hay nada relevante, responder sin llamar al LLM
  if (chunks.length === 0) {
    return {
      answer:
        'No encontré información sobre eso en los documentos disponibles.',
      sources: [],
      chunks: []
    }
  }

  // 4. Construir contexto para el prompt
  const context = chunks
    .map(
      (c, i) =>
        `[Fragmento ${i + 1} — ${c.metadata.documentName}]\n${c.content}`
    )
    .join('\n\n---\n\n')

  const sources = [...new Set(chunks.map(c => c.metadata.documentName))]

  // 5. Llamar al LLM con el contexto recuperado
  const response = await client.chat.completions.create({
    model: RAG_CONSTANTS.CHAT_MODEL,
    temperature: 0.1,
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      {
        role: 'user',
        content: `FRAGMENTOS:\n\n${context}\n\n---\n\nPREGUNTA: ${question}`
      }
    ]
  })

  if (!response.choices || response.choices[0] === undefined) {
    return {
      answer:
        'No encontré información sobre eso en los documentos disponibles.',
      sources: [],
      chunks: []
    }
  }

  return {
    answer: response.choices[0].message.content ?? '',
    sources,
    chunks
  }
}
