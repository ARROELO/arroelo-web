export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  label: string;
  image: string;
  alt: string;
  excerpt: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
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
