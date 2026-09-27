import { Router } from 'express';
import { missionsController } from '../controllers/missions.controller';

export const missionsRouter: Router = Router();

missionsRouter.get('/', missionsController.getAllMissions);
missionsRouter.get('/:mission_id', missionsController.getMissionById);
