import { Router } from 'express';
import { missionsController } from '../controllers/missions.controller';

export const missionsRouter: Router = Router();

missionsRouter.get('/', missionsController.getAllMissions);
missionsRouter.get('/required-work',missionsController.getRequiredWorkBySection);
missionsRouter.get('/user-progress/:user_id',missionsController.getUserProgressBySection);
missionsRouter.get('/:mission_id', missionsController.getMissionById);
