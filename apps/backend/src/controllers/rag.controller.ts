// apps/backend/src/controllers/rag.controller.ts

import type { Request, Response } from 'express';
import { ingestDocument, askQuestion} from '../services/rag.service';
import type { MulterRequest } from '../interfaces/rag.interfaces';
import { randomUUID } from 'node:crypto';
import { ragRepository } from '../repositories/rag.repositories';

export const ragController = {

  async uploadDocument(req: MulterRequest, res: Response): Promise<void> {
    try {
      const file = req.file;
      if (!file) {
        res.status(400).json({ error: 'No se envió ningún archivo PDF' });
        return;
      }

      const {documentName } = req.body as {
        documentName: string;
      };

      if (!documentName) {
        res.status(400).json({ error: 'documentName es requerido' });
        return;
      }
      const documentId = randomUUID();  

      const result = await ingestDocument({
        fileBuffer:   file.buffer,
        documentId,
        documentName,
      });

      res.status(201).json({
        message:      'Documento procesado correctamente',
        chunksCreated: result.chunksCreated,
      });

    } catch (error) {
      console.error('[RAG] Error al procesar documento:', error);
      res.status(500).json({ error: 'Error al procesar el documento' });
    }
  },

  async askQuestion(req: Request, res: Response): Promise<void> {
    try {
      const { question } = req.body as { question: string };

      if (!question?.trim()) {
        res.status(400).json({ error: 'El campo question es requerido' });
        return;
      }

      const result = await askQuestion(question);
      res.json(result);

    } catch (error) {
      console.error('[RAG] Error al consultar:', error);
      res.status(500).json({ error: 'Error al generar la respuesta' });
    }
  },

  async deleteDocument(req: Request, res: Response): Promise<void> {
    try {
      const { name } = req.body;  
      if (!name) {
        res.status(400).json({ error: 'El nombre del documento es requerido' });
        return;
      }
      await ragRepository.deleteByDocumentId(name)
      res.json({ message: 'Documento eliminado correctamente' });

    } catch (error) {
      console.error('[RAG] Error al eliminar documento:', error);
      res.status(500).json({ error: 'Error al eliminar el documento' });
    }
  }

};
