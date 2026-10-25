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
        return await db.one(`
          SELECT ARRAY(
            SELECT
              (
                SELECT COUNT(*)
                FROM exploraocanna.missions m
                WHERE m.section_id = s.section_id
              )
              +
              (
                SELECT COUNT(*)
                FROM exploraocanna.activities a
                WHERE a.section_id = s.section_id
                  AND a.activity_id LIKE 'quiz%'
              )
            FROM exploraocanna.sections s
            ORDER BY SUBSTRING(s.section_id FROM 2)::INTEGER
          ) AS required_work;
        `);
    },

    getUserProgressBySection: async (user_id: number) => {
        return await db.one(
          `
          SELECT ARRAY(
            SELECT
              (
                SELECT COUNT(DISTINCT up.mission_id)
                FROM exploraocanna.user_progress up
                INNER JOIN exploraocanna.missions m
                  ON m.mission_id = up.mission_id
                WHERE up.user_id = $1
                  AND up.section_id = s.section_id
                  AND up.completed = TRUE
              )
              +
              (
                SELECT COUNT(DISTINCT uap.activity_id)
                FROM exploraocanna.user_activity_progress uap
                INNER JOIN exploraocanna.activities a
                  ON a.activity_id = uap.activity_id
                WHERE uap.user_id = $1
                  AND uap.section_id = s.section_id
                  AND uap.completed = TRUE
                  AND a.activity_id LIKE 'quiz%'
              )
            FROM exploraocanna.sections s
            ORDER BY SUBSTRING(s.section_id FROM 2)::INTEGER
          ) AS user_progress;
          `,
          [user_id]
        );
    },

};
