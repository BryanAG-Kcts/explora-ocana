import { z } from 'zod'

export const RegisterSchema = z
  .object({
    name: z
      .string('Debes ingresar un nombre válido')
      .min(1, 'Tu nombre debe tener al menos 1 carácter'),
    lastname: z
      .string('Debes ingresar un apellido válido')
      .min(1, 'Tu apellido debe tener al menos 1 carácter'),
    email: z
      .email('Debes ingresar un email válido')
      .min(1, 'Debes ingresar un email válido'),
    password: z
      .string('Debes ingresar una contraseña')
      .min(1, 'Debes ingresar una contraseña')
      .min(6, 'La contraseña debe tener al menos 6 caracteres'),
    confirmPassword: z
      .string('Debes ingresar la contraseña nuevamente')
      .min(1, 'Debes ingresar una contraseña')
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword']
  })

export type RegisterSchemaType = z.infer<typeof RegisterSchema>
