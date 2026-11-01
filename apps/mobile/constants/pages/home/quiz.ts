import { Check, Scan, Slash, X } from 'lucide-react-native'

export const QUIZZES = {
  'quiz-1': {
    type: 'quiz',
    data: [
      {
        id: 1,
        chapter: 'Misión 1: El misterio del nombre racista',
        text: '¿Cuál es el verdadero nombre de la enfermedad que los españoles confundieron con sarna al ver a los indígenas?',
        options: [
          'Lepra cutánea tropical',
          'Pinta o carate, causada por una bacteria',
          'Vitíligo amazónico',
          'Sarampión hemorrágico'
        ],
        correctIndex: 1
      },
      {
        id: 2,
        chapter: 'Misión 1: El misterio del nombre racista',
        text: '¿En qué año el cabildo de Ocaña elaboró el primer informe oficial sobre estos pueblos indígenas?',
        options: ['1492', '1550', '1578', '1620'],
        correctIndex: 2
      },
      {
        id: 3,
        chapter: 'Misión 1: El misterio del nombre racista',
        text: '¿Cuál de los siguientes lugares NO hacía parte del inmenso territorio de la "Provincia de los Carates"?',
        options: ['Otare', 'Teorama', 'Mompox', 'Abrego'],
        correctIndex: 2
      },
      {
        id: 4,
        chapter: 'Misión 1: El misterio del nombre racista',
        text: '¿Qué gran diferencia había entre la verdadera enfermedad (Pinta) y lo que los españoles creían que era (sarna)?',
        options: [
          'La Pinta afecta los huesos, no la piel',
          'La Pinta es solo un cambio de color en la piel y no es mortal',
          'La Pinta solo aparece en climas fríos de alta montaña',
          'La Pinta desaparece sola al bañarse en el río'
        ],
        correctIndex: 1
      },
      {
        id: 5,
        chapter: 'Misión 1: El misterio del nombre racista',
        text: '¿Por qué el término "Carates" se considera hoy un nombre ofensivo y racista?',
        options: [
          'Porque significa "guerreros derrotados" en lengua antigua',
          'Porque era una forma despectiva de llamarlos "los sarnosos" por un error médico',
          'Porque era el nombre de los peores criminales de España',
          'Porque significa "los que no tienen oro"'
        ],
        correctIndex: 1
      }
    ]
  },
  'quiz-2': {
    type: 'quiz',
    data: [
      {
        id: 1,
        chapter: 'Misión 2: Descubre tu barrio indígena',
        text: '¿De qué dos palabras indígenas originales surgió el nombre inventado "Argutacaca"?',
        options: [
          'Ahirar y Socotegaga',
          'Arcuta y Socotegaga',
          'Arcuta y Catatumbo',
          'Carate y Palenque'
        ],
        correctIndex: 1
      },
      {
        id: 2,
        chapter: 'Misión 2: Descubre tu barrio indígena',
        text: '¿Cuál es el nombre actual de la antigua quebrada indígena conocida como "Arcuta"?',
        options: ['Río Algodonal', 'Río Grande', 'Río Tejo', 'Río Chiquito'],
        correctIndex: 3
      },
      {
        id: 3,
        chapter: 'Misión 2: Descubre tu barrio indígena',
        text: '¿Cuál de los siguientes barrios actuales de Ocaña NO hace parte del antiguo territorio Argutacaca mencionado en la historia?',
        options: [
          'La Carbonera',
          'Cuesta Blanca',
          'Ciudadela Norte',
          'El Palomar'
        ],
        correctIndex: 2
      },
      {
        id: 4,
        chapter: 'Misión 2: Descubre tu barrio indígena',
        text: '¿Cuál de estas opciones NO es una teoría sobre la desaparición de los Argutacaca?',
        options: [
          'Fueron aniquilados por una epidemia de Pinta',
          'Fueron víctimas de desplazamiento forzado por los españoles',
          'Hubo un proceso de mestizaje y asimilación cultural',
          'Migraron hacia zonas remotas como el Catatumbo'
        ],
        correctIndex: 0
      },
      {
        id: 5,
        chapter: 'Misión 2: Descubre tu barrio indígena',
        text: 'A lo largo de la historia, el actual Río Tejo ha tenido tres nombres. ¿Cuáles fueron en orden cronológico (Época Indígena, Época Colonial, Época Actual)?',
        options: [
          'Río Grande - Ahirar - Río Tejo',
          'Ahirar - Río Grande - Río Tejo',
          'Teorama - Río Grande - Arcuta',
          'Arcuta - Río Chiquito - Río Tejo'
        ],
        correctIndex: 1
      }
    ]
  },
  'quiz-3': {
    type: 'quiz',
    data: [
      {
        id: 1,
        chapter: 'Misión 3: Vive un día como Argutacaca',
        text: 'Según los conocimientos astronómicos de los Argutacaca, ¿en qué fase lunar sembraban la yuca?',
        options: [
          'Luna llena',
          'Luna nueva',
          'Luna creciente (porque crece hacia arriba)',
          'Luna menguante (porque crece bajo tierra)'
        ],
        correctIndex: 3
      },
      {
        id: 2,
        chapter: 'Misión 3: Vive un día como Argutacaca',
        text: '¿Qué tipo de madera especial de la región usaban para fabricar arcos muy flexibles que lanzaban flechas a 50 metros?',
        options: ['Cedro', 'Roble', 'Qricua', 'Bambú'],
        correctIndex: 2
      },
      {
        id: 3,
        chapter: 'Misión 3: Vive un día como Argutacaca',
        text: '¿Cuál era el principal producto que los Argutacaca NO producían y debían conseguir mediante el comercio con otros pueblos?',
        options: ['Maíz', 'Sal', 'Plumas de guacamaya', 'Arcilla'],
        correctIndex: 1
      },
      {
        id: 4,
        chapter: 'Misión 3: Vive un día como Argutacaca',
        text: '¿Cómo se llamaba la prenda de vestir principal que usaban las mujeres indígenas?',
        options: ['Ruana', 'Manta', 'Sayo', 'Pollera'],
        correctIndex: 2
      },
      {
        id: 5,
        chapter: 'Misión 3: Vive un día como Argutacaca',
        text: '¿Qué fruta dulce, que todavía existe en la región, consumían los indígenas y se caracteriza por ser morada por fuera y blanca por dentro?',
        options: ['Mora', 'Guanábana', 'Caimito', 'Chiticoma'],
        correctIndex: 2
      }
    ]
  },
  'quiz-4': {
    type: 'quiz',
    data: [
      {
        id: 1,
        chapter: 'Misión 4: Descifrando la sociedad Argutacaca',
        text: '¿Por qué los Argutacaca vivían en "ramadas" temporales y se mudaban constantemente?',
        options: [
          'Porque no sabían construir casas de piedra',
          'Para permitir que la tierra de cultivo se recuperara naturalmente',
          'Porque los españoles los obligaban a moverse',
          'Porque les gustaba viajar por toda Colombia'
        ],
        correctIndex: 1
      },
      {
        id: 2,
        chapter: 'Misión 4: Descifrando la sociedad Argutacaca',
        text: '¿Cómo era la organización política de los Argutacaca?',
        options: [
          'Tenían un cacique supremo que dictaba las leyes',
          'Estaban gobernados por el Rey de España',
          'No tenían jefes, cada familia era autónoma y tomaban decisiones por consenso',
          'Tenían un consejo de ancianos con poder absoluto'
        ],
        correctIndex: 2
      },
      {
        id: 3,
        chapter: 'Misión 4: Descifrando la sociedad Argutacaca',
        text: 'Si no tenían guerras con otras tribus, ¿cuál era la causa principal de sus conflictos internos?',
        options: [
          'El robo de tierras y ganado',
          'Diferencias religiosas con los españoles',
          'Las venganzas familiares y el consumo excesivo de chicha',
          'El control del comercio de la sal'
        ],
        correctIndex: 2
      },
      {
        id: 4,
        chapter: 'Misión 4: Descifrando la sociedad Argutacaca',
        text: '¿De dónde proviene el nombre de la lengua "Palenque"?',
        options: [
          'Del nombre de su Dios principal',
          'De los palos gruesos y puntiagudos que usaban como muro defensivo',
          'De una fruta dulce parecida a la ciruela',
          'Del cacique que inventó el idioma'
        ],
        correctIndex: 1
      },
      {
        id: 5,
        chapter: 'Misión 4: Descifrando la sociedad Argutacaca',
        text: '¿Quiénes eran "Los Mosquito"?',
        options: [
          'Una plaga de insectos que los obligaba a mudarse',
          'Los peores enemigos de los Argutacaca',
          'Una cultura indígena del bajo Magdalena con la que hacían intercambios comerciales',
          'Los intérpretes que traducían los idiomas'
        ],
        correctIndex: 2
      }
    ]
  },
  'quiz-5': {
    type: 'quiz',
    data: [
      {
        id: 1,
        chapter: 'Misión 5: Arqueología',
        text: '¿Qué descubrieron exactamente los sacerdotes Debilly y Escobar en 1932 al excavar los montículos artificiales?',
        options: [
          'Armas de madera de qricua',
          'Urnas funerarias con restos humanos calcinados',
          'Esqueletos de animales prehistóricos',
          'Tesoros de oro escondidos'
        ],
        correctIndex: 1
      },
      {
        id: 2,
        chapter: 'Misión 5: Arqueología',
        text: '¿Cuál era el cuarto paso en el complejo ritual de enterramiento secundario de los Argutacaca?',
        options: [
          'Pintar los huesos de colores',
          'Calcinar (quemar) los huesos',
          'Bailar con los esqueletos',
          'Tirar los restos al Río Chiquito'
        ],
        correctIndex: 1
      },
      {
        id: 3,
        chapter: 'Misión 5: Arqueología',
        text: '¿A dónde fueron a parar algunas de las urnas funerarias encontradas entre 1934 y 1938?',
        options: [
          'Al Banco de la República en Bogotá',
          'Al Museo Nacional de Colombia',
          'Al American Museum en Nueva York',
          'Fueron destruidas por los españoles'
        ],
        correctIndex: 2
      },
      {
        id: 4,
        chapter: 'Misión 5: Arqueología',
        text: '¿Qué es la Piedra Gorda ubicada en el barrio El Hatillo?',
        options: [
          'Un altar para sacrificios animales',
          'Un petroglifo (grabado en roca) que es la única evidencia en bajo relieve de la ciudad',
          'Una piedra usada para moler maíz y hacer chicha',
          'Un meteorito que los indígenas adoraban'
        ],
        correctIndex: 1
      },
      {
        id: 5,
        chapter: 'Misión 5: Arqueología',
        text: '¿Cuál de estas NO es una teoría sobre la función de los grabados en la Piedra Gorda?',
        options: [
          'Era un calendario astronómico para saber cuándo sembrar',
          'Era un marcador territorial para delimitar fronteras',
          'Era un mapa o sistema de navegación',
          'Era un sistema de comunicación de rutas comerciales'
        ],
        correctIndex: 0
      }
    ]
  },
  'quiz-6': {
    type: 'quiz',
    data: [
      {
        id: 1,
        chapter: 'Misión 6: La fundación española',
        text: '¿Por qué Francisco Fernández de Contreras decidió fundar Ocaña en ese lugar específico?',
        options: [
          'Porque había grandes minas de oro y esmeraldas',
          'Porque buscaba crear una ruta comercial más corta y barata entre Pamplona y la costa',
          'Porque el rey de España quería un castillo en esa montaña',
          'Porque se perdió buscando el Río Magdalena'
        ],
        correctIndex: 1
      },
      {
        id: 2,
        chapter: 'Misión 6: La fundación española',
        text: '¿De dónde proviene el nombre de la ciudad de "Ocaña"?',
        options: [
          'Es una palabra en lengua palenque que significa "valle hermoso"',
          'Fue el nombre del primer sacerdote que hizo la misa',
          'Es un homenaje al gobernador de Santa Marta, nacido en Ocaña, España',
          'Proviene del nombre de la esposa del capitán Fernández de Contreras'
        ],
        correctIndex: 2
      },
      {
        id: 3,
        chapter: 'Misión 6: La fundación española',
        text: '¿Qué diseño urbano impusieron los españoles para reemplazar las ramadas indígenas dispersas?',
        options: [
          'El diseño circular concéntrico',
          'El damero (una cuadrícula perfecta)',
          'El modelo de laberinto defensivo',
          'La arquitectura de terrazas escalonadas'
        ],
        correctIndex: 1
      },
      {
        id: 4,
        chapter: 'Misión 6: La fundación española',
        text: '¿Cuál fue la fecha del acto oficial y definitivo de la fundación de la villa, cuando se trazó la plaza principal?',
        options: [
          '26 de julio de 1570',
          '7 de noviembre de 1570',
          '14 de diciembre de 1570',
          '29 de mayo de 1850'
        ],
        correctIndex: 2
      },
      {
        id: 5,
        chapter: 'Misión 6: La fundación española',
        text: 'En los documentos coloniales españoles se usaba la palabra "pacificación". ¿Qué significaba esto en la práctica?',
        options: [
          'Firmar tratados de paz amistosos con los indígenas',
          'Eliminar la resistencia nativa mediante el uso de la violencia',
          'Enseñar a los indígenas a meditar y estar en calma',
          'Comprar las tierras a un precio justo'
        ],
        correctIndex: 1
      }
    ]
  },
  'quiz-7': {
    type: 'quiz',
    data: [
      {
        id: 1,
        chapter: 'Misión 7: La ciudad colonial',
        text: '¿A qué se dedicaba la primera empresa fundada en Ocaña en 1577 por once socios?',
        options: [
          'A la exportación de oro hacia España',
          'Al transporte de mercancías utilizando acémilas (mulas y burros)',
          'A la construcción de iglesias de piedra',
          'A la fabricación de telares y hamacas'
        ],
        correctIndex: 1
      },
      {
        id: 2,
        chapter: 'Misión 7: La ciudad colonial',
        text: '¿Qué evento natural causó la destrucción de la segunda versión de la Iglesia Mayor de Ocaña?',
        options: [
          'Una erupción volcánica en 1600',
          'Una gran inundación del Río Tejo',
          'El Terremoto Histórico de los Andes en 1875',
          'Un huracán en 1776'
        ],
        correctIndex: 2
      },
      {
        id: 3,
        chapter: 'Misión 7: La ciudad colonial',
        text: 'Además de enseñar a leer y escribir, ¿cuál era un propósito real de los conventos españoles con los indígenas?',
        options: [
          'Enseñarles las tácticas militares españolas',
          'Proteger sus tierras ancestrales para que no se las robaran',
          'Adoctrinarlos para que fueran mano de obra dócil y obediente',
          'Enviarlos a Europa para ser embajadores'
        ],
        correctIndex: 2
      },
      {
        id: 4,
        chapter: 'Misión 7: La ciudad colonial',
        text: 'Cuando el convento de San Francisco estuvo a punto de cerrar en 1776 por falta de indígenas, ¿quiénes lo salvaron con donaciones y por qué?',
        options: [
          'Los Argutacaca que sobrevivieron, para no perder su escuela',
          'Los encomenderos ricos, a cambio del privilegio de ser enterrados dentro del templo',
          'El rey de España, porque Ocaña era su ciudad favorita',
          'Los piratas del Río Magdalena'
        ],
        correctIndex: 1
      },
      {
        id: 5,
        chapter: 'Misión 7: La ciudad colonial',
        text: 'Según la leyenda, ¿cuál fue el pecado de Antón García de Bonilla que lo condenó a vagar como fantasma?',
        options: [
          'Robar el tesoro de la iglesia principal',
          'Asesinar a los once socios de la primera empresa',
          'Incumplir una promesa que le hizo a Santa Rita tras curar a sus familiares de una peste',
          'Quemar los cultivos de maíz de los indígenas'
        ],
        correctIndex: 2
      }
    ]
  },
  'quiz-8': {
    type: 'quiz',
    data: [
      {
        id: 1,
        chapter: 'Misión 8: Leonelda — Bruja, curandera o heroína',
        text: '¿Por qué las yerbateras recolectaban sus plantas y raíces durante la noche?',
        options: [
          'Porque no querían que los españoles les robaran sus tesoros',
          'Porque a esa hora las plantas concentran más aceites esenciales',
          'Porque el sol les quemaba la piel por una maldición',
          'Para poder invocar espíritus malignos en la oscuridad'
        ],
        correctIndex: 1
      },
      {
        id: 2,
        chapter: 'Misión 8: Leonelda — Bruja, curandera o heroína',
        text: '¿Qué institución española persiguió a estas mujeres acusándolas de hechicería para mantener el control social?',
        options: [
          'La Santa Inquisición',
          'La Real Audiencia',
          'El Cabildo de Ocaña',
          'El Ejército Quiriquí'
        ],
        correctIndex: 0
      },
      {
        id: 3,
        chapter: 'Misión 8: Leonelda — Bruja, curandera o heroína',
        text: '¿Quién era la maestra de las yerbateras que fue ahorcada en su celda por orden del alcalde?',
        options: [
          'María del Carmen',
          'Leonelda Hernández',
          'María Antonia Mandona',
          'Catalina India'
        ],
        correctIndex: 2
      },
      {
        id: 4,
        chapter: 'Misión 8: Leonelda — Bruja, curandera o heroína',
        text: '¿Por qué los soldados decidieron intentar ahorcar a Leonelda en el Alto del Hatillo antes de entrar a Ocaña?',
        options: [
          'Porque no había más árboles en el camino',
          'Porque querían evitar que el obispo Liñan de Cisneros le concediera un indulto',
          'Porque allí vivía el esposo de Leonelda',
          'Porque era el lugar sagrado de la Inquisición'
        ],
        correctIndex: 1
      },
      {
        id: 5,
        chapter: 'Misión 8: Leonelda — Bruja, curandera o heroína',
        text: '¿Qué grito utilizó Leonelda para convocar a los indígenas escondidos y ser rescatada?',
        options: [
          '¡Por la maestra Mandona!',
          '¡Muerte a los españoles!',
          '¡Aquí de los búrburas!',
          '¡Que caiga el fuego del cielo!'
        ],
        correctIndex: 2
      }
    ]
  },
  'quiz-9': {
    type: 'quiz',
    data: [
      {
        id: 1,
        chapter: 'Misión 9: La Virgen de Torcoroma',
        text: '¿Para qué fueron los hermanos Melo Rodríguez a buscar madera en la montaña de Torcoroma?',
        options: [
          'Para construir una nueva iglesia',
          'Para hacer fuego y espantar a los animales',
          'Para fabricar un "dornajo" o recipiente para trabajar la miel',
          'Para construir armas para defenderse de los españoles'
        ],
        correctIndex: 2
      },
      {
        id: 2,
        chapter: 'Misión 9: La Virgen de Torcoroma',
        text: '¿Cuál es la fecha exacta en la que, al dar un hachazo al tronco, apareció la imagen de la Virgen?',
        options: [
          '15 de agosto de 1711',
          '16 de agosto de 1711',
          '26 de julio de 1570',
          '11 de marzo de 1981'
        ],
        correctIndex: 1
      },
      {
        id: 3,
        chapter: 'Misión 9: La Virgen de Torcoroma',
        text: '¿Qué le llamó la atención a los hermanos sobre el árbol antes de cortarlo?',
        options: [
          'Era de madera de qricua súper flexible',
          'Tenía hermosas flores encarnadas (rojas) y fragantes aunque no era época de floración',
          'Estaba rodeado de un aura dorada que iluminaba la noche',
          'Tenía frutas exóticas como el caimito'
        ],
        correctIndex: 1
      },
      {
        id: 4,
        chapter: 'Misión 9: La Virgen de Torcoroma',
        text: '¿Qué evento perturbador y de película ocurrió en el Santuario el 11 de marzo de 1981?',
        options: [
          'Un terremoto destruyó la capilla por completo',
          'La Santa Inquisición intentó quemar la madera',
          'Un argentino llamado Carlos Alberto Delvechio se robó la imagen original',
          'La madera se volvió polvo misteriosamente'
        ],
        correctIndex: 2
      },
      {
        id: 5,
        chapter: 'Misión 9: La Virgen de Torcoroma',
        text: '¿Qué son los "exvotos" que se encuentran en el Santuario de Torcoroma?',
        options: [
          'Vasijas de arcilla donde guardaban cenizas',
          'Objetos o placas que los devotos dejan como testimonio y agradecimiento por un milagro',
          'Monedas de oro que dejó el fundador Francisco Fernández',
          'Herramientas agrícolas de la familia Melo Rodríguez'
        ],
        correctIndex: 1
      }
    ]
  },
  'quiz-10': {
    type: 'quiz',
    data: [
      {
        id: 1,
        chapter: 'Misión 10: Ocaña y la independencia',
        text: '¿Por qué la noticia del grito de independencia del 10 de julio de 1810 tardó tanto en llegar a Ocaña?',
        options: [
          'Porque los españoles prohibieron hablar del tema',
          'Porque no existían medios de comunicación instantáneos y las noticias viajaban a caballo o a pie',
          'Porque Ocaña estaba rodeada por una muralla',
          'Porque a los ocañeros no les interesaba la política'
        ],
        correctIndex: 1
      },
      {
        id: 2,
        chapter: 'Misión 10: Ocaña y la independencia',
        text: '¿Quién fue el joven ocañero que encendió la chispa de la independencia en la ciudad al regresar de sus estudios?',
        options: [
          'Francisco Fernández de Contreras',
          'Antón García de Bonilla',
          'Antonio Quintero Copete',
          'Fray Fermín de los Reyes'
        ],
        correctIndex: 2
      },
      {
        id: 3,
        chapter: 'Misión 10: Ocaña y la independencia',
        text: '¿En qué ciudad estaba estudiando este joven cuando participó en la rebelión contra el corregidor Bastús?',
        options: ['Santafé', 'Cartagena', 'Pamplona', 'Santa Marta'],
        correctIndex: 2
      },
      {
        id: 4,
        chapter: 'Misión 10: Ocaña y la independencia',
        text: '¿Cuál era uno de los argumentos principales de quienes querían mantenerse leales al Rey de España?',
        options: [
          'Que el rey garantizaba el orden y la estabilidad que funcionaba desde hacía 200 años',
          'Que el rey les iba a regalar tierras a todos',
          'Que España iba a construir un nuevo puerto en Ocaña',
          'Que los criollos eran incapaces de leer y escribir'
        ],
        correctIndex: 0
      },
      {
        id: 5,
        chapter: 'Misión 10: Ocaña y la independencia',
        text: '¿Qué buscaban principalmente los "criollos" con la independencia?',
        options: [
          'Viajar a España a conocer al rey',
          'Igualdad de derechos frente a los nacidos en España, comercio libre y gobierno propio',
          'Convertirse todos en sacerdotes y obispos',
          'Devolverle el territorio a los indígenas Argutacaca'
        ],
        correctIndex: 1
      }
    ]
  }
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
