import { z } from 'zod'

export const RegisterSchema = z
  .object({
    name: z.string('Debes ingresar un nombre válido'),
    lastname: z.string('Debes ingresar un apellido válido'),
    email: z.email('Debes ingresar un email válido'),
    password: z
      .string('Debes ingresar una contraseña')
      .min(6, 'La contraseña debe tener al menos 6 caracteres'),
    confirmPassword: z
      .string('Debes ingresar la contraseña nuevamente')
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword']
  })

export type RegisterSchemaType = z.infer<typeof RegisterSchema>
