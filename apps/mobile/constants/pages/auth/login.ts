import { z } from 'zod'

export const LoginSchema = z.object({
  email: z
    .email('Debes ingresar un email válido')
    .min(1, 'Debes ingresar un email válido'),
  password: z
    .string('Debes ingresar una contraseña')
    .min(1, 'Debes ingresar una contraseña')
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
})

export type LoginSchemaType = z.infer<typeof LoginSchema>
