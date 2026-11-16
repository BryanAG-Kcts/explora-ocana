import { Node, RouteSection } from './routeEntities'

export const learningRoute = [
  new RouteSection('S1', 'Los pueblos originarios de Ocaña', [
    new Node(
      'M1',
      'mission',
      'El misterio del nombre racista',
      'Descubre por qué los españoles llamaron "Carates" a los indígenas y el error médico detrás de ese nombre.',
      0.5,
      'paper',
      'M2'
    ),
    new Node(
      'M2',
      'mission',
      'Descubre tu barrio indígena',
      'Conoce a los Argutacaca, el pueblo que vivió junto al río Arcuta, hoy Río Chiquito, bajo los barrios de Ocaña.',
      0.68,
      'compass',
      'M3'
    ),
    new Node(
      'M3',
      'mission',
      'Vive un día como Argutacaca',
      'Siembra según la luna, caza con arcos de qricua y descubre qué comían y cómo vestían.',
      0.8,
      'book',
      'quiz1'
    ),
    new Node(
      'quiz1',
      'quiz',
      'Desafío: Primeros pueblos',
      '¿Recuerdas el origen del nombre "Carates", el territorio Argutacaca y su vida cotidiana?',
      0.68,
      'quiz',
      'M4'
    ),
    new Node(
      'M4',
      'mission',
      'Descifrando la sociedad Argutacaca',
      'Una sociedad sin jefes, viviendas por elección y rituales que escandalizaron a los españoles.',
      0.5,
      'puzzle',
      'M5'
    ),
    new Node(
      'M5',
      'mission',
      'Arqueología y misterio',
      'Explora las urnas funerarias halladas en 1932 y los secretos de la Piedra Gorda de El Hatillo.',
      0.32,
      'chestCard',
      'quiz2'
    ),
    new Node(
      'quiz2',
      'quiz',
      'Prueba: Sociedad y hallazgos',
      '¿Qué tanto sabes de la organización Argutacaca, sus rituales funerarios y los petroglifos?',
      0.2,
      'quiz'
    )
  ]),
  new RouteSection('S2', 'La fundación y la ciudad colonial', [
    new Node(
      'M6',
      'mission',
      'La fundación española',
      'Acompaña a Francisco Fernández de Contreras en 1570 y decide si fue una fundación o una invasión.',
      0.32,
      'castle',
      'M7'
    ),
    new Node(
      'M7',
      'mission',
      'La ciudad colonial',
      'La primera empresa de Ocaña, sus iglesias, la caída de la población indígena y la leyenda de Antón García.',
      0.5,
      'gear',
      'quiz3'
    ),
    new Node(
      'quiz3',
      'quiz',
      'Desafío: Época colonial',
      'Pon a prueba lo que sabes de la fundación, los encomenderos y el jinete fantasma más famoso.',
      0.68,
      'quiz'
    )
  ]),
  new RouteSection('S3', 'Leonelda y las yerbateras', [
    new Node(
      'M8',
      'mission',
      'Leonelda: bruja o heroína',
      'Conoce a las yerbateras perseguidas por la Inquisición y el grito de libertad en el Alto del Hatillo.',
      0.8,
      'crystal',
      'quiz4'
    ),
    new Node(
      'quiz4',
      'quiz',
      'Prueba: La rebelión',
      '¿Recuerdas cómo se salvó Leonelda y quiénes acudieron a su llamado?',
      0.68,
      'quiz'
    )
  ]),
  new RouteSection('S4', 'La Virgen de Torcoroma', [
    new Node(
      'M9',
      'mission',
      'La Virgen de Torcoroma',
      'Descubre el hallazgo de 1711 en la montaña de Torcoroma, los exvotos y el robo que conmocionó a Ocaña.',
      0.5,
      'chestCard',
      'quiz5'
    ),
    new Node(
      'quiz5',
      'quiz',
      'Reto: Fe y milagros',
      'Demuestra cuánto sabes sobre la patrona, el santuario nacional y la familia Melo.',
      0.32,
      'quiz'
    )
  ]),
  new RouteSection('S5', 'Ocaña en la independencia', [
    new Node(
      'M10',
      'mission',
      'Ocaña y la independencia',
      'Desde las noticias que trajo Antonio Quintero Copete hasta la llegada de Bolívar y el Batallón Libertador.',
      0.2,
      'paper',
      'quiz6'
    ),
    new Node(
      'quiz6',
      'quiz',
      'Desafío: Libertad',
      'Supera esta prueba sobre el recibimiento a Bolívar, el acta de 1813 y los ocañeros que combatieron.',
      0.32,
      'quiz'
    )
  ]),
  new RouteSection('S6', 'Terror, amor y poder', [
    new Node(
      'M11',
      'mission',
      'La época del terror',
      'Morillo "el Pacificador", la guerrilla de Los Colorados, el valor de Agustina Ferro y el ascenso de Santander.',
      0.5,
      'castle',
      'M12'
    ),
    new Node(
      'M12',
      'mission',
      'Amor, poder y política',
      'La familia Ibáñez-Arias, los romances de Santander y Bolívar, y el origen del Partido Conservador.',
      0.68,
      'puzzle',
      'quiz7'
    ),
    new Node(
      'quiz7',
      'quiz',
      'Desafío: Terror y pasiones',
      '¿Recuerdas a los mártires, a Los Colorados y las historias de las hermanas Ibáñez?',
      0.8,
      'quiz'
    )
  ]),
  new RouteSection('S7', 'La Gran Colombia y la Convención de Ocaña', [
    new Node(
      'M13',
      'mission',
      'El sueño de la Gran Colombia',
      'Del sueño de Miranda y Bolívar a la Convención de Ocaña de 1828 y la disolución de la nación.',
      0.68,
      'compass',
      'quiz8'
    ),
    new Node(
      'quiz8',
      'quiz',
      'Reto: La gran nación',
      'Demuestra cuánto sabes de la Gran Colombia y de lo que pasó en la Convención de Ocaña.',
      0.5,
      'quiz'
    )
  ]),
  new RouteSection('S8', 'La Provincia de Ocaña', [
    new Node(
      'M14',
      'mission',
      'La Provincia de Ocaña',
      'La creación de la provincia, la Columna de los Esclavos, la Comisión Corográfica y la Ocaña cosmopolita.',
      0.32,
      'book',
      'quiz9'
    ),
    new Node(
      'quiz9',
      'quiz',
      'Desafío: Libertad y progreso',
      '¿Qué recuerdas de la abolición de la esclavitud y del auge comercial de Ocaña?',
      0.2,
      'quiz'
    )
  ]),
  new RouteSection('S9', 'Letras, colegio y modernidad', [
    new Node(
      'M15',
      'mission',
      'Letras y modernidad',
      'Los Felibres, el Colegio Caro, el primer carro, la luz eléctrica y el asombroso Cable Aéreo.',
      0.32,
      'gear',
      'quiz10'
    ),
    new Node(
      'quiz10',
      'quiz',
      'Prueba: Ciudad moderna',
      'Pon a prueba lo que sabes de los escritores, los inventos y las obras que transformaron Ocaña.',
      0.5,
      'quiz'
    )
  ]),
  new RouteSection('S10', 'Ocaña entre guerras y fiestas', [
    new Node(
      'M16',
      'mission',
      'Entre guerras y fiestas',
      'Monumentos, acueducto, carnaval y Genitores, en tiempos de violencia política y religiosa.',
      0.68,
      'crystal',
      'quiz11'
    ),
    new Node(
      'quiz11',
      'quiz',
      'Reto: Patrimonio y conflicto',
      '¿Recuerdas los monumentos, las fiestas y los episodios de violencia de mediados del siglo XX?',
      0.8,
      'quiz'
    )
  ]),
  new RouteSection('S11', 'Ocaña contemporánea', [
    new Node(
      'M17',
      'mission',
      'Ocaña contemporánea',
      'Nuevos colegios, la universidad, las invasiones, el cura que bautizó a Gabo y el rescate de la Virgen.',
      0.68,
      'paper',
      'quiz12'
    ),
    new Node(
      'quiz12',
      'quiz',
      'Desafío final',
      'La última prueba: demuestra todo lo que has aprendido sobre la historia de Ocaña.',
      0.5,
      'quiz'
    )
  ])
]
