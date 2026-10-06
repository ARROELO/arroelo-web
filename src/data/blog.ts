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
  | { type: "p"; parts: BlogInline[] };

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
    slug: "cafe-a-la-fresca",
    title: "Café a la fresca",
    date: "2026-03-12",
    label: "Ritual",
    image: "/photos/croissants-charla.jpg",
    alt: "Tazas de café, croissants y charla en la mesa del salón",
    excerpt:
      "Cada día a las 11:30 paramos. No es networking: es pausa, conversación y perspectiva.",
    body: [
      "En Arroelo el reloj marca las 11:30 y la mesa se llena sola. Tazas, bollería, alguna visita inesperada y la conversación que no estaba en la agenda.",
      "No lo llamamos networking. Es el tercer tiempo: ni casa, ni oficina — un espacio donde las ideas cruzan sin presentaciones ni tarjetas.",
      "Si pasas por Pontevedra un martes o un jueves, la puerta está abierta. Ven a probar el ritual.",
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
