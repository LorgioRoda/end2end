import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.cupraofficial.fr/configurateur/w/model?wf=cupra-fr');
  await page.getByRole('button', { name: 'TOUT ACCEPTER' }).click();
  await page.locator('#CARLINE-GROUP-KBP').getByText('ATECA').click();
  await expect(page.locator('#CARLINE-GROUP-KBP').getByTestId('model-selector__redirect-button')).toBeVisible();
  await page.locator('#CARLINE-GROUP-KBP').getByTestId('model-selector__redirect-button').click();
  await expect(page.getByText('Modèle', { exact: true })).toBeVisible();
  await expect(page.locator('ds-tabs').getByText('Versions')).toBeVisible();
  await expect(page.locator('ds-tabs').getByText('Couleurs')).toBeVisible();
  await expect(page.locator('ds-tabs').getByText('Jantes')).toBeVisible();
  await expect(page.locator('ds-tabs').getByText('Selleries')).toBeVisible();
  await expect(page.locator('ds-tabs').getByText('Options')).toBeVisible();
  await expect(page.getByText('ATECA46.170 €/Prix total')).toBeVisible();
  await expect(page.getByLabel('[fr] hero_banner_load_configuration_button')).toBeVisible();
  await expect(page.getByLabel('[fr] common_summary_cta')).toBeVisible();
});