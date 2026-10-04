import type { Mission } from "../interfaces/missions.interface";
import { db } from "../services/pg.service";

export const missionsRepository = {

    // Trae todas las misiones
    getAllMissions: async (): Promise<Mission[]> => {
        return await db.manyOrNone(
            `
            SELECT
                mission_id AS "missionId",
                section_id AS "sectionId",
                title,
                description,
                position
            FROM exploraocanna.missions
            ORDER BY position
            `
        );
    },

    // Trae una misión específica
    getMissionById: async (
        mission_id: string
    ): Promise<Mission | null> => {
        return await db.oneOrNone(
            `
            SELECT
                mission_id AS "missionId",
                section_id AS "sectionId",
                title,
                description,
                position
            FROM exploraocanna.missions
            WHERE mission_id = $1
            `,
            [mission_id]
        );
    },

    // Guarda el progreso de la misión y, si es la primera vez,
    // otorga la experiencia, actualiza el rango y actualiza la racha.
    postSaveUserProgress: async (
        user_id: number,
        section_id: string,
        mission_id: string,
        experience_points: number
    ) => {

        return await db.tx(async (t) => {

            // 1. Intentamos registrar el progreso
            const progress = await t.oneOrNone(
                `
                INSERT INTO exploraocanna.user_progress
                    (
                        user_id,
                        section_id,
                        mission_id,
                        completed,
                        completed_at
                    )
                VALUES
                    (
                        $1,
                        $2,
                        $3,
                        TRUE,
                        NOW()
                    )
                ON CONFLICT (user_id, mission_id)
                DO NOTHING
                RETURNING *;
                `,
                [
                    user_id,
                    section_id,
                    mission_id
                ]
            );

            // 2. Si la misión ya había sido completada,
            // no damos experiencia.
            if (!progress) {

                // Actualizamos la racha porque el usuario
                // igualmente jugó hoy.
                const streak = await t.one(
                    `
                    UPDATE exploraocanna.user_experience
                    SET
                        streak_days =
                            CASE
                                -- Nunca había jugado
                                WHEN last_activity IS NULL
                                    THEN 1

                                -- Ya jugó hoy:
                                -- la racha no aumenta nuevamente
                                WHEN last_activity::date = CURRENT_DATE
                                    THEN streak_days

                                -- Jugó ayer:
                                -- aumentamos la racha
                                WHEN last_activity::date = CURRENT_DATE - 1
                                    THEN streak_days + 1

                                -- No jugó ayer:
                                -- comenzamos una nueva racha
                                ELSE 1
                            END,

                        last_activity = NOW()

                    WHERE user_id = $1

                    RETURNING
                        user_id,
                        experience_points,
                        rank_id,
                        streak_days,
                        last_activity;
                    `,
                    [user_id]
                );

                return {
                    progress: null,
                    experience: null,
                    streak
                };
            }

            // 3. Primera vez que completa la misión:
            // sumamos la experiencia y calculamos el nuevo rango.
            const experience = await t.one(
                `
                UPDATE exploraocanna.user_experience ue
                SET
                    experience_points =
                        ue.experience_points + $2,

                    rank_id = (
                        SELECT r.rank_id
                        FROM exploraocanna.ranks r
                        WHERE r.required_xp <=
                            ue.experience_points + $2
                        ORDER BY r.required_xp DESC
                        LIMIT 1
                    )

                WHERE ue.user_id = $1

                RETURNING
                    ue.user_id,
                    ue.experience_points,
                    ue.rank_id,
                    ue.streak_days,
                    ue.last_activity;
                `,
                [
                    user_id,
                    experience_points
                ]
            );

            // 4. Actualizamos la racha.
            // Esto se hace cuando el usuario completa una misión.
            const streak = await t.one(
                `
                UPDATE exploraocanna.user_experience
                SET
                    streak_days =
                        CASE
                            -- Nunca había jugado
                            WHEN last_activity IS NULL
                                THEN 1

                            -- Ya jugó hoy:
                            -- no aumentamos la racha
                            WHEN last_activity::date = CURRENT_DATE
                                THEN streak_days

                            -- Jugó ayer:
                            -- aumentamos la racha
                            WHEN last_activity::date = CURRENT_DATE - 1
                                THEN streak_days + 1

                            -- No jugó ayer:
                            -- comenzamos una nueva racha
                            ELSE 1
                        END,

                    last_activity = NOW()

                WHERE user_id = $1

                RETURNING
                    user_id,
                    experience_points,
                    rank_id,
                    streak_days,
                    last_activity;
                `,
                [user_id]
            );

            // 5. Devolvemos el progreso,
            // la experiencia y la racha actualizada.
            return {
                progress,
                experience,
                streak
            };
        });
    },

   getRequiredWorkBySection: async () => {
        return await db.one(
        `
        SELECT ARRAY(
            SELECT
                COUNT(DISTINCT m.mission_id)
                +
                COUNT(
                    DISTINCT CASE
                        WHEN a.required = TRUE
                        THEN a.activity_id
                    END
                )
            FROM exploraocanna.sections s
            LEFT JOIN exploraocanna.missions m
                ON s.section_id = m.section_id
            LEFT JOIN exploraocanna.activities a
                ON s.section_id = a.section_id
            GROUP BY s.section_id
            ORDER BY s.section_id
        ) AS required_work;
        `
        );
    },

    getUserProgressBySection: async (user_id: number) => {
        return await db.one(
        `
        SELECT ARRAY(
            SELECT
                COUNT(DISTINCT up.mission_id)
                +
                COUNT(DISTINCT uap.activity_id)
            FROM exploraocanna.sections s

            LEFT JOIN exploraocanna.user_progress up
                ON s.section_id = up.section_id
                AND up.user_id = $1

            LEFT JOIN exploraocanna.user_activity_progress uap
                ON s.section_id = uap.section_id
                AND uap.user_id = $1

            GROUP BY s.section_id
            ORDER BY s.section_id
        ) AS user_progress;
        `,
        [user_id]
        );
    },
};
