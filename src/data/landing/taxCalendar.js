// 2027년 미국 세금신고 일정·기준 금액 (2026 과세연도 신고) 랜딩 콘텐츠.
// 금액 출처: Rev. Proc. 2025-32(2026 과세연도), Rev. Proc. 2026-35(2027 과세연도).
// ⚠️ 매년 11월(IRS 인플레이션 조정 발표 후) 갱신할 것.
// [확인] 표시는 내부 검수용이며 화면에는 노출되지 않는다(landing/index.js 에서 제거).

const related = [
  { path: '/feie', label: { ko: '해외근로소득 공제(FEIE)', en: 'FEIE Guide' } },
  { path: '/fbar', label: { ko: 'FBAR · FATCA 신고', en: 'FBAR & FATCA' } },
  { path: '/streamlined', label: { ko: 'Streamlined 간소화 절차', en: 'Streamlined Procedures' } },
  { path: '/gift-inheritance', label: { ko: '증여·상속과 Form 3520', en: 'Gifts & Inheritances (Form 3520)' } },
  { path: '/tax-return', label: { ko: '미국 소득세 신고 대행', en: 'Income Tax Return' } },
];

const sources = (ko) => [
  { label: 'Rev. Proc. 2026-35 (2027 inflation adjustments)', url: 'https://www.irs.gov/pub/irs-drop/rp-26-35.pdf' },
  { label: ko ? 'IRS — 해외 거주 미국 시민·영주권자 신고 기한' : 'IRS — U.S. citizens and resident aliens abroad: filing requirements', url: 'https://www.irs.gov/individuals/international-taxpayers/us-citizens-and-resident-aliens-abroad-filing-requirements' },
  { label: ko ? 'IRS — 예납세(Estimated Taxes)' : 'IRS — Estimated taxes', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes' },
  { label: ko ? 'FinCEN — FBAR 신고 안내' : 'FinCEN — Report foreign bank and financial accounts', url: 'https://www.fincen.gov/report-foreign-bank-and-financial-accounts' },
  { label: 'IRS Publication 54', url: 'https://www.irs.gov/forms-pubs/about-publication-54' },
];

export default {
  slug: 'tax-calendar',
  updated: '2026-11-11', // 내용을 고칠 때마다 갱신 (sitemap lastmod · Article dateModified)
  name: { ko: '2027 일정', en: '2027 Calendar' },
  summary: {
    ko: '2027년에 하는 미국 세금신고(2026 과세연도)의 마감일과 표준공제·FEIE·증여 면제액 등 핵심 기준 금액을 한 페이지에 정리했습니다.',
    en: 'Deadlines for U.S. returns filed in 2027 (tax year 2026), plus key amounts: standard deduction, FEIE, gift exclusions and more.',
  },

  ko: {
    h1: '2027년 미국 세금신고 일정과 기준 금액',
    lead:
      '2027년에는 2026 과세연도(2026년 1월 1일~12월 31일) 소득을 신고합니다. 한국에 거주하는 미국 시민권자·영주권자가 챙겨야 할 마감일과, 2026·2027년에 적용되는 주요 금액을 정리했습니다.',
    reviewNote: '최종 업데이트: 2026년 11월 · 2027년 인플레이션 조정(Rev. Proc. 2026-35) 반영',

    sections: [
      {
        h: '2027년 주요 마감일',
        body: [
          { table: {
            headers: ['날짜', '내용', '비고'],
            rows: [
              ['2027년 4월 15일 (목)', 'Form 1040 신고·납부 기한 (미국 거주자)', '해외 거주자도 "납부" 기한은 이 날 — 이후에는 이자가 붙습니다'],
              ['2027년 4월 15일 (목)', 'FBAR(FinCEN 114) 기한', '별도 신청 없이 10월 15일까지 자동 연장'],
              ['2027년 4월 15일 (목)', '2027년 1분기 예납세', '원천징수가 없는 소득이 있는 경우'],
              ['2027년 6월 15일 (화)', '해외 거주자 Form 1040 자동 연장 기한', '신고서에 해외 거주 사실을 기재. 2분기 예납세 기한도 같은 날'],
              ['2027년 9월 15일 (수)', '3분기 예납세', ''],
              ['2027년 10월 15일 (금)', 'Form 4868 연장 신고 기한 · FBAR 최종 기한', 'Form 4868은 원래 기한(해외 거주자는 6월 15일)까지 제출'],
              ['2027년 12월 15일 (수)', '해외 거주자 추가 연장', 'IRS에 서면으로 요청해 승인받은 경우에 한함 [확인]'],
              ['2028년 1월 18일 (화)', '2027년 4분기 예납세', ''],
            ],
          } },
          { callout: { tone: 'warn', text: '6월 15일 자동 연장은 "신고" 기한만 늦춰 줍니다. 납부할 세금이 있다면 4월 15일 이후부터 이자가 계산됩니다.' } },
        ],
      },
      {
        h: '표준공제 (Standard Deduction)',
        body: [
          { table: {
            headers: ['신고 유형', '2026 과세연도 (2027년 신고)', '2027 과세연도 (2028년 신고)'],
            rows: [
              ['Single · 부부 별도신고(MFS)', 'USD 16,100', 'USD 16,600'],
              ['부부 공동신고(MFJ)', 'USD 32,200', 'USD 33,200'],
              ['세대주(Head of Household)', 'USD 24,150', 'USD 24,925'],
            ],
          } },
          '총소득이 표준공제액보다 적으면 일반적으로 신고 의무가 없지만, 예외가 있습니다. 자영업 순소득이 USD 400 이상이거나, 한국인 배우자와 부부 별도신고(MFS)를 하는 경우에는 훨씬 낮은 기준이 적용됩니다.',
          { callout: { tone: 'info', text: '소득세 신고 의무가 없어도 FBAR는 별개입니다. 해외 금융계좌 합계가 연중 한 번이라도 USD 10,000를 넘었다면 FBAR를 제출해야 합니다.' } },
        ],
      },
      {
        h: '해외 거주자 관련 금액',
        body: [
          { table: {
            headers: ['항목', '2026', '2027'],
            rows: [
              ['해외근로소득 공제(FEIE) 한도', 'USD 132,900', 'USD 137,300'],
              ['국적포기세 — 5년 평균 세액 기준', 'USD 211,000', 'USD 218,000'],
              ['국적포기세 — 간주매각 면제액', 'USD 910,000', 'USD 940,000'],
              ['FBAR 신고 기준 (계좌 합계 최고액)', 'USD 10,000 초과', 'USD 10,000 초과'],
              ['Form 8938 — 해외 거주 Single (연말 / 연중 최고)', 'USD 200,000 / 300,000', 'USD 200,000 / 300,000'],
              ['Form 8938 — 해외 거주 부부 공동신고', 'USD 400,000 / 600,000', 'USD 400,000 / 600,000'],
            ],
          } },
          'FBAR와 Form 8938 기준 금액은 물가에 연동되지 않아 매년 같습니다.',
        ],
      },
      {
        h: '증여·상속 관련 금액',
        body: [
          { table: {
            headers: ['항목', '2026', '2027'],
            rows: [
              ['연간 증여 면제액 (수증자 1인당)', 'USD 19,000', 'USD 20,000'],
              ['비시민권자 배우자에 대한 연간 증여 면제액', 'USD 194,000', 'USD 201,000'],
              ['통합 증여·상속 면제액', 'USD 15,000,000', 'USD 15,480,000'],
              ['외국인으로부터 받은 증여 보고 기준 (Form 3520)', 'USD 100,000 초과', 'USD 100,000 초과'],
            ],
          } },
        ],
      },
      {
        h: '신고 시즌 전에 준비할 서류',
        body: [
          { list: [
            '한국 근로소득 원천징수영수증, 종합소득세 신고서(5월 신고분)',
            '은행·증권·보험·연금 계좌별 2026년 연중 최고 잔액과 연말 잔액',
            '이자·배당 내역, 주식·펀드·ETF 거래 내역(펀드·ETF는 PFIC 여부 확인)',
            '부동산 매매·임대 관련 계약서와 비용 내역',
            '2026년 중 받은 증여·상속 내역',
            '미국 체류 일수(출입국 기록)',
            '전년도 미국 신고서 사본',
          ] },
          { callout: { tone: 'info', text: '한국 종합소득세 확정신고는 5월입니다. 한국 세액이 확정된 뒤 외국납부세액공제를 정확히 계산하려면 6월 15일 또는 10월 15일 기한을 활용하는 것이 일반적입니다.' } },
        ],
      },
    ],

    faq: [
      { q: '한국에 사는데 4월 15일까지 신고하지 않으면 벌금이 있나요?', a: '과세연도 말 기준 해외에 거주하는 미국 시민권자·영주권자는 6월 15일까지 신고 기한이 자동 연장되므로 미신고 가산세는 없습니다. 다만 납부할 세금이 있으면 4월 15일 이후 이자가 붙습니다.' },
      { q: '10월 15일까지 연장하려면 무엇을 해야 하나요?', a: '6월 15일까지 Form 4868을 제출하면 10월 15일까지 연장됩니다. FBAR는 별도 신청 없이 10월 15일까지 자동 연장됩니다.' },
      { q: '소득이 표준공제보다 적으면 아무것도 안 해도 되나요?', a: '소득세 신고 의무는 없을 수 있지만, 자영업 소득이 있거나 부부 별도신고인 경우에는 기준이 훨씬 낮습니다. 또한 FBAR·Form 3520 같은 정보보고는 소득과 무관하게 제출해야 합니다.' },
      { q: '2027년 금액은 언제 신고에 적용되나요?', a: '2027 과세연도 소득에 적용되며, 실제 신고는 2028년에 합니다. 2027년에 하는 신고에는 2026년 금액을 사용합니다.' },
    ],

    cta: {
      title: '신고 시즌, 미리 준비하면 편합니다',
      text: '서류 목록과 일정을 개인 상황에 맞춰 안내해 드립니다. 지난 연도 미신고분이 있다면 함께 정리할 수 있습니다.',
      button: '상담 신청하기',
    },
    disclaimer:
      '본 페이지는 일반적인 정보 제공을 위한 것이며 세무 자문이 아닙니다. 기한이 주말·공휴일과 겹치면 다음 영업일로 조정되며, 개인의 구체적 상황에 대한 판단은 전문가 상담이 필요합니다.',
    sources: sources(true),
    related,
  },

  en: {
    h1: '2027 U.S. Tax Calendar and Key Amounts',
    lead:
      'In 2027 you file for tax year 2026. These are the deadlines and the main 2026 and 2027 figures for U.S. citizens and green card holders living in Korea.',
    reviewNote: 'Last updated: November 2026 · reflects the 2027 inflation adjustments (Rev. Proc. 2026-35)',

    sections: [
      {
        h: 'Key 2027 deadlines',
        body: [
          { table: {
            headers: ['Date', 'What', 'Note'],
            rows: [
              ['Apr 15, 2027 (Thu)', 'Form 1040 filing and payment due (U.S. residents)', 'Payment is due this day even if you live abroad — interest runs afterward'],
              ['Apr 15, 2027 (Thu)', 'FBAR (FinCEN 114) due', 'Automatically extended to Oct 15'],
              ['Apr 15, 2027 (Thu)', 'Q1 2027 estimated tax', ''],
              ['Jun 15, 2027 (Tue)', 'Automatic extension for taxpayers abroad', 'Also the Q2 estimated tax date'],
              ['Sep 15, 2027 (Wed)', 'Q3 estimated tax', ''],
              ['Oct 15, 2027 (Fri)', 'Extended Form 1040 due · final FBAR date', 'Requires Form 4868 by the original due date'],
              ['Dec 15, 2027 (Wed)', 'Additional extension for taxpayers abroad', 'Only if requested in writing and granted [verify]'],
              ['Jan 18, 2028 (Tue)', 'Q4 2027 estimated tax', ''],
            ],
          } },
          { callout: { tone: 'warn', text: 'The June 15 extension is for filing only. Interest on any balance due runs from April 15.' } },
        ],
      },
      {
        h: 'Standard deduction',
        body: [
          { table: {
            headers: ['Filing status', 'Tax year 2026 (filed 2027)', 'Tax year 2027 (filed 2028)'],
            rows: [
              ['Single · Married filing separately', 'USD 16,100', 'USD 16,600'],
              ['Married filing jointly', 'USD 32,200', 'USD 33,200'],
              ['Head of household', 'USD 24,150', 'USD 24,925'],
            ],
          } },
          'Much lower filing thresholds apply with USD 400 or more of net self-employment income, or when filing separately from a nonresident spouse.',
        ],
      },
      {
        h: 'Amounts for taxpayers abroad',
        body: [
          { table: {
            headers: ['Item', '2026', '2027'],
            rows: [
              ['Foreign earned income exclusion', 'USD 132,900', 'USD 137,300'],
              ['Exit tax — 5-year average tax test', 'USD 211,000', 'USD 218,000'],
              ['Exit tax — mark-to-market exclusion', 'USD 910,000', 'USD 940,000'],
              ['FBAR threshold (aggregate maximum)', 'Over USD 10,000', 'Over USD 10,000'],
              ['Form 8938 — abroad, single (year-end / any time)', 'USD 200,000 / 300,000', 'USD 200,000 / 300,000'],
              ['Form 8938 — abroad, married filing jointly', 'USD 400,000 / 600,000', 'USD 400,000 / 600,000'],
            ],
          } },
        ],
      },
      {
        h: 'Gift and estate amounts',
        body: [
          { table: {
            headers: ['Item', '2026', '2027'],
            rows: [
              ['Annual gift exclusion (per recipient)', 'USD 19,000', 'USD 20,000'],
              ['Annual exclusion — non-citizen spouse', 'USD 194,000', 'USD 201,000'],
              ['Basic exclusion amount', 'USD 15,000,000', 'USD 15,480,000'],
              ['Form 3520 — gifts from foreign individuals', 'Over USD 100,000', 'Over USD 100,000'],
            ],
          } },
        ],
      },
    ],

    faq: [
      { q: 'I live in Korea. Is there a penalty if I file after April 15?', a: 'No late-filing penalty if you file by the automatic June 15 date for taxpayers abroad, but interest on any tax owed runs from April 15.' },
      { q: 'How do I extend to October 15?', a: 'File Form 4868 by June 15. The FBAR is extended to October 15 automatically.' },
      { q: 'When do the 2027 amounts apply?', a: 'To tax year 2027 income, reported on returns filed in 2028. Returns filed in 2027 use the 2026 amounts.' },
    ],

    cta: {
      title: 'Get ready before the season starts',
      text: 'We tailor the document list and timeline to your situation, and can catch up prior years at the same time.',
      button: 'Request a consultation',
    },
    disclaimer:
      'This page provides general information, not tax advice. Deadlines falling on weekends or holidays move to the next business day.',
    sources: sources(false),
    related,
  },
};
