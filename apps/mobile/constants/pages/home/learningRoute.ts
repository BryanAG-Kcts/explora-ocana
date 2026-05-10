import { Node, RouteSection } from './routeEntities'

export const learningRoute = [
  new RouteSection(
    '1a',
    'Sección A',
    [
      new Node('quest-1', 'quest', 0, 0, [
        new Node('5a', 'ar', 100, 290, [
          new Node('quiz-1', 'quiz', 0, 450, [
            new Node('quest-5', 'quest', 250, 480, [
              new Node('quest-6', 'quest', 50, 650, [], true)
            ])
          ])
        ])
      ]),
      new Node('quiz-2', 'quiz', 250, 100, [], true)
    ],
    250,
    650
  ),
  new RouteSection(
    '1b',
    'Sección B',
    [
      new Node('quest-2', 'quest', 0, 0, [
        new Node('quiz-3', 'quiz', 250, 100, [
          new Node('quest-3', 'quest', 0, 200, [
            new Node('quiz-4', 'quiz', 250, 250, [
              new Node('quest-4', 'quest', 50, 350, [])
            ])
          ])
        ])
      ])
    ],
    250,
    350
  )
]
