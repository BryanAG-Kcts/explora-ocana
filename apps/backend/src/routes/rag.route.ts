// apps/backend/src/routes/rag.routes.ts

import { Router }        from 'express';
import { upload }        from '../middlewares/upload.middleware';
import { ragController } from '../controllers/rag.controller';

export const ragRouter: Router = Router();

// POST /api/rag/documents
// Body: multipart/form-data con campos: file (PDF), documentId, documentName
ragRouter.post('/documents', upload.single('file'), ragController.uploadDocument);
ragRouter.post('/ask', ragController.askQuestion);
ragRouter.delete('/documents', ragController.deleteDocument);

export default ragRouter;