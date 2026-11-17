// Deterministic engine checks: run with `node tests/unit.mjs` (uses tsx to load TypeScript).
import { register } from 'tsx/esm/api';
register();
const { assess } = await import('../src/lib/assess.ts');
const { sunPosition, shadowLength } = await import('../src/lib/solar.ts');
const { viewDistance } = await import('../src/lib/maertens.ts');
const { agreement } = await import('../src/lib/kappa.ts');
const { DEFAULT_DESIGN } = await import('../src/lib/store.ts');

let fail = 0;
const ok = (c, msg) => { if (!c) { fail++; console.log('FAIL', msg); } else console.log('ok  ', msg); };
const near = (a, b, tol) => Math.abs(a - b) <= tol;

// Maertens: 27 degrees, from 1.6 m eye height
ok(near(viewDistance(5.6, 27), 4 / Math.tan((27 * Math.PI) / 180), 1e-9), 'Maertens 27° distance');
// Sun at solar noon in Ashdod: 90 - 31.8 + dec
ok(near(sunPosition('summer', 12).altitude, 90 - 31.8 + 23.44, 0.01), 'summer noon altitude');
ok(near(sunPosition('winter', 12).altitude, 90 - 31.8 - 23.44, 0.01), 'winter noon altitude');
ok(near(sunPosition('equinox', 12).azimuth, 180, 0.5), 'noon sun due south');
ok(sunPosition('equinox', 9).azimuth < 180 && sunPosition('equinox', 15).azimuth > 180, 'morning east, afternoon west');
ok(near(shadowLength(1, 45), 1, 1e-9), 'shadow at 45° equals height');
ok(shadowLength(1, -5) === Infinity, 'no sun, no shadow');

// Holes reduce volume and open the body
const solid = assess({ ...DEFAULT_DESIGN, holes: 0 });
const holed = assess({ ...DEFAULT_DESIGN, holes: 2 });
ok(holed.volumeM3 < solid.volumeM3, 'holes reduce volume');
ok(holed.shape.seeThrough > solid.shape.seeThrough + 0.05, 'holes open the front view');
// Weight scales with density and count
const marble = assess({ ...DEFAULT_DESIGN, material: 'marble' });
ok(near(solid.totalKg / 8800, marble.totalKg / 2700 * (solid.volumeM3 / marble.volumeM3), 1e-6), 'weight = volume × density');
const many = assess({ ...DEFAULT_DESIGN, holes: 0, count: 100 });
ok(near(many.totalKg, solid.totalKg * 100, 1e-6), 'weight × count');
// Height scales volume by the cube
const tall = assess({ ...DEFAULT_DESIGN, holes: 0, height: DEFAULT_DESIGN.height * 2 });
ok(near(tall.volumeM3 / solid.volumeM3, 8, 0.01), 'volume scales with height cubed');
// Every preset stands
for (const form of ['reclining', 'column', 'stone']) ok(assess({ ...DEFAULT_DESIGN, form }).checks.find((c) => c.id === 'stable').verdict === 'pass', `${form} stands`);
// Site depth decides the whole-view check
ok(assess({ ...DEFAULT_DESIGN, siteDepth: 2 }).checks.find((c) => c.id === 'whole').verdict === 'fail', 'too little depth fails');
// Every check explains itself
ok(solid.checks.every((c) => c.measures && c.how && c.standard && c.limit && c.confidence), 'every check: what, how, standard, limit, confidence');
// Kappa
ok(agreement([{ tool: true, human: true }, { tool: false, human: false }]).kappa === 1, 'kappa 1 for full agreement');
ok(agreement([]).kappa === null, 'kappa empty');

if (fail) { console.log(`${fail} failed`); process.exit(1); }
console.log('all unit checks passed');
