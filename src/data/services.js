// 서비스 안내(/services) 페이지 데이터. Vue 의존성이 없어야 한다(빌드 스크립트도 사용).
// 수수료는 노출하지 않는다 — 견적은 상담을 통해 안내.

export const serviceGroups = [
  {
    title: { ko: '정기 신고', en: 'Annual filing' },
    items: [
      {
        to: '/tax-return',
        title: { ko: '미국 개인 소득세 신고 (Form 1040)', en: 'Individual income tax return (Form 1040)' },
        desc: {
          ko: '한국 소득을 포함한 전 세계 소득 신고. 해외근로소득 공제와 외국납부세액공제를 비교해 이중과세를 줄입니다.',
          en: 'Worldwide income including Korean income, comparing the FEIE and the Foreign Tax Credit to reduce double taxation.',
        },
      },
      {
        to: '/feie',
        title: { ko: '해외근로소득 공제 (FEIE)', en: 'Foreign Earned Income Exclusion (FEIE)' },
        desc: {
          ko: '한국에서 일하는 납세자의 근로소득 공제 요건 확인과 Form 2555 작성.',
          en: 'Eligibility review and Form 2555 for taxpayers working in Korea.',
        },
      },
      {
        to: '/nonresident',
        title: { ko: '비거주 외국인 신고 (Form 1040-NR)', en: 'Nonresident alien return (Form 1040-NR)' },
        desc: {
          ko: '미국 부동산 임대·매각 등 미국 원천소득 신고와 FIRPTA 원천징수 환급.',
          en: 'U.S.-source income such as U.S. rental property or a sale, and FIRPTA withholding refunds.',
        },
      },
      {
        to: '/itin',
        title: { ko: 'ITIN 신청 (Form W-7)', en: 'ITIN application (Form W-7)' },
        desc: {
          ko: 'SSN이 없는 배우자·부양가족·비거주자의 납세자 번호 신청과 갱신.',
          en: 'Taxpayer numbers for spouses, dependents and nonresidents without an SSN, including renewals.',
        },
      },
    ],
  },
  {
    title: { ko: '해외자산 보고', en: 'Foreign asset reporting' },
    items: [
      {
        to: '/fbar',
        title: { ko: 'FBAR 신고 (FinCEN Form 114)', en: 'FBAR (FinCEN Form 114)' },
        desc: {
          ko: '한국 계좌별 연중 최고 잔액을 계산해 전자 제출합니다.',
          en: 'Maximum balances of each Korean account computed and e-filed.',
        },
      },
      {
        to: '/fatca',
        title: { ko: 'FATCA 신고 (Form 8938)', en: 'FATCA (Form 8938)' },
        desc: {
          ko: '해외 금융자산이 기준 금액을 넘는 경우 소득세 신고서에 첨부하는 보고.',
          en: 'The statement attached to your return when foreign financial assets exceed the threshold.',
        },
      },
      {
        to: '/pfic',
        title: { ko: 'PFIC 신고 (Form 8621)', en: 'PFIC reporting (Form 8621)' },
        desc: {
          ko: '한국 펀드·ETF 보유자의 과세 방식 선택과 연도별 보고.',
          en: 'Election choices and annual reporting for holders of Korean funds and ETFs.',
        },
      },
      {
        to: '/gift-inheritance',
        title: { ko: '증여·상속 보고 (Form 3520)', en: 'Gifts and inheritances (Form 3520)' },
        desc: {
          ko: '한국 가족에게 받은 증여·상속의 보고와 취득가액 정리.',
          en: 'Reporting gifts and inheritances from Korean family, and establishing basis.',
        },
      },
    ],
  },
  {
    title: { ko: '미신고 정리와 정정', en: 'Catching up and correcting' },
    items: [
      {
        to: '/streamlined',
        title: { ko: 'Streamlined 간소화 절차', en: 'Streamlined Filing Compliance Procedures' },
        desc: {
          ko: '몰라서 신고하지 못한 경우를 위한 IRS 공식 절차. 3년치 신고서와 6년치 FBAR를 준비합니다.',
          en: 'The IRS route for non-willful non-filers: three years of returns and six years of FBARs.',
        },
      },
      {
        to: '/amended-return',
        title: { ko: '수정 신고 (Form 1040-X)', en: 'Amended return (Form 1040-X)' },
        desc: {
          ko: '제출한 신고서의 누락·오류 정정과 환급 청구.',
          en: 'Correcting omissions and errors on a filed return, and refund claims.',
        },
      },
      {
        to: '/irs-notice',
        title: { ko: 'IRS 통지서·세무조사 대응', en: 'IRS notices and examinations' },
        desc: {
          ko: '통지서 해석, 답변서 작성, 벌금 감면 요청, 위임장(Form 2848)을 통한 대리 대응.',
          en: 'Reading notices, drafting responses, penalty relief requests, and representation under Form 2848.',
        },
      },
    ],
  },
  {
    title: { ko: '특수 상황', en: 'Special situations' },
    items: [
      {
        to: '/exit-tax',
        title: { ko: '시민권 포기·영주권 반납 (Exit Tax)', en: 'Giving up citizenship or a green card (exit tax)' },
        desc: {
          ko: '국적포기세 대상 판정, Form 8854, 포기 전 준비 순서 검토.',
          en: 'Covered-expatriate analysis, Form 8854, and sequencing before you expatriate.',
        },
      },
      {
        to: '/korea-real-estate',
        title: { ko: '한국 부동산 매각', en: 'Selling Korean real estate' },
        desc: {
          ko: '양도차익의 미국 신고, 주택 양도 공제, 환율 환산, 외국납부세액공제.',
          en: 'Reporting the gain, the home-sale exclusion, currency translation and the Foreign Tax Credit.',
        },
      },
    ],
  },
];

