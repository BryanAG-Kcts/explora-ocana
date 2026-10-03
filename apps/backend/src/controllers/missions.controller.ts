import type { Request, Response } from "express";
import { missionsService } from "../services/missions.service";

export const missionsController = {
    // Obtener todas las misiones
    getAllMissions: async (_req: Request, res: Response): Promise<void> => {
        try {
            const missions = await missionsService.getAllMissions();

            res.status(200).json(missions);

        } catch (error) {
            console.log("xxxxx ERROR REAL: ", error);

            res.status(500).json({
                error: "error interno al obtener las misiones"
            });
        }
    },

    // Obtener una misión por ID
    getMissionById: async (req: Request, res: Response): Promise<void> => {
        try {
            const { mission_id } = req.params;

            const mission = await missionsService.getMissionById(
                mission_id as string
            );

            if (!mission) {
                res.status(404).json({
                    error: "Misión no encontrada"
                });

                return;
            }

            res.status(200).json(mission);

        } catch (error) {
            console.log("xxxxx ERROR REAL: ", error);

            res.status(500).json({
                error: "error interno al obtener la misión"
            });
        }
    },

    // Guardar el progreso del usuario en una misión
    postSaveUserProgress: async (
        req: Request,
        res: Response
    ): Promise<void> => {

        try {

            const {
                user_id,
                section_id,
                mission_id,
                experience_points
            } = req.body;

            const result = await missionsService.postSaveUserProgress(
                user_id,
                section_id,
                mission_id,
                experience_points
            );

            // La misión ya había sido completada anteriormente
            if (!result.progress) {
                res.status(200).json({
                    message: "El usuario ya había completado esta misión anteriormente.",
                    experience_awarded: false
                });
                return;
            }

            // Primera vez que completa la misión
            res.status(201).json({
                message: "Misión completada y experiencia otorgada.",
                experience_awarded: true,
                progress: result.progress,
                experience: result.experience
            });

        } catch (error) {

            console.error("xxxx ERROR REAL:", error);

            res.status(500).json({
                error: "Error interno al guardar el progreso"
            });
        }
    }
};
