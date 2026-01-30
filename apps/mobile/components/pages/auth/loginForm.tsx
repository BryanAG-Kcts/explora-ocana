import { zodResolver } from '@hookform/resolvers/zod'
import { Key, Mail } from 'lucide-react-native'
import { Controller, type SubmitHandler, useForm } from 'react-hook-form'
import { View } from 'react-native'
import { FormInput } from '@/components/global/formInput'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { LoginSchema, type LoginSchemaType } from '@/constants/pages/auth/login'

export function LoginForm() {
  const { control, handleSubmit } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema)
  })
  const onSubmit: SubmitHandler<LoginSchemaType> = data => console.log(data)

  return (
    <View className='flex-1 p-4 gap-4'>
      <Controller
        control={control}
        name='email'
        render={({ field, fieldState }) => (
          <FormInput
            label='Email'
            value={field.value}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            error={fieldState.error?.message}
            leftComponent={<Icon as={Mail} size={18} />}
          />
        )}
      />

      <Controller
        control={control}
        name='password'
        render={({ field, fieldState }) => (
          <FormInput
            label='Contraseña'
            value={field.value}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            error={fieldState.error?.message}
            leftComponent={<Icon as={Key} size={18} />}
            isPassword
          />
        )}
      />

      <Button onPress={handleSubmit(onSubmit)}>
        <Text>Iniciar sesión</Text>
      </Button>
    </View>
  )
}
