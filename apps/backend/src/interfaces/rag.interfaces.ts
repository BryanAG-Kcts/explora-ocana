import type { Request } from 'express';
import 'multer';

export interface DocumentChunk {
  id:          string;
  documentId:  string;
  content:     string;
  chunkIndex:  number;
  metadata:    ChunkMetadata;
  createdAt:   Date;
}

export interface ChunkMetadata {
  documentName: string;
  chunkIndex:   number;
}

export interface RetrievedChunk {
  content:    string;
  metadata:   ChunkMetadata;
  similarity: number;
}

export interface RagResponse {
  answer:  string;
  sources: string[];
  chunks:  RetrievedChunk[]; 
}

export interface UploadDocumentDto {
  documentName: string;
  documentId:   string;
}

export interface AskQuestionDto {
  question: string;
}

// Agrega esto al final del archivo:
export interface MulterRequest extends Request {
  file?: Express.Multer.File | undefined;
}