import { Router } from 'express'
import { authController } from '../controllers/auth.controllers'

export const authRouter: Router = Router()
authRouter.post('/login', authController.login)
authRouter.post('/register', authController.register)
