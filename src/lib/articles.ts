import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import type { Locale } from './site';

const ARTICLES_DIR = path.join(process.cwd(), 'content', 'articles');
const FALLBACK_LOCALE: Locale = 'en';

export type ArticleFrontmatter = {
  title: string;
  description: string;
  date: string;
};

export type ArticleSummary = ArticleFrontmatter & {
  slug: string;
  hasTranslation: boolean;
};

export type ArticleSource = {
  slug: string;
  frontmatter: ArticleFrontmatter;
  content: string;
  usedFallback: boolean;
};

async function readSlugDirs(): Promise<string[]> {
  try {
    const entries = await fs.readdir(ARTICLES_DIR, { withFileTypes: true });
    return entries.filter((e) => e.isDirectory()).map((e) => e.name);
  } catch {
    return [];
  }
}

async function readLocaleFile(slug: string, locale: Locale): Promise<string | null> {
  const filePath = path.join(ARTICLES_DIR, slug, `${locale}.mdx`);
  try {
    return await fs.readFile(filePath, 'utf8');
  } catch {
    return null;
  }
}

function parseFrontmatter(raw: string): ArticleFrontmatter | null {
  const { data } = matter(raw);
  const fm = data as Partial<ArticleFrontmatter>;
  if (!fm.title || !fm.date) return null;
  return {
    title: fm.title,
    description: fm.description ?? '',
    date: fm.date,
  };
}

export async function getArticleSlugs(): Promise<string[]> {
  return readSlugDirs();
}

export async function getArticles(locale: Locale): Promise<ArticleSummary[]> {
  const slugs = await readSlugDirs();
  const items = await Promise.all(
    slugs.map(async (slug) => {
      const localeRaw = await readLocaleFile(slug, locale);
      const raw = localeRaw ?? (await readLocaleFile(slug, FALLBACK_LOCALE));
      if (!raw) return null;
      const fm = parseFrontmatter(raw);
      if (!fm) return null;
      return { slug, hasTranslation: localeRaw !== null, ...fm } satisfies ArticleSummary;
    }),
  );
  return items
    .filter((item): item is ArticleSummary => item !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getArticle(slug: string, locale: Locale): Promise<ArticleSource | null> {
  const native = await readLocaleFile(slug, locale);
  const raw = native ?? (await readLocaleFile(slug, FALLBACK_LOCALE));
  if (!raw) return null;
  const fm = parseFrontmatter(raw);
  if (!fm) return null;
  const { content } = matter(raw);
  return {
    slug,
    frontmatter: fm,
    content,
    usedFallback: native === null,
  };
}
