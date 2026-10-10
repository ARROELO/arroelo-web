import { BlogCard } from "@/components/BlogCard";
import { blogPosts, type BlogPost } from "@/data/blog";

/** Hasta 4 entradas: primero las de la misma etiqueta, luego las siguientes del listado. */
function relatedPosts(post: BlogPost, count = 4): BlogPost[] {
  const start = blogPosts.findIndex((p) => p.slug === post.slug);
  const others = [...blogPosts.slice(start + 1), ...blogPosts.slice(0, start)];
  const sameLabel = others.filter((p) => p.label === post.label);
  const rest = others.filter((p) => p.label !== post.label);
  return [...sameLabel, ...rest].slice(0, count);
}

/** Pie de cada entrada: más lecturas (la invitación a probar la pone SiteFooter). */
export function PostFooter({ post }: { post: BlogPost }) {
  const related = relatedPosts(post);

  return (
    <aside className="blog-post-footer" aria-label="Sigue leyendo">
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
