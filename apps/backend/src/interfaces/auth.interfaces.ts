import * as z from 'zod'

export const loginSchema = z.object({
  email: z.email().max(100),
  password: z.string().max(255)
})

export const registerSchema = z.object({
  name: z.string().max(100).min(3, 'El nombre es requerido'),
  lastName: z.string().max(100).min(3, 'El apellido es requerido'),
  email: z.email('Correo electrónico inválido').max(100),
  password: z
    .string()
    .max(255)
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
    birthdate: z
      .date()
      .refine(
        date => {
          if (!date) return true
          const parsedDate = Date.parse(date.toString())
          return !Number.isNaN(parsedDate) && new Date(parsedDate) < new Date()
        },
        { message: 'Fecha de nacimiento inválida o en el futuro' }
      ),
  phoneNumber: z.string().min(7).max(15),
  gender: z.enum(['M', 'F', 'O']),
  countryId: z.number().int().positive(),
  departmentId: z.number().int().positive(),
  municipalityId: z.number().int().positive(),
  documentTypeId: z.number().int().positive(),
  document: z.string().max(15),
  communityId: z.number().int().positive(),
  communeId: z.number().int().positive(),
  neighborhoodId: z.number().int().positive(),
  typeUser: z.enum(['student', 'teacher', 'user']),
  studentId: z
    .string()
    .min(1)
    .max(20, 'El código de estudiante no puede superar 20 caracteres').nullable(),
  grade: z.string().nullable(),
  schoolId : z.number().int().positive().nullable(),
  teacherId: z
    .string()
    .min(1)
    .max(20, 'El código de docente no puede superar 20 caracteres').nullable(),
})


export type LoginSchema = z.infer<typeof loginSchema>
export type RegisterSchema = z.infer<typeof registerSchema>

export interface User {
  userId: number
  name: string
  lastName: string
  email: string
  password: string
  birthdate: Date
  phoneNumber: string
  gender: 'M' | 'F' | 'O'
  countryId: number
  departmentId: number
  municipalityId: number
  documentTypeId: number
  document: string
  communityId: number
  communeId: number
  neighborhoodId: number
}

export interface Student {
  studentId: string
  grade: number
  schoolId: number
  userId: number
}

export interface Teacher {
  teacherId: string
  schoolId: number
  userId: number
}

// export type UserPublicDto = Omit<User, 'userId'>;
