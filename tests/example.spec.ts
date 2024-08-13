import { test, expect } from '@playwright/test';

test('test section Ateca banner ', async ({ page }) => {
  await page.goto('https://www.cupraofficial.es/configurador/w/model?wf=cupra-es');
  await expect(page.getByRole('button', { name: 'ACEPTAR TODAS' })).toBeVisible();
  await page.getByRole('button', { name: 'RECHAZAR' }).click();
  await expect(page.locator('#CARLINE-GROUP-KBP').getByTestId('model-selector__redirect-button')).toBeVisible();
  await expect(page.locator('#CARLINE-GROUP-KBP').getByText('CUPRA ATECA')).toBeVisible();
  await page.locator('#CARLINE-GROUP-KBP').getByTestId('model-selector__redirect-button').click();
  await expect(page.locator('section').filter({ hasText: 'Cargar configuración' }).locator('img')).toBeVisible();
  await expect(page.getByLabel('[es] hero_banner_scroll_down')).toBeVisible();
  await expect(page.getByText('Modelo', { exact: true })).toBeVisible();
  await expect(page.getByText('Versión', { exact: true })).toBeVisible();
  await expect(page.locator('ds-tabs').getByText('Color')).toBeVisible();
  await expect(page.locator('ds-tabs').getByText('Llantas')).toBeVisible();
  await expect(page.getByText('Interior', { exact: true })).toBeVisible();
  await expect(page.getByText('Opcionales', { exact: true })).toBeVisible();
  await page.getByText('Versión', { exact: true }).click();
  await expect(page.locator('#mcc-app-root').getByText('CUPRA ATECA', { exact: true })).toBeVisible();
  await expect(page.getByLabel('[es] common_summary_cta')).toBeVisible();
});


test('test section ATECA engine', async ({ page }) => {
  await page.goto('https://www.cupraofficial.es/configurador/w/model?wf=cupra-es');
  await page.getByRole('button', { name: 'ACEPTAR TODAS' }).click();
  await expect(page.locator('#CARLINE-GROUP-KBP').getByText('CUPRA ATECA')).toBeVisible();
  await expect(page.locator('#CARLINE-GROUP-KBP').getByTestId('model-selector__redirect-button')).toBeVisible();
  await page.locator('#CARLINE-GROUP-KBP').getByTestId('model-selector__redirect-button').click();
  await expect(page.getByText('Selecciona tu versión y motor')).toBeVisible();
  await expect(page.locator('li').filter({ hasText: 'Gasolina CUPRA Ateca 2.0 TSI' })).toBeVisible();
  await expect(page.locator('ul').filter({ hasText: 'Gasolina CUPRA Ateca 2.0 TSI' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: 'Mostrar más' }).nth(3)).toBeVisible();
  await page.getByText('Mostrar más').first().click();
  await expect(page.getByText('Datos técnicos')).toBeVisible();
  await page.locator('ds-accordion:nth-child(3) > .container > .title').click();
  await page.locator('ds-accordion:nth-child(2) > .container > .title').click();
  await page.locator('.container > .title').first().click();
  await expect(page.locator('.container > .title').first()).toBeVisible();
  await page.locator('ds-accordion:nth-child(3) > .container > .title').click();
  await page.locator('ds-accordion:nth-child(3) > .container > .title').click();
  await expect(page.locator('ds-accordion:nth-child(3) > .container > .content')).toBeVisible();
  await page.locator('ds-accordion:nth-child(4) > .container > .title').click();
  await expect(page.locator('ds-accordion:nth-child(4) > .container > .content')).toBeVisible();
  await expect(page.getByLabel('', { exact: true }).getByRole('button')).toBeVisible();
  await page.getByLabel('', { exact: true }).getByRole('button').click();
});


