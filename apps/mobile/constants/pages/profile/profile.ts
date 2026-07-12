interface AccountInfo {
  name: string
  lastName: string
  email: string
  documentType: string
  document: string
  gender: string
  armedConflict: string
  ethnicGroup: string
  phone: string
  phoneExtension: string
  birthdate: string
  country: string
  department: string
  city: string
  commune: string
  neighborhood: string
  school: string
  schoolLevel: string
  role: string
}

export const ACCOUNT_DATA: AccountInfo = {
  name: 'Andrés',
  lastName: 'Mendoza',
  email: 'andres.mendoza@ejemplo.com',
  documentType: 'Cédula de Ciudadanía',
  document: '1.098.765.432',
  gender: 'Masculino',
  armedConflict: 'No aplica',
  ethnicGroup: 'Ninguno',
  phone: '300 123 4567',
  phoneExtension: '+57',
  birthdate: '15/05/1998',
  country: 'Colombia',
  department: 'Santander',
  city: 'Bucaramanga',
  commune: 'Comuna 12 - Cabecera del Llano',
  neighborhood: 'Sotomayor',
  school: 'Instituto Técnico Superior',
  schoolLevel: 'Secundaria',
  role: 'Estudiante'
}
