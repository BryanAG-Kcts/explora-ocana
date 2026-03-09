import { hashPassword, comparePassword } from '../constants/bcrypt'
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from '../constants/jwt'
import { userRepository, refreshTokenRepository } from '../repositories/user.repositories'
import type { LoginSchema, RegisterSchema } from '../interfaces/auth.interfaces'

export const authService = {
  register: async (data: RegisterSchema) => {
    const existingUser = await userRepository.findByEmail(data.email)
    if (existingUser) throw new Error('EMAIL_IN_USE')

    const hashedPassword = await hashPassword(data.password)
    const user = await userRepository.create({ ...data, password: hashedPassword })
    if (!user) throw new Error('REGISTER_FAILED')

    // const accessToken = generateAccessToken({ userId: user.id, email: user.email })
    // const refreshToken = generateRefreshToken({ userId: user.id })

    // await refreshTokenRepository.save(user.id, refreshToken)

    // return { accessToken, refreshToken }
    return user
  },

  login: async (data: LoginSchema) => {
    const user = await userRepository.findByEmail(data.email)
    if (!user) throw new Error('Email no registrado')

    const isValid = await comparePassword(data.password, user.password)
    if (!isValid) throw new Error('Credenciales inválidas')

    const accessToken = generateAccessToken({ userId: user.id, email: user.email })
    const refreshToken = generateRefreshToken({ userId: user.id })

    await refreshTokenRepository.save(user.id, refreshToken)

    return { accessToken, refreshToken }
  },

  refresh: async (token: string) => {
    const stored = await refreshTokenRepository.findByToken(token)
    if (!stored) throw new Error('INVALID_REFRESH_TOKEN')

    const payload = verifyRefreshToken(token) as { userId: number }

    // Rotación: eliminamos el viejo y generamos uno nuevo
    await refreshTokenRepository.deleteByToken(token)

    const accessToken = generateAccessToken({ userId: payload.userId })
    const newRefreshToken = generateRefreshToken({ userId: payload.userId })

    await refreshTokenRepository.save(payload.userId, newRefreshToken)

    return { accessToken, refreshToken: newRefreshToken }
  },

  logout: async (token: string) => {
    await refreshTokenRepository.deleteByToken(token)
  }
}