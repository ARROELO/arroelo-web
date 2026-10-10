import { blogPosts } from "@/data/blog";
import { plans } from "@/data/tarifas";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

/** llms.txt (https://llmstxt.org): resumen del sitio para asistentes de IA. */
export function GET() {
  const tarifas = plans
    .map((plan) => {
      const prices = plan.prices
        .map((price) => `${price.label}: ${price.amount} ${price.note}`)
        .join("; ");
      return `- ${plan.title} — ${plan.tagline} (${prices})`;
    })
    .join("\n");

  const posts = [...blogPosts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map(
      (post) =>
        `- [${post.title}](${absoluteUrl(`/blog/${post.slug}`)}): ${post.excerpt}`,
    )
    .join("\n");

  const body = `# Espacio Arroelo

> Espacio Arroelo es un coworking en el centro de Pontevedra (Galicia, España), abierto desde 2013 por África Rodríguez y María Pierres. Ofrece mesa fija, sala exclusiva, media jornada y bonos de días sueltos, con acceso 24 horas, sin permanencia y con una comunidad que se junta cada día a las 11:30 en el "Café a la fresca".

## Datos clave

- Dirección: Rúa Cobián Roffignac 6, planta 3, 36002 Pontevedra
- Teléfono: +34 610 602 012
- Email: info@espacioarroelo.com
- Instagram: https://www.instagram.com/arroelo/
- Acceso 24 horas para mesa fija y sala exclusiva
- Fibra óptica 1 Giga, salas de reunión con pantalla 4K, todos los gastos incluidos
- Pet friendly: se admiten mascotas que saben convivir en el salón
- Acceso gratuito al coworking de Anceu Coliving (aldea en Ponte Caldelas) para quien tiene tarifa
- Forma parte de la European Creative Hubs Network (ECHN)

## Tarifas (precios sin IVA)

${tarifas}

## Páginas

- [Inicio](${absoluteUrl("/")}): qué es Arroelo y cómo es el día a día
- [El espacio](${absoluteUrl("/espacio")}): el salón, las salas y los servicios
- [Tarifas](${absoluteUrl("/tarifas")}): planes, precios y qué incluye cada uno
- [Coworkers](${absoluteUrl("/coworkers")}): la comunidad que trabaja en Arroelo
- [Blog](${absoluteUrl("/blog")}): historias de la comunidad

## Blog

${posts}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
