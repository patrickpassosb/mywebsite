import { getTranslations } from 'next-intl/server';

export default async function WritingPage() {
  const t = await getTranslations('Writing');

  return (
    <section className="max-w-screen-2xl mx-auto px-8 pt-32 pb-48">
      <h1 className="font-serif italic text-6xl leading-tight text-on-surface mb-8">
        {t('title')}
      </h1>
      <p className="font-body text-xl text-on-surface-variant max-w-2xl mb-16">
        {t('description')}
      </p>

      <div className="border border-outline-variant/30 bg-surface-container-lowest p-16 text-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-outline block mb-6">
          {t('status')}
        </span>
        <h3 className="font-serif italic text-3xl text-on-surface mb-4">
          {t('placeholder_title')}
        </h3>
        <p className="text-on-surface-variant max-w-xl mx-auto leading-relaxed">
          {t('placeholder_description')}
        </p>
      </div>
    </section>
  );
}
