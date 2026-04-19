import { Node, RouteSection } from './routeEntities'

export const learningRoute = [
  new RouteSection(
    '1a',
    'Sección A',
    [
      new Node('2a', 'quest', 0, 0, [
        new Node('5a', 'quiz', 100, 290, [
          new Node('6a', 'quiz', 0, 500, [], true)
        ])
      ]),
      new Node('3a', 'ar', 180, 128, [new Node('4a', 'quiz', 250, 450, [])])
    ],
    250,
    500
  ),
  new RouteSection(
    '1b',
    'Sección B',
    [
      new Node('2b', 'quest', 0, 0, []),
      new Node('3b', 'quest', 180, 128, [new Node('4b', 'quest', 250, 250, [])])
    ],
    250,
    250
  )
]
