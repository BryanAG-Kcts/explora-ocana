// import { comparePassword } from '../constants/bcrypt'
// import type { LoginSchema, RegisterSchema } from '../interfaces/auth.interfaces'
// import { db } from '../services/pg.service'

// export const userRepository = {
//   login: async (loginData: LoginSchema) => {
//     const user = await db.oneOrNone('SELECT * FROM users WHERE email = $1', [
//       loginData.email
//     ])

//     if (!user) return null
//     const isPasswordValid = await comparePassword(
//       loginData.password,
//       user.password
//     )

//     if (!isPasswordValid) return null
//     return user
//   },
//   register: async (registerData: RegisterSchema) => {
//     try {
//       const user = await db.oneOrNone(
//         'INSERT INTO users (name, lastname, email, password, birthdate) VALUES ($1, $2, $3, $4, $5) RETURNING *',
//         [
//           registerData.name,
//           registerData.lastname,
//           registerData.email,
//           registerData.password,
//           new Date()
//         ]
//       )

//       return user
//     } catch (e) {
//       console.log(e)
//       return null
//     }
//   }
// }

import type { RegisterSchema } from '../interfaces/auth.interfaces'
import { db } from '../services/pg.service'

export const userRepository = {
  findByEmail: async (email: string) => {
    return db.oneOrNone('SELECT * FROM users WHERE email = $1', [email])
  },

  create: async (registerData: RegisterSchema & { password: string }) => {
    return db.oneOrNone(
      'INSERT INTO users (name, lastname, email, password, birthdate) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [
        registerData.name,
        registerData.lastname,
        registerData.email,
        registerData.password,
        new Date()
      ]
    )
  }
}

export const refreshTokenRepository = {
  save: async (userId: number, token: string) => {
    return db.none(
      'INSERT INTO refresh_tokens (user_id, token) VALUES ($1, $2)', 
      [userId, token]
    )
  },

  findByToken: async (token: string) => {
    return db.oneOrNone('SELECT * FROM refresh_tokens WHERE token = $1', [token])
  },

  deleteByToken: async (token: string) => {
    return db.none('DELETE FROM refresh_tokens WHERE token = $1', [token])
  },

  deleteAllByUserId: async (userId: number) => {
    return db.none('DELETE FROM refresh_tokens WHERE user_id = $1', [userId])
  }
}