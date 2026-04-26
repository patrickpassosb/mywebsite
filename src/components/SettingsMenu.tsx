"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function SettingsMenu({ currentLocale }: { currentLocale: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("Settings");

  const pathname = usePathname();
  const otherLocale = currentLocale === "en" ? "pt" : "en";
  const switchLocaleHref = pathname.replace(
    new RegExp(`^/${currentLocale}(?=/|$)`),
    `/${otherLocale}`,
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const itemBase =
    "w-full text-left px-3 py-2 font-mono text-[11px] uppercase tracking-widest transition-all";
  const itemActive = "bg-primary text-on-primary font-bold shadow-sm";
  const itemIdle =
    "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800";

  return (
    <div className="relative ml-4" ref={menuRef}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center justify-center border border-outline px-2 py-1 transition-all duration-300 ${
          isOpen
            ? "border-primary text-primary bg-primary/10"
            : "hover:border-primary hover:text-primary text-on-surface-variant"
        }`}
        aria-label={t("label")}
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          aria-hidden
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute right-0 mt-3 w-52 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 shadow-2xl z-50 p-2 ring-1 ring-black/5 dark:ring-white/10 rounded-sm"
        >
          {/* THEME SETTINGS */}
          <div className="mb-2">
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-2 px-2">
              {t("theme")}
            </span>
            <div className="space-y-1" role="group" aria-label={t("theme")}>
              {(["light", "dark", "system"] as const).map((value) => (
                <button
                  key={value}
                  role="menuitemradio"
                  aria-checked={mounted && theme === value}
                  onClick={() => {
                    setTheme(value);
                    setIsOpen(false);
                  }}
                  className={`${itemBase} ${
                    mounted && theme === value ? itemActive : itemIdle
                  }`}
                >
                  {t(`themes.${value}`)}
                </button>
              ))}
            </div>
          </div>

          <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-2 mx-1" />

          {/* LANGUAGE SETTINGS */}
          <div>
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-2 px-2">
              {t("language")}
            </span>
            <div className="space-y-1" role="group" aria-label={t("language")}>
              <Link
                role="menuitemradio"
                aria-checked={currentLocale === "en"}
                href={currentLocale === "en" ? pathname : switchLocaleHref}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 ${itemBase} ${
                  currentLocale === "en" ? itemActive : itemIdle
                }`}
              >
                <span className="text-sm" aria-hidden>
                  🇺🇸
                </span>
                <span>{t("languages.en")}</span>
              </Link>
              <Link
                role="menuitemradio"
                aria-checked={currentLocale === "pt"}
                href={currentLocale === "pt" ? pathname : switchLocaleHref}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 ${itemBase} ${
                  currentLocale === "pt" ? itemActive : itemIdle
                }`}
              >
                <span className="text-sm" aria-hidden>
                  🇧🇷
                </span>
                <span>{t("languages.pt")}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
