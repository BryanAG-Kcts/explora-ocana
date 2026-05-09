import { getLocales } from 'expo-localization'
import { I18n } from 'i18n-js'
import { ES_LOCALE } from './es'

export const i18n = new I18n({
  es: ES_LOCALE
})

export const I18N = i18n

i18n.locale = getLocales()[0].languageCode ?? 'es'
i18n.enableFallback = true
