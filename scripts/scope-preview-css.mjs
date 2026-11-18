// One-off (idempotent): scope the dark Sitemap Editor *preview* stylesheets under
// `.sitemap-preview`. They reuse the live editor's class names (.left-sidebar, …)
// and were bundled globally, so their dark styles overrode the live Sitemap
// Studio and it could never follow the light/dark setting.
//
//   node scripts/scope-preview-css.mjs
import fs from 'node:fs';
import path from 'node:path';
import postcss from 'postcss';

const DIR = 'src/sitemap-editor-preview';
const SCOPE = '.sitemap-preview';

const files = [];
for (const f of fs.readdirSync(DIR)) if (f.endsWith('.css')) files.push(path.join(DIR, f));
for (const f of fs.readdirSync(path.join(DIR, 'components'))) if (f.endsWith('.css')) files.push(path.join(DIR, 'components', f));

for (const file of files) {
  const src = fs.readFileSync(file, 'utf8');
  if (src.includes(SCOPE)) { console.log('already scoped:', file); continue; }
  const root = postcss.parse(src, { from: file });
  let n = 0;
  root.walkRules((rule) => {
    let p = rule.parent;
    while (p && p.type !== 'root') { if (p.type === 'atrule' && /keyframes/.test(p.name)) return; p = p.parent; }
    rule.selector = rule.selector.split(',').map((s) => {
      const t = s.trim();
      if (t === ':root' || t === 'html') return SCOPE;
      return `${SCOPE} ${t}`;
    }).join(',\n');
    n += 1;
  });
  fs.writeFileSync(file, root.toString());
  console.log(`scoped ${n} rules:`, file);
}
