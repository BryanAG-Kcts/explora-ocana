import type { Request, Response, NextFunction } from 'express'
import { verifyAccessToken } from '../constants/jwt'

export interface AuthRequest extends Request {
  user?: { userId: number; email: string }
}

export function authMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Token no proporcionado' })
    return
  }

  const token = authHeader.split(' ')[1]

  if (!token) {
  res.status(401).json({ error: 'Token no proporcionado' })
  return
  }

  try {
    const payload = verifyAccessToken(token) as { userId: number; email: string }
    req.user = payload
    next()
  } catch {
    res.status(401).json({ error: 'Token inválido o expirado' })
  }
}