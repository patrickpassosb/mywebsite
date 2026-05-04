import type { MetadataRoute } from 'next';
import { getArticleSlugs } from '@/lib/articles';
import { locales, siteUrl } from '@/lib/site';

const staticRoutes = ['', '/projects', '/journey', '/articles', '/services'] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const slugs = await getArticleSlugs();
  const articleRoutes = slugs.map((slug) => `/articles/${slug}` as const);
  const routes = [...staticRoutes, ...articleRoutes];

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
