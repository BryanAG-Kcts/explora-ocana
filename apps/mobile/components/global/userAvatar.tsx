import { Avatar, Style } from '@dicebear/core'
import lorelei from '@dicebear/styles/lorelei.json'
import { useMemo } from 'react'
import { SvgXml } from 'react-native-svg'

const avatarStyle = new Style(lorelei)
interface UserAvatarProps {
  userId: string | number
  size?: number
}

export function UserAvatar({ userId, size = 96 }: UserAvatarProps) {
  const svg = useMemo(
    () =>
      new Avatar(avatarStyle, {
        seed: `user-${userId}`,
        size
      }).toString(),
    [userId, size]
  )

  return <SvgXml xml={svg} width='100%' height='100%' />
}
