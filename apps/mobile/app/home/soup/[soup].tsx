/** biome-ignore-all lint/suspicious/noArrayIndexKey: <Array vacío> */
import { useLocalSearchParams, useRouter } from 'expo-router'
import { ArrowLeft } from 'lucide-react-native'
import { useMemo, useRef, useState } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { CELL_SIZE, generatePuzzle, SOUPS } from '@/constants/pages/home/soup'

interface Props {
  rows?: number
  columns?: number
  words?: string[]
}

export function SopaDeLetras({ rows = 10, columns = 10, words = [] }: Props) {
  const [selectedCells, setSelectedCells] = useState<
    { row: number; column: number }[]
  >([])
  const [foundWords, setFoundWords] = useState<string[]>([])
  const startCell = useRef<{ row: number; column: number }>(null)
  const puzzle = useMemo(
    () => generatePuzzle(rows, columns, words),
    [rows, columns, words]
  )

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

  const checkSelection = (cells: { row: number; column: number }[]) => {
    if (cells.length < 2) {
      return
    }

    const selectedWord = cells
      .map(({ row, column }) => puzzle.grid[row][column])
      .join('')

    const reversedWord = selectedWord.split('').reverse().join('')
    const foundWord = words.find(word => {
      const normalized = word.toUpperCase()
      return normalized === selectedWord || normalized === reversedWord
    })

    if (foundWord && !foundWords.includes(foundWord)) {
      setFoundWords(previous => [...previous, foundWord])
    }
  }

  const updateSelection = (x: number, y: number) => {
    if (!startCell.current) {
      return
    }

    const currentCell = getCellFromPosition(x, y)
    if (!currentCell) {
      return
    }

    const cells = getLineCells(startCell.current, currentCell)

    if (cells.length > 0) {
      setSelectedCells(cells)
    }
  }

  const startSelection = (x: number, y: number) => {
    const cell = getCellFromPosition(x, y)

    if (!cell) {
      return
    }

    startCell.current = cell
    setSelectedCells([cell])
  }

  const endSelection = () => {
    if (selectedCells.length > 0) {
      checkSelection(selectedCells)
    }

    startCell.current = null
    setTimeout(() => {
      setSelectedCells([])
    }, 100)
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
        <View className='flex-row justify-between'>
          <Text className='mb-3 text-lg font-bold'>Palabras</Text>
          <Text className='font-bold'>
            {foundWords.length} / {words.length}
          </Text>
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

export default function Soup() {
  const { soup } = useLocalSearchParams()
  const router = useRouter()

  const words = SOUPS[soup as keyof typeof SOUPS]
  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='flex-row p-4 gap-4 items-center'>
        <TouchableOpacity onPress={() => router.back()}>
          <Icon as={ArrowLeft} />
        </TouchableOpacity>
        <Text variant='h4'>Volver</Text>
      </View>

      <SopaDeLetras
        rows={words.rows}
        columns={words.columns}
        words={words.soup}
      />
    </ScrollView>
  )
}
