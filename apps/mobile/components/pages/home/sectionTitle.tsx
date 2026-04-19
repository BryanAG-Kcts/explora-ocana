import { View } from 'react-native'
import { Text } from '@/components/ui/text'

interface Props {
  title: string
  sectionNumber: number
}
export function SectionTitle({ title, sectionNumber }: Props) {
  return (
    <View className='m-2 bg-primary p-4 rounded flex-row items-center justify-between'>
      <View>
        <Text variant='muted' className='text-primary-foreground'>
          Sección {sectionNumber}
        </Text>
        <Text className='text-primary-foreground font-semibold'>{title}</Text>
      </View>

      <Text variant='h2' className='text-primary-foreground'>
        100%
      </Text>
    </View>
  )
}
