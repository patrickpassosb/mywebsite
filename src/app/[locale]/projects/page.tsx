import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Projects' });
  const path = `/${locale}/projects`;
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: path,
      languages: {
        en: '/en/projects',
        pt: '/pt/projects',
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

type ProjectSlug =
  | 'builder_passport'
  | 'kraken_dad'
  | 'bedside'
  | 'pitch_maker'
  | 'sealship'
  | 'biome';

type ProjectCard = {
  slug: ProjectSlug;
  url: string;
};

const PROJECTS: ProjectCard[] = [
  { slug: 'builder_passport', url: 'https://github.com/patrickpassosb/builder-passport' },
  { slug: 'kraken_dad', url: 'https://github.com/patrickpassosb/Kraken-DaD' },
  { slug: 'bedside', url: 'https://github.com/patrickpassosb/bedside' },
  { slug: 'pitch_maker', url: 'https://github.com/patrickpassosb/pitch-maker' },
  { slug: 'sealship', url: 'https://github.com/patrickpassosb/sealship' },
  { slug: 'biome', url: 'https://github.com/patrickpassosb/Biometric-Optimization-Management-Engine' },
];

export default async function ProjectsIndex() {
  const t = await getTranslations('Projects');

  return (
    <section className="max-w-screen-2xl mx-auto px-8 pt-32 pb-48">
      <h1 className="font-serif italic text-6xl leading-tight text-on-surface mb-8">
        {t('title')}
      </h1>
      <p className="font-body text-xl text-on-surface-variant max-w-2xl mb-20">
        {t('description')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-surface-container">
        {PROJECTS.map((project) => (
          <article
            key={project.slug}
            className="bg-surface-container-lowest p-12 flex flex-col justify-between group hover:brightness-105 transition-all duration-500"
          >
            <div>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-outline mb-4 block">
                {t(`${project.slug}.architecture`)}
              </span>
              <h3 className="font-serif text-3xl mb-6 text-on-surface">
                {t(`${project.slug}.name`)}
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-10">
                {t(`${project.slug}.description`)}
              </p>
              <div className="font-mono text-[11px] uppercase tracking-widest space-y-2 mb-10 text-on-surface">
                <div className="flex justify-between border-b border-outline-variant/20 py-2">
                  <span className="text-outline">{t('stack_label')}</span>
                  <span>{t(`${project.slug}.stack`)}</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/20 py-2">
                  <span className="text-outline">{t('status_label')}</span>
                  <span className="text-secondary">{t(`${project.slug}.status`)}</span>
                </div>
              </div>
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-mono text-xs uppercase tracking-[0.2em] text-primary group/link"
            >
              {t('view_repo')}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover/link:translate-x-1 transition-transform">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
