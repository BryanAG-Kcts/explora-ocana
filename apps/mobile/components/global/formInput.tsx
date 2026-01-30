import { Eye, EyeClosed } from 'lucide-react-native'
import type { ComponentProps } from 'react'
import { View } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import { useResolveClassNames } from 'uniwind'

import { Icon } from '../ui/icon'
import { Text } from '../ui/text'

interface Props extends ComponentProps<typeof FloatingLabelInput> {
  error?: string
}
export function FormInput({ error, ...props }: Props) {
  const containerStyles = useResolveClassNames(
    'bg-background dark:bg-input/30 py-1 px-3 border-input border rounded-md gap-2'
  )
  const inputStyles = useResolveClassNames('text-foreground')
  const labelStyles = useResolveClassNames('text-foreground font-semibold pl-2')
  const hintStyles = useResolveClassNames('text-muted-foreground')

  return (
    <View className='gap-2'>
      <FloatingLabelInput
        {...props}
        containerStyles={containerStyles}
        inputStyles={inputStyles}
        customShowPasswordComponent={<Icon as={Eye} size={18} />}
        customHidePasswordComponent={<Icon as={EyeClosed} size={18} />}
        labelStyles={labelStyles}
        hintTextColor={hintStyles.color as string}
        customLabelStyles={{
          colorFocused: labelStyles.color as string,
          colorBlurred: labelStyles.color as string,
          topFocused: -27,
          fontSizeFocused: 12
        }}
        animationDuration={150}
      />

      {error && <Text className='text-destructive text-sm'>{error}</Text>}
    </View>
  )
}
