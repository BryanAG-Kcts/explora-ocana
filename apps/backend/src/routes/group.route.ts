import { Router } from "express";
import { groupController } from "../controllers/group.controller";

export const groupRouter : Router = Router()

groupRouter.post('/teacher/create', groupController.postCreateGroup)
groupRouter.get('/teacher/information/:group_id', groupController.getInformationGroup)
groupRouter.get('/teacher/list-groups/:teacher_id', groupController.getListGroupTeacher)

groupRouter.post('/student/join', groupController.postInscribeGroup)
groupRouter.get('/student/list-groups/school/:student_id', groupController.getListGroupByStudentSchool)