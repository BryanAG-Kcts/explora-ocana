import { getLocales } from 'expo-localization'
import { I18n } from 'i18n-js'

export const i18n = new I18n({
  es: {
    login: {
      title: 'Bienvenido de ',
      strongTitle: 'vuelta',
      description:
        'Inicia sesión para descubrir la historia que nos une y explorar más sobre Ocaña',
      doNotHaveAccount: '¿No tienes cuenta? ',
      registerHere: 'Regístrate aquí',
      emailLabel: 'Correo electrónico',
      emailHint: 'Ejemplo@email.com',
      passwordLabel: 'Contraseña',
      passwordHint: 'Tu contraseña aquí',
      passwordForgot: '¿Olvidaste tu contraseña?',
      loginButton: 'Iniciar sesión'
    },
    register: {
      title: 'Crea tu ',
      strongTitle: 'cuenta',
      allReadyHaveAccount: '¿Ya tienes cuenta? ',
      loginHere: 'Inicia sesión aquí',
      nameLabel: 'Nombres',
      nameHint: 'Ingresa tu nombre',
      lastNameLabel: 'Apellidos',
      lastNameHint: 'Ingresa tus apellidos',
      emailLabel: 'Email',
      emailHint: 'Ejemplo@email.com',
      phoneLabel: 'Celular',
      phoneHint: 'Ingresa tu número de celular',
      documentNumberLabel: 'Documento',
      documentNumberHint: 'Ingresa tu documento',
      passwordLabel: 'Contraseña',
      passwordHint: 'Ingresa tu contraseña',
      confirmPasswordLabel: 'Confirmar contraseña',
      confirmPasswordHint: 'Ingresa nuevamente tu contraseña',
      phoneExtensionLabel: 'Ext.',
      phoneExtensionHint: '57',
      birthdateLabel: 'Fecha de nacimiento',
      birthdateHint: 'DD/MM/AAAA',
      personalDataTitle: 'Datos personales',
      documentTypeLabel: 'Tipo',
      genreLabel: 'Género',
      armedConflictLabel: '¿Víctima de conflicto armado?',
      ethnicGroupLabel: '¿Grupo étnico?',
      countryLabel: 'País',
      departmentLabel: 'Departamento',
      cityLabel: 'Ciudad',
      neighborhoodLabel: 'Barrio',
      schoolLabel: 'Colegio',
      schoolLevelLabel: 'Grado',
      roleLabel: 'Rol',
      registerButton: 'Registrarse',
      userDataTitle: 'Datos de usuario'
    },
    authValidations: {
      email: 'Debes ingresar un correo electrónico válido',
      password: 'Debes ingresar una contraseña',
      passwordMinlength: 'La contraseña debe tener al menos 6 caracteres'
    }
  }
})

i18n.locale = getLocales()[0].languageCode ?? 'es'
i18n.enableFallback = true
