import { useState } from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'
import Toast from 'react-native-toast-message'
import { CustomModal } from '@/components/global/customModal'
import { FormInput } from '@/components/global/formInput'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { axiosInstance, safePromise } from '@/constants/global/axios'

interface Props {
  isCreateModalVisible: boolean
  setIsCreateModalVisible: (visible: boolean) => void
  teacherId: string
}
export function ProfessorModal({
  isCreateModalVisible,
  setIsCreateModalVisible,
  teacherId
}: Props) {
  const [newGroupName, setNewGroupName] = useState('')

  async function handleCreateGroup() {
    if (newGroupName.trim().length < 3) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'El nombre del grupo debe tener al menos 3 caracteres.'
      })

      return
    }

    const res = axiosInstance.post('/group/teacher/create', {
      name: newGroupName,
      teacher_id: teacherId
    })

    const [response, error] = await safePromise(res)
    if (error || !response?.data) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2:
          'Ocurrió un error al crear el grupo. Por favor, inténtalo de nuevo más tarde.'
      })

      return
    }

    setNewGroupName('')
    setIsCreateModalVisible(false)
    Toast.show({
      type: 'success',
      text1: 'Éxito',
      text2: 'Grupo creado'
    })
  }

  return (
    <CustomModal
      handleCloseModal={() => setIsCreateModalVisible(false)}
      isModalVisible={isCreateModalVisible}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className='flex-1 justify-end'
      >
        <View className='bg-background w-full rounded-t-3xl p-6 shadow-lg border-t border-border'>
          <Text className='text-xl font-bold mb-2'>Crear Nuevo Grupo</Text>
          <Text className='text-sm text-zinc-500 mb-6'>
            Asigna un nombre al grupo. La clave de matriculación se generará
            automáticamente.
          </Text>

          <Text className='text-sm font-medium mb-2'>Nombre del Grupo</Text>
          <FormInput
            label=''
            hint='Ej. Ciencias Naturales 101'
            value={newGroupName}
            onChangeText={setNewGroupName}
          />

          <View className='flex-row justify-end mt-8 gap-3'>
            <Button
              variant='secondary'
              onPress={() => setIsCreateModalVisible(false)}
            >
              <Text>Cancelar</Text>
            </Button>

            <Button onPress={handleCreateGroup}>
              <Text>Crear Grupo</Text>
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </CustomModal>
  )
}
