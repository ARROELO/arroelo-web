import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { BlogCard } from "@/components/BlogCard";
import { SiteFooter } from "@/components/Contacto";
import { blogPosts } from "@/data/blog";
import { pageMetadata } from "@/lib/seo";
import "./blog.css";

export const metadata: Metadata = pageMetadata({
  title: "Blog — Arroelo | Coworking en Pontevedra",
  description:
    "Historias del coworking Espacio Arroelo en Pontevedra: Café a la fresca, comunidad, Anceu, redes europeas y vida en el centro de la ciudad.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main className="blog-page">
        <header className="blog-intro">
          <p className="text-label text-graphite/70">Blog</p>
          <h1 className="mt-4 max-w-[14ch] text-heading-lg text-ink md:mt-5">
            Del salón
          </h1>
          <p className="mt-5 max-w-xl text-body-lg text-ink/65 md:mt-6">
            Café, mesa, luz y comunidad — lo que pasa en Arroelo cuando nadie
            mira la agenda.
          </p>
        </header>

        <section className="blog-grid" aria-label="Entradas del blog">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              label={post.label}
              image={post.image}
              alt={post.alt}
              imageFit={post.imageFit}
              imagePosition={post.imagePosition}
              index={index}
            />
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
