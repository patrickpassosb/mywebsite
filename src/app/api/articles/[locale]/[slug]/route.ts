import { NextResponse } from 'next/server';
import { getArticle } from '@/lib/articles';
import type { Locale } from '@/lib/site';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ locale: string; slug: string }> }
) {
  const { locale, slug } = await params;
  const article = await getArticle(slug, locale as Locale);

  if (!article) {
    return new NextResponse('Article not found', { status: 404 });
  }

  // Combine metadata and content into pure Markdown
  let markdown = `# ${article.frontmatter.title}\n\n`;
  if (article.frontmatter.description) {
    markdown += `> ${article.frontmatter.description}\n\n`;
  }
  markdown += `*Published: ${article.frontmatter.date}*\n\n---\n\n`;
  markdown += `${article.content}\n`;

  return new NextResponse(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
