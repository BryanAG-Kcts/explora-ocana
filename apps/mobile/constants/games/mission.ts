import type { GAMES_TREE } from './games'

export const MISSIONS: Record<string, GAMES_TREE> = {
  S1: {
    M1: [
      {
        type: 'concept',
        data: {
          title: 'Misión 1: El misterio del nombre racista',
          subtitle:
            '¿Por qué una región entera lleva el nombre de una enfermedad?',
          readTimeMinutes: '3',
          body: '## 🕵️‍♂️ Un error de diagnóstico histórico\n\n¡Imagínate llegar a un lugar nuevo y nombrar a todo el mundo por una enfermedad que **ni siquiera tienen**! Eso fue exactamente lo que hicieron los conquistadores españoles en el siglo XVI al explorar el río Catatumbo.\n\n### 🗺️ El inmenso territorio\nEn el año 1578, el gobierno español en Ocaña elaboró un informe detallando un territorio gigante que iba desde Ábrego hasta Ocaña, incluyendo Otare, Brotaré y Teorama. A toda esta zona la llamaron la **"Provincia de los Carates"**. Pero, ¿de dónde salió ese nombre?\n\n### 🩺 Médicos de pacotilla\nCuando los españoles vieron a los indígenas, notaron que tenían llamativas manchas en la piel: rojizas, blancuzcas y azules oscuras. Asustados y con cero conocimientos médicos reales, pensaron que era *sarna* (una enfermedad súper contagiosa y temida en Europa que causa picazón extrema).\n\n¡Pero estaban totalmente equivocados! Lo que realmente tenían los nativos era **Pinta** (o "carate"), una simple infección de clima tropical causada por una bacteria. Afectaba el color de la piel, pero **no era mortal ni peligrosa**.\n\n### 📜 Una mancha en la historia\nEn el español de esa época, la palabra "carate" se usaba para hablar de la gente con manchas. Así que, por más de 200 años, los mapas y documentos oficiales usaron el nombre "Carates" (que para ellos significaba "los sarnosos") basándose en un diagnóstico ridículo. ¡Un nombre ofensivo nacido de la ignorancia!',
          speech:
            'Un error de diagnóstico histórico. Imagínate llegar a un lugar nuevo y nombrar a todo el mundo por una enfermedad que ni siquiera tienen. Eso fue exactamente lo que hicieron los conquistadores españoles en el siglo dieciséis al explorar el río Catatumbo. En el año 1578, el gobierno español en Ocaña elaboró un informe detallando un territorio gigante que iba desde Ábrego hasta Ocaña, incluyendo Otare, Brotaré y Teorama. A toda esta zona la llamaron la Provincia de los Carates. Cuando los españoles vieron a los indígenas, notaron que tenían llamativas manchas en la piel, rojizas, blancuzcas y azules oscuras. Asustados, pensaron que era sarna, una enfermedad contagiosa muy temida en Europa. Pero estaban totalmente equivocados. Lo que realmente tenían los nativos era Pinta, también conocida como carate, una infección de clima tropical que afectaba el color de la piel, pero no era mortal. Por más de 200 años, los mapas oficiales usaron el nombre Carates, que para ellos significaba "los sarnosos", basándose en un diagnóstico equivocado. Un nombre ofensivo nacido de la ignorancia.',
          cap: 'Antepasados I'
        }
      },
      {
        type: 'crossword',
        data: {
          rows: 7,
          columns: 12,
          id: 'cros1',
          words: [
            {
              word: 'CARATES',
              row: 3,
              column: 1,
              direction: 'horizontal'
            },
            {
              word: 'OTARE',
              row: 1,
              column: 2,
              direction: 'vertical'
            },
            {
              word: 'PINTA',
              row: 0,
              column: 5,
              direction: 'vertical'
            },
            {
              word: 'ABREGO',
              row: 4,
              column: 5,
              direction: 'horizontal'
            }
          ],
          hints: [
            'Nombre erróneo y despectivo que los españoles le dieron a los indígenas de la zona.',
            'Lugar que hoy es zona rural de Ocaña y fue parte del territorio indígena.',
            'Verdadero nombre de la infección tropical que causaba las manchas en la piel.',
            'Pueblo actual que marcaba uno de los límites del territorio de esta provincia.'
          ]
        },
        requiresCompletion: true
      },
      {
        type: 'ar',
        data: {
          model: require('@/assets/indio_monte.glb'),
          speech:
            'Frente a ti puedes observar detalladamente a un habitante originario del Catatumbo. Presta mucha atención a su piel. ¿Ves esas manchas de tonos blancos, rojizos y azul oscuro? Así se veía realmente el famoso mal del pinto. Imagina la escena desde su perspectiva: tú estás tranquilo, viviendo en tu territorio, con unas manchas en la piel que no te duelen, no te pican y no te van a matar, porque son solo una reacción a una bacteria tropical. De repente, ves llegar a unos forasteros cubiertos con pesadas armaduras de metal, sudando bajo el sol, que entran en pánico absoluto y no quieren ni acercarse porque juran que tienes una plaga mortal. Para este indígena, su piel era simplemente su naturaleza; para los europeos, fue el mayor de sus miedos hecho realidad por pura ignorancia.'
        }
      }
    ],
    M2: [
      {
        type: 'concept',
        data: {
          title: 'Misión 2: Descubre tu barrio indígena',
          subtitle: 'El secreto que está enterrado bajo las calles de Ocaña',
          readTimeMinutes: '4',
          body: '## 🏙️ Un pueblo bajo el asfalto\n\n¿Sabías que mientras caminas por Ocaña, podrías estar pisando el mismo suelo donde existió una antigua aldea indígena? Ese pueblo secreto se llamaba **Argutacaca**, ¡y estaba ubicado justo en lo que hoy es el centro y varios barrios de la ciudad!\n\n### 🧩 Un nombre inventado\n"Argutacaca" en realidad no era su verdadero nombre. Los conquistadores españoles tenían la mala costumbre de mezclar palabras nativas que no entendían bien. En este caso, unieron dos cosas distintas:\n1. **Arcuta**: El nombre de una hermosa quebrada de agua cristalina (que hoy conocemos como el Río Chiquito).\n2. **Socotegaga**: El verdadero nombre con el que esta comunidad se identificaba a sí misma.\n\n¡Al mezclar Arcuta y Socotegaga, los españoles se inventaron el nombre "Argutacaca"!\n\n### 📍 Tu barrio es territorio indígena\nToda la vida de los Socotegaga giraba en torno a la quebrada Arcuta. Hoy en día, esa misma corriente de agua recorre la ciudad. Si vives o pasas por barrios como **La Carbonera, Cuesta Blanca, El Palomar, Hacaritama, Betania, El Martinete o Caracolí**, ¡estás caminando sobre el antiguo territorio de esta tribu!\n\n### 👻 El misterio de su desaparición\nEntre los años 1578 y 1700, este pueblo desapareció sin dejar rastro claro. Los historiadores tienen tres teorías:\n- **Desplazamiento forzado:** Los españoles los echaron para robarles sus tierras.\n- **Mestizaje:** Se casaron con españoles, adoptaron su idioma y perdieron su identidad indígena.\n- **Migración:** Huyeron hacia el Catatumbo o la Sierra Nevada para ser libres.\n\n### 🌊 El río de los tres nombres\nPara complicar más la historia, el río donde desemboca el Río Chiquito ha tenido tres nombres distintos según la época:\n1. **Ahirar (o Hcari)**: En la época indígena.\n2. **Río Grande**: Como lo llamaron los españoles por más de 200 años.\n3. **Río Tejo**: Su nombre desde la independencia hasta hoy.',
          speech:
            'Un pueblo bajo el asfalto. ¿Sabías que mientras caminas por Ocaña, podrías estar pisando el mismo suelo donde existió una antigua aldea indígena? Ese pueblo secreto se llamaba Argutacaca. Pero en realidad ese no era su verdadero nombre. Los españoles mezclaron dos palabras nativas: Arcuta, que era una quebrada de agua cristalina, y Socotegaga, que era el verdadero nombre de la comunidad. Al unirlas, inventaron el nombre Argutacaca. Toda la aldea estaba construida a orillas de la quebrada Arcuta, que hoy conocemos como el Río Chiquito. Esto significa que si vives en barrios como La Carbonera, Cuesta Blanca, El Palomar o Hacaritama, estás sobre el territorio de esta tribu. Misteriosamente, entre 1578 y 1700 el pueblo desapareció. Se cree que los españoles los expulsaron, o que se mezclaron con ellos perdiendo su cultura, o que huyeron hacia el Catatumbo. Además, el río que cruzaba cerca de ellos cambió de nombre tres veces: los indígenas lo llamaban Ahirar, luego los españoles le pusieron Río Grande, y hoy todos lo conocemos como Río Tejo.',
          cap: 'Antepasados II'
        }
      },
      {
        type: 'soup',
        data: {
          columns: 10,
          rows: 10,
          id: 'soup1',
          soup: [
            'SOCOTEGAGA',
            'ARCUTA',
            'AHIRAR',
            'CHIQUITO',
            'TEJO',
            'PALOMAR'
          ]
        },
        requiresCompletion: true
      },
      {
        type: 'ar',
        data: {
          model: require('@/assets/esqueleto.glb'),
          speech:
            'Frente a ti tienes el modelo de la quebrada Arcuta. Imagina por un momento que estás de pie hace quinientos años a la orilla de estas aguas cristalinas. Puedes ver a los indígenas Socotegaga bebiendo, cultivando y pescando; el río les da la vida. Ahora, cierra los ojos y escucha: el sonido de la naturaleza es reemplazado por el ruido de los carros y el cemento. La quebrada Arcuta se acaba de transformar en el Río Chiquito, y sobre las chozas indígenas ahora se levantan las casas de los barrios Cuesta Blanca, El Palomar y Hacaritama. El agua que sigue corriendo debajo de esos puentes de concreto es el único testigo silencioso de que, justo donde hoy caminan los ocañeros, antes latía el corazón de toda una civilización.'
        }
      }
    ],
    M3: [
      {
        type: 'concept',
        data: {
          title: 'Misión 3: Vive un día como Argutacaca',
          subtitle: '¿Cómo era la vida antes de los españoles?',
          readTimeMinutes: '5',
          body: '## 🌽 Una dieta mejor que la nuestra\n\nLos Argutacaca comían súper bien. Su alimentación se basaba en cuatro pilares: **maíz, yuca, ahuyama y fríjol**. Pero no sembraban cuando querían, ¡eran expertos astrónomos! Sabían que en luna creciente debían sembrar lo que crece hacia arriba (como el maíz) y en luna menguante lo que crece hacia abajo (como la yuca). Además, disfrutaban frutas raras hoy en día, como el caimito morado y la dulce chiticoma.\n\n### 🏹 Cazadores expertos\nEran unos duros para cazar. Su presa favorita era el venado (difícil por lo rápido), pero también cazaban saínos, pumas, y aves como paujiles y guacamayas (cuyas plumas usaban para decorar). Sus arcos los hacían con **madera de qricua**, un árbol local que daba una madera liviana y tan flexible que podían lanzar flechas a más de 50 metros.\n\n### 🥁 Tecnología y arte\nFabricaban tambores con piel de venado que no solo servían para música, sino como "teléfonos" para comunicarse a larga distancia durante la caza. También eran artistas del barro (alfarería), creando ollas y vasijas, y tejedores pacientes, usando algodón y fique para hacer mantas y hamacas en procesos que tardaban semanas.\n\n### 👕 La moda indígena\nCon el calor de Ocaña, la ropa era fresca. Los hombres usaban un simple **taparrabos de algodón**, que les daba total libertad de movimiento. Las mujeres llevaban **"el sayo"**, una especie de túnica rectangular hasta la rodilla, abierta a los lados y amarrada con un cordón en la cintura.\n\n### 🤝 Negocios y comercio\nNo estaban aislados. Hacían negocios con otros pueblos ofreciendo maíz, arcos y hermosas plumas. ¿Qué compraban a cambio? Principalmente **sal** (que no había en Ocaña), mejores herramientas de piedra y productos de otros climas. ¡Tenían toda una red de comercio viva y dinámica!',
          speech:
            'Vive un día como Argutacaca. ¿Cómo era la vida antes de los españoles? Los Argutacaca comían súper bien. Su alimentación se basaba en maíz, yuca, ahuyama y fríjol. Pero no sembraban al azar, eran expertos astrónomos. Sabían que en luna creciente se siembra lo que crece hacia arriba, como el maíz, y en luna menguante lo que crece hacia abajo, como la yuca. Eran unos duros para cazar usando arcos hechos con madera de qricua, muy flexible, para atrapar venados, pumas y guacamayas. Fabricaban tambores con piel de venado que funcionaban como teléfonos para comunicarse a larga distancia. En cuanto a la ropa, era muy fresca por el clima. Los hombres usaban un sencillo taparrabos de algodón y las mujeres llevaban "el sayo", una túnica hasta la rodilla. Además, eran grandes comerciantes, vendían maíz, cerámicas y plumas para comprar principalmente sal, ya que en Ocaña no se producía. Tenían toda una red económica dinámica mucho antes de la conquista.',
          cap: 'Antepasados III'
        }
      },
      {
        type: 'crossword',
        data: {
          rows: 9,
          columns: 12,
          id: 'cros2',
          words: [
            {
              word: 'QRICUA',
              row: 1,
              column: 1,
              direction: 'horizontal'
            },
            {
              word: 'SAYO',
              row: 0,
              column: 4,
              direction: 'vertical'
            },
            {
              word: 'CAIMITO',
              row: 5,
              column: 3,
              direction: 'horizontal'
            },
            {
              word: 'VENADO',
              row: 2,
              column: 8,
              direction: 'vertical'
            }
          ],
          hints: [
            'Madera muy flexible de la región que usaban para hacer arcos.',
            'Túnica rectangular que usaban las mujeres, amarrada en la cintura.',
            'Fruta morada por fuera y blanca por dentro que los indígenas consumían.',
            'Animal difícil de cazar por su velocidad, muy valorado por su carne.'
          ]
        },
        requiresCompletion: true
      },
      {
        type: 'ar',
        data: {
          model: require('@/assets/indio_flecha.glb'),
          speech:
            'Mira bien a este cazador Argutacaca. En sus manos sostiene una obra maestra de ingeniería prehispánica: un arco hecho de madera de qricua. Esta madera es tan liviana que no lo cansa, pero tan resistente y flexible que le permite disparar esa flecha a más de media cuadra de distancia. Observa las plumas de colores en la parte de atrás de la flecha. No están ahí solo para verse bonitas; sirven como los alerones de un avión para que vuele recto y, además, los colores de guacamaya le dicen a toda la tribu que esta flecha es suya. Para él, cazar no es un deporte, es supervivencia. Cuando dispara al venado o al puma, agradece a la naturaleza, y luego utiliza un tambor de piel para avisar a su gente a lo lejos que esta noche, gracias a su puntería y a la madera de qricua, habrá buena comida en el pueblo.'
        }
      }
    ],
    M4: [
      {
        type: 'concept',
        data: {
          title: 'Misión 4: Descifrando la sociedad Argutacaca',
          subtitle:
            'Viviendas ecológicas, cero políticos y una lengua de espinas',
          readTimeMinutes: '4',
          body: '## 🏕️ Los reyes del "camping" ecológico\n\nCuando los españoles vieron las casas de los Argutacaca, pensaron que eran pobres porque vivían en "ramadas" (chozas de palmas y ramas). ¡Estaban muy equivocados! Era una elección genial y ecológica. Eran semi-nómadas: vivían en un lugar un par de años y, cuando la tierra se cansaba, empacaban y se mudaban para dejar que la naturaleza se recuperara sola. ¡Cero basura y pura sostenibilidad!\n\n## 🚫 Una sociedad sin jefes\nImagínate un pueblo sin alcaldes, reyes ni presidentes. Para ellos, **"Cada quien era señor de su casa"**. Las familias eran autónomas y nadie podía obligar a otro a hacer algo que no quería. Aunque no tenían guerras con otras tribus, a veces sí tenían sus "dramas" internos: peleas familiares antiguas que empeoraban cuando hacían fiestas y tomaban demasiada *chicha*.\n\n## 🗣️ Lenguas de la naturaleza\nHablaban dos idiomas muy distintos: el **carate** y el **palenque**. ¿Sabías que el palenque se llamaba así por los inmensos troncos puntiagudos (palenques) que usaban para defender sus casas? Como los idiomas eran tan diferentes, tenían "intérpretes" expertos que vivían en las fronteras para ayudar a traducir.\n\n## 🤝 Vecinos buena onda\nNo estaban solos en la región. Mantenían contacto y hacían negocios pacíficos con la cultura **Mosquito** (indígenas del bajo Magdalena), quienes tenían asentamientos en lo que hoy conocemos como Pueblo Nuevo y el santuario del Agua de la Virgen. ¡Una verdadera red de amigos comerciales!',
          speech:
            'Los reyes del camping ecológico. Cuando los españoles vieron las casas de los Argutacaca, pensaron que eran pobres porque vivían en chozas temporales llamadas ramadas. Pero era una elección ecológica. Al ser semi-nómadas, vivían en un lugar un par de años y luego se mudaban para dejar que la tierra se recuperara. ¡Pura sostenibilidad! Además, era una sociedad sin jefes ni alcaldes. Su regla era: "Cada quien es señor de su casa". Nadie obligaba a nadie, aunque sí tenían dramas y peleas internas, casi siempre por tomar demasiada chicha en las fiestas. En la región hablaban dos idiomas distintos: el carate y el palenque, este último llamado así por los troncos puntiagudos con los que defendían sus casas. Como eran lenguas diferentes, usaban intérpretes para poder comunicarse. También eran muy sociables y hacían negocios pacíficos con los Mosquito, otra cultura indígena que vivía cerca, en lo que hoy conocemos como Pueblo Nuevo.',
          cap: 'Antepasados IV'
        }
      },
      {
        type: 'soup',
        data: {
          columns: 10,
          rows: 10,
          id: 'soup2',
          soup: ['RAMADA', 'CHICHA', 'PALENQUE', 'CARATE', 'MOSQUITO']
        },
        requiresCompletion: true
      },
      {
        type: 'ar',
        data: {
          model: require('@/assets/esqueleto.glb'),
          speech:
            'Frente a ti tienes el esqueleto de un ancestro Argutacaca. Para los europeos, desenterrar huesos era el mismísimo terror, ¡una escena de película de miedo! Pero para los indígenas, sacar de la tierra a un abuelo o bisabuelo después de muchos años era un acto de amor inmenso. Ellos creían que en estos huesos todavía habitaba el espíritu de su ser querido. Al limpiarlos y bailar con ellos al ritmo de los tambores, no estaban haciendo brujería, estaban haciendo una fiesta para pedirles consejo, sabiduría y protección a sus antepasados. Después de esta gran celebración familiar, los volvían a enterrar con hermosas ofrendas. Para ellos, la muerte no era el final, sino un cambio, y los esqueletos eran el puente mágico para seguir abrazando a los que ya habían partido.'
        }
      }
    ]
  },
  S2: {
    M5: [
      {
        type: 'concept',
        data: {
          title: 'Misión 5: Arqueología',
          subtitle: 'Urnas misteriosas y piedras con mensajes ocultos',
          readTimeMinutes: '4',
          body: '## 🏺 El misterio de los muertos en vasijas\n\nImagínate estar excavando unas pequeñas colinas de tierra en 1932 y de repente toparte con unos "huevos" gigantes de cerámica. ¡Eso les pasó a los sacerdotes Debilly y Escobar en Ocaña! Lo que encontraron fueron **urnas funerarias**, vasijas de barro cocido que los indígenas usaban para guardar los restos de sus seres queridos.\n\n### 🔥 Un ritual de paciencia extrema\nLos Argutacaca no enterraban a sus muertos y ya. Tenían un ritual de **seis pasos** (enterramiento secundario): \n1. Enterraban el cuerpo.\n2. Esperaban meses o años.\n3. Desenterraban los huesos limpios.\n4. Los quemaban hasta hacerlos cenizas (calcinación).\n5. Metían esos restos en la urna.\n6. Enterraban la urna en una colina artificial.\n¿Por qué los quemaban? Los expertos creen que era para purificar el alma, ahorrar espacio, por higiene o para poder trastearlos más fácil si la tribu se mudaba.\n\n### 🗽 Nuestros tesoros en Nueva York\nEntre 1934 y 1938 se encontraron más de estas urnas en la región de Los Ángeles (Ocaña). Lo triste es que muchas de ellas fueron donadas al **Museo Americano de Historia Natural en Nueva York**. ¡Una parte de nuestra historia está fuera del país!\n\n### 🪨 La Piedra Gorda: El "Google Maps" indígena\nEn el barrio El Hatillo, los Argutacaca nos dejaron un mensaje gigante: un **petroglifo** de más de 3 metros de ancho conocido como la Piedra Gorda. Es una roca tallada con figuras geométricas. ¿Para qué servía? Hay tres teorías:\n- Un letrero de frontera (marcador territorial).\n- Un mapa de ríos y montañas.\n- Una señal de rutas comerciales hacia lugares como González.',
          speech:
            'El misterio de los muertos en vasijas. Imagínate estar excavando en unas pequeñas colinas en el año mil novecientos treinta y dos y encontrar unos huevos gigantes de cerámica. Eso les pasó a dos sacerdotes en Ocaña. Lo que descubrieron fueron urnas funerarias, unas vasijas de barro llenas de huesos humanos quemados. Los Argutacaca tenían un ritual de seis pasos muy complejo para sus muertos: primero los enterraban, esperaban varios meses, los desenterraban, quemaban los huesos hasta hacerlos polvo, los metían en estas urnas y finalmente las enterraban en montañas artificiales. Algunos creen que los quemaban por religión o para poder llevarlos más fácil si el pueblo se mudaba. Tristemente, algunas de estas urnas encontradas años después fueron enviadas a un museo en Nueva York. Además de las vasijas, en el barrio El Hatillo nos dejaron la Piedra Gorda, una roca gigante tallada con figuras que los expertos creen que funcionaba como un mapa de navegación, una señal de frontera o una guía para comerciantes.',
          cap: 'Antepasados V'
        }
      },
      {
        type: 'crossword',
        data: {
          rows: 8,
          columns: 12,
          id: 'cros3',
          words: [
            {
              word: 'URNA',
              row: 1,
              column: 1,
              direction: 'horizontal'
            },
            {
              word: 'HATILLO',
              row: 0,
              column: 8,
              direction: 'vertical'
            },
            {
              word: 'CENIZAS',
              row: 4,
              column: 1,
              direction: 'horizontal'
            },
            {
              word: 'MAPA',
              row: 3,
              column: 4,
              direction: 'vertical'
            }
          ],
          hints: [
            'Vasija de cerámica usada para guardar restos humanos.',
            'Barrio de Ocaña donde se encuentra el inmenso petroglifo.',
            'En lo que se convertían los huesos al ser calcinados o quemados.',
            'Una de las teorías dice que la Piedra Gorda funcionaba como un...'
          ]
        },
        requiresCompletion: true
      },
      {
        type: 'ar',
        data: {
          model: require('@/assets/esqueleto.glb'),
          speech:
            'Frente a ti tienes una auténtica urna funeraria Argutacaca. Observa su forma ovalada, parecida a un huevo gigante, y fíjate en los detalles geométricos grabados en la arcilla. Aunque parezca un simple jarrón, este objeto era profundamente sagrado. Aquí adentro, los indígenas guardaban las cenizas y los pequeños fragmentos de huesos de sus seres queridos después de haberlos quemado. Imagina el trabajo y el amor que tomaba hacer esto: modelar el barro con sus propias manos, cocinarlo a altas temperaturas y realizar un ritual de seis pasos que podía durar años solo para despedir a un familiar y darle descanso. Muchas de estas piezas, que son la memoria viva de Ocaña, terminaron en museos de Nueva York. Hoy, al verla aquí, estás recuperando y honrando un pedazo de nuestra historia olvidada.'
        }
      }
    ],
    M6: [
      {
        type: 'concept',
        data: {
          title: 'Misión 6: La fundación española',
          subtitle: '¿Una hazaña heroica o una invasión planificada?',
          readTimeMinutes: '4',
          body: '## ⚔️ El capitán temerario y la ruta secreta\n\nEn 1570, el capitán **Francisco Fernández de Contreras**, un soldado español famoso por sus rudos combates, llegó al valle de los Hacaritamas con 32 hombres armados. ¿Qué buscaban? ¡Un atajo! Querían transportar mercancías desde Pamplona hasta la costa Caribe de forma rápida y barata, sin cruzarse con indígenas rebeldes que bloqueaban otros caminos.\n\n### 🎂 El año de los tres cumpleaños\nLa ciudad de Ocaña no se fundó en un solo día; de hecho, ¡tiene tres fechas clave en 1570!\n- **26 de julio:** Llegan los españoles y la llaman "Santa Ana".\n- **7 de noviembre:** El gobierno español oficializa el asentamiento.\n- **14 de diciembre:** ¡La gran fiesta! Se hace el acto oficial de fundación con misa, trazado de calles y plaza mayor.\n*(Dato curioso: Le pusieron "Ocaña" para hacerle la pelota al gobernador, que había nacido en una ciudad de España llamada exactamente igual).* \n\n### 🏙️ Del "camping" a la cuadrícula\nAntes, los indígenas Argutacaca vivían en ramadas dispersas donde les provocaba, pura libertad. Pero los españoles trajeron el **damero**: un diseño urbano de cuadrícula perfecta, como un tablero de ajedrez, ordenado por el mismísimo rey de España. En el centro estaba la Plaza Mayor, rodeada por las casas de los ricos (los encomenderos), y de allí nacían la **Calle Real** (comercial) y la **Calle de la Amargura** (para Semana Santa).\n\n### 🤔 ¿Fundación o Invasión?\nLos libros de historia españoles usaban palabras bonitas: decían que hicieron una "reducción" o una "pacificación". Pero si lo piensas bien, "pacificar" significaba usar la violencia para apagar la resistencia nativa, y "fundar" fue ocupar a la fuerza un territorio que ya tenía dueños. ¡La historia siempre tiene dos caras!',
          speech:
            'El capitán temerario y la ruta secreta. En 1570, el capitán español Francisco Fernández de Contreras llegó al valle con 32 hombres armados. Buscaban una nueva ruta comercial rápida y barata desde Pamplona hasta la costa Caribe. Ocaña no se fundó en un solo día, tuvo tres fechas importantes en 1570: el 26 de julio llegaron y la llamaron Santa Ana; el 7 de noviembre se hizo oficial; y el 14 de diciembre se realizó el gran acto de fundación trazando la plaza y las calles. El nombre Ocaña fue un homenaje al gobernador, que había nacido en una ciudad de España con ese mismo nombre. Los españoles cambiaron por completo el paisaje: eliminaron las chozas dispersas de los indígenas y construyeron la ciudad en forma de damero, es decir, una cuadrícula perfecta como un tablero de ajedrez, con una Plaza Mayor en el centro y calles importantes como la Calle Real y la Calle de la Amargura. Aunque los documentos españoles llaman a esto "fundación" o "pacificación", en la práctica fue la invasión violenta de un territorio que ya estaba habitado por los Argutacaca.',
          cap: 'Antepasados VI'
        }
      },
      {
        type: 'soup',
        data: {
          columns: 10,
          rows: 10,
          id: 'soup3',
          soup: ['DAMERO', 'PAMPLONA', 'AMARGURA', 'INVASION', 'CAPITAN']
        },
        requiresCompletion: true
      },
      {
        type: 'ar',
        data: {
          model: require('@/assets/esqueleto.glb'),
          speech:
            'Frente a ti tienes el modelo de un capitán español del siglo dieciséis, muy similar a Francisco Fernández de Contreras. Observa su pesada armadura, su espada forjada en hierro y su postura imponente. Para él, llegar a este valle no era una simple excursión; era una misión militar y comercial aprobada por la corona. Imagina cómo veía el mundo: donde los indígenas veían un río sagrado y selva libre, él veía una ruta estratégica para llevar mercancías desde Pamplona hasta el mar. Donde había chozas dispersas y ecológicas, su mente cuadriculada ya estaba dibujando un "damero", con calles rectas, una plaza central y una iglesia. Este hombre traía consigo todo el peso de un imperio, con leyes, impuestos y una nueva religión, listo para imponer el orden europeo sobre un mundo que él consideraba salvaje. Su espada fundó una nueva ciudad, pero al mismo tiempo cortó de raíz la historia de quienes ya vivían ahí.'
        }
      }
    ],
    M7: [
      {
        type: 'concept',
        data: {
          title: 'Misión 7: La ciudad colonial',
          subtitle: 'Negocios, terremotos y el jinete fantasma',
          readTimeMinutes: '5',
          body: '## 💰 La primera "Startup" de Ocaña\n\nApenas siete años después de la fundación (1577), nació la primera gran empresa de la ciudad. Once hombres ricos y poderosos, conocidos como *encomenderos*, armaron un negocio de transporte de mercancías usando **acémilas** (burros y mulas) para llevar cargas hasta el puerto del Río Magdalena. ¡Los mismos españoles que controlaban la tierra y a los indígenas, ahora controlaban el comercio!\n\n### ⛪ Iglesias, temblores y control mental\nLa iglesia principal que ves hoy en Ocaña es en realidad la ¡versión 3.0! La primera (1576) era casi una choza con techo de paja. La segunda (1600) ya era de piedra con torre, pero fue destruida por el gran **terremoto de los Andes en 1875**. \n\nAdemás de iglesias, fundaron conventos. Aunque decían que eran para enseñar a leer y escribir, tenían un lado oscuro: buscaban convencer a los indígenas de que obedecer a los españoles y trabajar gratis en sus haciendas era "la voluntad de Dios". ¡Una estrategia de control total!\n\n### 📉 Una ironía de la historia\nPor culpa de la explotación y las enfermedades, los indígenas casi desaparecen. De 2.000 nativos que había al principio, en 1627 solo quedaban unos 600. Como ya casi no había a quién "evangelizar", los conventos estuvieron a punto de quebrar en 1776. ¿Y adivina quiénes los salvaron? ¡Los mismos ricos encomenderos que causaron la tragedia! Donaron dinero para evitar el cierre, a cambio de que los dejaran enterrar como VIPs dentro de la iglesia.\n\n### 👻 El terror de la noche: Antón García\nLa historia cuenta que hubo cuatro hombres reales llamados Antón García de Bonilla, pero la leyenda los convirtió en el fantasma más famoso de Ocaña. Dicen que un día su familia enfermó de una peste mortal y él le prometió grandes ofrendas a Santa Rita si los curaba. El milagro ocurrió, pero a Antón se le olvidó pagar la promesa. Como castigo, fue condenado a vagar por las noches para siempre. Si trasnochas en Ocaña, dicen que puedes verlo cabalgando en una mula negra, asustando a los serenateros, luciendo un rostro de calavera y... ¡fumando un cigarrillo!',
          speech:
            'La ciudad colonial. Negocios, terremotos y el jinete fantasma. Apenas siete años después de su fundación, en mil quinientos setenta y siete, Ocaña tuvo su primera empresa. Once hombres ricos crearon un negocio de transporte usando mulas y burros para llevar mercancías al Río Magdalena. Además del comercio, la religión fue clave. La iglesia principal tuvo tres versiones: la primera era de paja, la segunda de piedra, pero se cayó por un terrible terremoto en mil ochocientos setenta y cinco, y la tercera es la actual. También construyeron conventos, que aunque enseñaban a leer, en el fondo buscaban convencer a los indígenas de que trabajar para los españoles era la voluntad de Dios. Por culpa de los maltratos, los indígenas casi desaparecen, pasando de dos mil a solo seiscientos en el año mil seiscientos veintisiete. Como casi no quedaban nativos, los conventos iban a quebrar, y los mismos españoles ricos que explotaron a los indígenas donaron plata para salvarlos, comprando así entierros lujosos. Finalmente, de esta época nace la leyenda de Antón García, un rico que no le cumplió una promesa a Santa Rita y fue condenado a vagar como un fantasma con cara de calavera montado en una mula negra, asustando por las noches.',
          cap: 'Antepasados VII'
        }
      },
      {
        type: 'crossword',
        data: {
          rows: 9,
          columns: 12,
          id: 'cros4',
          words: [
            {
              word: 'ACEMILAS',
              row: 1,
              column: 1,
              direction: 'horizontal'
            },
            {
              word: 'SISMO',
              row: 0,
              column: 7,
              direction: 'vertical'
            },
            {
              word: 'ANTON',
              row: 3,
              column: 4,
              direction: 'horizontal'
            },
            {
              word: 'MULA',
              row: 5,
              column: 5,
              direction: 'vertical'
            }
          ],
          hints: [
            'Animales (burros y mulas) usados por la primera empresa de Ocaña para el transporte.',
            'Fenómeno natural (terremoto) que destruyó la iglesia en 1875.',
            'Nombre del fantasma más famoso de Ocaña (___ García de Bonilla).',
            'Animal negro sobre el cual cabalga el fantasma por las noches.'
          ]
        },
        requiresCompletion: true
      },
      {
        type: 'ar',
        data: {
          model: require('@/assets/esqueleto.glb'),
          speech:
            'Frente a ti puedes ver al fantasma más famoso y temido de Ocaña: el legendario Antón García de Bonilla. Como no enviaste la palabra clave del modelo, asumí que querrías ver al protagonista de la leyenda que acabamos de leer. Observa su imponente mula negra sobre la que cabalga eternamente. Imagina estar caminando solo por la Calle de la Amargura a altas horas de la noche, cuando de repente escuchas el eco de los cascos de un animal rebotando contra las viejas piedras. Te giras lentamente y ves esta oscura figura acercándose. En lugar de un rostro humano, te topas con una calavera que lleva un cigarrillo encendido en la boca. Esta aparición cuenta la historia de un hombre rico y poderoso de la colonia que creyó que podía incumplirle sus promesas al cielo. Hoy, su leyenda sigue viva en el museo del siglo diecisiete que lleva su nombre y en las pesadillas de todos los trasnochadores ocañeros.'
        }
      }
    ]
  },
  S3: {
    M8: [
      {
        type: 'concept',
        data: {
          title: 'Misión 8: Leonelda — Bruja, curandera o heroína',
          subtitle:
            'La verdadera historia de la mujer más temida y valiente de la región.',
          readTimeMinutes: '5',
          body: '## 🌿 Curanderas bajo la luz de la luna\n\nA finales del siglo XVII, en las montañas de los indígenas Búrburas, vivían cinco mujeres increíbles. Estaban lideradas por la maestra María Antonia Mandona y su aprendiz de 26 años, la mestiza **Leonelda Hernández**. Salían de noche a recolectar plantas, raíces y flores. ¿Era brujería? ¡No, era ciencia! De noche las plantas concentran mejor sus aceites esenciales medicinales.\n\n### 🦇 El chisme que las condenó\nAl principio, la gente las amaba. Con sus brebajes curaban enfermos, calmaban dolores y daban valor a los tímidos. Pero la Inquisición española (la policía religiosa de la época) se sintió amenazada. Unas mujeres libres, sabias y con poder sobre la comunidad eran un peligro para ellos. Así que cambiaron la historia y empezaron a llamarlas "brujas malvadas" que tenían pactos con el diablo.\n\n### ⚖️ Terror en la celda\nEn septiembre de 1663, los españoles las capturaron y torturaron. En su choza encontraron hierbas y huesos de sapo, y lo usaron como "prueba" de hechicería. El alcalde, muerto de miedo, no quiso esperar a los jueces superiores y mandó a ahorcar a la maestra Mandona en su propia celda. Las otras cuatro fueron liberadas, pero el rencor ya estaba sembrado.\n\n### 🪶 El grito de la resistencia\nDiez años después, Leonelda fue capturada y acusada de terribles crímenes. Mientras la llevaban presa hacia Ocaña, los guardias decidieron ahorcarla en el **Alto del Hatillo** para evitar que un obispo la perdonara. \n\nCon la soga al cuello, Leonelda vio movimiento en los matorrales y gritó con todas sus fuerzas: *"¡Aquí de los búrburas!"*. En segundos, decenas de guerreros indígenas saltaron de la maleza, derrotaron a los españoles y la liberaron. Leonelda bajó la montaña como una princesa guerrera, y la leyenda dice que jamás pudieron atraparla, porque cuando la perseguían... ¡se convertía en ave!',
          speech:
            'Curanderas bajo la luz de la luna. A finales del siglo diecisiete, en las montañas de la región, vivían cinco mujeres lideradas por María Antonia Mandona y su aprendiz Leonelda Hernández. Salían de noche a recolectar plantas porque a esa hora concentraban mejores propiedades medicinales. Al principio, la gente las amaba porque curaban enfermos. Pero la Inquisición española se sintió amenazada por el poder e independencia de estas mujeres, así que las acusaron de ser brujas malvadas. En mil seiscientos sesenta y tres las capturaron, y el alcalde, lleno de miedo, ahorcó ilegalmente a la maestra Mandona en su celda. Las demás fueron liberadas. Diez años después, Leonelda fue apresada nuevamente. Los guardias decidieron ahorcarla en el Alto del Hatillo antes de llegar a la ciudad para evitar que un obispo la perdonara. Con la soga al cuello, Leonelda dio un grito de guerra: "¡Aquí de los búrburas!". Inmediatamente, guerreros indígenas salieron de la maleza, vencieron a los españoles y la rescataron. Leonelda escapó como una heroína, y la leyenda cuenta que nunca más fue capturada porque tenía el poder de transformarse en ave.',
          cap: 'Antepasados VIII'
        }
      },
      {
        type: 'soup',
        data: {
          columns: 10,
          rows: 10,
          id: 'soup4',
          soup: [
            'LEONELDA',
            'BURBURAS',
            'MANDONA',
            'INQUISICION',
            'BRUJA',
            'HORCA'
          ]
        },
        requiresCompletion: true
      },
      {
        type: 'ar',
        data: {
          model: require('@/assets/esqueleto.glb'),
          speech:
            'Frente a ti se levanta la figura de Leonelda Hernández, no como una bruja malvada, sino como un símbolo de resistencia. Obsérvala de pie, altiva, con la soga de los españoles colgando inútilmente de su cuello. Aunque la historia oficial la catalogó como hechicera y asesina, la memoria de su pueblo la recuerda como una curandera sabia que no se dejó doblegar. Imagina ese momento de tensión extrema en el Alto del Hatillo, cuando la muerte parecía segura, y de sus pulmones salió el grito de libertad que convocó a los guerreros Búrburas. Esa misma fuerza es la que se dice que la convertía en un ave libre cruzando los cielos del Catatumbo, inalcanzable para siempre.'
        }
      }
    ],
    M9: [
      {
        type: 'concept',
        data: {
          title: 'Misión 9: La Virgen de Torcoroma',
          subtitle:
            'Un árbol mágico, un robo de película y el orgullo de Ocaña',
          readTimeMinutes: '4',
          body: '## 🌳 El árbol fuera de lo normal\n\nEn 1711, la familia Melo Rodríguez vivía de cultivar caña y producir miel. El **15 de agosto**, los hermanos Felipe y José salieron a la montaña de Torcoroma buscando madera para hacer un "dornajo" (un recipiente para los dulces de miel). De repente, vieron un árbol rarísimo: ¡estaba lleno de hermosas y olorosas flores rojas aunque no era época de florecer! Lo cortaron, pero se cayó por un barranco, así que tuvieron que volver al día siguiente con su papá.\n\n### ✨ El milagro del hachazo\nEl **16 de agosto de 1711**, Cristóbal (el papá) y sus hijos lograron sacar el árbol. Pero al darle los primeros hachazos para limpiarlo, ¡boom! Una luz brilló desde la madera. Adentro no había savia, sino la imagen perfectamente tallada en relieve de la Virgen María. ¡Todos cayeron de rodillas!\n\n### 🕵️‍♂️ Un robo de película\nCon los años, el lugar se volvió un Santuario Nacional. Pero en **1981**, Ocaña vivió el peor susto de su historia. Un ladrón argentino llamado Carlos Alberto Delvechio se robó la sagrada imagen y otros objetos de oro. La ciudad entera lloró, ¡pero la alegría volvió rápido! En solo dos días, la policía recuperó a la Virgen en Barranquilla.\n\n### 🙏 Los milagros colgados\nSi vas hoy al Santuario, verás cientos de **exvotos**. Son pequeñas placas, figuras u objetos que la gente deja colgados en las paredes para decir "¡Gracias!" por un milagro: una enfermedad curada, un accidente que no pasó a mayores o un problema resuelto. ¡Son el Instagram de los milagros de la época!',
          speech:
            'Un árbol mágico, un robo de película y el orgullo de Ocaña. En el año mil setecientos once, los hermanos Felipe y José Melo salieron a la montaña de Torcoroma a buscar madera para un recipiente de miel. Encontraron un árbol extraño que tenía flores rojas y olorosas, aunque no era época de florecer. Al día siguiente, el dieciséis de agosto, volvieron con su papá Cristóbal. Cuando comenzaron a darle hachazos al tronco, salió una luz brillante y descubrieron la imagen de la Virgen tallada en la misma madera. Con los años, se construyó un Santuario que hasta los Papas reconocieron. Pero en mil novecientos ochenta y uno, un ladrón argentino se robó la imagen original, causando una tristeza inmensa en toda Ocaña. Afortunadamente, la recuperaron dos días después en Barranquilla. Hoy en día, si visitas el Santuario, está lleno de "exvotos", que son objetos y placas que las personas dejan colgados en las paredes para agradecerle a la Virgen por los milagros que les ha concedido.',
          cap: 'Antepasados IX'
        }
      },
      {
        type: 'soup',
        data: {
          columns: 10,
          rows: 10,
          id: 'soup5',
          soup: ['TORCOROMA', 'DORNAJO', 'MELO', 'EXVOTO', 'MADERA', 'MILAGRO']
        },
        requiresCompletion: true
      },
      {
        type: 'ar',
        data: {
          model: require('@/assets/esqueleto.glb'),
          speech:
            'Frente a ti tienes la reliquia más preciada y cuidada de toda Ocaña: el fragmento de madera original donde apareció la Virgen de Torcoroma. Nota cómo no se trata de una pintura ni de una escultura hecha a mano por un artista. Es un relieve natural incrustado en el mismo corazón de la madera. Observa a la Virgen con las manos juntas sobre el pecho y la mirada hacia el cielo, apoyada sobre una media luna. Imagina la impresión de Cristóbal Melo y sus hijos al ver que de un simple hachazo para hacer una canoa de miel, se asomaba esta figura perfecta. Este trozo de madera ha sobrevivido a siglos de historia, a los elementos e incluso a un robo internacional en mil novecientos ochenta y uno. Al observarlo, estás viendo el símbolo que une la fe, la cultura y la esperanza de todos los ocañeros.'
        }
      }
    ],
    M10: [
      {
        type: 'concept',
        data: {
          title: 'Misión 10: Ocaña y la independencia',
          subtitle: '¿Héroe o testigo?',
          readTimeMinutes: '4',
          body: '## 🐌 Noticias a paso de tortuga\n\nImagínate vivir en una época sin WhatsApp, ni redes sociales, ni teléfonos. Cuando el **10 de julio de 1810** estalló el grito de independencia en Santafé, en Ocaña ¡nadie se enteró ese día! Las noticias tardaban semanas en llegar a través de viajeros, soldados o el correo a caballo. \n\n### 🔥 El joven que encendió la chispa\nEl "influencer" de la independencia en Ocaña fue un joven estudiante llamado **Antonio Quintero Copete**. Él estaba estudiando en Pamplona, donde participó en una rebelión contra un jefe español (el corregidor Bastús). Cuando regresó a Ocaña, no solo trajo el chisme de lo que había pasado, sino que contagió a todos sus amigos con el espíritu de libertad. \n\n### ⚖️ Un debate muy difícil\nDecidir si independizarse o no era súper complicado. La ciudad se dividió en dos bandos:\n- **El bando del Rey (Realistas):** Decían que el rey español garantizaba el orden y la estabilidad, que la Iglesia lo apoyaba y que una guerra era un riesgo demasiado peligroso.\n- **El bando de la Libertad (Patriotas):** Estaba formado por los **criollos** (hijos de españoles nacidos en América). Ellos querían independizarse para no pagarle tantos impuestos a España, tener su propio gobierno y tener los mismos derechos que los nacidos en Europa.\n\n¡La balanza de la historia estaba a punto de inclinarse!',
          speech:
            'Noticias a paso de tortuga. Imagínate vivir en una época sin redes sociales ni teléfonos. Cuando el diez de julio de mil ochocientos diez estalló el grito de independencia en Santafé, en Ocaña nadie se enteró ese día. Las noticias tardaban semanas en llegar a través de viajeros o el correo a caballo. El encargado de traer la chispa de la rebelión fue un joven estudiante llamado Antonio Quintero Copete. Él estaba en Pamplona, participó en una rebelión y, al volver a Ocaña, trajo las noticias y contagió a sus amigos con el espíritu de libertad. Sin embargo, apoyar la independencia no era fácil y la ciudad se dividió. Los realistas querían seguir con el rey porque garantizaba el orden, y la Iglesia los apoyaba. Por el otro lado estaban los patriotas y los criollos, que querían independizarse para no pagar más impuestos a España, tener su propio gobierno y exigir igualdad de derechos frente a los nacidos en Europa.',
          cap: 'Antepasados X'
        }
      },
      {
        type: 'crossword',
        data: {
          rows: 9,
          columns: 12,
          id: 'cros5',
          words: [
            {
              word: 'CRIOLLOS',
              row: 1,
              column: 1,
              direction: 'horizontal'
            },
            {
              word: 'PAMPLONA',
              row: 0,
              column: 8,
              direction: 'vertical'
            },
            {
              word: 'CORREO',
              row: 4,
              column: 4,
              direction: 'horizontal'
            },
            {
              word: 'ANTONIO',
              row: 2,
              column: 2,
              direction: 'vertical'
            }
          ],
          hints: [
            'Personas nacidas en América de origen español que exigían igualdad de derechos.',
            'Ciudad donde estudiaba Antonio y donde se rebeló contra el corregidor.',
            'Medio de comunicación a caballo que traía las noticias lentamente.',
            'Nombre del joven ocañero (___ Quintero Copete) que trajo el espíritu de libertad.'
          ]
        },
        requiresCompletion: true
      },
      {
        type: 'ar',
        data: {
          model: require('@/assets/esqueleto.glb'),
          speech:
            'Frente a ti puedes observar a un joven criollo de mil ochocientos diez, representando a Antonio Quintero Copete. Aunque no me diste un modelo específico para esta historia, este joven patriota es el protagonista perfecto. Míralo bien: no lleva armadura pesada como los antiguos conquistadores, su arma más poderosa son las ideas. Imagina lo que significaba ser él en esa época. Acaba de cabalgar durante días desde Pamplona, trae el polvo del camino y, sobre todo, una noticia que es como una bomba: ¡la rebelión ha comenzado! En un mundo donde todo le pertenecía al rey, atreverse a hablar de libertad, de no pagar impuestos injustos y de gobernarse a sí mismos, era jugarse la vida. Antonio es el puente entre el mundo que terminaba y la nueva nación que estaba a punto de nacer; él fue la voz que despertó a Ocaña.'
        }
      }
    ]
  }
}

// {
//         type: 'question',
//         data: {
//           question:
//             'El nombre "Carates" duró más de 200 años en documentos oficiales. ¿Qué dice eso sobre el poder que tienen los que escriben la historia para definir a otros pueblos?',
//           desc: 'Piensa en quién tenía el poder de escribir en esa época y qué pasaba con las versiones de los propios indígenas sobre sí mismos.',
//           id: 'info1'
//         },
//         requiresCompletion: true
//       }
