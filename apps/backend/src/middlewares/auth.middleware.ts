// import { Request, Response, NextFunction } from "express"
// import jwt from "jsonwebtoken"
// import { environment } from "../server/environment"

// interface JwtPayload {
//   id: number
//   email: string
//   role: string
// }

// export const authenticate = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const authHeader = req.headers.authorization

//   if (!authHeader) {
//     return res.status(401).json({ error: "Token required" })
//   }

//   const token = authHeader.split(" ")[1]

//   if (!token) {
//     return res.status(401).json({ error: "Invalid token format" })
//   }

//   try {
//     const decoded = jwt.verify(
//       token,
//       environment.jwtAccessSecret
//     ) as JwtPayload

//     ;(req as any).user = decoded
//     next()
//   } catch (error) {
//     return res.status(401).json({ error: "Invalid or expired token" })
//   }
// }

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