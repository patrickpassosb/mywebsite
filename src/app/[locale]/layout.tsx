import type { Metadata } from "next";
import { Inter, Noto_Serif, Space_Grotesk } from "next/font/google";
import "../globals.css";
import Link from 'next/link';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { ThemeProvider } from '@/components/ThemeProvider';
import SettingsMenu from '@/components/SettingsMenu';
import NavLinks from '@/components/NavLinks';
import { siteUrl, social } from '@/lib/site';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSerif = Noto_Serif({ subsets: ["latin"], variable: "--font-noto-serif" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Patrick Passos | Builder OS",
    template: "%s | Patrick Passos",
  },
  description:
    "Software engineer & builder focused on agentic systems, deterministic infrastructure, and ambitious technical architecture.",
  applicationName: "Patrick Passos | Builder OS",
  authors: [{ name: "Patrick Passos", url: social.github }],
  creator: "Patrick Passos",
  keywords: [
    "Patrick Passos",
    "software engineer",
    "agentic systems",
    "deterministic infrastructure",
    "Next.js",
    "builder",
    "AI engineer",
  ],
  openGraph: {
    type: "website",
    siteName: "Patrick Passos | Builder OS",
    title: "Patrick Passos | Builder OS",
    description:
      "Architecting agentic systems & ambitious digital structures.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Patrick Passos | Builder OS",
    description:
      "Architecting agentic systems & ambitious digital structures.",
    creator: "@patrickpassosb",
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      pt: "/pt",
      "x-default": "/en",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();
  const t = await getTranslations('Navigation');

  const navItems = [
    { href: '/projects', label: t('projects') },
    { href: '/journey', label: t('journey') },
    { href: '/writing', label: t('writing') },
    { href: '/services', label: t('services') },
  ];

  const socialLinks = [
    { href: social.github, label: 'GitHub' },
    { href: social.linkedin, label: 'LinkedIn' },
    { href: social.x, label: 'X' },
    { href: social.youtube, label: 'YouTube' },
  ];

  return (
    <html lang={locale} className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${notoSerif.variable} ${spaceGrotesk.variable} transition-colors duration-300`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider messages={messages}>
            {/* TopNavBar */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/60 backdrop-blur-xl border-b border-surface-container dark:border-white/10">
              <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
                <Link href={`/${locale}`}>
                  <div className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-serif">
                    Patrick Passos
                  </div>
                </Link>

                <NavLinks locale={locale} items={navItems} />

                <div className="hidden md:flex items-center space-x-6">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}

                  <SettingsMenu currentLocale={locale} />
                </div>
              </div>
            </nav>

            <main className="technical-grid min-h-screen pt-20">
              {children}
            </main>

            {/* Footer */}
            <footer className="w-full py-12 bg-surface-container-low dark:bg-zinc-900 border-t border-zinc-200/10 dark:border-zinc-800/30">
              <div className="grid grid-cols-1 md:grid-cols-3 items-center px-8 max-w-screen-2xl mx-auto gap-6 md:gap-0">
                <div className="font-serif italic text-on-surface text-lg text-center md:text-left">
                  Patrick Passos
                </div>
                <div className="text-xs font-mono tracking-widest uppercase text-outline text-center">
                  © {new Date().getFullYear()} Patrick Passos.
                </div>
                <div className="flex justify-center md:justify-end gap-8">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono tracking-widest uppercase text-outline hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all opacity-80 hover:opacity-100"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </footer>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
