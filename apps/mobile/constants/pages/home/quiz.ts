import { Check, Scan, Slash, X } from 'lucide-react-native'

export const QUIZZES = {
  'quiz-1': [
    {
      id: 1,
      chapter: 'Misión 1: El misterio del nombre racista',
      text: '¿Cuál es el verdadero nombre médico de la enfermedad que los españoles confundieron con sarna al ver a los indígenas Carates?',
      options: [
        'Lepra cutánea tropical',
        'Pinta o carate, causada por Treponema carateum',
        'Vitíligo amazónico',
        'Sarampión hemorrágico de altura'
      ],
      correctIndex: 1
    },
    {
      id: 2,
      chapter: 'Misión 1: El misterio del nombre racista',
      text: '¿En qué año el cabildo de Ocaña elaboró el primer informe oficial sobre los pueblos indígenas de la región y lo envió al gobernador de Santa Marta?',
      options: ['1492', '1550', '1578', '1620'],
      correctIndex: 2
    },
    {
      id: 3,
      chapter: 'Misión 1: El misterio del nombre racista',
      text: '¿Cuál de los siguientes lugares NO es mencionado como parte del territorio de la Provincia de los Carates según los documentos coloniales?',
      options: ['Otare', 'Teorama', 'Mompox', 'Brotaré'],
      correctIndex: 2
    },
    {
      id: 4,
      chapter: 'Misión 1: El misterio del nombre racista',
      text: '¿Qué característica de la enfermedad Pinta la diferencia claramente de la sarna que creyeron ver los españoles?',
      options: [
        'La Pinta afecta los huesos, no la piel',
        'La Pinta no es mortal ni contagiosa como la sarna',
        'La Pinta solo aparece en climas fríos de montaña',
        'La Pinta desaparece sola sin dejar manchas'
      ],
      correctIndex: 1
    },
    {
      id: 5,
      chapter: 'Misión 2: Descubre tu barrio indígena',
      text: '¿De qué dos palabras indígenas originales surgió el nombre "Argutacaca"?',
      options: [
        'Ahirar y Socotegaga',
        'Arcuta y Socotegaga',
        'Arcuta y Catatumbo',
        'Carate y Palenque'
      ],
      correctIndex: 1
    }
  ],
  'quiz-2': [
    {
      id: 6,
      chapter: 'Misión 2: Descubre tu barrio indígena',
      text: '¿Cómo se llamaba en la época colonial (entre 1550 y 1800) el río que hoy conocemos como Río Tejo?',
      options: ['Ahirar', 'Arcuta', 'Río Grande', 'Río Catatumbo'],
      correctIndex: 2
    },
    {
      id: 7,
      chapter: 'Misión 2: Descubre tu barrio indígena',
      text: '¿En cuál de estos sectores de Ocaña desemboca el Río Chiquito (antiguo Arcuta) al unirse con el río Tejo?',
      options: [
        'Barrio Hacaritama',
        'Sector del Primero de Mayo',
        'Barrio La Carbonera',
        'Centro histórico de Ocaña'
      ],
      correctIndex: 1
    },
    {
      id: 8,
      chapter: 'Misión 2: Descubre tu barrio indígena',
      text: '¿Cuál de los siguientes barrios actuales de Ocaña NO está listado como construido sobre el antiguo territorio Argutacaca?',
      options: ['Betania', 'El Martinete', 'Totumalito', 'Llano Grande'],
      correctIndex: 3
    },
    {
      id: 9,
      chapter: 'Misión 2: Descubre tu barrio indígena',
      text: 'Según los documentos históricos, ¿qué función tenía el río Arcuta (hoy Río Chiquito) para el pueblo Argutacaca?',
      options: [
        'Era solo una frontera defensiva entre territorios enemigos',
        'Les proporcionaba agua para beber, cultivar, pescar y realizar rituales sagrados',
        'Era usado exclusivamente como vía de comercio con otros pueblos',
        'Solo servía para el consumo de agua en épocas de sequía'
      ],
      correctIndex: 1
    },
    {
      id: 10,
      chapter: 'Misión 3: Vive un día como Argutacaca',
      text: 'Según el conocimiento astronómico Argutacaca, ¿en qué fase lunar se debía sembrar la yuca?',
      options: [
        'Luna llena, porque había más luz para trabajar de noche',
        'Luna nueva, porque coincidía con el inicio del mes',
        'Luna menguante, porque era para cultivos que crecen bajo tierra',
        'Luna creciente, porque los cultivos crecían más rápido'
      ],
      correctIndex: 2
    }
  ],
  'quiz-3': [
    {
      id: 11,
      chapter: 'Misión 3: Vive un día como Argutacaca',
      text: '¿Con qué madera especial fabricaban los Argutacaca sus arcos de caza y tambores ceremoniales?',
      options: [
        'Madera de cedro de altura',
        'Madera de qricua',
        'Bambú gigante de la región',
        'Madera de balso seco'
      ],
      correctIndex: 1
    },
    {
      id: 12,
      chapter: 'Misión 3: Vive un día como Argutacaca',
      text: '¿Cuál era el principal producto que los Argutacaca recibían a cambio en el comercio con otros pueblos, dado que no se producía en Ocaña?',
      options: [
        'Cacao de tierras bajas',
        'Piedras preciosas del Catatumbo',
        'Sal',
        'Algodón de zonas cálidas'
      ],
      correctIndex: 2
    },
    {
      id: 13,
      chapter: 'Misión 3: Vive un día como Argutacaca',
      text: '¿Cómo se llamaba la vestimenta femenina de los Argutacaca?',
      options: ['Taparrabos', 'Casabe', 'Manta ceremonial', 'El sayo'],
      correctIndex: 3
    },
    {
      id: 14,
      chapter: 'Misión 3: Vive un día como Argutacaca',
      text: '¿Para qué usaban los Argutacaca las plumas de guacamayas y papagayos?',
      options: [
        'Como moneda de cambio en el comercio regional',
        'Para identificar flechas de cada cazador y en ceremonias rituales',
        'Únicamente para decorar sus viviendas',
        'Para fabricar cobijas que protegían del frío'
      ],
      correctIndex: 1
    },
    {
      id: 15,
      chapter: 'Misión 4: Descifrando la sociedad Argutacaca',
      text: '¿Cuál era el principio fundamental de la organización política de los Argutacaca?',
      options: [
        'El cacique mayor tomaba todas las decisiones del pueblo',
        'Cada quien era señor de su casa; las decisiones colectivas eran por consenso',
        'Un consejo de ancianos gobernaba sobre todas las familias',
        'El chamán espiritual tenía autoridad absoluta sobre la comunidad'
      ],
      correctIndex: 1
    }
  ],
  'quiz-4': [
    {
      id: 16,
      chapter: 'Misión 4: Descifrando la sociedad Argutacaca',
      text: '¿Por qué los Argutacaca desenterraban a sus muertos y bailaban con sus esqueletos?',
      options: [
        'Era una forma de intimidar a los pueblos enemigos en tiempos de guerra',
        'Creían que el esqueleto conservaba el espíritu y bailar con él los reconectaba con sus ancestros',
        'Era una práctica médica para estudiar enfermedades de los muertos',
        'Lo hacían para reclamar el territorio del difunto ante la comunidad'
      ],
      correctIndex: 1
    },
    {
      id: 17,
      chapter: 'Misión 4: Descifrando la sociedad Argutacaca',
      text: '¿Cuáles eran las tres causas principales de los conflictos INTERNOS entre los Argutacaca?',
      options: [
        'Guerras por territorio, escasez de alimentos y disputas religiosas',
        'Venganzas ancestrales, consumo excesivo de chicha y falta de sistema judicial',
        'Disputas comerciales, rivalidad entre cazadores y conflictos con los españoles',
        'Diferencias de idioma, propiedad de tierras y conflictos con los Mosquito'
      ],
      correctIndex: 1
    },
    {
      id: 18,
      chapter: 'Misión 4: Descifrando la sociedad Argutacaca',
      text: '¿De dónde tomó su nombre la lengua "palenque" hablada en la región de los Argutacaca?',
      options: [
        'Del nombre de un río cercano al territorio',
        'Del nombre de su cacique principal',
        'De las cercas defensivas de palos con puntas que rodeaban las ramadas',
        'Del municipio de San Basilio de Palenque, donde se originó la lengua'
      ],
      correctIndex: 2
    },
    {
      id: 19,
      chapter: 'Misión 4: Descifrando la sociedad Argutacaca',
      text: '¿En qué lugares de Ocaña se asentaron los Mosquito, la cultura del bajo Magdalena con la que los Argutacaca tenían contacto?',
      options: [
        'Otare y Teorama',
        'Pueblo Nuevo y Agua de la Virgen',
        'La Carbonera y Betania',
        'Brotaré y el sector del Primero de Mayo'
      ],
      correctIndex: 1
    },
    {
      id: 20,
      chapter: 'Misión 4: Descifrando la sociedad Argutacaca',
      text: 'Según los documentos históricos, ¿qué consecuencia tuvo la práctica española de fijar la propiedad de la tierra y explotar el mismo suelo continuamente?',
      options: [
        'Generó mayor biodiversidad en la región',
        'Influyó en la desertización del paisaje ocañero, observable hasta hoy',
        'Permitió desarrollar una agricultura más productiva que la indígena',
        'No tuvo impactos negativos en el medio ambiente de la región'
      ],
      correctIndex: 1
    }
  ]
}

export function getOptionStyle(
  isSelected: boolean,
  isCorrect: boolean,
  hasSubmitted: boolean
) {
  if (!hasSubmitted) {
    if (isSelected) {
      return {
        containerClass: 'border-muted-foreground bg-muted-foreground/10',
        icon: Scan,
        colorClass: 'text-muted-foreground'
      }
    }
    return {
      containerClass: 'border-border',
      icon: Slash,
      colorClass: ''
    }
  }

  if (isCorrect) {
    return {
      containerClass: 'border-primary bg-primary/10',
      icon: Check,
      colorClass: 'text-primary'
    }
  }

  if (isSelected && !isCorrect) {
    return {
      containerClass: 'border-destructive bg-destructive/10',
      icon: X,
      colorClass: 'text-destructive'
    }
  }

  return {
    containerClass: 'border-border opacity-50',
    icon: Slash,
    colorClass: 'text-gray-500'
  }
}
