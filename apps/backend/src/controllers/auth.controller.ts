import type { Request, Response } from 'express'
import { authService } from '../services/auth.service'
import { loginSchema, registerSchema } from '../interfaces/auth.interfaces'

export const authController = {
  registerUser: async (req: Request, res: Response) => {
    const parsed = registerSchema.safeParse(req.body)
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.flatten() })
      return
    }

    try {
      const newUser = await authService.register(parsed.data)
      res.status(201).json(newUser)
    } catch (e: unknown) {
      if (e instanceof Error && e.message === 'EMAIL_IN_USE') {
        res.status(409).json({ error: 'El email ya está en uso' })
        return
      }
      res.status(500).json({ error: 'Error interno del servidor', e})
    }
  },

  login: async (req: Request, res: Response) => {
    const parsed = loginSchema.safeParse(req.body)
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.flatten() })
      return
    }

    try {
      // Luego del login exitoso, devolvemos el usuario y los tokens
      const {user, accessToken, refreshToken} = await authService.login(parsed.data)
      res.status(200).json({ user, accessToken, refreshToken })
    } catch (e: unknown) {
      if (e instanceof Error && e.message === 'INVALID_CREDENTIALS') {
        res.status(401).json({ error: 'Credenciales inválidas' })
        return
      }
      res.status(500).json({ error: 'Error interno del servidor' })
    }
  },

  refresh: async (req: Request, res: Response) => {
    const { refreshToken } = req.body
    if (!refreshToken) {
      res.status(400).json({ error: 'Refresh token requerido' })
      return
    }

    try {
      const tokens = await authService.refresh(refreshToken)
      res.status(200).json(tokens)
    } catch (e: unknown) {
      res.status(401).json({ error: 'Refresh token inválido o expirado', msg: e instanceof Error ? e.message : 'Error desconocido' })
    }
  }
}