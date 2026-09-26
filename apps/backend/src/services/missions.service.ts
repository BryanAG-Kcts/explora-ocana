import { missionsRepository } from "../repositories/missions.repository";

export const missionsService = {
    getAllMissions: async () => {
        return await missionsRepository.getAllMissions();
    },

    getMissionById: async (mission_id: string) => {
        return await missionsRepository.getMissionById(mission_id);
    }
};
