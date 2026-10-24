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
    postSaveUserProgress: async (req: Request,res: Response): Promise<void> => {

        try {
            const {user_id,section_id,mission_id,experience_points} = req.body;
            const result = await missionsService.postSaveUserProgress(user_id,section_id,mission_id,experience_points);

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
    },


    getRequiredWorkBySection: async (req: Request, res: Response) => {
        try {
            const result = await missionsService.getRequiredWorkBySection();
            return res.status(200).json(result.required_work);
        } catch (error) {
            console.error("Error al obtener el trabajo requerido por sección:", error);

            return res.status(500).json({
                message: "Error al obtener el trabajo requerido por sección."
            });
        }
    },


    getUserProgressBySection: async (req: Request, res: Response) => {
        try {
            const user_id = Number(req.params.user_id);

            if (!Number.isInteger(user_id) || user_id <= 0) {
                res.status(400).json({
                    message: "El ID del usuario no es válido."
                });
                return;
            }

            const result = await missionsService.getUserProgressBySection(user_id);

            res.status(200).json(result.user_progress);
        } catch (error) {
            console.error("Error al obtener el progreso del usuario por sección:", error);

            res.status(500).json({
                message: "Error al obtener el progreso del usuario por sección."
            });
        }
    },
};
