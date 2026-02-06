import type { Request, Response } from 'express'
import { hashPassword } from '../constants/bcrypt'
import { loginSchema, registerSchema } from '../interfaces/auth.interfaces'
import { userRepository } from '../repositories/user.repositories'

export const authController = {
  login: async (req: Request, res: Response) => {
    const { success, data } = await loginSchema.safeParseAsync(req.body)
    if (!success) return res.status(400).json({ error: data })

    const user = await userRepository.login(data)
    if (!user) return res.status(401).json({ error: 'Invalid credentials' })
    res.json(user)
  },
  register: async (req: Request, res: Response) => {
    const { success, data } = await registerSchema.safeParseAsync(req.body)
    if (!success) return res.status(400).json({ error: data })

    data.password = await hashPassword(data.password)
    const user = await userRepository.register(data)

    console.log(user)
    if (!user) return res.status(400).json({ error: 'User already exists' })
    res.json(user)
  }
}
