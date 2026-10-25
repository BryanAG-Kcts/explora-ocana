import { MoonStarIcon, SunIcon } from 'lucide-react-native'
import { Uniwind, useUniwind } from 'uniwind'
import { useAccessibilityStore } from '@/hooks/useAccesible'
import { Button } from '../ui/button'
import { Icon } from '../ui/icon'

const THEME_ICONS = {
  light: SunIcon,
  dark: MoonStarIcon,
  'high-contrast-light': SunIcon,
  'high-contrast-dark': MoonStarIcon
}

export function ThemeToggle() {
  const { theme } = useUniwind()
  const highContrast = useAccessibilityStore(state => state.highContrast)

  function toggleTheme() {
    const isDark = theme?.includes('dark') ?? false
    const newTheme = highContrast
      ? isDark
        ? 'high-contrast-light'
        : 'high-contrast-dark'
      : isDark
        ? 'light'
        : 'dark'

    Uniwind.setTheme(newTheme)
  }

  return (
    <Button
      onPressIn={toggleTheme}
      size='icon'
      variant='ghost'
      className='rounded-full'
    >
      <Icon as={THEME_ICONS[theme ?? 'light']} />
    </Button>
  )
}
