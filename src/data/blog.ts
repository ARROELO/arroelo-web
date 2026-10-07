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
          " —de la aldea o del coliving— a inspirarnos juntas una mañana en Pontevedra. La diversidad no es un eslogan en la pared: es quien se sienta a la mesa. Arte, tecnología, emprendimiento femenino, juventud, bienestar laboral, libros, ilustración, telecom que lleva internet al rural… La lista cambia; el gesto se repite.",
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
      "Hablamos con Aurelio Louro (Áurea Telecom) sobre cómo la conectividad puede ayudar a frenar la despoblación rural. Con Javier Cebreiros, sobre el movimiento Ensaia y el talento joven desde Galicia hacia el mundo. Con Gonzalo Maceiras (Estudo Bonobo) sobre el arte como herramienta de transformación. Con Alberto Fernández, sobre cómo cuidar un perfil profesional sin perder la humanidad detrás del CV.",
      "Viajamos —sin salir del salón— con Antón Sobral, de Estrasburgo a Faro Lariño, pasando por Brasil, a través del arte. Teresa Pajares nos contó su proceso artístico con materiales reciclados; María Cabrera, su libro Los Erasmus y lo que aquel programa europeo hizo en tantas biografías. Kike de la Rubia y Nerea Pérez (Escuela Minúscula) nos acercaron a la ilustración desde lo genuino. Cristina Pan habló del impacto de The Break, programa de emprendimiento femenino. Se Rial desplegó una vida de película: panaderías, teatros, pasacalles, activismo. Patricia Cuña trajo los retos de la juventud desde A Guarda. Reni Horvath nos hizo poner el cuerpo en técnicas sencillas de bienestar laboral.",
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
          "Ese tercer tiempo es también una forma de economía: la del conocimiento compartido. En Arroelo creemos en la inteligencia colectiva no como metáfora bonita, sino como práctica cotidiana. Un Café a la fresca puede abrir una colaboración, un viaje Erasmus, una visita a Anceu o, simplemente, la sensación de no estar sola con tu proyecto. Lo mismo teje ",
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
  {
    slug: "la-mesa-del-salon",
    title: "La mesa del salón",
    date: "2026-02-28",
    label: "Comunidad",
    image: "/photos/ig-mesa-comunidad.jpg",
    alt: "Mesa larga con gente trabajando y charlando en el salón de Arroelo",
    excerpt:
      "La mesa de madera es el corazón del espacio: foco compartido, pausas largas y risas.",
    body: [
      "La mesa larga concentra el salón. Aquí se trabaja en silencio, se comparte pantalla y se interrumpe el día con una pregunta honesta.",
      "Más de una década tejiendo redes en Pontevedra nos ha enseñado que lo mejor ocurre entre tareas: una recomendación, un proyecto nuevo, una invitación.",
      "No alquilamos sillas. Tejemos redes — y la mesa es donde empieza casi todo.",
    ],
  },
  {
    slug: "luz-y-foco",
    title: "Luz y foco",
    date: "2026-02-14",
    label: "Espacio",
    image: "/photos/coworker-luz.jpg",
    alt: "Coworker en su puesto con luz natural de la ventana y plantas",
    excerpt:
      "Ventanas altas, madera y luz natural: un salón pensado para concentrarse sin encerrarse.",
    body: [
      "El salón mira a la ciudad con ventanas generosas. La luz entra en diagonal, las plantas marcan el ritmo y cada puesto tiene su sitio.",
      "Trabajar aquí no es estar aislada: es tener foco cuando lo necesitas y levantar la vista cuando el día lo pide.",
      "Fibra de un giga, acceso 24 horas y un entorno que cuida la cabeza — sin open space genérico ni ruido de fondo constante.",
    ],
  },
  {
    slug: "encuentros",
    title: "Encuentros que importan",
    date: "2026-01-22",
    label: "Comunidad",
    image: "/photos/encuentro-mesa.jpg",
    alt: "Grupo de coworkers alrededor de la mesa del salón",
    excerpt:
      "Visitas, charlas y proyectos que nacen de estar en el mismo salón, no de un evento programado.",
    body: [
      "En Arroelo las visitas no son excepción: son parte del día. Alguien trae un proyecto, otra comparte un contacto, otra simplemente escucha.",
      "No hay agenda de networking ni pitch obligatorio. Hay presencia — y eso, con el tiempo, genera confianza.",
      "La familia coworker crece así: despacio, con caras conocidas y mesa para quien quiera sumarse.",
    ],
  },
  {
    slug: "así-es-arroelo",
    title: "Así es Arroelo",
    date: "2026-01-08",
    label: "Espacio",
    image: "/photos/salon-overview.jpg",
    alt: "Vista general del interior del salón de Arroelo con luz natural",
    excerpt:
      "Un espacio abierto en el centro de Pontevedra: madera, luz y mesa compartida.",
    body: [
      "Arroelo ocupa un salón en pleno centro de Pontevedra. Madera, luz natural y una distribución que mezcla mesa común, puestos individuales y salas de reunión.",
      "Ni casa, ni oficina: el tercer tiempo donde suceden cosas. Foco cuando hace falta, pausa cuando el cuerpo lo pide.",
      "Primera semana sin coste, sin permanencia. Ven a conocernos.",
    ],
  },
  {
    slug: "pontevedra-centro",
    title: "En el centro de Pontevedra",
    date: "2025-12-18",
    label: "Ciudad",
    image: "/photos/pontevedra-alameda.jpg",
    alt: "Alameda de Pontevedra, cerca del espacio Arroelo",
    excerpt:
      "A dos minutos de la Alameda: coworking en el corazón de la ciudad.",
    body: [
      "Arroelo está en el centro de Pontevedra, a pocos minutos de la Alameda. Cafés, tiendas y la vida de la ciudad a la vuelta de la esquina.",
      "Trabajar aquí es estar conectada a la ciudad sin renunciar al salón: un lugar propio donde volver cada mañana.",
      "Si buscas un espacio en Galicia con alma de barrio y red real, la puerta está abierta.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
