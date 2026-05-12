import * as z from 'zod'

export const loginSchema = z.object({
  email: z.email().max(100),
  password: z.string().max(255)
})

export const registerSchema = z.object({
  name: z.string().max(100).min(3, 'El nombre es requerido'),
  lastName: z.string().max(100).min(3, 'El apellido es requerido'),
  email: z.email('Correo electrónico inválido').max(100),
  documentType: z.number().int().positive(),
  documentNumber: z.string().max(15),
  armedConflict: z.boolean(),
  ethnicGroup: z.number().int().positive(), // communityId
  phone: z.string().min(7).max(15),
  phoneExtension: z.string().max(4).min(2),
  gender: z.enum(['M', 'F', 'O']),
  birthdate: z.date().refine(
    date => {
      if (!date) return true
      const parsedDate = Date.parse(date.toString())
      return !Number.isNaN(parsedDate) && new Date(parsedDate) < new Date()
    },
    { message: 'Fecha de nacimiento inválida o en el futuro' }
  ),
  country: z.number().int().positive(), // countryId
  department: z.number().int().positive(), // departmentId
  city: z.number().int().positive(), // municipalityId
  neighborhood: z.number().int().positive(), // neighborhoodId
  school: z.number().int().positive().nullable(), //schoolId
  schoolLevel: z.string().nullable(), // grade_student || grade_teacher
  role: z.enum(['student', 'teacher', 'user']),
  password: z
    .string()
    .max(255)
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
  communeId: z.number().int().positive()
})

export type LoginSchema = z.infer<typeof loginSchema>
export type RegisterSchema = z.infer<typeof registerSchema>
