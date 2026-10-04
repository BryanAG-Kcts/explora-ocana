import { Router } from "express";
import { activitiesController } from "../controllers/activities.controller";

export const activitiesRouter: Router = Router();

activitiesRouter.get("/",activitiesController.getAllActivities);
activitiesRouter.post("/save-progress",activitiesController.postSaveUserActivityProgress);
activitiesRouter.post("/save-response",activitiesController.postSaveUserActivityResponse);
activitiesRouter.get("/:activity_id",activitiesController.getActivityById);
