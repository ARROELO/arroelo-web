import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/Contacto";
import { blogPosts } from "@/data/blog";
import { withBase } from "@/lib/path";
import "./blog.css";

export const metadata: Metadata = {
  title: "Blog — Arroelo | Coworking en Pontevedra",
  description:
    "Historias del salón: café a la fresca, comunidad, luz y vida en el centro de Pontevedra.",
};

function BlogCard({
  slug,
  title,
  label,
  image,
  alt,
  index,
}: {
  slug: string;
  title: string;
  label: string;
  image: string;
  alt: string;
  index: number;
}) {
  const delayMs = Math.min(index * 55, 480);

  return (
    <Link
      href={`/blog/${slug}`}
      className="blog-card"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div className="blog-media rounded-none">
        <Image
          src={withBase(image)}
          alt={alt}
          fill
          className="blog-photo rounded-none"
          sizes="(max-width: 767px) 50vw, 33vw"
          priority={index < 3}
        />
      </div>
      <div className="blog-meta">
        <p className="blog-label">{label}</p>
        <h2 className="blog-title">{title}</h2>
      </div>
    </Link>
  );
}

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
              index={index}
            />
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
