import { View } from 'react-native'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Text } from '@/components/ui/text'
import {
  LEADERBOARD_DATA_SCHOOLS,
  LEADERBOARD_DATA_USERS
} from '@/constants/pages/leaderboard/Leaderboard'
import { cn } from '@/lib/utils'

interface Props {
  users: typeof LEADERBOARD_DATA_USERS | typeof LEADERBOARD_DATA_SCHOOLS
}
export function PodiumCards({ users }: Props) {
  return (
    <View className='flex-row justify-center items-end py-4'>
      {users.map(user => {
        const isFirst =
          user.id === LEADERBOARD_DATA_USERS[0].id ||
          user.id === LEADERBOARD_DATA_SCHOOLS[0].id
        const isSecond =
          user.id === LEADERBOARD_DATA_USERS[1].id ||
          user.id === LEADERBOARD_DATA_SCHOOLS[1].id

        return (
          <View
            key={user.id}
            className={cn('items-center mx-2 w-24 ', isFirst && 'w-28')}
          >
            <View className='mb-2'>
              <Avatar
                alt={user.name}
                className={cn(
                  'border-2 size-16 border-amber-600',
                  isSecond && 'border-slate-300',
                  isFirst && 'border-yellow-400 size-20'
                )}
              >
                <AvatarImage source={{ uri: user.avatar }} />
              </Avatar>

              <Text className='absolute bg-card px-2 py-0.5 rounded-full border border-border -top-2 right-0 text-xs'>
                {isFirst ? '🥇' : isSecond ? '🥈' : '🥉'}
              </Text>
            </View>

            <Text
              className='font-bold text-center text-xs truncate'
              numberOfLines={1}
            >
              {user.name}
            </Text>

            <Text className='text-primary/70 font-extrabold text-xs mb-2'>
              {user.xp} XP
            </Text>

            <View
              className={cn(
                'w-full rounded-t-xl justify-end pb-2 items-center',
                'h-14 bg-linear-to-b from-amber-600/20 to-amber-700/5 border-t-4 border-amber-600',
                isSecond &&
                  'h-18 from-slate-400/20 to-slate-500/5 border-slate-400',
                isFirst &&
                  'h-24 from-yellow-500/30 to-yellow-600/10 border-yellow-400'
              )}
            >
              <Text className='font-black text-lg'>
                {isFirst ? '1' : isSecond ? '2' : '3'}
              </Text>
            </View>
          </View>
        )
      })}
    </View>
  )
}
