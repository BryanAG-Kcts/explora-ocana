import path from 'node:path';

export const ASSETS_CONSTANTS = {
  // Raíz de la carpeta assets relativa al proyecto
  BASE_PATH: path.resolve(process.cwd(), 'assets'),

  FOLDERS: {
    images: 'images',
    pdfs:   'pdfs',
    models: 'models',
  },

  // Extensiones permitidas por tipo
  ALLOWED_EXTENSIONS: {
    images: ['.jpg', '.jpeg', '.png', '.webp', '.gif'],
    pdfs:   ['.pdf'],
    models: ['.glb', '.gltf', '.obj', '.fbx'],
  },

  // MIME types para que el cliente sepa qué recibe
  MIME_TYPES: {
    '.jpg':  'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png':  'image/png',
    '.webp': 'image/webp',
    '.gif':  'image/gif',
    '.pdf':  'application/pdf',
    '.glb':  'model/gltf-binary',
    '.gltf': 'model/gltf+json',
    '.obj':  'text/plain',
    '.fbx':  'application/octet-stream',
  },
} as const;

export type AssetFolder = keyof typeof ASSETS_CONSTANTS.FOLDERS;