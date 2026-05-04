import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { getArticles } from '@/lib/articles';
import type { Locale } from '@/lib/site';

type Params = Promise<{ locale: Locale }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Articles' });
  const path = `/${locale}/articles`;
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: path,
      languages: {
        en: '/en/articles',
        pt: '/pt/articles',
      },
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: path,
    },
    twitter: {
      title: t('seo.title'),
      description: t('seo.description'),
    },
  };
}

export default async function ArticlesPage({ params }: { params: Params }) {
  const { locale } = await params;
  const t = await getTranslations('Articles');
  const articles = await getArticles(locale);
  const dateFormatter = new Intl.DateTimeFormat(locale === 'pt' ? 'pt-BR' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <section className="max-w-screen-2xl mx-auto px-8 pt-32 pb-48">
      <h1 className="font-serif italic text-6xl leading-tight text-on-surface mb-8">
        {t('title')}
      </h1>
      <p className="font-body text-xl text-on-surface-variant max-w-2xl mb-16">
        {t('description')}
      </p>

      {articles.length === 0 ? (
        <div className="border border-outline-variant/30 bg-surface-container-lowest p-16 text-center">
          <p className="text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            {t('empty')}
          </p>
        </div>
      ) : (
        <ul className="border-t border-outline-variant/20">
          {articles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/${locale}/articles/${article.slug}`}
                className="grid grid-cols-12 py-8 border-b border-outline-variant/20 hover:bg-surface-container-low transition-colors px-4 group"
              >
                <div className="col-span-12 md:col-span-2 font-mono text-xs text-outline pt-1">
                  {dateFormatter.format(new Date(article.date))}
                </div>
                <div className="col-span-12 md:col-span-5 font-serif italic text-2xl text-on-surface mt-2 md:mt-0 group-hover:text-primary transition-colors">
                  {article.title}
                </div>
                <div className="col-span-12 md:col-span-5 font-body text-on-surface-variant leading-relaxed mt-2 md:mt-0">
                  {article.description}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
