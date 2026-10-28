import { type RelativePathString, useRouter } from 'expo-router'
import { Fragment, useState } from 'react'
import type { ImageStyle } from 'react-native'
import { Image, Pressable, View } from 'react-native'
import { Text } from '@/components/ui/text'
import type { NodeStatus, RouteProgress } from '@/constants/pages/home/home'
import {
  type Node,
  ROUTE_NODE_SIZE
} from '@/constants/pages/home/routeEntities'
import { useGameSounds } from '@/hooks/useGameSounds'
import { NodeBlobs } from './nodeBlobs'
import { MissionPopup } from './nodeModal'
import { NodePath } from './nodePath'

type ImageStyleWithFilter = ImageStyle & {
  filter?: string
}

interface sProps {
  nodes: Node[]
  progress: RouteProgress
  indexSection: number
  sectionId: string
}

export function RouteNodes({
  nodes,
  progress,
  indexSection,
  sectionId
}: sProps) {
  const { play } = useGameSounds()
  const router = useRouter()
  const [selectedNode, setSelectedNode] = useState<Node | null>(null)
  const nodeMap = new Map(nodes.map(node => [node.id, node]))
  const sectionProgress = progress[indexSection]

  const handleNodePress = (node: Node) => {
    play('click')
    setSelectedNode(node)
  }

  const handleStartMission = () => {
    play('click')
    if (!selectedNode) return

    setSelectedNode(null)
    router.push({
      pathname: selectedNode.link as RelativePathString,
      params: { section: sectionId }
    })
  }

  function getNodeStatus(indexSection: number, index: number) {
    if (indexSection >= 0) {
      const prevSectionProgress = progress[indexSection]
      const isSectionCompleted =
        prevSectionProgress.completed >= prevSectionProgress.required
      if (!isSectionCompleted) {
        return 'locked'
      }
    }

    const nodeStatus =
      sectionProgress.completed === index
        ? 'available'
        : sectionProgress.completed < index
          ? 'locked'
          : 'completed'

    return nodeStatus
  }

  return (
    <>
      {nodes.map((node, index) => {
        const nextNode = nodeMap.get(node.nextNodeId)
        const status = getNodeStatus(indexSection - 1, index)
        const pathStatus = getNodeStatus(indexSection - 1, 1 + index)

        return (
          <Fragment key={node.id}>
            <RouteNode
              node={node}
              nodeStatus={status}
              onPress={handleNodePress}
              yPosition={index * ROUTE_NODE_SIZE.gap}
            />

            {nextNode && (
              <NodePath
                originX={node.xPosition + ROUTE_NODE_SIZE.width / 2}
                originY={index * ROUTE_NODE_SIZE.gap + ROUTE_NODE_SIZE.gap / 2}
                nextNode={nextNode}
                sectionProgress={pathStatus}
                finishY={(index + 1) * ROUTE_NODE_SIZE.gap}
                nodeIcon={node.iconName}
              />
            )}
          </Fragment>
        )
      })}

      <MissionPopup
        node={selectedNode}
        visible={selectedNode !== null}
        onClose={() => setSelectedNode(null)}
        onStart={handleStartMission}
      />
    </>
  )
}

interface Props {
  node: Node
  nodeStatus: NodeStatus
  onPress: (node: Node) => void
  yPosition: number
}
export function RouteNode({ node, nodeStatus, onPress, yPosition }: Props) {
  const isLocked = nodeStatus === 'locked'
  const isAvailable = nodeStatus === 'available'
  const isCompleted = nodeStatus === 'completed'

  return (
    <View
      style={{
        zIndex: isAvailable ? 11 : 10,
        width: ROUTE_NODE_SIZE.width,
        height: ROUTE_NODE_SIZE.height,
        position: 'absolute',
        top: yPosition,
        left: node.xPosition,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <NodeBlobs type={node.iconName} id={node.id} status={nodeStatus} />

      {isAvailable && (
        <View
          pointerEvents='none'
          className='absolute -bottom-3.5 z-20 bg-[#16A34A] px-3 py-2 border-2 border-border rounded-lg'
          style={{ elevation: 4 }}
        >
          <Text variant='small' className='text-white'>
            SIGUIENTE
          </Text>
        </View>
      )}

      <Pressable
        onPress={() => onPress(node)}
        disabled={isLocked}
        accessibilityRole='button'
        accessibilityLabel={node.title}
        accessibilityState={{
          disabled: isLocked
        }}
        style={({ pressed }) => ({
          opacity: pressed && !isLocked ? 0.85 : 1,
          transform: [
            {
              scale: pressed && !isLocked ? 0.96 : 1
            }
          ]
        })}
      >
        <Image
          style={
            {
              width: ROUTE_NODE_SIZE.width,
              height: ROUTE_NODE_SIZE.height,
              resizeMode: 'contain',
              filter: isLocked ? 'grayscale(100%)' : 'none'
            } as ImageStyleWithFilter
          }
          source={node.icon}
        />
      </Pressable>

      {isCompleted && (
        <View
          pointerEvents='none'
          style={{
            position: 'absolute',
            top: 2,
            right: 2,
            width: 26,
            height: 26,
            borderRadius: 13,
            backgroundColor: '#16A34A',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: '#FFFFFF'
          }}
        >
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 16,
              fontWeight: 'bold',
              lineHeight: 19
            }}
          >
            ✓
          </Text>
        </View>
      )}
    </View>
  )
}
