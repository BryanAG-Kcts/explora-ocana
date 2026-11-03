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
          cap: 'Antepasados I',
          img: 'mission_1.jpg'
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
          model: 'indio_monte.glb',
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
          cap: 'Antepasados II',
          img: 'mission_2.jpg'
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
          model: 'esqueleto.glb',
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
          cap: 'Antepasados III',
          img: 'mission_3.jpg'
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
          model: 'indio_flecha.glb',
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
          cap: 'Antepasados IV',
          img: 'mission_4.jpg'
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
          model: 'esqueleto.glb',
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
          cap: 'Antepasados V',
          img: 'mission_5.jpg'
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
          model: 'esqueleto.glb',
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
          cap: 'Antepasados VI',
          img: 'mission_6.jpg'
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
          model: 'esqueleto.glb',
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
          cap: 'Antepasados VII',
          img: 'mission_7.jpg'
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
          model: 'esqueleto.glb',
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
          cap: 'Antepasados VIII',
          img: 'mission_8.jpg'
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
          model: 'esqueleto.glb',
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
          cap: 'Antepasados IX',
          img: 'mission_9.jpg'
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
          model: 'esqueleto.glb',
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
          readTimeMinutes: '5',
          body: '## 🐌 El "lag" de las noticias en 1810\n\nImagínate vivir en una época sin WhatsApp ni redes sociales. Cuando el **10 de julio de 1810** estalló el grito de independencia en Santafé, en Ocaña ¡nadie se enteró ese día! Las noticias tardaban semanas en llegar a través del correo a caballo o viajeros. El encargado de traer el "chisme" revolucionario fue **Antonio Quintero Copete**, un joven estudiante ocañero que llegó desde Pamplona y contagió a sus amigos con el espíritu de libertad.\n\n### ⚔️ Un joven Bolívar llega a la ciudad\nEn enero de 1813 llegó a Ocaña un muchacho apasionado de 29 años. Aún no lo llamaban "El Libertador", era simplemente Simón Bolívar. Fue recibido con gran emoción, y el discurso de bienvenida estuvo a cargo de una mujer: **Bárbara Vicenta Lemus**, quien lideró el recibimiento junto a otras cuatro mujeres de la ciudad. Tras un gran banquete, las familias despidieron al ejército patriota entre lágrimas.\n\n### 📜 La ruptura oficial y el Batallón Ocañero\nEl **7 de abril de 1813**, Ocaña rompió oficialmente con España: destruyeron los símbolos del rey en público y familias poderosas firmaron el acta de independencia. \n\nPero Ocaña no fue solo un testigo que firmó papeles. ¡Fueron a la guerra! Se creó el **Batallón Libertador de Ocaña** con 180 ocañeros (apoyados por hombres de Río de Oro y Mompox), quienes lucharon valientemente en batallas como las de Jagual y Cúcuta. Por eso Bolívar los llamó "ciudadanos iguales a vuestros hermanos".',
          speech:
            'El lag de las noticias en 1810. Imagínate vivir en una época sin redes sociales. Cuando el diez de julio de mil ochocientos diez estalló el grito de independencia en Santafé, en Ocaña nadie se enteró. Las noticias tardaban semanas en llegar a caballo. El encargado de traer la revolución fue Antonio Quintero Copete, un joven ocañero que estudiaba en Pamplona y contagió a todos con el espíritu de libertad. En enero de mil ochocientos trece, llegó a la ciudad un apasionado Simón Bolívar de apenas veintinueve años, que aún no tenía el título de Libertador. Fue recibido por una multitud, y el discurso principal lo dio una mujer, Bárbara Vicenta Lemus. Meses después, el siete de abril, la ciudad rompió los símbolos del rey y firmó su independencia. Pero los ocañeros no se quedaron mirando: formaron el Batallón Libertador con ciento ochenta hombres y se fueron a combatir junto al ejército patriota. Ocaña no fue un simple testigo, fue un verdadero héroe de la independencia.',
          cap: 'Antepasados X',
          img: 'mission_10.jpg'
        }
      },
      {
        type: 'crossword',
        data: {
          rows: 9,
          columns: 12,
          id: 'info_mision10_v2',
          words: [
            {
              word: 'BOLIVAR',
              row: 1,
              column: 1,
              direction: 'horizontal'
            },
            {
              word: 'BARBARA',
              row: 0,
              column: 2,
              direction: 'vertical'
            },
            {
              word: 'BATALLON',
              row: 5,
              column: 4,
              direction: 'horizontal'
            },
            {
              word: 'ACTA',
              row: 3,
              column: 8,
              direction: 'vertical'
            }
          ],
          hints: [
            'Apellido del joven militar de 29 años que llegó a Ocaña en 1813.',
            'Nombre de la mujer que dio el discurso de bienvenida al ejército patriota.',
            'Grupo militar formado por 180 ocañeros (___ Libertador de Ocaña).',
            'Documento firmado el 7 de abril de 1813 para declarar la independencia.'
          ]
        },
        requiresCompletion: true
      },
      {
        type: 'ar',
        data: {
          model: 'esqueleto.glb',
          speech:
            'Frente a ti tienes a un Simón Bolívar muy distinto al de los cuadros tradicionales. Tiene apenas veintinueve años. Todavía no es el gran mito de mármol ni lleva el título oficial de Libertador; es un joven apasionado, cansado por el viaje y con el fuego de la revolución en los ojos. Imagina el impacto de su llegada a Ocaña en enero de mil ochocientos trece. Al entrar por la plaza, no fue un político veterano quien lo recibió, sino la voz firme de una mujer, Bárbara Vicenta Lemus, frente a una multitud emocionada. Bolívar vio en los ocañeros a ciudadanos valientes, dispuestos a dejar sus familias para tomar las armas y formar un batallón entero. Mirar a este joven líder es recordar que la independencia no fue ganada por estatuas, sino por jóvenes con miedos, sueños y un coraje inmenso que decidieron cambiar el rumbo de nuestra historia.'
        }
      }
    ],
    M11: [
      {
        type: 'concept',
        data: {
          title: 'Misión 11: La época del terror',
          subtitle: 'Cuando el miedo gobernó Ocaña y la valentía lo desafió',
          readTimeMinutes: '5',
          body: '## 💀 "El Pacificador" que trajo la muerte\n\nEntre 1815 y 1819, Ocaña vivió sus años más oscuros. El rey de España mandó a **Pablo Morillo**, un brillante y despiadado general, a reconquistar América. Él se llamaba a sí mismo "El Pacificador", pero su idea de paz era el terror. El 1 de abril de 1816 entró a Ocaña y su primer acto no fue hablar, sino ejecutar patriotas, como el venezolano Miguel Carabaño, cuya cabeza fue exhibida en la plaza pública para mandar un mensaje de miedo a todos los habitantes.\n\n### 🔴 Los Colorados: La guerrilla del Rey\nCuando Morillo se fue, dejó a cargo a unos criminales peores: **Los Colorados**. Eran más de 1.500 hombres armados que usaban pantalones y pañoletas rojas. Defendían a la corona española castigando brutalmente a los patriotas en eventos públicos que llamaban "la fiesta de las carreras", donde amarraban a sus víctimas a caballos desbocados. Querían que Ocaña viviera con un trauma eterno.\n\n### 🕊️ La mujer que no cerró los ojos\nEn enero de 1820, el coronel patriota Fernando Figueredo intentó recuperar Ocaña, pero perdió. Huyendo, tocó la puerta de **Agustina Ferro**. Ella sabía que ayudarlo era una sentencia de muerte, pero lo escondió igual. Los Colorados la descubrieron y la condenaron a ser fusilada en la plaza. Antes de morir, le ofrecieron vendarle los ojos, pero ella lo rechazó. Quería mirar a la muerte (y a sus asesinos) de frente.\n\n### ⚔️ El general que ordenó el caos\nMientras todo este terror pasaba, un militar llamado **Francisco de Paula Santander** (que había estado organizando tropas en Ocaña años antes) estaba en Casanare unificando a un ejército patriota que estaba en la ruina, sin armas y peleado entre sí. Gracias a su disciplina, ese mismo ejército fue el que Bolívar usó semanas después para ganar la Batalla de Boyacá y sellar nuestra independencia para siempre.',
          speech:
            'La época del terror. Cuando el miedo gobernó Ocaña y la valentía lo desafió. Entre mil ochocientos quince y mil ochocientos diecinueve, la ciudad vivió sus peores años. El general español Pablo Morillo, enviado por el rey, entró a Ocaña el primero de abril de mil ochocientos dieciséis. Aunque se hacía llamar "El Pacificador", su método era ejecutar personas. Cuando él se fue, el terror quedó a cargo de Los Colorados, un grupo paramilitar a favor de España que usaba ropa roja y aterrorizaba a la gente matando patriotas en plazas públicas con caballos. A pesar de esto, hubo mucho valor. Agustina Ferro fue una mujer que escondió en su casa a un coronel patriota herido, sabiendo que arriesgaba su vida. Fue descubierta y condenada a ser fusilada en la plaza, pero rechazó que le vendaran los ojos para mirar a sus verdugos de frente. Mientras tanto, el general Francisco de Paula Santander estaba en Casanare armando y organizando un ejército patriota que estaba en la ruina. Ese fue el ejército que logró la victoria final en la batalla de Boyacá.',
          cap: 'Antepasados XI',
          img: 'mission_11.jpg',
          isVertical: true
        }
      },
      {
        type: 'crossword',
        data: {
          rows: 9,
          columns: 12,
          id: 'info_mision11',
          words: [
            {
              word: 'MORILLO',
              row: 1,
              column: 1,
              direction: 'horizontal'
            },
            {
              word: 'MIEDO',
              row: 0,
              column: 7,
              direction: 'vertical'
            },
            {
              word: 'AGUSTINA',
              row: 4,
              column: 2,
              direction: 'horizontal'
            },
            {
              word: 'SANTANDER',
              row: 0,
              column: 10,
              direction: 'vertical'
            }
          ],
          hints: [
            'Apellido del General español conocido como "El Pacificador".',
            'Arma psicológica que usaban Morillo y Los Colorados al ejecutar en la plaza pública.',
            'Nombre de la valiente mujer que no quiso que le vendaran los ojos (___ Ferro).',
            'Apellido del militar que organizó el ejército patriota en Casanare.'
          ]
        },
        requiresCompletion: true
      },
      {
        type: 'ar',
        data: {
          model: 'esqueleto.glb',
          speech:
            'Frente a ti tienes la imagen de una verdadera heroína ocañera: Agustina Ferro. Mírala detenidamente. No es una soldado armada ni una líder política, es una mujer civil que tomó la decisión más valiente de su vida cuando el terror de Los Colorados dominaba las calles. En enero de mil ochocientos veinte, las armas fallaron y el coronel patriota Figueredo estaba huyendo. Ella sabía que esconderlo en su casa significaba morir, pero lo hizo igual porque sus principios eran más fuertes que su miedo. Imagina la escena final en la plaza de Ocaña: el pelotón de fusilamiento está listo, el líder enemigo le ofrece una venda negra para los ojos, un último acto de falsa piedad. Pero ella levanta el rostro y dice que no. Ella eligió mirar directamente a sus verdugos y a las armas que la matarían. Agustina murió ese día, pero esa mirada firme sigue clavada en la memoria histórica de nuestra ciudad.'
        }
      }
    ],
    M12: [
      {
        type: 'concept',
        data: {
          title: 'Misión 12: Amor, poder y política',
          subtitle: 'Escándalos, corazones rotos y el nacimiento de un partido',
          readTimeMinutes: '5',
          body: '## 💔 El precio de apoyar la libertad\n\nLa familia Ibáñez-Arias era una de las más ricas y prestigiosas de Ocaña. Lo tenían todo, hasta que en 1813 decidieron financiar al ejército de Simón Bolívar. Por esa lealtad, los españoles los castigaron sin piedad: les quitaron todas sus riquezas, desterraron a las mujeres y el papá, Miguel Ibáñez, murió solo y en la miseria huyendo por la selva. ¡Pero la familia renació! Los hijos crecieron, se casaron con familias poderosas y recuperaron el control político.\n\n### 🔥 Escándalos en las altas esferas\nLas hijas de esta familia, Nicolasa y Bernardina, protagonizaron los dramas amorosos más grandes de la Gran Colombia:\n- **Nicolasa y el Vicepresidente:** Aunque estaba casada con Antonio José Caro, Nicolasa tuvo un famosísimo romance público con Francisco de Paula Santander. El vicepresidente estaba tan enamorado que mandó al esposo a Londres con la excusa de "imprimir leyes" solo para quitárselo de encima. El esposo volvió ciego dos años después.\n- **Bernardina, la mujer de hierro:** Simón Bolívar se obsesionó con la hermana menor. ¡Usó su poder para negarle la licencia militar al novio de Bernardina y así evitar que se casaran! Hasta le regaló una casa del Estado a la mamá para ganar puntos. Pero Bernardina fue inquebrantable y rechazó al Libertador una y otra vez.\n\n### ⚖️ El origen del Partido Conservador\n¿Qué pasa cuando creces viendo cómo destruyen a tu familia? **José Eusebio Caro** (hijo de Nicolasa) creció como el lazarillo de su padre ciego, viendo a su madre como la amante del Vicepresidente. Ese trauma, sumado al abandono que sufrieron después, hizo que José Eusebio odiara a Santander. A sus 32 años fundó el **Partido Conservador Colombiano**, en gran parte, porque le era imposible unirse al partido Liberal, que era el partido del hombre que había arruinado su hogar.\n\n### ⚔️ El sangriento final de Los Colorados\nMientras la élite vivía sus novelas de amor en Bogotá, en el campo ocañero seguía la guerra. La guerrilla realista **Los Colorados** continuó matando y vengándose de civiles patriotas. Su reinado de terror terminó definitivamente en 1822, cuando sus líderes fueron capturados y fusilados en lo que hoy conocemos como el barrio El Carretero.',
          speech:
            'El precio de apoyar la libertad. La familia Ibáñez-Arias era muy rica, pero lo perdieron todo por financiar a Simón Bolívar en mil ochocientos trece. Los españoles los desterraron y el padre murió en la selva. Sin embargo, los hijos recuperaron el poder haciendo matrimonios estratégicos. Las hermanas de esta familia fueron protagonistas de enormes escándalos. Nicolasa tuvo un romance público con el vicepresidente Francisco de Paula Santander. Él estaba tan obsesionado que mandó al esposo de Nicolasa exiliado a Londres solo para que no estorbara. Por su parte, Simón Bolívar enloqueció por la hermana menor, Bernardina. Hizo trampa bloqueando la boda de ella con otro militar y regalándole una casa a su madre, pero Bernardina lo rechazó de frente. Toda esta novela tuvo consecuencias reales en la política. El hijo de Nicolasa, José Eusebio Caro, creció muy traumatizado al ver a su padre ciego y humillado. Ese dolor lo llevó a fundar el Partido Conservador Colombiano, pues sentía un profundo rechazo hacia el partido Liberal, al que pertenecía Santander. Y mientras todo esto pasaba, a las afueras de Ocaña, el terror continuaba hasta mil ochocientos veintidós, cuando los líderes de la violenta guerrilla Los Colorados por fin fueron fusilados en el actual barrio El Carretero.',
          cap: 'Antepasados XII',
          img: 'mission_12.jpg'
        }
      },
      {
        type: 'soup',
        data: {
          columns: 12,
          rows: 12,
          id: 'info_mision12',
          soup: [
            'SANTANDER',
            'BERNARDINA',
            'NICOLASA',
            'CONSERVADOR',
            'COLORADOS',
            'CARRETERO'
          ]
        },
        requiresCompletion: true
      },
      {
        type: 'ar',
        data: {
          model: 'esqueleto.glb',
          speech:
            'Observa detalladamente esta carta antigua. Aunque hoy asociamos la historia con espadas y cañones, un simple pedazo de papel con tinta fue el arma más peligrosa durante los primeros años de nuestra República. A través de cartas como esta, el gran Simón Bolívar le rogaba amor a Bernardina Ibáñez, y usando su poder, firmaba órdenes para prohibir que ella se casara con el hombre que realmente amaba. Con estos mismos papeles, el vicepresidente Santander desterró hacia Londres a un hombre inocente solo para quedarse con su esposa Nicolasa. Detrás de los grandes monumentos y los discursos de libertad, nuestros próceres eran seres humanos con debilidades, que usaron el poder del Estado para satisfacer sus caprichos del corazón. Y fue precisamente leyendo el dolor en el rostro de su padre ciego, que el joven José Eusebio Caro usaría tiempo después otra pluma y otro papel para fundar el Partido Conservador Colombiano. Un simple papel que nació del amor, terminó dividiendo a una nación entera.'
        }
      }
    ],
    M13: [
      {
        type: 'concept',
        data: {
          title: 'Misión 13: La historia de Ocaña',
          subtitle: 'El sueño, la convención y la caída de la Gran Colombia',
          readTimeMinutes: '5',
          body: '## 🌎 El gran sueño de América\n\nLa Gran Colombia fue un proyecto monumental que existió apenas 11 años (1819-1831). Pero la idea nació mucho antes. El precursor fue **Francisco de Miranda**, quien soñó con crear un solo país hispanoamericano con capital en Panamá (llamada "Colombo"). Más tarde, Simón Bolívar adaptó esta visión para formar una poderosa alianza de repúblicas.\n\n### 🏗️ La construcción de un gigante\nEl país nació oficialmente en el **Congreso de Angostura (1819)**, uniendo a Venezuela y la Nueva Granada. Con el tiempo se le sumaron Panamá y Ecuador. ¡Era un proyecto tan increíble que incluso República Dominicana, Cuba y Puerto Rico intentaron unirse! Sin embargo, invasiones extranjeras y los intereses de Estados Unidos en el Caribe lo impidieron.\n\n### 💔 Ocaña: Donde el sueño se rompió\nEl momento más crítico de esta enorme nación se vivió en nuestra ciudad. El 9 de abril de 1828 se realizó la **Convención de Ocaña** para intentar salvar al país de la división. Pero chocaron dos bandos irreconciliables:\n- **Santanderistas:** Defendían el federalismo y querían ponerle límites estrictos al presidente.\n- **Bolivarianos:** Querían una "Constitución Vitalicia" (que Bolívar fuera presidente de por vida y eligiera a su sucesor).\n\nAl ver que iban a perder la votación, los bolivarianos abandonaron la Convención. Al romperse el quórum, la reunión fracasó. Como consecuencia, Bolívar asumió la dictadura, intentaron asesinarlo y desterró a Santander.\n\n### 🥀 Un final sin gloria\nPor las peleas entre el centralismo y el federalismo, los caudillos regionales y la guerra, la Gran Colombia colapsó en 1831. Los héroes que construyeron esta nación tuvieron finales trágicos: Miranda murió preso en España, Sucre fue asesinado a traición a los 35 años, y Bolívar murió enfermo y exiliado en Santa Marta, viendo cómo su inmenso sueño se desmoronaba.',
          speech:
            'El gran sueño de América. La Gran Colombia fue un proyecto monumental que existió apenas 11 años. La idea original fue de Francisco de Miranda, quien soñó con crear un solo país hispanoamericano con capital en Panamá. Más tarde, Simón Bolívar adaptó la visión para formar una alianza de repúblicas. El gigante nació en el Congreso de Angostura en mil ochocientos diecinueve, uniendo a Venezuela y la Nueva Granada, y luego se sumaron Panamá y Ecuador. Era tan imponente que República Dominicana, Cuba y Puerto Rico intentaron unirse, pero fuerzas extranjeras lo impidieron. En mil ochocientos veintiocho, Ocaña fue el escenario donde el sueño se rompió. Se realizó la Convención de Ocaña para reformar la constitución, pero chocaron los santanderistas, que querían autonomía, y los bolivarianos, que querían que Bolívar fuera presidente de por vida. Como iban a perder, los bolivarianos abandonaron la reunión y la convención fracasó. Bolívar se declaró dictador y el país terminó desintegrándose por las peleas de poder. Los grandes héroes tuvieron finales tristes: Miranda murió en prisión, Sucre fue asesinado a traición, y Bolívar murió enfermo en Santa Marta, presenciando el colapso de su nación.',
          cap: 'Antepasados XIII',
          img: 'mission_13.jpg'
        }
      },
      {
        type: 'crossword',
        data: {
          rows: 8,
          columns: 8,
          id: 'info_mision13',
          words: [
            {
              word: 'MIRANDA',
              row: 0,
              column: 5,
              direction: 'vertical'
            },
            {
              word: 'PANAMA',
              row: 0,
              column: 1,
              direction: 'horizontal'
            },
            {
              word: 'SUCRE',
              row: 2,
              column: 2,
              direction: 'horizontal'
            },
            {
              word: 'OCAÑA',
              row: 6,
              column: 1,
              direction: 'horizontal'
            }
          ],
          hints: [
            'Apellido del visionario que soñó primero con crear un solo Estado hispanoamericano.',
            'Lugar donde Miranda y Bolívar planeaban hacer el gran congreso de América.',
            'Héroe de Ayacucho que fue asesinado a traición a los 35 años.',
            'Ciudad donde se realizó la fallida Convención de 1828 que marcó el fin de la Gran Colombia.'
          ]
        },
        requiresCompletion: true
      },
      {
        type: 'ar',
        data: {
          model: 'esqueleto.glb',
          speech:
            'Frente a ti tienes el mapa de la Gran Colombia, el proyecto de país más ambicioso de nuestra historia. Observa su inmenso tamaño: unía lo que hoy es Colombia, Venezuela, Ecuador y Panamá. Este gigante no fracasó por falta de riqueza, ni porque los españoles nos volvieran a conquistar con sus ejércitos. Fracasó por nuestras propias divisiones internas. Imagina la Convención de mil ochocientos veintiocho aquí mismo en Ocaña. Políticos de todas estas regiones reunidos en la ciudad, gritando, incapaces de ponerse de acuerdo entre darle autonomía a las provincias o permitir que un presidente tuviera el poder absoluto de por vida. Cuando los políticos se levantaron y abandonaron la reunión, este hermoso y gigante mapa comenzó a romperse en pedazos. Verlo hoy es recordar que la unión nos hizo independientes, pero el ego y la sed de poder destruyeron el sueño más grande de todo un continente.'
        }
      }
    ],
    M14: [
      {
        type: 'concept',
        data: {
          title: 'Misión 14: Ocaña se reinventa',
          subtitle:
            'Provincia, la Columna de la Libertad y el comercio del mundo',
          readTimeMinutes: '5',
          body: '## 🏛️ ¡Por fin una Provincia independiente!\n\nTras años de guerras sangrientas, el 29 de mayo de 1849 el Congreso creó oficialmente la **Provincia de Ocaña**, dándole autonomía y presupuesto propio. El primer gobernador fue Pedro Alcántara Ibáñez Arias. ¡Una ironía del destino! Su familia había sido expulsada y arruinada por los españoles en 1816, y ahora él regresaba a gobernar la ciudad. En celebración, el pueblo bautizó su plaza principal como la **Plaza del 29 de Mayo**.\n\n## 🗽 El único monumento a la libertad de esclavos\nEn esa misma plaza se levanta una obra histórica única en toda Colombia: la **Columna de los Esclavos**, construida en 1852. Posee cinco anillos que representan los países liberados por Bolívar, y en su base guarda la ley que abolió la esclavitud. \n\nEl 6 de enero de 1853, durante su inauguración, el gobernador Agustín Núñez hizo algo revolucionario para la época: **bailó en público con Nicanora Rincón**, la mujer negra liberta más anciana de Ocaña, rompiendo de un manotazo siglos de barreras raciales.\n\n## 🕵️‍♂️ Científicos analizando a los ocañeros\nEn 1850 llegó la famosa *Comisión Corográfica*, liderada por Agustín Codazzi y Manuel Ancízar. Ellos notaron que los hombres ocañeros ya no usaban ruana, sino pantalón, camisa y sombrero tejido; mientras que las mujeres destacaban por su increíble equilibrio, cargando tinajas de agua y canastos pesados sobre sus cabezas.\n\n## 🌍 Lujos europeos a lomo de mula\nEntre 1860 y 1890, Ocaña se convirtió en la capital comercial del oriente colombiano. Exportaba maderas, fiques y cueros hacia Europa y EE. UU., e importaba lujos increíbles: paños ingleses, cristales de Bohemia, vinos franceses e ¡hasta pianos de cola que llegaban a lomo de mula desde el Río Magdalena! Familias de Alemania, Irlanda, Italia y Siria se mudaron a la ciudad, fundando en 1894 el célebre **Club Ocaña**.',
          speech:
            'Provincia, la Columna de la Libertad y el comercio del mundo. En mil ochocientos cuarenta y nueve se creó oficialmente la Provincia de Ocaña, dándole a la región su propio gobierno y senadores. Como agradecimiento, la plaza principal fue rebautizada como la Plaza del veintinueve de mayo. En esa misma plaza se construyó en mil ochocientos cincuenta y dos la Columna de los Esclavos, el único monumento en Colombia dedicado a celebrar la abolición total de la esclavitud. Durante su fiesta de inauguración, el gobernador bailó públicamente con Nicanora Rincón, la liberta más anciana de la ciudad, rompiendo barreras raciales de la época. Por esos mismos años, la expedición científica de Agustín Codazzi visitó la ciudad y describió las costumbres de los ocañeros. Hacia mil ochocientos sesenta, Ocaña vivió un gran auge económico, exportando productos locales e importando lujos europeos a lomo de mula como vinos y pianos. Este comercio atrajó a inmigrantes alemanes, ingleses e italianos que fundaron el prestigioso Club Ocaña en mil ochocientos noventa y cuatro.',
          cap: 'Antepasados XIV',
          img: 'mission_14.jpg'
        }
      },
      {
        type: 'crossword',
        data: {
          rows: 9,
          columns: 12,
          id: 'info_mision14',
          words: [
            {
              word: 'COLUMNA',
              row: 1,
              column: 1,
              direction: 'horizontal'
            },
            {
              word: 'MAYO',
              row: 0,
              column: 2,
              direction: 'vertical'
            },
            {
              word: 'CODAZZI',
              row: 4,
              column: 1,
              direction: 'horizontal'
            },
            {
              word: 'NICANORA',
              row: 3,
              column: 9,
              direction: 'vertical'
            }
          ],
          hints: [
            'Monumento único en Colombia erigido en Ocaña para celebrar la abolición de la esclavitud.',
            'Mes que le da nombre a la plaza principal de Ocaña (Plaza del 29 de ___).',
            'Ingeniero italiano que lideró la famosa Comisión Corográfica en 1850.',
            'Nombre de la mujer negra liberta con la que el gobernador bailó rompiendo prejuicios raciales.'
          ]
        },
        requiresCompletion: true
      },
      {
        type: 'ar',
        data: {
          model: 'esqueleto.glb',
          speech:
            'Frente a ti se eleva la majestuosa Columna de la Libertad de los Esclavos. Observa sus cinco anillos superpuestos; cada uno representa a una de las naciones liberadas por Simón Bolívar en América del Sur. Esta estructura no es solo un adorno en el centro de la Plaza 29 de Mayo; es el único monumento en toda Colombia construido para celebrar el fin de la esclavitud. Imagina la emoción del seis de enero de mil ochocientos cincuenta y tres: la música sonando en la plaza, la gente reunida alrededor de estos ladrillos y el gobernador bailando junto a Nicanora Rincón, una anciana que había vivido gran parte de su vida en cautiverio y que ahora celebraba su libertad absoluta. Esta columna guarda en su base las leyes de libertad y los nombres de los hombres y mujeres que dejaron de ser propiedad de otros para convertirse en ciudadanos libres.'
        }
      }
    ],
    M15: [
      {
        type: 'concept',
        data: {
          title: 'Misión 15: Memorias',
          subtitle: 'Poetas rebeldes, carros en mula y un viaje por las nubes',
          readTimeMinutes: '5',
          body: '## 🖋️ Los rebeldes de la literatura\n\nEn 1904, escribir en contra del gobierno conservador era un deporte extremo. Por eso, el grupo literario **"Los Felibres"** (conformado por siete intelectuales liberales) tuvo que usar "seudónimos" (nombres falsos) para protegerse de la persecución y publicar sus revolucionarias ideas, las cuales se nutrían de los libros extranjeros que llegaban navegando por el río Magdalena.\n\n### 🏫 La fábrica de genios\nEn 1911 se fundó oficialmente el icónico **Colegio José Eusebio Caro**. Entre 1919 y 1933 vivió su "época de oro" bajo la disciplina de los padres Jesuitas. ¡Fue una verdadera fábrica de líderes! De sus salones salieron ministros, historiadores y hasta un expresidente de la república.\n\n### 🚗 ¿Un carro a lomo de mula?\nLas primeras décadas del siglo XX trajeron una modernidad increíble a Ocaña:\n- **El Cine:** En 1915, el monumental "Cine Pacheco" ofrecía funciones para 1.000 personas.\n- **El primer carro:** Como no había carreteras, un italiano trajo un Ford T14 en 1915... ¡totalmente desarmado a lomo de mula cruzando la cordillera para ensamblarlo en Ocaña!\n- **La Luz Eléctrica:** En 1920 se inauguró la planta eléctrica del río Algodonal con una gran fiesta.\n\n### 🚡 Tocando las nubes\nEn 1929 se inauguró una maravilla de la ingeniería mundial: **El Cable Aéreo Gamarra-Ocaña**. Era el primer monocable del mundo para pasajeros en largas distancias. Financiado en parte con la plata que EE. UU. pagó a Colombia por la pérdida de Panamá, tenía 47 km de largo y torres altísimas. Viajabas en góndolas abiertas rozando la neblina, en un trayecto lleno de historias de amor, suicidios y robos piratas. Tristemente, cuando hicieron la carretera en 1948, el Congreso ordenó destruirlo. ¡Un error imperdonable que borró un tesoro turístico único en el planeta!',
          speech:
            'Poetas rebeldes, carros en mula y un viaje por las nubes. En mil novecientos cuatro, escribir contra el gobierno era peligroso. Por eso, el grupo literario Los Felibres tuvo que usar nombres falsos para publicar sus ideas. Años después, en mil novecientos once, se fundó el icónico Colegio José Eusebio Caro. Dirigido en su época de oro por los padres Jesuitas, de sus aulas salieron ministros, gobernadores y un presidente. A principios del siglo veinte, Ocaña dio un salto a la modernidad. Tuvieron un cine para mil personas, luz eléctrica, y una anécdota increíble: al no haber carreteras, el primer carro Ford llegó en mil novecientos quince completamente desarmado a lomo de mula. Pero la obra más espectacular fue el Cable Aéreo Gamarra-Ocaña inaugurado en mil novecientos veintinueve. Era el primer monocable del mundo para pasajeros. Financiado con la indemnización que Estados Unidos pagó por Panamá, permitía viajar en góndolas abiertas entre las nubes durante cuarenta y siete kilómetros. Lamentablemente, en mil novecientos cuarenta y ocho el gobierno ordenó desarmarlo al terminar la carretera, cometiendo uno de los peores errores contra el patrimonio histórico y turístico de la región.',
          cap: 'Antepasados XV',
          img: 'mission_15.jpg'
        }
      },
      {
        type: 'soup',
        data: {
          columns: 10,
          rows: 10,
          id: 'info_mision15',
          soup: ['FELIBRES', 'CABLE', 'FORD', 'CARO', 'GAMARRA', 'CINE']
        },
        requiresCompletion: true
      },
      {
        type: 'ar',
        data: {
          model: 'esqueleto.glb',
          speech:
            'Frente a ti tienes una de las míticas góndolas abiertas del histórico Cable Aéreo Gamarra-Ocaña. Imagina estar sentado aquí en la década de mil novecientos treinta. Vas viajando a siete kilómetros por hora, suspendido a decenas de metros de altura sobre cañones y precipicios. Con solo estirar tu mano, puedes sentir la espesa neblina y el viento helado de la cordillera en tu rostro. Esta no era una simple atracción mecánica; fue una hazaña de ingeniería que conectó a nuestra región con el río Magdalena y el resto del mundo. A bordo de estas vagonetas viajaban personas, mercancías, esperanzas e historias de todo tipo, desde romances hasta tragedias. Aunque la falta de visión del futuro llevó a su destrucción en mil novecientos cuarenta y ocho, observar este modelo es traer de vuelta el orgullo de saber que, en Ocaña, alguna vez pudimos tocar las nubes.'
        }
      }
    ],
    M16: [
      {
        type: 'concept',
        data: {
          title: 'Misión 16: Ocaña entre guerras y fiestas',
          subtitle: 'Estatuas de bronce, carnavales y sombras de la violencia',
          readTimeMinutes: '5',
          body: '## 🗽 Del cerro de la muerte al Cristo de bronce\n\nEntre 1935 y 1959, Ocaña vivió una época de oro en su cultura. En 1935, el antiguo "cerro de la horca" (donde casi ejecutan a Leonelda) fue transformado por completo: allí se instaló una imponente estatua de **Cristo Rey** de 3,5 toneladas hecha en Barcelona, España, ¡que tuvo que subir a la cima en tres partes usando el Cable Aéreo!\n\nAdemás, en 1940 colocaron el busto de Santander en la Plaza 29 de Mayo, con un secreto genial: ¡fue fundido reciclando monedas de peso viejas de la época del prócer!\n\n### 🚰 De tinajas a grifos y cielos abiertos\nLa ciudad creció a pasos agigantados:\n- **El Acueducto (1937):** Tras siglo y medio tomando agua en tinajas, por fin llegó el agua potable limpia desde el río Tejo.\n- **El Mercado Cubierto (1942):** Diseñado por el arquitecto italiano Aladino Benigni.\n- **El Aeropuerto (1952):** Se inauguró la pista de Aguas Claras.\n- **Nuevos barrios:** Nacieron el Barrio Obrero, La Primavera y Primero de Mayo.\n\n### 🎭 Carnavales y el Desfile de los Genitores\nPara celebrar la vida, en 1946 se realizó el primer Carnaval oficial. Y el **3 de enero de 1959** nació la tradición más hermosa de la ciudad: el **Desfile de los Genitores**, una obra de teatro gigante por las calles que revive toda la historia de Ocaña desde la época indígena.\n\n### ⚡ Épocas de tensión política y religiosa\nNo todo fue fiesta. En 1948, tras el asesinato de Jorge Eliécer Gaitán (quien había visitado Ocaña en 1947), estalló la violencia bipartidista que dejó tragedias en la región. Además, existía una fuerte intolerancia religiosa: el cementerio católico segregaba a los suicidas, los protestantes tuvieron que crear su propio cementerio y, en 1957, un atentado con bomba en un templo protestante conmocionó al país.',
          speech:
            'Del cerro de la muerte al Cristo de bronce. Entre mil novecientos treinta y cinco y mil novecientos cincuenta y nueve, Ocaña vivió una transformación increíble. El antiguo cerro de la horca fue cambiado para siempre al instalar la majestuosa estatua de Cristo Rey, traída desde Barcelona en tres piezas usando el Cable Aéreo. En mil novecientos cuarenta colocaron el busto de Santander, fundido con monedas viejas recicladas. La ciudad se modernizó: llegó el agua potable del río Tejo en mil novecientos treinta y siete, se construyó el mercado público y en mil novecientos cincuenta y dos se abrió el aeropuerto de Aguas Claras. En la cultura nacieron las fiestas más queridas, como el primer Carnaval en mil novecientos cuarenta y seis y el Desfile de los Genitores en mil novecientos cincuenta y nueve. Sin embargo, también fueron años difíciles marcados por la violencia política tras la visita y asesinato de Gaitán, y episodios de fuerte intolerancia religiosa.',
          cap: 'Antepasados XVI',
          img: 'mission_16.jpg'
        }
      },
      {
        type: 'crossword',
        data: {
          rows: 9,
          columns: 12,
          id: 'info_mision16',
          words: [
            {
              word: 'CRISTO',
              row: 1,
              column: 1,
              direction: 'horizontal'
            },
            {
              word: 'TEJO',
              row: 3,
              column: 1,
              direction: 'horizontal'
            },
            {
              word: 'GENITORES',
              row: 5,
              column: 1,
              direction: 'horizontal'
            },
            {
              word: 'CARNAVAL',
              row: 0,
              column: 11,
              direction: 'vertical'
            }
          ],
          hints: [
            'Nombre del monumento de bronce instalado en el antiguo cerro de la horca en 1935.',
            'Río que abasteció el primer acueducto de agua potable de Ocaña en 1937.',
            'Desfile histórico y patrimonial que se celebra cada 3 de enero desde 1959.',
            'Fiesta popular institucionalizada por primera vez en la ciudad en 1946.'
          ]
        },
        requiresCompletion: true
      },
      {
        type: 'ar',
        data: {
          model: 'esqueleto.glb',
          speech:
            'Frente a ti se eleva la majestuosa figura de Cristo Rey. Observa sus brazos abiertos dominando la cordillera y protegiendo a toda la ciudad desde la cima. Este lugar no siempre fue un sitio de fe y paz. Durante la época colonial, esta colina era conocida como el sangriento Cerro de la Horca, donde las autoridades españolas ejecutaban a los rebeldes y donde intentaron ahorcar a la heroína yerbatera Leonelda Hernández. En mil novecientos treinta y cinco, la comunidad decidió sanar esa herida trágica transformando la montaña. Trajeron esta inmensa estatua de bronce de más de tres toneladas desde Barcelona, España, y subieron cada una de sus piezas a través del Cable Aéreo. Hoy, al contemplar esta estatua, estás viendo el mayor símbolo de cómo Ocaña supo transformar un pasado de dolor y violencia en un monumento a la esperanza y a la unidad de su gente.'
        }
      }
    ],
    M17: [
      {
        type: 'concept',
        data: {
          title: 'Misión 17: Ocaña contemporánea',
          subtitle: 'Educación, literatura universal y milagros policiales',
          readTimeMinutes: '5',
          body: '## 🎓 Escuelas y Universidades para el futuro\n\nEn los años 60 y 70, Ocaña se modernizó abriendo nuevos espacios educativos. Se fundó el **Colegio Agustina Ferro** (en honor a la valiente heroína local fusilada en 1820), el colegio John F. Kennedy y finalmente, tras décadas de intentos, nació la universidad **UFPSO** en 1974. Además, el histórico convento de San Francisco se transformó en un gran Complejo Histórico para resguardar la memoria de la ciudad.\n\n## 📖 El sacerdote ocañero y Cien Años de Soledad\n¿Sabías que Ocaña está directamente conectada con la novela más importante de Colombia? El sacerdote ocañero Francisco C. Angarita fue párroco en Aracataca. Allí fue testigo de la terrible "Masacre de las Bananeras" de 1928, y sus testimonios ayudaron a denunciar la masacre. Pero eso no es todo: ¡en 1930 este mismo cura ocañero **bautizó al niño Gabriel García Márquez**!\n\n## 🏘️ La ciudad crece... sin orden\nA partir de 1963, Ocaña empezó a crecer de manera acelerada y desordenada debido a las **"invasiones"**. Por la falta de vivienda y la fuerte migración rural, cientos de familias ocuparon terrenos improvisados. Estos años también trajeron mucha agitación política: la visita del "cura guerrillero" Camilo Torres, la instalación del Batallón Santander y un cambio histórico en 1988, cuando los ciudadanos eligieron por primera vez a un alcalde por votación popular: Jesús Claro Ovallos.\n\n## 🚔 El milagro en el Puente Pumarejo\nEn 1981, el argentino Carlos Alberto Delveccio asaltó el santuario y robó la imagen de la Virgen de Torcoroma y sus joyas. Pero ocurrió algo sacado de una película: cuando el ladrón escapaba por el puente Pumarejo (cerca de Barranquilla), un policía llamado Yurgen Trujillo Carrascal... **¡que casualmente era ocañero!**, tuvo la corazonada de requisar el carro del argentino sin saber siquiera que había ocurrido un robo en su tierra natal, ¡y recuperó la Virgen!',
          speech:
            'Ocaña contemporánea. En los años sesenta y setenta, la ciudad se modernizó fundando colegios como el Agustina Ferro, el John F. Kennedy y la universidad UFPSO. Un dato literario increíble es que el sacerdote ocañero Francisco Angarita fue testigo de la Masacre de las Bananeras y, en mil novecientos treinta, bautizó al famoso escritor Gabriel García Márquez. A partir de mil novecientos sesenta y tres, la ciudad empezó a crecer de forma desordenada debido a las invasiones de tierras lideradas por migrantes. También fueron años agitados por la visita del cura Camilo Torres, la creación del Batallón Santander y la elección del primer alcalde por voto popular en mil novecientos ochenta y ocho. Finalmente, la ciudad vivió un evento dramático en mil novecientos ochenta y uno: un argentino se robó la Virgen de Torcoroma. Sin embargo, fue recuperada de forma casi milagrosa cerca de Barranquilla por un policía ocañero llamado Yurgen Trujillo, que detuvo y revisó el carro del ladrón guiado simplemente por una corazonada.',
          cap: 'Antepasados XVII',
          img: 'mission_17.jpg'
        }
      },
      {
        type: 'soup',
        data: {
          columns: 10,
          rows: 10,
          id: 'info_mision17',
          soup: ['UFPSO', 'GABO', 'INVASION', 'ALCALDE', 'YURGEN', 'KENNEDY']
        },
        requiresCompletion: true
      },
      {
        type: 'ar',
        data: {
          model: 'esqueleto.glb',
          speech:
            'Frente a ti puedes ver una representación simbólica que une a Ocaña con la obra literaria más importante de todo nuestro país. Aunque parezca increíble, los hilos del destino quisieron que un cura nacido en nuestra tierra ocañera, el padre Francisco Angarita, estuviera presente en Aracataca durante la terrible masacre de las bananeras en mil novecientos veintiocho. Fue él quien recogió testimonios para denunciar el abuso contra los trabajadores, y fue él mismo quien, un par de años después, derramó el agua del bautismo sobre un niño llamado Gabriel García Márquez. Ese niño crecería escuchando aquellas historias trágicas y las convertiría en la obra maestra Cien años de soledad. Ver esto nos recuerda que la huella de los hijos de Ocaña no se quedó atrapada entre las montañas, sino que llegó a las páginas que hoy asombran al mundo entero.'
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
