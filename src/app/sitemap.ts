import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: new Date("2026-10-06"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/espacio"),
      lastModified: new Date("2026-10-06"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/coworkers"),
      lastModified: new Date("2026-10-06"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: new Date("2026-10-06"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];

  const posts: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...posts];
}
