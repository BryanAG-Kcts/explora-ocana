import { Platform } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select'
import { Text } from '../ui/text'

interface Props extends React.ComponentProps<typeof Select> {
  data: { label: string; value: string }[]
  label: string
}
export function FormSelect({ data, label, ...props }: Props) {
  const insets = useSafeAreaInsets()
  const contentInsets = {
    top: insets.top,
    bottom: Platform.select({
      ios: insets.bottom,
      android: insets.bottom + 24
    }),
    left: 12,
    right: 12
  }

  return (
    <Select {...props}>
      <SelectTrigger
        disabled={props.disabled}
        className='flex-1 overflow-hidden'
      >
        <SelectValue placeholder='' />
      </SelectTrigger>
      <SelectContent insets={contentInsets}>
        <SelectGroup>
          {data.map(item => (
            <SelectItem
              key={item.value}
              value={item.value}
              label={item.label}
            />
          ))}
        </SelectGroup>
      </SelectContent>

      <Text className='absolute -top-4.5 left-1 font-semibold text-xs'>
        {label}
      </Text>
    </Select>
  )
}
