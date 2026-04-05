import type { Metadata } from "next";
import { Inter, Noto_Serif, Space_Grotesk } from "next/font/google";
import "../globals.css";
import Link from 'next/link';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { ThemeProvider } from '@/components/ThemeProvider';
import SettingsMenu from '@/components/SettingsMenu';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSerif = Noto_Serif({ subsets: ["latin"], variable: "--font-noto-serif" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Patrick Passos | Builder OS",
  description: "Architecting agentic systems & ambitious digital structures.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();
  const t = await getTranslations('Navigation');

  return (
    <html lang={locale} className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=more_horiz,more_vert,settings" />
      </head>
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
            <div className="hidden md:flex items-center space-x-12">
              <Link href={`/${locale}/projects`} className="text-zinc-900 dark:text-zinc-50 border-b-2 border-transparent hover:border-[#0058bc] pb-1 font-mono text-xs uppercase tracking-widest hover:text-[#0058bc] transition-colors duration-300 ease-out-expo">
                {t('projects')}
              </Link>
              <Link href={`/${locale}/journey`} className="text-zinc-500 dark:text-zinc-400 font-medium font-mono text-xs uppercase tracking-widest hover:text-[#0058bc] transition-colors duration-300 ease-out-expo">
                {t('journey')}
              </Link>
              <Link href={`/${locale}/writing`} className="text-zinc-500 dark:text-zinc-400 font-medium font-mono text-xs uppercase tracking-widest hover:text-[#0058bc] transition-colors duration-300 ease-out-expo">
                {t('writing')}
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
                 {/* Social links in navbar */}
                <a href="https://github.com/patrickpassosb" target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/patrickpassosb/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">LinkedIn</a>
                <a href="https://x.com/patrickpassosb" target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">X</a>
                <a href="https://www.youtube.com/@patrickpassosb" target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">YouTube</a>
                
                {/* Language Switcher */}
                <SettingsMenu currentLocale={locale} />
            </div>
          </div>
        </nav>

        <main className="technical-grid min-h-screen pt-20">
            {children}
        </main>

        {/* Footer */}
        <footer className="w-full py-12 bg-[#f3f3f3] dark:bg-zinc-900 border-t border-zinc-200/10 dark:border-zinc-800/30">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center px-8 max-w-screen-2xl mx-auto gap-6 md:gap-0">
            <div className="font-serif italic text-zinc-900 dark:text-zinc-100 text-lg text-center md:text-left">
              Patrick Passos
            </div>
            <div className="text-xs font-mono tracking-widest uppercase text-[#717786] dark:text-zinc-400 text-center">
              © {new Date().getFullYear()} Patrick Passos.
            </div>
            <div className="flex justify-center md:justify-end gap-8">
              <a href="https://x.com/patrickpassosb" target="_blank" rel="noopener noreferrer" className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500 hover:text-[#0058bc] dark:hover:text-[#0070eb] hover:underline decoration-[#0058bc] underline-offset-4 transition-all opacity-80 hover:opacity-100">X</a>
              <a href="https://github.com/patrickpassosb" target="_blank" rel="noopener noreferrer" className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500 hover:text-[#0058bc] dark:hover:text-[#0070eb] hover:underline decoration-[#0058bc] underline-offset-4 transition-all opacity-80 hover:opacity-100">GitHub</a>
              <a href="https://www.linkedin.com/in/patrickpassosb/" target="_blank" rel="noopener noreferrer" className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500 hover:text-[#0058bc] dark:hover:text-[#0070eb] hover:underline decoration-[#0058bc] underline-offset-4 transition-all opacity-80 hover:opacity-100">LinkedIn</a>
              <a href="https://www.youtube.com/@patrickpassosb" target="_blank" rel="noopener noreferrer" className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500 hover:text-[#0058bc] dark:hover:text-[#0070eb] hover:underline decoration-[#0058bc] underline-offset-4 transition-all opacity-80 hover:opacity-100">YouTube</a>
            </div>
          </div>
        </footer>
        </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
