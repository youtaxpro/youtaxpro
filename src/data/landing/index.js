// 미국세금 주제별 랜딩 페이지 콘텐츠 레지스트리.
// 새 주제 추가 = 여기에 import 1줄 + routeMeta.js 의 routeSeo 항목 1개 + 라우터 baseRoutes 1줄.
// Vue 의존성이 없어야 한다(빌드 스크립트가 FAQPage 스키마 생성에 사용).

import feie from './feie.js';
import exitTax from './exitTax.js';
import pfic from './pfic.js';
import itin from './itin.js';

export const landingPages = {
  feie,
  'exit-tax': exitTax,
  pfic,
  itin,
};

export function landingDoc(key, locale = 'ko') {
  const page = landingPages[key];
  if (!page) return null;
  return page[locale] || page.ko;
}

// /guides 인덱스 페이지 목록. 랜딩 페이지 + 기존 안내 페이지(FBAR·Streamlined).
const staticGuides = [
  {
    path: '/fbar',
    title: { ko: 'FBAR · FATCA 신고', en: 'FBAR & FATCA Reporting' },
    summary: {
      ko: '해외 계좌 합계가 연중 미화 1만 달러를 넘으면 FBAR(FinCEN 114) 신고 의무. FATCA(Form 8938)는 별도.',
      en: 'FBAR (FinCEN 114) is required if foreign accounts exceed USD 10,000 at any point in the year. FATCA (Form 8938) is separate.',
    },
  },
  {
    path: '/streamlined',
    title: { ko: 'Streamlined 간소화 절차', en: 'Streamlined Filing Procedures' },
    summary: {
      ko: '과거 FBAR·FATCA 미신고자를 위한 IRS 공식 구제 프로그램. 비고의적 위반·해외 거주자는 벌금 0%.',
      en: 'The IRS relief program for past FBAR/FATCA non-filers. Non-willful violators abroad face a 0% penalty.',
    },
  },
];

export function guidesList(locale = 'ko') {
  const fromLanding = Object.entries(landingPages).map(([key, page]) => ({
    path: '/' + (page.slug || key),
    title: { ko: page.ko.h1, en: page.en.h1 },
    name: page.name,
    summary: page.summary
      ? { ko: page.summary.ko, en: page.summary.en }
      : { ko: page.ko.lead, en: page.en.lead },
  }));
  return [...fromLanding, ...staticGuides].map((g) => ({
    path: g.path,
    name: g.name || null,
    title: g.title[locale] || g.title.ko,
    summary: g.summary[locale] || g.summary.ko,
  }));
}
