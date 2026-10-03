import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/Contacto";
import {
  formatPostDate,
  getPostBySlug,
  posts,
  sourceLabel,
} from "@/data/posts";
import { withBase } from "@/lib/path";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Publicación | Arroelo" };
  return {
    title: `${post.title} | Arroelo`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const paragraphs = post.body
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <>
      <SiteHeader variant="solid" />
      <main>
        <article>
          <header className="bg-fog px-6 pb-12 pt-28 md:px-10 md:pb-16 md:pt-32">
            <div className="mx-auto max-w-[760px]">
              <Link
                href="/blog"
                className="text-caption text-ink/45 transition-colors hover:text-ink"
              >
                ← Blog
              </Link>
              <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-caption text-terracotta">
                  {sourceLabel(post.source)}
                </span>
                <span className="text-caption text-ink/35">
                  {formatPostDate(post.date)}
                </span>
              </div>
              <h1 className="mt-4 text-heading-lg text-ink">{post.title}</h1>
            </div>
          </header>

          <div className="bg-fog px-6 pb-16 md:px-10">
            <div className="relative mx-auto aspect-[16/10] max-w-[1100px] overflow-hidden rounded-3xl bg-mist">
              <Image
                src={withBase(post.image)}
                alt={post.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>

          <div className="bg-paper px-6 py-16 md:px-10 md:py-24">
            <div className="mx-auto max-w-[760px] space-y-6">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-body-lg text-ink/75 whitespace-pre-wrap">
                  {paragraph}
                </p>
              ))}

              <div className="pt-8">
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-body text-paper transition-transform hover:scale-[1.02]"
                >
                  {post.source === "instagram"
                    ? "Ver en Instagram"
                    : "Ver en espacioarroelo.es"}
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
