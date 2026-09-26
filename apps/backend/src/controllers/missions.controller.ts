import type { Request, Response } from "express";
import { missionsService } from "../services/missions.service";

export const missionsController = {
    getAllMissions: async (_req: Request, res: Response): Promise<void> => {
        try{
            const missions = await missionsService.getAllMissions();
            res.status(200).json(missions);
        } catch (error) {
            console.log("xxxxx ERROR REAL: ", error);
            res.status(500).json({ error: "error interno al obtener las misiones" });
        }
    },

    getMissionById: async (req: Request, res: Response): Promise<void> => {
        try {
            const { mission_id } = req.params;
            const mission = await missionsService.getMissionById(mission_id as string);

            if (!mission) {
                res.status(404).json({ error: "Misión no encontrada" });
                return;
            }
            res.status(200).json(mission);
        } catch (error) {
            res.status(500).json({ error: "error interno al obtener la misión" });
        }
    }
};
