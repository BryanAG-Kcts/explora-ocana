import { useEffect, useState } from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import Toast from 'react-native-toast-message'
import { BorderHeader } from '@/components/global/borderHeader'
import { ThemeToggle } from '@/components/global/themeToggle'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { axiosInstance, safePromise } from '@/constants/global/axios'
import type { TeacherCourse } from '@/constants/pages/courses/courses'
import { useUserStore } from '@/hooks/userStore'
import { CourseDetail } from './courseDetail'
import { ProfessorModal } from './modal'

export function ProfessorCourses() {
  const { user } = useUserStore()
  const [groups, setGroups] = useState<TeacherCourse[] | null>(null)
  const [activeGroup, setActiveGroup] = useState<TeacherCourse | null>(null)
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false)

  useEffect(() => {
    ;(async () => {
      if (isCreateModalVisible) {
        return
      }

      const res = axiosInstance.get(
        `/group/teacher/list-groups/${user?.teacherId}`
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

      setGroups(response.data.courses)
    })()
  }, [user, isCreateModalVisible])

  if (activeGroup) {
    return (
      <CourseDetail activeGroup={activeGroup} setActiveGroup={setActiveGroup} />
    )
  }

  return (
    <View className='flex-1'>
      <BorderHeader>
        <View className='flex-row items-center gap-2 justify-between flex-1'>
          <Text className='font-semibold'>Mis Grupos</Text>
          <ThemeToggle />
        </View>
      </BorderHeader>

      <View className='flex-1 p-4'>
        <View className='flex-row justify-end mb-4'>
          <Button onPress={() => setIsCreateModalVisible(true)}>
            <Text>+ Nuevo</Text>
          </Button>
        </View>

        <FlatList
          data={groups}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setActiveGroup(item)}
              className='p-4 rounded-xl border border-border mb-3 shadow-sm flex-row justify-between items-center'
            >
              <View>
                <Text className='text-lg font-semibold'>{item.name}</Text>
                <Text variant='muted'>{item.studentsCount} estudiantes</Text>
              </View>

              <Button variant='secondary' onPress={() => setActiveGroup(item)}>
                <Text>Ver avance</Text>
              </Button>
            </TouchableOpacity>
          )}
        />
      </View>

      <ProfessorModal
        isCreateModalVisible={isCreateModalVisible}
        setIsCreateModalVisible={setIsCreateModalVisible}
        teacherId={user?.teacherId || ''}
      />
    </View>
  )
}
