import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.superhote.com/');
  await page.getByRole('button', { name: 'Accepter les cookies', exact: true }).click();
  await expect(page.getByRole('banner').getByRole('link', { name: 'Logo SuperHote Rounded' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Rejoignez le TOP 10% des' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Automatisez à 100% Boostez' })).toBeVisible();
  await expect(page.getByText('Nos clients économisent en moyenne 28h par semaine en rejoignant SuperHote (')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Facile à prendre en main' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Surpuissant & Performant' })).toBeVisible();
  await expect(page.getByText('Certains de nos clients n\'ont')).toBeVisible();
  await expect(page.getByRole('main')).toContainText('En savoir plus sur l\'Équipe');
  
  await expect(page.getByText('Échangez et partagez vos idées ainsi que votre motivation avec des SuperHotes')).toBeVisible();
  await expect(page.locator('section').filter({ hasText: 'Rejoignez la SuperHote Family' }).locator('img'))
  .toBeVisible({ timeout: 10000 });
});