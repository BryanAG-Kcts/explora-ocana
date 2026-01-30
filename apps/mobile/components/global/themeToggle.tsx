import { MoonStarIcon, SunIcon } from 'lucide-react-native'
import { Uniwind, useUniwind } from 'uniwind'
import { Button } from '../ui/button'
import { Icon } from '../ui/icon'

const THEME_ICONS = {
  light: SunIcon,
  dark: MoonStarIcon
}

export function ThemeToggle() {
  const { theme } = useUniwind()

  function toggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    Uniwind.setTheme(newTheme)
  }

  return (
    <Button
      onPressIn={toggleTheme}
      size='icon'
      variant='ghost'
      className='ios:size-9 web:mx-4 rounded-full'
    >
      <Icon as={THEME_ICONS[theme ?? 'light']} className='size-5' />
    </Button>
  )
}
