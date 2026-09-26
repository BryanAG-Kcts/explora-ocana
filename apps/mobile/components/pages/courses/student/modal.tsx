import { useState } from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'
import Toast from 'react-native-toast-message'
import { CustomModal } from '@/components/global/customModal'
import { FormInput } from '@/components/global/formInput'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { axiosInstance, safePromise } from '@/constants/global/axios'
import type { Course } from '@/constants/pages/courses/courses'

interface Props {
  isModalVisible: boolean
  handleCloseModal: () => void
  selectedGroup: Course | null
  studentId: string | null
}
export function ModalCourse({
  isModalVisible,
  handleCloseModal,
  selectedGroup,
  studentId
}: Props) {
  const [enrollmentKey, setEnrollmentKey] = useState('')

  async function handleEnroll() {
    if (enrollmentKey.trim().length < 4) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'La clave de matriculación debe tener al menos 4 caracteres.'
      })

      return
    }

    const res = axiosInstance.post('/group/student/join', {
      group_id: selectedGroup?.id,
      student_id: studentId,
      access_code: enrollmentKey
    })

    const [response, error] = await safePromise(res)
    console.log('response', response, 'error', error)
    if (error || !response?.data) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2:
          response?.data?.message ??
          'Ocurrió un error al unirse al grupo. Por favor, inténtalo de nuevo más tarde.'
      })

      return
    }

    setEnrollmentKey('')
    handleCloseModal()
    Toast.show({
      type: 'success',
      text1: 'Éxito',
      text2: 'Te has unido al grupo'
    })
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
