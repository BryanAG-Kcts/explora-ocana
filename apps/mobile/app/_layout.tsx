import '@/global.css'

import { ThemeProvider } from '@react-navigation/native'
import { PortalHost } from '@rn-primitives/portal'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useUniwind, withUniwind } from 'uniwind'
import { NAV_THEME } from '@/lib/theme'

const StyledSafeAreaView = withUniwind(SafeAreaView)

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router'
export default function RootLayout() {
  const { theme } = useUniwind()

  return (
    <ThemeProvider value={NAV_THEME[theme ?? 'light']}>
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
      <StyledSafeAreaView className='flex-1 bg-background'>
        <Slot />
      </StyledSafeAreaView>
      <PortalHost />
    </ThemeProvider>
  )
}
