import type { ColorValue } from 'react-native'
import type { NodeIcon } from './routeEntities'

export type NodeStatus = 'locked' | 'available' | 'completed'
export type NodeProgress = {
  completed: number
  required: number
  percent: number
}

export type RouteProgress = NodeProgress[]
export const NODE_COLORS: Record<
  NodeIcon,
  [ColorValue, ColorValue, ColorValue]
> = {
  book: ['#BFE5FF', '#F8EDDC', '#FCEDD5'],
  quiz: ['#E5D2FF', '#FCCA3C', '#C34D0A'],
  castle: ['#FFD4D1', '#FFBDB8', '#FFE4D8'],
  puzzle: ['#F8B83A', '#8A56CC', '#4A78D0'],
  paper: ['#E8D4B4', '#C42835', '#E8A428'],
  chestCard: ['#8B5A33', '#D4A038', '#3B6396'],
  compass: ['#A86F54', '#5B9844', '#4A6B8C'],
  gear: ['#B07A48', '#9AA4B5', '#78645C'],
  crystal: ['#A57DF0', '#62D9D9', '#2A447A']
}
