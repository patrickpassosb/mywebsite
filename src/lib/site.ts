export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

export const locales = ['en', 'pt'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const contact = {
  email: 'patrickpassosb@gmail.com',
  telegram: 'https://t.me/patrickpassos',
  cal: 'https://cal.com/patrickpassos',
} as const;

export const social = {
  github: 'https://github.com/patrickpassosb',
  linkedin: 'https://www.linkedin.com/in/patrickpassosb/',
  x: 'https://x.com/patrickpassosb',
  youtube: 'https://www.youtube.com/@patrickpassosb',
} as const;
