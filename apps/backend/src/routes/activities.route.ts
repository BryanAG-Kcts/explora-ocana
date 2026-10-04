import { Router } from "express";
import { activitiesController } from "../controllers/activities.controller";

export const activitiesRouter: Router = Router();

activitiesRouter.get("/",activitiesController.getAllActivities);
activitiesRouter.post("/save-progress",activitiesController.postSaveUserActivityProgress);
activitiesRouter.get("/:activity_id",activitiesController.getActivityById);
