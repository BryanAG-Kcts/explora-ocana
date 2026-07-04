import { zodResolver } from '@hookform/resolvers/zod'
import { Lock, Mail } from 'lucide-react-native'
import { useState } from 'react'
import { Controller, type SubmitHandler, useForm } from 'react-hook-form'
import { View } from 'react-native'
import { FormInput } from '@/components/global/formInput'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { LoginSchema, type LoginSchemaType } from '@/constants/pages/auth/login'
import { i18n } from '@/locales/i18n'
import { ForgotPassword } from './forgotPassword'

export function LoginForm() {
  const { control, handleSubmit } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema)
  })

  const [isForgotModalVisible, setIsForgotModalVisible] = useState(false)
  const onSubmit: SubmitHandler<LoginSchemaType> = data => console.log(data)

  return (
    <View className='flex-1 gap-7 w-full py-5'>
      <Controller
        control={control}
        name='email'
        render={({ field, fieldState }) => (
          <FormInput
            label={i18n.t('LOGIN.EMAIL_LABEL')}
            hint={i18n.t('LOGIN.EMAIL_HINT')}
            value={field.value}
            onChangeText={field.onChange}
            error={fieldState.error?.message}
            leftComponent={<Icon as={Mail} size={18} />}
          />
        )}
      />

      <View className='gap-2'>
        <Controller
          control={control}
          name='password'
          render={({ field, fieldState }) => (
            <FormInput
              label={i18n.t('LOGIN.PASSWORD_LABEL')}
              hint={i18n.t('LOGIN.PASSWORD_HINT')}
              value={field.value}
              onChangeText={field.onChange}
              error={fieldState.error?.message}
              leftComponent={<Icon as={Lock} size={18} />}
              isPassword
            />
          )}
        />

        <View className='flex-row justify-end'>
          <Button variant='link' onPress={() => setIsForgotModalVisible(true)}>
            <Text>{i18n.t('LOGIN.PASSWORD_FORGOT')}</Text>
          </Button>
        </View>
      </View>

      <Button onPress={handleSubmit(onSubmit)}>
        <Text>{i18n.t('LOGIN.LOGIN_BUTTON')}</Text>
      </Button>

      <ForgotPassword
        handleCloseModal={() => setIsForgotModalVisible(false)}
        isForgotModalVisible={isForgotModalVisible}
      />
    </View>
  )
}
