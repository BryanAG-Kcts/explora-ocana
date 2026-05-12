import { Router } from 'express';
import { assetsController } from '../controllers/assets.controller';

export const assetsRouter : Router = Router();

// GET /api/assets/images/foto.png
// GET /api/assets/pdfs/documento.pdf
// GET /api/assets/models/edificio.glb
assetsRouter.get('/:folder/:filename', assetsController.serveFile);


