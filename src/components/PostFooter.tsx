import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts, type BlogPost } from "@/data/blog";
import { contacto } from "@/data/contacto";

/** Hasta 4 entradas: primero las de la misma etiqueta, luego las siguientes del listado. */
function relatedPosts(post: BlogPost, count = 4): BlogPost[] {
  const start = blogPosts.findIndex((p) => p.slug === post.slug);
  const others = [...blogPosts.slice(start + 1), ...blogPosts.slice(0, start)];
  const sameLabel = others.filter((p) => p.label === post.label);
  const rest = others.filter((p) => p.label !== post.label);
  return [...sameLabel, ...rest].slice(0, count);
}

/** Pie de cada entrada: invitación a probar Arroelo y más lecturas. */
export function PostFooter({ post }: { post: BlogPost }) {
  const related = relatedPosts(post);

  return (
    <aside className="blog-post-footer" aria-label="Seguir con Arroelo">
      <div className="blog-post-cta">
        <p className="text-label text-graphite/70">Pruébalo</p>
        <h2 className="mt-4 text-espacio-intro-title text-ink">
          Primera semana sin coste
        </h2>
        <p className="mt-2 max-w-[40ch] text-espacio-intro-body text-ink/70">
          Ven a trabajar unos días al salón, sin compromiso. Te contamos qué
          tarifa encaja contigo.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={contacto.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ink"
          >
            Escríbenos por WhatsApp
          </a>
          <Link href="/tarifas" className="btn btn-primary">
            Ver tarifas
          </Link>
        </div>
        <p className="mt-6 text-body text-ink/60">
          ¿Dudas?{" "}
          <Link
            href="/faq"
            className="underline decoration-terracotta/55 underline-offset-4 hover:text-terracotta"
          >
            Preguntas frecuentes
          </Link>
        </p>
      </div>

      <div className="blog-post-related">
        <h2 className="text-label text-graphite/70">Sigue leyendo</h2>
        <div className="blog-grid mt-8">
          {related.map((p, index) => (
            <BlogCard
              key={p.slug}
              slug={p.slug}
              title={p.title}
              label={p.label}
              image={p.image}
              alt={p.alt}
              imageFit={p.imageFit}
              imagePosition={p.imagePosition}
              index={index}
              headingAs="h3"
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
