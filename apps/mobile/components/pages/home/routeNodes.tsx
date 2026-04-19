import { Link } from 'expo-router'
import { Fragment } from 'react'
import { View } from 'react-native'
import Svg, { Ellipse } from 'react-native-svg'
import { Icon } from '@/components/ui/icon'
import {
  type Node,
  PADDING,
  RADIO_X,
  RADIO_Y,
  ROUTE_NODE_SIZE
} from '@/constants/pages/home/routeEntities'
import { NodePath } from './nodePath'

interface sProps {
  nodes: Node[]
}
export function RouteNodes({ nodes }: sProps) {
  return nodes.map(node => (
    <Fragment key={node.id}>
      <RouteNode node={node} />

      {node.nextNodes.length > 0 && (
        <>
          <RouteNodes nodes={node.nextNodes} />
          <NodePath
            originX={node.xPosition}
            originY={node.yPosition}
            nextNodes={node.nextNodes}
          />
        </>
      )}
    </Fragment>
  ))
}

interface Props {
  node: Node
}
export function RouteNode({ node }: Props) {
  return (
    <View
      style={{
        zIndex: 10,
        width: ROUTE_NODE_SIZE.svgWidth,
        height: ROUTE_NODE_SIZE.svgHeight,
        position: 'absolute',
        top: node.yPosition,
        left: node.xPosition,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Link href={node.link}>
        <Svg
          height={ROUTE_NODE_SIZE.svgHeight}
          width={ROUTE_NODE_SIZE.svgWidth}
        >
          <Ellipse
            cx={ROUTE_NODE_SIZE.cx}
            cy={ROUTE_NODE_SIZE.cyBase}
            rx={RADIO_X}
            ry={RADIO_Y}
            fill='#1B5E20'
          />
          <Ellipse
            cx={ROUTE_NODE_SIZE.cx}
            cy={ROUTE_NODE_SIZE.cyTape}
            rx={RADIO_X}
            ry={RADIO_Y}
            fill='#4CAF50'
          />
        </Svg>
      </Link>

      <View
        className='absolute pointer-events-none'
        style={{
          transform: [
            { perspective: 50 },
            { rotateX: '30deg' },
            { translateY: -PADDING }
          ]
        }}
      >
        <Icon
          as={node.icon}
          size={40}
          strokeWidth={1.5}
          className='text-primary-foreground'
        />
      </View>
    </View>
  )
}
