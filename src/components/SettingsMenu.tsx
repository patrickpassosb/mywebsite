"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SettingsMenu({ currentLocale }: { currentLocale: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  const pathname = usePathname();
  const newLocalePath = pathname.replace(`/${currentLocale}`, `/${currentLocale === 'en' ? 'pt' : 'en'}`);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative ml-4" ref={menuRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center border border-outline px-2 py-1 transition-all duration-300 ${isOpen ? 'border-primary text-primary bg-primary/10' : 'hover:border-primary hover:text-primary text-on-surface-variant'}`}
        aria-label="Settings Menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-52 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 shadow-2xl z-50 p-2 ring-1 ring-black/5 dark:ring-white/10 rounded-sm">
          
          {/* THEME SETTINGS */}
          <div className="mb-2">
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-2 px-2">Theme</span>
            <div className="space-y-1">
              <button 
                onClick={() => { setTheme("light"); setIsOpen(false); }}
                className={`w-full text-left px-3 py-2 font-mono text-[11px] uppercase tracking-widest transition-all ${mounted && theme === 'light' ? 'bg-primary text-on-primary font-bold shadow-sm' : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800'}`}
              >
                Light
              </button>
              <button 
                onClick={() => { setTheme("dark"); setIsOpen(false); }}
                className={`w-full text-left px-3 py-2 font-mono text-[11px] uppercase tracking-widest transition-all ${mounted && theme === 'dark' ? 'bg-primary text-on-primary font-bold shadow-sm' : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800'}`}
              >
                Dark
              </button>
              <button 
                onClick={() => { setTheme("system"); setIsOpen(false); }}
                className={`w-full text-left px-3 py-2 font-mono text-[11px] uppercase tracking-widest transition-all ${mounted && theme === 'system' ? 'bg-primary text-on-primary font-bold shadow-sm' : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800'}`}
              >
                System
              </button>
            </div>
          </div>

          <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-2 mx-1"></div>

          {/* LANGUAGE SETTINGS */}
          <div>
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-2 px-2">Language</span>
            <div className="space-y-1">
              <Link 
                href={currentLocale === 'en' ? pathname : newLocalePath}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 w-full px-3 py-2 font-mono text-[11px] uppercase tracking-widest transition-all ${currentLocale === 'en' ? 'bg-primary text-on-primary font-bold shadow-sm' : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800'}`}
              >
                <span className="text-sm">🇺🇸</span>
                <span>English</span>
              </Link>
              <Link 
                href={currentLocale === 'pt' ? pathname : newLocalePath}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 w-full px-3 py-2 font-mono text-[11px] uppercase tracking-widest transition-all ${currentLocale === 'pt' ? 'bg-primary text-on-primary font-bold shadow-sm' : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800'}`}
              >
                <span className="text-sm">🇧🇷</span>
                <span>Português</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
