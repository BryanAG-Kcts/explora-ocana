import { z } from 'zod'
import type { User } from '@/hooks/userStore'
import { i18n } from '@/locales/i18n'

export const LoginSchema = z.object({
  email: z.email(i18n.t('VALIDATOR.EMAIL')),
  password: z
    .string(i18n.t('VALIDATOR.PASSWORD'))
    .min(6, i18n.t('VALIDATOR.PASSWORD_MINLENGTH'))
})

export type LoginSchemaType = z.infer<typeof LoginSchema>

export interface LoginResponse {
  accessToken: string
  refreshToken: string
  user: User
}
