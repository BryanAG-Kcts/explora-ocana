import multer            from 'multer';
// Multer en memoria — no guarda el archivo en disco
export const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (_req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Solo se aceptan archivos PDF'));
    }
  },
  limits: { fileSize: 20 * 1024 * 1024 }, // máximo 20MB
});