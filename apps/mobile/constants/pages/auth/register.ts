import { z } from 'zod'

export const RegisterSchema = z
  .object({
    name: z.string('Debes ingresar un nombre válido'),
    lastName: z.string('Debes ingresar un apellido válido'),
    email: z.email('Debes ingresar un email válido'),
    documentType: z.object({
      label: z.string(),
      value: z.string()
    }),
    documentNumber: z.string('Debes ingresar un número de documento válido'),
    genre: z.object({
      label: z.string(),
      value: z.string()
    }),
    armedConflict: z.object({
      label: z.string(),
      value: z.string()
    }),
    ethnicGroup: z.object({
      label: z.string(),
      value: z.string()
    }),
    phone: z.string('Debes ingresar un número de celular válido'),
    phoneExtension: z.string('Debes ingresar una extensión telefónica válida'),
    birthdate: z.string('Debes ingresar una fecha de nacimiento válida'),
    country: z.object({
      label: z.string(),
      value: z.string()
    }),
    department: z.object({
      label: z.string(),
      value: z.string()
    }),
    city: z.object({
      label: z.string(),
      value: z.string()
    }),
    neighborhood: z.object({
      label: z.string(),
      value: z.string()
    }),
    school: z.object({
      label: z.string(),
      value: z.string()
    }),
    schoolLevel: z.object({
      label: z.string(),
      value: z.string()
    }),
    role: z.object({
      label: z.string(),
      value: z.string()
    }),
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
