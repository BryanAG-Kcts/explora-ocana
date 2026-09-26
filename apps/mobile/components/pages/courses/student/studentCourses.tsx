import { useEffect, useState } from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import Toast from 'react-native-toast-message'
import { BorderHeader } from '@/components/global/borderHeader'
import { ThemeToggle } from '@/components/global/themeToggle'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { axiosInstance, safePromise } from '@/constants/global/axios'
import type { Course } from '@/constants/pages/courses/courses'
import { useUserStore } from '@/hooks/userStore'
import { ModalCourse } from './modal'

export function StudentCourses() {
  const { user } = useUserStore()
  const [selectedGroup, setSelectedGroup] = useState<Course | null>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [courses, setCourses] = useState<Course[] | null>(null)

  useEffect(() => {
    ;(async () => {
      const res = axiosInstance.get(
        `/group/student/list-groups/school/${user?.studentId}`
      )

      const [response, error] = await safePromise(res)
      if (error || !response?.data) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2:
            'Ocurrió un error al obtener los grupos. Por favor, inténtalo de nuevo más tarde.'
        })

        return
      }

      setCourses(response.data.data)
    })()
  }, [user])

  const handleOpenModal = (group: Course) => {
    setSelectedGroup(group)
    setIsModalVisible(true)
  }

  const handleCloseModal = () => {
    setIsModalVisible(false)
    setSelectedGroup(null)
  }

  const renderGroupItem = ({ item }: { item: Course }) => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => handleOpenModal(item)}
      className='p-4 rounded-xl border border-border mb-3 shadow-sm flex-row justify-between items-center'
    >
      <View>
        <Text className='text-lg font-semibold'>{item.name}</Text>
        <Text variant='muted'>Prof: {item.teacherName}</Text>
      </View>

      <Button onPress={() => handleOpenModal(item)}>
        <Text>Unirse</Text>
      </Button>
    </TouchableOpacity>
  )

  return (
    <View className='flex-1'>
      <BorderHeader>
        <View className='flex-row items-center gap-2 justify-between flex-1'>
          <Text className='font-semibold'>Grupos disponibles</Text>
          <ThemeToggle />
        </View>
      </BorderHeader>

      <View className='p-4 gap-4 flex-1'>
        <Text>Escoge un grupo para unirte:</Text>

        <FlatList
          data={courses}
          keyExtractor={item => item.id}
          renderItem={renderGroupItem}
          showsVerticalScrollIndicator={false}
        />

        <ModalCourse
          isModalVisible={isModalVisible}
          handleCloseModal={handleCloseModal}
          selectedGroup={selectedGroup}
          studentId={user?.studentId ?? ''}
        />
      </View>
    </View>
  )
}
