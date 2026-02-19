import { zodResolver } from '@hookform/resolvers/zod'
import { Lock, Mail, User } from 'lucide-react-native'
import { Controller, type SubmitHandler, useForm } from 'react-hook-form'
import { View } from 'react-native'
import { FormInput } from '@/components/global/formInput'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import {
  CitizenRegisterSchema,
  type CitizenRegisterSchemaType
} from '@/constants/pages/auth/citizenRegister'

export function CitizenForm() {
  const { control, handleSubmit } = useForm<CitizenRegisterSchemaType>({
    resolver: zodResolver(CitizenRegisterSchema)
  })
  const onSubmit: SubmitHandler<CitizenRegisterSchemaType> = async form => {
    console.log(form)
  }

  return (
    <View className='flex-1 p-4 gap-7'>
      <View className='flex-row gap-2'>
        <View className='flex-1'>
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
        </View>
        <View className='flex-1'>
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
        </View>
      </View>

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
            leftComponent={<Icon as={Lock} size={18} />}
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
            leftComponent={<Icon as={Lock} size={18} />}
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
