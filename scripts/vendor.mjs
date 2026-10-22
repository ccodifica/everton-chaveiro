// Copia as bibliotecas instaladas pelo npm para public/vendor/, de onde as páginas
// carregam (assim o site não depende de CDN). Roda sozinho a cada `npm install`.
import { copyFileSync, mkdirSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const files = {
  'react.production.min.js': 'node_modules/react/umd/react.production.min.js',
  'react-dom.production.min.js': 'node_modules/react-dom/umd/react-dom.production.min.js',
  'lucide.min.js': 'node_modules/lucide/dist/umd/lucide.min.js',
};

mkdirSync(new URL('public/vendor/', root), { recursive: true });
for (const [dest, src] of Object.entries(files)) {
  copyFileSync(new URL(src, root), new URL(`public/vendor/${dest}`, root));
  console.log(`public/vendor/${dest} <- ${src}`);
}
