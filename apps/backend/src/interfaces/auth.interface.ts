import * as z from 'zod'

export const loginSchema = z.object({
  email: z.email().max(100),
  password: z.string().max(255)
})

export const registerSchema = z.object({
  name: z.string().max(100).min(3, 'El nombre es requerido'),
  lastName: z.string().max(100).min(3, 'El apellido es requerido'),
  email: z.email('Correo electrónico inválido').max(100),
  documentType: z.string(),
  document: z.string().max(15),
  armedConflict: z.boolean(),
  ethnicGroup: z.string(),
  phone: z.string().min(7).max(15),
  phoneExtension: z.string().max(4).min(2),
  gender: z.enum(['M', 'F', 'O']),
  birthdate: z.string().refine(
    date => {
      if (!date) return true
      const parsedDate = Date.parse(date)
      return !Number.isNaN(parsedDate) && new Date(parsedDate) < new Date()
    },
    { message: 'Fecha de nacimiento inválida o en el futuro' }
  ),
  country: z.string(),
  department: z.string().optional(),
  city: z.string().optional(),
  neighborhood: z.string().optional(),
  school: z.string().nullable(),
  schoolLevel: z.string(),
  role: z.enum(['student', 'teacher', 'user']),
  password: z
    .string()
    .max(255)
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
  commune: z.string().optional()
})

export type LoginSchema = z.infer<typeof loginSchema>
export type RegisterSchema = z.infer<typeof registerSchema>
