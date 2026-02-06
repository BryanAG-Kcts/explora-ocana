import * as z from 'zod'

export const loginSchema = z.object({
  email: z.email().max(100),
  password: z.string().max(255)
})

export const registerSchema = z.object({
  name: z.string().max(100),
  lastname: z.string().max(100),
  email: z.email().max(100),
  password: z.string().max(255)
})

export type LoginSchema = z.infer<typeof loginSchema>
export type RegisterSchema = z.infer<typeof registerSchema>
