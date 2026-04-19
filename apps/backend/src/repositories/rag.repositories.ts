// apps/backend/src/repositories/rag.repository.ts

import { db } from '../services/pg.service'
import type {
  RetrievedChunk,
  ChunkMetadata
} from '../interfaces/rag.interfaces'
import { RAG_CONSTANTS } from '../constants/rag'

// Convierte array JS al formato string que entiende pgvector
const toVector = (arr: number[]): string => `[${arr.join(',')}]`

export const ragRepository = {
  // Guarda un chunk con su embedding en la BD
  async saveChunk(params: {
    documentId: string
    content: string
    embedding: number[]
    chunkIndex: number
    metadata: ChunkMetadata
  }): Promise<void> {
    await db.none(
      `INSERT INTO document_chunks
         (document_id, content, embedding, chunk_index, metadata)
       VALUES ($1, $2, $3::vector, $4, $5)`,
      [
        params.documentId,
        params.content,
        toVector(params.embedding),
        params.chunkIndex,
        JSON.stringify(params.metadata)
      ]
    )
  },

  // Busca los chunks más similares a un vector de consulta
  async findSimilarChunks(
    queryEmbedding: number[],
    topK: number = RAG_CONSTANTS.TOP_K,
    minSimilarity: number = RAG_CONSTANTS.MIN_SIMILARITY
  ): Promise<RetrievedChunk[]> {
    const rows = await db.any<{
      content: string
      metadata: ChunkMetadata
      similarity: string // pg-promise devuelve numerics como string
    }>(
      `SELECT content,
              metadata,
              (1 - (embedding <=> $1::vector))::float8 AS similarity
       FROM   document_chunks
       WHERE  (1 - (embedding <=> $1::vector)) >= $2
       ORDER  BY embedding <=> $1::vector
       LIMIT  $3`,
      [toVector(queryEmbedding), minSimilarity, topK]
    )

    return rows.map(row => ({
      content: row.content,
      metadata: row.metadata,
      similarity: Number(row.similarity)
    }))
  },

  // Se elimina todos los chunks de un documento y su instancia en la tabla documents
  async deleteByDocumentId(nameDocument: string): Promise<void> {
    await db.none('DELETE FROM documents WHERE name = $1', [
      nameDocument
    ])
  },

  async createDocument(params: {
    id: string
    name: string
    chunkCount: number
  }): Promise<void> {
    await db.none(
      `INSERT INTO documents (id, name, total_chunks)
     VALUES ($1, $2, $3)`,
      [params.id, params.name, params.chunkCount]
    )
  }
}
