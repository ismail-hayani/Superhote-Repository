// Test de la gestion de différents types d'alertes popup

import { test } from '@playwright/test';

test('test gestion de plusieurs alertes popup', async ({ page }) => {
  // Aller sur la page principale
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Gérer l'alerte "Simple Alert"
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Simple Alert' }).click();

  // Gérer l'alerte "Confirmation Alert"
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Confirmation Alert' }).click();

  // Gérer l'alerte "Prompt Alert"
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Prompt Alert' }).click();

  // Cliquer sur les boutons START et STOP (adapte selon le comportement attendu)
  await page.getByRole('button', { name: 'START' }).click();
  await page.getByRole('button', { name: 'STOP'}).click(); });