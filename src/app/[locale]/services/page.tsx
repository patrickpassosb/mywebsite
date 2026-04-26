import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { contact } from '@/lib/site';

type OfferKey = 'item1' | 'item2' | 'item3' | 'item4';
const OFFER_KEYS: OfferKey[] = ['item1', 'item2', 'item3', 'item4'];

type ApproachKey = 'item1' | 'item2' | 'item3';
const APPROACH_KEYS: ApproachKey[] = ['item1', 'item2', 'item3'];

type StackRow = { label: string; value: string };

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('Services');

  const stackRows: StackRow[] = [
    { label: t('stack.languages'), value: t('stack.languages_value') },
    { label: t('stack.backend'), value: t('stack.backend_value') },
    { label: t('stack.frontend'), value: t('stack.frontend_value') },
    { label: t('stack.agents'), value: t('stack.agents_value') },
  ];

  return (
    <>
      {/* Hero */}
      <section className="max-w-screen-2xl mx-auto px-8 pt-32 pb-32">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6 block">
          {t('label')}
        </span>
        <h1 className="font-serif italic text-6xl md:text-7xl leading-tight text-on-surface mb-8">
          {t('title')}
        </h1>
        <p className="font-body text-xl text-on-surface-variant max-w-3xl leading-relaxed">
          {t('description')}
        </p>
      </section>

      {/* What I Build */}
      <section className="py-24 px-8 bg-surface">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16">
            <h2 className="font-serif italic text-4xl text-on-surface mb-4">{t('offer.title')}</h2>
            <p className="font-body text-on-surface-variant max-w-2xl">{t('offer.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-surface-container">
            {OFFER_KEYS.map((key) => (
              <article
                key={key}
                className="bg-surface-container-lowest p-12 flex flex-col"
              >
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-outline mb-4 block">
                  {t(`offer.${key}.label`)}
                </span>
                <h3 className="font-serif text-3xl mb-6 text-on-surface">
                  {t(`offer.${key}.title`)}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {t(`offer.${key}.description`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16">
            <h2 className="font-serif italic text-4xl text-on-surface mb-4">{t('stack.title')}</h2>
            <p className="font-body text-on-surface-variant max-w-2xl">{t('stack.subtitle')}</p>
          </div>
          <div className="border-t border-outline-variant/20">
            {stackRows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-12 py-6 border-b border-outline-variant/20 px-4"
              >
                <div className="col-span-12 md:col-span-3 font-mono text-xs uppercase tracking-widest text-outline pt-1">
                  {row.label}
                </div>
                <div className="col-span-12 md:col-span-9 font-mono text-sm text-on-surface mt-2 md:mt-0">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-24 px-8 bg-surface">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16">
            <h2 className="font-serif italic text-4xl text-on-surface">{t('approach.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-surface-container">
            {APPROACH_KEYS.map((key) => (
              <article
                key={key}
                className="bg-surface-container-lowest p-10 flex flex-col"
              >
                <h3 className="font-serif text-2xl mb-6 text-on-surface">
                  {t(`approach.${key}.title`)}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {t(`approach.${key}.description`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects CTA */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif italic text-4xl text-on-surface mb-4">
              {t('projects_cta.title')}
            </h2>
            <p className="font-body text-on-surface-variant leading-relaxed">
              {t('projects_cta.description')}
            </p>
          </div>
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center font-mono text-xs uppercase tracking-[0.2em] text-primary border-b border-primary pb-1 self-start md:self-end"
          >
            {t('projects_cta.link')}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-surface py-40 px-8 border-t border-outline-variant/20" id="contact">
        <div className="max-w-screen-md mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-8 block">
            {t('contact.label')}
          </span>
          <h2 className="font-serif italic text-6xl md:text-7xl mb-12 text-on-surface">
            {t('contact.title')}
          </h2>
          <p className="text-on-surface-variant text-lg mb-16 leading-relaxed">
            {t('contact.description')}
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a
              href={`mailto:${contact.email}`}
              className="bg-primary text-on-primary px-10 py-5 font-mono text-sm uppercase tracking-widest w-full md:w-auto hover:bg-primary-container transition-all"
            >
              {t('contact.email_button')}
            </a>
            <a
              href={contact.cal}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary text-primary px-10 py-5 font-mono text-sm uppercase tracking-widest w-full md:w-auto hover:bg-primary-container hover:text-on-primary transition-all"
            >
              {t('contact.book_button')}
            </a>
            <a
              href={contact.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-outline-variant px-10 py-5 font-mono text-sm uppercase tracking-widest w-full md:w-auto text-on-surface hover:bg-surface-container transition-all"
            >
              {t('contact.telegram_button')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
