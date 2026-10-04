import type { Activity } from "../interfaces/activities.interface";
import { db } from "../services/pg.service";

export const activitiesRepository = {

    // Trae todas las actividades
    getAllActivities: async (): Promise<Activity[]> => {
        return await db.manyOrNone(
            `
            SELECT
                activity_id AS "activityId",
                section_id AS "sectionId",
                title,
                description
            FROM exploraocanna.activities
            ORDER BY activity_id
            `
        );
    },

    // Trae una actividad específica
    getActivityById: async (
        activity_id: string
    ): Promise<Activity | null> => {
        return await db.oneOrNone(
            `
            SELECT
                activity_id AS "activityId",
                section_id AS "sectionId",
                title,
                description
            FROM exploraocanna.activities
            WHERE activity_id = $1
            `,
            [activity_id]
        );
    },

    // Guarda el progreso de la actividad y, si es la primera vez,
    // otorga la experiencia, actualiza el rango y actualiza la racha.
    postSaveUserActivityProgress: async (
        user_id: number,
        section_id: string,
        activity_id: string,
        experience_points: number
    ) => {

        return await db.tx(async (t) => {

            // 1. Intentamos registrar el progreso de la actividad
            const progress = await t.oneOrNone(
                `
                INSERT INTO exploraocanna.user_activity_progress
                    (
                        user_id,
                        section_id,
                        activity_id,
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
                ON CONFLICT (user_id, activity_id)
                DO NOTHING
                RETURNING *;
                `,
                [
                    user_id,
                    section_id,
                    activity_id
                ]
            );

            // 2. Si ya había realizado la actividad,
            // no damos experiencia.
            if (!progress) {

                // Actualizamos la racha porque el usuario
                // igualmente realizó una actividad hoy.
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

            // 3. Primera vez que realiza la actividad:
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

    postSaveUserActivityResponse: async (user_id: number,activity_id: string,response: string) => {
        return await db.oneOrNone(
        `
            INSERT INTO exploraocanna.user_activity_responses
            (
                user_id,
                activity_id,
                response
            )
            VALUES
            (
                $1,
                $2,
                $3
            )
            ON CONFLICT (user_id, activity_id)
            DO NOTHING

            RETURNING
            response_id,
            user_id,
            activity_id,
            response,
            created_at;
            `,
        [
            user_id,
            activity_id,
            response
        ]
        );
    },
};
