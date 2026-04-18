import { View } from 'react-native'
import Svg, { Ellipse } from 'react-native-svg'

const RADIO_X = 60
const RADIO_Y = 45
const PADDING = 10
const THICKNESS_3D = 10

const cx = RADIO_X + PADDING
const cyTape = RADIO_Y + PADDING
const cyBase = cyTape + THICKNESS_3D
const svgWidth = (RADIO_X + PADDING) * 2
const svgHeight = (RADIO_Y + PADDING) * 2 + THICKNESS_3D

interface Props {
  top: number
  left: number
}
export function RouteNode({ top, left }: Props) {
  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 100,
        top,
        left,
        width: svgWidth,
        height: svgHeight
      }}
    >
      <Svg height={svgHeight} width={svgWidth}>
        <Ellipse cx={cx} cy={cyBase} rx={RADIO_X} ry={RADIO_Y} fill='#1B5E20' />
        <Ellipse cx={cx} cy={cyTape} rx={RADIO_X} ry={RADIO_Y} fill='#4CAF50' />
      </Svg>
    </View>
  )
}
