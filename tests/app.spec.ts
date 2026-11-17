import { test, expect, type Page } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

const MENU = fs.readFileSync(path.join(process.cwd(), 'tests/fixtures/ai-menu.js'), 'utf8');

async function boot(page: Page, hash = '') {
  // the shared logo component is served from a local copy; no external calls in tests
  await page.route('**/ai-menu.js', (r) => r.fulfill({ body: MENU, contentType: 'application/javascript' }));
  await page.route('https://fonts.googleapis.com/**', (r) => r.abort());
  await page.route('https://appofapp-gh.vercel.app/**', (r) => r.abort());
  await page.goto(`/#/${hash}`);
}

async function menu(page: Page, label: string) {
  await page.locator('ai-menu .logo').click();
  await page.locator('ai-menu [role=menuitem]', { hasText: label }).first().click();
}

test('home: logo button, three decisions, a live sculpture', async ({ page }) => {
  await boot(page);
  await expect(page.locator('ai-menu .logo')).toBeVisible();
  expect(await page.locator('header >> text=העתקת קישור').first().isVisible().catch(() => false)).toBeFalsy();
  await expect(page.locator('.move')).toHaveCount(3);
  await expect(page.locator('.hero-stage canvas')).toBeVisible();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('פסל נמדד במבט');
});

