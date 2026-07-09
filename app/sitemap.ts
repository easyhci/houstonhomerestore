import { MetadataRoute } from 'next';
import { blogPosts } from '../data/blog-posts';

const BASE_URL = 'https://houstonhomerestore.com';

function withAlternates(enPath: string) {
  const enUrl = `${BASE_URL}${enPath}`;
  const esUrl = `${BASE_URL}/es${enPath}`;
  return {
    languages: {
      en: enUrl,
      es: esUrl,
    },
  };
}

const staticPaths = [
  { path: '',                                          lastMod: '2026-07-09', freq: 'weekly'  as const, priority: 1.0, esPriority: 0.9 },
  { path: '/water-damage-restoration-houston',         lastMod: '2026-07-09', freq: 'monthly' as const, priority: 0.9, esPriority: 0.8 },
  { path: '/mold-removal-houston',                     lastMod: '2026-07-09', freq: 'monthly' as const, priority: 0.9, esPriority: 0.8 },
  { path: '/flood-cleanup-houston',                    lastMod: '2026-07-09', freq: 'monthly' as const, priority: 0.9, esPriority: 0.8 },
  { path: '/insurance-claim-restoration-houston',      lastMod: '2026-07-09', freq: 'monthly' as const, priority: 0.9, esPriority: 0.8 },
  { path: '/blog',                                     lastMod: '2026-07-09', freq: 'weekly'  as const, priority: 0.7, esPriority: 0.6 },
  { path: '/about',                                    lastMod: '2026-07-09', freq: 'monthly' as const, priority: 0.5, esPriority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const p of staticPaths) {
    const enPath = p.path || '/';
    entries.push({
      url: `${BASE_URL}${enPath === '/' ? '' : enPath}`,
      lastModified: new Date(p.lastMod),
      changeFrequency: p.freq,
      priority: p.priority,
      alternates: withAlternates(enPath === '/' ? '' : enPath),
    });
    entries.push({
      url: `${BASE_URL}/es${enPath === '/' ? '' : enPath}`,
      lastModified: new Date(p.lastMod),
      changeFrequency: p.freq,
      priority: p.esPriority,
      alternates: withAlternates(enPath === '/' ? '' : enPath),
    });
  }

  for (const post of blogPosts) {
    const blogPath = `/blog/${post.slug}`;
    const blogLastMod = new Date(post.updatedDate ?? post.publishDate);
    entries.push({
      url: `${BASE_URL}${blogPath}`,
      lastModified: blogLastMod,
      changeFrequency: 'weekly',
      priority: 0.7,
      alternates: withAlternates(blogPath),
    });
    entries.push({
      url: `${BASE_URL}/es${blogPath}`,
      lastModified: blogLastMod,
      changeFrequency: 'weekly',
      priority: 0.6,
      alternates: withAlternates(blogPath),
    });
  }

  return entries;
}
