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
    // H2s are rendered as section titles by groupBodySections — skip here.
    return null;
  }

  if (block.type === "h3") {
    return (
      <h3 key={`h3-${index}`} className="blog-post-h3">
        {block.text}
      </h3>
    );
  }

  if (block.type === "image") {
    const fitClass = block.fit === "contain" ? "object-contain" : "object-cover";
    const positionClass =
      block.position === "top" ? "object-top" : "object-center";

    return (
      <figure key={`img-${index}`} className="blog-post-figure">
        <div
          className={
            block.fit === "contain"
              ? "blog-post-figure-media blog-post-figure-media--contain"
              : "blog-post-figure-media"
          }
        >
          <Image
            src={withBase(block.src)}
            alt={block.alt}
            fill
            className={`${fitClass} ${positionClass} rounded-none`}
            sizes="(max-width: 768px) 100vw, min(100vw - 2.5rem, 52rem)"
          />
        </div>
        {block.caption ? (
          <figcaption className="blog-post-figure-caption">
            {typeof block.caption === "string"
              ? block.caption
              : block.caption.map((part, partIndex) => (
                  <InlinePart key={`img-cap-${index}-${partIndex}`} part={part} />
                ))}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  if (block.type === "video") {
    const params = new URLSearchParams();
    if (typeof block.start === "number" && block.start > 0) {
      params.set("start", String(Math.floor(block.start)));
    }
    const query = params.toString();
    const embedSrc = `https://www.youtube-nocookie.com/embed/${block.youtubeId}${
      query ? `?${query}` : ""
    }`;

    return (
      <figure key={`video-${index}`} className="blog-post-figure blog-post-video">
        <div className="blog-post-video-media">
          <iframe
            src={embedSrc}
            title={block.title ?? "Vídeo de YouTube"}
            className="blog-post-video-iframe rounded-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
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

type BodySection = {
  title: string | null;
  blocks: { block: BlogBodyBlock; index: number }[];
};

/** Group body into H2 sections so each heading shares a grid row with its content. */
function groupBodySections(body: BlogBodyBlock[]): BodySection[] {
  const sections: BodySection[] = [];
  let current: BodySection = { title: null, blocks: [] };

  body.forEach((block, index) => {
    if (typeof block !== "string" && block.type === "h2") {
      if (current.title !== null || current.blocks.length > 0) {
        sections.push(current);
      }
      current = { title: block.text, blocks: [] };
      return;
    }
    current.blocks.push({ block, index });
  });

  if (current.title !== null || current.blocks.length > 0) {
    sections.push(current);
  }

  return sections;
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

  const sections = groupBodySections(post.body);

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
                  className={`blog-post-cover-image rounded-none ${
                    post.imageFit === "contain"
                      ? "object-contain"
                      : "object-cover"
                  } ${
                    post.imagePosition === "top"
                      ? "object-top"
                      : "object-center"
                  }`}
                  sizes="(max-width: 860px) 100vw, 40vw"
                />
              </div>
            </div>
          </header>

          <div className="blog-post-body">
            <div className="blog-post-content">
              <p className="blog-post-lede">{post.excerpt}</p>
              {sections.map((section, sectionIndex) => (
                <section
                  key={`section-${sectionIndex}`}
                  className={
                    section.title
                      ? "blog-post-section"
                      : "blog-post-section blog-post-section--lead"
                  }
                >
                  {section.title ? (
                    <h2 className="blog-post-h2">{section.title}</h2>
                  ) : null}
                  <div className="blog-post-section-body">
                    {section.blocks.map(({ block, index }) => (
                      <BodyBlock key={index} block={block} index={index} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
