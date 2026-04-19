import type { RegisterSchema } from '../interfaces/auth.interfaces'
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
        userData.phoneNumber,
        userData.gender,
        userData.countryId,
        userData.departmentId,
        userData.municipalityId,
        userData.documentTypeId,
        userData.document,
        userData.communityId,
        userData.communeId,
        userData.neighborhoodId,
        // ---- Tipo de usuario
        userData.typeUser,
        // ---- Datos de estudiante
        userData.studentId,
        userData.grade,
        // --- Datos de docente
        userData.schoolId,
        userData.teacherId
      ]
    )
  }
}
