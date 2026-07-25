import { z } from 'zod'

const OBJECT_SELECT_SCHEMA = z.object({
  label: z.string(),
  value: z.string()
})

export const RegisterSchema = z
  .object({
    name: z.string('Debes ingresar un nombre válido'),
    lastName: z.string('Debes ingresar un apellido válido'),
    email: z.email('Debes ingresar un email válido'),
    documentType: OBJECT_SELECT_SCHEMA,
    document: z.string('Debes ingresar un número de documento válido'),
    gender: OBJECT_SELECT_SCHEMA,
    armedConflict: OBJECT_SELECT_SCHEMA,
    ethnicGroup: OBJECT_SELECT_SCHEMA,
    phone: z.string('Debes ingresar un número de celular válido'),
    phoneExtension: z.string('Debes ingresar una extensión telefónica válida'),
    birthdate: z.string('Debes ingresar una fecha de nacimiento válida'),
    country: OBJECT_SELECT_SCHEMA,
    department: OBJECT_SELECT_SCHEMA.optional(),
    city: OBJECT_SELECT_SCHEMA.optional(),
    neighborhood: OBJECT_SELECT_SCHEMA.optional(),
    school: OBJECT_SELECT_SCHEMA,
    schoolLevel: OBJECT_SELECT_SCHEMA,
    role: OBJECT_SELECT_SCHEMA,
    commune: OBJECT_SELECT_SCHEMA.optional(),
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
type ObjectSelect = z.infer<typeof OBJECT_SELECT_SCHEMA>
export type Municipalities = ObjectSelect & { departmentId: string }
export type Neighborhoods = ObjectSelect & { communeId: string }

export interface FormValues {
  countries: ObjectSelect[]
  departments: ObjectSelect[]
  municipalities: Municipalities[]
  communes: ObjectSelect[]
  neighborhoods: Neighborhoods[]
  schools: ObjectSelect[]
  documentTypes: ObjectSelect[]
  educationLevels: ObjectSelect[]
  communities: ObjectSelect[]
}

export const GENDERS = [
  { label: 'Masculino', value: 'M' },
  { label: 'Femenino', value: 'F' },
  { label: 'Otro', value: 'O' }
]

export const ARMED_CONFLICT = [
  { label: 'Sí', value: 'Y' },
  { label: 'No', value: 'N' }
]

export const ROLES = [
  { label: 'Estudiante', value: 'student' },
  { label: 'Docente', value: 'teacher' },
  { label: 'Ciudadano', value: 'user' }
]
export const DEFAULT_OBJECT_SELECT: ObjectSelect = {
  label: '',
  value: ''
}

export const COLOMBIA_COUNTRY_VALUE = '37'
export const OCANA_VALUE = '612'

export const filterCities = (array: Municipalities[], department: string) =>
  array.filter(m => m.departmentId === department)

export const filterNeighborhoods = (array: Neighborhoods[], commune: string) =>
  array.filter(m => m.communeId === commune)
