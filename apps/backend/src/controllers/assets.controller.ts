import path from 'node:path'
import type { Request, Response } from 'express'

export const assetsController = {
  serveFile: (req: Request, res: Response) => {
    const ASSETS_BASE = path.resolve(process.cwd(), 'src/assets')
    const filepath = (req.params.filepath as string[]).join('/')

    const filePath = path.join(ASSETS_BASE, filepath)
    res.sendFile(filePath, err => {
      if (err) res.status(404).json({ message: 'Archivo no encontrado' })
    })
  }
}
