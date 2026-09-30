import { Link } from 'expo-router'
import { Lock } from 'lucide-react-native'
import { Fragment } from 'react'
import { View } from 'react-native'
import Svg, { Ellipse } from 'react-native-svg'
import { Icon } from '@/components/ui/icon'
import {
  NODE_COLORS,
  type NodeProgress,
  type NodeStatus
} from '@/constants/pages/home/home'
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
  sectionProgress: NodeProgress
}
export function RouteNodes({ nodes, sectionProgress }: sProps) {
  return nodes.map(node => (
    <Fragment key={node.id}>
      <RouteNode
        node={node}
        nodeStatus={sectionProgress[node.id] ?? 'locked'}
      />

      {node.nextNodes.length > 0 && (
        <>
          <RouteNodes
            nodes={node.nextNodes}
            sectionProgress={sectionProgress}
          />
          <NodePath
            originX={node.xPosition}
            originY={node.yPosition}
            nextNodes={node.nextNodes}
            sectionProgress={sectionProgress}
          />
        </>
      )}
    </Fragment>
  ))
}

interface Props {
  node: Node
  nodeStatus: NodeStatus
}
export function RouteNode({ node, nodeStatus }: Props) {
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
      <Link href={node.link} disabled={nodeStatus === 'locked'}>
        <Svg
          height={ROUTE_NODE_SIZE.svgHeight}
          width={ROUTE_NODE_SIZE.svgWidth}
        >
          <Ellipse
            cx={ROUTE_NODE_SIZE.cx}
            cy={ROUTE_NODE_SIZE.cyBase}
            rx={RADIO_X}
            ry={RADIO_Y}
            fill={NODE_COLORS[nodeStatus].bottom}
          />
          <Ellipse
            cx={ROUTE_NODE_SIZE.cx}
            cy={ROUTE_NODE_SIZE.cyTape}
            rx={RADIO_X}
            ry={RADIO_Y}
            fill={NODE_COLORS[nodeStatus].top}
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
          as={nodeStatus === 'locked' ? Lock : node.icon}
          size={40}
          strokeWidth={1.5}
          className='text-primary-foreground'
        />
      </View>
    </View>
  )
}
