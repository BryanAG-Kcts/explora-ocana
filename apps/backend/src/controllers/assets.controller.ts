import path from 'path';
import fs   from 'fs';
import type { Request, Response } from 'express';
import { ASSETS_CONSTANTS, AssetFolder } from '../constants/assets';

export class AssetsController {

  serveFile(req: Request, res: Response): void {
    const folder   = req.params.folder as AssetFolder;
    const filename = req.params.filename as string;

    // 1. Validar que la carpeta existe en nuestra configuración
    if (!(folder in ASSETS_CONSTANTS.FOLDERS)) {
      res.status(400).json({
        message: `Carpeta inválida. Usa: ${Object.keys(ASSETS_CONSTANTS.FOLDERS).join(', ')}`,
      });
      return;
    }

    // 2. Validar extensión permitida para esa carpeta
    const ext = path.extname(filename).toLowerCase();
    const allowedExts = ASSETS_CONSTANTS.ALLOWED_EXTENSIONS[folder] as readonly string[];

    if (!allowedExts.includes(ext)) {
      res.status(400).json({
        message: `Extensión no permitida en ${folder}. Permitidas: ${allowedExts.join(', ')}`,
      });
      return;
    }

    // 3. Construir ruta absoluta y sanitizarla (previene path traversal)
    //    Ej: filename = "../../etc/passwd" sería bloqueado aquí
    const safeName  = path.basename(filename); // elimina ../ del nombre
    const filePath  = path.join(ASSETS_CONSTANTS.BASE_PATH, folder, safeName);
    const folderPath = path.join(ASSETS_CONSTANTS.BASE_PATH, folder);

    // Verificar que la ruta final sigue dentro de assets/
    if (!filePath.startsWith(folderPath)) {
      res.status(403).json({ message: 'Acceso denegado' });
      return;
    }

    // 4. Verificar que el archivo existe
    if (!fs.existsSync(filePath)) {
      res.status(404).json({ message: `Archivo '${safeName}' no encontrado` });
      return;
    }

    // 5. Enviar con el MIME type correcto
    const mimeType = ASSETS_CONSTANTS.MIME_TYPES[ext as keyof typeof ASSETS_CONSTANTS.MIME_TYPES];
    res.setHeader('Content-Type', mimeType);
    res.sendFile(filePath);
  }
}