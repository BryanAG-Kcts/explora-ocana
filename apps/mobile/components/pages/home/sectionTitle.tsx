import { View } from 'react-native'
import { Progress } from '@/components/ui/progress'
import { Text } from '@/components/ui/text'

interface Props {
  title: string
  sectionNumber: number
  percent: number
  completed: number
  total: number
}
export function SectionTitle({
  title,
  sectionNumber,
  percent,
  completed,
  total
}: Props) {
  return (
    <View className='m-2 bg-primary p-4 rounded gap-1 mb-4'>
      <View className='flex-row justify-between'>
        <Text
          variant='h4'
          className='text-primary-foreground font-semibold mb-2'
        >
          {title}
        </Text>
        <Text className='text-primary-foreground font-semibold'>
          {sectionNumber.toString().padStart(2, '0')}
        </Text>
      </View>
      <View className='flex-row gap-3 items-center'>
        <View className='flex-1 h-3'>
          <Progress
            value={percent}
            indicatorClassName='bg-white'
            className='bg-white/30 flex-1'
          />
        </View>

        <Text variant='small' className='text-primary-foreground'>
          {completed}/{total} Completadas
        </Text>
      </View>
    </View>
  )
}
