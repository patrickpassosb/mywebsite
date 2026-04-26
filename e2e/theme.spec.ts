import { test, expect } from '@playwright/test';

test.describe('Theme switching', () => {
  test('switches to dark mode and applies the high-contrast background', async ({ page }) => {
    await page.goto('/en');

    await page.getByRole('button', { name: /settings menu|menu de configurações/i }).click();
    await page.getByRole('menuitemradio', { name: /^dark$/i }).click();

    await expect(page.locator('html')).toHaveClass(/dark/);
    await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(9, 9, 11)');
    await expect(page.getByRole('heading', { name: /Patrick Passos/i }).first()).toHaveCSS(
      'color',
      'rgb(244, 244, 245)',
    );
  });
});

test.describe('Localization', () => {
  test('switches between languages and preserves the current route', async ({ page }) => {
    await page.goto('/en/services');

    await page.getByRole('button', { name: /settings menu|menu de configurações/i }).click();
    await page.getByRole('menuitemradio', { name: /português/i }).click();

    await expect(page).toHaveURL(/\/pt\/services$/);
    await expect(page.getByRole('heading', { name: /Serviços/i })).toBeVisible();
  });

  test('serves localized content for direct navigation to /pt/writing', async ({ page }) => {
    await page.goto('/pt/writing');
    await expect(page.getByRole('heading', { name: /Textos & Notas/i })).toBeVisible();
    await expect(page.getByText(/Os primeiros ensaios estão sendo compilados/i)).toBeVisible();
  });
});

test.describe('Navigation active state', () => {
  test('highlights the link matching the current route', async ({ page }) => {
    await page.goto('/en/journey');

    const journeyLink = page.getByRole('link', { name: /^journey$/i }).first();
    const projectsLink = page.getByRole('link', { name: /^projects$/i }).first();

    await expect(journeyLink).toHaveAttribute('aria-current', 'page');
    await expect(projectsLink).not.toHaveAttribute('aria-current', 'page');
  });
});
