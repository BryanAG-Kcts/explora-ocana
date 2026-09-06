import { ChevronLeft } from 'lucide-react-native'
import { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import Toast from 'react-native-toast-message'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Progress } from '@/components/ui/progress'
import { Text } from '@/components/ui/text'
import { axiosInstance, safePromise } from '@/constants/global/axios'
import type {
  StudentProgress,
  TeacherCourse
} from '@/constants/pages/courses/courses'

interface Props {
  activeGroup: TeacherCourse
  setActiveGroup: (group: TeacherCourse | null) => void
}
export function CourseDetail({ activeGroup, setActiveGroup }: Props) {
  const [students, setStudents] = useState<StudentProgress[] | null>(null)

  useEffect(() => {
    ;(async () => {
      const res = axiosInstance.get(
        `/group/teacher/information/${activeGroup.id}`
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

      setStudents(response.data.data.students)
    })()
  }, [activeGroup])

  return (
    <View className='flex-1 pt-2'>
      <View className='items-start'>
        <Button onPress={() => setActiveGroup(null)} variant='ghost'>
          <Icon as={ChevronLeft} size={28} />
          <Text>Volver a mis grupos</Text>
        </Button>
      </View>

      <View className='flex-1 p-4'>
        <View className='mb-6'>
          <Text className='text-2xl font-bold'>{activeGroup.name}</Text>
          <Text className='text-sm mt-1'>
            Clave: <Text className='font-bold'>{activeGroup.accessCode}</Text>
          </Text>
        </View>

        <Text className='text-lg font-semibold mb-2'>
          Progreso de Estudiantes
        </Text>

        {students?.length === 0 && (
          <View className='flex-1 items-center justify-center bg-card rounded-xl border border-border p-8'>
            <Text variant='muted' className='text-center'>
              Aún no hay estudiantes matriculados en este grupo.
            </Text>
          </View>
        )}

        <FlatList
          data={students}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View className='bg-card p-4 rounded-xl border border-border mb-3 shadow-sm'>
              <View className='flex-row justify-between mb-2'>
                <Text className='text-base font-medium'>{item.name}</Text>
                <Text className='text-sm font-semibold text-secondary-foreground'>
                  {item.progress}%
                </Text>
              </View>

              <Progress value={item.progress} indicatorClassName='bg-primary' />
            </View>
          )}
        />
      </View>
    </View>
  )
}
