import { activitiesRepository } from "../repositories/activities.repository";

export const activitiesService = {

    // Trae todas las actividades
    getAllActivities: async () => {
        return await activitiesRepository.getAllActivities();
    },

    // Trae una actividad específica
    getActivityById: async (
        activity_id: string
    ) => {
        return await activitiesRepository.getActivityById(activity_id);
    },

    // Guarda el progreso de una actividad
    postSaveUserActivityProgress: async (
        user_id: number,
        section_id: string,
        activity_id: string,
        experience_points: number
    ) => {
        return await activitiesRepository.postSaveUserActivityProgress(
            user_id,
            section_id,
            activity_id,
            experience_points
        );
    }
};
