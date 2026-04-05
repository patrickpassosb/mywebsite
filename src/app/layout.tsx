import type { Metadata } from "next";
import { Inter, Noto_Serif, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSerif = Noto_Serif({ subsets: ["latin"], variable: "--font-noto-serif" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Patrick Passos | Builder OS",
  description: "Architecting agentic systems & ambitious digital structures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: `
            .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24; }
        `}} />
      </head>
      <body className={`${inter.variable} ${notoSerif.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
        {/* TopNavBar */}
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-surface-container">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
            <Link href="/">
                <div className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-serif">
                Patrick Passos
                </div>
            </Link>
            <div className="hidden md:flex items-center space-x-12">
              <Link href="/projects" className="text-zinc-900 dark:text-zinc-50 border-b-2 border-transparent hover:border-[#0058bc] pb-1 font-mono text-xs uppercase tracking-widest hover:text-[#0058bc] transition-colors duration-300 ease-out-expo">
                Projects
              </Link>
              <Link href="/journey" className="text-zinc-500 dark:text-zinc-400 font-medium font-mono text-xs uppercase tracking-widest hover:text-[#0058bc] transition-colors duration-300 ease-out-expo">
                Journey
              </Link>
              <Link href="/writing" className="text-zinc-500 dark:text-zinc-400 font-medium font-mono text-xs uppercase tracking-widest hover:text-[#0058bc] transition-colors duration-300 ease-out-expo">
                Writing
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
                 {/* Social links in navbar */}
                <a href="https://github.com/patrickpassosb" target="_blank" className="font-mono text-xs uppercase tracking-widest text-outline hover:text-primary transition-colors">GitHub</a>
                <a href="#" className="font-mono text-xs uppercase tracking-widest text-outline hover:text-primary transition-colors">LinkedIn</a>
                <a href="#" className="font-mono text-xs uppercase tracking-widest text-outline hover:text-primary transition-colors">X</a>
                <a href="#" className="font-mono text-xs uppercase tracking-widest text-outline hover:text-primary transition-colors">YouTube</a>
            </div>
          </div>
        </nav>

        <main className="technical-grid min-h-screen pt-20">
            {children}
        </main>

        {/* Footer */}
        <footer className="w-full py-12 bg-[#f3f3f3] dark:bg-zinc-900 border-t border-zinc-200/10">
          <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-screen-2xl mx-auto">
            <div className="font-serif italic text-zinc-900 dark:text-zinc-100 text-lg mb-4 md:mb-0">
              Patrick Passos
            </div>
            <div className="text-xs font-mono tracking-widest uppercase text-[#717786] dark:text-zinc-400 mb-6 md:mb-0">
              © {new Date().getFullYear()} Patrick Passos. Built for systems thinking.
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500 hover:text-[#0058bc] dark:hover:text-[#0070eb] hover:underline decoration-[#0058bc] underline-offset-4 transition-all opacity-80 hover:opacity-100">Twitter</a>
              <a href="https://github.com/patrickpassosb" className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500 hover:text-[#0058bc] dark:hover:text-[#0070eb] hover:underline decoration-[#0058bc] underline-offset-4 transition-all opacity-80 hover:opacity-100">GitHub</a>
              <a href="#" className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500 hover:text-[#0058bc] dark:hover:text-[#0070eb] hover:underline decoration-[#0058bc] underline-offset-4 transition-all opacity-80 hover:opacity-100">LinkedIn</a>
              <a href="#" className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500 hover:text-[#0058bc] dark:hover:text-[#0070eb] hover:underline decoration-[#0058bc] underline-offset-4 transition-all opacity-80 hover:opacity-100">YouTube</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
