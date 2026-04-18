import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

interface Props {
  dotted?: boolean
  init: [number, number]
  end: [number, number]
}
export function NodePath({ dotted, init, end }: Props) {
  const path = generatePath(
    init[1] + 70,
    init[0] + 55,
    end[1] + 70,
    end[0] + 55
  )

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: (init[1] > end[1] ? init[1] : end[1]) + 70,
        height: end[0] + 55
      }}
    >
      <Svg>
        <Path
          d={path}
          stroke='#1B5E20'
          strokeWidth='12'
          fill='none'
          strokeLinecap='round'
          strokeDasharray={dotted ? '10, 20' : undefined}
        />
      </Svg>
    </View>
  )
}

const generatePath = (x1: number, y1: number, x2: number, y2: number) => {
  const midY = (y1 + y2) / 2
  return `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`
}
