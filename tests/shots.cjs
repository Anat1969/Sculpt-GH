// Screenshots of every main screen, desktop and phone. Usage: node tests/shots.cjs <outdir>
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const out = process.argv[2] || 'shots';
fs.mkdirSync(out, { recursive: true });
const MENU = fs.readFileSync(path.join(__dirname, 'fixtures/ai-menu.js'), 'utf8');
(async () => {
  const b = await chromium.launch({ executablePath: process.env.PW_CHROME || '/opt/pw-browsers/chromium', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  for (const [vw, vh, tag] of [[1440, 900, 'd'], [390, 844, 'm'], [1865, 1160, 'w']]) {
    const p = await b.newPage({ viewport: { width: vw, height: vh } });
    p.on('pageerror', (e) => console.log('PAGEERROR', tag, e.message));
    p.on('console', (m) => { if (m.type() === 'error') console.log('CONSOLE', tag, m.text().slice(0, 200)); });
    await p.route('**/ai-menu.js', (r) => r.fulfill({ body: MENU, contentType: 'application/javascript' }));
    await p.route('https://fonts.googleapis.com/**', (r) => r.abort());
    for (const route of ['', 'studio', 'collection', 'method']) {
      await p.goto(`http://localhost:4173/#/${route}`);
      await p.waitForTimeout(route === 'studio' || route === '' ? 2500 : 600);
      await p.screenshot({ path: `${out}/${tag}-${route || 'home'}.png`, fullPage: tag === 'm' });
      const sw = await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      const sh = await p.evaluate(() => document.documentElement.scrollHeight / window.innerHeight);
      console.log(tag, route || 'home', 'hscroll', sw, 'scrollRatio', sh.toFixed(2));
    }
    await p.close();
  }
  await b.close();
})();
