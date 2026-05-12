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
    department: OBJECT_SELECT_SCHEMA,
    city: OBJECT_SELECT_SCHEMA,
    neighborhood: OBJECT_SELECT_SCHEMA,
    school: OBJECT_SELECT_SCHEMA,
    schoolLevel: OBJECT_SELECT_SCHEMA,
    role: OBJECT_SELECT_SCHEMA,
    commune: OBJECT_SELECT_SCHEMA,
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
export const documentTypes = [
  { label: 'C.C.', value: 'CC' },
  { label: 'T.I.', value: 'TI' },
  { label: 'C.E.', value: 'CE' },
  { label: 'P.P.', value: 'PP' }
]
export const genres = [
  { label: 'Masculino', value: 'M' },
  { label: 'Femenino', value: 'F' },
  { label: 'Otro', value: 'O' }
]
export const armedConflicts = [
  { label: 'Sí', value: 'Y' },
  { label: 'No', value: 'N' }
]
export const ethnicGroups = [
  { label: 'Indígena', value: 'indigena' },
  { label: 'Afrocolombiano', value: 'afrocolombiano' },
  { label: 'Raizal', value: 'raizal' },
  { label: 'Palenquero', value: 'palenquero' },
  { label: 'Gitano', value: 'gitano' },
  { label: 'Ninguno', value: 'ninguno' }
]
export const countries = [
  { label: 'Colombia', value: 'colombia' },
  { label: 'Venezuela', value: 'venezuela' },
  { label: 'Otro', value: 'otro' }
]
export const departments = [
  { label: 'Norte de Santander', value: 'norte_de_santander' },
  { label: 'Cesar', value: 'cesar' },
  { label: 'Otro', value: 'otro' }
]
export const cities = [
  { label: 'Ocaña', value: 'ocana' },
  { label: 'Cúcuta', value: 'cucuta' },
  { label: 'Otro', value: 'otro' }
]
export const neighborhoods = [
  { label: 'Centro', value: 'centro' },
  { label: 'San Luis', value: 'san_luis' },
  { label: 'Otro', value: 'otro' }
]
export const schools = [
  {
    label: 'Institución Educativa Francisco de Paula Santander',
    value: 'francisco_de_paula_santander'
  },
  {
    label: 'Institución Educativa Técnica Simón Bolívar',
    value: 'simon_bolivar'
  },
  { label: 'Otro', value: 'otro' }
]
export const schoolLevels = [
  { label: 'Primaria', value: 'primaria' },
  { label: 'Secundaria', value: 'secundaria' },
  { label: 'Técnica', value: 'tecnica' },
  { label: 'Tecnológica', value: 'tecnologica' },
  { label: 'Profesional', value: 'profesional' },
  { label: 'Otro', value: 'otro' }
]
export const roles = [
  { label: 'Estudiante', value: 'estudiante' },
  { label: 'Docente', value: 'docente' },
  { label: 'Ciudadano', value: 'ciudadano' }
]