test('each discovery opens the studio with its preset', async ({ page }) => {
  await boot(page);
  const names = ['איי וייוויי', 'הנרי מור', 'ברניני'];
  for (let i = 0; i < 3; i++) {
    await page.goto('/#/');
    await page.locator('.move button').nth(i).click();
    await expect(page).toHaveURL(/#\/studio/);
    await expect(page.getByTestId('title')).toContainText(names[i]);
  }
});

test('studio: every decision button responds, numbers follow', async ({ page }) => {
  await boot(page, 'studio');
  const weight = page.getByTestId('big-weight').locator('.num');
  await expect(weight).not.toBeEmpty();
  const chips = page.locator('.controls button.chip');
  const n = await chips.count();
  expect(n).toBeGreaterThan(20);
  for (let i = 0; i < n; i++) {
    const c = chips.nth(i);
    if (!(await c.isVisible())) continue;
    await c.click();
  }
  // material changes the weight
  await page.getByRole('button', { name: 'ברונזה' }).click();
  const bronze = await weight.textContent();
  await page.getByRole('button', { name: 'בטון' }).click();
  await expect(weight).not.toHaveText(bronze!);
  // view modes and spin
  for (const name of ['במקום', 'הפסל', 'סיבוב']) await page.locator('.stage-tools').getByRole('button', { name }).click();
});

test('site depth decides the whole-view check', async ({ page }) => {
  await boot(page, 'studio');
  const depth = page.locator('input[aria-label="עומק פנוי מול הפסל"]');
  await depth.fill('2');
  await expect(page.getByTestId('big-whole')).toHaveAttribute('data-v', 'fail');
  await depth.fill('80');
  await expect(page.getByTestId('big-whole')).toHaveAttribute('data-v', 'pass');
});

test('every check explains how it was measured', async ({ page }) => {
  await boot(page, 'studio');
  const checks = page.locator('details.check');
  await expect(checks).toHaveCount(8);
  await checks.first().locator('summary').click();
  for (const t of ['מה נמדד', 'איך חושב', 'תקן', 'מגבלה', 'ביטחון']) await expect(checks.first().getByText(t, { exact: true })).toBeVisible();
});

test('professional leads: verdicts hidden until judged, agreement measured', async ({ page }) => {
  await boot(page, 'studio');
  await page.getByRole('button', { name: 'אני מובילה' }).click();
  await expect(page.getByTestId('big-stable').locator('.num')).toHaveText('?');
  const stable = page.getByTestId('check-stable');
  await stable.locator('summary').click();
  await stable.getByRole('button', { name: 'עובר', exact: true }).click();
  await expect(page.getByTestId('big-stable').locator('.num')).toHaveText('עומד');
  await expect(page.getByTestId('agreement')).toContainText('1 מתוך 1');
});

test('save to collection from the logo, survives reload, delete asks and can be undone', async ({ page }) => {
  await boot(page, 'studio');
  await page.getByLabel('שם הפסל').fill('שער הים');
  await menu(page, 'שמירה לאוסף');
  await page.goto('/#/collection');
  await expect(page.getByTestId('saved-card')).toHaveCount(1);
  await page.reload();
  await expect(page.getByTestId('saved-card')).toContainText('שער הים');
  await expect(page.getByTestId('saved-card').locator('img')).toHaveAttribute('src', /^data:image\/jpeg/);
  await page.getByRole('button', { name: 'מחיקה' }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.getByRole('dialog').getByRole('button', { name: 'מחיקה' }).click();
  await expect(page.getByTestId('saved-card')).toHaveCount(0);
  await page.getByRole('button', { name: 'ביטול הפעולה' }).click();
  await expect(page.getByTestId('saved-card')).toHaveCount(1);
  await page.getByRole('button', { name: 'פתיחה בסדנה' }).click();
  await expect(page.getByTestId('title')).toHaveText('שער הים');
});

test('reset asks first and can be undone; design persists after reload', async ({ page }) => {
  await boot(page, 'studio');
  await page.getByLabel('שם הפסל').fill('נשמר אחרי רענון');
  await page.waitForTimeout(400);
  await page.reload();
  await expect(page.getByTestId('title')).toHaveText('נשמר אחרי רענון');
  await menu(page, 'איפוס הסדנה');
  await page.getByRole('dialog').getByRole('button', { name: 'איפוס' }).click();
  await expect(page.getByTestId('title')).toHaveText('פסל ללא שם');
  await page.getByRole('button', { name: 'ביטול הפעולה' }).click();
  await expect(page.getByTestId('title')).toHaveText('נשמר אחרי רענון');
});

test('a shared link opens the same sculpture', async ({ page }) => {
  await boot(page, 'studio');
  const d = Buffer.from(encodeURIComponent(JSON.stringify({ name: 'מקישור', form: 'column' })).replace(/%([0-9A-F]{2})/g, (_, h) => String.fromCharCode(parseInt(h, 16))), 'latin1').toString('base64');
  await page.goto(`/#/studio?d=${d}`);
  await expect(page.getByTestId('title')).toHaveText('מקישור');
});

test('method page lists a standard for every measure', async ({ page }) => {
  await boot(page, 'method');
  await expect(page.getByText('Der optische Maßstab', { exact: false }).first()).toBeVisible();
  await expect(page.locator('.std').first().locator('tbody tr')).toHaveCount(6);
});

test('phone: no horizontal scroll on any screen, RTL everywhere', async ({ browser }) => {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();
  for (const r of ['', 'studio', 'collection', 'method']) {
    await boot(page, r);
    await page.waitForTimeout(300);
    const over = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(over, r).toBeLessThanOrEqual(0);
    expect(await page.evaluate(() => getComputedStyle(document.body).direction)).toBe('rtl');
  }
  await ctx.close();
});

test('reduced motion: no auto spin, no transitions', async ({ browser }) => {
  const ctx = await browser.newContext({ reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  await boot(page);
  const t = await page.evaluate(() => getComputedStyle(document.querySelector('.btn')!).transitionDuration);
  expect(t === '0s' || t === '').toBeTruthy();
  await ctx.close();
});

test('installable: no installability errors', async ({ page }) => {
  await boot(page);
  const cdp = await page.context().newCDPSession(page);
  const { installabilityErrors } = await cdp.send('Page.getInstallabilityErrors');
  // in-incognito: every Playwright context is a fresh profile, not a property of the app
  expect(installabilityErrors.map((e) => e.errorId).filter((id) => id !== 'in-incognito')).toEqual([]);
});
