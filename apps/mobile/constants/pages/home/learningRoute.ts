import { Node, RouteSection } from './routeEntities'
export const learningRoute = [
  new RouteSection('1a', 'Sección A', [
    new Node(
      'quest-1',
      'quest',
      'Descubriendo Ocaña',
      'Explora los acontecimientos y personajes que dieron forma a la historia de Ocaña.',
      0,
      'book',
      'ar-1'
    ),
    new Node(
      'ar-1',
      'mission',
      'Explora el pasado',
      'Viaja al pasado y descubre lugares importantes que hacen parte de la memoria histórica de Ocaña.',
      0.9,
      'paper',
      'quiz-1'
    ),
    new Node(
      'quiz-1',
      'quiz',
      'Pon a prueba tus conocimientos',
      'Responde preguntas sobre los acontecimientos y elementos históricos que has aprendido hasta ahora.',
      0.2,
      'quiz',
      'ar-2'
    ),
    new Node(
      'ar-2',
      'mission',
      'Ocaña en realidad aumentada',
      'Interactúa con elementos históricos mediante realidad aumentada y descubre una nueva forma de aprender.',
      0.45,
      'chestCard',
      'quiz-2'
    ),
    new Node(
      'quiz-2',
      'quiz',
      '¿Cuánto recuerdas?',
      'Pon a prueba tu memoria respondiendo preguntas sobre los contenidos que has explorado.',
      0.9,
      'crystal',
      'quest-5',
      true
    ),
    new Node(
      'quest-5',
      'quest',
      'Una historia por descubrir',
      'Conoce nuevos acontecimientos históricos y descubre cómo influyeron en el desarrollo de Ocaña.',
      0.4,
      'compass',
      'crossword-1'
    ),
    new Node(
      'crossword-1',
      'mission',
      'Personajes y acontecimientos',
      'Completa el crucigrama y demuestra cuánto sabes sobre los personajes y acontecimientos de la historia local.',
      0.8,
      'puzzle',
      'soup-1',
      true
    ),
    new Node(
      'soup-1',
      'mission',
      'Busca en la historia',
      'Encuentra palabras relacionadas con la historia, cultura y patrimonio de Ocaña.',
      0.7,
      'castle',
      'puzzle-1',
      true
    ),
    new Node(
      'puzzle-1',
      'quest',
      'Arma la historia',
      'Completa el rompecabezas y descubre una imagen relacionada con el patrimonio histórico de Ocaña.',
      0.35,
      'quiz',
      '',
      true
    )
  ]),
  new RouteSection('1b', 'Sección B', [
    new Node(
      'quest-2',
      'quest',
      'Conoce nuestra historia',
      'Continúa tu recorrido por la historia de Ocaña y descubre nuevos acontecimientos importantes.',
      0,
      'chestCard',
      'quiz-3'
    ),
    new Node(
      'quiz-3',
      'quiz',
      'Desafío histórico',
      'Demuestra tus conocimientos respondiendo preguntas sobre la historia local.',
      0.15,
      'gear',
      'quest-3'
    ),
    new Node(
      'quest-3',
      'quest',
      'Historias que dejaron huella',
      'Descubre acontecimientos y personajes que dejaron una huella importante en la historia de Ocaña.',
      1,
      'puzzle',
      'quiz-4'
    ),
    new Node(
      'quiz-4',
      'quiz',
      'Reto de conocimientos',
      'Resuelve este desafío y demuestra cuánto has aprendido durante tu recorrido histórico.',
      0.55,
      'book',
      'quest-4'
    ),
    new Node(
      'quest-4',
      'quest',
      'Nuestro patrimonio',
      'Conoce parte del patrimonio cultural e histórico que identifica a Ocaña y sus habitantes.',
      0.4,
      'chestCard',
      'ar-3'
    ),
    new Node(
      'ar-3',
      'mission',
      'Descubre con realidad aumentada',
      'Explora un elemento histórico mediante realidad aumentada y aprende de forma interactiva.',
      0,
      'compass'
    )
  ])
]
