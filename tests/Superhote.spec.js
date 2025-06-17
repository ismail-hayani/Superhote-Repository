import { test, expect, Page } from '@playwright/test';

test('Vérification des éléments principaux de la page d\'accueil SuperHote', async ({ page }: { page: Page }) => {
  // Navigation
  await page.goto('https://www.superhote.com/');
  
  // Gestion des cookies
  const acceptCookiesButton = page.getByRole('button', { name: 'Accepter les cookies', exact: true });
  await acceptCookiesButton.click();

  // Vérification du header
  const logo = page.getByRole('banner').getByRole('link', { name: 'Logo SuperHote Rounded' });
  await expect(logo).toBeVisible();

  // Vérification des sections principales
  const mainHeadings = [
    'Rejoignez le TOP 10% des',
    'Automatisez à 100% Boostez',
    'Facile à prendre en main',
    'Surpuissant & Performant'
  ];

  for (const heading of mainHeadings) {
    await expect(page.getByRole('heading', { name: heading })).toBeVisible();
  }

  // Vérification des textes
  const expectedTexts = [
    'Nos clients économisent en moyenne 28h par semaine en rejoignant SuperHote (',
    'Certains de nos clients n\'ont',
    'Échangez et partagez vos idées ainsi que votre motivation avec des SuperHotes'
  ];

  for (const text of expectedTexts) {
    await expect(page.getByText(text)).toBeVisible();
  }

  // Vérification du contenu du main
  await expect(page.getByRole('main')).toContainText('En savoir plus sur l\'Équipe');

  // Vérification de l'image dans la section
  const familySection = page.locator('section').filter({ 
    hasText: 'Rejoignez la SuperHote Family' 
  });
  const sectionImage = familySection.locator('img');
  await expect(sectionImage).toBeVisible({ timeout: 10000 });
});