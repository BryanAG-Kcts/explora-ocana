import { z } from 'zod'
import { i18n } from '@/constants/global/i18n'

export const LoginSchema = z.object({
  email: z.email(i18n.t('authValidations.email')),
  password: z
    .string(i18n.t('authValidations.password'))
    .min(6, i18n.t('authValidations.passwordMinLength'))
})

export type LoginSchemaType = z.infer<typeof LoginSchema>
