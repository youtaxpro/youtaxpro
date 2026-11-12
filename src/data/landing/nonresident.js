// 비거주 외국인 세금 신고(Form 1040-NR) 서비스 페이지 콘텐츠.
//
// ⚠️ 세무사 검수 대상: [확인] 표시된 조약 세율·FIRPTA 세부 사항은 게시 전 임아름 CPA가 검증해야 함.

const related = [
  { path: '/itin', label: { ko: 'ITIN 신청 가이드', en: 'ITIN Guide' } },
  { path: '/tax-return', label: { ko: '미국 소득세 신고 대행', en: 'Income Tax Return' } },
  { path: '/exit-tax', label: { ko: '국적포기세(Exit Tax)', en: 'Exit Tax Guide' } },
  { path: '/irs-notice', label: { ko: 'IRS 통지서 대응', en: 'IRS Notices' } },
];

const sources = [
  { label: 'IRS — About Form 1040-NR', url: 'https://www.irs.gov/forms-pubs/about-form-1040-nr' },
  { label: 'IRS — Publication 519, U.S. Tax Guide for Aliens', url: 'https://www.irs.gov/publications/p519' },
  { label: 'IRS — Substantial Presence Test', url: 'https://www.irs.gov/individuals/international-taxpayers/substantial-presence-test' },
  { label: 'IRS — FIRPTA Withholding', url: 'https://www.irs.gov/individuals/international-taxpayers/firpta-withholding' },
  { label: 'IRS — United States Income Tax Treaties (Korea)', url: 'https://www.irs.gov/businesses/international-businesses/korea-tax-treaty-documents' },
];

