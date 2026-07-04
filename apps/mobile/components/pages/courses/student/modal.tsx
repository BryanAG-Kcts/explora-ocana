import { useState } from 'react'
import { Alert, KeyboardAvoidingView, Platform, View } from 'react-native'
import { CustomModal } from '@/components/global/customModal'
import { FormInput } from '@/components/global/formInput'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import type { Course } from '@/constants/pages/courses/courses'

interface Props {
  isModalVisible: boolean
  handleCloseModal: () => void
  selectedGroup: Course | null
}
export function ModalCourse({
  isModalVisible,
  handleCloseModal,
  selectedGroup
}: Props) {
  const [enrollmentKey, setEnrollmentKey] = useState('')
  const handleEnroll = () => {
    if (!enrollmentKey.trim()) {
      Alert.alert('Error', 'Por favor ingresa la clave de matriculación.')
      return
    }

    Alert.alert('Éxito', `Te has matriculado en ${selectedGroup?.name}`)

    handleCloseModal()
  }

  return (
    <CustomModal
      isModalVisible={isModalVisible}
      handleCloseModal={handleCloseModal}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className='flex-1 justify-end'
      >
        <View className='bg-background w-full rounded-2xl p-6 shadow-lg border border-border'>
          <Text className='text-xl font-bold mb-2'>Unirse al Grupo</Text>

          <Text className='text-sm mb-6'>
            Estás a punto de unirte a{' '}
            <Text className='font-semibold'>{selectedGroup?.name}</Text>.
            Ingresa la clave proporcionada por tu profesor.
          </Text>

          <Text className='text-sm font-medium mb-2'>
            Clave de Matriculación
          </Text>

          <FormInput
            label=''
            hint='Ej. MAT-2026-X'
            value={enrollmentKey}
            onChangeText={setEnrollmentKey}
            isPassword
          />

          <View className='flex-row justify-end mt-8 gap-4'>
            <Button onPress={handleCloseModal} variant='secondary'>
              <Text>Cancelar</Text>
            </Button>

            <Button onPress={handleEnroll}>
              <Text>Matricularme</Text>
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </CustomModal>
  )
}
