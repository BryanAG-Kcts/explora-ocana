import { Check, Scan, Slash, X } from 'lucide-react-native'

export const QUIZZES = {
  'quiz-1': {
    img: 'mission_1.jpg',
    chapter: 'El misterio del nombre racista',
    data: [
      {
        id: 1,
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
        text: '¿En qué año el cabildo de Ocaña elaboró el primer informe oficial sobre estos pueblos indígenas?',
        options: ['1492', '1550', '1578', '1620'],
        correctIndex: 2
      },
      {
        id: 3,
        text: '¿Cuál de los siguientes lugares NO hacía parte del inmenso territorio de la "Provincia de los Carates"?',
        options: ['Otare', 'Teorama', 'Mompox', 'Abrego'],
        correctIndex: 2
      },
      {
        id: 4,
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
    img: 'mission_2.jpg',
    chapter: 'Misión 2: Descubre tu barrio indígena',
    data: [
      {
        id: 1,
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
        text: '¿Cuál es el nombre actual de la antigua quebrada indígena conocida como "Arcuta"?',
        options: ['Río Algodonal', 'Río Grande', 'Río Tejo', 'Río Chiquito'],
        correctIndex: 3
      },
      {
        id: 3,
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
    img: 'mission_3.jpg',
    chapter: 'Misión 3: Vive un día como Argutacaca',
    data: [
      {
        id: 1,

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

        text: '¿Qué tipo de madera especial de la región usaban para fabricar arcos muy flexibles que lanzaban flechas a 50 metros?',
        options: ['Cedro', 'Roble', 'Qricua', 'Bambú'],
        correctIndex: 2
      },
      {
        id: 3,

        text: '¿Cuál era el principal producto que los Argutacaca NO producían y debían conseguir mediante el comercio con otros pueblos?',
        options: ['Maíz', 'Sal', 'Plumas de guacamaya', 'Arcilla'],
        correctIndex: 1
      },
      {
        id: 4,

        text: '¿Cómo se llamaba la prenda de vestir principal que usaban las mujeres indígenas?',
        options: ['Ruana', 'Manta', 'Sayo', 'Pollera'],
        correctIndex: 2
      },
      {
        id: 5,

        text: '¿Qué fruta dulce, que todavía existe en la región, consumían los indígenas y se caracteriza por ser morada por fuera y blanca por dentro?',
        options: ['Mora', 'Guanábana', 'Caimito', 'Chiticoma'],
        correctIndex: 2
      }
    ]
  },
  'quiz-4': {
    img: 'mission_4.jpg',
    chapter: 'Misión 4: Descifrando la sociedad Argutacaca',
    data: [
      {
        id: 1,
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
    img: 'mission_5.jpg',
    chapter: 'Misión 5: Arqueología',
    data: [
      {
        id: 1,
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
    img: 'mission_6.jpg',
    chapter: 'Misión 6: La fundación española',
    data: [
      {
        id: 1,
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
    img: 'mission_7.jpg',
    chapter: 'Misión 7: La ciudad colonial',
    data: [
      {
        id: 1,
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
    img: 'mission_8.jpg',
    chapter: 'Misión 8: Leonelda — Bruja, curandera o heroína',
    data: [
      {
        id: 1,
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
    img: 'mission_9.jpg',
    chapter: 'Misión 9: La Virgen de Torcoroma',
    data: [
      {
        id: 1,
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
    img: 'mission_10.jpg',
    chapter: 'Misión 10: Ocaña y la independencia',
    data: [
      {
        id: 1,
        text: '¿Quién fue la encargada de dar el discurso de bienvenida al joven Simón Bolívar cuando llegó a Ocaña en enero de 1813?',
        options: [
          'Carmen Ibáñez',
          'Pascuala Rodríguez',
          'Bárbara Vicenta Lemus',
          'Catalina India'
        ],
        correctIndex: 2
      },
      {
        id: 2,
        text: '¿Qué evento histórico importante para la ciudad ocurrió el 7 de abril de 1813?',
        options: [
          'Se fundó la primera empresa de transporte con acémilas',
          'Se rompieron los símbolos del poder español y se firmó el acta de independencia',
          'Se inauguró la Plaza 29 de Mayo',
          'Bolívar fue coronado como Rey de Ocaña'
        ],
        correctIndex: 1
      },
      {
        id: 3,
        text: '¿Cómo demostró Ocaña que no fue solo un "testigo" sino que participó activamente en la guerra de independencia?',
        options: [
          'Enviando cartas de apoyo al rey de España',
          'Escondiéndose en la montaña de Torcoroma',
          'Aportando 180 hombres que formaron el Batallón Libertador de Ocaña para combatir',
          'Comprando armas para revenderlas a los españoles'
        ],
        correctIndex: 2
      },
      {
        id: 4,
        text: '¿Qué motivaba a los criollos a buscar la independencia de la corona española?',
        options: [
          'Querían cambiar la religión oficial del territorio',
          'Buscaban comercio libre, gobierno propio e igualdad de derechos frente a los nacidos en España',
          'Querían que los indígenas volvieran a gobernar el país',
          'Querían mudarse a vivir a España con el rey'
        ],
        correctIndex: 1
      },
      {
        id: 5,
        text: '¿Quiénes se aliaron militarmente con el Batallón Libertador de Ocaña para luchar en las batallas de Jagual y Cúcuta?',
        options: [
          'Los soldados españoles y los Quiriquíes',
          'Hombres de Río de Oro y los momposinos',
          'Los encomenderos y los sacerdotes franciscanos',
          'Los Argutacaca y los Búrburas'
        ],
        correctIndex: 1
      }
    ]
  },
  'quiz-11': {
    img: 'mission_11.jpg',
    chapter: 'Misión 11: La época del terror',
    data: [
      {
        id: 1,
        text: '¿Qué hizo el general español Pablo Morillo apenas llegó a Ocaña el 1 de abril de 1816?',
        options: [
          'Organizó un banquete para hablar con el alcalde',
          'Nombró a Santander como nuevo gobernante de la ciudad',
          'Ejecutó a varios patriotas, exhibiendo la cabeza de uno en la plaza pública',
          'Liberó a todos los indígenas Argutacaca'
        ],
        correctIndex: 2
      },
      {
        id: 2,
        text: '¿Quiénes eran "Los Colorados"?',
        options: [
          'Un batallón patriota que defendía a Bolívar',
          'Un grupo armado realista (defendían al rey) que usaba pañoletas rojas y sembraba el terror',
          'Unos sacerdotes franciscanos que vestían de rojo',
          'Los indígenas que quemaron los conventos de Ocaña'
        ],
        correctIndex: 1
      },
      {
        id: 3,
        text: '¿Por qué la iglesia no toleró que el Padre Alejo María Buceta fuera patriota?',
        options: [
          'Porque no se sabía de memoria las oraciones en latín',
          'Porque la Iglesia apoyaba oficialmente a España y un cura patriota era peligroso por su influencia en la gente',
          'Porque usaba pañoletas rojas en misa',
          'Porque se negaba a bautizar a los españoles'
        ],
        correctIndex: 1
      },
      {
        id: 4,
        text: '¿Por qué es recordada históricamente doña Agustina Ferro?',
        options: [
          'Por ser la primera alcaldesa de Ocaña',
          'Por delatar a los patriotas ante la Inquisición',
          'Por esconder a un coronel patriota y rechazar que le vendaran los ojos antes de ser fusilada',
          'Por curar a los enfermos usando las hierbas de Leonelda'
        ],
        correctIndex: 2
      },
      {
        id: 5,
        text: 'Mientras había terror en Ocaña, ¿qué hizo Francisco de Paula Santander en Casanare que fue clave para ganar la Batalla de Boyacá?',
        options: [
          'Unificó, disciplinó y reorganizó al ejército patriota que estaba en la ruina',
          'Robó la corona del rey de España',
          'Se escondió en una cueva a esperar que pasara la guerra',
          'Fabricó cañones de madera de qricua'
        ],
        correctIndex: 0
      }
    ]
  },
  'quiz-12': {
    img: 'mission_12.jpg',
    chapter: 'Misión 12: Amor, poder y política',
    data: [
      {
        id: 1,
        text: '¿Qué castigo sufrió la familia Ibáñez-Arias por haber apoyado y financiado a Simón Bolívar?',
        options: [
          'Bolívar los traicionó y los envió a la cárcel',
          'Los españoles de Pablo Morillo les quitaron sus bienes, desterraron a las mujeres y el padre murió huyendo',
          'Fueron obligados a cambiar su apellido por orden del rey',
          'Fueron secuestrados por la guerrilla Los Colorados'
        ],
        correctIndex: 1
      },
      {
        id: 2,
        text: '¿Qué hizo Francisco de Paula Santander para poder vivir su romance con Nicolasa Ibáñez sin que el esposo de ella estorbara?',
        options: [
          'Lo mandó exiliado a Londres con la falsa excusa de ir a "imprimir leyes"',
          'Lo retó a un duelo a muerte en la Plaza de Bolívar',
          'Le pagó una gran fortuna para que se fuera a vivir a Venezuela',
          'Lo encerró en una prisión militar en Ocaña'
        ],
        correctIndex: 0
      },
      {
        id: 3,
        text: '¿Cómo intentó Simón Bolívar evitar que Bernardina Ibáñez se casara con el coronel Ambrosio Plaza?',
        options: [
          'Secuestró a Bernardina y se la llevó a su hacienda',
          'Les negó sistemáticamente la licencia militar necesaria para que pudieran contraer matrimonio',
          'Asesinó al coronel Plaza en un banquete',
          'Amenazó a los sacerdotes de Ocaña para que no hicieran la boda'
        ],
        correctIndex: 1
      },
      {
        id: 4,
        text: '¿Qué motivo personal influyó en que José Eusebio Caro decidiera fundar el Partido Conservador Colombiano?',
        options: [
          'Quería ser el rey de un nuevo país en la Nueva Granada',
          'Odiaba al partido Liberal porque ese era el partido de Santander, el hombre que había destruido a su familia',
          'Le pagaron una gran cantidad de dinero desde España',
          'Bolívar se lo ordenó en su lecho de muerte'
        ],
        correctIndex: 1
      },
      {
        id: 5,
        text: '¿Dónde ocurrió el fusilamiento de los líderes de "Los Colorados" en 1822, marcando el fin de su ciclo de violencia?',
        options: [
          'En el barrio La Carbonera',
          'En el actual barrio El Carretero',
          'En el Alto del Hatillo',
          'Frente al santuario del Agua de la Virgen'
        ],
        correctIndex: 1
      }
    ]
  },
  'quiz-13': {
    img: 'mission_13.jpg',
    chapter: 'Misión 13: La historia de Ocaña',
    data: [
      {
        id: 1,
        text: '¿Cuál era el proyecto original de Francisco de Miranda para el continente?',
        options: [
          'Mantener a América como colonia española para siempre',
          'Crear un solo Estado hispanoamericano con capital en Panamá llamada "Colombo"',
          'Vender todo el territorio de la Nueva Granada al imperio británico',
          'Convertir a Ocaña en la capital del mundo'
        ],
        correctIndex: 1
      },
      {
        id: 2,
        text: '¿Qué regiones intentaron anexarse a la Gran Colombia pero fracasaron debido a invasiones o al bloqueo de Estados Unidos?',
        options: [
          'Haití Español (República Dominicana), Cuba y Puerto Rico',
          'México, Guatemala y Honduras',
          'Perú, Bolivia y Paraguay',
          'Brasil, Argentina y Uruguay'
        ],
        correctIndex: 0
      },
      {
        id: 3,
        text: '¿Cuál fue el conflicto central que destruyó la Convención de Ocaña en 1828?',
        options: [
          'La decisión de qué idioma oficial usar en la República',
          'El choque entre los Santanderistas (autonomía) y los Bolivarianos (Constitución Vitalicia)',
          'El ataque sorpresa del ejército español',
          'La falta de recursos para pagarle al ejército'
        ],
        correctIndex: 1
      },
      {
        id: 4,
        text: '¿Qué consecuencia directa trajo el fracaso de la Convención de Ocaña tras el retiro de los bolivarianos?',
        options: [
          'Santander fue nombrado Rey de la Gran Colombia',
          'Se firmó la paz inmediatamente con España',
          'Bolívar asumió la dictadura, sufrió un intento de asesinato y desterró a Santander',
          'Bolívar renunció esa misma noche y se fue a vivir a Europa'
        ],
        correctIndex: 2
      },
      {
        id: 5,
        text: '¿Cómo terminaron sus vidas los Libertadores Miranda, Sucre y Bolívar?',
        options: [
          'Gobernando como dictadores hasta una edad muy avanzada',
          'De forma trágica: Miranda en prisión, Sucre asesinado y Bolívar enfermo viendo su sueño colapsar',
          'Se hicieron millonarios en Estados Unidos',
          'Se perdonaron con el Rey de España y murieron felices'
        ],
        correctIndex: 1
      }
    ]
  },
  'quiz-14': {
    img: 'mission_14.jpg',
    chapter: 'Misión 14: Ocaña se reinventa',
    data: [
      {
        id: 1,
        text: '¿Por qué la plaza principal de Ocaña fue rebautizada con el nombre "Plaza del 29 de Mayo"?',
        options: [
          'En conmemoración de la fecha en que se creó la Provincia de Ocaña en 1849',
          'Porque esa fue la fecha en que Simón Bolívar llegó a la ciudad',
          'En homenaje a la Batalla de Boyacá',
          'Porque ese día se descubrió la imagen de la Virgen de Torcoroma'
        ],
        correctIndex: 0
      },
      {
        id: 2,
        text: '¿Qué importancia histórica única tiene la Columna erigida en la plaza principal de Ocaña en 1852?',
        options: [
          'Es el único monumento militar dedicado a Pablo Morillo',
          'Es el único monumento en Colombia dedicado a conmemorar la abolición de la esclavitud',
          'Es la torre de comunicaciones más antigua de Santander',
          'Fue construida por los indígenas Argutacaca antes de la conquista'
        ],
        correctIndex: 1
      },
      {
        id: 3,
        text: '¿Qué acto histórico del gobernador Agustín Núñez en 1853 rompió barreras raciales durante las fiestas de la Columna?',
        options: [
          'Le otorgó el título de alcaldesa a una mujer indígena',
          'Bailó públicamente con Nicanora Rincón, la mujer negra liberta más longeva de Ocaña',
          'Nombró a un esclavo como general del ejército',
          'Permitió que los esclavos compraran la plaza principal'
        ],
        correctIndex: 1
      },
      {
        id: 4,
        text: 'Según las observaciones de la Comisión Corográfica en 1850, ¿qué prenda tradicional habían dejado de usar los hombres en Ocaña?',
        options: [
          'El sombrero de paja',
          'Las botas de cuero',
          'La ruana',
          'El taparrabos'
        ],
        correctIndex: 2
      },
      {
        id: 5,
        text: '¿Qué hito social y económico fundaron en 1894 la élite local y los inmigrantes de Alemania, Irlanda e Italia?',
        options: [
          'El Colegio José Eusebio Caro',
          'La primera empresa de acémilas',
          'El Club Ocaña',
          'La biblioteca pública del Catatumbo'
        ],
        correctIndex: 2
      }
    ]
  },
  'quiz-15': {
    img: 'mission_15.jpg',
    chapter: 'Misión 15: Memorias',
    data: [
      {
        id: 1,
        text: '¿Por qué los escritores del grupo "Los Felibres" usaban seudónimos (nombres falsos) al publicar?',
        options: [
          'Porque era una moda traída desde Francia',
          'Para protegerse de la persecución política por publicar ideas contrarias a la hegemonía conservadora',
          'Porque las editoriales no aceptaban nombres reales',
          'Para ganar un concurso de literatura secreta'
        ],
        correctIndex: 1
      },
      {
        id: 2,
        text: '¿Quiénes dirigieron el Colegio José Eusebio Caro durante su "época de oro" (1919-1933)?',
        options: [
          'Los profesores traídos de Europa',
          'Los padres Franciscanos',
          'Los padres Jesuitas',
          'Los intelectuales del grupo Los Felibres'
        ],
        correctIndex: 2
      },
      {
        id: 3,
        text: 'Ante la falta de carreteras en 1915, ¿cómo logró llegar el primer carro (un Ford T14) hasta Ocaña?',
        options: [
          'Lo transportaron por piezas en helicóptero',
          'Llegó desarmado y a lomo de mula cruzando la cordillera',
          'Fue arrastrado por caballos a través del río Chiquito',
          'El carro volaba gracias a un invento italiano'
        ],
        correctIndex: 1
      },
      {
        id: 4,
        text: '¿De dónde provino parte de la financiación para construir el espectacular Cable Aéreo Gamarra-Ocaña?',
        options: [
          'De la indemnización que Estados Unidos le pagó a Colombia por la pérdida de Panamá',
          'De un tesoro de oro encontrado en una urna funeraria indígena',
          'Del dinero donado por los fundadores del Colegio Caro',
          'De los impuestos cobrados por el cine Pacheco'
        ],
        correctIndex: 0
      },
      {
        id: 5,
        text: '¿Por qué se desmanteló y destruyó el histórico Cable Aéreo en 1948?',
        options: [
          'Porque las góndolas se oxidaron por la neblina',
          'Porque los piratas aéreos se robaron los cables principales',
          'Por la terminación de la nueva carretera Ocaña-Gamarra, un acto considerado hoy como un error visionario',
          'Porque la planta eléctrica del río Algodonal dejó de funcionar'
        ],
        correctIndex: 2
      }
    ]
  },
  'quiz-16': {
    img: 'mission_16.jpg',
    chapter: 'Misión 16: Ocaña entre guerras y fiestas',
    data: [
      {
        id: 1,
        text: '¿Cómo fue transportada la enorme estatua de bronce de Cristo Rey (3.5 toneladas) hasta la cima del antiguo Cerro de la Horca?',
        options: [
          'A lomo de mula por la cordillera',
          'En helicóptero militar desde Cúcuta',
          'En tres piezas utilizando el Cable Aéreo Gamarra-Ocaña',
          'Arrastrada por barcos por el río Tejo'
        ],
        correctIndex: 2
      },
      {
        id: 2,
        text: '¿Qué detalle histórico extraordinario esconde el busto de Santander instalado en la Plaza 29 de Mayo en 1940?',
        options: [
          'Fue esculpido por el mismo Simón Bolívar',
          'Fue fundido utilizando monedas de peso antiguas recicladas de la época del prócer',
          'Contiene una cápsula del tiempo con cenizas de los Argutacaca',
          'Fue un regalo del gobierno de España'
        ],
        correctIndex: 1
      },
      {
        id: 3,
        text: '¿En qué fecha se realizó por primera vez la tradición histórica del Desfile de los Genitores?',
        options: [
          '14 de diciembre de 1570',
          '16 de agosto de 1711',
          '3 de enero de 1959',
          '21 de marzo de 1920'
        ],
        correctIndex: 2
      },
      {
        id: 4,
        text: '¿De qué río provino el agua potable cuando se inauguró el primer acueducto moderno de la ciudad en 1937?',
        options: [
          'Río Algodonal',
          'Río Magdalena',
          'Río Tejo',
          'Río Catatumbo'
        ],
        correctIndex: 2
      },
      {
        id: 5,
        text: '¿Qué caudillo político liberal visitó Ocaña en 1947, hospedándose en el barrio San Francisco poco antes de su asesinato en Bogotá?',
        options: [
          'Lucio Pabón Núñez',
          'Jorge Eliécer Gaitán',
          'Misael Pastrana Borrero',
          'Henrique Ruiz Machuca'
        ],
        correctIndex: 1
      }
    ]
  },
  'quiz-17': {
    img: 'mission_17.jpg',
    chapter: 'Misión 17: Ocaña contemporánea',
    data: [
      {
        id: 1,
        text: '¿Qué colegio se fundó en 1961 para rescatar la memoria de la valiente heroína local fusilada por Los Colorados?',
        options: [
          'Colegio José Eusebio Caro',
          'Colegio John F. Kennedy',
          'Colegio Agustina Ferro',
          'Colegio de Señoritas La Presentación'
        ],
        correctIndex: 2
      },
      {
        id: 2,
        text: '¿Qué vínculo asombroso tiene el sacerdote ocañero Francisco C. Angarita con la literatura mundial?',
        options: [
          'Fue el maestro de literatura de José Eusebio Caro',
          'Presenció la masacre de las bananeras y bautizó al niño Gabriel García Márquez',
          'Escribió la primera novela de ciencia ficción en Colombia',
          'Fundó la Academia de Historia de Ocaña'
        ],
        correctIndex: 1
      },
      {
        id: 3,
        text: '¿Qué fenómeno provocó el crecimiento desordenado y caótico del mapa urbano de Ocaña a partir de 1963?',
        options: [
          'La destrucción causada por un huracán',
          'La construcción de una nueva terminal de transportes',
          'Las "invasiones" de terrenos impulsadas por la falta de vivienda y la migración rural',
          'El abandono del casco histórico por culpa de una peste'
        ],
        correctIndex: 2
      },
      {
        id: 4,
        text: 'En medio de un año muy violento para el país (1988), ¿qué cambio histórico en la política local vivió Ocaña?',
        options: [
          'Se abolió el cargo de Gobernador',
          'Se eligió y posesionó a Jesús Claro Ovallos como el primer alcalde por votación popular',
          'Ocaña fue declarada capital del departamento',
          'Se expulsó a todos los partidos políticos de la ciudad'
        ],
        correctIndex: 1
      },
      {
        id: 5,
        text: '¿Cómo fue recuperada la Virgen de Torcoroma tras el robo ejecutado por el argentino Carlos Delveccio en 1981?',
        options: [
          'El ejército rodeó la discoteca donde estaban celebrando y recuperaron la imagen',
          'El argentino se arrepintió a mitad del camino y la devolvió por correo',
          'Un policía ocañero (Yurgen Trujillo) requisó el carro del ladrón en Barranquilla gracias a una corazonada',
          'Los cómplices lo traicionaron y se la entregaron al alcalde'
        ],
        correctIndex: 2
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
