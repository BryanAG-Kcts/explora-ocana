import { comparePassword, hashPassword } from '../constants/bcrypt'
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken
} from '../constants/jwt'
import type { LoginSchema, RegisterSchema } from '../interfaces/auth.interfaces'
import { userRepository } from '../repositories/user.repositories'

export const authService = {
  register: async (data: RegisterSchema) => {
    const existingUser = await userRepository.findByEmail(data.email)
    if (existingUser) throw new Error('EMAIL_IN_USE')

    const hashedPassword = await hashPassword(data.password)
    data.password = hashedPassword
    const user = await userRepository.createUser({ ...data })
    if (!user) throw new Error('Error al crear el usuario')
    return user
  },

  login: async (data: LoginSchema) => {
    const user = await userRepository.findByEmail(data.email)
    if (!user) throw new Error('Email no registrado')

    const isValid = await comparePassword(data.password, user.password)
    if (!isValid) throw new Error('Credenciales inválidas')

    const accessToken = generateAccessToken({
      userId: user.id,
      email: user.email
    })
    const refreshToken = generateRefreshToken({ userId: user.id })

    return { user, accessToken, refreshToken }
  },

  refresh: async (token: string) => {
    const payload = verifyRefreshToken(token) as { userId: number }

    const accessToken = generateAccessToken({ userId: payload.userId })
    const newRefreshToken = generateRefreshToken({ userId: payload.userId })

    return { accessToken, refreshToken: newRefreshToken }
  }
}
