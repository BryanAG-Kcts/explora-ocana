/** biome-ignore-all lint/suspicious/noArrayIndexKey: <Array vacío> */
import { useEffect, useMemo, useRef, useState } from 'react'
import { Pressable, TextInput, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Toast from 'react-native-toast-message'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import type { CROSSWORD_STEP } from '@/constants/games/games'
import { axiosInstance, safePromise } from '@/constants/global/axios'
import { useUserStore } from '@/hooks/userStore'

interface CrosswordWord {
  word: string
  row: number
  column: number
  direction: 'horizontal' | 'vertical'
}

interface CrosswordMapProps {
  rows: number
  columns: number
  words: CrosswordWord[]
  onComplete: (result: CrosswordResult) => void
}

type Cell = {
  row: number
  column: number
  solution: string
}

export function CrosswordMap({
  rows,
  columns,
  words = [],
  onComplete
}: CrosswordMapProps) {
  const [letters, setLetters] = useState<Record<string, string>>({})
  const [checked, setChecked] = useState(false)
  const [completed, setCompleted] = useState(false)

  // Evita ejecutar onComplete más de una vez.
  const completedRef = useRef(false)
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const [moves, setMoves] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  const startTimeRef = useRef<number | null>(null)
  const movesRef = useRef(0)

  const correctWords = useMemo(() => {
    return words.filter(({ word, row, column, direction }) => {
      const normalizedWord = [...word.trim().toLocaleUpperCase()]

      return normalizedWord.every((letter, index) => {
        const currentRow = direction === 'vertical' ? row + index : row

        const currentColumn =
          direction === 'horizontal' ? column + index : column

        return letters[`${currentRow}-${currentColumn}`] === letter
      })
    }).length
  }, [words, letters])

  useEffect(() => {
    if (!isRunning) {
      return
    }

    const interval = setInterval(() => {
      if (startTimeRef.current !== null) {
        setElapsedSeconds(
          Math.floor((Date.now() - startTimeRef.current) / 1000)
        )
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning])

  const { cells, configurationErrors } = useMemo(() => {
    const result: Record<string, Cell> = {}
    const errors: string[] = []

    words.forEach((item, wordIndex) => {
      const word = item.word.trim().toLocaleUpperCase()

      if (!word) {
        errors.push(`La palabra ${wordIndex + 1} está vacía.`)
        return
      }

      if (
        !Number.isInteger(item.row) ||
        !Number.isInteger(item.column) ||
        item.row < 0 ||
        item.column < 0
      ) {
        errors.push(
          `La posición inicial de la palabra ${wordIndex + 1} no es válida.`
        )
        return
      }

      ;[...word].forEach((letter, index) => {
        const currentRow =
          item.direction === 'vertical' ? item.row + index : item.row

        const currentColumn =
          item.direction === 'horizontal' ? item.column + index : item.column

        if (currentRow >= rows || currentColumn >= columns) {
          errors.push(
            `La palabra ${wordIndex + 1} excede los límites del tablero.`
          )
          return
        }

        const key = `${currentRow}-${currentColumn}`
        const existingCell = result[key]

        if (existingCell && existingCell.solution !== letter) {
          errors.push(
            `Hay un conflicto de letras en la fila ${currentRow + 1}, columna ${currentColumn + 1}.`
          )
          return
        }

        result[key] = {
          row: currentRow,
          column: currentColumn,
          solution: letter
        }
      })
    })

    return {
      cells: result,
      configurationErrors: [...new Set(errors)]
    }
  }, [words, rows, columns])

  // Numeración de las casillas iniciales en orden de lectura.
  const cellNumbers = useMemo(() => {
    const starts = new Set(
      words
        .filter(
          word =>
            word.word.trim().length > 0 &&
            Number.isInteger(word.row) &&
            Number.isInteger(word.column) &&
            word.row >= 0 &&
            word.row < rows &&
            word.column >= 0 &&
            word.column < columns
        )
        .map(word => `${word.row}-${word.column}`)
    )

    const sortedStarts = [...starts].sort((a, b) => {
      const [rowA, columnA] = a.split('-').map(Number)
      const [rowB, columnB] = b.split('-').map(Number)

      return rowA - rowB || columnA - columnB
    })

    const result: Record<string, number> = {}

    sortedStarts.forEach((key, index) => {
      result[key] = index + 1
    })

    return result
  }, [words, rows, columns])

  const isComplete = useMemo(() => {
    if (configurationErrors.length > 0 || Object.keys(cells).length === 0) {
      return false
    }

    return Object.entries(cells).every(
      ([key, cell]) => letters[key] === cell.solution
    )
  }, [cells, letters, configurationErrors])

  const handleLetter = (row: number, column: number, value: string) => {
    if (completedRef.current) {
      return
    }

    const key = `${row}-${column}`

    const letter = [...value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]/g, '')]
      .slice(-1)
      .join('')
      .toLocaleUpperCase()

    const previousLetter = letters[key] ?? ''

    if (previousLetter === letter) {
      return
    }

    if (letter && startTimeRef.current === null) {
      startTimeRef.current = Date.now()
      setIsRunning(true)
    }

    movesRef.current += 1
    setMoves(movesRef.current)

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

    return answer === cell.solution ? 'correct' : 'incorrect'
  }

  const checkResults = () => {
    setChecked(true)

    if (!isComplete || completedRef.current || configurationErrors.length > 0) {
      return
    }

    completedRef.current = true

    const finalTime =
      startTimeRef.current === null
        ? 0
        : Math.floor((Date.now() - startTimeRef.current) / 1000)

    setIsRunning(false)
    setElapsedSeconds(finalTime)
    setCompleted(true)

    const result: CrosswordResult = {
      score: calculateCrosswordScore(correctWords, movesRef.current, finalTime),
      correctWords,
      totalWords: words.length,
      moves: movesRef.current,
      timeSeconds: finalTime
    }

    onComplete(result)
  }

  return (
    <View className='items-center gap-4'>
      {configurationErrors.length > 0 && (
        <View className='mx-4 rounded border border-destructive bg-card p-3'>
          <Text className='font-bold text-destructive'>
            La configuración del crucigrama contiene errores:
          </Text>

          {configurationErrors.map((error, index) => (
            <Text key={`${error}-${index}`} className='mt-1 text-sm'>
              • {error}
            </Text>
          ))}
        </View>
      )}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='mx-4 rounded border border-border bg-card p-2'
      >
        <View className='gap-1' style={{ width: columns * 40 }}>
          {Array.from({ length: rows }, (_, row) => (
            <View key={row} className='flex-row gap-1'>
              {Array.from({ length: columns }, (_, column) => {
                const key = `${row}-${column}`
                const cell = cells[key]

                if (!cell) {
                  return <View key={key} className='h-10 w-10' />
                }

                const status = getCellStatus(row, column)

                let background = 'bg-background'

                if (status === 'correct') {
                  background = 'bg-primary'
                } else if (status === 'incorrect') {
                  background = 'bg-destructive'
                } else if (status === 'empty') {
                  background = 'bg-muted'
                }

                return (
                  <Pressable
                    key={key}
                    className={`h-10 w-10 items-center justify-center overflow-hidden rounded border border-border ${background}`}
                  >
                    {cellNumbers[key] && (
                      <Text className='absolute left-1 top-0 text-[9px] font-bold text-secondary-foreground'>
                        {cellNumbers[key]}
                      </Text>
                    )}

                    <TextInput
                      value={letters[key] ?? ''}
                      onChangeText={value => handleLetter(row, column, value)}
                      editable={!completed}
                      maxLength={1}
                      autoCapitalize='characters'
                      autoCorrect={false}
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

      <View className='w-full flex-row flex-wrap justify-around gap-3 px-4'>
        <View className='items-center'>
          <Text className='text-sm text-muted-foreground'>Tiempo</Text>
          <Text className='text-lg font-bold'>
            {formatTime(elapsedSeconds)}
          </Text>
        </View>

        <View className='items-center'>
          <Text className='text-sm text-muted-foreground'>Movimientos</Text>
          <Text className='text-lg font-bold'>{moves}</Text>
        </View>

        <View className='items-center'>
          <Text className='text-sm text-muted-foreground'>Palabras</Text>
          <Text className='text-lg font-bold'>
            {correctWords}/{words.length}
          </Text>
        </View>

        <View className='items-center'>
          <Text className='text-sm text-muted-foreground'>Puntos</Text>
          <Text className='text-lg font-bold'>
            {calculateCrosswordScore(correctWords, moves, elapsedSeconds)}
          </Text>
        </View>
      </View>

      {checked && configurationErrors.length === 0 && (
        <View className='mt-2 items-center'>
          {isComplete ? (
            <Text className='text-lg font-bold text-green-600'>
              ¡Crucigrama correcto! 🎉
            </Text>
          ) : (
            <Text className='text-lg font-bold text-red-600'>
              Hay respuestas incorrectas o incompletas.
            </Text>
          )}
        </View>
      )}

      <Button
        onPress={checkResults}
        disabled={completed || configurationErrors.length > 0}
      >
        <Text className='font-bold'>
          {completed ? 'Crucigrama completado' : 'Comprobar resultados'}
        </Text>
      </Button>
    </View>
  )
}

interface Props {
  crossword: CROSSWORD_STEP
  onComplete: (xp: number) => void
  sectionId: string
}

export function Crossword({ crossword, onComplete, sectionId }: Props) {
  const { user } = useUserStore()

  async function onSubmit(result: CrosswordResult) {
    const [_, error] = await safePromise(
      axiosInstance.post('/activities/save-progress', {
        user_id: user?.id,
        quest_id: crossword.id,
        section_id: sectionId,
        experience_points: result.score
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

    onComplete(result.score)
  }

  return (
    <ScrollView className='flex-1 bg-background'>
      <CrosswordMap
        rows={crossword.rows}
        columns={crossword.columns}
        words={crossword.words}
        onComplete={onSubmit}
      />

      <View className='m-4 flex-row flex-wrap rounded border border-border bg-card p-4'>
        {crossword.hints.map((hint, index) => {
          const word = crossword.words[index]
          const number = word
            ? crossword.words
                .filter(
                  item =>
                    item.row < word.row ||
                    (item.row === word.row && item.column < word.column)
                )
                .map(item => `${item.row}-${item.column}`)
                .filter((key, i, all) => all.indexOf(key) === i).length + 1
            : index + 1

          return (
            <View key={`${index}-${hint}`} className='w-1/2 px-1 py-2'>
              <Text className='text-base'>
                {number}. {hint}
              </Text>
            </View>
          )
        })}
      </View>
    </ScrollView>
  )
}

type CrosswordResult = {
  score: number
  correctWords: number
  totalWords: number
  moves: number
  timeSeconds: number
}

const calculateCrosswordScore = (
  correctWords: number,
  moves: number,
  timeSeconds: number
) => {
  const pointsPerWord = 100
  const movementPenalty = 2
  const timePenalty = 1

  return Math.max(
    0,
    correctWords * pointsPerWord -
      moves * movementPenalty -
      timeSeconds * timePenalty
  )
}

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  return `${String(minutes).padStart(2, '0')}:${String(
    remainingSeconds
  ).padStart(2, '0')}`
}
