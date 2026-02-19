import { date, z } from 'zod'

export const CitizenRegisterSchema = z
  .object({
    name: z.string('Debes ingresar un nombre válido'),
    lastname: z.string('Debes ingresar un apellido válido'),
    email: z.email('Debes ingresar un email válido'),
    cellphone: z.string('Debes ingresar un número de celular válido'),
    school: z.string('Debes ingresar el nombre de tu institución educativa'),
    dateOfBirth: date('Debes ingresar una fecha de nacimiento válida'),
    sex: z.enum(
      ['Masculino', 'Femenino', 'Otro'],
      'Debes seleccionar un sexo válido'
    ),
    armedConflict: z.string(
      'Debes ingresar si eres víctima del conflicto armado'
    ),
    ethicalCommunity: z.string(
      'Debes ingresar si perteneces a una comunidad étnica'
    ),
    cityOfBirth: z.string('Debes ingresar tu ciudad de nacimiento'),
    schoolGrade: z.string('Debes ingresar tu grado escolar'),
    documentType: z.string('Debes ingresar el tipo de documento que posees'),
    document: z.string('Debes ingresar el número de tu documento'),
    commune: z.string('Debes ingresar tu comuna de residencia'),
    neighborhood: z.string('Debes ingresar tu barrio de residencia'),
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

export type CitizenRegisterSchemaType = z.infer<typeof CitizenRegisterSchema>
