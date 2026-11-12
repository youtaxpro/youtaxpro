// 미국 개인 소득세 신고(Form 1040) 서비스 페이지 콘텐츠.
//
// ⚠️ 세무사 검수 대상: [확인] 표시 항목은 게시 전 임아름 CPA가 최신 IRS 자료로 검증해야 함.

const related = [
  { path: '/feie', label: { ko: '해외근로소득 공제(FEIE)', en: 'FEIE Guide' } },
  { path: '/fbar', label: { ko: 'FBAR·FATCA 신고 안내', en: 'FBAR / FATCA' } },
  { path: '/tax-calendar', label: { ko: '미국 세금신고 일정', en: 'U.S. Tax Calendar' } },
  { path: '/streamlined', label: { ko: 'Streamlined 간소화 절차', en: 'Streamlined Procedures' } },
];

const sources = [
  { label: 'IRS — U.S. Citizens and Resident Aliens Abroad', url: 'https://www.irs.gov/individuals/international-taxpayers/us-citizens-and-resident-aliens-abroad' },
  { label: 'IRS — Publication 54, Tax Guide for U.S. Citizens and Resident Aliens Abroad', url: 'https://www.irs.gov/publications/p54' },
  { label: 'IRS — About Form 1040', url: 'https://www.irs.gov/forms-pubs/about-form-1040' },
  { label: 'IRS — Yearly Average Currency Exchange Rates', url: 'https://www.irs.gov/individuals/international-taxpayers/yearly-average-currency-exchange-rates' },
];

