import { Router } from 'express'
import { authController } from '../controllers/auth.controllers'

export const authRouter: Router = Router()
authRouter.post('/login', authController.login)
authRouter.post('/register', authController.register)
authRouter.post('/refresh', authController.refresh)
authRouter.post('/logout', authController.logout)

// Resumen del flujo completo
// POST /auth/register  → devuelve { accessToken, refreshToken }
// POST /auth/login     → devuelve { accessToken, refreshToken }
// POST /auth/refresh   → body: { refreshToken } → devuelve nuevos tokens
// POST /auth/logout    → body: { refreshToken } → invalida la sesión
