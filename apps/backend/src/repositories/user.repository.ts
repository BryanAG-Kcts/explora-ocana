import type { RegisterSchema } from '../interfaces/auth.interface'
import { db } from '../services/pg.service'

export const userRepository = {
  findByEmail: async (email: string) => {
    return await db.oneOrNone('SELECT * FROM users WHERE email = $1', [email])
  },

  createUser: async (userData: RegisterSchema & { password: string }) => {
    return await db.oneOrNone(
      `CALL create_full_user ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)  
        RETURNING *`,
      [
        userData.name,
        userData.lastName,
        userData.email,
        userData.password,
        userData.birthdate,
        userData.phone,
        userData.gender,
        userData.country,
        userData.department,
        userData.city,
        userData.documentType,
        userData.documentNumber,
        userData.ethnicGroup,
        userData.communeId, //falta q front lo envíe
        userData.neighborhood,
        // ---- Tipo de usuario
        userData.role, // type_user

        // ---- Datos de estudiante
        userData.schoolLevel, // grade_student || grade_teacher
        userData.school, // Es el mismo teacher_school_id || student_school_id

        // --- Datos de docente
        userData.schoolLevel, // grade_student || grade_teacher
        userData.school
      ]
    )
  },

  getDataBasicUser: async (userId: string) => {
    return await db.oneOrNone(
      `SELECT u.id as "userId", u.racha, u.puntos, u.experiencia
       FROM users u
       WHERE u.id = $1`,
      [userId]
    );
  }
};
