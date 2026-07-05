import type { ReactNode } from 'react'
import { View } from 'react-native'
import { Text } from '@/components/ui/text'

interface Props {
  title: string
  value: string | number
  icon: ReactNode
}
export function StatCard({ title, value, icon }: Props) {
  return (
    <View className='w-[48%] p-4 rounded-xl border border-border shadow-sm mb-3'>
      <View className='flex-row items-center gap-2 mb-2'>
        {icon}
        <Text className='text-sm font-medium text-muted-foreground'>
          {title}
        </Text>
      </View>
      <Text className='text-2xl font-bold'>{value}</Text>
    </View>
  )
}
