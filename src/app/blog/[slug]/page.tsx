import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/Contacto";
import {
  blogPosts,
  getPostBySlug,
  type BlogBodyBlock,
  type BlogInline,
} from "@/data/blog";
import { withBase } from "@/lib/path";
import { absoluteUrl } from "@/lib/site";
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

  const title = post.seoTitle
    ? `${post.seoTitle} — Blog | Arroelo`
    : `${post.title} — Blog | Arroelo`;
  const description = post.excerpt;
  const canonicalPath = `/blog/${post.slug}`;
  const imageUrl = absoluteUrl(post.image);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      type: "article",
      locale: "es_ES",
      url: absoluteUrl(canonicalPath),
      publishedTime: post.date,
      images: [
        {
          url: imageUrl,
          alt: post.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
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

function InlinePart({ part }: { part: BlogInline }) {
  if (typeof part === "string") {
    return <>{part}</>;
  }

  if (part.external) {
    return (
      <a
        href={part.href}
        target="_blank"
        rel="noopener noreferrer"
        className="blog-inline-link"
      >
        {part.text}
      </a>
    );
  }

  return (
    <Link href={part.href} className="blog-inline-link">
      {part.text}
    </Link>
  );
}

function BodyBlock({ block, index }: { block: BlogBodyBlock; index: number }) {
  if (typeof block === "string") {
    return <p key={`p-${index}`}>{block}</p>;
  }

  if (block.type === "h2") {
    return (
      <h2 key={`h2-${index}`} className="blog-post-h2">
        {block.text}
      </h2>
    );
  }

  if (block.type === "h3") {
    return (
      <h3 key={`h3-${index}`} className="blog-post-h3">
        {block.text}
      </h3>
    );
  }

  if (block.type === "image") {
    return (
      <figure key={`img-${index}`} className="blog-post-figure">
        <div className="blog-post-figure-media">
          <Image
            src={withBase(block.src)}
            alt={block.alt}
            fill
            className="object-cover object-center rounded-none"
            sizes="(max-width: 768px) 100vw, min(100vw - 2.5rem, 52rem)"
          />
        </div>
        {block.caption ? (
          <figcaption className="blog-post-figure-caption">
            {block.caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <p key={`rich-${index}`}>
      {block.parts.map((part, partIndex) => (
        <InlinePart key={`${index}-${partIndex}`} part={part} />
      ))}
    </p>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const pageUrl = absoluteUrl(`/blog/${post.slug}`);
  const imageUrl = absoluteUrl(post.image);
  const bodyImages = post.body
    .filter(
      (block): block is Extract<BlogBodyBlock, { type: "image" }> =>
        typeof block !== "string" && block.type === "image",
    )
    .map((block) => absoluteUrl(block.src));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [imageUrl, ...bodyImages],
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    author: {
      "@type": "Organization",
      name: "Espacio Arroelo",
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: "Espacio Arroelo",
      url: absoluteUrl("/"),
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo-arroelo-ink.png"),
      },
    },
    inLanguage: "es-ES",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader variant="solid" />
      <main className="blog-post-page">
        <article>
          <header className="blog-post-head">
            <div className="blog-post-head-inner">
              <div className="blog-post-reading">
                <Link href="/blog" className="blog-back">
                  ← Volver al blog
                </Link>
                <p className="blog-post-label">{post.label}</p>
                <h1 className="blog-post-title">{post.title}</h1>
                <p className="blog-post-byline">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </p>
              </div>
              <div className="blog-post-cover">
                <Image
                  src={withBase(post.image)}
                  alt={post.alt}
                  fill
                  priority
                  className="blog-post-cover-image object-cover object-center rounded-none"
                  sizes="(max-width: 860px) 100vw, 40vw"
                />
              </div>
            </div>
          </header>

          <div className="blog-post-body">
            <div className="blog-post-content">
              <p className="blog-post-lede">{post.excerpt}</p>
              <div className="blog-post-prose">
                {post.body.map((block, index) => (
                  <BodyBlock key={index} block={block} index={index} />
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
