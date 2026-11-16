import { Check, Scan, Slash, X } from 'lucide-react-native'

export const QUIZZES = {
  'quiz1': {
    img: 'mission_1.jpg',
    chapter: 'Los pueblos originarios de Ocaña (Parte 1)',
    data: [
      {
        id: 1,
        text: '¿Qué nombre colectivo pusieron los españoles a los pueblos indígenas que encontraron junto al río Catatumbo?',
        options: ['Argutacaca', 'Carates', 'Hacaritamas', 'Búrburas'],
        correctIndex: 1
      },
      {
        id: 2,
        text: '¿En qué año el cabildo de Ocaña envió al gobernador de Santa Marta el primer informe oficial sobre estos pueblos?',
        options: ['1565', '1570', '1578', '1627'],
        correctIndex: 2
      },
      {
        id: 3,
        text: '¿Qué enfermedad tenían en realidad los indígenas a quienes los españoles creyeron enfermos de sarna?',
        options: [
          'Lepra',
          'Viruela',
          'Sarampión',
          'Pinta, también llamada carate o mal del pinto'
        ],
        correctIndex: 3
      },
      {
        id: 4,
        text: '¿Qué bacteria causa la enfermedad de la Pinta?',
        options: [
          'Treponema carateum',
          'Mycobacterium leprae',
          'Salmonella typhi',
          'Vibrio cholerae'
        ],
        correctIndex: 0
      },
      {
        id: 5,
        text: 'El nombre "Argutacaca" surgió de la mezcla de dos palabras indígenas. ¿Cuáles?',
        options: [
          'Ahirar y Hcari',
          'Arcuta y Socotegaga',
          'Otare y Brotaré',
          'Carate y palenque'
        ],
        correctIndex: 1
      },
      {
        id: 6,
        text: '¿Cómo se llama hoy la quebrada que los indígenas llamaban Arcuta?',
        options: ['Río Tejo', 'Río Algodonal', 'Río Chiquito', 'Río Catatumbo'],
        correctIndex: 2
      },
      {
        id: 7,
        text: '¿Cuál de estos barrios NO aparece entre los construidos sobre el antiguo territorio Argutacaca?',
        options: ['La Carbonera', 'Betania', 'Caracolí', 'Cristo Rey'],
        correctIndex: 3
      },
      {
        id: 8,
        text: '¿Cuál de estas NO es una de las tres teorías sobre la desaparición de los Argutacaca?',
        options: [
          'Desplazamiento forzado por los españoles',
          'Una erupción volcánica que arrasó el poblado',
          'Mestizaje y asimilación',
          'Migración hacia zonas remotas'
        ],
        correctIndex: 1
      },
      {
        id: 9,
        text: '¿En qué fase de la luna sembraban los Argutacaca la yuca y otros cultivos que crecen bajo tierra?',
        options: [
          'Luna menguante',
          'Luna creciente',
          'Luna llena',
          'Luna nueva'
        ],
        correctIndex: 0
      },
      {
        id: 10,
        text: '¿Qué producto conseguían principalmente los Argutacaca mediante el comercio, porque no se producía en Ocaña?',
        options: ['Maíz', 'Oro', 'Plumas de guacamaya', 'Sal'],
        correctIndex: 3
      }
    ]
  },

  'quiz2': {
    img: 'mission_4.jpg',
    chapter: 'Los pueblos originarios de Ocaña (Parte 2)',
    data: [
      {
        id: 1,
        text: '¿Por qué los Argutacaca vivían en ramadas?',
        options: [
          'Porque eran muy pobres',
          'Porque los españoles los obligaron',
          'Por elección, como parte de una vida semi-nómada',
          'Porque no conocían la madera'
        ],
        correctIndex: 2
      },
      {
        id: 2,
        text: '¿Cuánto tiempo cultivaban un mismo lugar antes de mudarse para que el suelo se recuperara?',
        options: ['Seis meses', 'Dos o tres años', 'Diez años', 'Toda la vida'],
        correctIndex: 1
      },
      {
        id: 3,
        text: '¿Cuál era el principio de organización de la sociedad Argutacaca?',
        options: [
          '"El cacique decide por todos"',
          '"La tierra es del más fuerte"',
          '"Manda el consejo de ancianos"',
          '"Cada quien era señor de su casa"'
        ],
        correctIndex: 3
      },
      {
        id: 4,
        text: '¿Cuál de estas NO era una causa de los conflictos internos entre los nativos?',
        options: [
          'Las invasiones de ejércitos de pueblos vecinos',
          'Las venganzas ancestrales entre familias',
          'El consumo excesivo de chicha en ceremonias',
          'La falta de un sistema que resolviera disputas'
        ],
        correctIndex: 0
      },
      {
        id: 5,
        text: '¿Qué ritual Argutacaca escandalizó más a los españoles?',
        options: [
          'Pintarse el cuerpo con barro',
          'Desenterrar a sus muertos y bailar con sus esqueletos',
          'Quemar sus ramadas al mudarse',
          'Beber chicha en las cosechas'
        ],
        correctIndex: 1
      },
      {
        id: 6,
        text: '¿Qué era un palenque?',
        options: [
          'Una vasija de barro para guardar semillas',
          'Un tambor de piel de venado',
          'Una cerca de palos gruesos con puntas agudas alrededor de las viviendas',
          'Una túnica que usaban las mujeres'
        ],
        correctIndex: 2
      },
      {
        id: 7,
        text: '¿Dónde se asentaron algunos miembros de la cultura Mosquito, cerca de Ocaña?',
        options: [
          'Otare y Teorama',
          'Abrego y Brotaré',
          'El Hatillo y La Carbonera',
          'Pueblo Nuevo y Agua de la Virgen'
        ],
        correctIndex: 3
      },
      {
        id: 8,
        text: '¿Quiénes descubrieron las primeras urnas funerarias en Ocaña en 1932 y 1933?',
        options: [
          'Los sacerdotes Debilly y Escobar',
          'El historiador Justiniano J. Páez',
          'La Comisión Corográfica',
          'Arqueólogos del Museo Americano'
        ],
        correctIndex: 0
      },
      {
        id: 9,
        text: 'En el enterramiento secundario, ¿qué hacían con los huesos antes de ponerlos en la urna?',
        options: [
          'Los pintaban de rojo',
          'Los tallaban con figuras',
          'Los calcinaban',
          'Los lavaban en el río y los secaban al sol'
        ],
        correctIndex: 2
      },
      {
        id: 10,
        text: '¿En qué barrio de Ocaña está la Piedra Gorda?',
        options: [
          'San Francisco',
          'El Hatillo',
          'Primero de Mayo',
          'Hacaritama'
        ],
        correctIndex: 1
      }
    ]
  },

  'quiz3': {
    img: 'mission_6.jpg',
    chapter: 'La fundación y la ciudad colonial',
    data: [
      {
        id: 1,
        text: '¿Cuántos hombres armados acompañaron a Francisco Fernández de Contreras para fundar Ocaña en 1570?',
        options: ['12', '32', '100', '300'],
        correctIndex: 1
      },
      {
        id: 2,
        text: '¿Por qué la ciudad se llama Ocaña?',
        options: [
          'Por un cacique indígena llamado Ocaña',
          'Por el nombre del río que la cruza',
          'En homenaje al gobernador Pedro Fernández de Bustos, nacido en Ocaña, España',
          'Por un santo celebrado el día de la fundación'
        ],
        correctIndex: 2
      },
      {
        id: 3,
        text: '¿Qué pueblo indígena bloqueaba la ruta comercial Pamplona – Lago de Maracaibo – Costa?',
        options: [
          'Los Quiriquíes',
          'Los Muiscas',
          'Los Búrburas',
          'Los Mosquito'
        ],
        correctIndex: 0
      },
      {
        id: 4,
        text: '¿Qué nombre recibió primero el asentamiento fundado el 26 de julio de 1570?',
        options: ['San Francisco', 'Hacaritama', 'Villa del Río', 'Santa Ana'],
        correctIndex: 3
      },
      {
        id: 5,
        text: '¿Cómo se llama el modelo de cuadrícula que impusieron los españoles, ordenado por el rey Felipe II?',
        options: ['Palenque', 'Damero', 'Encomienda', 'Ramada'],
        correctIndex: 1
      },
      {
        id: 6,
        text: '¿A qué se dedicaba la primera empresa de Ocaña, fundada en 1577?',
        options: [
          'A la minería de oro',
          'A producir miel de caña',
          'A tejer mantas de lana',
          'Al transporte de mercancías con burros y mulas'
        ],
        correctIndex: 3
      },
      {
        id: 7,
        text: '¿Qué hecho de 1875 llevó a derribar la segunda versión de la iglesia mayor?',
        options: [
          'Un incendio',
          'Un terremoto',
          'Una inundación del río Chiquito',
          'Una orden del rey'
        ],
        correctIndex: 1
      },
      {
        id: 8,
        text: 'Según el censo de 1627, ¿cuántos indígenas tributarios había en Ocaña?',
        options: [
          'Cerca de 600',
          'Cerca de 2.000',
          'Cerca de 6.000',
          'Cerca de 60'
        ],
        correctIndex: 0
      },
      {
        id: 9,
        text: 'Cuando se ordenó cerrar el convento de San Francisco en 1776, ¿quiénes fueron los principales donantes para salvarlo?',
        options: [
          'Los indígenas de la región',
          'El rey de España',
          'Los encomenderos que se enriquecieron con trabajo indígena',
          'Los frailes de Santa Marta'
        ],
        correctIndex: 2
      },
      {
        id: 10,
        text: 'Según la leyenda, ¿qué lugar debe visitar cada noche el alma en pena de Antón García de Bonilla?',
        options: [
          'La Plaza 29 de Mayo',
          'El santuario de Torcoroma',
          'El cerro de la Horca',
          'El santuario de Santa Rita'
        ],
        correctIndex: 3
      }
    ]
  },

  'quiz4': {
    img: 'mission_8.jpg',
    chapter: 'Leonelda y las yerbateras',
    data: [
      {
        id: 1,
        text: '¿Quién era la maestra del grupo de las yerbateras?',
        options: [
          'Leonelda Hernández',
          'María Antonia Mandona',
          'María de Mora',
          'María del Carmen'
        ],
        correctIndex: 1
      },
      {
        id: 2,
        text: '¿Cómo se conoce hoy Burgama, donde vivían las yerbateras?',
        options: [
          'El Alto del Hatillo',
          'Pueblo Nuevo',
          'San Juan Crisóstomo de la Loma del Viento, en González (Cesar)',
          'Agua de la Virgen'
        ],
        correctIndex: 2
      },
      {
        id: 3,
        text: '¿Qué tribu indígena protegió a las yerbateras?',
        options: [
          'Los Búrburas',
          'Los Carates',
          'Los Quiriquíes',
          'Los Mosquito'
        ],
        correctIndex: 0
      },
      {
        id: 4,
        text: '¿Qué origen tenía Leonelda Hernández?',
        options: [
          'Española nacida en Sevilla',
          'Indígena búrbura',
          'Esclava traída de África',
          'Mestiza, hija de nativa y español'
        ],
        correctIndex: 3
      },
      {
        id: 5,
        text: 'Según el texto, ¿por qué tenía sentido recolectar plantas de noche?',
        options: [
          'Porque así nadie las veía',
          'Porque algunas plantas concentran más aceites esenciales de noche',
          'Porque la luna les daba poderes',
          'Porque de día hacía demasiado calor'
        ],
        correctIndex: 1
      },
      {
        id: 6,
        text: 'Según el texto, ¿cuál era la función real de la Santa Inquisición?',
        options: [
          'Ejercer control social, político y económico por medio del terror',
          'Enseñar a leer a los indígenas',
          'Curar enfermos con medicina europea',
          'Repartir tierras entre los colonos'
        ],
        correctIndex: 0
      },
      {
        id: 7,
        text: '¿Por qué los guardias decidieron ejecutar a Leonelda antes de llegar a Ocaña?',
        options: [
          'Porque se había escapado dos veces',
          'Porque el alcalde estaba de viaje',
          'Porque el obispo Liñán de Cisneros estaba en la ciudad y era conocido por conceder indultos',
          'Porque la cárcel estaba llena'
        ],
        correctIndex: 2
      },
      {
        id: 8,
        text: '¿Qué gritó Leonelda cuando le pusieron la soga al cuello?',
        options: [
          '"¡Libertad para Burgama!"',
          '"¡Venganza por la Mandona!"',
          '"¡Que viva la tierra!"',
          '"¡Aquí de los búrburas!"'
        ],
        correctIndex: 3
      },
      {
        id: 9,
        text: '¿Qué nombre recibió el Alto del Hatillo después del rescate de Leonelda?',
        options: [
          'Cerro de Cristo Rey',
          'Cerro de la Horca',
          'Loma del Viento',
          'Cerro de la Santa Cruz'
        ],
        correctIndex: 1
      },
      {
        id: 10,
        text: 'Según el mito final, ¿cómo escapaba Leonelda cuando los soldados estaban a punto de alcanzarla?',
        options: [
          'Se transformaba en ave',
          'Se volvía invisible',
          'Se escondía en el río',
          'Se convertía en serpiente'
        ],
        correctIndex: 0
      }
    ]
  },

  'quiz5': {
    img: 'mission_9.jpg',
    chapter: 'La Virgen de Torcoroma',
    data: [
      {
        id: 1,
        text: '¿Qué familia encontró la imagen de la Virgen de Torcoroma?',
        options: [
          'Ibáñez Arias',
          'García de Bonilla',
          'Melo Rodríguez',
          'Quintero Copete'
        ],
        correctIndex: 2
      },
      {
        id: 2,
        text: '¿En qué fecha apareció la imagen al cortar el árbol?',
        options: [
          '15 de agosto de 1711',
          '16 de agosto de 1711',
          '14 de diciembre de 1570',
          '11 de marzo de 1711'
        ],
        correctIndex: 1
      },
      {
        id: 3,
        text: '¿Para qué buscaban madera Felipe y José Melo?',
        options: [
          'Para construir una capilla',
          'Para hacer una canoa de pesca',
          'Para fabricar un dornajo de trapiche, usado para hacer dulces con miel',
          'Para hacer leña'
        ],
        correctIndex: 2
      },
      {
        id: 4,
        text: '¿Qué tenía de especial el árbol que encontraron los hermanos Melo?',
        options: [
          'Tenía flores encarnadas aunque no era época de floración',
          'Era el árbol más alto de la montaña',
          'Tenía una cruz tallada en el tronco',
          'Brillaba en la oscuridad'
        ],
        correctIndex: 0
      },
      {
        id: 5,
        text: '¿Qué advocación de la Virgen aparece en la imagen?',
        options: [
          'Virgen del Carmen',
          'Virgen de Guadalupe',
          'Virgen de Chiquinquirá',
          'Virgen de la Concepción'
        ],
        correctIndex: 3
      },
      {
        id: 6,
        text: '¿Qué cargo le dio el obispo a Pascuala Rodríguez?',
        options: [
          'Guardiana del santuario',
          'Camarera de alhajas y de la ropa de altar',
          'Madre superiora',
          'Mayordoma de la capilla'
        ],
        correctIndex: 1
      },
      {
        id: 7,
        text: '¿Qué papa declaró a la Virgen de Torcoroma Patrona de la Diócesis en 1963?',
        options: ['Pío X', 'Juan Pablo II', 'Pablo VI', 'Benedicto XVI'],
        correctIndex: 2
      },
      {
        id: 8,
        text: '¿Qué declaró el Decreto No. 1425 de 1972, firmado por Misael Pastrana Borrero?',
        options: [
          'Que el santuario de Torcoroma es monumento nacional',
          'Que el 16 de agosto es festivo nacional',
          'Que Ocaña es capital religiosa del país',
          'Que se construyera una nueva capilla'
        ],
        correctIndex: 0
      },
      {
        id: 9,
        text: 'Tras el robo del 11 de marzo de 1981, ¿cuántos días pasaron antes de que la imagen volviera a Ocaña?',
        options: ['Un mes', 'Una semana', 'Un año', 'Dos días'],
        correctIndex: 3
      },
      {
        id: 10,
        text: '¿Qué son los exvotos que dejan los devotos en el santuario?',
        options: [
          'Monedas para pagar la misa',
          'Objetos o placas que dan testimonio de un milagro recibido',
          'Velas encendidas durante la novena',
          'Cartas dirigidas al papa'
        ],
        correctIndex: 1
      }
    ]
  },

  'quiz6': {
    img: 'mission_10.jpg',
    chapter: 'Ocaña en la independencia',
    data: [
      {
        id: 1,
        text: '¿Qué joven ocañero, que estudiaba en Pamplona, trajo a Ocaña las noticias de los levantamientos?',
        options: [
          'Antonio Quintero Copete',
          'Miguel Ibáñez',
          'Agustín Núñez',
          'Juan Pino'
        ],
        correctIndex: 0
      },
      {
        id: 2,
        text: '¿Cuál de estos medios NO existía en 1810 para que las noticias llegaran a Ocaña?',
        options: [
          'El correo a caballo',
          'Los viajeros y comerciantes',
          'Los sermones de los curas',
          'El telégrafo'
        ],
        correctIndex: 3
      },
      {
        id: 3,
        text: '¿Cuál de estos era un argumento a favor de la independencia?',
        options: [
          'La Iglesia apoyaba a la Corona',
          'El rey garantizaba orden y estabilidad',
          'La posibilidad de comerciar libremente sin impuestos españoles',
          'El cambio era un riesgo incierto'
        ],
        correctIndex: 2
      },
      {
        id: 4,
        text: '¿Qué edad tenía Bolívar cuando llegó a Ocaña en enero de 1813?',
        options: ['19 años', '29 años', '39 años', '47 años'],
        correctIndex: 1
      },
      {
        id: 5,
        text: '¿Quién pronunció el discurso de bienvenida a Bolívar en nombre de las cinco mujeres?',
        options: [
          'Nicolasa Ibáñez',
          'Eusebia Sarabia',
          'Agustina Ferro',
          'Bárbara Vicenta Lemus'
        ],
        correctIndex: 3
      },
      {
        id: 6,
        text: '¿Hacia dónde partió el ejército patriota el 16 de enero de 1813?',
        options: ['Cúcuta', 'Santa Marta', 'Bogotá', 'Mompox'],
        correctIndex: 0
      },
      {
        id: 7,
        text: '¿Qué pasó en Ocaña el 7 de abril de 1813?',
        options: [
          'Llegó Bolívar a la ciudad',
          'Se rompieron públicamente los sellos y símbolos del poder español',
          'Entró Pablo Morillo',
          'Se fundó el Batallón Libertador'
        ],
        correctIndex: 1
      },
      {
        id: 8,
        text: '¿Cuántos ocañeros formaron el Batallón Libertador de Ocaña?',
        options: ['70', '500', '180', '1.500'],
        correctIndex: 2
      },
      {
        id: 9,
        text: '¿De dónde llegaron los 70 hombres que formaron la compañía de apoyo?',
        options: ['Mompox', 'Pamplona', 'Aguachica', 'Río de Oro'],
        correctIndex: 3
      },
      {
        id: 10,
        text: '¿Cuál de estas batallas NO aparece entre las que combatieron los ocañeros en esta misión?',
        options: [
          'Batalla de San Cayetano',
          'Batalla de Salazar de las Palmas',
          'Batalla del Pantano de Vargas',
          'Batalla de Cúcuta'
        ],
        correctIndex: 2
      }
    ]
  },

  'quiz7': {
    img: 'mission_11.jpg',
    chapter: 'Terror, amor y poder',
    data: [
      {
        id: 1,
        text: '¿En qué fecha entró Pablo Morillo a Ocaña?',
        options: [
          '1 de abril de 1816',
          '7 de agosto de 1819',
          '3 de abril de 1815',
          '20 de enero de 1820'
        ],
        correctIndex: 0
      },
      {
        id: 2,
        text: '¿Con qué título se llamaba a sí mismo Pablo Morillo?',
        options: [
          'El Libertador',
          'El Pacificador',
          'El Conquistador',
          'El Reconquistador'
        ],
        correctIndex: 1
      },
      {
        id: 3,
        text: '¿De qué nacionalidad era Miguel Carabaño, cuya cabeza fue exhibida en la plaza pública?',
        options: ['Española', 'Argentina', 'Venezolana', 'Peruana'],
        correctIndex: 2
      },
      {
        id: 4,
        text: '¿De dónde viene el nombre de "Los Colorados"?',
        options: [
          'De la tierra roja de la región',
          'De su jefe, apodado "el Colorado"',
          'De que pintaban sus casas de rojo',
          'De que usaban pantalón y pañoleta roja'
        ],
        correctIndex: 3
      },
      {
        id: 5,
        text: '¿A quién ayudó a escapar Agustina Ferro?',
        options: [
          'Al coronel Fernando Figueredo',
          'A Simón Bolívar',
          'A Francisco de Paula Santander',
          'Al Padre Alejo María Buceta'
        ],
        correctIndex: 0
      },
      {
        id: 6,
        text: '¿Qué hizo Agustina Ferro antes de ser fusilada?',
        options: [
          'Pidió perdón al pelotón',
          'Rechazó que le vendaran los ojos',
          'Intentó escapar',
          'Delató a Figueredo'
        ],
        correctIndex: 1
      },
      {
        id: 7,
        text: '¿En qué región reorganizó Santander el ejército patriota entre 1818 y 1819?',
        options: ['Ocaña', 'Cúcuta', 'Casanare', 'Bucaramanga'],
        correctIndex: 2
      },
      {
        id: 8,
        text: '¿Cuándo logró escapar Miguel Ibáñez de la prisión?',
        options: [
          'El día de su boda',
          'Después de la Batalla de Boyacá',
          'Cuando Bolívar llegó a Ocaña',
          'La noche anterior a su fusilamiento, el 8 de septiembre de 1816'
        ],
        correctIndex: 3
      },
      {
        id: 9,
        text: '¿Qué papel tuvo Bolívar en la boda de Nicolasa Ibáñez con Antonio José Caro?',
        options: [
          'Fue el novio rechazado',
          'Fue el sacerdote',
          'Fue el padrino',
          'Se opuso a la boda'
        ],
        correctIndex: 2
      },
      {
        id: 10,
        text: '¿Con qué excusa envió Santander a Antonio José Caro a Londres en 1825?',
        options: [
          'Para comprar armas',
          'Para imprimir leyes',
          'Para firmar un tratado de paz',
          'Para estudiar medicina'
        ],
        correctIndex: 1
      },
      {
        id: 11,
        text: '¿Qué partido político fundó José Eusebio Caro en 1849 junto a Mariano Ospina Rodríguez?',
        options: [
          'Partido Conservador Colombiano',
          'Partido Liberal',
          'Partido Federalista',
          'Partido Bolivariano'
        ],
        correctIndex: 0
      },
      {
        id: 12,
        text: '¿Cómo terminó la guerrilla de Los Colorados en 1822?',
        options: [
          'Firmaron la paz con Bolívar',
          'Se fueron a España con Morillo',
          'Se unieron al ejército patriota',
          'Sus líderes fueron capturados y fusilados en el actual barrio El Carretero'
        ],
        correctIndex: 3
      }
    ]
  },

  'quiz8': {
    img: 'mission_13.jpg',
    chapter: 'La Gran Colombia y la Convención de Ocaña',
    data: [
      {
        id: 1,
        text: '¿Qué nombre propuso Francisco de Miranda para la capital del continente que quería crear en Panamá?',
        options: ['Bolívar', 'Colombo', 'Nueva Granada', 'Angostura'],
        correctIndex: 1
      },
      {
        id: 2,
        text: '¿En qué documento de 1815 propuso Bolívar una alianza de repúblicas con centro en Panamá?',
        options: [
          'El Acta de Independencia',
          'La Constitución Vitalicia',
          'La Carta de Jamaica',
          'El Manifiesto de Cartagena'
        ],
        correctIndex: 2
      },
      {
        id: 3,
        text: 'Con la creación de la "República de Colombia", ¿cómo pasó a llamarse la Nueva Granada?',
        options: ['Cundinamarca', 'Santafé', 'Boyacá', 'Gran Colombia'],
        correctIndex: 0
      },
      {
        id: 4,
        text: '¿Qué territorio se unió a la Gran Colombia en 1822?',
        options: ['Panamá', 'Perú', 'Cuba', 'Quito (Ecuador)'],
        correctIndex: 3
      },
      {
        id: 5,
        text: '¿Cómo se llamaba la sociedad secreta que intentó unir a Cuba con Colombia en 1821?',
        options: [
          'Los Felibres',
          'Soles y Rayos de Bolívar',
          'Estado de Borinquén',
          'La Cosiata'
        ],
        correctIndex: 1
      },
      {
        id: 6,
        text: '¿Qué país bloqueó la unión de Puerto Rico a la Gran Colombia?',
        options: ['Haití', 'España', 'Estados Unidos', 'Inglaterra'],
        correctIndex: 2
      },
      {
        id: 7,
        text: '¿Qué defendían los santanderistas en la Convención de Ocaña de 1828?',
        options: [
          'El federalismo y límites estrictos al poder del presidente',
          'La Constitución Vitalicia',
          'Volver a ser colonia de España',
          'Un presidente con cargo de por vida'
        ],
        correctIndex: 0
      },
      {
        id: 8,
        text: '¿Cómo hicieron fracasar los bolivarianos la Convención de Ocaña?',
        options: [
          'Arrestaron a los santanderistas',
          'Quemaron las actas',
          'Votaron en contra de todo',
          'Abandonaron las deliberaciones el 6 de junio para romper el quórum'
        ],
        correctIndex: 3
      },
      {
        id: 9,
        text: '¿Qué general venezolano encabezó el movimiento separatista de 1826 llamado "La Cosiata"?',
        options: [
          'Antonio José de Sucre',
          'Francisco de Miranda',
          'José Antonio Páez',
          'Pablo Morillo'
        ],
        correctIndex: 2
      },
      {
        id: 10,
        text: '¿Dónde fue asesinado Antonio José de Sucre en 1830?',
        options: ['Santa Marta', 'Berruecos', 'Ayacucho', 'Quito'],
        correctIndex: 1
      }
    ]
  },

  'quiz9': {
    img: 'mission_14.jpg',
    chapter: 'La Provincia de Ocaña',
    data: [
      {
        id: 1,
        text: '¿Qué ley desató la Guerra de los Supremos (1839–1842)?',
        options: [
          'Una ley que abolía la esclavitud',
          'Una ley que ordenaba cerrar conventos pequeños para financiar escuelas públicas',
          'Una ley que creaba nuevos impuestos al comercio',
          'Una ley que trasladaba la capital a Ocaña'
        ],
        correctIndex: 1
      },
      {
        id: 2,
        text: '¿Qué creó la Ley 64 del 29 de mayo de 1849?',
        options: [
          'La Provincia de Ocaña',
          'La Universidad de Ocaña',
          'El Club Ocaña',
          'La Diócesis de Ocaña'
        ],
        correctIndex: 0
      },
      {
        id: 3,
        text: '¿Quién fue el primer gobernador de la Provincia de Ocaña?',
        options: [
          'Agustín Núñez Baena',
          'Miguel Ibáñez',
          'Manuel Ancízar',
          'Pedro Alcántara Ibáñez Arias'
        ],
        correctIndex: 3
      },
      {
        id: 4,
        text: '¿Qué conmemora la Columna de los Esclavos de la plaza principal?',
        options: [
          'La Batalla de Boyacá',
          'La fundación de Ocaña',
          'La abolición de la esclavitud',
          'La Convención de 1828'
        ],
        correctIndex: 2
      },
      {
        id: 5,
        text: '¿Qué representan los cinco anillos de la Columna de los Esclavos?',
        options: [
          'Los países liberados por Bolívar',
          'Los cinco gobernadores de la provincia',
          'Los cinco barrios fundadores',
          'Los cinco siglos de historia de Ocaña'
        ],
        correctIndex: 0
      },
      {
        id: 6,
        text: 'Con la "Libertad de partos" de 1821, ¿hasta qué edad debían servir a sus amos los hijos de esclavos?',
        options: ['12 años', '15 años', '21 años', '18 años'],
        correctIndex: 3
      },
      {
        id: 7,
        text: '¿Desde qué fecha se hizo efectiva la abolición total de la esclavitud?',
        options: [
          '21 de mayo de 1851',
          '1 de enero de 1852',
          '6 de enero de 1853',
          '29 de mayo de 1849'
        ],
        correctIndex: 1
      },
      {
        id: 8,
        text: '¿Con quién bailó en público el gobernador Agustín Núñez en la inauguración de la columna?',
        options: [
          'Nicolasa Ibáñez',
          'Bernardina Ibáñez',
          'Nicanora Rincón',
          'Agustina Ferro'
        ],
        correctIndex: 2
      },
      {
        id: 9,
        text: '¿Quiénes dirigían la Comisión Corográfica que llegó a Ocaña en 1850?',
        options: [
          'Agustín Codazzi y Manuel Ancízar',
          'Bolívar y Santander',
          'Euquerio Amaya y Luis Tablanca',
          'James F. Lindsay y Juan Toscano'
        ],
        correctIndex: 0
      },
      {
        id: 10,
        text: '¿En qué año se fundó el Club Ocaña, entre la élite local y ciudadanos extranjeros?',
        options: ['1850', '1889', '1904', '1894'],
        correctIndex: 3
      }
    ]
  },

  'quiz10': {
    img: 'mission_15.jpg',
    chapter: 'Letras, colegio y modernidad',
    data: [
      {
        id: 1,
        text: '¿De dónde tomaron su nombre Los Felibres?',
        options: [
          'De un río de Ocaña',
          'De un movimiento literario francés',
          'De un poeta español',
          'De una tribu indígena'
        ],
        correctIndex: 1
      },
      {
        id: 2,
        text: '¿Por qué los Felibres publicaban con seudónimos?',
        options: [
          'Para protegerse de la persecución política durante la hegemonía conservadora',
          'Porque era una moda francesa',
          'Porque sus nombres eran muy largos',
          'Porque eran sacerdotes'
        ],
        correctIndex: 0
      },
      {
        id: 3,
        text: '¿Qué seudónimo usaba Enrique Pardo Farelo?',
        options: [
          'Adolfo Milanés',
          'Edmundo Velásquez',
          'Luis Tablanca',
          'Euquerio Amaya'
        ],
        correctIndex: 2
      },
      {
        id: 4,
        text: '¿Sobre qué terreno se construyó la sede definitiva del Colegio José Eusebio Caro?',
        options: [
          'Sobre el antiguo convento de San Francisco',
          'Sobre la casa donde se alojó Bolívar',
          'Sobre el antiguo molino de trigo',
          'Sobre el terreno donde nació el poeta José Eusebio Caro'
        ],
        correctIndex: 3
      },
      {
        id: 5,
        text: '¿Qué obra construyó Argelino Durán Quintero como Ministro de Obras Públicas?',
        options: [
          'El Cable Aéreo',
          'El Puente Pumarejo',
          'El aeropuerto Aguas Claras',
          'El acueducto de Ocaña'
        ],
        correctIndex: 1
      },
      {
        id: 6,
        text: '¿Qué causó la Tragedia de La Piñuela en 1909?',
        options: [
          'Un terremoto',
          'Un incendio en el mercado',
          'El desbordamiento del río Chiquito',
          'Una epidemia de fiebre amarilla'
        ],
        correctIndex: 2
      },
      {
        id: 7,
        text: '¿Cómo llegó a Ocaña el primer carro, en 1915?',
        options: [
          'Por el río Magdalena hasta Gamarra y luego desarmado a lomo de mula',
          'Por la carretera desde Cúcuta',
          'En el Cable Aéreo',
          'En avión'
        ],
        correctIndex: 0
      },
      {
        id: 8,
        text: '¿Qué río movía la planta eléctrica inaugurada el 21 de marzo de 1920?',
        options: ['Río Tejo', 'Río Chiquito', 'Río Magdalena', 'Río Algodonal'],
        correctIndex: 3
      },
      {
        id: 9,
        text: '¿Qué tuvo de especial el Cable Aéreo Gamarra–Ocaña, inaugurado en 1929?',
        options: [
          'Fue el primero de Colombia en transportar café',
          'Fue el primer monocable del mundo en transportar pasajeros en largas distancias',
          'Fue construido por los Jesuitas',
          'Funcionaba con energía solar'
        ],
        correctIndex: 1
      },
      {
        id: 10,
        text: '¿Por qué se desmanteló el Cable Aéreo en 1948?',
        options: [
          'Por un incendio que destruyó las torres',
          'Por falta de pasajeros',
          'Porque se terminó la carretera Ocaña–Gamarra',
          'Porque lo compró otro país'
        ],
        correctIndex: 2
      }
    ]
  },

  'quiz11': {
    img: 'mission_16.jpg',
    chapter: 'Ocaña entre guerras y fiestas',
    data: [
      {
        id: 1,
        text: '¿Dónde fue forjada la estatua de bronce de Cristo Rey?',
        options: ['Bogotá', 'Roma', 'Barcelona', 'Nueva York'],
        correctIndex: 2
      },
      {
        id: 2,
        text: '¿Cómo se subió la estatua de Cristo Rey hasta Ocaña?',
        options: [
          'En tres piezas por el Cable Aéreo',
          'En un camión por la carretera',
          'Cargada por mulas',
          'En helicóptero'
        ],
        correctIndex: 0
      },
      {
        id: 3,
        text: '¿Con qué material se fundió el busto de Santander de la Plaza 29 de Mayo?',
        options: [
          'Con campanas viejas de la iglesia',
          'Con cañones de la independencia',
          'Con rieles del Cable Aéreo',
          'Con antiguas monedas de la época del prócer'
        ],
        correctIndex: 3
      },
      {
        id: 4,
        text: '¿Qué arquitecto italiano diseñó el Teatro Morales Berti y el Mercado Cubierto?',
        options: [
          'Agustín Codazzi',
          'Aladino Benigni',
          'Juan Toscano',
          'James F. Lindsay'
        ],
        correctIndex: 1
      },
      {
        id: 5,
        text: '¿Qué revista nació 27 días después de fundarse el Centro de Historia de Ocaña?',
        options: ['Espigas', 'Ideas', 'Revista Hacaritama', 'Los Genitores'],
        correctIndex: 2
      },
      {
        id: 6,
        text: '¿De qué río venía el agua del acueducto que llegó al centro de Ocaña en 1937?',
        options: ['Río Tejo', 'Río Chiquito', 'Río Algodonal', 'Río Catatumbo'],
        correctIndex: 0
      },
      {
        id: 7,
        text: '¿Cómo se llama la pista de aviación inaugurada en Ocaña en 1952?',
        options: ['El Dorado', 'Camilo Daza', 'Pumarejo', 'Aguas Claras'],
        correctIndex: 3
      },
      {
        id: 8,
        text: '¿En qué libro se basa el Desfile de los Genitores, que nació en 1959?',
        options: [
          '"Cien años de soledad"',
          '"Los Genitores", de Euquerio Amaya',
          '"Monografías de historia de Ocaña"',
          '"Peregrinación de Alpha"'
        ],
        correctIndex: 1
      },
      {
        id: 9,
        text: '¿Qué se intentó crear sin éxito en 1955, con capital en Ocaña?',
        options: [
          'El Departamento Caro',
          'La Provincia de Hacaritama',
          'El Estado de Santander',
          'La República de Ocaña'
        ],
        correctIndex: 0
      },
      {
        id: 10,
        text: '¿Qué ocurrió el 8 de octubre de 1957 en Ocaña?',
        options: [
          'Llegó Gaitán a la ciudad',
          'Se inauguró el Mercado Cubierto',
          'Fue el primer carnaval',
          'Fanáticos detonaron una bomba en el templo protestante'
        ],
        correctIndex: 3
      }
    ]
  },

  'quiz12': {
    img: 'mission_17.jpg',
    chapter: 'Ocaña contemporánea',
    data: [
      {
        id: 1,
        text: '¿A quién rinde homenaje el colegio creado en 1961 para jóvenes de escasos recursos?',
        options: [
          'Nicolasa Ibáñez',
          'Agustina Ferro',
          'Bárbara Vicenta Lemus',
          'Leonelda Hernández'
        ],
        correctIndex: 1
      },
      {
        id: 2,
        text: '¿Qué política estadounidense refleja la creación del Colegio John F. Kennedy en 1964?',
        options: [
          'El Plan Colombia',
          'La Doctrina Monroe',
          'La Alianza para el Progreso',
          'El Plan Marshall'
        ],
        correctIndex: 2
      },
      {
        id: 3,
        text: '¿A quiénes estuvieron dirigidas las primeras clases de la UFPSO en marzo de 1975?',
        options: [
          'A profesores de primaria sin título',
          'A ingenieros del Cable Aéreo',
          'A sacerdotes franciscanos',
          'A militares del Batallón Santander'
        ],
        correctIndex: 0
      },
      {
        id: 4,
        text: '¿Qué funciona en el claustro de San Francisco por la ley de 1977?',
        options: [
          'La alcaldía y el concejo',
          'El Colegio Caro',
          'El Club Ocaña',
          'La Biblioteca Luis Eduardo Páez Courvel, la Academia de Historia y el Museo de la Gran Convención'
        ],
        correctIndex: 3
      },
      {
        id: 5,
        text: '¿A qué escritor famoso bautizó en 1930 el sacerdote ocañero Francisco C. Angarita?',
        options: [
          'José Eusebio Caro',
          'Gabriel García Márquez',
          'Álvaro Mutis',
          'Jorge Isaacs'
        ],
        correctIndex: 1
      },
      {
        id: 6,
        text: '¿Qué hecho histórico presenció el padre Angarita como párroco de Aracataca?',
        options: [
          'El Bogotazo',
          'La Masacre de las Bananeras',
          'La masacre de El Carmen',
          'La Guerra de los Mil Días'
        ],
        correctIndex: 1
      },
      {
        id: 7,
        text: '¿En qué fecha ocurrió la primera invasión a tierras urbanas de Ocaña?',
        options: [
          '23 de febrero de 1963',
          '7 de agosto de 1929',
          '11 de marzo de 1981',
          '21 de marzo de 1920'
        ],
        correctIndex: 0
      },
      {
        id: 8,
        text: '¿Qué barrio nació de la invasión de los terrenos del norte en 1975?',
        options: ['El Tíber', 'Sebastopol', 'Camilo Torres', 'La Conejera'],
        correctIndex: 2
      },
      {
        id: 9,
        text: '¿Quién fue el primer alcalde de Ocaña elegido por voto popular, en 1988?',
        options: [
          'Argelino Durán Quintero',
          'Lucio Pabón Núñez',
          'Henrique Ruiz Machuca',
          'Jesús Claro Ovallos'
        ],
        correctIndex: 3
      },
      {
        id: 10,
        text: '¿Quién encontró la imagen robada de la Virgen de Torcoroma en el retén del puente Pumarejo?',
        options: [
          'El alcalde de Ocaña',
          'El obispo de la diócesis',
          'El policía ocañero Yurgen Trujillo Carrascal',
          'Un grupo de 80 peregrinos'
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
