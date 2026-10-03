import rawPosts from "./posts.json";

export type PostSource = "instagram" | "wordpress";

export type Post = {
  id: string;
  source: PostSource;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  date: string;
  image: string;
  imageAlt: string;
  href: string;
  isVideo: boolean;
};

export const posts = (rawPosts as Post[]).slice().sort((a, b) => {
  return (b.date || "").localeCompare(a.date || "");
});

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function formatPostDate(date: string): string {
  if (!date) return "";
  const parsed = new Date(`${date}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsed);
}

export function sourceLabel(source: PostSource): string {
  return source === "instagram" ? "Instagram" : "Blog";
}

export function latestPosts(limit = 4): Post[] {
  return posts.slice(0, limit);
}
