import { Router } from 'express';
import { AssetsController } from '../controllers/assets.controller';

export const routerAssets : Router = Router();
const assetsController = new AssetsController();

console.log('handler:', AssetsController);

// GET /api/assets/images/foto.png
// GET /api/assets/pdfs/documento.pdf
// GET /api/assets/models/edificio.glb
routerAssets.get('/:folder/:filename', (req, res) => assetsController.serveFile(req, res));

