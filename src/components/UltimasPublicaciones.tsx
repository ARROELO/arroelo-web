import Image from "next/image";
import Link from "next/link";
import { formatPostDate, latestPosts, sourceLabel } from "@/data/posts";
import { withBase } from "@/lib/path";

export function UltimasPublicaciones() {
  const items = latestPosts(4);

  return (
    <section id="publicaciones" className="bg-paper px-6 py-120 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-caption text-graphite/70">Desde el salón</p>
            <h2 className="mt-4 max-w-[16ch] text-heading-lg text-ink">
              Últimas publicaciones
            </h2>
            <p className="mt-6 max-w-xl text-body-lg text-ink/70">
              Lo que contamos en Instagram y en el blog: Café a la fresca,
              encuentros y la vida del coworking.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-3 text-caption text-ink transition-colors hover:border-ink/40"
          >
            Ver el blog
          </Link>
        </div>

        <ul className="mt-16 grid gap-10 sm:grid-cols-2">
          {items.map((post, index) => (
            <li
              key={post.id}
              className={index === 0 ? "sm:col-span-2" : undefined}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div
                  className={`relative overflow-hidden rounded-3xl bg-mist ${
                    index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={withBase(post.image)}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes={
                      index === 0
                        ? "100vw"
                        : "(max-width: 640px) 100vw, 50vw"
                    }
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
                <h3
                  className={`mt-3 text-ink transition-colors group-hover:text-terracotta ${
                    index === 0 ? "text-heading-sm md:text-heading" : "text-heading-sm"
                  }`}
                >
                  {post.title}
                </h3>
                {index === 0 ? (
                  <p className="mt-3 max-w-2xl text-body text-ink/60">
                    {post.excerpt}
                  </p>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
