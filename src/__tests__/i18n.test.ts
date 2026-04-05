import { describe, it, expect } from 'vitest';

const locales = ['en', 'pt'];

describe('I18n Configuration', () => {
  it('should support English and Portuguese', () => {
    expect(locales).toContain('en');
    expect(locales).toContain('pt');
  });

  it('should only have 2 supported locales', () => {
    expect(locales.length).toBe(2);
  });
});
