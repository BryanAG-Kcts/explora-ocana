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
export function getGameComponent(
  step: GAME_STEP,
  onComplete: (xp: number) => void,
  sectionId: string
) {
  switch (step.type) {
    case 'ar':
      return <Ar ar={step.data} />

    case 'concept':
      return <Concept concept={step.data} />

    case 'crossword':
      return (
        <Crossword
          crossword={step.data}
          onComplete={onComplete}
          sectionId={sectionId}
        />
      )

    case 'puzzle':
      return (
        <Puzzle
          puzzle={step.data}
          onComplete={onComplete}
          sectionId={sectionId}
        />
      )

    case 'question':
      return (
        <Question
          question={step.data}
          onComplete={onComplete}
          sectionId={sectionId}
        />
      )

    case 'soup':
      return (
        <Soup soup={step.data} onComplete={onComplete} sectionId={sectionId} />
      )

    default:
      return null
  }
}

// Games interfaces

export interface AR_STEP {
  model: string
  speech: string
}

export interface CONCEPT_STEP {
  title: string
  subtitle: string
  speech: string
  readTimeMinutes: string
  body: string
  img: string
  isVertical?: boolean
}

interface BASE_QUESTION_ITEM {
  id: string
  question: string
  desc?: string
}

export interface OPEN_QUESTION_ITEM extends BASE_QUESTION_ITEM {
  kind?: 'open'
}

export interface CHOICE_QUESTION_ITEM extends BASE_QUESTION_ITEM {
  kind: 'choice'
  options: string[]
  correctIndex: number
}

export type QUESTION_ITEM = OPEN_QUESTION_ITEM | CHOICE_QUESTION_ITEM
export interface QUESTION_STEP {
  id: string
  questions: QUESTION_ITEM[]
}

export interface PUZZLES_STEP {
  rows: number
  columns: number
  image: string
  id: string
}

export interface CROSSWORD_STEP {
  id: string
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
  id: string
  columns: number
  rows: number
  soup: string[]
}
