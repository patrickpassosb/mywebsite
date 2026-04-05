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
        className={`flex items-center justify-center border border-outline px-2 py-1 transition-all duration-300 ${isOpen ? 'border-primary text-primary bg-primary/10' : 'hover:border-primary hover:text-primary'}`}
        aria-label="Settings Menu"
      >
        <span className="material-symbols-outlined text-[20px] leading-none">more_horiz</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-surface dark:bg-zinc-950 border border-outline-variant shadow-2xl z-50 p-2 ring-1 ring-black/5 dark:ring-white/10">
          
          {/* THEME SETTINGS */}
          <div className="mb-2">
            <span className="block font-mono text-[9px] uppercase tracking-widest text-outline mb-1 px-2">Theme</span>
            <div className="space-y-1">
              <button 
                onClick={() => { setTheme("light"); setIsOpen(false); }}
                className={`w-full text-left px-2 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors ${mounted && theme === 'light' ? 'bg-primary text-on-primary font-bold' : 'text-on-surface hover:bg-surface-container-low dark:hover:bg-zinc-900'}`}
              >
                Light
              </button>
              <button 
                onClick={() => { setTheme("dark"); setIsOpen(false); }}
                className={`w-full text-left px-2 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors ${mounted && theme === 'dark' ? 'bg-primary text-on-primary font-bold' : 'text-on-surface hover:bg-surface-container-low dark:hover:bg-zinc-900'}`}
              >
                Dark
              </button>
              <button 
                onClick={() => { setTheme("system"); setIsOpen(false); }}
                className={`w-full text-left px-2 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors ${mounted && theme === 'system' ? 'bg-primary text-on-primary font-bold' : 'text-on-surface hover:bg-surface-container-low dark:hover:bg-zinc-900'}`}
              >
                System
              </button>
            </div>
          </div>

          <div className="h-px bg-outline-variant/30 my-2"></div>

          {/* LANGUAGE SETTINGS */}
          <div>
            <span className="block font-mono text-[9px] uppercase tracking-widest text-outline mb-1 px-2">Language</span>
            <div className="space-y-1">
              <Link 
                href={currentLocale === 'en' ? pathname : newLocalePath}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-2 w-full px-2 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors ${currentLocale === 'en' ? 'bg-primary text-on-primary font-bold' : 'text-on-surface hover:bg-surface-container-low dark:hover:bg-zinc-900'}`}
              >
                <span className="text-sm">🇺🇸</span>
                <span>English</span>
              </Link>
              <Link 
                href={currentLocale === 'pt' ? pathname : newLocalePath}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-2 w-full px-2 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors ${currentLocale === 'pt' ? 'bg-primary text-on-primary font-bold' : 'text-on-surface hover:bg-surface-container-low dark:hover:bg-zinc-900'}`}
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
