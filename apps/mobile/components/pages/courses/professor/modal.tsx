import { useState } from 'react'
import { Alert, KeyboardAvoidingView, Platform, View } from 'react-native'
import { CustomModal } from '@/components/global/customModal'
import { FormInput } from '@/components/global/formInput'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import type { TeacherCourse } from '@/constants/pages/courses/courses'

interface Props {
  isCreateModalVisible: boolean
  setIsCreateModalVisible: (visible: boolean) => void
  setGroups: (groups: TeacherCourse[]) => void
  groups: TeacherCourse[]
}
export function ProfessorModal({
  isCreateModalVisible,
  setIsCreateModalVisible,
  setGroups,
  groups
}: Props) {
  const [newGroupName, setNewGroupName] = useState('')

  const handleCreateGroup = () => {
    if (!newGroupName.trim()) {
      Alert.alert('Error', 'El nombre del grupo es obligatorio.')
      return
    }

    const generatedKey = `${newGroupName.substring(0, 3).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`
    const newGroup: TeacherCourse = {
      id: Date.now().toString(),
      name: newGroupName,
      enrollmentKey: generatedKey,
      students: []
    }

    setGroups([...groups, newGroup])
    setNewGroupName('')
    setIsCreateModalVisible(false)
    Alert.alert('Éxito', `Grupo creado. Clave: ${generatedKey}`)
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
