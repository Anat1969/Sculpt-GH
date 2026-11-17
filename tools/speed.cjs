// Speed gate: the first screen must not wait for three.js. Budgets in gzip kB.
// Usage: node tools/speed.cjs dist
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const dir = process.argv[2] || 'dist';
const html = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
const entry = [...html.matchAll(/(?:src|href)="\/?(assets\/[^"]+\.(?:js|css))"/g)].map((m) => m[1]);
const gz = (f) => zlib.gzipSync(fs.readFileSync(path.join(dir, f))).length / 1024;
let total = 0;
for (const f of entry) { const k = gz(f); total += k; console.log(`${f}: ${k.toFixed(1)} kB gzip (loaded first)`); }
const BUDGET = 130;
const three = entry.some((f) => /three/.test(f));
console.log(`first load ${total.toFixed(1)} kB, budget ${BUDGET} kB; three.js on first load: ${three ? 'yes' : 'no'}`);
process.exit(total > BUDGET ? 1 : 0);
