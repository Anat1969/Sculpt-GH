// Secrets gate: fails if the build carries a service_role JWT or an API key.
// Usage: node tools/secrets.cjs dist
const fs = require('fs');
const path = require('path');
const dir = process.argv[2] || 'dist';
const files = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p) : files.push(p); } })(dir);
let bad = 0;
const KEY = /(sk-ant-[A-Za-z0-9_-]{20,}|sk-[A-Za-z0-9]{32,}|AIza[0-9A-Za-z_-]{35}|ghp_[A-Za-z0-9]{36}|github_pat_[A-Za-z0-9_]{40,})/g;
const JWT = /eyJ[A-Za-z0-9_-]{10,}\.eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}/g;
for (const f of files) {
  if (!/\.(js|html|css|json|map|txt)$/.test(f)) continue;
  const s = fs.readFileSync(f, 'utf8');
  for (const m of s.match(KEY) || []) { bad++; console.log(`KEY in ${f}: ${m.slice(0, 8)}...`); }
  for (const m of s.match(JWT) || []) {
    try {
      const body = JSON.parse(Buffer.from(m.split('.')[1], 'base64url').toString());
      if (body.role === 'service_role') { bad++; console.log(`service_role JWT in ${f}`); }
    } catch { /* not a JWT */ }
  }
}
console.log(bad ? `secrets gate: ${bad} found` : `secrets gate: clean (${files.length} files)`);
process.exit(bad ? 1 : 0);
