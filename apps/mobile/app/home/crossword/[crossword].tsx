/** biome-ignore-all lint/suspicious/noArrayIndexKey: <Array vacío> */
import { useLocalSearchParams, useRouter } from 'expo-router'
import { ArrowLeft } from 'lucide-react-native'
import { useMemo, useState } from 'react'
import { Pressable, TextInput, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { CROSSWORDS } from '@/constants/pages/home/crossword'

interface Props {
  rows: number
  columns: number
  words: {
    word: string
    row: number
    column: number
    direction: 'horizontal' | 'vertical'
  }[]
}
export function CrosswordMap({ rows, columns, words = [] }: Props) {
  const [letters, setLetters] = useState<Record<string, string>>({})
  const [checked, setChecked] = useState(false)

  const cells = useMemo(() => {
    const result: Record<
      string,
      { row: number; column: number; solution: string }
    > = {}
    words.forEach(item => {
      const { word, row, column, direction } = item
      ;[...word].forEach((letter, index) => {
        const currentRow = direction === 'vertical' ? row + index : row
        const currentColumn =
          direction === 'horizontal' ? column + index : column

        const key = `${currentRow}-${currentColumn}`
        result[key] = {
          row: currentRow,
          column: currentColumn,
          solution: letter.toUpperCase()
        }
      })
    })

    return result
  }, [words])

  const cellNumbers = useMemo(() => {
    const result: Record<string, number> = {}
    let number = 1

    words.forEach(word => {
      const key = `${word.row}-${word.column}`

      if (!result[key]) {
        result[key] = number++
      }
    })

    return result
  }, [words])

  const handleLetter = (row: number, column: number, value: string) => {
    const key = `${row}-${column}`

    const letter = value
      .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ]/g, '')
      .slice(-1)
      .toUpperCase()

    setLetters(previous => ({
      ...previous,
      [key]: letter
    }))

    setChecked(false)
  }

  const getCellStatus = (row: number, column: number) => {
    if (!checked) {
      return 'normal'
    }

    const key = `${row}-${column}`
    const cell = cells[key]
    const answer = letters[key]

    if (!answer) {
      return 'empty'
    }

    if (answer === cell.solution) {
      return 'correct'
    }

    return 'incorrect'
  }

  const checkResults = () => {
    setChecked(true)
  }

  const isComplete = useMemo(() => {
    return Object.keys(cells).every(key => {
      return letters[key] === cells[key].solution
    })
  }, [cells, letters])

  return (
    <View className='items-center gap-4'>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='border border-border bg-card rounded p-2 mx-4'
      >
        <View
          className='gap-1'
          style={{
            width: columns * 40
          }}
        >
          {Array.from({ length: rows }).map((_, row) => (
            <View key={`tile - ${row}`} className='flex-row gap-1'>
              {Array.from({ length: columns }).map((_, column) => {
                const key = `${row}-${column}`
                const cell = cells[key]
                if (!cell) {
                  return <View key={key} className='h-10 w-10' />
                }

                const status = getCellStatus(row, column)
                let background = 'bg-background'

                if (status === 'correct') {
                  background = 'bg-primary'
                }

                if (status === 'incorrect') {
                  background = 'bg-destructive'
                }

                if (status === 'empty') {
                  background = 'bg-muted'
                }

                return (
                  <Pressable
                    key={key}
                    className={`h-10 w-10 items-center justify-center border border-border rounded overflow-hidden ${background}`}
                  >
                    {cellNumbers[key] && (
                      <Text className='absolute left-1 top-0 text-[9px] font-bold text-secondary-foreground'>
                        {cellNumbers[key]}
                      </Text>
                    )}

                    <TextInput
                      value={letters[key] || ''}
                      onChangeText={value => handleLetter(row, column, value)}
                      maxLength={1}
                      autoCapitalize='characters'
                      className='h-10 w-10 p-0 text-center text-lg font-bold text-foreground'
                      textAlign='center'
                    />
                  </Pressable>
                )
              })}
            </View>
          ))}
        </View>
      </ScrollView>

      {checked && (
        <View className='mt-4 items-center'>
          {isComplete ? (
            <Text className='text-lg font-bold text-green-600'>
              ¡Crucigrama correcto! 🎉
            </Text>
          ) : (
            <Text className='text-lg font-bold text-red-600'>
              Hay respuestas incorrectas.
            </Text>
          )}
        </View>
      )}

      <Button onPress={checkResults}>
        <Text className='font-bold'>Comprobar resultados</Text>
      </Button>
    </View>
  )
}

export default function Crossword() {
  const { crossword } = useLocalSearchParams()
  const CROSSWORD = CROSSWORDS[crossword as keyof typeof CROSSWORDS]
  const router = useRouter()

  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='flex-row p-4 gap-4 items-center'>
        <TouchableOpacity onPress={() => router.back()}>
          <Icon as={ArrowLeft} />
        </TouchableOpacity>
        <Text variant='h4'>Volver</Text>
      </View>

      <CrosswordMap
        rows={CROSSWORD.rows}
        columns={CROSSWORD.columns}
        words={CROSSWORD.words}
      />

      <View className='flex-row flex-wrap p-4 border border-border m-4 rounded bg-card'>
        {CROSSWORD.hints.map((hint, index) => (
          <View key={index} className='w-1/2 py-2 px-1'>
            <Text className='text-base'>
              {index + 1}. {hint}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}
