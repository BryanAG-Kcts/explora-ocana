import { Router } from 'express'
import { dataController } from '../controllers/data.controller'

export const dataRouter : Router = Router()

dataRouter.get('/register', dataController.getDataRegister)
dataRouter.get('/ranking/students', dataController.getPodioStudents)
dataRouter.get('/ranking/grades', dataController.getPodioGrades)