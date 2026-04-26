"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItem = {
  href: string;
  label: string;
};

export default function NavLinks({ locale, items }: { locale: string; items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center space-x-12">
      {items.map((item) => {
        const fullHref = `/${locale}${item.href}`;
        const isActive =
          pathname === fullHref || pathname.startsWith(`${fullHref}/`);

        const baseClass =
          'border-b-2 pb-1 font-mono text-xs uppercase tracking-widest hover:text-primary hover:border-primary transition-colors duration-300 ease-out-expo';
        const stateClass = isActive
          ? 'text-on-surface border-primary'
          : 'text-on-surface-variant border-transparent';

        return (
          <Link
            key={item.href}
            href={fullHref}
            aria-current={isActive ? 'page' : undefined}
            className={`${baseClass} ${stateClass}`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
