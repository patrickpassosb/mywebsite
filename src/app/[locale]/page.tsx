import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('Index');

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
            <Link href={`/${locale}/journey`} className="border border-outline-variant px-10 py-4 font-mono text-sm uppercase tracking-widest text-on-surface hover:bg-surface-container-low transition-all">
              {t('journey')}
            </Link>
          </div>
        </div>
      </section>

      {/* What I'm Building Now (Bento Grid) */}
      <section className="bg-surface-container-low py-32 px-8" id="systems">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20">
            <h2 className="font-serif italic text-4xl text-on-surface">{t('building_now.title')}</h2>
            <span className="font-mono text-xs uppercase tracking-widest text-outline mt-4 md:mt-0">
              {t('building_now.status_label')} [03]
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {/* Box 1 */}
            <div className="bg-surface-container-lowest p-12 flex flex-col justify-between group hover:bg-white transition-colors duration-500">
              <div>
                <span className="font-mono text-secondary text-sm mb-8 block">01</span>
                <h3 className="font-serif text-2xl mb-4">{t('building_now.project1.title')}</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {t('building_now.project1.description')}
                </p>
              </div>
              <div className="mt-12 flex items-center text-primary font-mono text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                {t('building_now.project1.link')} <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-surface-container-lowest p-12 flex flex-col justify-between group hover:bg-white transition-colors duration-500">
              <div>
                <span className="font-mono text-secondary text-sm mb-8 block">02</span>
                <h3 className="font-serif text-2xl mb-4">{t('building_now.project2.title')}</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {t('building_now.project2.description')}
                </p>
              </div>
              <div className="mt-12 flex items-center text-primary font-mono text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                {t('building_now.project2.link')} <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-surface-container-lowest p-12 flex flex-col justify-between group hover:bg-white transition-colors duration-500">
              <div>
                <span className="font-mono text-secondary text-sm mb-8 block">03</span>
                <h3 className="font-serif text-2xl mb-4">{t('building_now.project3.title')}</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {t('building_now.project3.description')}
                </p>
              </div>
              <div className="mt-12 flex items-center text-primary font-mono text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                {t('building_now.project3.link')} <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="py-32 px-8" id="projects">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-24">
            <h2 className="font-serif italic text-5xl mb-6">{t('selected_projects.title')}</h2>
            <div className="h-px w-32 bg-primary"></div>
          </div>

          <div className="space-y-48">
            {/* Builder Passport */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7">
                <div className="relative overflow-hidden aspect-video bg-surface-container border border-surface-container">
                  {/* PLEASE REPLACE THIS SRC WITH THE ACTUAL BUILDER PASSPORT SCREENSHOT */}
                  <img
                    alt="Builder Passport Dashboard"
                    src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/5"></div>
                </div>
              </div>
              <div className="md:col-span-5 md:pl-12">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-outline mb-4 block">Architecture: EVM/Monad</span>
                <h3 className="font-serif text-4xl mb-6">Builder Passport</h3>
                <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                  {t('selected_projects.project1.description')}
                </p>
                <div className="font-mono text-[11px] uppercase tracking-widest space-y-2 mb-10 text-on-surface">
                  <div className="flex justify-between border-b border-surface-container py-2">
                    <span className="text-outline">Stack</span>
                    <span>Solidity / Next.js / Wagmi</span>
                  </div>
                  <div className="flex justify-between border-b border-surface-container py-2">
                    <span className="text-outline">Status</span>
                    <span>Active</span>
                  </div>
                </div>
                <a href="https://github.com/patrickpassosb/builder-passport" target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-mono text-xs uppercase tracking-[0.2em] text-primary group">
                  {t('selected_projects.view_repo')} <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">north_east</span>
                </a>
              </div>
            </div>

            {/* Kraken DaD */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-5 order-2 md:order-1 md:pr-12">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-outline mb-4 block">Architecture: Logic Composer</span>
                <h3 className="font-serif text-4xl mb-6">Kraken DaD</h3>
                <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                  {t('selected_projects.project2.description')}
                </p>
                <div className="font-mono text-[11px] uppercase tracking-widest space-y-2 mb-10 text-on-surface">
                  <div className="flex justify-between border-b border-surface-container py-2">
                    <span className="text-outline">Stack</span>
                    <span>React Flow / Fastify / TS</span>
                  </div>
                  <div className="flex justify-between border-b border-surface-container py-2">
                    <span className="text-outline">Status</span>
                    <span>Active</span>
                  </div>
                </div>
                <a href="https://github.com/patrickpassosb/Kraken-DaD" target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-mono text-xs uppercase tracking-[0.2em] text-primary group">
                  {t('selected_projects.view_repo')} <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">north_east</span>
                </a>
              </div>
              <div className="md:col-span-7 order-1 md:order-2">
                <div className="relative overflow-hidden aspect-video bg-surface-container border border-surface-container">
                  {/* PLEASE REPLACE THIS SRC WITH THE ACTUAL KRAKEN DAD SCREENSHOT */}
                  <img
                    alt="Kraken DaD Interface"
                    src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=2930&auto=format&fit=crop"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/5"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How I Build (Engineering Principles) */}
      <section className="bg-[#1a1c1c] text-[#f9f9f9] py-32 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <h2 className="font-serif italic text-5xl mb-8 leading-tight">
                {locale === 'en' ? (
                  <>Building <br /> Philosophy</>
                ) : (
                  <>Filosofia de <br /> Construção</>
                )}
              </h2>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#717786]">{t('philosophy.subtitle')}</p>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h4 className="font-serif text-xl mb-6 text-secondary-container">{t('philosophy.principle1.title')}</h4>
                <p className="text-[#c1c6d7] leading-relaxed">{t('philosophy.principle1.description')}</p>
              </div>
              <div>
                <h4 className="font-serif text-xl mb-6 text-secondary-container">{t('philosophy.principle2.title')}</h4>
                <p className="text-[#c1c6d7] leading-relaxed">{t('philosophy.principle2.description')}</p>
              </div>
              <div>
                <h4 className="font-serif text-xl mb-6 text-secondary-container">{t('philosophy.principle3.title')}</h4>
                <p className="text-[#c1c6d7] leading-relaxed">{t('philosophy.principle3.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Preview */}
      <section className="py-32 px-8 bg-surface">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-baseline mb-16">
            <h2 className="font-serif italic text-4xl">{t('journey_preview.title')}</h2>
            <Link href={`/${locale}/journey`} className="font-mono text-xs uppercase tracking-widest text-primary border-b border-primary">{t('journey_preview.link')}</Link>
          </div>
          <div className="border-t border-surface-container">
            <div className="grid grid-cols-12 py-8 border-b border-surface-container group hover:bg-surface-container-low transition-colors px-4">
                <div className="col-span-12 md:col-span-2 font-mono text-xs text-outline pt-1">{t('journey_preview.item1.label')}</div>
                <div className="col-span-12 md:col-span-4 font-serif text-xl mt-2 md:mt-0">{t('journey_preview.item1.title')}</div>
                <div className="col-span-12 md:col-span-6 font-body text-on-surface-variant leading-relaxed mt-2 md:mt-0">
                  {t('journey_preview.item1.description')}
                </div>
            </div>
            <div className="grid grid-cols-12 py-8 border-b border-surface-container group hover:bg-surface-container-low transition-colors px-4">
                <div className="col-span-12 md:col-span-2 font-mono text-xs text-outline pt-1">{t('journey_preview.item2.label')}</div>
                <div className="col-span-12 md:col-span-4 font-serif text-xl mt-2 md:mt-0">{t('journey_preview.item2.title')}</div>
                <div className="col-span-12 md:col-span-6 font-body text-on-surface-variant leading-relaxed mt-2 md:mt-0">
                  {t('journey_preview.item2.description')}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Writing / Notes Preview */}
      <section className="py-32 px-8" id="writing">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-baseline mb-16">
            <h2 className="font-serif italic text-4xl">{t('writing.title')}</h2>
            <Link href={`/${locale}/writing`} className="font-mono text-xs uppercase tracking-widest text-primary border-b border-primary">
              {t('writing.link')}
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
            <Link href={`/${locale}/writing/placeholder-1`} className="bg-surface-container p-8 h-80 flex flex-col justify-between hover:bg-primary hover:text-on-primary transition-all group duration-500">
              <span className="font-mono text-[10px] tracking-widest uppercase text-outline group-hover:text-primary-fixed">TBD</span>
              <h4 className="font-serif text-xl leading-snug">{t('writing.post1')}</h4>
              <span className="material-symbols-outlined text-right group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </Link>
            <Link href={`/${locale}/writing/placeholder-2`} className="bg-surface-container p-8 h-80 flex flex-col justify-between hover:bg-primary hover:text-on-primary transition-all group duration-500">
              <span className="font-mono text-[10px] tracking-widest uppercase text-outline group-hover:text-primary-fixed">TBD</span>
              <h4 className="font-serif text-xl leading-snug">{t('writing.post2')}</h4>
              <span className="material-symbols-outlined text-right group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-surface py-48 px-8 border-t border-surface-container" id="contact">
        <div className="max-w-screen-md mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-8 block">{t('contact.label')}</span>
          <h2 className="font-serif italic text-6xl md:text-7xl mb-12">{t('contact.title')}</h2>
          <p className="text-on-surface-variant text-lg mb-16 leading-relaxed">
            {t('contact.description')}
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="mailto:patrickpassosb@gmail.com" className="bg-primary text-on-primary px-12 py-5 font-mono text-sm uppercase tracking-widest w-full md:w-auto hover:bg-primary-container transition-all">
              {t('contact.email_button')}
            </a>
            <a href="https://t.me/patrickpassos" target="_blank" rel="noopener noreferrer" className="border border-outline-variant px-12 py-5 font-mono text-sm uppercase tracking-widest w-full md:w-auto hover:bg-surface-container-low transition-all">
              {t('contact.telegram_button')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
