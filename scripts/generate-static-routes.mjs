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
import { landingDoc, landingPages, guidesList } from '../src/data/landing/index.js';
import { CONTACT, SOCIAL } from '../src/data/site.js';

const SITE = 'https://youtaxpro.com';
let blogPosts = [];
try {
  blogPosts = JSON.parse(readFileSync(join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'blogPosts.json'), 'utf8')).posts || [];
} catch { /* 없으면 생략 */ }

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

// 가이드 페이지: Article + BreadcrumbList 스키마
function landingArticleJsonLd(route, locale) {
  const doc = landingDoc(route.landingKey, locale);
  const page = landingPages[route.landingKey];
  if (!doc || !page) return '';
  const url = canonicalFor(route.path, locale);
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: doc.h1,
    description: route.description[locale] || route.description.ko,
    inLanguage: locale,
    mainEntityOfPage: url,
    image: `${SITE}/preview-image.jpg`,
    ...(page.updated ? { dateModified: page.updated } : {}),
    author: {
      '@type': 'Person',
      name: locale === 'en' ? 'Ahreum Im, CPA' : '임아름',
      jobTitle: locale === 'en' ? 'Certified Public Accountant (California)' : '미국공인회계사 (캘리포니아주)',
      url: `${SITE}/#aboutus`,
    },
    publisher: { '@id': `${SITE}/#business` },
  };
  const crumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: locale === 'en' ? 'Home' : '홈', item: canonicalFor('/', locale) },
      { '@type': 'ListItem', position: 2, name: locale === 'en' ? 'Guides' : '가이드', item: canonicalFor('/guides', locale) },
      { '@type': 'ListItem', position: 3, name: doc.h1, item: url },
    ],
  };
  return [article, crumbs].map((d) => `<script type="application/ld+json">${JSON.stringify(d)}</script>`).join('\n    ');
}

function webSiteJsonLd(locale) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE}/#website`,
    url: canonicalFor('/', locale),
    name: 'Berkeley U.S. Tax Advisors',
    alternateName: ['버클리유에스택스어드바이저', 'youtaxpro'],
    inLanguage: locale,
    publisher: { '@id': `${SITE}/#business` },
  };
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

