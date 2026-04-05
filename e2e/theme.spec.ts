import { test, expect } from '@playwright/test';

test.describe('Theme Switching', () => {
  test('should switch to dark mode and apply high-contrast background', async ({ page }) => {
    // Navigate to the homepage (English)
    await page.goto('/en');

    // Find the settings menu button (it has the settings icon)
    const settingsButton = page.getByRole('button', { name: /settings|configurações/i });
    await expect(settingsButton).toBeVisible();
    await settingsButton.click();

    // Find the 'Dark' theme option
    const darkOption = page.getByRole('button', { name: /dark|escuro/i });
    await expect(darkOption).toBeVisible();
    await darkOption.click();

    // Verify that the 'dark' class is present on the html element
    const html = page.locator('html');
    await expect(html).toHaveClass(/dark/);

    // Verify that the background-color of the body is dark (Zinc-950)
    // #09090b is Zinc-950
    const body = page.locator('body');
    await expect(body).toHaveCSS('background-color', 'rgb(9, 9, 11)');

    // Verify that the hero text is visible (High contrast Zinc-100)
    // #f4f4f5 is Zinc-100
    const heroTitle = page.getByRole('heading', { name: /Patrick Passos/i });
    await expect(heroTitle).toHaveCSS('color', 'rgb(244, 244, 245)');
  });

  test('should switch between languages correctly', async ({ page }) => {
    await page.goto('/en');
    
    // Check English header
    await expect(page.getByRole('heading', { name: /Patrick Passos/i })).toBeVisible();
    
    // Click Settings
    await page.getByRole('button', { name: /settings/i }).click();
    
    // Switch to Portuguese
    await page.getByRole('button', { name: /português/i }).click();
    
    // Verify URL change
    await expect(page).toHaveURL(/\/pt/);
    
    // Verify translated content
    await expect(page.getByText(/O que estou construindo agora/i)).toBeVisible();
  });
});
