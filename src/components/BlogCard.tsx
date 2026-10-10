import Image from "next/image";
import Link from "next/link";
import { withBase } from "@/lib/path";

export function BlogCard({
  slug,
  title,
  label,
  image,
  alt,
  imageFit,
  imagePosition,
  index,
  headingAs: Heading = "h2",
}: {
  slug: string;
  title: string;
  label: string;
  image: string;
  alt: string;
  imageFit?: "cover" | "contain";
  imagePosition?: "center" | "top" | "right";
  index: number;
  /** h2 en el listado del blog; h3 dentro de un post. */
  headingAs?: "h2" | "h3";
}) {
  const delayMs = Math.min(index * 55, 480);
  const fitClass =
    imageFit === "contain" ? "object-contain" : "object-cover";
  const positionClass =
    imagePosition === "top"
      ? "object-top"
      : imagePosition === "right"
        ? "object-right"
        : "object-center";

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
          className={`blog-photo rounded-none ${fitClass} ${positionClass}`}
          sizes="(max-width: 767px) 50vw, 25vw"
          priority={index < 3}
        />
      </div>
      <div className="blog-meta">
        <p className="blog-label">{label}</p>
        <Heading className="blog-title">{title}</Heading>
      </div>
    </Link>
  );
}
