import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './lib/site';

export default createMiddleware({
  locales: [...locales],
  defaultLocale,
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
