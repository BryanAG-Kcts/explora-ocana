import { Node, RouteSection } from './routeEntities'

export const learningRoute = [
  new RouteSection(
    '1a',
    'Sección A',
    [
      new Node(
        'quest-1',
        'quest',
        'Descubriendo Ocaña',
        'Explora los acontecimientos y personajes que dieron forma a la historia de Ocaña.',
        0,
        0,
        ['ar-1', 'quiz-2']
      ),

      new Node(
        'ar-1',
        'ar',
        'Explora el pasado',
        'Viaja al pasado y descubre lugares importantes que hacen parte de la memoria histórica de Ocaña.',
        100,
        290,
        ['quiz-1']
      ),

      new Node(
        'quiz-1',
        'quiz',
        'Pon a prueba tus conocimientos',
        'Responde preguntas sobre los acontecimientos y elementos históricos que has aprendido hasta ahora.',
        0,
        450,
        ['quest-5']
      ),

      new Node(
        'quest-5',
        'quest',
        'Una historia por descubrir',
        'Conoce nuevos acontecimientos históricos y descubre cómo influyeron en el desarrollo de Ocaña.',
        250,
        480,
        ['crossword-1']
      ),

      new Node(
        'crossword-1',
        'crossword',
        'Personajes y acontecimientos',
        'Completa el crucigrama y demuestra cuánto sabes sobre los personajes y acontecimientos de la historia local.',
        50,
        650,
        ['soup-1'],
        true
      ),

      new Node(
        'soup-1',
        'soup',
        'Busca en la historia',
        'Encuentra palabras relacionadas con la historia, cultura y patrimonio de Ocaña.',
        200,
        850,
        ['puzzle-1'],
        true
      ),

      new Node(
        'puzzle-1',
        'puzzle',
        'Arma la historia',
        'Completa el rompecabezas y descubre una imagen relacionada con el patrimonio histórico de Ocaña.',
        250,
        950
      ),

      new Node(
        'quiz-2',
        'quiz',
        '¿Cuánto recuerdas?',
        'Pon a prueba tu memoria respondiendo preguntas sobre los contenidos que has explorado.',
        250,
        100,
        ['ar-2'],
        true
      ),

      new Node(
        'ar-2',
        'ar',
        'Ocaña en realidad aumentada',
        'Interactúa con elementos históricos mediante realidad aumentada y descubre una nueva forma de aprender.',
        280,
        300
      )
    ],
    250,
    950
  ),

  new RouteSection(
    '1b',
    'Sección B',
    [
      new Node(
        'quest-2',
        'quest',
        'Conoce nuestra historia',
        'Continúa tu recorrido por la historia de Ocaña y descubre nuevos acontecimientos importantes.',
        0,
        0,
        ['quiz-3']
      ),

      new Node(
        'quiz-3',
        'quiz',
        'Desafío histórico',
        'Demuestra tus conocimientos respondiendo preguntas sobre la historia local.',
        250,
        100,
        ['quest-3']
      ),

      new Node(
        'quest-3',
        'quest',
        'Historias que dejaron huella',
        'Descubre acontecimientos y personajes que dejaron una huella importante en la historia de Ocaña.',
        0,
        200,
        ['quiz-4']
      ),

      new Node(
        'quiz-4',
        'quiz',
        'Reto de conocimientos',
        'Resuelve este desafío y demuestra cuánto has aprendido durante tu recorrido histórico.',
        250,
        250,
        ['quest-4']
      ),

      new Node(
        'quest-4',
        'quest',
        'Nuestro patrimonio',
        'Conoce parte del patrimonio cultural e histórico que identifica a Ocaña y sus habitantes.',
        50,
        350,
        ['ar-3']
      ),

      new Node(
        'ar-3',
        'ar',
        'Descubre con realidad aumentada',
        'Explora un elemento histórico mediante realidad aumentada y aprende de forma interactiva.',
        250,
        450
      )
    ],
    250,
    450
  )
]