test('test section ATECA color', async ({ page }) => {
  await page.goto('https://www.cupraofficial.es/configurador/w/model?wf=cupra-es');
  await page.getByRole('button', { name: 'ACEPTAR TODAS' }).click();
  await expect(page.locator('#CARLINE-GROUP-KBP').getByText('CUPRA ATECA')).toBeVisible();
  await expect(page.locator('#CARLINE-GROUP-KBP').getByTestId('model-selector__redirect-button')).toBeVisible();
  await page.locator('#CARLINE-GROUP-KBP').getByTestId('model-selector__redirect-button').click();
  await expect(page.locator('#color').getByText('Color', { exact: true })).toBeVisible();
  await expect(page.locator('#color').getByTestId('swiper').locator('img').first()).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Blanco BilaEstandar$/ }).nth(1)).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Blanco Nevada655 €$/ }).first()).toBeVisible();
  await page.locator('div').filter({ hasText: /^Blanco BilaEstandar$/ }).nth(1).click();
  await expect(page.locator('div').filter({ hasText: /^Blanco BilaEstandar$/ }).nth(1)).toBeVisible();
  await expect(page.locator('#color').getByTestId('swiper').locator('div').filter({ hasText: '/4' }).nth(2)).toBeVisible();
  await page.locator('#color').getByRole('button').nth(2).click();
  await page.locator('#color').getByRole('button').nth(2).click();
  await page.locator('#color').getByRole('button').nth(2).click();
  await page.locator('#color').getByRole('button').nth(2).click();
  await expect(page.locator('#color').getByTestId('swiper').locator('div').filter({ hasText: '/4' }).nth(2)).toBeVisible();
});


test('test section ATECA wheel', async ({ page }) => {
  await page.goto('https://www.cupraofficial.es/configurador/w/model?wf=cupra-es');
  await expect(page.getByText('45.845 €')).toBeVisible();
  await page.locator('#wheel > div > div > .sc-cVzzKN > .sc-eqUzNf > .sc-bVVHAX > .sc-iGgVNO > div:nth-child(2) > .sc-fulBNO > .sc-gsFSjX > .sc-kAycRU').click();
  await expect(page.getByText('46.144 €')).toBeVisible();
  await page.getByText('Llantas de aleación ligera 8J x 19Serie').click();
  await expect(page.getByText('45.845 €')).toBeVisible();
  await expect(page.locator('#wheel').getByTestId('swiper').locator('div').filter({ hasText: '/4' }).nth(2)).toBeVisible();
  await expect(page.locator('#wheel').getByRole('button').first()).toBeVisible();
  await page.locator('#wheel').getByRole('button').first().click();
  await expect(page.locator('ds-modal img').first()).toBeVisible();
  await expect(page.getByLabel('', { exact: true }).getByRole('button')).toBeVisible();
  await page.getByLabel('', { exact: true }).getByRole('button').click();
});

test('test section ATECA upholstery', async ({ page }) => {
  await page.goto('https://www.cupraofficial.es/carshop/w/configuration?id=ePl9IIpVw_Cws2OQj6efq66ZhaWhQaJFmm5aapKFrolZYppuYrKxpa6ZibGxeaqFiVmqcRpK4Dj6-Oh6OwU4-QbrG8KSBZbQcvLT9TNw0w00CQDKuxmaKBhFGkWCmKZmCiDg5AfkuEf6BwMRnpAlwhicYR9l7evv5-PqYxpTagBMropA24KAyBpuay0AOSBNzA');
  await page.getByRole('button', { name: 'ACEPTAR TODAS' }).click();
  await expect(page.locator('div').filter({ hasText: /^Asientos Bucket con tapicería de Piel\/PVC en color Negro1\.127 €$/ }).nth(1)).toBeVisible();
  await page.getByText('Asientos Bucket con tapicería de Piel/PVC en color Negro1.127 €').click();
  await expect(page.getByText('47.222 €')).toBeVisible();
  await page.getByText('Asientos Bucket con tapicería DINAMICA®/PVC en color NegroEstandar').click();
  await expect(page.getByText('45.845 €')).toBeVisible();
  await expect(page.locator('#upholstery').getByTestId('swiper').locator('div').filter({ hasText: '/2' }).nth(2)).toBeVisible();
  await page.locator('#upholstery').getByRole('button').nth(2).click();
  await page.locator('#upholstery').getByRole('button').nth(2).click();
  await expect(page.locator('#upholstery').getByRole('button').first()).toBeVisible();
  await page.locator('#upholstery').getByRole('button').first().click();
  await expect(page.locator('ds-modal').getByRole('button').first()).toBeVisible();
  await page.locator('ds-modal').getByRole('button').first().click();
  await expect(page.getByRole('button', { name: '2D' })).toBeVisible();
  await page.getByRole('button', { name: '2D' }).click();
  await expect(page.getByLabel('', { exact: true }).getByRole('button')).toBeVisible();
  await expect(page.locator('ds-modal').getByTestId('swiper').locator('div').filter({ hasText: '/2' }).nth(2)).toBeVisible();
  await page.locator('ds-modal').getByRole('button').nth(2).click();
  await page.getByLabel('', { exact: true }).getByRole('button').click();
});
