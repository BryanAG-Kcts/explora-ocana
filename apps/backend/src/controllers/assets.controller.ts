import path from 'node:path'
import type { Request, Response } from 'express'

const ASSETS_BASE = path.resolve(__dirname, '../assets')
export const assetsController = {
  serveFile: (req: Request, res: Response) => {
    const filepath = (req.params.filepath as string[]).join('/')

    res.sendFile(filepath, { root: ASSETS_BASE }, err => {
      if (err && !res.headersSent) {
        res.status(404).json({ message: 'Archivo no encontrado' })
      }
    })
  }
}
