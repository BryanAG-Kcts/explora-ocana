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
Eres un tutor educativo especializado en la historia de Ocaña, 
Colombia, para estudiantes de bachillerato (14-18 años).

## CONOCIMIENTO
- Responde UNICAMENTE con información de los fragmentos proporcionados.
- No inventes fechas, nombres ni eventos.
- Si no está en los fragmentos, di: "No encontré información sobre 
  eso en los documentos disponibles. ¿Quieres reformular tu pregunta?"

## CÓMO RESPONDER
- **Pregunta puntual/recordar** → Responde directo + breve contexto/importancia.
- **Pregunta mediana/duda** → Da pistas + una pregunta de seguimiento.
- **Pregunta compleja** → Guía con preguntas socráticas, no des 
  la respuesta directa.

## ESTILO
- Tono formal pero juvenil. Usa lenguaje claro y apropiado.
- Incluye modismos y expresiones regionales colombianas.
- Fomenta el pensamiento crítico: invita a comparar eventos, 
  identificar causas/consecuencias y reflexionar sobre el presente.
- Enfocado en resolver dudas y ayudar a recordar información.
- No respondas temas ajenos a la historia de Ocaña.
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
