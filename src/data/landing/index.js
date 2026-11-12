// 미국세금 주제별 랜딩 페이지 콘텐츠 레지스트리.
// 새 주제 추가 = 여기에 import 1줄 + routeMeta.js 의 routeSeo 항목 1개 + 라우터 baseRoutes 1줄.
// Vue 의존성이 없어야 한다(빌드 스크립트가 FAQPage 스키마 생성에 사용).

import feie from './feie.js';
import exitTax from './exitTax.js';
import pfic from './pfic.js';
import itin from './itin.js';
import giftInheritance from './giftInheritance.js';
import koreaRealEstate from './koreaRealEstate.js';
import taxCalendar from './taxCalendar.js';
import fbar from './fbar.js';
import streamlined from './streamlined.js';

export const landingPages = {
  'tax-calendar': taxCalendar,
  feie,
  'exit-tax': exitTax,
  pfic,
  itin,
  'gift-inheritance': giftInheritance,
  'korea-real-estate': koreaRealEstate,
  fbar,
  streamlined,
};

// 데이터 파일의 [확인]/[verify] 는 CPA 내부 검수 표시다. 화면·구조화 데이터에는 노출하지 않는다.
const REVIEW_MARK = /\s*\[(?:확인|verify)\]/g;
function clean(value) {
  if (typeof value === 'string') return value.replace(REVIEW_MARK, '');
  if (Array.isArray(value)) return value.map(clean);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, clean(v)]));
  }
  return value;
}
const cache = new Map();

export function landingDoc(key, locale = 'ko') {
  const page = landingPages[key];
  if (!page) return null;
  const lang = page[locale] ? locale : 'ko';
  const id = `${key}:${lang}`;
  if (!cache.has(id)) cache.set(id, clean(page[lang]));
  return cache.get(id);
}

// /guides 인덱스 페이지 목록.
export function guidesList(locale = 'ko') {
  const fromLanding = Object.entries(landingPages).map(([key, page]) => ({
    path: '/' + (page.slug || key),
    title: { ko: page.ko.h1, en: page.en.h1 },
    name: page.name,
    summary: page.summary
      ? { ko: page.summary.ko, en: page.summary.en }
      : { ko: page.ko.lead, en: page.en.lead },
  }));
  return fromLanding.map((g) => ({
    path: g.path,
    name: (g.name && typeof g.name === 'object' ? g.name[locale] || g.name.ko : g.name) || null,
    title: g.title[locale] || g.title.ko,
    summary: g.summary[locale] || g.summary.ko,
  }));
}
