// @ts-check
const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

const App ='https://top-trump-star-wars-dnz4xi3ob-k-velvet-p.vercel.app/'

test('has title', async ({ page }) => {
  await page.goto(App);
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Star Wars Top Trumps/);
});


test('play now button', async ({ page }) => {
  await page.goto(App);
  // Click the get started link.
  await page.getByRole('button', { name: 'Play Now!' }).click();

  // Expects page to have a heading with the name of star wars top trumps.
  await expect(page.getByRole('heading', { name: 'Star Wars Top Trumps' })).toBeVisible();
});

test('raido is checked', async ({ page }) => {
  await page.goto(App);
  // Click the get started link.
  await page.getByRole('button', { name: 'Play Now!' }).click();

  await page.click('input[type="radio"]');

  // Expects page to have a heading with the name of star wars top trumps.
  // await page.isChecked('input[type="radio"]') ;
  await expect(page.isChecked('input[type="radio"]')).toBe(true);
  // await expect(page.isChecked('input[type="checkbox"]')).toBe(true);
} );