// --- 정적 본문 -------------------------------------------------------
// SPA는 <div id="app"> 가 비어 있어 JS를 실행하지 않는 크롤러(네이버 등)는 본문을 못 읽는다.
// 화면에 렌더링되는 것과 같은 내용을 단순 HTML로 미리 넣어 둔다. 앱이 마운트되면 교체된다.
const esc = (v) => String(v ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const href = (basePath, locale) => canonicalFor(basePath, locale).replace(SITE, '');

function blockHtml(block) {
  if (typeof block === 'string') return `<p>${esc(block)}</p>`;
  if (block.list) return `<ul>${block.list.map((li) => `<li>${esc(li)}</li>`).join('')}</ul>`;
  if (block.callout) return `<p><strong>${esc(block.callout.text)}</strong></p>`;
  if (block.table) {
    const head = `<tr>${block.table.headers.map((h) => `<th>${esc(h)}</th>`).join('')}</tr>`;
    const rows = block.table.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('');
    return `<table>${head}${rows}</table>`;
  }
  return '';
}

function guideLinksHtml(locale) {
  return `<ul>${guidesList(locale)
    .map((g) => `<li><a href="${href(g.path, locale)}">${esc(g.title)}</a> — ${esc(g.summary)}</li>`)
    .join('')}</ul>`;
}

function bodyHtml(route, locale) {
  const en = locale === 'en';
  const msg = i18n.global.getLocaleMessage(locale);
  const parts = [];

  if (route.landingKey) {
    const doc = landingDoc(route.landingKey, locale);
    parts.push(`<h1>${esc(doc.h1)}</h1>`, `<p>${esc(doc.lead)}</p>`);
    for (const sec of doc.sections) parts.push(`<h2>${esc(sec.h)}</h2>`, ...sec.body.map(blockHtml));
    if (doc.faq?.length) {
      parts.push(`<h2>${en ? 'FAQ' : '자주 묻는 질문'}</h2>`);
      for (const f of doc.faq) parts.push(`<h3>${esc(f.q)}</h3>`, `<p>${esc(f.a)}</p>`);
    }
    parts.push(`<h2>${en ? 'Related guides' : '관련 가이드'}</h2>`, guideLinksHtml(locale));
  } else if (route.path === '/') {
    parts.push(
      `<h1>${en ? 'U.S. tax filing for Americans living in Korea' : '한국 거주 미국 시민권자·영주권자를 위한 미국 세금 신고'}</h1>`,
      `<p>${esc(route.description[locale])}</p>`,
      `<h2>${en ? 'Services' : '서비스 안내'}</h2>`,
      `<ul>${Array.from({ length: 8 }, (_, i) => `<li>${esc(msg.services[`service${i + 1}`].items[0])}</li>`).join('')}</ul>`,
      `<h2>${en ? 'U.S. tax guides' : '주제별 미국세금 가이드'}</h2>`,
      guideLinksHtml(locale),
      `<h2>${esc(msg.profile.name)} — ${esc(msg.profile.title)}</h2>`,
      `<p>${esc(msg.profile.sections.intro.content)} ${esc(msg.profile.sections.experience.content)}</p>`,
    );
    if (blogPosts.length) {
      parts.push(
        `<h2>${en ? 'Latest columns' : '최신 미국세금 칼럼'}</h2>`,
        `<ul>${blogPosts.slice(0, 6).map((p) => `<li><a href="${esc(p.link)}">${esc(p.title)}</a></li>`).join('')}</ul>`,
      );
    }
  } else if (route.path === '/faq') {
    parts.push(`<h1>${esc(msg.faq.title)}</h1>`);
    for (const it of msg.faq.items) parts.push(`<h2>${esc(it.question)}</h2>`, `<p>${esc(String(it.answer).trim())}</p>`);
  } else {
    parts.push(`<h1>${esc((route.title[locale] || route.title.ko).split(' | ')[0])}</h1>`, `<p>${esc(route.description[locale])}</p>`);
    if (route.path === '/guides') parts.push(guideLinksHtml(locale));
  }

  parts.push(
    `<h2>${en ? 'Contact' : '상담 문의'}</h2>`,
    `<p>${esc(msg.footer.companyName)} · ${esc(msg.footer.address)} · <a href="${CONTACT.phoneHref}">${CONTACT.phoneDisplay}</a> · <a href="mailto:${CONTACT.email}">${CONTACT.email}</a></p>`,
    `<p><a href="${href('/', locale)}">${en ? 'Home' : '홈'}</a> · <a href="${href('/guides', locale)}">${en ? 'Guides' : '가이드'}</a> · <a href="${href('/faq', locale)}">FAQ</a> · <a href="${href('/contactus', locale)}">${en ? 'Contact' : '문의하기'}</a> · ${SOCIAL.map((s) => `<a href="${s.url}">${esc(s.label[locale])}</a>`).join(' · ')}</p>`,
  );
  return `<div class="prerender">${parts.join('')}</div>`;
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
    const a = landingArticleJsonLd(route, locale);
    if (a) head.push(a);
  }
  if (route.path === '/') head.push(webSiteJsonLd(locale));
  out = out.replace('<div id="app"></div>', () => `<div id="app">${bodyHtml(route, locale)}</div>`);
  return out.replace('</head>', () => `  ${head.join('\n    ')}\n  </head>`);
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
    const updated = route.landingKey && landingPages[route.landingKey]?.updated;
    urls.push(
      `  <url>\n    <loc>${canonicalFor(route.path, locale)}</loc>\n${alts}\n` +
        (updated ? `    <lastmod>${updated}</lastmod>\n` : '') +
        `    <changefreq>${route.path === '/' ? 'daily' : 'monthly'}</changefreq>\n  </url>`
    );
  }
}
writeFileSync(
  join(distDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ${XHTML_NS}>\n${urls.join('\n')}\n</urlset>\n`,
  'utf8'
);

console.log(`[generate-static-routes] ${count} pages + sitemap.xml written`);
