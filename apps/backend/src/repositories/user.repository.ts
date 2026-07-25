import type { RegisterSchema } from '../interfaces/auth.interface'
import { informationUser, ProfilelUser } from '../interfaces/user.interface';
import { db } from '../services/pg.service'

export const userRepository = {
  findByEmail: async (email: string) => {
    return await db.oneOrNone('SELECT * FROM users WHERE email = $1', [email])
  },

  createUser: async (userData: RegisterSchema & { password: string }) => {
    return await db.oneOrNone(
      'CALL public.create_full_user($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)',
      [
        userData.name,
        userData.lastName,
        userData.email,
        userData.password,
        new Date(userData.birthdate),
        userData.phone,
        userData.gender,
        userData.country,
        userData.department,
        userData.city,
        userData.documentType,
        userData.document,
        userData.ethnicGroup,
        userData.armedConflict,
        userData.commune,
        userData.neighborhood,
        userData.role,

        // ---- Datos de estudiante
        userData.schoolLevel,
        userData.school,

        // --- Datos de docente
        userData.schoolLevel, // grade_student || grade_teacher
        userData.school
      ]
    )
  },

  getProfileUser: async (userId: number) : Promise<ProfilelUser | null> => {
    return await db.oneOrNone(
      `SELECT
        u.name,
        u.last_name,
        ue.streak_days,
        ue.experience_points
      FROM exploraocanna.users u
      LEFT JOIN exploraocanna.user_experience ue ON ue.user_id = u.user_id
      WHERE u.user_id = $1;`, [userId]
    )
  },

  getInformationUser: async (userId: number) : Promise<informationUser | null> => {
    return await db.oneOrNone(
      `SELECT
        u.name,
        u.last_name,
        dt.name AS document_type,
        u.document,
        u.birthdate,
        u.gender,
        u.email,
        u.phone_number,
        co.name AS country,
        dp.name AS department,
        mu.name AS municipality,
        nb.neighborhood_name AS neighborhood,
        cm.commune_name AS commune,
        CASE
            WHEN st.student_id IS NOT NULL THEN 'Estudiante'
            WHEN te.teacher_id IS NOT NULL THEN 'Docente'
        END AS role,
        COALESCE(ssch.name, tsch.name) AS school,
        COALESCE(st.grade::text, el.name) AS education_level,
        cty.community_name AS ethnic_group,
        u.armedconflict AS conflict_victim
      FROM exploraocanna.users u
      LEFT JOIN exploraocanna.document_types dt ON dt.document_type_id = u.document_type_id
      LEFT JOIN exploraocanna.countries co ON co.country_id = u.country_id
      LEFT JOIN exploraocanna.departments dp ON dp.department_id = u.department_id
      LEFT JOIN exploraocanna.municipality mu ON mu.municipality_id = u.municipality_id
      LEFT JOIN exploraocanna.neighborhoods nb ON nb.neighborhood_id = u.neighborhood_id
      LEFT JOIN exploraocanna.communes cm ON cm.commune_id = u.commune_id
      LEFT JOIN exploraocanna.communities cty ON cty.community_id = u.community_id
      LEFT JOIN exploraocanna.student st ON st.user_id = u.user_id
      LEFT JOIN exploraocanna.teacher te ON te.user_id = u.user_id
      LEFT JOIN exploraocanna.schools ssch ON ssch.school_id = st.school_id
      LEFT JOIN exploraocanna.schools tsch ON tsch.school_id = te.school_id
      LEFT JOIN exploraocanna.education_levels el ON el.education_level_id = te.education_level_id
      WHERE u.user_id = $1;`, [userId]
    )
  }
}
