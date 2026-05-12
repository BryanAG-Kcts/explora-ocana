import path from 'node:path';
import type { Request, Response } from 'express';

export const assetsController = {

  serveFile: (req: Request, res: Response) => {
    
    const ASSETS_BASE = path.resolve(process.cwd(), 'src/assets')
    const { folder, filename } = req.params as { folder: string, filename: string } ;
    
    const filePath = path.join(ASSETS_BASE, folder, filename);
    res.sendFile(filePath, (err) => {
      if (err) res.status(404).json({ message: 'Archivo no encontrado' });
    });
  },
}