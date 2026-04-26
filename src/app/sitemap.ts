import type { MetadataRoute } from 'next';
import { locales, siteUrl } from '@/lib/site';

const routes = ['', '/projects', '/journey', '/writing', '/services'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteUrl}/${locale}${route}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${siteUrl}/${l}${route}`]),
        ),
      },
    })),
  );
}
