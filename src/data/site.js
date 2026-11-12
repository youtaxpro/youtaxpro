// 사이트 전역 상수: 연락처 · 공식 채널 · 자격/인증 표기.
// Vue 의존성이 없어야 한다(빌드 스크립트도 사용).

export const CONTACT = {
  phoneDisplay: '010-5909-4868',
  phoneHref: 'tel:+821059094868',
  email: 'amy@youtaxpro.com',
  fax: '02-6280-1040',
  // 카카오톡 QR 코드 링크의 ID(https://qr.kakao.com/talk/<ID>).
  // 휴대폰에서는 웹 중간 페이지 없이 카카오톡 앱을 바로 연다(src/components/common/ContactFab.vue).
  kakaoQrId: '_MpPSgDHJ3ndUX1PwpzxPmeskvw-',
};

// 공식 채널 — 푸터·홈·문의 페이지·구조화 데이터(sameAs)에 공통으로 쓰인다.
export const SOCIAL = [
  {
    key: 'tistory',
    url: 'https://berkeleytax.tistory.com/',
    label: { ko: '티스토리 블로그', en: 'Tistory Blog' },
    desc: {
      ko: '부동산·연금·법인·IRS 통지 등 주제별 미국세금 심화 칼럼.',
      en: 'In-depth Korean-language columns on U.S. tax: real estate, pensions, entities, IRS notices.',
    },
    handle: 'berkeleytax.tistory.com',
  },
  {
    key: 'naver',
    url: 'https://blog.naver.com/berkeleytax',
    label: { ko: '네이버 블로그', en: 'Naver Blog' },
    desc: {
      ko: '신고 시즌 공지와 실무 사례, 자주 받는 질문을 쉽게 풀어 씁니다.',
      en: 'Filing-season notices, practical cases and common questions (Korean).',
    },
    handle: 'blog.naver.com/berkeleytax',
  },
  {
    key: 'instagram',
    url: 'https://www.instagram.com/berkyustax/',
    label: { ko: '인스타그램', en: 'Instagram' },
    desc: {
      ko: '카드뉴스로 보는 핵심 요약과 마감일 알림.',
      en: 'Quick card-style summaries and deadline reminders.',
    },
    handle: '@berkyustax',
  },
];