export default {
  slug: 'nonresident',
  updated: '2026-11-12',
  name: { ko: '비거주자 신고', en: 'Nonresident Return' },
  summary: {
    ko: '미국 부동산 임대·매각, 미국 주식 배당 등 미국 원천소득이 있는 한국 거주 외국인의 Form 1040-NR 신고 안내.',
    en: 'Form 1040-NR for Korea residents who are not U.S. persons but have U.S.-source income such as U.S. rental property, a property sale or dividends.',
  },

  ko: {
    h1: '비거주 외국인 미국 세금 신고 (Form 1040-NR)',
    lead:
      '미국 시민권자나 영주권자가 아니어도 미국에서 발생한 소득이 있으면 미국에 세금 신고를 해야 할 수 있습니다. 미국 부동산을 임대하거나 매각한 한국 거주자, 미국에서 일한 기간의 급여가 있는 사람이 대표적이며, 이때 사용하는 신고서가 Form 1040-NR입니다.',
    reviewNote: '최종 업데이트: 2026년 11월',

    sections: [
      {
        h: '나는 비거주 외국인인가',
        body: [
          '미국 세법상 거주자는 시민권자, 영주권자(Green Card Test), 그리고 실질적 체류 기준(Substantial Presence Test)을 충족한 사람입니다. 여기에 해당하지 않으면 비거주 외국인입니다.',
          { list: [
            '실질적 체류 기준: 해당 연도에 미국에 31일 이상 체류하고, 해당 연도 체류일 전부 + 전년도 체류일의 1/3 + 전전년도 체류일의 1/6을 합쳐 183일 이상이면 거주자로 봅니다.',
            'F·J 비자 학생과 교환방문자 등은 일정 기간 체류일 계산에서 제외됩니다.',
            '한 해 중에 신분이 바뀌면 이중 신분(dual-status) 연도로 신고합니다.',
          ] },
        ],
      },
      {
        h: '신고 대상 소득과 과세 방식',
        body: [
          { table: {
            headers: ['소득', '과세 방식'],
            rows: [
              ['미국에서 근무한 기간의 급여', '미국 사업 관련 소득(ECI)으로 누진세율 적용'],
              ['미국 부동산 임대소득', '원칙은 총수입의 30% 원천징수. 순소득 과세 선택 시 경비·감가상각을 공제하고 누진세율 적용'],
              ['미국 부동산 매각 차익', 'ECI로 과세. 매각 시 매매대금의 15%가 원천징수(FIRPTA)'],
              ['미국 주식 배당', '30% 원천징수, 한미 조세조약 적용 시 15% [확인]'],
              ['미국 은행 예금 이자', '미국 사업과 무관하면 대체로 비과세'],
              ['미국 주식 매매 차익', '해당 연도 미국 체류가 183일 미만이면 대체로 비과세'],
            ],
          } },
          '원천징수로 세금이 모두 정리된 배당 등만 있다면 신고 의무가 없을 수 있습니다. 임대·매각·급여 소득이 있으면 신고가 필요합니다.',
        ],
      },
      {
        h: '미국 부동산을 임대하는 경우',
        body: [
          { list: [
            '아무 선택도 하지 않으면 경비 공제 없이 임대료 총액의 30%가 과세됩니다.',
            '순소득 과세 선택(세법 871(d)조)을 하면 재산세, 관리비, 이자, 감가상각을 공제한 순소득에만 누진세율로 과세됩니다.',
            '이 선택을 하고 임차인이나 관리회사에 Form W-8ECI를 제출하면 30% 원천징수를 피할 수 있습니다.',
            '부동산이 있는 주에도 별도로 신고해야 하는 경우가 많습니다.',
          ] },
        ],
      },
      {
        h: '미국 부동산을 매각하는 경우 (FIRPTA)',
        body: [
          { list: [
            '외국인이 미국 부동산을 팔면 매수인이 매매대금의 15%를 원천징수해 IRS에 납부합니다(Form 8288).',
            '실제 세금이 원천징수액보다 적을 것으로 예상되면 매각 전에 Form 8288-B로 원천징수 감액을 신청할 수 있습니다.',
            '원천징수된 금액은 다음 해 Form 1040-NR 신고에서 실제 세액과 정산해 차액을 환급받습니다.',
            '신고와 환급에는 납세자 번호가 필요하므로 SSN이 없다면 ITIN을 함께 신청합니다.',
          ] },
          { callout: { tone: 'info', text: '원천징수는 차익이 아니라 매매대금 전체를 기준으로 계산됩니다. 손해를 보고 팔아도 원천징수는 이루어지므로 신고로 환급받아야 합니다.' } },
        ],
      },
      {
        h: '신고 기한과 준비 사항',
        body: [
          { table: {
            headers: ['구분', '기한'],
            rows: [
              ['미국 원천징수 대상 급여가 있는 경우', '다음 해 4월 15일'],
              ['그 외의 경우', '다음 해 6월 15일'],
              ['연장', 'Form 4868로 연장 신청 가능'],
            ],
          } },
          { list: [
            '납세자 번호: SSN이 없으면 ITIN(Form W-7)을 신고서와 함께 신청합니다.',
            '조세조약 혜택: 배당·이자의 감면 세율은 Form W-8BEN을 금융기관에 제출해 적용받습니다.',
            '준비 서류: Form 1042-S, W-2, 임대 수입·경비 내역, 매매 계약서와 정산서(Closing Statement), Form 8288-A',
          ] },
          { callout: { tone: 'warn', text: '기한 내에 신고하지 않으면 경비와 공제를 인정받지 못해 총수입 기준으로 과세될 수 있습니다.' } },
        ],
      },
    ],

    faq: [
      {
        q: '한국에 사는 한국 국적자인데 미국에 세금 신고를 해야 하나요?',
        a: '미국 부동산 임대·매각 소득이나 미국에서 근무한 급여처럼 미국 원천소득이 있으면 Form 1040-NR로 신고해야 할 수 있습니다. 원천징수로 세금이 모두 정리된 배당만 있다면 대체로 신고가 필요 없습니다.',
      },
      {
        q: '미국 집을 팔 때 떼인 15%는 돌려받을 수 있나요?',
        a: '네. 다음 해 Form 1040-NR 신고에서 실제 양도소득세를 계산해 원천징수액과 정산하며, 많이 떼인 금액은 환급됩니다.',
      },
      {
        q: 'SSN이 없는데 신고할 수 있나요?',
        a: '가능합니다. ITIN 신청서(Form W-7)를 세금 신고서와 함께 제출해 번호를 받습니다.',
      },
      {
        q: '미국 주식 배당과 매매 차익에도 세금이 있나요?',
        a: '배당은 원천징수로 과세되며 한미 조세조약의 감면 세율을 적용받을 수 있습니다. 매매 차익은 해당 연도 미국 체류가 183일 미만이면 대체로 미국에서 과세되지 않습니다.',
      },
      {
        q: '영주권을 반납한 해에는 어떻게 신고하나요?',
        a: '반납 전 기간은 거주자, 이후 기간은 비거주자로 나누어 이중 신분 신고를 합니다. 장기 영주권자였다면 국적포기세 해당 여부도 함께 확인해야 합니다.',
      },
    ],

    cta: {
      title: '미국 원천소득 신고를 도와드립니다',
      text: '미국 부동산 임대·매각, 원천징수 환급, ITIN 신청까지 함께 처리합니다.',
      button: '상담 신청하기',
    },

    disclaimer:
      '본 페이지는 일반적인 정보 제공을 위한 것이며 세무 자문이 아닙니다. 거주자 판정과 조세조약 적용은 개인의 구체적 상황에 따라 달라지므로 전문가 상담이 필요합니다.',

    sources,
    related,
  },

  en: {
    h1: 'U.S. Tax Returns for Nonresident Aliens (Form 1040-NR)',
    lead:
      'You may have to file a U.S. return even if you are not a U.S. citizen or green card holder, when you have income from U.S. sources. Typical cases are Korea residents who rent out or sell U.S. real estate, or who were paid for work performed in the United States. The return used is Form 1040-NR.',
    reviewNote: 'Last updated: November 2026',

    sections: [
      {
        h: 'Are you a nonresident alien?',
        body: [
          'For U.S. tax purposes, residents are citizens, green card holders (the green card test), and people who meet the substantial presence test. Anyone else is a nonresident alien.',
          { list: [
            'Substantial presence test: you are a resident if you were in the U.S. at least 31 days in the year and the total of all days this year, one-third of last year’s days and one-sixth of the year before is 183 or more.',
            'Students and exchange visitors on F and J visas exclude their days for a set period.',
            'If your status changes during a year, you file as a dual-status taxpayer.',
          ] },
        ],
      },
      {
        h: 'Income that is reported and how it is taxed',
        body: [
          { table: {
            headers: ['Income', 'How it is taxed'],
            rows: [
              ['Wages for work performed in the U.S.', 'Effectively connected income (ECI), at graduated rates'],
              ['Rent from U.S. real estate', 'By default 30% withholding on gross rent. With the net-basis election, expenses and depreciation are deducted and graduated rates apply'],
              ['Gain on sale of U.S. real estate', 'Taxed as ECI. 15% of the sale price is withheld at closing (FIRPTA)'],
              ['Dividends on U.S. stock', '30% withholding, 15% under the U.S.–Korea treaty [verify]'],
              ['Interest on U.S. bank deposits', 'Generally exempt if not connected with a U.S. business'],
              ['Gain on sale of U.S. stock', 'Generally not taxed if you were in the U.S. fewer than 183 days that year'],
            ],
          } },
          'If your only U.S. income is dividends fully covered by withholding, a return may not be required. Rent, a property sale or wages generally require one.',
        ],
      },
      {
        h: 'Renting out U.S. real estate',
        body: [
          { list: [
            'Without an election, 30% of gross rent is taxed with no deductions.',
            'With the net-basis election (section 871(d)), tax applies at graduated rates only to net income after property tax, management fees, interest and depreciation.',
            'Having made the election, you give Form W-8ECI to the tenant or manager to stop the 30% withholding.',
            'A return in the state where the property sits is often required as well.',
          ] },
        ],
      },
      {
        h: 'Selling U.S. real estate (FIRPTA)',
        body: [
          { list: [
            'When a foreign person sells U.S. real estate, the buyer withholds 15% of the sale price and pays it to the IRS (Form 8288).',
            'If the actual tax will be lower than the withholding, you can apply before closing for a reduced amount with Form 8288-B.',
            'The amount withheld is reconciled against the actual tax on the next year’s Form 1040-NR, and the excess is refunded.',
            'A taxpayer number is needed to file and be refunded, so an ITIN is applied for if you have no SSN.',
          ] },
          { callout: { tone: 'info', text: 'Withholding is computed on the full sale price, not the gain. It applies even on a sale at a loss, so the return is how you get it back.' } },
        ],
      },
      {
        h: 'Deadlines and what to prepare',
        body: [
          { table: {
            headers: ['Case', 'Due date'],
            rows: [
              ['You received wages subject to U.S. withholding', 'April 15 of the following year'],
              ['All other cases', 'June 15 of the following year'],
              ['Extension', 'Available with Form 4868'],
            ],
          } },
          { list: [
            'Taxpayer number: without an SSN, apply for an ITIN (Form W-7) together with the return.',
            'Treaty benefits: reduced rates on dividends and interest are claimed by giving Form W-8BEN to the financial institution.',
            'Documents: Form 1042-S, W-2, rental income and expenses, the sale contract and closing statement, and Form 8288-A',
          ] },
          { callout: { tone: 'warn', text: 'If the return is not filed on time, deductions and credits can be disallowed and tax applied to gross income.' } },
        ],
      },
    ],

    faq: [
      {
        q: 'I am a Korean national living in Korea. Do I have to file in the U.S.?',
        a: 'If you have U.S.-source income such as rent or a sale of U.S. real estate, or wages for work in the U.S., you may need to file Form 1040-NR. If you only have dividends fully covered by withholding, a return is generally not needed.',
      },
      {
        q: 'Can I get back the 15% withheld when I sold my U.S. home?',
        a: 'Yes. The next year’s Form 1040-NR computes the actual tax on the gain and reconciles it with the withholding, and any excess is refunded.',
      },
      {
        q: 'Can I file without an SSN?',
        a: 'Yes. You submit an ITIN application (Form W-7) together with the tax return.',
      },
      {
        q: 'Are U.S. stock dividends and gains taxed?',
        a: 'Dividends are taxed through withholding, with a reduced rate available under the U.S.–Korea treaty. Gains on sale are generally not taxed in the U.S. if you were present fewer than 183 days in the year.',
      },
      {
        q: 'How do I file for the year I gave up my green card?',
        a: 'You file a dual-status return: resident for the period before surrender, nonresident after. If you were a long-term resident, check whether the exit tax applies as well.',
      },
    ],

    cta: {
      title: 'We can handle your U.S.-source income filing',
      text: 'U.S. rental property, a property sale, withholding refunds and the ITIN application, handled together.',
      button: 'Request a consultation',
    },

    disclaimer:
      'This page is general information, not tax advice. Residency status and treaty benefits depend on your own facts and require professional advice.',

    sources,
    related,
  },
};
