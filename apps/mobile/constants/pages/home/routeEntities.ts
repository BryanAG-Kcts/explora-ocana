import type { Href } from 'expo-router'
import {
  Book,
  Castle,
  Compass,
  FileQuestion,
  Gem,
  type LucideIcon,
  PackageOpen,
  Puzzle,
  ScrollText,
  Settings
} from 'lucide-react-native'
import type { ImageSourcePropType } from 'react-native'
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width
export type NodeType = 'quest' | 'mission' | 'quiz'
export type NodeIcon =
  | 'book'
  | 'castle'
  | 'quiz'
  | 'compass'
  | 'chestCard'
  | 'crystal'
  | 'gear'
  | 'puzzle'
  | 'paper'

const ICONS: Record<NodeIcon, ImageSourcePropType> = {
  book: require('@/assets/images/icons/book.png'),
  castle: require('@/assets/images/icons/castle.png'),
  quiz: require('@/assets/images/icons/quiz.png'),
  chestCard: require('@/assets/images/icons/chestCard.png'),
  compass: require('@/assets/images/icons/compass.png'),
  crystal: require('@/assets/images/icons/crystal.png'),
  gear: require('@/assets/images/icons/gear.png'),
  puzzle: require('@/assets/images/icons/puzzle.png'),
  paper: require('@/assets/images/icons/paper.png')
}

const LUCIDE_ICONS: Record<NodeIcon, LucideIcon> = {
  book: Book,
  castle: Castle,
  quiz: FileQuestion,
  chestCard: PackageOpen,
  compass: Compass,
  crystal: Gem,
  gear: Settings,
  puzzle: Puzzle,
  paper: ScrollText
}

export const ROUTE_NODE_SIZE = {
  width: 120,
  height: 120,
  gap: 140
}

export class Node {
  id: string
  type: NodeType
  title: string
  description: string
  xPosition: number
  nextNodeId: string
  isOptional: boolean
  icon: ImageSourcePropType
  iconName: NodeIcon
  link: Href
  lucideIcon: LucideIcon

  constructor(
    id: Node['id'],
    type: Node['type'],
    title: Node['title'],
    description: Node['description'],
    xPosition: Node['xPosition'],
    icon: NodeIcon,
    nextNodeId: Node['nextNodeId'] = '',
    isOptional = false
  ) {
    this.id = id
    this.type = type
    this.title = title
    this.description = description
    this.nextNodeId = nextNodeId
    this.isOptional = isOptional
    this.iconName = icon

    this.xPosition = xPosition * (windowWidth - ROUTE_NODE_SIZE.width - 40) + 20
    this.icon = ICONS[icon]
    this.lucideIcon = LUCIDE_ICONS[icon]
    this.link = `/home/${type}/${id}`
  }
}

export class RouteSection {
  id: string
  title: string
  nodes: Node[]
  height: number

  constructor(
    id: RouteSection['id'],
    title: RouteSection['title'],
    nodes: RouteSection['nodes']
  ) {
    this.id = id
    this.title = title
    this.nodes = nodes
    this.height = nodes.length * ROUTE_NODE_SIZE.gap
  }
}
