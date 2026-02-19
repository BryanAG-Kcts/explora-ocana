import { zodResolver } from '@hookform/resolvers/zod'
import { Lock, Mail } from 'lucide-react-native'
import { Controller, type SubmitHandler, useForm } from 'react-hook-form'
import { View } from 'react-native'
import { FormInput } from '@/components/global/formInput'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { i18n } from '@/constants/global/i18n'
import { LoginSchema, type LoginSchemaType } from '@/constants/pages/auth/login'

export function LoginForm() {
  const { control, handleSubmit } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema)
  })
  const onSubmit: SubmitHandler<LoginSchemaType> = data => console.log(data)

  return (
    <View className='flex-1 gap-7 w-full py-5'>
      <Controller
        control={control}
        name='email'
        render={({ field, fieldState }) => (
          <FormInput
            label={i18n.t('login.emailLabel')}
            hint={i18n.t('login.emailHint')}
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
              label={i18n.t('login.passwordLabel')}
              hint={i18n.t('login.passwordHint')}
              value={field.value}
              onChangeText={field.onChange}
              error={fieldState.error?.message}
              leftComponent={<Icon as={Lock} size={18} />}
              isPassword
            />
          )}
        />

        <Text variant='small' className='text-right text-primary'>
          {i18n.t('login.passwordForgot')}
        </Text>
      </View>

      <Button onPress={handleSubmit(onSubmit)}>
        <Text>{i18n.t('login.loginButton')}</Text>
      </Button>
    </View>
  )
}
