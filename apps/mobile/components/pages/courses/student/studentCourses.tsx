import { useState } from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { BorderHeader } from '@/components/global/borderHeader'
import { ThemeToggle } from '@/components/global/themeToggle'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { COURSES, type Course } from '@/constants/pages/courses/courses'
import { ModalCourse } from './modal'

export function StudentCourses() {
  const [selectedGroup, setSelectedGroup] = useState<Course | null>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)

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
          data={COURSES}
          keyExtractor={item => item.id}
          renderItem={renderGroupItem}
          showsVerticalScrollIndicator={false}
        />

        <ModalCourse
          isModalVisible={isModalVisible}
          handleCloseModal={handleCloseModal}
          selectedGroup={selectedGroup}
        />
      </View>
    </View>
  )
}
