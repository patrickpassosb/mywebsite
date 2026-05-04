import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { getArticles } from '@/lib/articles';
import { contact, type Locale } from '@/lib/site';

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations('Index');
  const tArticles = await getTranslations('Articles');
  const articles = (await getArticles(locale)).slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="max-w-screen-2xl mx-auto px-8 pt-32 pb-48">
        <div className="max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6 block">
            {t('title')}
          </span>
          <h1 className="font-serif italic text-6xl md:text-8xl leading-tight text-on-surface mb-8">
            Patrick Passos
          </h1>
          <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-12">
            {t('description')}
          </p>
          <div className="flex flex-wrap gap-6">
            <Link href={`/${locale}/projects`} className="bg-primary text-on-primary px-10 py-4 font-mono text-sm uppercase tracking-widest hover:bg-primary-container transition-all">
              {t('projects')}
            </Link>
            <Link href={`/${locale}/journey`} className="border border-outline-variant px-10 py-4 font-mono text-sm uppercase tracking-widest text-on-surface hover:bg-surface-container transition-all">
              {t('journey')}
            </Link>
          </div>
        </div>
      </section>

      {/* Journey Preview */}
      <section className="py-32 px-8 bg-surface">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-baseline mb-16">
            <h2 className="font-serif italic text-4xl text-on-surface">{t('journey_preview.title')}</h2>
            <Link href={`/${locale}/journey`} className="font-mono text-xs uppercase tracking-widest text-primary border-b border-primary">{t('journey_preview.link')}</Link>
          </div>
          <div className="border-t border-outline-variant/20">
            <div className="grid grid-cols-12 py-8 border-b border-outline-variant/20 group hover:bg-surface-container-low transition-colors px-4">
                <div className="col-span-12 md:col-span-2 font-mono text-xs text-outline pt-1">{t('journey_preview.item1.label')}</div>
                <div className="col-span-12 md:col-span-4 font-serif text-xl mt-2 md:mt-0 text-on-surface">{t('journey_preview.item1.title')}</div>
                <div className="col-span-12 md:col-span-6 font-body text-on-surface-variant leading-relaxed mt-2 md:mt-0">
                  {t('journey_preview.item1.description')}
                </div>
            </div>
            <div className="grid grid-cols-12 py-8 border-b border-outline-variant/20 group hover:bg-surface-container-low transition-colors px-4">
                <div className="col-span-12 md:col-span-2 font-mono text-xs text-outline pt-1">{t('journey_preview.item2.label')}</div>
                <div className="col-span-12 md:col-span-4 font-serif text-xl mt-2 md:mt-0 text-on-surface">{t('journey_preview.item2.title')}</div>
                <div className="col-span-12 md:col-span-6 font-body text-on-surface-variant leading-relaxed mt-2 md:mt-0">
                  {t('journey_preview.item2.description')}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Preview */}
      <section className="py-32 px-8 bg-surface-container-low" id="articles">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-baseline mb-16">
            <h2 className="font-serif italic text-4xl text-on-surface">{t('articles.title')}</h2>
            <Link href={`/${locale}/articles`} className="font-mono text-xs uppercase tracking-widest text-primary border-b border-primary">
              {t('articles.link')}
            </Link>
          </div>
          {articles.length === 0 ? (
            <div className="border border-outline-variant/30 bg-surface-container-lowest p-16 text-center">
              <p className="text-on-surface-variant max-w-xl mx-auto leading-relaxed">
                {tArticles('empty')}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 bg-surface-container">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/${locale}/articles/${article.slug}`}
                  className="bg-surface-container-lowest p-8 h-80 flex flex-col justify-between hover:bg-primary group transition-all duration-500"
                >
                  <span className="font-mono text-[10px] tracking-widest uppercase text-outline group-hover:text-on-primary/60">
                    {new Intl.DateTimeFormat(locale === 'pt' ? 'pt-BR' : 'en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    }).format(new Date(article.date))}
                  </span>
                  <h4 className="font-serif text-xl leading-snug text-on-surface group-hover:text-on-primary">
                    {article.title}
                  </h4>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto text-primary group-hover:text-on-primary group-hover:translate-x-2 transition-transform">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-surface py-48 px-8 border-t border-outline-variant/20" id="contact">
        <div className="max-w-screen-md mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-8 block">{t('contact.label')}</span>
          <h2 className="font-serif italic text-6xl md:text-7xl mb-12 text-on-surface">{t('contact.title')}</h2>
          <p className="text-on-surface-variant text-lg mb-16 leading-relaxed">
            {t('contact.description')}
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href={`mailto:${contact.email}`} className="bg-primary text-on-primary px-12 py-5 font-mono text-sm uppercase tracking-widest w-full md:w-auto hover:bg-primary-container transition-all">
              {t('contact.email_button')}
            </a>
            <a href={contact.telegram} target="_blank" rel="noopener noreferrer" className="border border-outline-variant px-12 py-5 font-mono text-sm uppercase tracking-widest w-full md:w-auto text-on-surface hover:bg-surface-container transition-all">
              {t('contact.telegram_button')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
