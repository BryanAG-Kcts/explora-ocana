import { missionsRepository } from "../repositories/missions.repository";

export const missionsService = {

    getAllMissions: async () => {
        return await missionsRepository.getAllMissions();
    },


    getMissionById: async (mission_id: string) => {
        return await missionsRepository.getMissionById(mission_id);
    },


    postSaveUserProgress: async (
        user_id: number,
        section_id: string,
        mission_id: string,
        experience_points: number
    ) => {

        return await missionsRepository.postSaveUserProgress(
            user_id,
            section_id,
            mission_id,
            experience_points
        );
    },

    getRequiredWorkBySection: async () => {
        return await missionsRepository.getRequiredWorkBySection();
    },

    getUserProgressBySection: async (user_id: number) => {
        return await missionsRepository.getUserProgressBySection(user_id);
    },
};
