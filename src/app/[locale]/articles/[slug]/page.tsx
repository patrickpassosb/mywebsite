import type { ComponentProps } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getArticle, getArticleSlugs } from '@/lib/articles';
import { locales, type Locale } from '@/lib/site';

type Params = Promise<{ locale: Locale; slug: string }>;

const mdxComponents = {
  p: (props: ComponentProps<'p'>) => (
    <p className="mb-6 font-body text-lg text-on-surface-variant leading-relaxed" {...props} />
  ),
  h2: (props: ComponentProps<'h2'>) => (
    <h2 className="font-serif italic text-3xl text-on-surface mt-12 mb-4" {...props} />
  ),
  h3: (props: ComponentProps<'h3'>) => (
    <h3 className="font-serif italic text-2xl text-on-surface mt-10 mb-3" {...props} />
  ),
  ul: (props: ComponentProps<'ul'>) => (
    <ul className="list-disc pl-6 mb-6 space-y-2 text-on-surface-variant" {...props} />
  ),
  ol: (props: ComponentProps<'ol'>) => (
    <ol className="list-decimal pl-6 mb-6 space-y-2 text-on-surface-variant" {...props} />
  ),
  li: (props: ComponentProps<'li'>) => <li className="leading-relaxed" {...props} />,
  a: (props: ComponentProps<'a'>) => (
    <a className="text-primary underline underline-offset-4 hover:no-underline" {...props} />
  ),
  strong: (props: ComponentProps<'strong'>) => (
    <strong className="text-on-surface font-semibold" {...props} />
  ),
  blockquote: (props: ComponentProps<'blockquote'>) => (
    <blockquote
      className="border-l-2 border-primary pl-6 italic text-on-surface my-8"
      {...props}
    />
  ),
  code: (props: ComponentProps<'code'>) => (
    <code className="font-mono text-sm bg-surface-container px-1.5 py-0.5 rounded" {...props} />
  ),
  pre: (props: ComponentProps<'pre'>) => (
    <pre
      className="font-mono text-sm bg-surface-container-lowest p-6 rounded my-6 overflow-x-auto"
      {...props}
    />
  ),
  hr: () => <hr className="border-outline-variant/30 my-12" />,
};

export async function generateStaticParams() {
  const slugs = await getArticleSlugs();
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = await getArticle(slug, locale);
  if (!article) return {};
  const path = `/${locale}/articles/${slug}`;
  return {
    title: article.frontmatter.title,
    description: article.frontmatter.description,
    alternates: {
      canonical: path,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}/articles/${slug}`])),
    },
    openGraph: {
      title: article.frontmatter.title,
      description: article.frontmatter.description,
      url: path,
      type: 'article',
      publishedTime: article.frontmatter.date,
    },
    twitter: {
      title: article.frontmatter.title,
      description: article.frontmatter.description,
    },
  };
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const article = await getArticle(slug, locale);
  if (!article) notFound();
  const t = await getTranslations('Articles');

  const dateLabel = new Intl.DateTimeFormat(locale === 'pt' ? 'pt-BR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(article.frontmatter.date));

  return (
    <article className="max-w-3xl mx-auto px-8 pt-32 pb-48">
      {article.usedFallback && (
        <div className="mb-12 border border-outline-variant/30 bg-surface-container-lowest px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant">
          {t('translation_pending')}
        </div>
      )}
      <header className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-outline block mb-6">
          {dateLabel}
        </span>
        <h1 className="font-serif italic text-5xl leading-tight text-on-surface mb-6">
          {article.frontmatter.title}
        </h1>
        <p className="font-body text-xl text-on-surface-variant max-w-2xl">
          {article.frontmatter.description}
        </p>
      </header>
      <div>
        <MDXRemote source={article.content} components={mdxComponents} />
      </div>
    </article>
  );
}
