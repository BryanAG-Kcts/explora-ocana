// import type { Request, Response } from 'express'
// import { hashPassword } from '../constants/bcrypt'
// import { loginSchema, registerSchema } from '../interfaces/auth.interfaces'
// import { userRepository } from '../repositories/user.repositories'
// import { generateAccessToken } from '../constants/jwt'

// export const authController = {
//   login: async (req: Request, res: Response) => {
//     const { success, data } = await loginSchema.safeParseAsync(req.body)
//     if (!success) return res.status(400).json({ error: data })

//     const user = await userRepository.findByEmail(data.email)
//     if (!user) return res.status(401).json({ error: 'Invalid credentials' })
      
//     const token = generateAccessToken({
//       id: user.id,
//       email: user.email,
//       password: user.password
//     })

//     return res.json({
//       token,
//       user: {
//         id: user.id,
//         name: user.name,
//         email: user.email
//       }
//     })
//   },
//   register: async (req: Request, res: Response) => {
//     const { success, data } = await registerSchema.safeParseAsync(req.body)
//     if (!success) return res.status(400).json({ error: data })

//     data.password = await hashPassword(data.password)
//     const user = await userRepository.create(data)

//     console.log(user)
//     if (!user) return res.status(400).json({ error: 'User already exists' })
//     res.json(user)
//   }
// }

import type { Request, Response } from 'express'
import { authService } from '../services/auth.service'
import { loginSchema, registerSchema } from '../interfaces/auth.interfaces'

export const authController = {
  register: async (req: Request, res: Response) => {
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
      res.status(500).json({ error: 'Error interno del servidor' })
    }
  },

  login: async (req: Request, res: Response) => {
    const parsed = loginSchema.safeParse(req.body)
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.flatten() })
      return
    }

    try {
      const tokens = await authService.login(parsed.data)
      res.status(200).json(tokens)
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
  },

  logout: async (req: Request, res: Response) => {
    const { refreshToken } = req.body
    if (!refreshToken) {
      res.status(400).json({ error: 'Refresh token requerido' })
      return
    }

    await authService.logout(refreshToken)
    res.status(200).json({ message: 'Sesión cerrada correctamente' })
  }
}