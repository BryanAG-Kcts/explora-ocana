
import { Mission } from '../interfaces/missions.interface';
import { db } from '../services/pg.service';

export const missionsRepository = {
    getAllMissions: async (): Promise<Mission[]> => {
        return await db.manyOrNone(
            `SELECT
                mission_id,
                section_id,
                title,
                description
            FROM missions
            ORDER BY mission_id`
        );
    },

    getMissionById: async (mission_id: string): Promise<Mission | null> => {
        return await db.oneOrNone(
            `SELECT
                mission_id,
                section_id,
                title,
                description
            FROM missions
            WHERE mission_id = $1`,
            [mission_id]
        );
    }

}
