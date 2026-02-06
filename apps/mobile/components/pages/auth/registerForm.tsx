import { zodResolver } from '@hookform/resolvers/zod'
import { Key, Mail, User } from 'lucide-react-native'
import { Controller, type SubmitHandler, useForm } from 'react-hook-form'
import { View } from 'react-native'
import { FormInput } from '@/components/global/formInput'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { axiosInstance } from '@/constants/global/axios'
import {
  RegisterSchema,
  type RegisterSchemaType
} from '@/constants/pages/auth/register'

export function RegisterForm() {
  const { control, handleSubmit } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema)
  })
  const onSubmit: SubmitHandler<RegisterSchemaType> = async form => {
    const { data } = await axiosInstance
      .post('/auth/register', form)
      .catch(err => {
        console.log(err)
        return { data: null }
      })

    console.log(data)
  }

  return (
    <View className='flex-1 p-4 gap-4'>
      <Controller
        control={control}
        name='name'
        render={({ field, fieldState }) => (
          <FormInput
            label='Nombres'
            hint='Ingresa tu nombre'
            value={field.value}
            onChangeText={field.onChange}
            error={fieldState.error?.message}
            leftComponent={<Icon as={User} size={18} />}
          />
        )}
      />

      <Controller
        control={control}
        name='lastname'
        render={({ field, fieldState }) => (
          <FormInput
            label='Apellidos'
            hint='Ingresa tus apellidos'
            value={field.value}
            onChangeText={field.onChange}
            error={fieldState.error?.message}
            leftComponent={<Icon as={User} size={18} />}
          />
        )}
      />

      <Controller
        control={control}
        name='email'
        render={({ field, fieldState }) => (
          <FormInput
            label='Email'
            hint='Ejemplo@email.com'
            value={field.value}
            onChangeText={field.onChange}
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
            hint='Ingresa tu contraseña'
            value={field.value}
            onChangeText={field.onChange}
            error={fieldState.error?.message}
            leftComponent={<Icon as={Key} size={18} />}
            isPassword
          />
        )}
      />

      <Controller
        control={control}
        name='confirmPassword'
        render={({ field, fieldState }) => (
          <FormInput
            label='Confirmar contraseña'
            hint='Vuelve a ingresar tu contraseña'
            value={field.value}
            onChangeText={field.onChange}
            error={fieldState.error?.message}
            leftComponent={<Icon as={Key} size={18} />}
            isPassword
          />
        )}
      />

      <Button onPress={handleSubmit(onSubmit)}>
        <Text>Registrarse</Text>
      </Button>
    </View>
  )
}
