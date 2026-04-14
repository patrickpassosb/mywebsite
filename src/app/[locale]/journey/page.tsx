import { getTranslations } from 'next-intl/server';

const CHAPTERS = [
  'age_12',
  'age_17',
  'age_18',
  'age_19_canada',
  'age_19_sf',
  'age_20_present',
] as const;

export default async function JourneyPage() {
  const t = await getTranslations('Journey');

  return (
    <section className="max-w-screen-2xl mx-auto px-8 pt-32 pb-48">
      <h1 className="font-serif italic text-6xl leading-tight text-on-surface mb-8">
        {t('title')}
      </h1>
      <p className="font-body text-xl text-on-surface-variant max-w-3xl leading-relaxed mb-24">
        {t('intro')}
      </p>

      <ol className="border-l border-outline-variant/30 ml-4 pl-10 space-y-20 max-w-3xl">
        {CHAPTERS.map((chapter, index) => (
          <li key={chapter} className="relative">
            <span
              aria-hidden
              className="absolute -left-[46px] top-3 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-surface"
            />
            <div className="font-mono text-xs tracking-widest text-outline mb-2">
              {String(index + 1).padStart(2, '0')} · {t(`chapters.${chapter}.label`)}
            </div>
            <h3 className="font-serif text-3xl text-on-surface mb-4">
              {t(`chapters.${chapter}.title`)}
            </h3>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              {t(`chapters.${chapter}.description`)}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
