import { Router } from 'express'
import { userController } from '../controllers/user.controller'

export const userRouter : Router = Router()

userRouter.get('/:id/profile', userController.getProfileUser)
userRouter.get('/:id/information', userController.getInformationUser)