export const serviceSteps = [
  {
    title: { ko: '상담', en: 'Consultation' },
    text: {
      ko: '신분, 거주 이력, 소득과 자산을 확인하고 필요한 신고 범위를 정합니다.',
      en: 'We confirm your status, residence history, income and assets, and set the scope.',
    },
  },
  {
    title: { ko: '견적 안내', en: 'Quote' },
    text: {
      ko: '신고 범위에 따른 비용을 작업 시작 전에 안내해 드립니다.',
      en: 'You receive the fee for that scope before any work begins.',
    },
  },
  {
    title: { ko: '자료 준비', en: 'Documents' },
    text: {
      ko: '상황에 맞춘 서류 목록을 드리고, 보내 주신 자료를 검토합니다.',
      en: 'We send a checklist tailored to you and review what you provide.',
    },
  },
  {
    title: { ko: '작성과 검토', en: 'Preparation and review' },
    text: {
      ko: '신고서를 작성하고 내용을 설명드린 뒤 서명을 받습니다.',
      en: 'We prepare the return, walk you through it and collect your signature.',
    },
  },
  {
    title: { ko: '제출과 사후 관리', en: 'Filing and follow-up' },
    text: {
      ko: '전자 제출 후 접수 확인을 전달하고, IRS 통지서가 오면 대응을 돕습니다.',
      en: 'We e-file, send the acceptance confirmation, and help with any IRS notice.',
    },
  },
];

export const servicesCopy = {
  h1: { ko: '미국세금 서비스 안내', en: 'U.S. Tax Services' },
  lead: {
    ko: '한국에 거주하는 미국 시민권자·영주권자와 미국 원천소득이 있는 분들을 위한 서비스입니다. 매년 하는 정기 신고부터 여러 해 미신고 정리까지 캘리포니아 CPA가 직접 처리합니다.',
    en: 'Services for U.S. citizens and green card holders living in Korea, and for others with U.S.-source income. From the annual return to multi-year catch-up filings, handled directly by a California CPA.',
  },
  stepsTitle: { ko: '진행 절차', en: 'How we work' },
  feeNote: {
    ko: '비용은 신고 범위와 자료의 복잡도에 따라 달라집니다. 상담 후 작업을 시작하기 전에 견적을 안내해 드립니다.',
    en: 'Fees depend on the scope of filing and the complexity of your records. You receive a quote after the consultation and before work begins.',
  },
  ctaTitle: { ko: '어떤 신고가 필요한지 모르시겠다면', en: 'Not sure what you need to file?' },
  ctaText: {
    ko: '상황을 알려 주시면 필요한 신고와 준비 서류를 정리해 드립니다.',
    en: 'Tell us your situation and we will set out the filings and documents you need.',
  },
  ctaButton: { ko: '상담 신청하기', en: 'Request a consultation' },
  more: { ko: '자세히 보기', en: 'Learn more' },
};
