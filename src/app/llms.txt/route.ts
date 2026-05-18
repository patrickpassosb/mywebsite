import { NextResponse } from 'next/server';
import { getArticles } from '@/lib/articles';
import { siteUrl } from '@/lib/site';

export async function GET() {
  const articles = await getArticles('en');

  let text = `# Patrick Passos's Website\n\n`;
  text += `> This file provides an index of the technical articles available on my site, formatted specifically for AI agents and LLMs.\n\n`;
  
  text += `## Main Pages\n\n`;
  text += `You can find more information about my work on the following pages (available in HTML):\n`;
  text += `- **Home**: ${siteUrl}/en\n`;
  text += `- **Projects**: ${siteUrl}/en/projects\n`;
  text += `- **Services**: ${siteUrl}/en/services\n`;
  text += `- **Journey**: ${siteUrl}/en/journey\n\n`;

  text += `## Articles (Markdown Available)\n\n`;
  text += `The following articles are fully available in raw Markdown. To read them, simply append \`.md\` to their URL as shown below:\n\n`;

  for (const article of articles) {
    const url = `${siteUrl}/en/articles/${article.slug}.md`;
    text += `- [${article.title}](${url}): ${article.description}\n`;
  }

  return new NextResponse(text, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
