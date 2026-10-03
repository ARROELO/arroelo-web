import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/Contacto";
import { formatPostDate, posts, sourceLabel } from "@/data/posts";
import { withBase } from "@/lib/path";

export const metadata: Metadata = {
  title: "Blog — Publicaciones y Café a la fresca | Arroelo",
  description:
    "Últimas publicaciones de Espacio Arroelo: Instagram, Café a la fresca, intercambios europeos y vida del coworking en Pontevedra.",
};

export default function BlogPage() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <SiteHeader variant="solid" />
      <main>
        <section className="bg-fog px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-32">
          <div className="mx-auto max-w-[1100px]">
            <p className="reveal text-caption text-graphite/70">Blog</p>
            <h1 className="reveal reveal-delay-1 mt-4 max-w-[14ch] text-heading-lg text-ink md:text-display">
              Publicaciones
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-body-lg text-ink/70">
              Del Instagram @arroelo y del archivo de espacioarroelo.es:
              encuentros, viajes y la mesa del Café a la fresca.
            </p>
          </div>
        </section>

        {featured ? (
          <section className="bg-fog px-6 pb-16 md:px-10">
            <div className="mx-auto max-w-[1100px]">
              <Link href={`/blog/${featured.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-mist md:aspect-[21/9]">
                  <Image
                    src={withBase(featured.image)}
                    alt={featured.imageAlt}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="100vw"
                  />
                </div>
                <div className="mt-8 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="text-caption text-terracotta">
                      {sourceLabel(featured.source)}
                    </span>
                    <span className="text-caption text-ink/35">
                      {formatPostDate(featured.date)}
                    </span>
                  </div>
                  <h2 className="mt-4 text-heading text-ink transition-colors group-hover:text-terracotta">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-body-lg text-ink/65">
                    {featured.excerpt}
                  </p>
                </div>
              </Link>
            </div>
          </section>
        ) : null}

        <section className="bg-paper px-6 py-120 md:px-10">
          <div className="mx-auto max-w-[1100px]">
            <ul className="grid gap-14 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <li key={post.id}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-mist">
                      <Image
                        src={withBase(post.image)}
                        alt={post.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-caption text-terracotta">
                        {sourceLabel(post.source)}
                      </span>
                      <span className="text-caption text-ink/35">
                        {formatPostDate(post.date)}
                      </span>
                    </div>
                    <h2 className="mt-3 text-heading-sm text-ink transition-colors group-hover:text-terracotta">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-body text-ink/60 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-20 border-t border-ink/10 pt-12">
              <p className="text-body text-ink/55">
                ¿Quieres ver más en tiempo real?{" "}
                <a
                  href="https://www.instagram.com/arroelo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline decoration-ink/20 underline-offset-4 hover:text-terracotta"
                >
                  Síguenos en Instagram
                </a>{" "}
                o consulta el{" "}
                <a
                  href="https://espacioarroelo.es/projects/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline decoration-ink/20 underline-offset-4 hover:text-terracotta"
                >
                  archivo original
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
