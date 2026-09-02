// 라우트별 SEO 메타데이터.
// 라우터(src/router/index.js)와 빌드 후 정적 페이지 생성 스크립트
// (scripts/generate-static-routes.mjs)가 함께 사용하므로 Vue 의존성이 없어야 한다.

export const SITE_URL = 'https://youtaxpro.com';
export const SITE_NAME = 'Berkeley U.S. Tax Advisors';

// 정적 HTML 생성 시 사용할 기본 언어
export const DEFAULT_LOCALE = 'ko';

export const routeSeo = [
  {
    path: '/',
    name: 'Home',
    title: {
      ko: '미국 세금 신고 전문 CPA | 한국 거주 미국인 | Berkeley U.S. Tax Advisors',
      en: 'U.S. Tax Filing for Americans in Korea | Berkeley U.S. Tax Advisors',
    },
    description: {
      ko: '한국 거주 미국 시민권자·영주권자 미국세금 신고 전문. 캘리포니아 CPA가 FBAR·FATCA·PFIC·Exit Tax·해외주식 신고와 이중과세를 정확하게 처리합니다. 상담전화 010-5909-4868',
      en: 'U.S. tax filing for American citizens and green card holders living in Korea. A California CPA handles FBAR, FATCA, PFIC, Exit Tax and double-taxation issues.',
    },
  },
  {
    path: '/faq',
    name: 'FAQ',
    title: {
      ko: '미국세금 자주 묻는 질문(FAQ) | 한국 거주 미국인 세무 | Berkeley U.S. Tax Advisors',
      en: 'U.S. Tax FAQ for Americans in Korea | Berkeley U.S. Tax Advisors',
    },
    description: {
      ko: '미국 납세자 정의, 필요 서류, FBAR·FATCA, 이중과세 방지, IRS 처리 확인 등 한국 거주 미국인이 가장 많이 묻는 미국세금 질문과 답변.',
      en: 'Answers to the most common U.S. tax questions for Americans in Korea: who must file, required documents, FBAR/FATCA, double taxation and IRS processing.',
    },
  },
  {
    path: '/contactus',
    name: 'ContactUs',
    title: {
      ko: '상담 문의 · 오시는 길 | 강남 미국세금 전문 | Berkeley U.S. Tax Advisors',
      en: 'Contact & Location | U.S. Tax Advisors in Gangnam, Seoul',
    },
    description: {
      ko: '서울 강남 삼성로 사무실 위치, 전화·이메일·영업시간 안내. 한국에서 미국세금 상담을 받아보세요.',
      en: 'Office location in Samseong-ro, Gangnam, Seoul, with phone, email and business hours. Book a U.S. tax consultation in Korea.',
    },
  },
  {
    path: '/fbar',
    name: 'Fbar',
    title: {
      ko: 'FBAR(해외금융계좌 신고) 한국 전문 | 캘리포니아 CPA | Berkeley U.S. Tax Advisors',
      en: 'FBAR Filing for Americans in Korea | California CPA | Berkeley U.S. Tax Advisors',
    },
    description: {
      ko: '해외 계좌 합계가 연중 한 번이라도 미화 1만 달러를 넘으면 FBAR(FinCEN Form 114) 신고가 의무입니다. 한국 계좌 정확 계산과 빠른 e-filing으로 벌금 위험을 방지합니다.',
      en: 'FBAR (FinCEN Form 114) is mandatory if your foreign accounts exceed USD 10,000 at any point in the year. Accurate calculation of Korean accounts and fast e-filing.',
    },
  },
  {
    path: '/streamlined',
    name: 'Streamlined',
    title: {
      ko: 'Streamlined 간소화 절차(IRS 벌금 면제 프로그램) 전문 | 캘리포니아 CPA',
      en: 'Streamlined Filing Procedures (IRS Amnesty Program) | California CPA',
    },
    description: {
      ko: '과거 FBAR·FATCA 미신고자를 위한 IRS 공식 구제 프로그램. 비고의적 위반·해외 거주자는 벌금 0%로 6년치 미신고를 정리할 수 있습니다.',
      en: 'The official IRS relief program for past FBAR/FATCA non-filers. Non-willful violators and overseas residents can resolve years of non-filing with a 0% penalty.',
    },
  },
];

export const routeSeoByName = Object.fromEntries(routeSeo.map((r) => [r.name, r]));

// GitHub Pages는 dist/<path>/index.html 을 서빙하면서 /fbar 요청을 /fbar/ 로
// 301 리다이렉트한다. canonical·sitemap을 실제 서빙되는 후행 슬래시 형태로 맞춘다.
export function canonicalFor(path) {
  if (path === '/') return SITE_URL + '/';
  return SITE_URL + path.replace(/\/?$/, '/');
}
