export type BlogInline =
  | string
  | {
      type: "link";
      href: string;
      text: string;
      /** External links open in a new tab with rel="noopener noreferrer". */
      external?: boolean;
    };

export type BlogBodyBlock =
  | string
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; parts: BlogInline[] }
  | { type: "image"; src: string; alt: string; caption?: string };

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle?: string;
  date: string;
  label: string;
  image: string;
  alt: string;
  excerpt: string;
  body: BlogBodyBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "mudarse-pontevedra-coworking-ciudad-peatonal",
    title:
      "Por qué mudarse a Pontevedra ahora (y aterrizar en Arroelo)",
    seoTitle: "Mudarse a Pontevedra: ciudad peatonal",
    date: "2026-10-07",
    label: "Ciudad",
    image: "/photos/pontevedra-calle.jpg",
    alt: "Calle peatonal del centro de Pontevedra con gente paseando",
    excerpt:
      "Por qué mudarse a Pontevedra ahora: ciudad peatonal premiada, calidad de vida y coworking en el centro con Espacio Arroelo para trabajar y hacer red.",
    body: [
      {
        type: "p",
        parts: [
          "Hay ciudades que venden horizonte. Pontevedra vende otra cosa: poder cruzar el centro a pie, saludar en la plaza y llegar a tiempo a una reunión sin convertir el día en un atasco. Cada vez más gente —remotas, autónomas, parejas que buscan otra escala— se pregunta si ",
          {
            type: "link",
            href: "https://es.wikipedia.org/wiki/Pontevedra",
            text: "mudarse a Pontevedra",
            external: true,
          },
          " no es, simplemente, una forma más sensata de vivir.",
        ],
      },
      {
        type: "p",
        parts: [
          "Nosotras lo vemos desde dentro: ",
          {
            type: "link",
            href: "/",
            text: "Espacio Arroelo",
          },
          " está en el corazón de esa ciudad, y quien aterriza aquí no solo busca mesa y fibra. Busca un lugar donde el trabajo no empiece en soledad.",
        ],
      },
      {
        type: "h2",
        text: "Por qué cada vez más gente elige esta ciudad",
      },
      "El argumento no es solo paisaje gallego —aunque la ría y el Lérez ayudan—. Es calidad de vida cotidiana: calles donde cabe el paseo, comercio de proximidad, una escala humana que no obliga a elegir entre «ciudad grande» y «pueblo dormitorio». Quien llega desde Madrid, Barcelona o el extranjero suele decir lo mismo en la primera semana: «aquí el tiempo se estira».",
      {
        type: "p",
        parts: [
          "Esa sensación no es casual. Desde finales de los noventa, el ",
          {
            type: "link",
            href: "https://pontevedra.gal/",
            text: "Concello de Pontevedra",
            external: true,
          },
          " apostó por un modelo urbano centrado en las personas: menos coche en el centro, más espacio público, preferencia peatonal. No es marketing de brochure: es una estrategia que se puede caminar.",
        ],
      },
      {
        type: "image",
        src: "/photos/pontevedra-alameda.jpg",
        alt: "Alameda de Pontevedra, espacio verde junto al centro peatonal",
        caption:
          "La Alameda a dos minutos: verde urbano y ciudad caminable en el mismo radio.",
      },
      {
        type: "h2",
        text: "Ciudad a escala humana: peatonalización y estrategia urbana",
      },
      {
        type: "p",
        parts: [
          "La peatonalización del casco y el calmado del tráfico transformaron la forma de habitar la ciudad. El propio ayuntamiento detalla cómo se devolvió el ",
          {
            type: "link",
            href: "https://ok.pontevedra.gal/es/espacio-publico/",
            text: "espacio público",
            external: true,
          },
          " al peatón: calles estrechas peatonales, plataformas únicas, aceras amplias y un límite de 30 km/h en gran parte del núcleo urbano. El resultado es una ciudad pensada para moverse a pie.",
        ],
      },
      {
        type: "p",
        parts: [
          "Herramientas como el ",
          {
            type: "link",
            href: "https://es.wikipedia.org/wiki/Metrominuto",
            text: "Metrominuto",
            external: true,
          },
          " —el mapa esquemático que marca minutos entre puntos clave— ayudan a desmitificar distancias. Puedes explorarlo también en la ",
          {
            type: "link",
            href: "https://metrominuto.pontevedra.gal/es/",
            text: "guía ciudadana Metrominuto",
            external: true,
          },
          ". Caminar deja de ser un plan B y pasa a ser el mapa por defecto. Quien se muda aquí no necesita coche para casi todo: necesita zapatos cómodos y, a veces, un paraguas.",
        ],
      },
      {
        type: "p",
        parts: [
          "Para quien quiere conocer la ciudad más allá del coworking, ",
          {
            type: "link",
            href: "https://visit-pontevedra.com/",
            text: "Visit Pontevedra",
            external: true,
          },
          " ofrece capas de patrimonio, verde urbano y cultura. Nosotras añadimos otra capa: un salón donde esa ciudad se traduce en comunidad laboral.",
        ],
      },
      {
        type: "image",
        src: "/photos/ig-salon-vivo.jpg",
        alt: "Salón de Espacio Arroelo con luz natural y puestos de trabajo en el centro de Pontevedra",
        caption:
          "El salón en Cobián Roffignac: coworking a escala de la ciudad que caminas.",
      },
      {
        type: "h2",
        text: "Premios reales al modelo (sin inventar medallas)",
      },
      "Pontevedra no necesita relatos inflados. Los reconocimientos existen y están documentados:",
      {
        type: "p",
        parts: [
          "2013 — ",
          {
            type: "link",
            href: "https://ok.pontevedra.gal/es/intermodes-2013/",
            text: "Premio europeo Intermodes",
            external: true,
          },
          " (Bruselas), por su sistema de movilidad intermodal centrado en el peatón, con mención especial al Metrominuto.",
        ],
      },
      {
        type: "p",
        parts: [
          "2014 — ",
          {
            type: "link",
            href: "https://ok.pontevedra.gal/es/un-habitat-2014/",
            text: "Dubai International Award / ONU-Hábitat",
            external: true,
          },
          ", en la categoría de Mejores Prácticas, por el proyecto «Un modelo de ciudad centrado en las personas». Fue la única candidatura europea entre las seis prácticas seleccionadas ese año —también lo recogió ",
          {
            type: "link",
            href: "https://elpais.com/ccaa/2014/11/24/galicia/1416860460_643921.html",
            text: "El País",
            external: true,
          },
          ".",
        ],
      },
      {
        type: "p",
        parts: [
          "2015 — ",
          {
            type: "link",
            href: "https://ok.pontevedra.gal/es/new-york-2015-es/",
            text: "Leadership in Active Design: Excellence Award",
            external: true,
          },
          " del Center for Active Design de Nueva York, como ganadora absoluta entre finalistas internacionales, por un urbanismo que fomenta estilos de vida activos.",
        ],
      },
      "También hay reconocimientos nacionales en accesibilidad y seguridad vial a lo largo de dos décadas. Aquí nos quedamos con lo verificable: la ciudad ha sido premiada por caminar mejor, no por un eslogan.",
      {
        type: "h2",
        text: "Cómo el coworking ayuda a aterrizar, trabajar y hacer amigas",
      },
      "Mudarse es logística. Aterrizar es otra cosa: saber dónde vas a trabajar el lunes, con quién vas a tomar un café el jueves, a quién preguntar cuando falla la wifi del piso de alquiler. Un coworking bien hecho acorta ese vacío.",
      {
        type: "p",
        parts: [
          "En el ",
          {
            type: "link",
            href: "/espacio",
            text: "espacio",
          },
          " —Cobián Roffignac, planta 3— ofrecemos lo básico (mesa, fibra, salas) y lo que no se improvisa: comunidad. Las ",
          {
            type: "link",
            href: "/coworkers",
            text: "coworkers",
          },
          " no son decorado: son la red que convierte «he llegado» en «estoy». Desde 2013 lo hacemos con la misma intuición con la que abrimos: el trabajo en soledad pasa factura; el salón lo remedia.",
        ],
      },
      {
        type: "image",
        src: "/photos/encuentro-mesa.jpg",
        alt: "Grupo de coworkers alrededor de la mesa del salón de Arroelo",
        caption:
          "Aterrizar es también esto: caras conocidas y mesa compartida el primer mes.",
      },
      {
        type: "p",
        parts: [
          "Si buscas contexto, en el ",
          {
            type: "link",
            href: "/blog",
            text: "blog",
          },
          " contamos la ",
          {
            type: "link",
            href: "/blog/historia-espacio-arroelo-pontevedra",
            text: "historia de Espacio Arroelo",
          },
          ", la ",
          {
            type: "link",
            href: "/blog/coworking-pontevedra-echn-arroelo",
            text: "red europea ECHN",
          },
          ", el ",
          {
            type: "link",
            href: "/blog/cafe-a-la-fresca-comunidad-arroelo",
            text: "Café a la fresca",
          },
          " y los puentes con ",
          {
            type: "link",
            href: "/blog/anceu-coliving-ciudad-aldea",
            text: "Anceu",
          },
          " y ",
          {
            type: "link",
            href: "/blog/rural-hackers-tecnologia-impacto-rural",
            text: "Rural Hackers",
          },
          ". Todo eso es la misma frase: Pontevedra se habita mejor en compañía.",
        ],
      },
      {
        type: "h2",
        text: "Aterrizar en el centro: la puerta de Arroelo",
      },
      {
        type: "p",
        parts: [
          "Pontevedra hoy es una ciudad que se recorre a pie y que ha ganado premios por ello. Si te mudas aquí, no hace falta empezar solo: ",
          {
            type: "link",
            href: "/#contacto",
            text: "ven a conocernos",
          },
          ", pasea la Alameda, cruza las calles peatonales y sube al salón. Nosotras ya estamos aquí, con café, mesa y ganas de que tu llegada no sea solo un cambio de código postal.",
        ],
      },
    ],
  },
  {
    slug: "rural-hackers-tecnologia-impacto-rural",
    title:
      "Rural Hackers: cuando la tecnología baja del monte (y no al revés)",
    seoTitle: "Rural Hackers: tech e impacto rural",
    date: "2026-10-07",
    label: "Impacto",
    image: "/photos/blog/rural-hackers-portatiles-patio.jpg",
    alt: "Dos personas trabajan con portátiles en un patio rural de Anceu, con tractor al fondo",
    excerpt:
      "Qué es Rural Hackers y cómo, desde Anceu y con Arroelo, usan arte, tecnología e IA para revitalizar el rural gallego.",
    body: [
      {
        type: "p",
        parts: [
          "Hay una versión de la innovación que solo cabe en campus, distritos financieros o aceleradoras con futbolín. Nosotras preferimos otra: la que se sienta en una aldea de Ponte Caldelas, pide permiso a la vecindad y pregunta qué problema hay que resolver antes de abrir el editor de código.",
        ],
      },
      {
        type: "p",
        parts: [
          "Esa es, en buena medida, la mirada de ",
          {
            type: "link",
            href: "https://www.ruralhackers.com/",
            text: "Rural Hackers",
            external: true,
          },
          ".",
        ],
      },
      {
        type: "h2",
        text: "Un lema y una comunidad que se organiza",
      },
      {
        type: "p",
        parts: [
          "Rural Hackers nace en la intersección del arte, la tecnología y la vida rural para luchar contra la despoblación y crear un puente sostenible entre las comunidades rurales y el mundo contemporáneo. El lema que África Rodríguez resume en su trayectoria —",
          {
            type: "link",
            href: "https://www.ruralhackers.com/",
            text: "think globally, act locally, and revive rural",
            external: true,
          },
          "— no es un eslogan vacío: orienta residencias, proyectos open source y encuentros internacionales anclados en Galicia.",
        ],
      },
      {
        type: "p",
        parts: [
          "Desde 2021, África Rodríguez, Ignacio (Nacho) Márquez y Agustín Jamardo impulsan esta ONG / movimiento. No partían de cero: venían de años tejiendo comunidad en ",
          {
            type: "link",
            href: "https://anceu.com/",
            text: "Anceu Coliving",
            external: true,
          },
          " y de redes europeas de educación no formal, Erasmus+ y hubs creativos. La pregunta de fondo era —y sigue siendo— urgente: ¿cómo evitar que el rural gallego se vacíe de gente, de oficio y de futuro, mientras la tecnología avanza solo en las grandes ciudades?",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/rural-hackers-laptop-sticker.jpg",
        alt: "Portátil con pegatina de Rural Hackers sobre mesa de madera en un patio de aldea",
        caption:
          "Tecnología con raíz: el sticker dice Rural Hackers; el fondo, la aldea.",
      },
      { type: "h2", text: "Construir con quien ya está" },
      "En Rural Hackers no se trata de «llevar la modernidad» como quien reparte folletos. Se trata de construir con el poder de la vecindad de Anceu y de una comunidad internacional. Juntas crean futuros donde el esfuerzo de cada persona deja impacto duradero.",
      "En la práctica hay varias líneas que se entrelazan:",
      {
        type: "p",
        parts: [
          "Residencias. Experiencias de un mes en ",
          {
            type: "link",
            href: "https://anceu.com/",
            text: "Anceu Coliving",
            external: true,
          },
          " para desarrollar proyectos de tecnología, arte o creatividad con impacto local. Quien llega no solo «teletrabaja con vistas»: deja algo —un taller, una herramienta, una propuesta— que dialoga con las necesidades del lugar.",
        ],
      },
      "Proyectos digitales rurales. Herramientas y sistemas open source pensados desde desafíos reales: aislamiento, infraestructuras envejecidas, falta de visibilidad de iniciativas locales. Hackathones como los Do Action, donde decenas de participantes de varios países desarrollan webs para ONG del entorno, convierten la solidaridad en código usable.",
      "Arte y juego en el pueblo. Proyectos como el juego de realidad aumentada «Anceu Monsters», creado en residencia, gamifican el descubrimiento del entorno y acercan la tecnología a niñas y niños del lugar. No es gadget por gadget: es una forma de habitar la plaza de otra manera.",
      "Academia y formación. La Rural Hackers Academy nació de una evidencia simple: tecnología e inglés son dos palancas de desarrollo. Colivers aportaron tiempo gratis para formar a jóvenes y vecinos. La solidaridad aquí no es decorado; es método.",
      "También ha habido ediciones del Rural Hackers Fest en la aldea: celebrar no es accesorio cuando se construye comunidad.",
      {
        type: "image",
        src: "/photos/blog/rural-hackers-coworking-exterior.jpg",
        alt: "Personas con portátiles en un patio soleado rodeado de vegetación en el rural gallego",
        caption: "Coworking al aire libre: el monte como sala de reuniones.",
      },
      {
        type: "image",
        src: "/photos/blog/rural-hackers-taller-botanico.jpg",
        alt: "Taller comunitario de arte botánico alrededor de una mesa larga en Anceu",
        caption: "Arte + vecindad: residencias que dejan taller, no solo foto.",
      },
      {
        type: "h2",
        text: "IA en la aldea (con los pies en el suelo)",
      },
      "En los últimos años, la inteligencia artificial ha entrado en la conversación —y en la agenda— de Rural Hackers sin convertirse en humo.",
      {
        type: "p",
        parts: [
          "Rural IA propone inmersiones prácticas para jóvenes: probar herramientas, crear proyectos reales, aprender haciendo, con convivencia y naturaleza como parte de la experiencia. RuralGPT, impulsado con Anceu Coliving, busca situar Anceu como laboratorio de innovación en IA: residencias formativas intensivas para profesionales que sienten que la IA avanza más rápido que su capacidad de seguirle el ritmo, y que quieren integrar procesos útiles —no demos eternos— en su trabajo diario. Lo hemos compartido también en ",
          {
            type: "link",
            href: "https://www.instagram.com/p/Dd1jEO6sUUa/",
            text: "Instagram",
            external: true,
          },
          ".",
        ],
      },
      "La Voz de Galicia ha recogido esta apuesta: aforo reducido, enfoque práctico, alojamiento y formación en las Rías Baixas. Detrás están Agustín (remoto, fundador del coliving), África (cofundadora de Rural Hackers y facilitadora de proyectos europeos) y Nacho (cofundador, trayectoria en proyectos internacionales y Noites Abertas en Pontevedra).",
      "No inventamos medallas. Contamos lo que hay: ensayo, comunidad, y la convicción de que la IA también puede aprenderse lejos del ruido de la gran ciudad.",
      {
        type: "image",
        src: "/photos/blog/rural-hackers-encuentro-mural.jpg",
        alt: "Encuentro intergeneracional en la Casa do Pobo de Anceu, con mural de flores en la pared",
        caption: "De la academia local a la mesa compartida: aprender juntas.",
      },
      { type: "h2", text: "El hilo con Arroelo" },
      {
        type: "p",
        parts: [
          "¿Por qué escribimos esto desde un coworking en Pontevedra? Porque Rural Hackers no es un anexo decorativo de nuestra web: es familia de red. En ",
          {
            type: "link",
            href: "/",
            text: "Arroelo",
          },
          " tejemos proyectos que creen en la inspiración colectiva; Rural Hackers es uno de ellos, junto a ",
          {
            type: "link",
            href: "/blog/anceu-coliving-ciudad-aldea",
            text: "Anceu",
          },
          ", la ",
          {
            type: "link",
            href: "https://creativehubs.net/",
            text: "European Creative Hubs Network (ECHN)",
            external: true,
          },
          " o WordPress Pontevedra.",
        ],
      },
      {
        type: "p",
        parts: [
          "Cuando invitamos a alguien de Anceu a un ",
          {
            type: "link",
            href: "/blog/cafe-a-la-fresca-comunidad-arroelo",
            text: "Café a la fresca",
          },
          ", cuando alguien de la casa baja a un taller en la aldea, cuando el mobiliario de Michelena sigue dando servicio en la Casa do Pobo, estamos diciendo lo mismo: la tecnología tiene más sentido si ensancha el mapa, no si lo reduce a tres metros cuadrados de escritorio. Esa misma brújula recorre la ",
          {
            type: "link",
            href: "/blog/historia-espacio-arroelo-pontevedra",
            text: "historia de Espacio Arroelo",
          },
          " y el día a día del ",
          {
            type: "link",
            href: "/espacio",
            text: "espacio de coworking",
          },
          ".",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/rural-hackers-equipo-camiseta.jpg",
        alt: "Equipo con camisetas de Rural Hackers en un encuentro comunitario",
        caption: "La camiseta es declaración: hackear el rural en red.",
      },
      { type: "h2", text: "Mirar / participar" },
      {
        type: "p",
        parts: [
          "Si te interesa el impacto rural, la educación tecnológica o simplemente entender Galicia más allá del postal, sigue a ",
          {
            type: "link",
            href: "https://www.ruralhackers.com/",
            text: "Rural Hackers",
            external: true,
          },
          ", mira ",
          {
            type: "link",
            href: "https://anceu.com/",
            text: "Anceu",
            external: true,
          },
          ", o ven a ",
          {
            type: "link",
            href: "/",
            text: "Arroelo",
          },
          " y pregunta. Nosotras no tenemos todas las respuestas. Tenemos mesa, red y ganas de que el futuro no se decida solo en las capitales.",
        ],
      },
      "Porque revitalizar el rural también se escribe en commits, en talleres y en cenas compartidas. Y porque pensar en global, actuar en local, sigue siendo —para nosotras— la brújula.",
    ],
  },
  {
    slug: "coworking-pontevedra-echn-arroelo",
    title:
      "Coworking en Pontevedra: por qué Arroelo (y qué cambia formar parte de Europa)",
    seoTitle: "Coworking en Pontevedra y red ECHN",
    date: "2026-10-07",
    label: "Redes",
    image: "/photos/blog/echn-salon-comunidad.jpg",
    alt: "Comunidad reunida alrededor de la mesa del salón de Espacio Arroelo en Pontevedra",
    excerpt:
      "Por qué elegir Espacio Arroelo como coworking en Pontevedra: comunidad, salón y conexión europea vía European Creative Hubs Network desde 2017.",
    body: [
      {
        type: "p",
        parts: [
          "Si estás buscando un ",
          {
            type: "link",
            href: "/",
            text: "coworking en Pontevedra",
          },
          ", probablemente ya sabes lo que no quieres: un sótano sin luz, un open space donde nadie se saluda, o un espacio «flexible» que en la práctica es una oficina disfrazada. Lo que buscas —aunque a veces cueste nombrarlo— es un lugar donde trabajar bien y, de vez en cuando, sorprenderte.",
        ],
      },
      {
        type: "p",
        parts: [
          "Eso es lo que intentamos sostener en ",
          {
            type: "link",
            href: "https://espacioarroelo.es/",
            text: "Espacio Arroelo",
            external: true,
          },
          ".",
        ],
      },
      {
        type: "h2",
        text: "Lo que un coworking debería dar (y a menudo no da)",
      },
      {
        type: "p",
        parts: [
          "Una mesa, fibra y salas de reunión son la base. Las damos: jornada completa, fibra óptica de 1 giga, gastos incluidos, acceso amplio, salas para equipos o videollamadas con pantalla 4K. Puedes verlo en el ",
          {
            type: "link",
            href: "/espacio",
            text: "espacio",
          },
          ". Pero eso, hoy, lo puede ofrecer cualquiera que alquile metros.",
        ],
      },
      {
        type: "p",
        parts: [
          "Lo que no se improvisa es la comunidad. Entrar en Arroelo es formar parte de un grupo de personas curiosas, comprometidas y con ganas de aprender —las mismas caras que verás entre nuestras ",
          {
            type: "link",
            href: "/coworkers",
            text: "coworkers",
          },
          ". Desde el salón donde damos forma al mundo que queremos, nos guían valores concretos: alegría, refugio y red, optimismo, equipo. Suenan blandos hasta que los echas de menos en otro sitio.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/echn-cafe-mesa.jpg",
        alt: "Café y conversación alrededor de la mesa del salón en Espacio Arroelo",
        caption: "El salón no es decorado: es donde se practica la comunidad.",
      },
      {
        type: "p",
        parts: [
          "Nosotras lo aprendimos al revés: María y África fundaron el espacio precisamente porque el trabajo en soledad les pasaba factura. Más de una década después —lo contamos en la ",
          {
            type: "link",
            href: "/blog/historia-espacio-arroelo-pontevedra",
            text: "historia de Espacio Arroelo",
          },
          "— seguimos midiendo el éxito menos en ocupación y más en conversaciones que no estaban previstas en la agenda.",
        ],
      },
      { type: "h2", text: "Arroelo hoy" },
      "Estamos en el centro de Pontevedra —Cobián Roffignac, planta 3—. Somos un coworking con historia (abrimos en 2013, fuimos de las primeras en la ciudad) y con presente: mudamos de local cuando hubo que hacerlo, atravesamos pandemia, y seguimos abriendo la puerta.",
      {
        type: "p",
        parts: [
          "No te pedimos permanencia eterna. Te pedimos algo más difícil de fingir: ganas de estar. De saludar. De sumarte, cuando toque, a un ",
          {
            type: "link",
            href: "/blog/cafe-a-la-fresca-comunidad-arroelo",
            text: "Café a la fresca",
          },
          ". De entender que el puesto de al lado puede ser un recurso, no un decorado.",
        ],
      },
      {
        type: "h2",
        text: "Europa no es un logo en el footer: es ECHN",
      },
      {
        type: "p",
        parts: [
          "Desde 2017 formamos parte de la ",
          {
            type: "link",
            href: "https://creativehubs.net/",
            text: "European Creative Hubs Network (ECHN)",
            external: true,
          },
          ", una red de más de sesenta espacios creativos en Europa. También lo contamos en ",
          {
            type: "link",
            href: "https://espacioarroelo.es/echn/",
            text: "espacioarroelo.es/echn",
            external: true,
          },
          ". Gracias a ella, tejemos vínculos entre nuestra comunidad y otros lugares del continente.",
        ],
      },
      "¿Qué significa eso en la práctica para quien trabaja aquí?",
      {
        type: "image",
        src: "/photos/blog/echn-making-rooms-fachada.jpg",
        alt: "Fachada de The Making Rooms, hub creativo hermano de la red ECHN",
        caption: "Twin Hubs y visitas: Europa se aprende pisando otro salón.",
      },
      "Twin Hubs. Colaboración con otro hub a lo largo de un año, con estancias cruzadas y un evento de celebración. Aprender cómo se hace comunidad en otro contexto —y traer esa mirada a Pontevedra.",
      {
        type: "image",
        src: "/photos/blog/echn-making-rooms-taller.jpg",
        alt: "Conversación en el taller de The Making Rooms durante un intercambio ECHN",
        caption: "Hubs Alliance y visitas: el Zoom no sustituye estar en la mesa.",
      },
      "Hubs Alliance. Una semana de residencia en otro espacio creativo para personas de nuestra comunidad: explorar un entorno nuevo y forjar conexiones que el Zoom no sustituye.",
      "Bautopia. Encuentros anuales de la red para redefinir objetivos, fortalecer lazos y abrir vías de colaboración.",
      {
        type: "image",
        src: "/photos/blog/echn-making-rooms-colab.jpg",
        alt: "Colaboración manos a la obra en un makerspace de la red ECHN",
        caption: "ECHN Workshops: transferir práctica, no solo PowerPoint.",
      },
      "ECHN Workshops. Cursos intensivos de varios días para descubrir prácticas innovadoras y transferir conocimiento entre hubs… y más allá.",
      {
        type: "image",
        src: "/photos/blog/echn-twin-hubs-taller.jpg",
        alt: "Taller colaborativo en un hub creativo hermano durante un intercambio Twin Hubs",
        caption: "Diversidad alrededor de la mesa: la red se nota en las manos.",
      },
      "Transparencia, colaboración y responsabilidad son los valores que la red pone en el centro. Nosotras los reconocemos porque ya intentábamos vivirlos antes de tener el acrónimo.",
      "África ha llevado esta mirada también a foros como la Coworking Spain Conference, donde el relato no era «cómo llenar mesas», sino cómo activar cultura colaborativa. Esa coherencia —local y europea— es parte de lo que diferencia a Arroelo de un coworking genérico.",
      { type: "h2", text: "Redes hermanas, no islas" },
      {
        type: "p",
        parts: [
          "La diversidad caracteriza nuestro espacio. Creemos en la fuerza del «co» y en los ecosistemas de participación múltiple. Por eso, además de ECHN, tejemos con WordPress Pontevedra, ",
          {
            type: "link",
            href: "https://anceu.com/",
            text: "Anceu Coliving",
            external: true,
          },
          ", Shokkin International y ",
          {
            type: "link",
            href: "/blog/rural-hackers-tecnologia-impacto-rural",
            text: "Rural Hackers",
          },
          " (",
          {
            type: "link",
            href: "https://www.ruralhackers.com/",
            text: "ruralhackers.com",
            external: true,
          },
          "), entre otras. El puente ciudad-aldea lo contamos también en ",
          {
            type: "link",
            href: "/blog/anceu-coliving-ciudad-aldea",
            text: "De la ciudad a la aldea",
          },
          ".",
        ],
      },
      {
        type: "p",
        parts: [
          "Un coworking que solo mira hacia dentro envejece rápido. Uno que se abre a la aldea, a Europa y a la calle de al lado, se renueva con cada persona que entra. Parte de ese día a día aparece en ",
          {
            type: "link",
            href: "https://www.instagram.com/arroelo/",
            text: "Instagram @arroelo",
            external: true,
          },
          ".",
        ],
      },
      { type: "h2", text: "Ven a conocernos" },
      {
        type: "p",
        parts: [
          "Si trabajas por cuenta propia, en remoto, en un equipo pequeño o estás aterrizando un proyecto en Pontevedra, te esperamos. Puedes ",
          {
            type: "link",
            href: "/#contacto",
            text: "escribirnos",
          },
          " a info@espacioarroelo.com o llamar al 610 602 012. Mejor aún: pásate, toma un café y decide con el cuerpo, no solo con la comparativa de precios.",
        ],
      },
      {
        type: "p",
        parts: [
          "Porque elegir coworking en Pontevedra no debería ser solo una decisión de metro cuadrado. Debería ser la decisión de con quién quieres compartir las mañanas. Nosotras ya elegimos: con comunidad, con curiosidad y con una red que nos recuerda que Galicia también cabe en Europa —y Europa, a veces, cabe en un salón de Pontevedra. Más historias del salón, en el ",
          {
            type: "link",
            href: "/blog",
            text: "blog",
          },
          ".",
        ],
      },
    ],
  },
  {
    slug: "cafe-a-la-fresca-comunidad-arroelo",
    title:
      "Café a la fresca: el ritual que convierte un coworking en comunidad",
    seoTitle: "Café a la fresca: comunidad en Arroelo",
    date: "2026-10-07",
    label: "Ritual",
    image: "/photos/desayuno.jpg",
    alt: "Mesa de desayuno y café en el salón de Arroelo a media mañana",
    excerpt:
      "Qué es el Café a la fresca de Espacio Arroelo: mañanas de conversación, diversidad y «tercer tiempo» en el coworking de Pontevedra.",
    body: [
      {
        type: "p",
        parts: [
          "Cada mañana tomamos café en ",
          {
            type: "link",
            href: "/",
            text: "Arroelo",
          },
          ". Algunas tazas son solo eso: pausa, calor, un respiro entre correos. Otras son otra cosa. Son los Cafés a la fresca: mañanas en las que alguien de la casa —o de nuestras comunidades cercanas— viene a contar un trozo de vida, un proyecto, una duda, una historia.",
        ],
      },
      "No es una masterclass. No es un evento con acreditación. Es un espacio de libertad donde encender la curiosidad. Como ya decía Ortega y Gasset, y nosotras repetimos a menudo: «sorprenderse y extrañarse es comenzar a entender».",
      {
        type: "image",
        src: "/photos/ig-cafe-mesa.jpg",
        alt: "Tazas y mesa de café en el salón de coworking Arroelo",
        caption: "El ritual empieza en la mesa: taza, luz y conversación.",
      },
      {
        type: "h2",
        text: "Cada mañana hay café; algunos son más especiales",
      },
      {
        type: "p",
        parts: [
          "El gesto es cotidiano: a media mañana, la mesa del ",
          {
            type: "link",
            href: "/espacio",
            text: "salón de coworking",
          },
          " se llena sola. Lo que cambia es la invitación. En los Cafés a la fresca alguien trae un hilo —una trayectoria, una pregunta, un proyecto a medias— y el resto de la mesa escucha. Lo hemos contado también en ",
          {
            type: "link",
            href: "https://espacioarroelo.es/cafealafresca-2/",
            text: "espacioarroelo.es",
            external: true,
          },
          ": no buscamos audiencia, buscamos compañía.",
        ],
      },
      {
        type: "p",
        parts: [
          "Si quieres ver el día a día del salón, en ",
          {
            type: "link",
            href: "https://www.instagram.com/arroelo/",
            text: "Instagram @arroelo",
            external: true,
          },
          " aparecen muchas de estas mañanas: tazas, risas y la misma mesa que ves al entrar.",
        ],
      },
      {
        type: "h2",
        text: "Un espacio de libertad (y de diversidad real)",
      },
      "En un coworking es fácil confundir proximidad con comunidad. Compartir wifi no garantiza que alguien te mire a los ojos. Por eso el Café a la fresca importa: pone en el centro a la persona, no al puesto de trabajo.",
      {
        type: "p",
        parts: [
          "Vienen ",
          {
            type: "link",
            href: "/coworkers",
            text: "coworkers",
          },
          ". Vienen vecinas de proyectos hermanos. Vienen personas de ",
          {
            type: "link",
            href: "https://anceu.com/",
            text: "Anceu",
            external: true,
          },
          " —de la aldea o del coliving— a inspirarnos juntas una mañana en Pontevedra. La diversidad no es un eslogan en la pared: es quien se sienta a la mesa. Arte, tecnología, ",
          {
            type: "link",
            href: "https://somosimpacto.es/casos-de-exito/igualdad/the-break-atraccion-de-talento-femenino-europeo/",
            text: "emprendimiento femenino",
            external: true,
          },
          ", juventud, bienestar laboral, libros, ilustración, telecom que lleva internet al rural… La lista cambia; el gesto se repite.",
        ],
      },
      {
        type: "image",
        src: "/photos/cafe-tabla.jpg",
        alt: "Tabla de café y bollería compartida en Arroelo",
        caption: "Compartir mesa es practicar los valores: alegría, refugio y red.",
      },
      {
        type: "p",
        parts: [
          "Nuestros valores —alegría, refugio y red, optimismo, equipo— no se explican en un PowerPoint. Se practican cuando alguien escucha sin prisa y cuando otra persona se atreve a contar lo que está construyendo, aunque aún esté a medias. Esa misma idea recorre la ",
          {
            type: "link",
            href: "/blog/historia-espacio-arroelo-pontevedra",
            text: "historia de Espacio Arroelo",
          },
          ": de un mensaje en LinkedIn a una década de hogar compartido.",
        ],
      },
      {
        type: "h2",
        text: "Historias que han pasado por la mesa",
      },
      "A lo largo de los años, el Café a la fresca ha sido bitácora viva de lo que late alrededor de Arroelo. Sin pretender un inventario completo, algunas conversaciones ya forman parte de nuestra memoria colectiva:",
      {
        type: "p",
        parts: [
          "Hablamos con ",
          {
            type: "link",
            href: "https://www.linkedin.com/in/aurelio-louro-edreira-a005906",
            text: "Aurelio Louro",
            external: true,
          },
          " (",
          {
            type: "link",
            href: "https://www.aureatelecom.com/",
            text: "Áurea Telecom",
            external: true,
          },
          ") sobre cómo la conectividad puede ayudar a frenar la despoblación rural. Con ",
          {
            type: "link",
            href: "https://www.cebreiros.com/",
            text: "Javier Cebreiros",
            external: true,
          },
          ", sobre el movimiento ",
          {
            type: "link",
            href: "https://www.ensaia.com/",
            text: "Ensaia",
            external: true,
          },
          " y el talento joven desde Galicia hacia el mundo. Con ",
          {
            type: "link",
            href: "https://www.estudobonobo.com/musica-son/gonzalo-maceira/",
            text: "Gonzalo Maceiras",
            external: true,
          },
          " (",
          {
            type: "link",
            href: "https://www.estudobonobo.com/",
            text: "Estudo Bonobo",
            external: true,
          },
          ") sobre el arte como herramienta de transformación. Con ",
          {
            type: "link",
            href: "https://www.linkedin.com/in/albertofernandezcamba",
            text: "Alberto Fernández",
            external: true,
          },
          ", sobre cómo cuidar un perfil profesional sin perder la humanidad detrás del CV.",
        ],
      },
      {
        type: "p",
        parts: [
          "Viajamos —sin salir del salón— con ",
          {
            type: "link",
            href: "https://gl.wikipedia.org/wiki/Ant%C3%B3n_Sobral",
            text: "Antón Sobral",
            external: true,
          },
          ", de Estrasburgo a ",
          {
            type: "link",
            href: "https://www.pontevedraviva.com/es/cultura/pontevedra-faro-larino-homenaje-maribel-longueira_520750_102.html",
            text: "Faro Lariño",
            external: true,
          },
          ", pasando por Brasil, a través del arte. ",
          {
            type: "link",
            href: "https://teresapajares.com/",
            text: "Teresa Pajares",
            external: true,
          },
          " nos contó su proceso artístico con materiales reciclados; ",
          {
            type: "link",
            href: "https://escueladeescritores.com/lecturas/los-erasmus/",
            text: "María Cabrera",
            external: true,
          },
          ", su libro ",
          {
            type: "link",
            href: "https://www.casadellibro.com/libro-los-erasmus/9788412550177/13585078",
            text: "Los Erasmus",
            external: true,
          },
          " y lo que aquel ",
          {
            type: "link",
            href: "https://erasmus-plus.ec.europa.eu/es",
            text: "programa europeo",
            external: true,
          },
          " hizo en tantas biografías. ",
          {
            type: "link",
            href: "https://escuelaminuscula.com/la-escuela/",
            text: "Kike de la Rubia",
            external: true,
          },
          " y ",
          {
            type: "link",
            href: "https://neresino.com/",
            text: "Nerea Pérez",
            external: true,
          },
          " (",
          {
            type: "link",
            href: "https://escuelaminuscula.com/",
            text: "Escuela Minúscula",
            external: true,
          },
          ") nos acercaron a la ilustración desde lo genuino. ",
          {
            type: "link",
            href: "https://www.linkedin.com/in/cristinapangarcia",
            text: "Cristina Pan",
            external: true,
          },
          " habló del impacto de ",
          {
            type: "link",
            href: "https://somosimpacto.es/casos-de-exito/igualdad/the-break-atraccion-de-talento-femenino-europeo/",
            text: "The Break",
            external: true,
          },
          ", programa de emprendimiento femenino. Se Rial desplegó una vida de película: panaderías, teatros, pasacalles, activismo. Patricia Cuña trajo los retos de la juventud desde ",
          {
            type: "link",
            href: "https://www.aguarda.es/servizos-municipais/xuventude-omix/",
            text: "A Guarda",
            external: true,
          },
          ". ",
          {
            type: "link",
            href: "https://balanceandcore.com/about/",
            text: "Reni Horvath",
            external: true,
          },
          " nos hizo poner el cuerpo en técnicas sencillas de bienestar laboral.",
        ],
      },
      {
        type: "image",
        src: "/photos/cafe-foto.jpg",
        alt: "Café servido en la mesa del salón de Arroelo",
        caption: "Cada café deja un poso distinto: lo que se acumula es tejido.",
      },
      "Cada café deja un poso distinto. Lo que se acumula no es contenido para redes: es tejido.",
      {
        type: "h2",
        text: "El «tercer tiempo»: ni solo trabajo ni solo ocio",
      },
      "Hay un tiempo del trabajo productivo y un tiempo del descanso. Nosotras cuidamos un tercero: el de encontrarse sin agenda cerrada, el de aprender de quien no es «de tu sector», el de descubrir que una idea nace cuando menos la buscas.",
      {
        type: "p",
        parts: [
          "Ese tercer tiempo es también una forma de economía: la del conocimiento compartido. En Arroelo creemos en la inteligencia colectiva no como metáfora bonita, sino como práctica cotidiana. Un Café a la fresca puede abrir una colaboración, un viaje ",
          {
            type: "link",
            href: "https://erasmus-plus.ec.europa.eu/es",
            text: "Erasmus",
            external: true,
          },
          ", una visita a ",
          {
            type: "link",
            href: "https://anceu.com/",
            text: "Anceu",
            external: true,
          },
          " o, simplemente, la sensación de no estar sola con tu proyecto. Lo mismo teje ",
          {
            type: "link",
            href: "https://www.ruralhackers.com/",
            text: "Rural Hackers",
            external: true,
          },
          " en el rural y la ",
          {
            type: "link",
            href: "https://creativehubs.net/",
            text: "European Creative Hubs Network (ECHN)",
            external: true,
          },
          " entre hubs creativos de Europa: red real, no solo enlaces en un pie de página.",
        ],
      },
      {
        type: "p",
        parts: [
          "Por eso lo defendemos incluso en semanas ajetreadas. Porque un coworking sin rituales de escucha acaba siendo una oficina con más mesas. Y nosotras no abrimos Arroelo para eso —como contamos en ",
          {
            type: "link",
            href: "https://espacioarroelo.es/",
            text: "espacioarroelo.es",
            external: true,
          },
          " y en este ",
          {
            type: "link",
            href: "/blog",
            text: "blog",
          },
          ".",
        ],
      },
      {
        type: "image",
        src: "/photos/companeras.jpg",
        alt: "Compañeras de Arroelo conversando alrededor de la mesa",
        caption: "Comunidad en la práctica: escuchar sin prisa, contar sin pitch.",
      },
      { type: "h2", text: "Cómo participar" },
      "Si formas parte de la comunidad —o te gustaría—, el Café a la fresca es una de las puertas más honestas para entrar. A veces escuchas. A veces cuentas. A veces solo estás, y eso también cuenta.",
      {
        type: "p",
        parts: [
          "Si trabajas en remoto, si empiezas un proyecto, si llegas nueva a Pontevedra o si llevas años en la ciudad pero echas de menos conversación con sentido: ",
          {
            type: "link",
            href: "/#contacto",
            text: "escríbenos",
          },
          " o pásate. Mira la ",
          {
            type: "link",
            href: "/#tarifa",
            text: "tarifa",
          },
          ", conoce el ",
          {
            type: "link",
            href: "/espacio",
            text: "espacio",
          },
          " o lee cómo empezó todo en nuestra ",
          {
            type: "link",
            href: "/blog/historia-espacio-arroelo-pontevedra",
            text: "historia",
          },
          ". La mesa está en el salón. El café, casi siempre, también.",
        ],
      },
      "Porque sorprenderse juntas sigue siendo, para nosotras, la mejor manera de empezar el día.",
    ],
  },
  {
    slug: "anceu-coliving-ciudad-aldea",
    title: "De la ciudad a la aldea: el puente entre Arroelo y Anceu",
    seoTitle: "De Pontevedra a Anceu: ciudad y aldea",
    date: "2026-10-07",
    label: "Puentes",
    image: "/photos/blog/anceu-rural-hackers.jpg",
    alt: "Dos personas en Anceu revisan un material de Rural Hackers al aire libre",
    excerpt:
      "Cómo Espacio Arroelo tiende puentes con Anceu Coliving: del coworking en Pontevedra a la revitalización de una aldea de menos de 100 habitantes.",
    body: [
      {
        type: "p",
        parts: [
          "Hay quien imagina el coworking como un fenómeno exclusivamente urbano: centros, terrazas, fibra y café de especialidad. Nosotras vivimos en Pontevedra —y la queremos— pero hace años entendimos que nuestra comunidad no termina en el casco histórico. Termina, o mejor: continúa, media hora más arriba, en una aldea de menos de cien habitantes llamada ",
          {
            type: "link",
            href: "https://anceu.com/",
            text: "Anceu",
            external: true,
          },
          ".",
        ],
      },
      { type: "h2", text: "Media hora, otro ritmo: qué es Anceu" },
      {
        type: "p",
        parts: [
          "Anceu está en Ponte Caldelas, a unos treinta minutos de Pontevedra. Allí el tiempo se organiza distinto: el monte, la vecindad, el silencio que no es vacío. Desde ",
          {
            type: "link",
            href: "/",
            text: "Arroelo",
          },
          " tendemos puentes entre lo rural y lo urbano, entre la naturaleza que nos conecta y una ciudad que, a su manera, también demuestra que otras formas de habitar son posibles.",
        ],
      },
      {
        type: "p",
        parts: [
          "No vamos a Anceu «de excursión». Vamos porque formamos familia con quienes viven y trabajan allí: ",
          {
            type: "link",
            href: "https://anceu.com/",
            text: "Anceu Coliving",
            external: true,
          },
          ", ",
          {
            type: "link",
            href: "https://www.ruralhackers.com/",
            text: "Rural Hackers",
            external: true,
          },
          " y la Casa do Pobo.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/anceu-comunidad.jpg",
        alt: "Tres personas sonríen abrazadas frente a un muro de piedra en Anceu",
        caption: "Comunidad en la aldea: el puente se mide en caras conocidas.",
      },
      {
        type: "h2",
        text: "Desde 2019: comprometernos con el desarrollo rural",
      },
      {
        type: "p",
        parts: [
          "Desde 2019 nos hemos comprometido activamente con el desarrollo rural de ese entorno. África Rodríguez lo resume en su trayectoria pública: junto a Agustín Jamardo, construir puentes entre el mundo rural y el urbano desde el coliving de Anceu; vivir y generar comunidad internacional mientras se impulsan proyectos que ayuden a revitalizar la aldea. Esa misma mirada recorre la ",
          {
            type: "link",
            href: "/blog/historia-espacio-arroelo-pontevedra",
            text: "historia de Espacio Arroelo",
          },
          ": comunidad primero, mesas después.",
        ],
      },
      "Ese compromiso nació de una intuición sencilla y rebelde: la despoblación no se frena solo con discursos. Se frena —o al menos se disputa— con presencia, con fibra, con personas que se quedan a cenar y con proyectos que sirven a quien ya vivía allí antes de que llegara la palabra coliving.",
      {
        type: "h2",
        text: "Anceu Coliving: no es un hotel (julio 2020, remoto + vecindad)",
      },
      {
        type: "p",
        parts: [
          {
            type: "link",
            href: "https://anceu.com/",
            text: "Anceu Coliving",
            external: true,
          },
          " abrió en julio de 2020. No es un hotel. Es un lugar donde personas de todo el mundo que trabajan en remoto viven en la naturaleza y, a la vez, contribuyen a la revitalización de la aldea. Conviven quienes llegan por una temporada con vecinas y vecinos de toda la vida. Ni una mitad funciona sin la otra.",
        ],
      },
      "En la práctica eso significa cocina compartida, cenas colectivas varios días a la semana, coworking con fibra de alta velocidad y muchas oportunidades de encontrarse. Significa también entender que el impacto local no es un extra para el brochure: es la condición de posibilidad del proyecto.",
      {
        type: "p",
        parts: [
          "En conversaciones recogidas por la ",
          {
            type: "link",
            href: "https://creativehubs.net/",
            text: "European Creative Hubs Network (ECHN)",
            external: true,
          },
          ", el equipo de Anceu ha explicado iniciativas como la Rural Hackers Academy —formación gratuita en tecnología e inglés para gente del entorno—, residencias de un mes para desarrollar proyectos de impacto, o hackathones donde participantes europeos construyen webs para ONG locales.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/anceu-cena-compartida.jpg",
        alt: "Cena compartida en el coliving: platos, conversación y comunidad",
        caption: "Cenas colectivas: el impacto local se cocina juntos.",
      },
      "Nosotras, desde Pontevedra, no pretendemos apropiarnos de ese relato. Lo acompañamos. Lo celebramos. Lo cruzamos con el nuestro.",
      {
        type: "h2",
        text: "Casa do Pobo y el mobiliario que viajó con nosotras (mudanza 2023)",
      },
      {
        type: "p",
        parts: [
          "Cuando en 2023 cambiamos de localización en la ciudad, gran parte de nuestro Arroelo encontró nueva vida en la Casa do Pobo de Anceu. Donamos mobiliario para crear un espacio que, como el nuestro en Pontevedra, dé cobijo creativo también en el rural. Lo contamos también en la ",
          {
            type: "link",
            href: "/blog/historia-espacio-arroelo-pontevedra",
            text: "historia del coworking",
          },
          ": los objetos también pueden tejer red.",
        ],
      },
      "La Casa do Pobo es el espacio cultural y social de la vecindad: el lugar donde se fomenta la vida comunitaria de la aldea. Que nuestras mesas y sillas sigan sirviendo allí no es nostalgia: es coherencia.",
      {
        type: "image",
        src: "/photos/blog/casa-pobo-mural.jpg",
        alt: "Charla comunitaria en la Casa do Pobo de Anceu, con mural de flores en la pared",
        caption: "Casa do Pobo: cultura, vecindad y murales que cuentan la aldea.",
      },
      {
        type: "image",
        src: "/photos/blog/casa-pobo-taller.jpg",
        alt: "Taller o presentación en la Casa do Pobo con público sentado",
        caption: "Talleres y encuentros: el rural también es laboratorio.",
      },
      { type: "h2", text: "Ida y vuelta: cafés, coworkings compartidos, actividades en la aldea" },
      "El puente se recorre en las dos direcciones.",
      {
        type: "p",
        parts: [
          "Organizamos ",
          {
            type: "link",
            href: "/blog/cafe-a-la-fresca-comunidad-arroelo",
            text: "Cafés a la fresca",
          },
          " con personas de la aldea o de la comunidad internacional del coliving, para tomar café e inspirarnos juntas en nuestras mañanas de Pontevedra. Participamos en actividades en Anceu: arte, creatividad, tecnología, lo que la aldea propone cuando quiere mirar al futuro sin renunciar a lo suyo. Y cuidamos una idea práctica y generosa: que las personas de Arroelo y de Anceu puedan inspirarse entre lo rural y lo urbano, usando los espacios de trabajo como extensión natural de la misma comunidad.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/casa-pobo-vecindad.jpg",
        alt: "Vecinas y vecinos reunidos en la Casa do Pobo de Anceu",
        caption: "Ida y vuelta: la vecindad también viene a la mesa.",
      },
      {
        type: "p",
        parts: [
          "Trabajar un día en el ",
          {
            type: "link",
            href: "/espacio",
            text: "espacio de coworking en el centro",
          },
          " y otro con vistas al monte no es un lujo estético. Es una forma de entender Galicia —y el trabajo remoto— con más matices. A veces ese día a día aparece en ",
          {
            type: "link",
            href: "https://www.instagram.com/arroelo/",
            text: "Instagram @arroelo",
            external: true,
          },
          ": la misma comunidad, otro paisaje.",
        ],
      },
      { type: "h2", text: "Por qué este puente importa" },
      "Porque la ciudad necesita oxígeno. Porque el rural necesita vínculos que no sean extractivos. Porque una década de coworking en Pontevedra nos enseñó que las mejores redes son las que no se quedan en el mismo código postal.",
      {
        type: "p",
        parts: [
          "Si buscas un coliving rural en Galicia, Anceu tiene su propia puerta (y su propia voz) en ",
          {
            type: "link",
            href: "https://anceu.com/",
            text: "anceu.com",
            external: true,
          },
          ". Si buscas un coworking en Pontevedra con mirada amplia, ",
          {
            type: "link",
            href: "/",
            text: "aquí estamos",
          },
          ". Y si lo que buscas es, simplemente, no elegir entre ciudad y aldea como si fueran bandos: bienvenida al puente. Nosotras lo cruzamos a menudo —con ",
          {
            type: "link",
            href: "https://www.ruralhackers.com/",
            text: "Rural Hackers",
            external: true,
          },
          ", con la ",
          {
            type: "link",
            href: "https://creativehubs.net/",
            text: "ECHN",
            external: true,
          },
          " y con lo que sigue vivo en ",
          {
            type: "link",
            href: "https://espacioarroelo.es/",
            text: "espacioarroelo.es",
            external: true,
          },
          ". Casi siempre volvemos con una historia nueva.",
        ],
      },
    ],
  },
  {
    slug: "historia-espacio-arroelo-pontevedra",
    title:
      "De un mensaje en LinkedIn a un hogar compartido: la historia de Espacio Arroelo",
    seoTitle: "De LinkedIn a coworking en Pontevedra",
    date: "2026-10-06",
    label: "Historia",
    image: "/photos/nosotras-prensa.jpg",
    alt: "África Rodríguez y María Pierres, fundadoras de Espacio Arroelo, en el coworking de Pontevedra",
    excerpt:
      "Cómo África Rodríguez y María Pierres fundaron Espacio Arroelo en 2013: de un encuentro en LinkedIn a más de una década de coworking en Pontevedra.",
    body: [
      "Hay historias de coworking que empiezan con un plan de negocio. La nuestra empezó con un mensaje.",
      "En 2012, las vidas de María Pierres y África Rodríguez se cruzaron en LinkedIn. María, arquitecta; África, consultora. Dos autónomas en Pontevedra que, cada una a su manera, habían descubierto lo mismo: trabajar en casa puede ser práctico, pero también es un callejón sin red. «Tenía la sensación de que desde mi ordenador no iba a conocer a nadie», contaba África en aquellos primeros meses. María había dejado su propia oficina y sentía la misma falta: un lugar donde el trabajo no fuera solo productividad, sino compañía.",
      "En menos de seis meses pasamos de la conversación a la acción. Si en la ciudad no existía el espacio que necesitábamos, lo íbamos a crear.",
      {
        type: "image",
        src: "/photos/blog/fundadoras-pintando-muro.jpg",
        alt: "África Rodríguez y María Pierres, fundadoras de Espacio Arroelo, pintan en la pared la frase «el mundo pertenece a quienes se atreven»",
        caption: "Manos a la obra: pintar la casa que queríamos habitar.",
      },
      {
        type: "h2",
        text: "Abrir puertas en 2013: más que mesas e internet",
      },
      {
        type: "p",
        parts: [
          "En abril de 2013, ",
          {
            type: "link",
            href: "https://elpais.com/ccaa/2013/04/17/galicia/1366220334_717953.html",
            text: "El País",
            external: true,
          },
          " hablaba de cómo «el coworking se instalaba en Galicia» y nos presentaba como un espacio pionero en Pontevedra. Abrimos en la tercera planta del número 11 de la calle Michelena: salas, puestos de trabajo, internet, office… y, sobre todo, la intención explícita de generar sinergias entre profesionales que, en principio, no tenían por qué cruzarse.",
        ],
      },
      "Desde el principio huyimos de la idea de que un coworking es solo un espacio físico. Queríamos que quienes entraran se comprometieran con unas normas básicas de convivencia y, a la vez, con algo más intangible: la posibilidad de que el proyecto de al lado alimentara el tuyo. En aquellas salas también cabía el arte: exposiciones, cursos, conversaciones que no cabían en un Excel.",
      "El Diario de Pontevedra, un año después, ya hablaba de un grupo que había pasado de cinco personas iniciales a más de treinta asociadas, y de una sede que se expandía por la planta del edificio. Arroelo —con ese eco del «hai que roelo» pontevedrés— empezaba a ser, para mucha gente, sinónimo de otra forma de trabajar en la ciudad.",
      {
        type: "image",
        src: "/photos/blog/coworking-mesa-slack.jpg",
        alt: "Coworkers de Espacio Arroelo trabajando con portátiles en mesa compartida; en pantalla, el Slack de la comunidad",
        caption:
          "Michelena, primeros años: portátiles, Slack y la costumbre de compartir mesa.",
      },
      { type: "h2", text: "Crecer como familia, no como oficina" },
      "Con el tiempo dejamos de contar solo mesas. Empezamos a contar personas.",
      {
        type: "p",
        parts: [
          "En 2019, ",
          {
            type: "link",
            href: "https://www.farodevigo.es/pontevedra/2019/11/03/trabajamos-juntos-15496685.html",
            text: "Faro de Vigo",
            external: true,
          },
          " recogía nuestra sorpresa al mirar atrás: habíamos empezado sin imaginar que el proyecto iba a durar tanto ni a generar una familia tan grande. Alrededor de setenta personas formaban ya parte de esa constelación —«aunque seguro que somos más», decía África—. En una década, unas doscientas emprendedoras y emprendedores pasaron por Arroelo. Algunas se quedaron años; otras hicieron escala y siguieron camino. Todas dejaron huella.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/taller-circulo-comunidad.jpg",
        alt: "Taller comunitario en círculo en el coworking Arroelo de Pontevedra, con mural y pizarra al fondo",
        caption: "Talleres, círculos y proyectos compartidos: así creció la casa.",
      },
      {
        type: "p",
        parts: [
          "Lo que nos ha sostenido no ha sido un modelo de franquicia ni una fórmula mágica. Ha sido la inteligencia colectiva: compartir conocimiento, lanzar proyectos juntas, aprovechar que en el mismo pasillo pueden convivir derecho, arquitectura, diseño, tecnología o educación. África pasó de freelance del sector legal a acompañar a empresas en la creación de comunidades. María aportó mirada de espacio y de cuidado del lugar. Nosotras dos aprendimos, una y otra vez, que el «co» de coworking no es un prefijo de marketing: es una práctica diaria. Hoy esa ",
          {
            type: "link",
            href: "/coworkers",
            text: "familia coworker",
          },
          " sigue siendo el centro de todo.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/celebracion-comunidad-mesa.jpg",
        alt: "Comunidad de Espacio Arroelo celebrando alrededor de una mesa con empanada gallega en Pontevedra",
        caption: "La familia coworker: más de doscientas personas en una década.",
      },
      { type: "h2", text: "Crisis, pandemia y mudanza: seguir siendo Arroelo" },
      "Ninguna década es una línea recta. Hubo pandemia. Hubo incertidumbre. Y hubo, en 2022, la noticia de que el edificio de Michelena —nuestro primer hogar— enfrentaba un proceso de derribo. La Voz de Galicia lo contó con crudeza: inquilinas que tenían que irse de un inmueble emblemático. Nosotras teníamos claro que Arroelo iba a seguir. «Bienvenida incertidumbre», dijimos entonces, con más miedo del que admitimos y más confianza de la que el momento merecía.",
      {
        type: "p",
        parts: [
          "En febrero de 2023, Onda Cero se hacía eco de que la comunidad remataba la mudanza y estrenaba local y salón. Hoy estamos en Cobián Roffignac, planta 3, en el centro de Pontevedra: mismo espíritu, otra casa. Parte del mobiliario de Michelena encontró nueva vida en la Casa do Pobo de ",
          {
            type: "link",
            href: "https://anceu.com/",
            text: "Anceu",
            external: true,
          },
          ", para que lo que había sido refugio en la ciudad también diera cobijo creativo en el rural. Esa continuidad —ciudad y aldea, antes y ahora— dice mucho de cómo entendemos el espacio: no como propiedad, sino como cuidado compartido.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/equipo-selfie-perro.jpg",
        alt: "Selfie de coworkers de Espacio Arroelo con la mascota del coworking en Michelena, Pontevedra",
        caption: "Misma familia, otra casa: el espíritu viajó con nosotras.",
      },
      { type: "h2", text: "Lo que nos sostiene hoy" },
      {
        type: "p",
        parts: [
          "Más de diez años después, ",
          {
            type: "link",
            href: "/",
            text: "Arroelo",
          },
          " sigue siendo el hogar que construimos: un lugar donde la curiosidad se alimenta, las conexiones se tejen y la libertad y la creatividad se celebran. Un refugio para quienes buscan más que un sitio donde abrir el portátil: un ",
          {
            type: "link",
            href: "/espacio",
            text: "espacio de coworking en Pontevedra",
          },
          " donde cultivar una economía social y sostenible. Seguimos tejiendo puentes con ",
          {
            type: "link",
            href: "https://www.ruralhackers.com/",
            text: "Rural Hackers",
            external: true,
          },
          " y con la ",
          {
            type: "link",
            href: "https://creativehubs.net/",
            text: "European Creative Hubs Network (ECHN)",
            external: true,
          },
          ", y parte de nuestra historia sigue viva en ",
          {
            type: "link",
            href: "https://espacioarroelo.es/",
            text: "espacioarroelo.es",
            external: true,
          },
          ".",
        ],
      },
      {
        type: "p",
        parts: [
          "Si estás leyendo esto porque buscas un coworking en Pontevedra, o porque te preguntas cómo nace una comunidad, te invitamos a lo más sencillo: ",
          {
            type: "link",
            href: "/#contacto",
            text: "ven a conocernos",
          },
          ". Mira la ",
          {
            type: "link",
            href: "/#tarifa",
            text: "tarifa",
          },
          ", pasea por el ",
          {
            type: "link",
            href: "/blog",
            text: "blog",
          },
          " o escribe cuando quieras. La historia no está cerrada. Se escribe cada mañana, con café, con proyectos y con gente que decide no trabajar sola.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
