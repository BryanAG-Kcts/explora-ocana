import { Link } from 'expo-router'
import { View } from 'react-native'
import { Text } from '@/components/ui/text'
import { I18N } from '@/locales/i18n'

export default function NotFoundScreen() {
  return (
    <View className='bg-primary flex-1 justify-center items-center gap-4'>
      <Text className='text-primary-foreground text-7xl font-bold'>404</Text>
      <Text className='text-primary-foreground text-2xl'>
        {I18N.t('NOT_FOUND.TITLE')}
      </Text>

      <Link href='/'>
        <Text className='text-primary-foreground underline'>
          {I18N.t('NOT_FOUND.GO_HOME')}
        </Text>
      </Link>
    </View>
  )
}
