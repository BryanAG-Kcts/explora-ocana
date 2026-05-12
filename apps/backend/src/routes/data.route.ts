import { Router } from 'express'
import { masterDataController } from '../controllers/data.controller'

export const dataRouter : Router = Router()

dataRouter.get('/register', masterDataController.getAllMasterData)