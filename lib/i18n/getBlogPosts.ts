import type { Locale } from "./config";

export async function getBlogPosts(locale: Locale) {
  if (locale === "es") {
    const mod = await import("@/data/blog-posts-es");
    return mod.blogPostsEs;
  }
  const mod = await import("@/data/blog-posts");
  return mod.blogPosts;
}
