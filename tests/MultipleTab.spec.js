import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await expect(page.getByText('For Selenium, Cypress &')).toBeVisible();
  await expect(page.locator('#PageList2')).toContainText('Home');
  await expect(page.locator('#PageList2')).toContainText('Blog');
  await page.getByRole('heading', { name: 'Tabs' }).click();
  await expect(page.getByRole('heading', { name: 'Tabs' })).toBeVisible();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'New Tab' }).click();
  const page1 = await page1Promise;
  await expect(page1.getByText('Software Testing & Automation')).toBeVisible();
  
// Augmentez à 10s (au lieu de 3s)
  await page1.getByText('Got it!').click();
});