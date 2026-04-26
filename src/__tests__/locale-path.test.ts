import { describe, expect, it } from 'vitest';

function switchLocaleHref(pathname: string, currentLocale: string, target: string): string {
  return pathname.replace(new RegExp(`^/${currentLocale}(?=/|$)`), `/${target}`);
}

describe('switchLocaleHref', () => {
  it('switches the leading locale segment', () => {
    expect(switchLocaleHref('/en/projects', 'en', 'pt')).toBe('/pt/projects');
    expect(switchLocaleHref('/pt/services', 'pt', 'en')).toBe('/en/services');
  });

  it('handles the bare locale root', () => {
    expect(switchLocaleHref('/en', 'en', 'pt')).toBe('/pt');
    expect(switchLocaleHref('/pt', 'pt', 'en')).toBe('/en');
  });

  it('does NOT replace later segments that look like the locale', () => {
    expect(switchLocaleHref('/en/encoding-notes', 'en', 'pt')).toBe('/pt/encoding-notes');
    expect(switchLocaleHref('/en/projects/en-pt-glossary', 'en', 'pt')).toBe(
      '/pt/projects/en-pt-glossary',
    );
  });

  it('preserves trailing path segments', () => {
    expect(switchLocaleHref('/en/projects/builder-passport', 'en', 'pt')).toBe(
      '/pt/projects/builder-passport',
    );
  });

  it('leaves the input unchanged when the prefix does not match', () => {
    expect(switchLocaleHref('/services', 'en', 'pt')).toBe('/services');
  });
});
