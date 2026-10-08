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
  | {
      type: "image";
      src: string;
      alt: string;
      /** Plain text, or inline parts (same link pattern as body paragraphs). */
      caption?: string | BlogInline[];
      /** Default cover. Use contain for tall portraits/group photos so heads and mural text stay visible. */
      fit?: "cover" | "contain";
      /** object-position hint (default center). Useful with cover or contain. */
      position?: "center" | "top";
    }
  | {
      type: "video";
      /** YouTube video id (use with youtube-nocookie embed). */
      youtubeId?: string;
      /** Vimeo video id (numeric). Mutually exclusive with youtubeId in practice. */
      vimeoId?: string;
      /** Start playback at this second (YouTube embed `start` only). */
      start?: number;
      caption?: string;
      title?: string;
    };

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle?: string;
  date: string;
  label: string;
  image: string;
  alt: string;
  /** Featured/card crop. Default cover. Use contain for portraits that must stay whole. */
  imageFit?: "cover" | "contain";
  /** Featured/card object-position (default center). Use top when cover would chop heads. */
  imagePosition?: "center" | "top";
  excerpt: string;
  body: BlogBodyBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "colabora-2015-espacio-arroelo",
    title:
      "CO-Labora 2015: el germen de buscar empleo en compañía en Arroelo",
    seoTitle:
      "CO-Labora 2015: el germen de buscar empleo en compañía en Arroelo",
    date: "2026-10-07",
    label: "Comunidad",
    image: "/photos/blog/colabora-slide1.png",
    alt: "Papel kraft en la pared de Espacio Arroelo con #COLABORA 2015, el lema «Compartir es tener» y nombres de participantes escritos a boli",
    excerpt:
      "Cómo Espacio Arroelo lanzó CO-Labora 2015: programa gratuito de empleo para 15 personas, coaching y el germen del Programa Arela municipal en Pontevedra.",
    body: [
      {
        type: "p",
        parts: [
          {
            type: "link",
            href: "/",
            text: "Espacio Arroelo",
          },
          " abrió en ",
          {
            type: "link",
            href: "/blog/historia-espacio-arroelo-pontevedra",
            text: "2013",
          },
          ", pero el programa de empleo colaborativo que impulsamos desde el coworking se llamó ",
          {
            type: "link",
            href: "https://web.archive.org/web/20150130005719/http://espacioarroelo.es/actividades/co-labora-2015/",
            text: "CO-Labora 2015",
            external: true,
          },
          ". Ese fue el germen de una forma de acompañar el desempleo en compañía.",
        ],
      },
      {
        type: "p",
        parts: [
          "No era un curso pasivo. Era abrir el hogar de Michelena a quince personas en búsqueda activa de empleo, con coaching, mentores voluntarios y la red del coworking.",
        ],
      },
      {
        type: "h2",
        text: "Primero el coworking (2013), luego el programa (2015)",
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
          " nos presentaba como coworking pionero en Pontevedra. María Pierres y África Rodríguez llevaban poco más de un año y medio cuando escribimos que el espíritu «co» nos empujaba a involucrar a agentes sociales, políticos y ciudadanos —y a demostrar que se podía salir de la ruta que otros daban por «única».",
        ],
      },
      {
        type: "p",
        parts: [
          "Así nació Colabora 2015: como respuesta de una comunidad joven a la crisis, al paro y a la soledad del desempleado. El ",
          {
            type: "link",
            href: "https://www.farodevigo.es/pontevedra/2014/10/21/abierto-plazo-inscripcion-participar-programa-17091749.html",
            text: "Faro de Vigo (21 de octubre de 2014)",
            external: true,
          },
          " anunció el plazo de inscripción de CO-Labora 2015: gratuito, con participación activa y lazos solidarios de apoyo mutuo. La concejala María Biempica se reunió con África, María y la colaboradora Paula Lage para conocer el plan; la inscripción cerraba el 28 de noviembre y el arranque estaba previsto en enero.",
        ],
      },
      {
        type: "h2",
        text: "Qué era CO-Labora 2015",
      },
      {
        type: "p",
        parts: [
          "La definición oficial cabía en un párrafo: programa de empleo gratuito en el que los participantes se ayudan a buscar oportunidades laborales. Objetivo: facilitar la inserción mediante participación activa y trabajo cooperativo. Buscábamos a 15 personas dinámicas y solidarias, en búsqueda activa, sin límite de edad.",
        ],
      },
      {
        type: "p",
        parts: ["Los pilares eran claros:"],
      },
      {
        type: "p",
        parts: [
          "Coaching semanal (sesiones individuales y grupales) con plan de acción personal: autoestima, confianza, resiliencia, comunicación, currículum, entrevistas, marca personal. Creación de una comunidad de profesionales que colaboran en la búsqueda de empleo o autoempleo. Difusión en redes y medios. Formación transversal. Y un marco decisivo: desarrollar el programa ",
          {
            type: "link",
            href: "/espacio",
            text: "dentro de un coworking",
          },
          ", no en un aula aislada. Quien entraba no se unía solo a quince compañeros: se sumaba al entorno de quienes ya estaban cambiando la oficina por colaboración.",
        ],
      },
      {
        type: "p",
        parts: [
          "La iniciativa salió de nuestros coworkers y colaboradores bajo la coordinación de la coach ejecutiva Raquel Pedrouso. Duración: seis meses, todos los viernes, del 23 de enero al 31 de julio de 2015. Financiación: «el único activo denominado implicación personal», sin ayuda económica externa. Dar y recibir.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/colabora-slide1.png",
        alt: "Papel kraft en la pared con #COLABORA 2015, «Compartir es tener» y nombres de participantes escritos a boli",
        caption: "Papel de sesión del programa.",
      },
      {
        type: "image",
        src: "/photos/blog/colabora-slide2.png",
        alt: "Muro de post-its de Colabora 2015: iniciativas, comunidad, formación y «queremos empezar a hacer»",
        caption: "Brainstorming de iniciativas del grupo.",
      },
      {
        type: "h2",
        text: "Seis meses en el hogar Michelena",
      },
      {
        type: "p",
        parts: [
          "Cuando, en enero de 2016, el colectivo Colabora15 nos propuso como candidato a los Premios Cidade de Pontevedra (categoría persona jurídica), respondimos con una carta que Entrefamilias publicó entera. Ahí está el balance humano: «Nuestros chicos/as @Colabora15 lo saben bien, vivieron con nosotros 6 meses… les abrimos nuestro “hogar”, les acompañamos en su camino de búsqueda activa de empleo, algunas personas lo consiguieron, otras redirigieron sus objetivos, ganaron en confianza, se apoyaron en el grupo y recuperaron las energías».",
        ],
      },
      {
        type: "p",
        parts: [
          "El ",
          {
            type: "link",
            href: "https://www.diariodepontevedra.es/articulo/pontevedra/seis-candidatos-por-los-premios-cidade-de-pontevedra/20160106010000291899.html",
            text: "Diario de Pontevedra",
            external: true,
          },
          " recogió la candidatura: el Programa Colabora 15 apostaba por el trabajo diario del coworking. ",
          {
            type: "link",
            href: "https://www.pontevedraviva.com/es/general/calros-solla-y-el-ies-luis-seoane-premios-cidade-de-pontevedra-2015_275181_102.html",
            text: "PontevedraViva",
            external: true,
          },
          " nos situó entre las candidatas de persona jurídica; el premio fue para el IES Luis Seoane. El reconocimiento no era el fin: era un espejo de que la ciudad había visto el gesto.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/colabora-grupo-premio.jpg",
        alt: "Grupo en el Liceo Casino con marco #fei2015 «mi primer festival de empleo», foto publicada por Entrefamilias junto al relato de Colabora15",
        caption:
          "Festival de Empleo e Innovación (FEI 2015). Foto publicada por Entrefamilias en el artículo sobre la nominación impulsada por Colabora15.",
      },
      {
        type: "image",
        src: "/photos/blog/colabora-slide3.png",
        alt: "Participante sonriendo durante una sesión del programa Colabora 2015",
        caption: "Sesión de grupo.",
      },
      {
        type: "image",
        src: "/photos/blog/colabora-slide4.png",
        alt: "Participante escuchando en una sesión de Colabora 2015",
        caption: "Acompañamiento en grupo.",
      },
      {
        type: "h2",
        text: "Del coworking al Concello: Arela y el hilo que sigue",
      },
      {
        type: "p",
        parts: [
          "Aquí el «germen» deja de ser metáfora y pasa a ser cita de prensa. En enero de 2016, al presentar los programas municipales Arela y Verea, la concelleira Anabel Gulías —según el ",
          {
            type: "link",
            href: "https://www.farodevigo.es/pontevedra/2016/01/20/programas-formacion-arela-verea-buscaran-16719245.html",
            text: "Faro de Vigo",
            external: true,
          },
          "— recalcó que «los antecedentes del Arela están en el programa Colabora, puesto en marcha el año pasado por el espacio de coworking Arroelo». Del piloto sin subvención en un tercer piso a una política local de empleabilidad: ese es el hilo más firme que podemos trazar sin forzar la historia.",
        ],
      },
      {
        type: "h2",
        text: "Misma cultura, otros capítulos",
      },
      {
        type: "p",
        parts: [
          "No vamos a decir que Colabora «inventó» todo lo que vino después. Sí podemos decir que la misma cultura —abrir el salón, practicar el «co», no dejar sola a quien busca— la tejimos en otros frentes.",
        ],
      },
      {
        type: "p",
        parts: [
          "Desde 2016 documentamos ",
          {
            type: "link",
            href: "/blog/coworking-inclusivo-empleo-apoyo-arroelo",
            text: "Empleo con Apoyo con Down Pontevedra Xuntos",
          },
          ": contratos, ordenanza, disciplina diaria. No es el mismo programa que Colabora; es otra forma de que el coworking sea también empleo real. En 2015, el mismo año de Colabora, nuestra agenda ya mezclaba jams creativas y, poco después, ",
          {
            type: "link",
            href: "/blog/human-library-espacio-arroelo",
            text: "Human Library",
          },
          " y ",
          {
            type: "link",
            href: "/blog/global-service-jam-creatividad-arroelo",
            text: "Ponte Jam / Global Service Jam",
          },
          ": formatos distintos, misma intuición de inteligencia colectiva. Esa red de prácticas es la que hoy llamamos ",
          {
            type: "link",
            href: "/blog/cultura-colaborativa-galicia-coworking-coliving",
            text: "cultura colaborativa",
          },
          " —y la que aún se nota en un ",
          {
            type: "link",
            href: "/blog/cafe-a-la-fresca-comunidad-arroelo",
            text: "Café a la fresca",
          },
          ".",
        ],
      },
      {
        type: "h2",
        text: "Por qué sigue importando",
      },
      {
        type: "p",
        parts: [
          "Con CO-Labora 2015 demostramos que un coworking de tamaño humano podía diseñar política de empleo antes de que el Concello la escalara. Demostramos que quince «valientes» y una red de mentores voluntarios bastaban para cambiar el tono del paro: de soledad a grupo. Y demostramos —en palabras de África y María— que bienestar y humanidad pueden ir de la mano en el mundo empresarial.",
        ],
      },
      {
        type: "p",
        parts: [
          "Si estás en Pontevedra buscando un coworking donde la comunidad no sea eslogan, o si te interesa cómo se inventan nuevas ideas, el salón sigue abierto.",
        ],
      },
    ],
  },
  {
    slug: "coworking-inclusivo-empleo-apoyo-arroelo",
    title:
      "Coworking inclusivo en Pontevedra: cuando el salón también es Empleo con Apoyo",
    seoTitle: "Coworking inclusivo en Pontevedra: Empleo con Apoyo en Arroelo",
    date: "2026-10-07",
    label: "Comunidad",
    image: "/photos/blog/xuntos-comunidad-arroelo.jpg",
    alt: "Comunidad de Down Pontevedra Xuntos y Espacio Arroelo junto al banner de la asociación, en un momento lúdico en el coworking",
    excerpt:
      "Desde 2016 formamos parte del programa de Empleo con Apoyo con Down Pontevedra Xuntos: Cecilia y Celso en el equipo, disciplina diaria y una comunidad que se ensancha.",
    body: [
      {
        type: "p",
        parts: [
          "Desde 2016 somos parte —con ",
          {
            type: "link",
            href: "https://www.facebook.com/DownPontevedraXuntos/",
            text: "Down Pontevedra Xuntos",
            external: true,
          },
          " y la ",
          {
            type: "link",
            href: "https://downgalicia.org/",
            text: "Federación Down Galicia",
            external: true,
          },
          "— del programa de Empleo con Apoyo en nuestro coworking de Pontevedra. Cecilia y Celso forman parte del equipo. Aquí os contamos nuestra historia.",
        ],
      },
      {
        type: "p",
        parts: [
          "Hay coworkings que hablan de diversidad en la web y la dejan en el footer. En ",
          {
            type: "link",
            href: "/",
            text: "Espacio Arroelo",
          },
          " la medimos también en contratos, horarios y tareas concretas: atención a quien entra, correo, paquetería, orden del ",
          {
            type: "link",
            href: "/espacio",
            text: "espacio",
          },
          ". No como adorno. Como pieza del engranaje.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/xuntos-comunidad-arroelo.jpg",
        alt: "Grupo de Down Pontevedra Xuntos y Espacio Arroelo junto al banner de la asociación, en un momento lúdico",
        caption:
          "Con Down Pontevedra Xuntos: comunidad, juego y el banner de la asociación en nuestro salón.",
      },
      {
        type: "h2",
        text: "Más que mesas: el equipo que sostiene el día a día",
      },
      {
        type: "p",
        parts: [
          "Abrimos en 2013 porque nosotras, María Pierres y África Rodríguez, dos autónomas entonces — necesitábamos un lugar con wifi. La ",
          {
            type: "link",
            href: "/blog/historia-espacio-arroelo-pontevedra",
            text: "historia de Espacio Arroelo",
          },
          " cuenta el LinkedIn, Michelena y la mudanza a Cobián Roffignac. Lo que a veces queda fuera del relato fundacional es quién hace que el salón funcione cuando el Wi‑Fi ya está, pero el paquete no ha llegado y la recepción pide presencia.",
        ],
      },
      {
        type: "p",
        parts: [
          "Un coworking no es solo puestos y fibra. Es un organismo. Y un organismo necesita manos que lo cuiden con disciplina. En febrero de 2019, ",
          {
            type: "link",
            href: "https://downgalicia.org/el-exito-del-trabajo-cooperativo-llega-a-down-pontevedra-xuntos/",
            text: "Down Galicia describía a Cecilia y Celso",
            external: true,
          },
          " —que se alternaban en la semana para no solaparse— como ordenanzas: atención al cliente, recepción de correo y paquetería, mantenimiento del orden. «Nada se mueve en el coworking sin que ellos dos estén al tanto.»",
        ],
      },
      "Esa frase no es marketing. Es operativa.",
      {
        type: "image",
        src: "/photos/blog/angela-ceci-maria-pierres.jpg",
        alt: "Ángela (orientadora laboral), Ceci y María Pierres (cofundadora) juntas en Espacio Arroelo",
        caption:
          "Ángela (orientadora laboral), Ceci y María Pierres (cofundadora): el puente entre Xuntos y el coworking.",
        // Vertical group photo (3:4) in a 3:2 frame — contain keeps heads and bodies visible.
        fit: "contain",
        position: "top",
      },
      {
        type: "h2",
        text: "Cecilia: de las prácticas al contrato indefinido (2016–2019)",
      },
      {
        type: "p",
        parts: [
          "En diciembre de 2016, ",
          {
            type: "link",
            href: "https://downgalicia.org/exito-da-metodoloxia-de-emprego-con-apoio-entre-as-empresas-da-cidade-de-pontevedra/",
            text: "Down Galicia contaba",
            external: true,
          },
          " que, tras un periodo de prácticas, contratamos a Cecilia, trabajadora del programa Empleo con Apoyo (ECA) de Down Pontevedra. Sus tareas: atención al cliente y mantenimiento del espacio.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/ceci-ordenanza-arroelo.jpg",
        alt: "Cecilia en su puesto de ordenanza en Espacio Arroelo, con carpetas y portátil",
        caption:
          "Cecilia en el coworking: cobertura de PontevedraViva (Asociación Down Xuntos de Pontevedra).",
      },
      {
        type: "p",
        parts: [
          "Yo, África, cofundadora del coworking, lo resumí con una frase que sigue definiéndonos: «A incorporación de Cecilia a Espacio Arroelo fixo que desde un coworking comecemos a construír o mundo que nos gusta.»",
        ],
      },
      {
        type: "p",
        parts: [
          "En 2019, la misma Federación ampliaba el retrato: Cecilia trabajaba con nosotras desde mayo de 2016; se formaba en informática e Internet con la Red CEMIT para apoyar web y redes del coworking —ampliación de funciones que salió de ver cómo se manejaba con la tecnología—. Ese mismo año, el ",
          {
            type: "link",
            href: "https://www.diariodepontevedra.es/articulo/pontevedra/cecilia-tambien-quiere-puede-trabajar-comedores-escolares/201911051338171059487.html",
            text: "Diario de Pontevedra",
            external: true,
          },
          " y ",
          {
            type: "link",
            href: "https://downgalicia.org/es/arume-vuelve-a-confiar-en-la-metodologia-de-empleo-con-apoyo-de-xuntos-para-una-nueva-insercion/",
            text: "Down Galicia",
            external: true,
          },
          " informaban de que compatibilizaba el puesto en el coworking con un trabajo de monitora en comedor escolar (Arume) y de que había firmado contrato indefinido con nosotras.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/ceci-arume-comedor.jpg",
        alt: "Cecilia de Los Santos en el comedor escolar con uniforme Arume (Diario de Pontevedra)",
        caption:
          "Cecilia en Arume (comedor escolar): la misma persona que compatibilizaba ese puesto con Arroelo, según el Diario de Pontevedra (2019).",
      },
      "Lo dijimos sin rodeos: Cecilia había cambiado la forma de ver la organización; era una pieza clave del engranaje. «Nosotras no nos planteamos seguir en la empresa sin ella.»",
      {
        type: "video",
        youtubeId: "M7PfTwy1gyg",
        title:
          "Experiencias laborais en 1ª persoa — Cecilia en Espacio Arroelo (Down Galicia)",
        caption:
          "Canal Down Galicia: balance en primera persona del coworking de Pontevedra con Cecilia en el equipo gracias a Emprego Con Apoio / Down Pontevedra.",
      },
      {
        type: "h2",
        text: "Celso: primer contrato y autonomía en el salón (2018)",
      },
      {
        type: "p",
        parts: [
          "Celso llegó después. ",
          {
            type: "link",
            href: "https://downgalicia.org/el-exito-del-trabajo-cooperativo-llega-a-down-pontevedra-xuntos/",
            text: "Down Galicia (2019)",
            external: true,
          },
          " sitúa su contrato en 2018, tras prácticas y una evolución que Ángela Patricio —preparadora laboral de Xuntos— describió con claridad: cada vez más autónomo e independiente en sus funciones; decidimos incorporarlo al equipo. Para Celso era su primer contrato laboral.",
        ],
      },
      "Compartían el rol de ordenanza con Cecilia en días distintos. Mismo salón, mismo estándar: el día a día del coworking no se improvisa.",
      {
        type: "image",
        src: "/photos/blog/celso-mural-atreven.jpg",
        alt: "Celso, en blanco y negro, bajo el mural «el mundo pertenece a quienes se atreven...» en Espacio Arroelo",
        caption:
          "Celso en el coworking, bajo el mural «el mundo pertenece a quienes se atreven...».",
        // Tall mural portrait (≈4:5): contain + 3:4 frame keeps face + «el mundo pertenece…» readable.
        fit: "contain",
        position: "top",
      },
      {
        type: "h2",
        text: "Emoción y operación: lo que cambia en la comunidad",
      },
      "Explicamos los beneficios en dos capas —emoción y operación— ya en 2016, y las repetimos con matices en 2019.",
      "Emoción: integrar en la organización a toda la sociedad cambia el entorno. Coworkers y familias conviven con realidades nuevas; se aprende con mundos que antes eran ajenos. «La posibilidad de que todas las personas que conviven en la oficina puedan comprender que el mundo es tan amplio como personas viven en él» —dijo África— y añadió que ella misma había evolucionado «muchísimo como persona».",
      "Operación: gestionar un coworking come tiempo en tareas que alejan de lo que hace felices a los coworkers. El tiempo que Ceci trabajaba en el espacio era «ouro» para hablar con la comunidad, tejer redes o inventar ideas. Disciplina y organización: seguridad para el resto.",
      {
        type: "p",
        parts: [
          "Eso conecta con lo que intentamos en el ",
          {
            type: "link",
            href: "/blog/cafe-a-la-fresca-comunidad-arroelo",
            text: "Café a la fresca",
          },
          ", en la ",
          {
            type: "link",
            href: "/blog/human-library-espacio-arroelo",
            text: "Human Library",
          },
          " y en la red ",
          {
            type: "link",
            href: "/blog/coworking-pontevedra-echn-arroelo",
            text: "ECHN",
          },
          ": no es un salón monocromo. Es un salón que se ensancha.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/comunidad-mesa-desayuno.jpg",
        alt: "Comunidad de coworkers desayunando en la mesa del salón de Espacio Arroelo",
        caption:
          "Comunidad en el salón (coworkers de Arroelo; no es un retrato de Cecilia ni de Celso).",
      },
      {
        type: "h2",
        text: "Por qué un coworking encaja con Empleo con Apoyo",
      },
      {
        type: "p",
        parts: [
          "Recomendamos la iniciativa a otros coworkings. Down Galicia recoge la idea: son un tipo de empresa perfecta para un programa como ",
          {
            type: "link",
            href: "https://downgalicia.org/es/programas/empleo-con-apoyo-sindrome-de-down/",
            text: "Empleo con Apoyo",
            external: true,
          },
          " —con apoyo de orientación laboral, adaptación al puesto y definición de tareas desde Xuntos—, y con beneficios fiscales que mencionamos en prensa.",
        ],
      },
      {
        type: "p",
        parts: [
          "La metodología de Empleo con Apoyo en las entidades Down de Galicia viene de lejos (desde 2002, según la Federación). Nosotras no inventamos el método. Lo practicamos: prácticas, contrato, apoyo profesional de la asociación, tareas reales, no «proyectos para la foto».",
        ],
      },
      {
        type: "video",
        youtubeId: "2Ol1gcaLMP0",
        title:
          'Programa "Empleo con apoyo" de Down Galicia (subtitulado)',
        caption:
          "Canal Down Galicia: cómo funciona la metodología de Empleo con Apoyo (ECA).",
      },
      {
        type: "p",
        parts: [
          "Si gestionas un hub o un coworking y te estás preguntando por inclusión laboral con sentido, las fuentes de Down Galicia son el mejor punto de partida. Y si trabajas en Pontevedra y buscas un coworking donde la comunidad no sea solo un eslogan, el salón sigue abierto.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/ceci-retrato-downgalicia.jpg",
        alt: "Retrato de Cecilia publicado por Down Galicia al narrar su incorporación a Espacio Arroelo",
        caption:
          "Retrato de Cecilia en la cobertura de Down Galicia sobre su incorporación a Espacio Arroelo (Empleo con Apoyo / Xuntos).",
      },
      {
        type: "h2",
        text: "Seguir construyendo el mundo que nos gusta",
      },
      "No vamos a fingir que un artículo de 2019 describe el organigrama de 2026. Lo que sí está documentado —y es suficientemente fuerte— es esto: apostamos por Empleo con Apoyo; Cecilia y Celso sostuvieron el día a día; la comunidad aprendió; África puso palabras a un cambio que era a la vez operativo y ético.",
      "Eso es coworking inclusivo en Pontevedra sin PowerPoint: con correo recibido, mesas en orden y un equipo que cabe en la definición de «familia Arroelo».",
      {
        type: "p",
        parts: [
          "Si quieres conocer el espacio —puestos, salón, acceso, comunidad—, escribe a info@espacioarroelo.com, llama al 610 602 012 o ",
          {
            type: "link",
            href: "/#contacto",
            text: "pásate",
          },
          ". Mejor con café. Mejor preguntando. El mundo que nos gusta no se escribe solo en la web: se practica entre semana.",
        ],
      },
    ],
  },
  {
    slug: "cultura-colaborativa-galicia-coworking-coliving",
    title:
      "Cultura colaborativa en Galicia: coworking, coliving y espacios que comparten conocimiento",
    seoTitle: "Cultura colaborativa en Galicia: coworking y coliving",
    date: "2026-10-07",
    label: "Mapa",
    image: "/photos/blog/magma-interior-pizarra.jpg",
    alt: "Interior de Magma Espacio en Ourense: pizarra de normas de la comunidad, puestos de coworking y zona de ping-pong",
    excerpt:
      "Coworking y coliving en Galicia con los que tejemos red: Sende, iSlow, Anceu, Magma en Ourense y nosotras en Pontevedra. Espacios creativos donde compartimos conocimiento.",
    body: [
      {
        type: "p",
        parts: [
          "Galicia no inventó el coworking, pero sí le dio un acento propio: menos open space de brochure y más mesa larga, más aldea con fibra, más «vamos a cocinar juntas y luego seguimos el proyecto». La ",
          {
            type: "link",
            href: "/",
            text: "cultura colaborativa",
          },
          " la medimos en puentes —rural y urbano, costa y interior, Galicia y Portugal— y en espacios donde compartimos conocimiento sin pedir un código postal exclusivo.",
        ],
      },
      {
        type: "p",
        parts: [
          "Este post es un mapa, no un ranking. Enlazamos sitios reales y nos situamos —",
          {
            type: "link",
            href: "/",
            text: "Espacio Arroelo",
          },
          " en Pontevedra— como un nodo más de esa red: el nuestro, el que habitamos cada día.",
        ],
      },
      {
        type: "h2",
        text: "Más que mesas: qué significa colaborar en Galicia",
      },
      "Una mesa, wifi y una sala de reuniones son el mínimo. Lo colaborativo empieza cuando el espacio deja de ser solo alquiler de sillas: talleres abiertos, cenas colectivas, residencias, hackathones, redes europeas, puentes con la aldea. En Galicia lo conocemos tanto en un tercer piso del casco histórico como en una casa de piedra a media hora de la playa o en una aldea de veinte habitantes con vistas a Portugal.",
      {
        type: "image",
        src: "/photos/blog/taller-circulo-comunidad.jpg",
        alt: "Taller en círculo: personas con cuadernos escuchan a una facilitadora junto a una pizarra",
        caption:
          "Compartir conocimiento: el círculo de taller es tan coworking como el portátil.",
      },
      {
        type: "h2",
        text: "Pontevedra y el coworking que empezó pronto",
      },
      {
        type: "p",
        parts: [
          "En abril de 2013, ",
          {
            type: "link",
            href: "https://elpais.com/ccaa/2013/04/17/galicia/1366220334_717953.html",
            text: "El País contaba que el coworking se instalaba en Galicia",
            external: true,
          },
          " y ponía el foco en Pontevedra: ",
          {
            type: "link",
            href: "/blog/historia-espacio-arroelo-pontevedra",
            text: "Espacio Arroelo",
          },
          ", que fundamos África Rodríguez y María Pierres. No éramos solo una oficina barata: apostábamos a que profesionales de perfiles distintos pudieran compartir espacio, proyectos y —esto no envejece— un manual de convivencia.",
        ],
      },
      {
        type: "p",
        parts: [
          "Más de una década después seguimos en el centro de la ciudad —ahora en Cobián Roffignac— con la misma intuición: el coworking en Pontevedra funciona cuando hay comunidad. El ",
          {
            type: "link",
            href: "/blog/cafe-a-la-fresca-comunidad-arroelo",
            text: "Café a la fresca",
          },
          ", las jams, la ",
          {
            type: "link",
            href: "/blog/human-library-espacio-arroelo",
            text: "Human Library",
          },
          " o los talleres de IA no son decorado: son la forma en que el conocimiento circula entre quien entra por la puerta. El contexto de red europea lo contamos en ",
          {
            type: "link",
            href: "/blog/coworking-pontevedra-echn-arroelo",
            text: "coworking en Pontevedra y ECHN",
          },
          ".",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/comunidad-hoodies-arroelo.jpg",
        alt: "Comunidad de Espacio Arroelo con sudaderas del coworking de Pontevedra frente a una pizarra",
        caption:
          "Nosotras: comunidad con nombre propio en el coworking de Pontevedra.",
      },
      {
        type: "h2",
        text: "Ourense: Magma Espacio, una década de coworking local",
      },
      {
        type: "p",
        parts: [
          "Si miras al interior, ",
          {
            type: "link",
            href: "https://www.magmaespacio.es/",
            text: "Magma Espacio",
            external: true,
          },
          " —también conocido como Magma Coworking— lleva desde octubre de 2013 tejiendo comunidad en el centro de Ourense (rúa Bedoya, 27): unos 300 m² para autónomos, freelances, emprendedores y pequeñas empresas. Lo abrieron María Santos, Manu Álvarez y Martiño Fortes; la prensa local lo retrató como espacio de trabajo «sin límites» cuando ",
          {
            type: "link",
            href: "https://www.lavozdegalicia.es/noticia/ourense/2017/09/06/espacio-trabajo-limites/0003_201709O6C8991.htm",
            text: "La Voz de Galicia escribió sobre Magma en 2017",
            external: true,
          },
          ".",
        ],
      },
      {
        type: "p",
        parts: [
          "En enero de 2024, ",
          {
            type: "link",
            href: "https://www.ondacero.es/podcast/emisoras/ourense/mas-de-uno-ourense/magma-espacio-unha-decada-coworking_2024012365afb29501f8b0e4407d7093.html",
            text: "Onda Cero entrevistó a Martiño Fortes sobre una década de coworking",
            external: true,
          },
          ". Y en la Coworking Spain Conference 2025, María Santos moderó la sesión sobre coworking en ciudades pequeñas —el mismo foro donde África ha llevado nuestra mirada—. Ourense y Pontevedra no compiten: conocemos de cerca que el coworking local aguanta cuando hay oficio y vecindad.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/magma-sala-movil.jpg",
        alt: "Sala de reuniones móvil de Magma Espacio en Ourense, con mesas blancas y estructura de OSB",
        caption:
          "Magma Espacio (Ourense): una década de coworking local en Bedoya 27.",
      },
      {
        type: "h2",
        text: "Rural que no es escape: Sende, Anceu e iSlow",
      },
      {
        type: "p",
        parts: [
          "El mapa colaborativo gallego también lo tejemos en aldeas.",
        ],
      },
      {
        type: "p",
        parts: [
          {
            type: "link",
            href: "https://www.sende.co/",
            text: "Sende",
            external: true,
          },
          " es rural coworking y coliving en Senderiz (Lobeira, Ourense), en una aldea de unos veinte habitantes frente a las montañas portuguesas. Se presenta como uno de los colivings rurales más veteranos del mundo: casas de piedra, dos salas de coworking con fibra, cocina compartida, talleres y una comunidad internacional que trabaja —no hace turismo de aldea—. Su propia página en gallego/castellano resume la filosofía: ",
          {
            type: "link",
            href: "https://www.sende.co/rural-coworking",
            text: "volver al pueblo con internet, emprendimiento y educación",
            external: true,
          },
          ". Junto a Impact Hub Vigo compartimos capítulo en el ",
          {
            type: "link",
            href: "https://www.sende.co/hackathon-for-refugees",
            text: "Hackathon for Refugees",
            external: true,
          },
          " de 2016: la red ya existía antes de que la llamáramos mapa.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/sende-comunidad-patio.jpg",
        alt: "Grupo conversando junto a una casa de piedra en Sende, Senderiz (Lobeira)",
        caption:
          "Sende en Senderiz: aldea, fibra y comunidad internacional.",
      },
      {
        type: "image",
        src: "/photos/blog/sende-coworking.jpg",
        alt: "Sala de coworking de Sende con puestos de trabajo y pizarra comunitaria",
        caption:
          "Una de las salas de coworking de Sende: trabajo remoto en la aldea.",
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
          " —Ponte Caldelas, media hora desde Pontevedra— es el puente ciudad–aldea que cruzamos a menudo: remoto, vecindad y revitalización rural. El relato completo lo contamos en ",
          {
            type: "link",
            href: "/blog/anceu-coliving-ciudad-aldea",
            text: "De Pontevedra a Anceu",
          },
          "; aquí solo recordamos que no es un hotel con wifi bonito, sino un proyecto de convivencia con ",
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
        src: "/photos/blog/anceu-vista-aerea.jpg",
        alt: "Vista aérea de Anceu Coliving en Ponte Caldelas: casas de piedra, patio y entorno rural",
        caption:
          "Anceu: el coliving rural como vecindad, no como escaparate.",
      },
      {
        type: "p",
        parts: [
          "Y en la Costa da Morte, en Laxe (A Coruña), está ",
          {
            type: "link",
            href: "https://islowcoliving.com/",
            text: "iSlow",
            external: true,
          },
          ". Casa de piedra de 1915 abierta en 2022 por Inés y Julio: coliving rural con coworking dedicado, fibra de alta velocidad, skill shares y talleres que mezclan tradición gallega con trabajo remoto. Misma lógica que ",
          {
            type: "link",
            href: "https://www.sende.co/",
            text: "Sende",
            external: true,
          },
          " o Anceu: ralentizar sin desconectar.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/islow-casa-piedra.jpg",
        alt: "Casa de piedra de iSlow Coliving en Laxe (Costa da Morte), con puertas azules y terraza",
        caption:
          "iSlow en Laxe: casa de 1915, coworking y ritmo lento sin desconectar.",
      },
      {
        type: "image",
        src: "/photos/blog/islow-aerial-laxe.jpg",
        alt: "Vista aérea del entorno rural de iSlow en Laxe, con casas de piedra y la ría al fondo",
        caption:
          "El entorno de iSlow en la Costa da Morte: aldea, monte y ría.",
      },
      {
        type: "h2",
        text: "Hubs, talleres y redes donde el conocimiento circula",
      },
      {
        type: "p",
        parts: [
          "Más allá del puesto fijo, conocemos en Galicia espacios creativos pensados para aprender en compañía. Desde 2017 formamos parte de la ",
          {
            type: "link",
            href: "https://creativehubs.net/",
            text: "European Creative Hubs Network (ECHN)",
            external: true,
          },
          ": Twin Hubs, residencias, workshops. Un ejemplo concreto: el intercambio con Making Rooms en Blackburn —mesas, murales y gente que se presta el oficio—.",
        ],
      },
      {
        type: "image",
        src: "/photos/making.jpg",
        alt: "Grupo sonriente en el hub creativo Making Rooms (Blackburn), intercambio ECHN con Arroelo",
        caption:
          "ECHN en la práctica: conocimiento que viaja entre hubs creativos.",
      },
      {
        type: "image",
        src: "/photos/blog/echn-twin-hubs-taller.jpg",
        alt: "Taller Twin Hubs: personas colaboran alrededor de una mesa con materiales",
        caption: "Talleres Twin Hubs: la red europea se nota en las manos.",
      },
      {
        type: "p",
        parts: [
          "En el eje Galicia–Portugal existió (y deja huella) la lógica de Creative Habitat: espacios que se abren mutuamente —nosotras en Pontevedra, ",
          {
            type: "link",
            href: "https://www.sende.co/",
            text: "Sende",
            external: true,
          },
          " en Senderiz, Anceu, ",
          {
            type: "link",
            href: "https://dinamo10.net/",
            text: "Dinamo",
            external: true,
          },
          " en Viana do Castelo, ",
          {
            type: "link",
            href: "https://www.wowbyfinsa.com/",
            text: "WOW",
            external: true,
          },
          " en Porto—. El conocimiento no es un PDF; es una sala, un taller, una red.",
        ],
      },
      {
        type: "p",
        parts: [
          "En esa misma red de hubs creativos de Galicia conocemos también ",
          {
            type: "link",
            href: "https://espazomaceta.gal/",
            text: "A Maceta",
            external: true,
          },
          " en Muros —coworking y comunidad creativa frente a la ría— y ",
          {
            type: "link",
            href: "https://www.laplatanera.com/",
            text: "La Platanera",
            external: true,
          },
          " en A Illa de Arousa —taller, residencias y retiros donde el oficio se comparte a ritmo de isla—. Las tenemos en el mapa de quienes compartimos conocimiento en Galicia: espacios que se reconocen sin competir por el mismo código postal.",
        ],
      },
      {
        type: "p",
        parts: [
          "Y en el rural tecnológico, ",
          {
            type: "link",
            href: "/blog/rural-hackers-tecnologia-impacto-rural",
            text: "Rural Hackers",
          },
          " demuestra que formación e impacto local también son cultura colaborativa: academia, residencias, hackathones al servicio de quien ya vivía en la aldea.",
        ],
      },
      {
        type: "h2",
        text: "CRAB Spaces: el mapa que sigue",
      },
      {
        type: "p",
        parts: [
          "Esa lógica de red rural tiene continuidad en ",
          {
            type: "link",
            href: "https://crabspaces.com/",
            text: "CRAB Spaces",
            external: true,
          },
          " (Creative Habitat): una comunidad de hubs creativos rurales —maker labs en graneros, coliving en aldeas, galerías pop-up en pueblos que no salen en la postcard—. En ",
          {
            type: "link",
            href: "https://crabspaces.com/",
            text: "crabspaces.com",
            external: true,
          },
          " hay un ",
          {
            type: "link",
            href: "https://crabspaces.com/map",
            text: "mapa de espacios CRAB",
            external: true,
          },
          ": cada punto entre montes, bosques y calles de pueblo es una historia distinta. Nosotras, Espacio Arroelo, fuimos socios del proyecto —coordinado por Dinamo10 y desarrollado junto a ",
          {
            type: "link",
            href: "https://www.sende.co/",
            text: "Sende",
            external: true,
          },
          " y Giovani Iddocca / Treballu—, cofinanciado por la Unión Europea a través del programa Creative Europe, tal como lo cuenta la propia web.",
        ],
      },
      {
        type: "h2",
        text: "Un mapa, no una competencia",
      },
      {
        type: "p",
        parts: [
          "No hace falta elegir un único nodo. Puedes trabajar un mes en ",
          {
            type: "link",
            href: "https://www.sende.co/",
            text: "Sende",
            external: true,
          },
          ", una temporada en iSlow, una semana en Anceu y el día a día en Magma o con nosotras. Lo que sostiene la cultura colaborativa en Galicia es precisamente eso: que los espacios nos reconozcamos entre sí.",
        ],
      },
      {
        type: "p",
        parts: [
          "Si buscas coworking en Pontevedra con mirada de red —no solo de metro cuadrado—, ",
          {
            type: "link",
            href: "/",
            text: "pásate por Espacio Arroelo",
          },
          ". Si te interesa el puente rural, empieza por ",
          {
            type: "link",
            href: "/blog/anceu-coliving-ciudad-aldea",
            text: "Anceu",
          },
          " o por las puertas oficiales de ",
          {
            type: "link",
            href: "https://www.sende.co/",
            text: "Sende",
            external: true,
          },
          " e ",
          {
            type: "link",
            href: "https://islowcoliving.com/",
            text: "iSlow",
            external: true,
          },
          ". Si estás en Ourense, ",
          {
            type: "link",
            href: "https://www.magmaespacio.es/",
            text: "Magma",
            external: true,
          },
          " lleva más de una década demostrando que las ciudades medianas también hacen comunidad. El mapa está vivo. Nosotras seguimos dibujándolo desde el tercer piso.",
        ],
      },
    ],
  },
  {
    slug: "coworking-dog-friendly-pontevedra-arroelo",
    title:
      "Coworking dog-friendly en Pontevedra: ven con tu perro a Arroelo",
    seoTitle: "Coworking dog-friendly en Pontevedra: Arroelo",
    date: "2026-10-07",
    label: "Comunidad",
    image: "/photos/blog/lazaro-alfombra-amarilla.jpg",
    alt: "Lázaro, el primer perro de Espacio Arroelo, tumbado en la alfombra amarilla del coworking",
    excerpt:
      "Sí, puedes venir con tu perro a nuestro coworking. Empezó con Lázaro —el de Tania—; hoy Pilita viene con Helena y Lagun con Ana.",
    body: [
      {
        type: "p",
        parts: [
          "Hay coworkings que ponen un icono de «pet friendly» y siguen siendo oficinas con prohibición disimulada. Nosotras lo vivimos al revés: en ",
          {
            type: "link",
            href: "/",
            text: "Espacio Arroelo",
          },
          " llevamos años compartiendo mesa, wifi y siestas bajo la silla con perretes que saben estar. Si trabajas en remoto, si eres freelance o si llegas a Pontevedra con mochila y correa, esta es la respuesta corta: sí, puedes venir con tu perro.",
        ],
      },
      {
        type: "h2",
        text: "Sí: puedes venir con tu perro",
      },
      {
        type: "p",
        parts: [
          "Lo tenemos escrito en casa. En la ",
          {
            type: "link",
            href: "https://wiki.espacioarroelo.es/coworking/guia-zen",
            text: "Guía Zen de nuestra wiki",
            external: true,
          },
          " —las normas de convivencia del coworking— aparece sin ambigüedad: «Espacio Arroelo es dog friendly.» En la página del ",
          {
            type: "link",
            href: "/espacio",
            text: "espacio",
          },
          " lo repetimos con la misma voz: bienvenidas las mascotas que saben convivir en el salón.",
        ],
      },
      {
        type: "p",
        parts: [
          "No es un eslogan de campaña. Es la práctica de más de una década: puestos, salas, ",
          {
            type: "link",
            href: "/blog/cafe-a-la-fresca-comunidad-arroelo",
            text: "Café a la fresca",
          },
          "… y, de vez en cuando, un hocico apoyado en la rodilla mientras alguien cierra un ticket. Si buscas coworking en Pontevedra y no quieres dejar al perrete solo en casa, ",
          {
            type: "link",
            href: "/#contacto",
            text: "escríbenos o pásate",
          },
          ": abrimos la puerta del tercer piso de Cobián Roffignac para eso.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/helena-pilita-escritorio-tirantes.jpg",
        alt: "África y Lucky junto al Lérez: el perrete también cabe fuera del salón",
        caption:
          "África y Lucky junto al Lérez: el perrete también cabe fuera del salón",
      },
      {
        type: "h2",
        text: "Lázaro: el primer perro de Arroelo",
      },
      {
        type: "image",
        src: "/photos/blog/lazaro-retrato-bn.jpg",
        alt: "Retrato en blanco y negro de Lázaro, el primer perro de Espacio Arroelo",
        caption: "Lázaro, el perrete de Tania: el primero de la manada.",
      },
      {
        type: "p",
        parts: [
          "Nuestro dog-friendly no empezó con un icono en la web. Empezó con Lázaro. En abril de 2017, en Michelena, la coworker ",
          {
            type: "link",
            href: "https://www.instagram.com/taniasolla_/",
            text: "Tania Solla",
            external: true,
          },
          " llevaba poco tiempo con un perrito negro en casa. Había conocido el espacio, le había gustado… y Lázaro «pidió» formar parte de la familia coworker. Tania lo propuso al salón con honestidad: quien no estuviera de acuerdo, que lo dijera. La manada dijo que sí —y nosotras abrimos la puerta.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/lazaro-tania-grupo-coworkers.jpg",
        alt: "Tania Solla sujeta a Lázaro rodeada de coworkers en el coworking Espacio Arroelo",
        caption:
          "Tania con Lázaro y la manada coworker: la foto cuenta mejor que cualquier manifiesto.",
      },
      {
        type: "p",
        parts: [
          "Lázaro se quedó en el día a día de nuestro salón. No era un adorno: era coworker de cuatro patas. Por eso somos dog-friendly: porque una coworker preguntó a la manada y la manada abrió la puerta.",
        ],
      },
      {
        type: "h2",
        text: "Lucky: la gracia que conquistó la oficina",
      },
      {
        type: "image",
        src: "/photos/blog/equipo-selfie-perro.jpg",
        alt: "Selfie de coworkers de Espacio Arroelo en Michelena con Lucky, el perro de África",
        caption:
          "Michelena: Lucky también salía en la foto de familia.",
      },
      {
        type: "p",
        parts: [
          "Lucky llegó de la mano de África. Venía de un programa de entrenamiento como perro de terapia que entonces impulsaba ",
          {
            type: "link",
            href: "https://www.protectoraospalleiros.com/",
            text: "Os Palleiros",
            external: true,
          },
          ", la protectora de Pontevedra: se socializaba a los perros para facilitar su adopción y para acompañar a personas —Alzheimer, infancia con necesidades especiales, y más—. Quien lo entrenaba entonces era Olalla; hoy puedes seguirla a través de su asociación ",
          {
            type: "link",
            href: "https://villacaotica.org/",
            text: "Villa Caótica",
            external: true,
          },
          ". Lucky conquistó toda la oficina con su gracia: calmado, sociable, imposible no quererlo cerca de la mesa.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/perro-chubasquero-enjoy-rain-day.jpg",
        alt: "Perrete con chubasquero negro que dice ENJOY RAIN DAY",
        caption:
          "Llueva o no: en Galicia el perrete también sale con chubasquero.",
        fit: "contain",
        position: "top",
      },
      {
        type: "image",
        src: "/photos/blog/perrete-sonrisa-primer-plano.jpg",
        alt: "Primer plano de un perrete melocotón sonriendo a cámara",
        caption: "Sonrisa de cuatro patas: así se siente el salón cuando hay perrete.",
        fit: "contain",
        position: "top",
      },
      {
        type: "h2",
        text: "Pilita",
      },
      {
        type: "p",
        parts: [
          "Hoy, entre quienes vienen a nuestro salón, está Pilita. Se acomoda mientras su dueña Helena trabaja (",
          {
            type: "link",
            href: "https://www.instagram.com/heconstela/",
            text: "@heconstela",
            external: true,
          },
          ").",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/pilita-alfombra-amarilla.jpg",
        alt: "Pilita sentada en la alfombra amarilla redonda del coworking Espacio Arroelo",
        caption: "Pilita en la alfombra amarilla del salón.",
        fit: "contain",
        position: "top",
      },
      {
        type: "h2",
        text: "Lagun, el compañero de Ana",
      },
      {
        type: "image",
        src: "/photos/blog/lagun-perro-rizado.jpg",
        alt: "Lagun, perrito rizado gris y blanco, mirando a cámara",
        caption: "Lagun: pequeño, rizado y siempre cerca de Ana.",
      },
      {
        type: "p",
        parts: [
          "Lagun es el perrete rizado de nuestra coworker Ana. Ella trabaja los miércoles en Arroelo: llegó para mes y medio a ",
          {
            type: "link",
            href: "https://anceu.com/",
            text: "Anceu Coliving",
            external: true,
          },
          " en su caravana, se quedó, se mudó… y hoy forma parte del equipo de ",
          {
            type: "link",
            href: "https://ruralhackers.com/",
            text: "Rural Hackers",
            external: true,
          },
          " con el proyecto ",
          {
            type: "link",
            href: "https://laimaginaria.es/",
            text: "La Imaginaria",
            external: true,
          },
          " (",
          {
            type: "link",
            href: "https://www.instagram.com/la_imaginaria_es/",
            text: "@la_imaginaria_es",
            external: true,
          },
          ").",
        ],
      },
      {
        type: "h2",
        text: "Cómo venimos con el perrete (convivencia)",
      },
      {
        type: "p",
        parts: [
          "Dog-friendly no significa «todo vale». Significa que el perro cabe si cabe la convivencia: respeto a quien trabaja en silencio, a quien tiene alergia o miedo, a la limpieza del salón. Antes de la primera visita, avísanos —como hizo Tania con Lázaro—. Cuéntanos cómo es tu compañero de cuatro patas. Si hace falta, acordamos un tramo tranquilo del día o un rincón.",
        ],
      },
      {
        type: "p",
        parts: [
          "El resto es lo de siempre en nuestro salón: fibra, salas 4K, Café a la fresca a las 11:30, ",
          {
            type: "link",
            href: "/#tarifa",
            text: "tarifa clara",
          },
          " y una ",
          {
            type: "link",
            href: "/coworkers",
            text: "comunidad",
          },
          " que se saluda por el nombre —también por el del perrete, cuando toca—. ",
          {
            type: "link",
            href: "/#contacto",
            text: "Escríbenos",
          },
          " o pásate por Cobián Roffignac: la primera semana sin coste, también si vienes con correa.",
        ],
      },
    ],
  },
  {
    slug: "coworking-spain-conference-arroelo",
    title:
      "Coworking Spain Conference: lo que contamos desde un coworking en Pontevedra",
    seoTitle:
      "Coworking Spain Conference: desde un coworking en Pontevedra",
    date: "2026-10-07",
    label: "Congresos",
    image: "/photos/blog/cwsc-portada-sillas-amarillas.jpg",
    alt: "Tres mujeres emprendedoras de la comunidad Arroelo sonriendo en sillas Acapulco amarillas durante la Coworking Spain Conference",
    imageFit: "cover",
    imagePosition: "top",
    excerpt:
      "Cómo contamos la cultura colaborativa desde un coworking en Pontevedra en la Coworking Spain Conference: participamos con África en CWSC 2016–2020.",
    body: [
      {
        type: "p",
        parts: [
          "Hay congresos que sirven para enseñar métricas. Otros, para recordar por qué abrimos la puerta. La ",
          {
            type: "link",
            href: "https://coworkingspainconference.es/",
            text: "Coworking Spain Conference (CWSC)",
            external: true,
          },
          " —el gran encuentro del sector en España— ha sido, para nosotras, de los segundos.",
        ],
      },
      {
        type: "p",
        parts: [
          "Desde un coworking en Pontevedra —",
          {
            type: "link",
            href: "/",
            text: "Espacio Arroelo",
          },
          "— participamos en cinco ediciones consecutivas: 2016, 2017, 2018, 2019 y 2020. ",
          {
            type: "link",
            href: "https://coworkingspainconference.es/ponentes/africa-rodriguez-garcia",
            text: "África",
            external: true,
          },
          ", nuestra cofundadora, subió al escenario para contar cómo activamos una cultura colaborativa: no para vender un producto, sino para compartir lo que practicamos cada día.",
        ],
      },
      {
        type: "h2",
        text: "Por qué ir a un congreso de coworking (si ya tenemos salón)",
      },
      {
        type: "p",
        parts: [
          "Abrimos en 2013 —lo contamos en la ",
          {
            type: "link",
            href: "/blog/historia-espacio-arroelo-pontevedra",
            text: "historia de Espacio Arroelo",
          },
          "—. En pocos años el mapa gallego —y el español— se llenó de espacios. Hablar entre operadores no era un lujo: era higiene. En CWSC se cruzan fundadoras, comunidad, regulación, suburbios, pandemia… y, de fondo, la misma pregunta que nos hacemos: ¿el coworking es solo metros, o es una forma de estar juntas?",
        ],
      },
      {
        type: "p",
        parts: [
          "Nosotras llegábamos con la certeza de que la comunidad se practica y no se improvisa en un pitch.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/cwsc-2014-grupo-banner.jpg",
        alt: "Grupo delante del banner de la Coworking Spain Conference 2014, cubierto de notas adhesivas",
        fit: "cover",
        position: "center",
        caption: [
          "En la ",
          {
            type: "link",
            href: "https://coworkingspainconference.es/",
            text: "Coworking Spain Conference",
            external: true,
          },
          " 2014 estuvimos con fundadores de ",
          {
            type: "link",
            href: "https://wekco.net/",
            text: "Wekco",
            external: true,
          },
          ", con ",
          {
            type: "link",
            href: "https://coworkingspainconference.es/ponentes/manuel-zea",
            text: "Manu Zea",
            external: true,
          },
          " —organización de la conferencia— y con quienes han gestado coworkings conocidos en Málaga y Santiago: Chus y Lola.",
        ],
      },
      { type: "h2", text: "Cinco ediciones, un mismo hilo" },
      {
        type: "p",
        parts: [
          "Participamos con África en CWSC 2016, 2017, 2018, 2019 y 2020. Estas son las ponencias que llevamos:",
        ],
      },
      {
        type: "p",
        parts: [
          {
            type: "link",
            href: "https://coworkingspainconference.es/ponencias/cwsc-2016/como-piensa-un-coworker",
            text: "CWSC 2016 — «Cómo piensa un Coworker»",
            external: true,
          },
          " (20 de mayo, Sala 1). Una mirada desde dentro: no solo cómo gestionamos el espacio, sino cómo piensa quien lo habita.",
        ],
      },
      {
        type: "p",
        parts: [
          {
            type: "link",
            href: "https://coworkingspainconference.es/en/lectures/cwsc-2017/how-grow-your-team",
            text: "CWSC 2017 — «How to grow your team»",
            external: true,
          },
          " (12 de mayo). Contamos cómo crecer el equipo sin perder el «co»: la tensión de escalar comunidad sin convertirla en organigrama frío.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/cwsc-2017-acreditacion-africa.jpg",
        alt: "Acreditación de speaker de África Rodríguez en la Coworking Spain Conference 2017",
        caption:
          "Acreditación de speaker de África en CWSC 2017: así llegamos al escenario aquel mayo.",
        fit: "contain",
      },
      {
        type: "p",
        parts: [
          {
            type: "link",
            href: "https://coworkingspainconference.es/ponencias/cwsc-2018/transformate-o-cierra-mi-experiencia-despues-de-cinco-anos",
            text: "CWSC 2018 — «Transfórmate o cierra: mi experiencia después de cinco años»",
            external: true,
          },
          " (17 de mayo, Sala 2). A los cinco años de Arroelo, nuestro relato era claro: o nos transformamos con el contexto, o nos quedamos fuera.",
        ],
      },
      {
        type: "p",
        parts: [
          {
            type: "link",
            href: "https://coworkingspainconference.es/en/lectures/cwsc-2019/coworking-suburbs",
            text: "CWSC 2019 — «Coworking in the suburbs»",
            external: true,
          },
          " (24 de abril). El coworking no solo vive en centros urbanos de escaparate. Hablar de periferias —geográficas y simbólicas— era hablar también de Galicia: de lo que construimos lejos del ruido de las grandes capitales.",
        ],
      },
      {
        type: "p",
        parts: [
          {
            type: "link",
            href: "https://coworkingspainconference.es/ponencias/cwsc-2020/coworking-y-coronavirus-visiones-y-acciones",
            text: "CWSC 2020 — «Coworking y Coronavirus. Visiones y acciones»",
            external: true,
          },
          " (16 de abril). África compartió mesa con Ben Kolp (",
          {
            type: "link",
            href: "https://tlr-coworking.com/",
            text: "The Living Room",
            external: true,
          },
          "), Arancha Riestra (Go Madrid) y Javi Moral (",
          {
            type: "link",
            href: "https://fangaloka.es/",
            text: "Fangaloka",
            external: true,
          },
          "). El año en que el sector tuvo que improvisar supervivencia y, a la vez, cuidado —y nosotras también.",
        ],
      },
      {
        type: "video",
        youtubeId: "dbe3C4Dtk9g",
        title:
          "CWSC 2020 — Coworking y Coronavirus. Visiones y acciones",
        caption: "Vídeo completo del panel.",
      },
      "Cinco años. Cinco ángulos. Un mismo hilo: el coworking como práctica cultural, no como etiqueta inmobiliaria.",
      { type: "h2", text: "Lo que no cabe en un PowerPoint" },
      {
        type: "p",
        parts: [
          "En 2018, en «Transfórmate o cierra», África, nuestra cofundadora, hablaba de alas: de caseros, de administración, de proyectos que salen del salón. No era un catálogo de trofeos. Era el mapa de lo que vivimos cuando un espacio se abre a lo que no controlamos del todo.",
        ],
      },
      {
        type: "p",
        parts: [
          "Esa misma mirada la hemos llevado a la ",
          {
            type: "link",
            href: "https://creativehubs.net/",
            text: "European Creative Hubs Network",
            external: true,
          },
          " desde 2017 y a la calle de al lado. El congreso no sustituye nuestro salón; lo alimenta. Y el salón, a veces, nos da material para el congreso. También lo contamos en el ",
          {
            type: "link",
            href: "https://www.linkedin.com/in/rodriguezafricaruralhacker/",
            text: "LinkedIn de África",
            external: true,
          },
          ".",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/cwsc-grupo-magma-wekco.jpg",
        alt: "Selfie de grupo en la Coworking Spain Conference con Magma Coworking, Wekco, Fangaloka y WOW Porto",
        fit: "contain",
        caption: [
          "Estuvimos con ",
          {
            type: "link",
            href: "https://www.magmaespacio.es/",
            text: "Magma Coworking",
            external: true,
          },
          ", ",
          {
            type: "link",
            href: "https://wekco.net/",
            text: "Wekco",
            external: true,
          },
          ", ",
          {
            type: "link",
            href: "https://fangaloka.es/",
            text: "Fangaloka",
            external: true,
          },
          " y ",
          {
            type: "link",
            href: "https://www.wowbyfinsa.com/cowork/",
            text: "WOW Porto",
            external: true,
          },
          ": la red se practica fuera del pitch.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/cwsc-almuerzo-grupo.jpg",
        alt: "Grupo de asistentes de la Coworking Spain Conference comiendo juntos al aire libre bajo sombrillas",
        caption:
          "En la sala también hablamos de teoría de comunidad: membresía, influencia, necesidades, conexión emocional.",
      },
      {
        type: "h2",
        text: "Relaciones que duran más que el congreso",
      },
      {
        type: "p",
        parts: [
          "Para nosotras, este encuentro ha significado entablar relaciones duraderas: vínculos que han permitido crear otros proyectos de impacto social entre territorios en España. Y, sobre todo, grandes amistades que hoy son referentes para nosotras.",
        ],
      },
      {
        type: "p",
        parts: [
          "Entre ellas están ",
          {
            type: "link",
            href: "https://genion.es/",
            text: "Genion",
            external: true,
          },
          " en Alicante, ",
          {
            type: "link",
            href: "https://fangaloka.es/",
            text: "Fangaloka",
            external: true,
          },
          " en Móstoles y ",
          {
            type: "link",
            href: "https://workincompany.com/",
            text: "Work in Company",
            external: true,
          },
          " en Sevilla.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/cwsc-2018-grupo-asistentes.jpg",
        alt: "Foto de grupo de asistentes en la Coworking Spain Conference ante la pantalla de gracias",
        caption:
          "El cierre del encuentro: caras, lanyards y la misma pregunta — ¿cómo se hace comunidad?",
      },
      {
        type: "image",
        src: "/photos/blog/cwsc-sala-llena-grupo.jpg",
        alt: "Gran grupo de asistentes de la Coworking Spain Conference con las manos en alto, sonriendo en un espacio de coworking junto a la puerta de cocina",
        caption:
          "Sala llena y manos arriba: así cerramos el encuentro, con la energía de la comunidad.",
      },
      { type: "h2", text: "Si te interesa la cultura colaborativa" },
      {
        type: "p",
        parts: [
          "No vamos a inventar premios que no existieron. Lo que sí existió —y está documentado en ",
          {
            type: "link",
            href: "https://coworkingspainconference.es/",
            text: "coworkingspainconference.es",
            external: true,
          },
          " y en nuestro ",
          {
            type: "link",
            href: "https://www.facebook.com/media/set/?set=a.1023697784384535&type=3",
            text: "álbum de Facebook de la Coworking Spain Conference",
            external: true,
          },
          "— es una presencia sostenida: cinco ediciones, ponencias con nombre y fecha, y un relato coherente con lo que intentamos vivir cada día desde un coworking en Pontevedra.",
        ],
      },
      {
        type: "p",
        parts: [
          "Si trabajas en un coworking, en un hub creativo o simplemente te importa cómo se hace comunidad en Galicia, ",
          {
            type: "link",
            href: "/#contacto",
            text: "pásate o escríbenos",
          },
          ". O lee el resto del ",
          {
            type: "link",
            href: "/blog",
            text: "blog",
          },
          ". La conferencia acaba; el salón, no.",
        ],
      },
    ],
  },
  {
    slug: "global-service-jam-creatividad-arroelo",
    title:
      "PonteJam y las Global Jams: cuando la creatividad salió del salón",
    seoTitle: "PonteJam y Global Service Jam: creatividad en Arroelo",
    date: "2026-10-07",
    label: "Creatividad",
    image: "/photos/blog/pontejam-grupo-edison.jpg",
    alt: "Foto de grupo de participantes de PonteJam bajo bombillas Edison en Espacio Arroelo",
    imageFit: "cover",
    imagePosition: "top",
    excerpt:
      "Cómo impulsamos PonteJam y las Global Service / Sustainability Jams desde Espacio Arroelo: design thinking, retos globales y creatividad en Pontevedra.",
    body: [
      {
        type: "p",
        parts: [
          "Antes de que «design thinking» sonara en todas las agendas, en Pontevedra ya nos juntábamos un sábado entero a prototipar. Lo llamábamos PonteJam. Formaba parte de las ",
          {
            type: "link",
            href: "https://www.globaljams.org/",
            text: "Global Jams",
            external: true,
          },
          ": encuentros simultáneos en decenas de ciudades del mundo donde nadie sabe el reto hasta que se desvela… y entonces hay que hacer, no solo hablar.",
        ],
      },
      {
        type: "p",
        parts: [
          "Desde ",
          {
            type: "link",
            href: "/",
            text: "Espacio Arroelo",
          },
          " impulsamos esas jornadas. África lo resume en una frase que la prensa recogió en 2015: «Dejar de hablar, ponerse a hacer».",
        ],
      },
      {
        type: "p",
        parts: [
          "Las facilitamos en red con ",
          {
            type: "link",
            href: "https://www.linkedin.com/in/jjromerocrusat",
            text: "Juan",
            external: true,
          },
          " y ",
          {
            type: "link",
            href: "https://www.linkedin.com/in/robertoperez67",
            text: "Roberto",
            external: true,
          },
          ", de ",
          {
            type: "link",
            href: "https://sumaimportancia.com/",
            text: "Suma Importancia",
            external: true,
          },
          ", y con ",
          {
            type: "link",
            href: "https://www.linkedin.com/in/diegoparajo",
            text: "Diego Parajó",
            external: true,
          },
          ", de ",
          {
            type: "link",
            href: "https://xeneme.com/",
            text: "XENEME",
            external: true,
          },
          ".",
        ],
      },
      { type: "h2", text: "Un reto secreto y muchas manos" },
      "El formato es simple y exigente. Un reto común —a menudo ligado a sostenibilidad o a servicio—. Mentores. Grupos. Prototipos. A veces, salir a la calle a testear con gente real. Doce horas (o once) que parecen un maratón y, al final, un taller de humor y método.",
      "No era un curso magistral. Era aprender metodología con las manos llenas de post-its y de dudas. Y era, sobre todo, una forma de decir: la creatividad no es un don de unos pocos; es un músculo que se entrena en equipo.",
      {
        type: "image",
        src: "/photos/blog/pontejam-taller-sombreros.jpg",
        alt: "Sala de taller con equipos prototipando y participantes con sombreros disparatados durante una Jam",
        caption:
          "Así se veía el laboratorio: mesas llenas, kraft en la pared y permiso para no tomarse demasiado en serio.",
      },
      {
        type: "image",
        src: "/photos/blog/pontejam-participante-collar.jpg",
        alt: "Participante con collar de statement concentrada durante una dinámica de PonteJam",
        caption:
          "Una de nosotras, atenta en mitad del ruido bueno de las dinámicas de grupo.",
      },
      { type: "h2", text: "Las ediciones que sí podemos nombrar" },
      "Aquí os contamos algunas de las ediciones:",
      {
        type: "p",
        parts: [
          "Primer Sustainability Jam gallego en paralelo a acciones similares en 33 países (",
          {
            type: "link",
            href: "https://www.pontevedraviva.com/es/general/doce-horas-de-creacion-en-el-primer-ponte-sustainability-jam-gallego_266145_102.html",
            text: "PontevedraViva",
            external: true,
          },
          "). Lo organizamos desde Espacio Arroelo con la ",
          {
            type: "link",
            href: "https://www.uvigo.gal/",
            text: "Universidad de Vigo",
            external: true,
          },
          ". Un horario de maratón: de 9:30 a 21:30. El objetivo era afrontar retos de sostenibilidad con técnicas creativas y «una alta dosis de buen humor». Al final del día, prototipos sobre la mesa… y gente que doce horas después se abrazaba como si llevara años compartiendo proyecto.",
        ],
      },
      {
        type: "video",
        youtubeId: "7erZqhxTim0",
        title:
          "Ponte Sustainability Jam (Espacio Arroelo y Universidad de Vigo). Nov. 2014",
        caption:
          "Nuestro vídeo de la Sustainability Jam en Casa das Campás: casi 50 personas, un reto de sostenibilidad y doce horas de prototipado.",
      },
      {
        type: "image",
        src: "/photos/blog/pontejam-facilitacion-mesa.jpg",
        alt: "Facilitador inclinándose sobre la mesa con un equipo durante la prototipación en la Jam",
        caption:
          "Compartíamos ideas y feedback: una mentora o un facilitador guiando al equipo en plena prototipación.",
      },
      {
        type: "p",
        parts: [
          "PonteJam «vuelta a casa» (febrero 2015). Volvimos a las instalaciones de Arroelo —sede de las Jams en la ciudad desde la primera edición—, tras el paso por Casa das Campás. 26 personas, en su mayoría debutantes. Creamos un formato más íntimo que la edición anterior (",
          {
            type: "link",
            href: "https://www.pontevedraviva.com/es/general/ponte-jam-2015-la-vuelta-a-casa_268284_102.html",
            text: "PontevedraViva",
            external: true,
          },
          "; galería del ",
          {
            type: "link",
            href: "https://www.diariodepontevedra.es/album/galerias/ponte-jam-2015/20150228181956142648.html",
            text: "Diario de Pontevedra",
            external: true,
          },
          "). En este caso estaba enmarcado en la Global Jam / Global Service Jam, el mismo sábado que en más de 100 ciudades del mundo.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/pontejam-prototipo-naranja.jpg",
        alt: "Equipo mostrando un prototipo de fieltro naranja con gesto de pulgar arriba durante PonteJam",
        caption:
          "Mostrábamos con orgullo el prototipo de baja fidelidad —fieltro, papel y mucho «vamos a probar esto».",
      },
      {
        type: "image",
        src: "/photos/blog/pontejam-carteles-lego.jpg",
        alt: "Dos participantes sonriendo delante de carteles LEGO con el lema Directo a prototipar",
        caption:
          "Humor de pared incluido: «Directo a prototipar» no era un eslogan vacío.",
      },
      {
        type: "p",
        parts: [
          "PonteJam / Sustainability (31 de octubre de 2015). Casa da Luz, con apoyo del Ayuntamiento de Pontevedra. Fue nuestra cuarta edición (",
          {
            type: "link",
            href: "https://www.lavozdegalicia.es/noticia/pontevedra/pontevedra/2015/10/28/ponte-jam-invita-generar-ideas-torno-reto-mundial-vinculado-sostenibilidad/0003_201510P28C5992.htm",
            text: "La Voz de Galicia",
            external: true,
          },
          ", ",
          {
            type: "link",
            href: "https://www.farodevigo.es/pontevedra/2015/10/27/invitacion-explorar-creatividad-16785286.html",
            text: "Faro de Vigo",
            external: true,
          },
          "). En este caso se trataba de la sostenibilidad como eje: experimentar y aventurarse, porque —como insistíamos entonces— lo importante no es la idea sino ponerse a hacer.",
        ],
      },
      { type: "h2", text: "Design thinking sin pizarra vacía" },
      {
        type: "p",
        parts: [
          "Lo que nos importaba no era el eslogan. Era el gesto: un coworking que abre la mesa a quien no es coworker fijo; una ciudad que se suma a un reto mundial; mentoras de perfiles distintos; prototipos que se prueban en la calle de Pontevedra mientras en otras latitudes hacen lo mismo.",
        ],
      },
      "Eso es design thinking en la práctica: empatizar, idear, prototipar, iterar. Sin pedantería.",
      {
        type: "image",
        src: "/photos/blog/pontejam-sombrero-mesa.jpg",
        alt: "Equipo alrededor de la mesa de prototipado con materiales de colores y un participante con sombrero mexicano",
        caption:
          "Buen humor encima de la mesa: rotuladores, papeles y el disfraz que hacía falta para desbloquear una idea.",
      },
      { type: "h2", text: "De la Jam al resto de la comunidad" },
      {
        type: "p",
        parts: [
          "Las Jams no fueron un capítulo cerrado. Forman parte del mismo impulso que después tejió ",
          {
            type: "link",
            href: "/blog/cafe-a-la-fresca-comunidad-arroelo",
            text: "Café a la fresca",
          },
          ", la ",
          {
            type: "link",
            href: "/blog/coworking-pontevedra-echn-arroelo",
            text: "red europea de hubs creativos",
          },
          ", ",
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
          ": la idea de que el conocimiento se comparte y que Galicia puede estar en conversación global sin perder el tono local.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/pontejam-grupo-edison.jpg",
        alt: "Foto de grupo al final de una jornada de PonteJam bajo las bombillas Edison del salón",
        caption:
          "Foto de grupo al cerrar una de nuestras jornadas de cocreación, bajo la luz de las bombillas Edison.",
      },
      {
        type: "p",
        parts: [
          "Hoy, cuando organizamos talleres o encuentros en el ",
          {
            type: "link",
            href: "/espacio",
            text: "salón",
          },
          ", reconocemos el eco: círculo, manos, prueba y error, comunidad. Parte de ese día a día aparece en ",
          {
            type: "link",
            href: "https://www.instagram.com/arroelo/",
            text: "Instagram @arroelo",
            external: true,
          },
          ". La creatividad sigue siendo un valor del espacio, no un evento aislado de un sábado de 2015.",
        ],
      },
      { type: "h2", text: "La creatividad sigue siendo un músculo" },
      {
        type: "p",
        parts: [
          "Si buscas ",
          {
            type: "link",
            href: "/",
            text: "coworking en Pontevedra",
          },
          " y te importa algo más que la fibra, esta historia te dice quiénes somos. No prometemos una Jam cada mes. Sí prometemos un lugar donde la curiosidad tiene permiso.",
        ],
      },
      {
        type: "p",
        parts: [
          "Pásate. Lee la ",
          {
            type: "link",
            href: "/blog/historia-espacio-arroelo-pontevedra",
            text: "historia del espacio",
          },
          ". O ",
          {
            type: "link",
            href: "/#contacto",
            text: "escríbenos",
          },
          ". El reto secreto de entonces ya se desveló; el de ahora es más sencillo: seguir haciendo comunidad. Más historias, en el ",
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
    slug: "human-library-espacio-arroelo",
    title:
      "Human Library en Espacio Arroelo: personas libro en Pontevedra",
    seoTitle: "Human Library en Espacio Arroelo (Pontevedra)",
    date: "2026-10-07",
    label: "Comunidad",
    image: "/photos/blog/human-library-muro-deseos-portada.jpg",
    alt: "Muro de los deseos en pizarra con el lema «Antes de morrer quero...» en una Human Library de Espacio Arroelo",
    imageFit: "cover",
    imagePosition: "top",
    excerpt:
      "Tres ediciones verificadas: A vida en palabras en Michelena (2015), Sente Siria con refugiados (2016) y Para chula, a miña parrula sobre feminismo e igualdad (2018).",
    body: [
      {
        type: "p",
        parts: [
          "Hay bibliotecas de estanterías y hay bibliotecas de personas. La ",
          {
            type: "link",
            href: "https://humanlibrary.org/",
            text: "Human Library",
            external: true,
          },
          " —Biblioteca Humana— es un movimiento mundial: alguien se ofrece como «libro», alguien se sienta a «leerlo», y el diálogo desmonta prejuicios que un titular no alcanza.",
        ],
      },
      {
        type: "p",
        parts: [
          "En ",
          {
            type: "link",
            href: "/",
            text: "Espacio Arroelo",
          },
          " no lo tratamos como eslogan. Lo practicamos. Tres ediciones, tres tonos, el mismo gesto de escuchar antes de etiquetar.",
        ],
      },
      {
        type: "h2",
        text: "A vida en palabras: la primera Human Library en Michelena",
      },
      {
        type: "p",
        parts: [
          "En mayo de 2015, dentro de la ",
          {
            type: "link",
            href: "https://web.archive.org/web/20160317043407/http://espacioarroelo.es/actividades/arroeladas/attachment/arroeladamayo2015/",
            text: "Arroelada",
            external: true,
          },
          " del coworking en Michelena, nuestras coworkers ",
          {
            type: "link",
            href: "https://www.revistaesmas.com/literatura--sabela-muniz-.html",
            text: "Sabela Muñiz",
            external: true,
          },
          " y ",
          {
            type: "link",
            href: "https://www.facebook.com/elefantescacharreria",
            text: "Elefantes de Cacharrería",
            external: true,
          },
          " organizaron una xornada original: «A vida en palabras». La propuesta era transformar vidas en palabras e intercambiar emociones y experiencias —con infancia, literatura, sabor y, en el centro, personas en préstamo. Queda documentada en el ",
          {
            type: "link",
            href: "https://www.facebook.com/media/set/?set=a.821042254650090&type=3",
            text: "álbum de Facebook",
            external: true,
          },
          ".",
        ],
      },
      {
        type: "p",
        parts: [
          "El programa tenía varias capas. ",
          {
            type: "link",
            href: "https://www.pontevedraviva.com/es/cultura/cuentacuentos-en-las-librerias-y-una-muestra-en-la-biblioteca-calientan-los-motores-del-salon-del-libro_268029_102.html",
            text: "Paul do Canizo",
            external: true,
          },
          " ofreció un cuenta cuentos para niñas y niños. Hubo audiorrelatos: narraciones gráficas de obras de Sabela Muñiz, coworker y escritora. Elefantes de Cacharrería propuso literatura en el paladar. Y cerramos con un muro de los deseos donde cada quien dejó lo que quería decir sin subir a un atril.",
        ],
      },
      {
        type: "p",
        parts: [
          "El núcleo fue una Human Library al estilo de la ",
          {
            type: "link",
            href: "https://humanlibrary.org/",
            text: "Human Library Organization",
            external: true,
          },
          ", la red internacional en la que los libros son personas. Quienes vinieron a «leer» conversaron con «personas en préstamo»: Ángela Paz, Víctor Loira, Diego Castro y María Luz Pérez Arias. El propósito era promover el diálogo, acabar con prejuicios y fomentar el entendimiento en un ambiente informal. Fue la primera vez que el formato se instaló en casa —en el mismo edificio donde empezó la ",
          {
            type: "link",
            href: "/blog/historia-espacio-arroelo-pontevedra",
            text: "historia de Espacio Arroelo",
          },
          "—.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/human-library-vida-en-palabras-grupo-muro.jpg",
        alt: "Pablo Cañiza (cuenta cuentos) en el suelo con sombrero verde, libros infantiles y muro de los deseos al fondo",
        caption:
          "Pablo Cañiza (cuenta cuentos) en el suelo, entre libros y un sombrero verde; al fondo, el muro de los deseos.",
        fit: "contain",
        position: "top",
      },
      {
        type: "image",
        src: "/photos/blog/human-library-vida-en-palabras-circulo.jpg",
        alt: "Círculo de conversación en el salón de Michelena durante la jornada",
        caption:
          "Círculo de conversación en Michelena durante «A vida en palabras».",
      },
      {
        type: "image",
        src: "/photos/blog/human-library-vida-en-palabras-libro-humano.jpg",
        alt: "Hombre en taburete conversando con un pequeño grupo de lectoras",
        caption:
          "Un «libro humano» en taburete con sus lectoras: el formato Human Library en Arroelo.",
      },
      {
        type: "h2",
        text: "Sente Siria: refugio, personas libro y ciudadanía",
      },
      {
        type: "p",
        parts: [
          "El domingo 24 de abril de 2016, de 12:00 a 14:30, la Casa da Luz del Ayuntamiento de Pontevedra acogió Sente Siria: una acción social colaborativa que parte de las y los coworkers de Arroelo. El objetivo era claro: conocer la situación es lo que nos hace libres para tomar decisiones sobre nuestra responsabilidad como personas ciudadanas del mundo. Lo contaron ",
          {
            type: "link",
            href: "https://www.pontevedraviva.com/es/general/sente-siria-desde-pontevedra_277451_102.html",
            text: "PontevedraViva",
            external: true,
          },
          " y ",
          {
            type: "link",
            href: "https://www.entrefamilias.com/sente-siria-sensibilizar-desde-las-personas-para-las-personas-una-iniciativa-solidaria-de-nuestras-colaboradoras-de-espacio-arroelo-y-sus-coworkers/",
            text: "Entrefamilias",
            external: true,
          },
          ".",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/human-library-sente-cartel.jpg",
        alt: "Cartel de Sente Siria: Human Library, 24 de abril, Casa da Luz, Pontevedra",
        caption:
          "Cartel de la jornada: Human Library, Lembranzas de Siria, #ACoffeeForRefugees.",
      },
      {
        type: "p",
        parts: [
          "PontevedraViva detalla el programa: lectura de «libros» al estilo ",
          {
            type: "link",
            href: "https://humanlibrary.org/",
            text: "humanlibrary.org",
            external: true,
          },
          ", café solidario ",
          {
            type: "link",
            href: "https://www.pontevedraviva.com/es/general/sente-siria-desde-pontevedra_277451_102.html",
            text: "#ACoffeeForRefugees",
            external: true,
          },
          ", proyecciones —entre ellas el corto «Recuerdos de Siria» / Lembranzas de Siria— y el avance del Hackaton Sente Siria, una comunidad tecnológica orientada a la crisis de refugio.",
        ],
      },
      {
        type: "p",
        parts: [
          "Meses después, el ",
          {
            type: "link",
            href: "https://www.sende.co/hackathon-for-refugees",
            text: "Hackathon for Refugees",
            external: true,
          },
          " se celebró en ",
          {
            type: "link",
            href: "https://www.sende.co/",
            text: "Sende",
            external: true,
          },
          " con Impulso de Impact Hub Vigo y Espacio Arroelo: programadoras, activistas y personas refugiadas prototipando durante 48 horas. La Human Library de abril no fue un gesto aislado; fue el primer capítulo público de una línea de trabajo sobre refugio.",
        ],
      },
      {
        type: "video",
        vimeoId: "169467984",
        title: "Hackathon for Refugees — Sende, Impact Hub Vigo y Espacio Arroelo",
        caption:
          "Así lo vivimos en Sende: 48 horas de prototipado con Impact Hub Vigo, personas refugiadas y nuestra red de Arroelo.",
      },
      {
        type: "image",
        src: "/photos/blog/human-library-casa-luz-circulo.jpg",
        alt: "Grupo en círculo en Casa da Luz durante una sesión de diálogo",
        caption:
          "Casa da Luz: mesas redondas, no micrófono. El formato que elegimos para Sente Siria.",
      },
      {
        type: "h2",
        text: "Para chula, a miña parrula: feminismo e igualdad",
      },
      {
        type: "p",
        parts: [
          "El 23 de junio de 2018, de 12:00 a 14:00, de nuevo en la Casa da Luz, junto con el Ayuntamiento de Pontevedra organizamos la última edición Para chula, a miña parrula. El ",
          {
            type: "link",
            href: "https://www.diariodepontevedra.es/articulo/pontevedra/ana-cabaleiro-patty-castro-alba-troiteiro-estaran-chula-mina-parrula/20180618162302986729.html",
            text: "Diario de Pontevedra",
            external: true,
          },
          " la describe como charla-coloquio con cinco referentes: Ana Cabaleiro, Patty Castro, Alba Troiteiro, ",
          {
            type: "link",
            href: "/blog/historia-espacio-arroelo-pontevedra",
            text: "María Pierres",
          },
          " (cofundadora de Arroelo) y Chus Otero.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/human-library-ana-cabaleiro.jpg",
        alt: "Cartel biográfico de Ana Cabaleiro en la jornada Para chula, a miña parrula",
        caption:
          "Cada voz tenía nombre, trayecto y cartel: periodismo, márgenes, escritura, cooperación.",
      },
      {
        type: "image",
        src: "/photos/blog/human-library-para-chula-circulo.jpg",
        alt: "Persona con camiseta Para chula mi parrula conversando en círculo en Casa da Luz",
        caption:
          "23 de junio de 2018: la campaña municipal se sentó en círculo, no en atril.",
      },
      {
        type: "image",
        src: "/photos/blog/human-library-dialogo-mulleres.jpg",
        alt: "Tres mujeres en diálogo con fotos y materiales de Mulleres Atlánticas",
        caption:
          "A veces el relato llega con objetos: un libro propio, una foto, un gesto.",
      },
      {
        type: "h2",
        text: "Por qué importa en un coworking",
      },
      {
        type: "p",
        parts: [
          "Un coworking puede limitarse a fibra y mesa. Nosotras entendemos el salón como lugar donde cabe lo que no es solo facturación: la ",
          {
            type: "link",
            href: "/blog/cafe-a-la-fresca-comunidad-arroelo",
            text: "curiosidad del Café a la fresca",
          },
          ", las Jams, la ",
          {
            type: "link",
            href: "/blog/coworking-pontevedra-echn-arroelo",
            text: "red europea de hubs",
          },
          ", el puente con ",
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
          ", y también una tarde en la que alguien presta su historia para que otra persona salga menos segura de sus estereotipos.",
        ],
      },
      {
        type: "p",
        parts: [
          "Si te interesa esta capa de Arroelo —la que no cabe en una tarifa—, pásate por el ",
          {
            type: "link",
            href: "/espacio",
            text: "salón",
          },
          ", mira cómo pensamos la ",
          {
            type: "link",
            href: "/blog/mudarse-pontevedra-coworking-ciudad-peatonal",
            text: "ciudad peatonal",
          },
          " o ",
          {
            type: "link",
            href: "/#contacto",
            text: "escríbenos",
          },
          ". Las bibliotecas humanas no se agotan en un domingo de 2016: se practican cada vez que elegimos escuchar antes de etiquetar.",
        ],
      },
    ],
  },
  {
    slug: "ia-en-coworking-pontevedra-arroelo",
    title:
      "IA en el coworking: cómo la usamos en Espacio Arroelo (y por qué nos deja más tiempo para las personas)",
    seoTitle:
      "IA en el coworking: cómo la usamos en Espacio Arroelo (y por qué nos deja más tiempo para las personas)",
    date: "2026-10-07",
    label: "IA",
    image: "/photos/blog/ia-africa-portatil-salon.jpg",
    alt: "África Rodríguez trabajando con el portátil en la recepción del coworking Espacio Arroelo, en el centro de Pontevedra",
    excerpt:
      "Desde que María y yo abrimos Arroelo, usamos la IA para correo, tareas, facturas y reservas —y así nos queda más tiempo para las personas. También RuralGPT.",
    body: [
      {
        type: "p",
        parts: [
          "Desde que María y yo abrimos ",
          {
            type: "link",
            href: "/",
            text: "Arroelo",
          },
          " en 2013, gestionar un coworking siempre ha tenido dos caras. Una se ve: la gente que entra por la puerta, el café de media mañana, los talleres, las conversaciones en la cocina. La otra no se ve tanto: correos, facturas, reservas, llaves, anuncios, calendarios. Esa segunda cara es la que más tiempo se come.",
        ],
      },
      {
        type: "p",
        parts: [
          "Hoy os contamos, con ejemplos reales, cómo usamos la inteligencia artificial en Arroelo para la parte invisible, empezando por lo más digital y terminando en lo menos online. Y también os hablamos de ",
          {
            type: "link",
            href: "https://ruralgpt.gal/es/",
            text: "RuralGPT",
            external: true,
          },
          ", los encuentros que hemos impulsado para que nuestra comunidad aprenda a usar la IA con los pies en la tierra.",
        ],
      },
      {
        type: "h2",
        text: "Por qué empezamos a usar IA en un coworking pequeño",
      },
      {
        type: "p",
        parts: [
          "Arroelo no es una gran empresa con un departamento de administración. Es un espacio en la tercera planta de Cobián Roffignac 6, en el centro de Pontevedra, y detrás estoy yo, África, compaginándolo con ",
          {
            type: "link",
            href: "https://ruralhackers.com/",
            text: "Rural Hackers",
            external: true,
          },
          " y con todo lo que se mueve en ",
          {
            type: "link",
            href: "https://anceu.com/",
            text: "Anceu",
            external: true,
          },
          ". Cuando llevas varios proyectos, la sensación de ir siempre detrás del correo es constante.",
        ],
      },
      "No buscábamos «transformar» nada. Buscábamos recuperar horas para lo que de verdad importa en un coworking: las personas.",
      {
        type: "image",
        src: "/photos/blog/ia-paella-comunidad.jpg",
        alt: "Grupo de la comunidad de Espacio Arroelo alrededor de una paella compartida",
        caption:
          "Cuando la IA nos ahorra horas de gestión, nos queda tiempo para esto: compartir mesa, paella y comunidad.",
      },
      {
        type: "h2",
        text: "Lo más online: correo, tareas y papeles",
      },
      {
        type: "h3",
        text: "Varias bandejas de Gmail, ordenadas",
      },
      "Gestionamos varias cuentas de correo: la del coworking, la personal y las de los proyectos vinculados. La IA nos ayuda a leerlas, resumir lo importante y separar lo que necesita respuesta hoy de lo que puede esperar. Las respuestas delicadas las sigo escribiendo yo; lo que gano es no perderme nada entre newsletters y avisos.",
      {
        type: "h3",
        text: "Las tareas del coworking en Trello",
      },
      {
        type: "p",
        parts: [
          "Todo lo que hay que hacer en Arroelo vive en un tablero de ",
          {
            type: "link",
            href: "https://trello.com/",
            text: "Trello",
            external: true,
          },
          ": incidencias, altas de nuevas personas, pedidos, pendientes del local. La IA nos ayuda a crear tarjetas a partir de un correo o una conversación, a moverlas cuando algo se cierra y a tener una foto rápida de qué queda pendiente cada semana.",
        ],
      },
      {
        type: "h3",
        text: "Facturas trimestrales para la gestoría",
      },
      "Una de las tareas más pesadas era reunir cada trimestre las facturas de proveedores (luz, teléfono, alarma) entrando en cada portal. Ahora la IA nos ayuda a descargarlas y archivarlas en Google Drive en una carpeta por trimestre, lista para la gestoría. Nos ahorra una mañana de clics y el «¿dónde estaba esa factura?».",
      {
        type: "h3",
        text: "Slack y la coordinación del equipo",
      },
      {
        type: "p",
        parts: [
          "Para coordinarnos con la gente con la que trabajamos usamos ",
          {
            type: "link",
            href: "https://slack.com/",
            text: "Slack",
            external: true,
          },
          ". La IA nos ayuda a ponernos al día de un hilo largo o a preparar un mensaje claro cuando hay que organizar algo entre varias personas.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/ia-puestos-laptop.jpg",
        alt: "Puestos de trabajo con portátiles en el salón de Espacio Arroelo",
        caption:
          "La parte invisible del coworking también se gestiona desde aquí: correo, tareas y papeles.",
      },
      {
        type: "h2",
        text: "La gestión del día a día del coworking",
      },
      {
        type: "h3",
        text: "Reservas de salas y acceso con Nuki",
      },
      {
        type: "p",
        parts: [
          "Cuando alguien de la comunidad necesita una sala de reuniones, la IA nos ayuda a hacer la reserva en la web de reservas del espacio. Y para el acceso usamos cerraduras inteligentes ",
          {
            type: "link",
            href: "https://nuki.io/es/",
            text: "Nuki",
            external: true,
          },
          ": enviamos las invitaciones de acceso a las personas nuevas y cada semana revisamos el nivel de batería de las cerraduras, para que nadie se quede en la puerta un lunes por la mañana.",
        ],
      },
      {
        type: "h3",
        text: "Anuncios de puestos y despachos",
      },
      {
        type: "p",
        parts: [
          "Cuando queda libre un puesto fijo o un despacho, publicamos anuncios en portales inmobiliarios como ",
          {
            type: "link",
            href: "https://www.idealista.com/",
            text: "Idealista",
            external: true,
          },
          " o ",
          {
            type: "link",
            href: "https://www.fotocasa.es/",
            text: "Fotocasa",
            external: true,
          },
          ". La IA nos ayuda a adaptar la descripción a cada portal y a cada tipo de espacio, sin escribirla desde cero cada vez.",
        ],
      },
      {
        type: "h3",
        text: "La wiki de bienvenida para nuevas coworkers",
      },
      {
        type: "p",
        parts: [
          "Tenemos una wiki de onboarding en ",
          {
            type: "link",
            href: "https://wiki.espacioarroelo.es/",
            text: "wiki.espacioarroelo.es",
            external: true,
          },
          " con todo lo práctico: cómo se entra, cómo se reserva una sala, cómo funciona la cocina. La IA nos ayuda a mantenerla al día y a redactar las explicaciones de forma sencilla.",
        ],
      },
      {
        type: "h2",
        text: "Lo más personal: calendario, citas y presentaciones",
      },
      "Gestionar un espacio es también gestionar la vida de quien lo lleva. La IA nos echa una mano con el calendario y las citas, desde cuadrar reuniones hasta algo tan cotidiano como pedir cita en el taller para el coche. Y cuando preparo una charla o una presentación, me ayuda a encontrar fotos adecuadas para acompañar lo que quiero contar.",
      "Son cosas pequeñas, pero sumadas son horas a la semana.",
      {
        type: "h2",
        text: "Lo menos online: el tiempo que nos devuelve",
      },
      "Aquí está el sentido de todo. Cada hora que no paso descargando facturas o buscando un correo es una hora que puedo dedicar a lo que ninguna IA hace: recibir a quien viene a conocer el espacio, presentar a dos coworkers que deberían conocerse, preparar un café, organizar un taller o cuidar el espacio físico para que sea un sitio agradable donde trabajar.",
      "Arroelo siempre ha sido una comunidad antes que un alquiler de mesas. La IA no cambia eso; nos ayuda a protegerlo.",
      {
        type: "image",
        src: "/photos/blog/ia-encuentro-comunidad.jpg",
        alt: "Encuentro comunitario alrededor de la mesa del salón de Espacio Arroelo",
        caption:
          "El tiempo que libera la IA vuelve al salón: conversación, café y red.",
      },
      {
        type: "h2",
        text: "Siempre con supervisión humana",
      },
      "Una regla que no negociamos: nada se publica ni se envía sin que yo lo revise antes. La IA prepara, propone y ordena; las decisiones y el tono siguen siendo nuestros. Se equivoca a veces, y por eso la revisión no es opcional.",
    ],
  },
  {
    slug: "mudarse-pontevedra-coworking-ciudad-peatonal",
    title:
      "Por qué mudarse a Pontevedra ahora (y aterrizar en Arroelo)",
    seoTitle: "Mudarse a Pontevedra: ciudad peatonal",
    date: "2026-10-07",
    label: "Ciudad",
    image: "/photos/blog/pontevedra-escritorio-puente-madera.jpg",
    alt: "Persona trabajando con portátil en un puente de madera en Pontevedra",
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
          " apostó por un modelo urbano centrado en las personas: menos coche en el centro, más espacio público, preferencia peatonal. Es una estrategia que se puede caminar.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/pontevedra-escritorio-tirantes.jpg",
        alt: "Escritorio al aire libre en un parque de Pontevedra, con la Ponte dos Tirantes al fondo",
        caption:
          "Trabajar a escala humana: ciudad, verde y mesa a un paseo del centro.",
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
          " —el mapa esquemático que marca minutos entre puntos clave— ayudan a desmitificar distancias. Caminar deja de ser un plan B y pasa a ser el mapa por defecto. Quien se muda aquí no necesita coche para casi todo: necesita zapatos cómodos y, a veces, un paraguas.",
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
        src: "/photos/pontevedra-alameda.jpg",
        alt: "Alameda de Pontevedra, espacio verde junto al centro peatonal",
        caption:
          "La Alameda a dos minutos: verde urbano y ciudad caminable en el mismo radio.",
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
          " ofrecemos lo básico (mesa, fibra, salas) y lo que no se improvisa: comunidad. Las ",
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
        src: "/photos/blog/celebracion-comunidad-arroelo.jpg",
        alt: "Grupo de personas celebrando en comunidad en el coworking Espacio Arroelo en Pontevedra, con tarta, vino y ambiente alegre",
        caption:
          "Aterrizar es también esto: caras conocidas, brindis y comunidad el primer mes.",
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
    image: "/photos/blog/rural-hackers-portada-camiseta.jpg",
    alt: "Persona de espaldas en un campo, con camiseta negra que dice «I AM A RURAL HACKER» en letras amarillas y un pequeño icono de planta",
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
          "Desde 2021, África Rodríguez, Ignacio (Nacho) Márquez y Agustín Jamardo impulsan esta ONG / movimiento. No partíamos de cero: veníamos de años tejiendo comunidad en ",
          {
            type: "link",
            href: "/",
            text: "Espacio Arroelo",
          },
          ", ",
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
        src: "/photos/blog/rural-hackers-sketchy-shona.jpg",
        alt: "Persona con bastón junto a un gran retrato recortado al aire libre; Sketchy Shōna cuelga entre los pinos",
        caption:
          "Colgamos Sketchy Shōna entre los pinos: arte en el bosque, con el retrato y el bastón como parte del encuentro.",
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
        type: "video",
        youtubeId: "wDO0BWL65Mw",
        title: "Rural Hackers Fest en Anceu",
        caption:
          "Rural Hackers Fest: tecnología, arte y comunidad en la aldea de Anceu.",
      },
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
          "Rural IA propone inmersiones prácticas: probar herramientas, crear proyectos reales, aprender haciendo, con convivencia y naturaleza como parte de la experiencia. RuralGPT, impulsado con Anceu Coliving, busca situar Anceu como laboratorio de innovación en IA: residencias formativas intensivas para profesionales que sienten que la IA avanza más rápido que su capacidad de seguirle el ritmo, y que quieren integrar procesos útiles —no demos eternos— en su trabajo diario. Lo hemos compartido también en ",
          {
            type: "link",
            href: "https://www.instagram.com/p/Dd1jEO6sUUa/",
            text: "Instagram",
            external: true,
          },
          ".",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/rural-hackers-grupo-bosque.jpg",
        alt: "Grupo numeroso de personas posando con alegría en un claro del bosque junto al río",
        caption:
          "Aprendemos juntas al aire libre: comunidad, bosque y río como aula.",
        fit: "contain",
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
          ", cuando alguien de la casa baja a un taller en la aldea, cuando el mobiliario de Michelena sigue dando servicio en la ",
          {
            type: "link",
            href: "https://casadopobo.com/",
            text: "Casa do Pobo",
            external: true,
          },
          ", estamos diciendo lo mismo: la tecnología tiene más sentido si ensancha el mapa, no si lo reduce a tres metros cuadrados de escritorio. Esa misma brújula recorre la ",
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
        src: "/photos/blog/echn-making-rooms-grupo.jpg",
        alt: "Grupo en The Making Rooms (We MAKE Blackburn), hub creativo de la red ECHN",
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
        src: "/photos/blog/echn-making-rooms-fachada.jpg",
        alt: "Fachada de The Making Rooms, hub creativo hermano de la red ECHN",
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
    image: "/photos/blog/anceu-xa-non-calamos.jpg",
    alt: "Grupo de mujeres en Anceu con el cartel «Xa non calamos / Non lle berramos / Voso silenzo non te protexe», valle al fondo",
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
          " y la ",
          {
            type: "link",
            href: "https://casadopobo.com/",
            text: "Casa do Pobo",
            external: true,
          },
          ".",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/anceu-rural-hackers.jpg",
        alt: "Dos personas en Anceu revisan un material de Rural Hackers al aire libre",
        caption: "Comunidad en la aldea: el puente se mide en caras conocidas.",
      },
      {
        type: "h2",
        text: "Desde 2019: comprometernos con el desarrollo rural",
      },
      {
        type: "p",
        parts: [
          "Llegamos como colaboración pura. Antes de que Anceu abriera, conocimos a ",
          {
            type: "link",
            href: "https://www.ruralcitizen.org/talentorural/agustin-jamardo",
            text: "Agustín Jamardo",
            external: true,
          },
          " y le propusimos ir con un grupo de compañeras y compañeros del coworking a aportar ideas antes de la apertura. Desde entonces, una colaboración que no ha dejado de crecer.",
        ],
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
        type: "video",
        youtubeId: "vasAslb5oEA",
        title: "Convivencia Anceu–Arroelo: voces de la red rural-urbana",
        caption:
          "Vídeo de la convivencia entre Anceu y Arroelo: cómo se siente formar parte de una misma red entre la aldea y Pontevedra.",
      },
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
        type: "image",
        src: "/photos/blog/anceu-outdoor-cowork.jpg",
        alt: "Tres compañeras trabajan juntas al aire libre en Anceu, con portátil bajo los árboles",
        caption: "Coworking al aire libre: el remoto también se hace en círculo.",
      },
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
          "Cuando en 2023 cambiamos de localización en la ciudad, gran parte de nuestro Arroelo encontró nueva vida en la ",
          {
            type: "link",
            href: "https://casadopobo.com/",
            text: "Casa do Pobo de Anceu",
            external: true,
          },
          ". Donamos mobiliario para crear un espacio que, como el nuestro en Pontevedra, dé cobijo creativo también en el rural. Lo contamos también en la ",
          {
            type: "link",
            href: "/blog/historia-espacio-arroelo-pontevedra",
            text: "historia del coworking",
          },
          ": los objetos también pueden tejer red.",
        ],
      },
      {
        type: "p",
        parts: [
          "La Casa do Pobo es el espacio cultural y social de la vecindad: el lugar donde se fomenta la vida comunitaria de la aldea. Que nuestras mesas y sillas sigan sirviendo allí no es nostalgia: es coherencia. Y el puente no solo viaja en muebles: compañeras y compañeros de Arroelo han colaborado en proyectos como ",
          {
            type: "link",
            href: "https://www.eoi.es/es/the-break",
            text: "The Break",
            external: true,
          },
          " —un programa europeo de emprendedoras que, en Anceu, trabajó con mujeres de la aldea en el ",
          {
            type: "link",
            href: "https://anceu.com/feminist-coliving-rural-spaces-how-to-impact-rural-villages-to-empower-women/",
            text: "proceso feminista de la Casa do Pobo",
            external: true,
          },
          "—. Nosotras ayudamos a traducir y a acompañar ese encuentro entre vecinas y emprendedoras europeas.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/anceu-xa-non-calamos.jpg",
        alt: "Grupo de mujeres en Anceu con el cartel «Xa non calamos / Non lle berramos / Voso silenzo non te protexe», valle al fondo",
        caption:
          "Nosotras ya no callamos: en Anceu el feminismo se sostiene juntas —vecinas, emprendedoras y quien llega a acompañar—, con el valle detrás y un cartel que lo dice claro.",
      },
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
          " con personas de la aldea o de la comunidad internacional del coliving, para tomar café e inspirarnos juntas en nuestras mañanas de Pontevedra. Participamos en actividades en Anceu: arte, creatividad, tecnología, lo que la aldea propone cuando quiere mirar al futuro sin renunciar a lo suyo. Elisabet, de ",
          {
            type: "link",
            href: "https://zengoala.com/",
            text: "Zengoala",
            external: true,
          },
          ", organiza sus talleres de Zentangle en Arroelo —y también ha llevado encuentros a Anceu—: otro hilo de la misma red. Y cuidamos una idea práctica y generosa: que las personas de Arroelo y de Anceu puedan inspirarse entre lo rural y lo urbano, usando los espacios de trabajo como extensión natural de la misma comunidad.",
        ],
      },
      {
        type: "image",
        src: "/photos/blog/anceu-elisabeth-zentangle.jpg",
        alt: "Elisabet (centro) con el grupo al aire libre y cartas de Zentangle sobre la mesa",
        caption:
          "Compartimos con Elisabet, de Zengoala, un encuentro de Zentangle: cartas, rotuladores y la misma red creativa entre Arroelo y Anceu.",
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
    image: "/photos/blog/africa-y-maria.jpg",
    alt: "África Rodríguez y María Pierres pintan el mural «el mundo pertenece a quienes se atreven»",
    excerpt:
      "Cómo África Rodríguez y María Pierres fundaron Espacio Arroelo en 2013: de un encuentro en LinkedIn a más de una década de coworking en Pontevedra.",
    body: [
      "Hay historias de coworking que empiezan con un plan de negocio. La nuestra empezó con un mensaje.",
      "En 2012, las vidas de María Pierres y África Rodríguez se cruzaron en LinkedIn. María, arquitecta; África, consultora. Dos autónomas en Pontevedra que, cada una a su manera, habían descubierto lo mismo: trabajar en casa puede ser práctico, pero también es un callejón sin red. «Tenía la sensación de que desde mi ordenador no iba a conocer a nadie», contaba África en aquellos primeros meses. María había dejado su propia oficina y sentía la misma falta: un lugar donde el trabajo no fuera solo productividad, sino compañía.",
      "En menos de seis meses pasamos de la conversación a la acción. Si en la ciudad no existía el espacio que necesitábamos, lo íbamos a crear.",
      {
        type: "image",
        src: "/photos/blog/fundadoras-abrazo-gafas.jpg",
        alt: "África Rodríguez y María Pierres, fundadoras de Espacio Arroelo, abrazadas y sonriendo",
        caption: "Manos a la obra: la casa que queríamos habitar, juntas.",
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
          "Los primeros años —aún en Michelena— ya se veían en fotos de comunidad: el ",
          {
            type: "link",
            href: "https://www.facebook.com/media/set/?set=a.622966211124363&type=3",
            text: "álbum de Facebook del coworking en 2014",
            external: true,
          },
          " recoge ese tono de casa compartida. Desde ahí salieron también las ",
          {
            type: "link",
            href: "/blog/global-service-jam-creatividad-arroelo",
            text: "PonteJam",
          },
          " y la ",
          {
            type: "link",
            href: "/blog/human-library-espacio-arroelo",
            text: "Human Library",
          },
          ": el salón no era solo puesto de trabajo.",
        ],
      },
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
        src: "/photos/blog/comunidad-fiesta-orballo.jpg",
        alt: "Encuentro festivo de la comunidad Arroelo con mesa, tarta y conversación",
        caption: "Celebrar juntas: así creció la casa.",
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
        src: "/photos/blog/soy-autonomo-abrazo.jpg",
        alt: "Globo corazón rojo con el mensaje «Soy autónom@ dame un abrazo» en un encuentro de comunidad",
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
        src: "/photos/blog/disfruta-arroelo-camiseta.jpg",
        alt: "Coworkers de Espacio Arroelo con la camiseta Disfruta Arroelo en el salón de Pontevedra",
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
