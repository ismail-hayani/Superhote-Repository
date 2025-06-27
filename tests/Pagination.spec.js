import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('row', { name: '1 Smartphone $' }).getByRole('checkbox').check();
  await page.getByRole('row', { name: 'Wireless Earbuds $8.99' }).getByRole('checkbox').check();
  await page.getByRole('link', { name: '4', exact: true }).click();
  await page.getByRole('row', { name: 'Soundbar $16.99' }).getByRole('checkbox').check();
  await page.getByRole('link', { name: 'Errorcode 400' }).click();
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.locator('#shadow_host').getByRole('link', { name: 'Blog' }).click();
  await page.getByRole('link', { name: 'OK !' }).click();
  await page.goto('https://testautomationpractice.blogspot.com/');
  
  await page.getByRole('link', { name: 'apple' }).waitFor({ state: 'visible' });
await page.getByRole('link', { name: 'apple' }).click();
});