// vite build 이후 실행.
// GitHub Pages에는 SPA 리라이트 기능이 없어서 /fbar 같은 경로를 직접 열면
// 서버가 먼저 HTTP 404를 반환한다(구글 색인 도구가 이를 거부함).
// 각 라우트에 대해 dist/<path>/index.html 을 만들어 HTTP 200 + 올바른
// per-page 메타태그를 제공한다. SPA는 그대로 부팅되어 해당 라우트를 렌더링한다.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { routeSeo, DEFAULT_LOCALE, canonicalFor } from '../src/seo/routeMeta.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(root, 'dist');
const template = readFileSync(join(distDir, 'index.html'), 'utf8');

// $ 등 특수문자를 안전하게 넣기 위해 문자열이 아닌 함수 치환을 사용한다.
function replaceAttr(html, regex, value) {
  return html.replace(regex, (_m, pre, post) => pre + value + post);
}

function applyMeta(html, route) {
  const title = route.title[DEFAULT_LOCALE];
  const description = route.description[DEFAULT_LOCALE];
  const canonical = canonicalFor(route.path);

  let out = html.replace(/<title>[\s\S]*?<\/title>/, () => `<title>${title}</title>`);
  out = replaceAttr(out, /(<meta name="title" content=")[^"]*(")/, title);
  out = replaceAttr(out, /(<meta name="description" content=")[^"]*(")/, description);
  out = replaceAttr(out, /(<meta property="og:title" content=")[^"]*(")/, title);
  out = replaceAttr(out, /(<meta property="og:description" content=")[^"]*(")/, description);
  out = replaceAttr(out, /(<meta property="og:url" content=")[^"]*(")/, canonical);
  out = replaceAttr(out, /(<meta name="twitter:title" content=")[^"]*(")/, title);
  out = replaceAttr(out, /(<meta name="twitter:description" content=")[^"]*(")/, description);
  out = replaceAttr(out, /(<meta name="twitter:url" content=")[^"]*(")/, canonical);
  out = replaceAttr(out, /(<link rel="canonical" href=")[^"]*(")/, canonical);
  return out;
}

let count = 0;
for (const route of routeSeo) {
  const html = applyMeta(template, route);
  if (route.path === '/') {
    // 홈: dist/index.html 을 라우터 메타와 일치하도록 갱신
    writeFileSync(join(distDir, 'index.html'), html, 'utf8');
  } else {
    const outDir = join(distDir, route.path.replace(/^\//, ''));
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'index.html'), html, 'utf8');
  }
  count += 1;
  console.log(`  ✓ ${route.path}`);
}
console.log(`[generate-static-routes] ${count} routes written`);
