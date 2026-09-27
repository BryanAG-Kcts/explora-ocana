export const SOUPS = {
  'soup-1': {
    columns: 10,
    rows: 10,
    soup: ['REACT', 'NATIVE', 'JAVASCRIPT', 'TAILWIND', 'COMPONENTE', 'CHINO']
  }
}

export const CELL_SIZE = 40

const DIRECTIONS = [
  { row: 0, column: 1 },
  { row: 0, column: -1 },
  { row: 1, column: 0 },
  { row: -1, column: 0 },
  { row: 1, column: 1 },
  { row: -1, column: -1 },
  { row: 1, column: -1 },
  { row: -1, column: 1 }
]

export function generatePuzzle(rows: number, columns: number, words: string[]) {
  const grid = Array.from({ length: rows }, () => Array(columns).fill(null))
  const positions: { [key: string]: { row: number; column: number }[] } = {}
  const shuffledWords = [...words].sort((a, b) => b.length - a.length)

  shuffledWords.forEach(word => {
    const upperWord = word.toUpperCase()

    let placed = false

    for (let attempt = 0; attempt < 500 && !placed; attempt++) {
      const direction =
        DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)]

      const startRow = Math.floor(Math.random() * rows)
      const startColumn = Math.floor(Math.random() * columns)
      const endRow = startRow + direction.row * (upperWord.length - 1)
      const endColumn = startColumn + direction.column * (upperWord.length - 1)

      if (
        endRow < 0 ||
        endRow >= rows ||
        endColumn < 0 ||
        endColumn >= columns
      ) {
        continue
      }

      let valid = true

      for (let i = 0; i < upperWord.length; i++) {
        const row = startRow + direction.row * i
        const column = startColumn + direction.column * i
        const current = grid[row][column]

        if (current !== null && current !== upperWord[i]) {
          valid = false
          break
        }
      }

      if (!valid) {
        continue
      }

      const wordPositions = []

      for (let i = 0; i < upperWord.length; i++) {
        const row = startRow + direction.row * i
        const column = startColumn + direction.column * i
        grid[row][column] = upperWord[i]

        wordPositions.push({
          row,
          column
        })
      }

      positions[word] = wordPositions
      placed = true
    }
  })

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      if (grid[row][column] === null) {
        grid[row][column] =
          alphabet[Math.floor(Math.random() * alphabet.length)]
      }
    }
  }

  return {
    grid,
    positions
  }
}
