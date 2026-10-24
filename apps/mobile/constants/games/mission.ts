import type { GAMES_TREE } from './games'

export const MISSIONS: GAMES_TREE = {
  'mission-1': [
    {
      type: 'concept',
      data: {
        title: 'Misión 1: El misterio del nombre racista',
        subtitle:
          '¿Por qué una región entera lleva el nombre de una enfermedad?',
        readTimeMinutes: '3',
        body: '## Los primeros exploradores en el Catatumbo\n\nEn el siglo XVI, los **conquistadores españoles** llegaron al río Catatumbo con un objetivo claro: oro, tierras y dominio sobre los pueblos que encontraran a su paso. Explorando la **cordillera oriental**, hallaron varios asentamientos indígenas y tomaron una decisión que marcaría la historia de la región para siempre: llamarlos a todos con un único nombre colectivo.\n\n## El primer documento oficial\n\nEn **1578**, el cabildo de Ocaña —el gobierno local español de la época— elaboró el primer informe oficial sobre estos pueblos indígenas y lo envió al gobernador de Santa Marta. Ese documento describía asentamientos en la ribera del río Catatumbo, en un territorio que abarcaba desde **Abrego** hasta Ocaña, pasando por lugares como **Otare**, **Brotaré** y **Teorama**. A toda esa región la llamaron: *Provincia de los Carates*.\n\n## El error médico que lo cambió todo\n\nPero ¿qué significa "Carates"? Al observar a los indígenas, los españoles notaron que muchos tenían **manchas en la piel** de diferentes colores: blancuzcas, rojizas y de tono azul oscuro. Con su limitado conocimiento médico, concluyeron que estaban enfermos de **sarna**, una enfermedad muy temida en Europa.\n\nEl diagnóstico era completamente **equivocado**. Lo que realmente tenían era una enfermedad tropical llamada **Pinta** (también conocida como *carate* o *mal del pinto*), causada por la bacteria *Treponema carateum*. Esta infección afecta la piel, pero **no es mortal ni contagiosa** como la sarna.\n\n## Un nombre despectivo que duró siglos\n\nEn el español de los siglos XVI y XVII, "carate" se usaba para referirse a enfermedades de la piel con manchas. Los conquistadores, al ver esas marcas, empezaron a llamar a estos pueblos **"los Carates"**, es decir, "los sarnosos". Era un nombre despectivo basado en un **diagnóstico médico erróneo**, impuesto por forasteros que llegaron a un territorio ajeno y juzgaron lo que no entendían.\n\nEse nombre apareció en **mapas oficiales, documentos legales y registros históricos durante más de 200 años**.',
        speech:
          'Los primeros exploradores en el Catatumbo\n\nEn el siglo XVI, los conquistadores españoles llegaron al río Catatumbo con un objetivo claro: oro, tierras y dominio sobre los pueblos que encontraran a su paso. Explorando la cordillera oriental, hallaron varios asentamientos indígenas y tomaron una decisión que marcaría la historia de la región para siempre: llamarlos a todos con un único nombre colectivo.\n\nEl primer documento oficial\n\nEn 1578, el cabildo de Ocaña elaboró el primer informe oficial sobre estos pueblos indígenas y lo envió al gobernador de Santa Marta. Ese documento describía asentamientos en la ribera del río Catatumbo, en un territorio que abarcaba desde Abrego hasta Ocaña, pasando por lugares como Otare, Brotaré y Teorama. A toda esa región la llamaron: Provincia de los Carates.\n\nEl error médico que lo cambió todo\n\nPero ¿qué significa "Carates"? Al observar a los indígenas, los españoles notaron que muchos tenían manchas en la piel de diferentes colores: blancuzcas, rojizas y de tono azul oscuro. Con su limitado conocimiento médico, concluyeron que estaban enfermos de sarna, una enfermedad muy temida en Europa.\n\nEl diagnóstico era completamente equivocado. Lo que realmente tenían era una enfermedad tropical llamada Pinta (también conocida como carate o mal del pinto), causada por la bacteria Treponema carateum. Esta infección afecta la piel, pero no es mortal ni contagiosa como la sarna.\n\nUn nombre despectivo que duró siglos\n\nEn el español de los siglos XVI y XVII, "carate" se usaba para referirse a enfermedades de la piel con manchas. Los conquistadores, al ver esas marcas, empezaron a llamar a estos pueblos "los Carates", es decir, "los sarnosos". Era un nombre despectivo basado en un diagnóstico médico erróneo, impuesto por forasteros que llegaron a un territorio ajeno y juzgaron lo que no entendían.\n\nEse nombre apareció en mapas oficiales, documentos legales y registros históricos durante más de 200 años.',
        cap: 'Antepasados I'
      }
    },
    {
      type: 'question',
      data: {
        question:
          'El nombre "Carates" duró más de 200 años en documentos oficiales. ¿Qué dice eso sobre el poder que tienen los que escriben la historia para definir a otros pueblos?',
        desc: 'Piensa en quién tenía el poder de escribir en esa época y qué pasaba con las versiones de los propios indígenas sobre sí mismos.',
        id: 'info1'
      },
      requiresCompletion: true
    },
    {
      type: 'soup',
      data: {
        columns: 10,
        rows: 10,
        soup: [
          'REACT'
          // 'NATIVE',
          // 'JAVASCRIPT',
          // 'TAILWIND',
          // 'COMPONENTE',
          // 'CHINO'
        ]
      },
      requiresCompletion: true
    },
    {
      type: 'crossword',
      data: {
        rows: 10,
        columns: 12,
        words: [
          {
            word: 'REACT',
            row: 1,
            column: 1,
            direction: 'horizontal'
          }
          // {
          //   word: 'TAILWIND',
          //   row: 0,
          //   column: 3,
          //   direction: 'vertical'
          // },
          // {
          //   word: 'MANGO',
          //   row: 3,
          //   column: 4,
          //   direction: 'vertical'
          // },
          // {
          //   word: 'PATACON',
          //   row: 4,
          //   column: 5,
          //   direction: 'vertical'
          // },
          // {
          //   word: 'SU',
          //   row: 7,
          //   column: 8,
          //   direction: 'vertical'
          // },
          // {
          //   word: 'ERDA',
          //   row: 0,
          //   column: 6,
          //   direction: 'horizontal'
          // }
        ],
        hints: [
          'Framework de JavaScript',
          'Framework de CSS',
          'Fruta tropical',
          'Comida típica de Colombia',
          'Pronombre posesivo',
          'Planeta del sistema solar'
        ]
      },
      requiresCompletion: true
    },
    {
      type: 'puzzle',
      data: {
        rows: 3,
        columns: 3,
        image: require('@/assets/images/icons/book.png')
      },
      requiresCompletion: true
    },
    {
      type: 'ar',
      data: {
        model: require('@/assets/esqueleto.glb'),
        speech: 'WASA'
      }
    }
  ]
}

// export const AR_MODELS = {
//   'ar-1': require('../../../assets/indio_monte.glb'),
//   'ar-2': require('../../../assets/indio_flecha.glb'),
//   'ar-3': require('../../../assets/esqueleto.glb')
// }
