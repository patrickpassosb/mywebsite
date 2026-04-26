import { describe, expect, it } from 'vitest';
import en from '../../messages/en.json';
import pt from '../../messages/pt.json';
import { defaultLocale, locales } from '../lib/site';

describe('i18n config', () => {
  it('exposes English and Portuguese as the supported locales', () => {
    expect([...locales].sort()).toEqual(['en', 'pt']);
  });

  it('defaults to English', () => {
    expect(defaultLocale).toBe('en');
  });

  it('ships a message bundle for every supported locale', () => {
    const bundles: Record<string, unknown> = { en, pt };
    for (const locale of locales) {
      expect(bundles[locale], `missing bundle for ${locale}`).toBeDefined();
    }
  });
});

describe('message bundles', () => {
  function collectKeyPaths(
    value: unknown,
    prefix = '',
    out: string[] = [],
  ): string[] {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
        const next = prefix ? `${prefix}.${key}` : key;
        if (child && typeof child === 'object' && !Array.isArray(child)) {
          collectKeyPaths(child, next, out);
        } else {
          out.push(next);
        }
      }
    }
    return out;
  }

  it('en and pt expose the same key paths', () => {
    const enKeys = collectKeyPaths(en).sort();
    const ptKeys = collectKeyPaths(pt).sort();
    const onlyInEn = enKeys.filter((k) => !ptKeys.includes(k));
    const onlyInPt = ptKeys.filter((k) => !enKeys.includes(k));
    expect(onlyInEn, 'keys present only in en.json').toEqual([]);
    expect(onlyInPt, 'keys present only in pt.json').toEqual([]);
  });

  it('contains the namespaces the app reads from', () => {
    const required = [
      'Navigation',
      'Settings',
      'Index',
      'Projects',
      'Journey',
      'Writing',
      'Services',
    ];
    for (const ns of required) {
      expect(en, `en.${ns}`).toHaveProperty(ns);
      expect(pt, `pt.${ns}`).toHaveProperty(ns);
    }
  });

  it('Settings exposes theme, language and locale labels in both bundles', () => {
    const expected = [
      'label',
      'theme',
      'language',
      'themes.light',
      'themes.dark',
      'themes.system',
      'languages.en',
      'languages.pt',
    ];
    const settingsEn = collectKeyPaths(en.Settings);
    const settingsPt = collectKeyPaths(pt.Settings);
    for (const path of expected) {
      expect(settingsEn).toContain(path);
      expect(settingsPt).toContain(path);
    }
  });

  it('has no empty string values', () => {
    const visit = (bundle: unknown, label: string) => {
      const empties: string[] = [];
      const walk = (value: unknown, prefix: string) => {
        if (value && typeof value === 'object' && !Array.isArray(value)) {
          for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
            walk(v, prefix ? `${prefix}.${k}` : k);
          }
        } else if (typeof value === 'string' && value.trim() === '') {
          empties.push(prefix);
        }
      };
      walk(bundle, '');
      expect(empties, `empty strings in ${label}`).toEqual([]);
    };
    visit(en, 'en');
    visit(pt, 'pt');
  });
});
