import { Node, RouteSection } from './routeEntities'

export const learningRoute = [
  new RouteSection('S1', 'Raíces Indígenas', [
    new Node(
      'M1',
      'mission',
      'El misterio del nombre racista',
      'Descubre el verdadero origen del nombre "Carates" y el error médico de los españoles.',
      0.1,
      'book',
      'quiz-1'
    ),
    new Node(
      'quiz-1',
      'quiz',
      'Prueba tu memoria: Carates',
      'Demuestra qué tanto aprendiste sobre los primeros pobladores de la región.',
      0.4,
      'quiz',
      'M2'
    ),
    new Node(
      'M2',
      'mission',
      'Descubre tu barrio indígena',
      'Explora la historia de los Argutacaca y el antiguo pueblo oculto bajo las calles de Ocaña.',
      0.85,
      'compass',
      'quiz-2'
    ),
    new Node(
      'quiz-2',
      'quiz',
      'Reto: Territorio Argutacaca',
      'Responde preguntas sobre los antiguos barrios y los tres nombres del río.',
      1,
      'quiz',
      'M3'
    ),
    new Node(
      'M3',
      'mission',
      'Un día como Argutacaca',
      'Conoce la dieta, la caza, el vestuario y las costumbres de la época precolombina.',
      0.7,
      'paper',
      'quiz-3'
    ),
    new Node(
      'quiz-3',
      'quiz',
      'Desafío: Vida Cotidiana',
      '¿Recuerdas cómo se vestían y qué comían nuestros antepasados antes de la conquista?',
      0.25,
      'quiz',
      'M4'
    ),
    new Node(
      'M4',
      'mission',
      'Descifrando la sociedad',
      'Aprende sobre su modelo ecológico, sus ramadas y una sociedad donde no existían los jefes.',
      0,
      'puzzle',
      'quiz-4'
    ),
    new Node(
      'quiz-4',
      'quiz',
      'Evaluación: Sociedad y Lengua',
      'Demuestra tus conocimientos sobre la lengua palenque, los intérpretes y los caciques.',
      0.2,
      'quiz'
    )
  ]),

  new RouteSection('S2', 'Tierra y Conquista', [
    new Node(
      'M5',
      'mission',
      'Arqueología y Misterio',
      'Adéntrate en los hallazgos de urnas funerarias y el secreto de la Piedra Gorda.',
      0.5,
      'chestCard',
      'quiz-5'
    ),
    new Node(
      'quiz-5',
      'quiz',
      'Prueba: Hallazgos Antiguos',
      '¿Qué tanto sabes sobre los rituales funerarios y los petroglifos indígenas?',
      0.9,
      'quiz',
      'M6'
    ),
    new Node(
      'M6',
      'mission',
      'La fundación española',
      'Acompaña al capitán Francisco Fernández de Contreras en la creación invasiva de la ciudad.',
      1,
      'castle',
      'quiz-6'
    ),
    new Node(
      'quiz-6',
      'quiz',
      'Reto: El año 1570',
      'Responde preguntas sobre las fechas clave de la fundación y el diseño urbano en damero.',
      0.65,
      'quiz',
      'M7'
    ),
    new Node(
      'M7',
      'mission',
      'La ciudad colonial',
      'Explora la primera empresa de Ocaña, la caída de las iglesias y la leyenda de Antón García.',
      0.2,
      'gear',
      'quiz-7'
    ),
    new Node(
      'quiz-7',
      'quiz',
      'Desafío: Época Colonial',
      'Pon a prueba lo aprendido sobre los encomenderos y el jinete fantasma más famoso.',
      0,
      'quiz'
    )
  ]),

  new RouteSection('S3', 'Mitos, Fé y Libertad', [
    new Node(
      'M8',
      'mission',
      'Leonelda: Bruja o Heroína',
      'Conoce la historia de resistencia de las yerbateras y el grito de libertad en el Hatillo.',
      0.15,
      'crystal',
      'quiz-8'
    ),
    new Node(
      'quiz-8',
      'quiz',
      'Prueba: La Rebelión',
      '¿Recuerdas cómo se salvó Leonelda de la Inquisición española?',
      0.5,
      'quiz',
      'M9'
    ),
    new Node(
      'M9',
      'mission',
      'La Virgen de Torcoroma',
      'Descubre el milagro en el árbol de caña, los exvotos y el robo que conmocionó a Ocaña.',
      0.85,
      'book',
      'quiz-9'
    ),
    new Node(
      'quiz-9',
      'quiz',
      'Reto: Fe y Milagros',
      'Demuestra cuánto sabes sobre la patrona, el santuario nacional y la familia Melo.',
      1,
      'quiz',
      'M10'
    ),
    new Node(
      'M10',
      'mission',
      'Ocaña y la Independencia',
      'Vive el momento en que el joven Antonio trajo las noticias de libertad a la ciudad dividida.',
      0.6,
      'paper',
      'quiz-10'
    ),
    new Node(
      'quiz-10',
      'quiz',
      'Desafío Final: Libertad',
      'Supera esta última prueba sobre el levantamiento de los criollos y el fin de la colonia.',
      0.1,
      'quiz'
    )
  ])
]
