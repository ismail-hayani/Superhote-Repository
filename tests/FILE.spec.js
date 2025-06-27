import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.locator('#singleFileInput').click();
  // Définir le chemin absolu du fichier à uploader
  const filePath = 'C:\\Users\\i.elhayani\\OneDrive - Itecor International\\Images\\qTest.png';

  // Uploader le fichier via l'input de type file (adapte le sélecteur si besoin)
  await page.setInputFiles('input[type="file"]', filePath);
  
  await page.locator('#multipleFilesInput').click();
  
  // Définir les chemins absolus des fichiers à uploader
  // Définir les chemins absolus des fichiers à uploader
   // Chemins absolus des fichiers à uploader
  const files = [
    "C:\\Users\\i.elhayani\\OneDrive - Itecor International\\Images\\Captures d’écran\\Capture d'écran 2025-05-23 154931.png",
    "C:\\Users\\i.elhayani\\OneDrive - Itecor International\\Images\\Captures d’écran\\Capture d'écran 2025-06-04 164630.png"
  ];

  // Uploader plusieurs fichiers via l'input (adapte le sélecteur si besoin)
  await page.locator('#multipleFilesInput').setInputFiles(files);

  // Vérifier que les fichiers sont bien sélectionnés dans l'input (vérification côté DOM)
  const input = page.locator('#multipleFilesInput');
  const fileNames = await input.evaluate(input =>
    Array.from(input.files).map(f => f.name)
  );
  expect(fileNames).toContain("Capture d'écran 2025-05-23 154931.png");
  expect(fileNames).toContain("Capture d'écran 2025-06-04 164630.png");
  
  await page.waitForTimeout(7000);

  await page.getByRole('heading', { name: 'Static Web Table' }).click();
  await expect(page.locator('#HTML7')).toContainText('Slider');
  await expect(page.locator('#Stats1')).toContainText('Visitors');
  await page.locator('#input1').click();
  await page.locator('#input1').press('CapsLock');
  await page.locator('#input1').fill('H');
  await page.locator('#input1').press('CapsLock');
  await page.locator('#input1').fill('Hello');
  await page.locator('#input2').click();
  await page.locator('#input2').press('CapsLock');
  await page.locator('#input2').fill('H');
  await page.locator('#input2').press('CapsLock');
  await page.locator('#input2').fill('Hello');
  await page.locator('#input3').click();
  await page.locator('#input3').press('CapsLock');
  await page.locator('#input3').fill('H');
  await page.locator('#input3').press('CapsLock');
  await page.locator('#input3').fill('Hello');
  await page.waitForTimeout(10000);
  await page.locator('#section1').getByRole('button', { name: 'Submit' }).click();
  await page.locator('#section2').getByRole('button', { name: 'Submit' }).click();
  await page.locator('#section3').getByRole('button', { name: 'Submit' }).click();
});