// 미국세금 주제별 랜딩 페이지 콘텐츠 레지스트리.
// 새 주제 추가 = 여기에 import 1줄 + routeMeta.js 의 routeSeo 항목 1개 + 라우터 baseRoutes 1줄.
// Vue 의존성이 없어야 한다(빌드 스크립트가 FAQPage 스키마 생성에 사용).

import feie from './feie.js';
import exitTax from './exitTax.js';

export const landingPages = {
  feie,
  'exit-tax': exitTax,
};

export function landingDoc(key, locale = 'ko') {
  const page = landingPages[key];
  if (!page) return null;
  return page[locale] || page.ko;
}
