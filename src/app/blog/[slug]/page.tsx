import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/Contacto";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { withBase } from "@/lib/path";
import "../blog.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Entrada no encontrada — Arroelo" };

  return {
    title: post.seoTitle
      ? `${post.seoTitle} — Blog | Arroelo`
      : `${post.title} — Blog | Arroelo`,
    description: post.excerpt,
  };
}

function formatDate(iso: string): string {
  const date = new Date(`${iso}T12:00:00`);
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <SiteHeader variant="solid" />
      <main className="blog-post-page">
        <section className="blog-post-hero">
          <Image
            src={withBase(post.image)}
            alt={post.alt}
            fill
            priority
            className="object-cover object-center rounded-none"
            sizes="100vw"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,24,20,0.35)_0%,rgba(26,24,20,0.78)_100%)]"
          />
          <div className="relative z-10 mx-auto flex min-h-[min(72svh,44rem)] max-w-[1100px] flex-col justify-end px-6 pb-16 pt-28 md:px-10 md:pb-24">
            <p className="text-caption text-cream/80">{post.label}</p>
            <h1 className="mt-4 max-w-[16ch] text-heading-lg text-paper">
              {post.title}
            </h1>
            <p className="mt-6 text-caption text-paper/70">
              {formatDate(post.date)}
            </p>
          </div>
        </section>

        <article className="blog-post-body">
          <div className="blog-post-content">
            <Link href="/blog" className="blog-back">
              ← Blog
            </Link>
            <p className="text-body-lg text-ink/75">{post.excerpt}</p>
            <div className="mt-10 text-body text-ink/70">
              {post.body.map((block, index) =>
                typeof block === "string" ? (
                  <p key={`p-${index}`}>{block}</p>
                ) : (
                  <h2 key={`h2-${index}`} className="blog-post-h2">
                    {block.text}
                  </h2>
                ),
              )}
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
