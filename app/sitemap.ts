// app/sitemap.ts
import type { MetadataRoute } from "next";
import { fetchPosts } from "@/lib/wp/posts";

const SITE = "https://www.alcatrazislandticketing.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: new Date() },
    { url: `${SITE}/alcatraz-day-tour`, lastModified: new Date() },
    { url: `${SITE}/alcatraz-night-tour`, lastModified: new Date() },
    { url: `${SITE}/blog`, lastModified: new Date() },
    { url: `${SITE}/contact-us`, lastModified: new Date() },
    { url: `${SITE}/privacy-policy`, lastModified: new Date() },
    { url: `${SITE}/terms-and-conditions`, lastModified: new Date() },
  ];

  try {
    const posts = await fetchPosts();
    for (const post of posts ?? []) {
      if (!post?.slug || !post?.date) continue;
      pages.push({
        url: `${SITE}/blog/${post.slug}`,
        lastModified: new Date(post.date),
      });
    }
  } catch {
    // ignore – still return the static pages
  }

  return pages;
}

// keep it fresh if your blog updates frequently
export const dynamic = "force-dynamic";
export const revalidate = 0;
