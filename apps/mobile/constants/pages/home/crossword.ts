export const CROSSWORDS = {
  'crossword-1': {
    rows: 15,
    columns: 20,
    words: [
      {
        word: 'REACT',
        row: 1,
        column: 1,
        direction: 'horizontal' as const
      },
      {
        word: 'TAILWIND',
        row: 0,
        column: 3,
        direction: 'vertical' as const
      },
      {
        word: 'MANGO',
        row: 3,
        column: 4,
        direction: 'vertical' as const
      },
      {
        word: 'PATACON',
        row: 4,
        column: 5,
        direction: 'vertical' as const
      },
      {
        word: 'SU',
        row: 7,
        column: 8,
        direction: 'vertical' as const
      },
      {
        word: 'ERDA',
        row: 0,
        column: 6,
        direction: 'horizontal' as const
      }
    ],
    hints: [
      'Framework de JavaScript',
      'Framework de CSS',
      'Fruta tropical',
      'Comida típica de Colombia',
      'Pronombre posesivo',
      'Planeta del sistema solar'
    ]
  }
}
