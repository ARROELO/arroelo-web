import { contacto, horario } from "@/data/contacto";
import { plans } from "@/data/tarifas";

export type FaqItem = {
  id: string;
  question: string;
  /** Texto plano: se usa tal cual en la página y en el JSON-LD FAQPage. */
  answer: string;
  link?: { href: string; label: string };
};

const priceList = plans
  .flatMap((plan) =>
    plan.prices.map((price) => {
      const name = price.label.startsWith("Bono")
        ? price.label
        : plan.prices.length > 1
          ? `${plan.title} (${price.label.split(" · ")[0].toLowerCase()})`
          : plan.title;
      return `${name}: ${price.amount} ${price.note}`;
    }),
  )
  .join("; ");

export const faq: FaqItem[] = [
  {
    id: "precio",
    question: "¿Cuánto cuesta el coworking en Espacio Arroelo?",
    answer: `Tenemos cuatro formas de estar en Arroelo. ${priceList}. Todos los gastos están incluidos y no hay permanencia.`,
    link: { href: "/tarifas", label: "Ver tarifas" },
  },
  {
    id: "prueba",
    question: "¿Puedo probar el coworking antes de apuntarme?",
    answer:
      "Sí. La primera semana es sin coste y sin compromiso: escríbenos, te contamos qué tarifa encaja contigo y vienes a trabajar unos días con nosotras.",
  },
  {
    id: "permanencia",
    question: "¿Hay permanencia?",
    answer:
      "No. Las tarifas son mensuales y sin permanencia; los bonos de días sueltos se usan cuando los necesitas.",
  },
  {
    id: "horario",
    question: "¿Qué horario tiene el coworking?",
    answer: `Con jornada completa o sala exclusiva tienes acceso 24 horas, todos los días. La media jornada es de 8:00 a 15:00 (mañanas) o de 15:00 a 22:00 (tardes). El horario de atención es de ${horario.label.charAt(0).toLowerCase()}${horario.label.slice(1)}.`,
  },
  {
    id: "incluye",
    question: "¿Qué incluye la tarifa?",
    answer:
      "Puesto de trabajo en el salón, fibra óptica de 1 Giga, todos los gastos, el Café a la fresca diario, acceso gratuito al coworking de Anceu Coliving y entrar en las redes de Arroelo, como la European Creative Hubs Network.",
  },
  {
    id: "salas",
    question: "¿Puedo reservar salas de reunión?",
    answer:
      "Sí, tenemos salas de reunión con pantalla 4K. Con jornada completa o sala exclusiva la reserva es ilimitada; con media jornada tienes 8 horas a la semana. Los bonos de días sueltos no incluyen reserva de salas.",
  },
  {
    id: "mesa-fija",
    question: "¿Puedo dejar mis cosas en la mesa?",
    answer:
      "Con jornada completa tienes mesa exclusiva y puedes dejar tus cosas. Con media jornada o bonos el puesto no es permanente, así que la mesa se deja libre al terminar.",
  },
  {
    id: "equipos",
    question: "¿Tenéis espacio privado para un equipo?",
    answer:
      "Sí: la sala exclusiva es tu propia sala dentro de Arroelo, con acceso 24 horas, para trabajar en equipo sin perder la vida del salón.",
    link: { href: "/tarifas#sala-exclusiva", label: "Ver sala exclusiva" },
  },
  {
    id: "mascotas",
    question: "¿Puedo ir con mi perro?",
    answer:
      "Sí, somos pet friendly. Son bienvenidas las mascotas que saben convivir en el salón.",
    link: {
      href: "/blog/coworking-dog-friendly-pontevedra-arroelo",
      label: "Coworking dog-friendly en Arroelo",
    },
  },
  {
    id: "cafe",
    question: "¿Qué es el Café a la fresca?",
    answer:
      "Cada día a las 11:30 paramos a tomar un café juntas. Es el momento de las ideas, las visitas y la perspectiva: así se teje la comunidad de Arroelo, sin networking forzado.",
    link: {
      href: "/blog/cafe-a-la-fresca-comunidad-arroelo",
      label: "Leer sobre el Café a la fresca",
    },
  },
  {
    id: "anceu",
    question: "¿Qué es Anceu y por qué está incluido?",
    answer:
      "Anceu Coliving es un espacio rural en una aldea de Ponte Caldelas, a media hora de Pontevedra. Si tienes tarifa en Arroelo, puedes usar su coworking gratis cuando te apetezca cambiar la ciudad por la aldea.",
    link: {
      href: "/blog/anceu-coliving-ciudad-aldea",
      label: "De la ciudad a la aldea",
    },
  },
  {
    id: "donde",
    question: "¿Dónde está Espacio Arroelo?",
    answer: `En ${contacto.street}, ${contacto.postalCode} ${contacto.city}, en el centro de Pontevedra, una ciudad que se recorre a pie.`,
  },
  {
    id: "contacto",
    question: "¿Cómo reservo o pido información?",
    answer: `Escríbenos por WhatsApp o llama al ${contacto.phone}, o manda un email a ${contacto.email}. Y si pasas por Pontevedra, ven a tomar un café.`,
    link: { href: "/#contacto", label: "Contactar" },
  },
];
