import { useState } from 'react'
import { Alert, KeyboardAvoidingView, Platform, View } from 'react-native'
import { CustomModal } from '@/components/global/customModal'
import { FormInput } from '@/components/global/formInput'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'

interface Props {
  isForgotModalVisible: boolean
  handleCloseModal: () => void
}
export function ForgotPassword({
  isForgotModalVisible,
  handleCloseModal
}: Props) {
  const [recoveryEmail, setRecoveryEmail] = useState('')

  const handleSendRecovery = () => {
    if (!recoveryEmail.trim()) {
      Alert.alert('Error', 'Por favor ingresa un correo válido.')
      return
    }

    Alert.alert(
      'Enlace enviado',
      `Si existe una cuenta asociada a ${recoveryEmail}, recibirás instrucciones para restablecer tu contraseña.`
    )

    setRecoveryEmail('')
    handleCloseModal()
  }

  return (
    <CustomModal
      isModalVisible={isForgotModalVisible}
      handleCloseModal={handleCloseModal}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className='flex-1 justify-end'
      >
        <View className='bg-background w-full rounded-t-3xl p-6 shadow-lg border-t border-border'>
          <Text className='text-xl font-bold mb-2'>Recuperar Contraseña</Text>
          <Text className='text-sm text-zinc-500 mb-6'>
            Ingresa el correo electrónico asociado a tu cuenta y te enviaremos
            un enlace para restablecer tu contraseña.
          </Text>

          <Text className='text-sm font-medium mb-2'>Correo Electrónico</Text>
          <FormInput
            label=''
            hint='tucorreo@ejemplo.com'
            value={recoveryEmail}
            onChangeText={setRecoveryEmail}
            keyboardType='email-address'
          />

          <View className='flex-row justify-end mt-8 gap-3'>
            <Button onPress={handleCloseModal} variant='secondary'>
              <Text>Cancelar</Text>
            </Button>

            <Button onPress={handleSendRecovery}>
              <Text>Enviar enlace</Text>
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </CustomModal>
  )
}
