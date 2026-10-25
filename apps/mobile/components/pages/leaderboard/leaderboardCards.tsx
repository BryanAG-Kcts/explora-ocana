import { ScrollView, View } from 'react-native'
import { UserAvatar } from '@/components/global/userAvatar'
import { Avatar } from '@/components/ui/avatar'
import { Text } from '@/components/ui/text'
import type { LeaderboardUser } from '@/constants/pages/leaderboard/Leaderboard'
import { getInitials } from '@/constants/pages/profile/profile'

interface Props {
  users: LeaderboardUser[]
}
export function LeaderboardCards({ users }: Props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className='flex-1'
      contentContainerClassName='gap-2'
    >
      {users.map((user, index) => (
        <View
          key={user.id}
          className='flex-row items-center p-4 rounded-2xl border border-border gap-4'
        >
          <Text className='text-gray-400 font-black'>
            {index + 4}
          </Text>

          <Avatar
            alt={getInitials(user?.name || '')}
            className='size-24 bg-muted mb-4'
          >
            <UserAvatar userId={user?.id ?? ''} />
          </Avatar>
          <View className='flex-1'>
            <Text className='font-bold text-sm'>{user.name}</Text>
            {(user.streak ?? 0) > 0 && (
              <Text className='text-orange-400 text-xs font-semibold'>
                🔥 {user.streak} días seguidos
              </Text>
            )}
          </View>

          <Text className='text-primary font-black text-xs bg-card px-3 py-1.5 rounded-full'>
            {user.xp} <Text className='text-[10px] text-gray-400'>XP</Text>
          </Text>
        </View>
      ))}
    </ScrollView>
  )
}
