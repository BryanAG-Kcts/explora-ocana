import { Router } from 'express'
import { authController } from '../controllers/auth.controller'

export const authRouter: Router = Router()
authRouter.post('/login', authController.login)

authRouter.post('/register/user', authController.registerUser)
authRouter.post('/register/user/student', authController.registerUser)
authRouter.post('/register/user/teacher', authController.registerUser)

authRouter.post('/refresh', authController.refresh)

// Resumen del flujo completo
// POST /auth/register  → devuelve { user }
// POST /auth/login     → devuelve { accessToken, refreshToken }
// POST /auth/refresh   → body: { refreshToken } → devuelve nuevos tokens
