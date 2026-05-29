import type { ReactNode } from 'react'
import { View } from 'react-native'

interface Props {
  children: ReactNode
}
export function BorderHeader({ children }: Props) {
  return (
    <View className='flex-row gap-4 items-center p-2 px-5 border-b border-primary/30'>
      {children}
    </View>
  )
}
