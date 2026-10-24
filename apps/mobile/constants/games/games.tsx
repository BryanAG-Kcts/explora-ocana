import type { ImageSourcePropType } from 'react-native'
import { Ar } from '@/components/pages/games/ar'
import { Concept } from '@/components/pages/games/concept'
import { Crossword } from '@/components/pages/games/crossword'
import { Puzzle } from '@/components/pages/games/puzzle'
import { Question } from '@/components/pages/games/question'
import { Soup } from '@/components/pages/games/soup'

export interface GAME_STEP_MAP {
  ar: AR_STEP
  concept: CONCEPT_STEP
  crossword: CROSSWORD_STEP
  puzzle: PUZZLES_STEP
  question: QUESTION_STEP
  soup: SOUP_STEP
}

export type GAMES_ENUM = keyof GAME_STEP_MAP
export type GAME_STEP = {
  [K in GAMES_ENUM]: {
    type: K
    data: GAME_STEP_MAP[K]
    requiresCompletion?: boolean
  }
}[GAMES_ENUM]

export type GAMES_TREE = Record<string, GAME_STEP[]>
export function getGameComponent(step: GAME_STEP, onComplete: (xp: number) => void) {
  switch (step.type) {
    case 'ar':
      return <Ar ar={step.data} />

    case 'concept':
      return <Concept concept={step.data} />

    case 'crossword':
      return <Crossword crossword={step.data} onComplete={onComplete} />

    case 'puzzle':
      return <Puzzle puzzle={step.data} onComplete={onComplete} />

    case 'question':
      return <Question question={step.data} onComplete={onComplete} />

    case 'soup':
      return <Soup soup={step.data} onComplete={onComplete} />

    default:
      return null
  }
}

// Games interfaces

export interface AR_STEP {
  model: ImageSourcePropType
  speech: string
}

export interface CONCEPT_STEP {
  cap: string
  title: string
  subtitle: string
  speech: string
  readTimeMinutes: string
  body: string
}

export interface QUESTION_STEP {
  question: string
  desc: string
  id: string
}

export interface PUZZLES_STEP {
  rows: number
  columns: number
  image: ImageSourcePropType
}

export interface CROSSWORD_STEP {
  rows: number
  columns: number
  hints: string[]
  words: {
    word: string
    row: number
    column: number
    direction: 'horizontal' | 'vertical'
  }[]
}

export interface SOUP_STEP {
  columns: number
  rows: number
  soup: string[]
}
