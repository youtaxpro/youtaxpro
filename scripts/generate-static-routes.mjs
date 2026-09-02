// vite build 이후 실행.
// GitHub Pages에는 SPA 리라이트 기능이 없어서 /fbar 같은 경로를 직접 열면
// 서버가 먼저 HTTP 404를 반환한다(구글 색인 도구가 이를 거부함).
// 각 라우트 × 로케일(ko/en)에 대해 정적 HTML을 만들어 HTTP 200 + per-page
// 메타태그(title/description/canonical/hreflang) 를 제공한다.
//   ko:  dist/<path>/index.html          (예: /, /fbar/)
//   en:  dist/en/<path>/index.html       (예: /en/, /en/fbar/)
// SPA는 그대로 부팅되어 해당 라우트를 렌더링한다. sitemap.xml 도 여기서 생성.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  routeSeo,
  LOCALES,
  canonicalFor,
  alternatesFor,
  localizedPath,
} from '../src/seo/routeMeta.js';
import { i18n } from '../src/i18n/index.js';
import { landingDoc } from '../src/data/landing/index.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(root, 'dist');
const template = readFileSync(join(distDir, 'index.html'), 'utf8');

// FAQ 페이지에 FAQPage 구조화 데이터를 주입한다. 내용은 i18n faq.items 를 그대로 사용.
function faqPageJsonLd(locale) {
  const items = i18n.global.getLocaleMessage(locale).faq.items || [];
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: locale,
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: String(it.answer).replace(/\s*[•‧·]\s*/g, ' ').replace(/\s+/g, ' ').trim(),
      },
    })),
  };
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

// 랜딩 페이지 FAQ → FAQPage 스키마
function landingFaqJsonLd(landingKey, locale) {
  const doc = landingDoc(landingKey, locale);
  if (!doc || !Array.isArray(doc.faq) || !doc.faq.length) return '';
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: locale,
    mainEntity: doc.faq.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: String(it.a).replace(/\s+/g, ' ').trim() },
    })),
  };
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

// $ 등 특수문자를 안전하게 넣기 위해 문자열이 아닌 함수 치환을 사용한다.
function replaceAttr(html, regex, value) {
  return html.replace(regex, (_m, pre, post) => pre + value + post);
}

function hreflangTags(basePath) {
  return alternatesFor(basePath)
    .map((a) => `<link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`)
    .join('\n    ');
}

function applyMeta(html, route, locale) {
  const title = route.title[locale] || route.title.ko;
  const description = route.description[locale] || route.description.ko;
  const canonical = canonicalFor(route.path, locale);

  let out = html.replace(/<html lang="[^"]*"/, `<html lang="${locale}"`);
  // 템플릿에 박혀 있던 기본 hreflang 링크 제거 (아래에서 페이지별로 다시 주입)
  out = out.replace(/[ \t]*<link rel="alternate" hreflang="[^"]*"[^>]*>\n?/g, '');
  out = out.replace(/<title>[\s\S]*?<\/title>/, () => `<title>${title}</title>`);
  out = replaceAttr(out, /(<meta name="title" content=")[^"]*(")/, title);
  out = replaceAttr(out, /(<meta name="description" content=")[^"]*(")/, description);
  out = replaceAttr(out, /(<meta property="og:title" content=")[^"]*(")/, title);
  out = replaceAttr(out, /(<meta property="og:description" content=")[^"]*(")/, description);
  out = replaceAttr(out, /(<meta property="og:url" content=")[^"]*(")/, canonical);
  out = replaceAttr(out, /(<meta name="twitter:title" content=")[^"]*(")/, title);
  out = replaceAttr(out, /(<meta name="twitter:description" content=")[^"]*(")/, description);
  out = replaceAttr(out, /(<meta name="twitter:url" content=")[^"]*(")/, canonical);
  out = replaceAttr(out, /(<link rel="canonical" href=")[^"]*(")/, canonical);

  const head = [
    hreflangTags(route.path),
    `<meta property="og:locale" content="${locale === 'en' ? 'en_US' : 'ko_KR'}" />`,
  ];
  if (route.path === '/faq') head.push(faqPageJsonLd(locale));
  if (route.landingKey) {
    const s = landingFaqJsonLd(route.landingKey, locale);
    if (s) head.push(s);
  }
  return out.replace('</head>', `  ${head.join('\n    ')}\n  </head>`);
}

function outFileFor(basePath, locale) {
  const p = localizedPath(basePath, locale); // '/', '/en', '/fbar', '/en/fbar'
  const rel = p === '/' ? '' : p.replace(/^\//, '');
  return join(distDir, rel, 'index.html');
}

let count = 0;
for (const locale of LOCALES) {
  for (const route of routeSeo) {
    const file = outFileFor(route.path, locale);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, applyMeta(template, route, locale), 'utf8');
    count += 1;
  }
  console.log(`  ✓ ${locale}: ${routeSeo.length} pages`);
}

// --- sitemap.xml (ko + en, hreflang 대체 링크 포함) ---
const XHTML_NS = 'xmlns:xhtml="http://www.w3.org/1999/xhtml"';
const urls = [];
for (const route of routeSeo) {
  for (const locale of LOCALES) {
    const alts = alternatesFor(route.path)
      .filter((a) => a.hreflang !== 'x-default')
      .map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`)
      .join('\n');
    urls.push(
      `  <url>\n    <loc>${canonicalFor(route.path, locale)}</loc>\n${alts}\n` +
        `    <changefreq>monthly</changefreq>\n  </url>`
    );
  }
}
writeFileSync(
  join(distDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ${XHTML_NS}>\n${urls.join('\n')}\n</urlset>\n`,
  'utf8'
);

console.log(`[generate-static-routes] ${count} pages + sitemap.xml written`);