export default {
  slug: 'tax-return',
  updated: '2026-11-12',
  name: { ko: '소득세 신고', en: 'Tax Return' },
  summary: {
    ko: '한국 거주 미국 시민권자·영주권자의 연방 소득세 신고(Form 1040). 한국 소득 반영, 이중과세 방지, 해외자산 보고까지 한 번에.',
    en: 'Federal income tax returns (Form 1040) for U.S. citizens and green card holders in Korea, covering Korean income, double-tax relief and foreign asset reporting.',
  },

  ko: {
    h1: '미국 개인 소득세 신고 대행 (Form 1040)',
    lead:
      '미국 시민권자와 영주권자는 한국에 살아도 전 세계 소득을 매년 미국에 신고해야 합니다. 버클리유에스택스는 한국 소득을 미국 신고서에 정확히 반영하고, 해외근로소득 공제와 외국납부세액공제로 이중과세를 줄이며, FBAR 등 해외자산 보고까지 함께 처리합니다.',
    reviewNote: '최종 업데이트: 2026년 11월',

    sections: [
      {
        h: '누가 신고해야 하나',
        body: [
          { list: [
            '미국 시민권자와 영주권자는 거주 국가와 관계없이 전 세계 소득이 신고 대상입니다.',
            '총소득이 신고 유형·연령별 기준 금액(대체로 표준공제액) 이상이면 신고 의무가 있습니다. 연도별 금액은 세금신고 일정 페이지에 정리되어 있습니다.',
            '자영업 순소득이 400달러 이상이면 총소득이 적어도 신고해야 합니다.',
            '비거주 외국인 배우자와 부부별도신고(MFS)를 하는 경우 기준 금액이 5달러로 매우 낮습니다.',
          ] },
          { callout: { tone: 'info', text: '한국에서 세금을 모두 냈거나 미국에 낼 세금이 없어도 신고 의무는 따로 판단합니다. 세금이 0이어도 신고서는 제출해야 하는 경우가 많습니다.' } },
        ],
      },
      {
        h: '신고 기한',
        body: [
          { table: {
            headers: ['기한', '내용'],
            rows: [
              ['4월 15일', '원칙적인 신고·납부 기한. 낼 세금이 있으면 이날부터 이자가 붙습니다.'],
              ['6월 15일', '해외 거주자의 자동 2개월 연장. 신청서 없이 적용되며 신고서에 해외 거주 사실을 기재합니다.'],
              ['10월 15일', 'Form 4868로 연장 신청한 경우의 기한.'],
              ['12월 15일', '해외 거주자가 서면으로 추가 연장을 요청해 승인된 경우. [확인]'],
            ],
          } },
          '연장은 신고서 제출 기한만 늦춰 줍니다. 납부할 세금은 4월 15일까지 내야 이자를 피할 수 있습니다.',
        ],
      },
      {
        h: '한국 소득은 이렇게 반영합니다',
        body: [
          { table: {
            headers: ['한국 소득', '미국 신고서 반영'],
            rows: [
              ['근로소득(급여·상여)', '임금으로 신고. 해외근로소득 공제(Form 2555) 또는 외국납부세액공제(Form 1116) 적용 검토'],
              ['이자·배당', 'Schedule B. 해외 계좌 보유 사실도 함께 표시'],
              ['주식·부동산 양도', 'Form 8949·Schedule D. 취득·양도 시점 환율로 각각 환산'],
              ['임대소득', 'Schedule E. 건물 감가상각 반영'],
              ['사업·프리랜서 소득', 'Schedule C와 자영업세. 한미 사회보장협정 적용 여부 확인'],
              ['연금·퇴직금', '종류에 따라 과세 방식이 다르므로 개별 검토'],
            ],
          } },
          '원화 금액은 원칙적으로 거래일 환율로 환산하며, 연중 고르게 발생한 소득은 IRS가 공시하는 연평균 환율을 사용할 수 있습니다.',
        ],
      },
      {
        h: '이중과세를 줄이는 방법',
        body: [
          { list: [
            '해외근로소득 공제(FEIE): 요건을 갖추면 근로소득을 연도별 한도까지 소득에서 제외합니다.',
            '외국납부세액공제(FTC): 한국에 낸 소득세를 미국 세액에서 공제합니다. 남은 공제액은 이월됩니다.',
            '한미 조세조약: 연금, 교수·학생 소득 등 일부 항목에 특례가 있습니다.',
          ] },
          '어느 방법이 유리한지는 소득 종류, 한국 세율, 자녀 세액공제 수령 여부에 따라 달라집니다. 한 번 선택하면 이후 연도에 영향을 주므로 처음부터 비교해서 정합니다.',
        ],
      },
      {
        h: '소득세 신고와 함께 챙기는 보고',
        body: [
          { table: {
            headers: ['보고', '대상'],
            rows: [
              ['FBAR (FinCEN Form 114)', '해외 금융계좌 합계가 연중 1만 달러 초과'],
              ['Form 8938 (FATCA)', '해외 금융자산이 거주지·신고 유형별 기준 초과'],
              ['Form 8621 (PFIC)', '한국 펀드·ETF 등 보유'],
              ['Form 3520', '한국 가족에게 받은 증여·상속이 연 10만 달러 초과'],
              ['Form 5471', '한국 법인 지분을 일정 비율(통상 10%) 이상 보유'],
            ],
          } },
          '이 보고서들은 세금이 없어도 누락 시 벌금이 큰 항목입니다. 신고 준비 단계에서 해당 여부를 먼저 확인합니다.',
        ],
      },
      {
        h: '진행 절차',
        body: [
          { list: [
            '1단계 상담: 신분, 거주 이력, 소득과 자산 종류를 확인하고 필요한 신고 범위를 정합니다.',
            '2단계 자료 준비: 안내해 드리는 목록에 따라 서류를 보내 주십니다.',
            '3단계 신고서 작성: 한국 소득을 환산·분류하고 공제 방법을 비교해 작성합니다.',
            '4단계 검토와 서명: 신고서 내용을 설명드린 뒤 전자서명 동의서(Form 8879)를 받습니다.',
            '5단계 전자신고: IRS에 전자 제출하고 접수 확인을 전달합니다.',
            '6단계 사후 관리: IRS 통지서가 오면 내용 확인과 대응을 돕습니다.',
          ] },
        ],
      },
      {
        h: '준비 서류',
        body: [
          { list: [
            '여권, SSN(또는 ITIN), 전년도 미국 세금신고서',
            '근로소득 원천징수영수증, 소득금액증명원',
            '은행·증권·보험 계좌별 연중 최고 잔액과 이자·배당 내역',
            '주식·부동산 매매 내역(취득일, 취득가, 양도일, 양도가)',
            '임대 계약서와 임대 수입·경비 내역',
            '한국 종합소득세 신고서(해당하는 경우)',
          ] },
        ],
      },
      {
        h: '지난 연도를 신고하지 못했다면',
        body: [
          { list: [
            '해외 계좌와 소득을 몰라서 신고하지 못했다면 Streamlined 간소화 절차로 최근 3년치를 정리하는 방법이 있습니다.',
            '환급받을 세금이 있는 연도는 원래 신고 기한으로부터 3년이 지나면 환급을 청구할 수 없습니다.',
            '어느 방법이 맞는지는 미신고 사유와 연도, 해외자산 규모에 따라 달라지므로 상담에서 먼저 판단합니다.',
          ] },
        ],
      },
    ],

    faq: [
      {
        q: '한국에서 세금을 다 냈는데도 미국에 신고해야 하나요?',
        a: '네. 미국은 시민권자와 영주권자의 전 세계 소득을 과세 대상으로 봅니다. 다만 해외근로소득 공제나 외국납부세액공제를 적용하면 미국에 추가로 낼 세금이 없거나 크게 줄어드는 경우가 많습니다.',
      },
      {
        q: '소득이 없거나 적어도 신고해야 하나요?',
        a: '총소득이 기준 금액에 못 미치면 소득세 신고 의무는 없을 수 있습니다. 그래도 해외 계좌 합계가 1만 달러를 넘으면 FBAR는 따로 제출해야 합니다.',
      },
      {
        q: '배우자가 한국인(비거주 외국인)이면 어떻게 신고하나요?',
        a: '부부별도신고가 기본이지만, 배우자를 미국 세법상 거주자로 취급하는 선택을 하면 부부공동신고도 가능합니다. 이 경우 배우자의 전 세계 소득도 신고 대상이 되므로 유불리를 비교해야 합니다.',
      },
      {
        q: '한국에 살면 주(State) 세금 신고도 해야 하나요?',
        a: '미국 내 주 거주자가 아니고 주 원천소득이 없으면 대체로 필요 없습니다. 다만 캘리포니아 등 일부 주는 이주 후에도 거주자로 보는 기준이 엄격하므로, 출국 전 거주하던 주의 규정을 확인해야 합니다.',
      },
      {
        q: '신고는 전자 제출로 하나요?',
        a: '네. 대부분의 신고서는 전자 제출하며 접수 확인을 받을 수 있습니다. 일부 양식이나 Streamlined 절차는 우편 제출이 필요합니다.',
      },
    ],

    cta: {
      title: '올해 미국 세금 신고, 상담부터 시작하세요',
      text: '신분과 소득 상황을 알려 주시면 필요한 신고 범위와 준비 서류를 안내해 드립니다.',
      button: '상담 신청하기',
    },

    disclaimer:
      '본 페이지는 일반적인 정보 제공을 위한 것이며 세무 자문이 아닙니다. 기준 금액과 기한은 매년 달라질 수 있으며, 개인의 구체적 상황은 전문가 상담이 필요합니다.',

    sources,
    related,
  },

  en: {
    h1: 'U.S. Individual Income Tax Return Preparation (Form 1040)',
    lead:
      'U.S. citizens and green card holders must report worldwide income every year, even while living in Korea. We translate your Korean income onto the U.S. return, reduce double taxation with the Foreign Earned Income Exclusion or the Foreign Tax Credit, and handle FBAR and other foreign asset reporting alongside it.',
    reviewNote: 'Last updated: November 2026',

    sections: [
      {
        h: 'Who must file',
        body: [
          { list: [
            'U.S. citizens and green card holders report worldwide income wherever they live.',
            'You must file if gross income is at or above the threshold for your filing status and age (generally the standard deduction). Amounts by year are on our tax calendar page.',
            'Net self-employment income of USD 400 or more requires a return regardless of total income.',
            'If you are married to a nonresident alien and file separately, the threshold is only USD 5.',
          ] },
          { callout: { tone: 'info', text: 'Having paid tax in Korea, or owing nothing to the U.S., does not settle the filing question. A return is often required even when the tax is zero.' } },
        ],
      },
      {
        h: 'Deadlines',
        body: [
          { table: {
            headers: ['Date', 'What it is'],
            rows: [
              ['April 15', 'The regular filing and payment date. Interest runs from this date on any tax due.'],
              ['June 15', 'Automatic two-month extension for taxpayers living abroad. No form is needed; you note it on the return.'],
              ['October 15', 'The deadline when Form 4868 has been filed.'],
              ['December 15', 'An additional extension taxpayers abroad can request in writing, if approved. [verify]'],
            ],
          } },
          'An extension moves the filing date only. Tax must still be paid by April 15 to avoid interest.',
        ],
      },
      {
        h: 'How Korean income goes on the return',
        body: [
          { table: {
            headers: ['Korean income', 'On the U.S. return'],
            rows: [
              ['Salary and bonus', 'Reported as wages. The FEIE (Form 2555) or the Foreign Tax Credit (Form 1116) is considered'],
              ['Interest and dividends', 'Schedule B, which also asks about foreign accounts'],
              ['Sales of stock or real estate', 'Form 8949 and Schedule D, translating cost and proceeds at their own dates'],
              ['Rental income', 'Schedule E, with depreciation on the building'],
              ['Business or freelance income', 'Schedule C and self-employment tax; check the U.S.–Korea totalization agreement'],
              ['Pensions and severance', 'Treatment depends on the type and is reviewed case by case'],
            ],
          } },
          'Won amounts are generally translated at the rate on the transaction date. Income earned evenly through the year can use the yearly average rate published by the IRS.',
        ],
      },
      {
        h: 'Reducing double taxation',
        body: [
          { list: [
            'Foreign Earned Income Exclusion (FEIE): if you qualify, earned income up to the annual cap is excluded.',
            'Foreign Tax Credit (FTC): Korean income tax is credited against U.S. tax, and unused credit carries over.',
            'The U.S.–Korea tax treaty: special rules for some items such as pensions and income of teachers and students.',
          ] },
          'Which works better depends on the type of income, the Korean tax rate, and whether you claim the child tax credit. The choice affects later years, so we compare them at the start.',
        ],
      },
      {
        h: 'Reports handled with the return',
        body: [
          { table: {
            headers: ['Report', 'When it applies'],
            rows: [
              ['FBAR (FinCEN Form 114)', 'Foreign accounts total more than USD 10,000 at any time in the year'],
              ['Form 8938 (FATCA)', 'Foreign financial assets exceed the threshold for your residence and filing status'],
              ['Form 8621 (PFIC)', 'You hold Korean funds or ETFs'],
              ['Form 3520', 'Gifts or inheritances from Korean family exceed USD 100,000 in a year'],
              ['Form 5471', 'You own a certain share (generally 10% or more) of a Korean corporation'],
            ],
          } },
          'These carry large penalties when missed, even if no tax is due. We check which apply before preparing the return.',
        ],
      },
      {
        h: 'How we work',
        body: [
          { list: [
            'Step 1, consultation: we confirm your status, residence history, income and assets, and set the scope of filing.',
            'Step 2, documents: you send what is on the checklist we provide.',
            'Step 3, preparation: we translate and classify Korean income and compare relief methods.',
            'Step 4, review and signature: we walk you through the return and collect the e-file authorization (Form 8879).',
            'Step 5, e-filing: we file with the IRS and send you the acceptance confirmation.',
            'Step 6, follow-up: if an IRS notice arrives, we help you read it and respond.',
          ] },
        ],
      },
      {
        h: 'Documents to prepare',
        body: [
          { list: [
            'Passport, SSN (or ITIN), and last year’s U.S. return',
            'Korean wage withholding receipt and certificate of income',
            'Maximum balance during the year and interest or dividends for each bank, brokerage and insurance account',
            'Records of stock or real estate sales (purchase and sale dates and amounts)',
            'Lease agreements and rental income and expenses',
            'Korean comprehensive income tax return, if you filed one',
          ] },
        ],
      },
      {
        h: 'If past years were not filed',
        body: [
          { list: [
            'If you did not know about the obligation, the Streamlined procedures can bring the last three years into compliance.',
            'For a year with a refund, the claim is lost three years after the original due date.',
            'The right route depends on why the years were missed, which years, and the size of your foreign assets, so we assess that first.',
          ] },
        ],
      },
    ],

    faq: [
      {
        q: 'I paid all my tax in Korea. Do I still file in the U.S.?',
        a: 'Yes. The U.S. taxes citizens and green card holders on worldwide income. With the FEIE or the Foreign Tax Credit, though, the additional U.S. tax is often zero or much reduced.',
      },
      {
        q: 'Do I file if I had little or no income?',
        a: 'If gross income is below the threshold you may not need an income tax return. An FBAR is still required if your foreign accounts total more than USD 10,000.',
      },
      {
        q: 'How do I file if my spouse is Korean (a nonresident alien)?',
        a: 'Married filing separately is the default, but you can elect to treat your spouse as a U.S. resident and file jointly. That brings the spouse’s worldwide income onto the return, so the two options should be compared.',
      },
      {
        q: 'Do I need a state return while living in Korea?',
        a: 'Generally not, if you are not a resident of a state and have no income sourced there. Some states, including California, apply strict residency tests after you move, so check the rules of the state you left.',
      },
      {
        q: 'Is the return e-filed?',
        a: 'Yes. Most returns are e-filed and you receive an acceptance confirmation. Some forms, and Streamlined submissions, must be mailed.',
      },
    ],

    cta: {
      title: 'Start this year’s U.S. return with a consultation',
      text: 'Tell us your status and income, and we will set out what must be filed and which documents to prepare.',
      button: 'Request a consultation',
    },

    disclaimer:
      'This page is general information, not tax advice. Thresholds and deadlines change each year, and your own situation requires professional advice.',

    sources,
    related,
  },
};
