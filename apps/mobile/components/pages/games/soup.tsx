/** biome-ignore-all lint/suspicious/noArrayIndexKey: <Array vacío> */
import { useEffect, useMemo, useRef, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Toast from 'react-native-toast-message'
import { Text } from '@/components/ui/text'
import type { SOUP_STEP } from '@/constants/games/games'
import { axiosInstance, safePromise } from '@/constants/global/axios'
import { CELL_SIZE, generatePuzzle } from '@/constants/pages/home/soup'
import { useUserStore } from '@/hooks/userStore'

type Cell = {
  row: number
  column: number
}

function normalizeWord(word: string) {
  return word
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase()
    .replace(/\s/g, '')
}
interface SopaDeLetrasProps {
  rows?: number
  columns?: number
  words?: string[]
  onComplete: (xp: number) => void
}
export function SopaDeLetras({
  rows = 10,
  columns = 10,
  words = [],
  onComplete
}: SopaDeLetrasProps) {
  const [selectedCells, setSelectedCells] = useState<Cell[]>([])
  const [foundWords, setFoundWords] = useState<string[]>([])

  const startCell = useRef<Cell | null>(null)
  const selectionRef = useRef<Cell[]>([])
  const puzzle = useMemo(
    () => generatePuzzle(rows, columns, words),
    [rows, columns, words]
  )

  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isTimerRunning, setIsTimerRunning] = useState(true)

  const startTimeRef = useRef(Date.now())
  const submittedRef = useRef(false)

  // biome-ignore lint/correctness/useExhaustiveDependencies: <Chat>
  useEffect(() => {
    const isCompleted = words.length > 0 && foundWords.length === words.length

    if (isCompleted) {
      setIsTimerRunning(false)
      void submitSoupResult()
    }
  }, [foundWords.length, words.length])

  useEffect(() => {
    if (!isTimerRunning) return

    const interval = setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - startTimeRef.current) / 1000))
    }, 1000)

    return () => clearInterval(interval)
  }, [isTimerRunning])

  const updateSelectedCells = (cells: Cell[]) => {
    selectionRef.current = cells
    setSelectedCells(cells)
  }

  const getCellFromPosition = (x: number, y: number) => {
    const column = Math.floor(x / CELL_SIZE)
    const row = Math.floor(y / CELL_SIZE)
    if (row < 0 || row >= rows || column < 0 || column >= columns) {
      return null
    }

    return {
      row,
      column
    }
  }

  const getLineCells = (
    start: { row: number; column: number },
    end: { row: number; column: number }
  ) => {
    const rowDifference = end.row - start.row
    const columnDifference = end.column - start.column
    const rowStep = rowDifference === 0 ? 0 : rowDifference > 0 ? 1 : -1
    const columnStep =
      columnDifference === 0 ? 0 : columnDifference > 0 ? 1 : -1

    if (
      rowDifference !== 0 &&
      columnDifference !== 0 &&
      Math.abs(rowDifference) !== Math.abs(columnDifference)
    ) {
      return []
    }

    const length =
      Math.max(Math.abs(rowDifference), Math.abs(columnDifference)) + 1

    const result = []
    for (let i = 0; i < length; i++) {
      result.push({
        row: start.row + rowStep * i,
        column: start.column + columnStep * i
      })
    }

    return result
  }

  const checkSelection = (cells: Cell[]) => {
    if (cells.length < 2) return

    const selectedWord = normalizeWord(
      cells.map(({ row, column }) => puzzle.grid[row][column]).join('')
    )

    const foundWord = words.find(
      word =>
        normalizeWord(word) === selectedWord ||
        normalizeWord(word) === selectedWord.split('').reverse().join('')
    )

    if (!foundWord) return

    setFoundWords(previous => {
      const alreadyFound = previous.some(
        word => normalizeWord(word) === normalizeWord(foundWord)
      )

      return alreadyFound ? previous : [...previous, foundWord]
    })
  }

  const startSelection = (x: number, y: number) => {
    const cell = getCellFromPosition(x, y)

    if (!cell) return

    startCell.current = cell
    updateSelectedCells([cell])
  }

  const updateSelection = (x: number, y: number) => {
    if (!startCell.current) return
    const currentCell = getCellFromPosition(x, y)
    if (!currentCell) return

    const cells = getLineCells(startCell.current, currentCell)
    if (cells.length > 0) {
      updateSelectedCells(cells)
    }
  }

  const endSelection = () => {
    const cells = selectionRef.current

    startCell.current = null

    if (cells.length > 0) {
      checkSelection(cells)
    }

    updateSelectedCells([])
  }

  const panGesture = Gesture.Pan()
    .runOnJS(true)
    .onBegin(event => {
      startSelection(event.x, event.y)
    })
    .onUpdate(event => {
      updateSelection(event.x, event.y)
    })
    .onEnd(() => {
      endSelection()
    })

  const isSelected = (row: number, column: number) => {
    return selectedCells.some(
      cell => cell.row === row && cell.column === column
    )
  }

  const isFound = (row: number, column: number) => {
    return foundWords.some(word => {
      const positions = puzzle.positions[word]
      return positions?.some(
        position => position.row === row && position.column === column
      )
    })
  }

  async function submitSoupResult() {
    if (submittedRef.current || isSubmitting) return

    submittedRef.current = true
    setIsSubmitting(true)
    const finalElapsedSeconds = Math.floor(
      (Date.now() - startTimeRef.current) / 1000
    )

    setElapsedSeconds(finalElapsedSeconds)
    setIsTimerRunning(false)

    const totalWords = words.length
    const correctWords = foundWords.length

    const baseScore = correctWords * 100
    const timePenalty = Math.floor(finalElapsedSeconds / 30) * 5
    const finalScore = Math.max(0, baseScore - timePenalty)

    const payload = {
      totalWords,
      correctWords,
      incorrectWords: totalWords - correctWords,
      elapsedSeconds: finalElapsedSeconds,
      baseScore,
      timePenalty,
      finalScore,
      foundWords
    }

    setIsSubmitting(false)
    onComplete(payload.finalScore)
  }

  return (
    <View className='items-center'>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName='p-4 pb-16 relative'
      >
        <GestureDetector gesture={panGesture}>
          <View
            className='border border-border'
            style={{
              width: columns * CELL_SIZE,
              height: rows * CELL_SIZE
            }}
          >
            {Array.from({ length: rows }).map((_, row) => (
              <View key={row} className='flex-row'>
                {Array.from({ length: columns }).map((_, column) => {
                  const selected = isSelected(row, column)
                  const found = isFound(row, column)

                  return (
                    <View
                      key={`${row}-${column}`}
                      className={`h-10 w-10 items-center justify-center border border-border ${
                        selected
                          ? 'bg-blue-400'
                          : found
                            ? 'bg-primary'
                            : 'bg-background'
                      }`}
                    >
                      <Text className='text-base font-bold'>
                        {puzzle.grid[row][column]}
                      </Text>
                    </View>
                  )
                })}
              </View>
            ))}
          </View>
        </GestureDetector>

        <View className='absolute bottom-0 right-0 w-full pr-8 pb-4'>
          <View className='bg-muted rounded-full h-1' />
        </View>
      </ScrollView>

      <View className='mt-6 w-full px-4'>
        <View className='flex-row justify-between items-center mb-3'>
          <Text className='text-lg font-bold'>Palabras</Text>
          <Text className='font-bold'>
            {foundWords.length} / {words.length}
          </Text>
          <Text className='font-bold'>{formatTime(elapsedSeconds)}</Text>
        </View>

        <View className='flex-row flex-wrap border border-border rounded bg-card'>
          {words.map(word => {
            const found = foundWords.includes(word)
            return (
              <View key={word} className='w-1/2 py-1'>
                <Text
                  className={`text-base text-center ${
                    found ? 'text-primary line-through' : ''
                  }`}
                >
                  {found ? '✓ ' : ''}
                  {word}
                </Text>
              </View>
            )
          })}
        </View>
      </View>
    </View>
  )
}

interface Props {
  soup: SOUP_STEP
  onComplete: (xp: number) => void
  sectionId: string
}
export function Soup({ soup, onComplete, sectionId }: Props) {
  const { user } = useUserStore()

  return (
    <ScrollView className='flex-1 bg-background'>
      <SopaDeLetras
        rows={soup.rows}
        columns={soup.columns}
        words={soup.soup}
        onComplete={async xp => {
          const [_, error] = await safePromise(
            axiosInstance.post('/activities/save-progress', {
              user_id: user?.id,
              quest_id: soup.id,
              section_id: sectionId,
              experience_points: xp
            })
          )

          if (error) {
            Toast.show({
              type: 'error',
              text1: 'Error',
              text2: 'No fue posible guardar tu progreso'
            })

            return
          }

          Toast.show({
            type: 'success',
            text1: 'Éxito',
            text2: 'Se guardó tu progreso'
          })

          onComplete(xp)
        }}
      />
    </ScrollView>
  )
}

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}
