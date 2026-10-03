import type { Request, Response } from "express";
import { activitiesService } from "../services/activities.service";

export const activitiesController = {

    // Obtener todas las actividades
    getAllActivities: async (
        _req: Request,
        res: Response
    ): Promise<void> => {

        try {
            const activities =
                await activitiesService.getAllActivities();
            res.status(200).json(activities);
        } catch (error) {
            console.error("xxxxx ERROR REAL:", error);
            res.status(500).json({
                error: "Error interno al obtener las actividades"
            });
        }
    },

    // Obtener una actividad por ID
    getActivityById: async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const { activity_id } = req.params;
            const activity =
                await activitiesService.getActivityById(
                    activity_id as string
                );
            if (!activity) {
                res.status(404).json({
                    error: "Actividad no encontrada"
                });
                return;
            }
            res.status(200).json(activity);
        } catch (error) {
            console.error("xxxxx ERROR REAL:", error);
            res.status(500).json({
                error: "Error interno al obtener la actividad"
            });
        }
    },

    // Guardar progreso de una actividad
    postSaveUserActivityProgress: async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const {user_id,section_id,activity_id,experience_points} = req.body;

            const result = await activitiesService.postSaveUserActivityProgress(user_id,section_id,activity_id,experience_points);

            // La actividad ya había sido realizada anteriormente
            if (!result.progress) {
                res.status(200).json({
                    message: "El usuario ya había realizado esta actividad anteriormente.",
                    experience_awarded: false,
                    streak: result.streak
                });
                return;
            }

            // Primera vez que realiza la actividad
            res.status(201).json({

                message:
                    "Actividad completada y experiencia otorgada.",
                experience_awarded: true,
                progress: result.progress,
                experience: result.experience,
                streak: result.streak
            });

        } catch (error) {
            console.error("xxxx ERROR REAL:", error);
            res.status(500).json({
                error:
                    "Error interno al guardar el progreso de la actividad"
            });
        }
    }
};
