// 국적포기세 / 장기영주권 포기세 (Expatriation Tax, IRC 877A) 랜딩 콘텐츠.
//
// ⚠️ 세무사 검수 대상: [확인] 표시된 금액·연도·기준은 게시 전 임아름 CPA가
//    최신 IRS 자료(아래 sources)로 검증해야 함.

export default {
  slug: 'exit-tax',
  name: 'Exit Tax',

  ko: {
    h1: '국적포기세(Exit Tax) 완벽 가이드',
    lead:
      '미국 시민권을 포기하거나 장기 영주권을 반납할 때, 일정 요건에 해당하면 전 세계 자산을 포기 직전에 판 것으로 간주해 과세합니다(mark-to-market). 한국 자산·연금이 어떻게 평가되는지, 준비 순서는 무엇인지 캘리포니아 CPA가 정리했습니다.',
    reviewNote: '아래 금액·연도·기준은 최신 IRS 자료 기준으로 최종 확인 후 게시됩니다.',

    sections: [
      {
        h: '국적포기세란 무엇인가',
        body: [
          '국적포기세(Expatriation Tax)는 IRC 877A에 따라 "covered expatriate(대상 포기자)"에게 부과됩니다. 시민권 포기일 또는 영주권 종료일 직전 날에 전 세계 자산을 공정시장가치로 매각한 것으로 간주하고, 그 간주 이익에서 일정 면제금액을 뺀 금액에 세금을 매깁니다.',
          { callout: { tone: 'info', text: '국무부에 내는 시민권 포기 수수료(약 USD 2,350 [확인])는 이 세금과 완전히 별개입니다. 국적포기세는 IRS 소관, 포기 수수료는 국무부 소관입니다.' } },
        ],
      },
      {
        h: '누가 대상인가 — 두 그룹',
        body: [
          { list: [
            '미국 시민권을 포기하는 사람',
            '장기 영주권자(Long-Term Resident): 포기 시점 직전 15년 중 8년 이상 영주권을 보유한 사람이 영주권을 반납하거나 조세조약상 비거주자로 취급받는 경우',
          ] },
          '위 두 그룹 중 다음 셋 중 하나라도 해당하면 "covered expatriate"가 됩니다.',
          { table: {
            headers: ['판정 기준', '내용'],
            rows: [
              ['순자산 기준', '포기일 기준 전 세계 순자산이 USD 2,000,000 이상'],
              ['세액 기준', '직전 5년 평균 연간 미국 소득세액이 기준선을 초과 (연도별 조정, 2024년 약 USD 201,000 [확인])'],
              ['컴플라이언스 기준', 'Form 8854에서 직전 5년간 미국 세금 신고·납부 의무를 이행했음을 확인(증명)하지 못하는 경우'],
            ],
          } },
          { callout: { tone: 'warn', text: '세 번째 기준 때문에, 과거 미국 세금을 신고하지 않았다면 순자산·소득이 적어도 자동으로 covered expatriate가 됩니다.' } },
        ],
      },
      {
        h: '얼마나 과세되나 — 간주매각(Mark-to-Market)',
        body: [
          { list: [
            '포기일 직전 날, 전 세계 모든 자산을 공정시장가치로 매각한 것으로 간주',
            '간주 이익 합계에서 면제금액(연도별 조정, 2024년 USD 866,000 [확인])을 공제',
            '초과분에 대해 자본이득·경상소득 규정에 따라 과세',
          ] },
          '이연보상(deferred compensation), 세제혜택 계좌(IRA 등), 비양도 신탁(non-grantor trust) 지분에는 별도의 특례 규정이 적용됩니다. 항목별로 취급이 달라 개별 검토가 필요합니다.',
        ],
      },
      {
        h: '신고 절차',
        body: [
          { list: [
            'Form 8854(초기·연차 국외이주 정보신고서) 제출 — 미제출 시 자동으로 covered expatriate 처리 및 벌금',
            '포기 연도의 Form 1040은 이중신분(dual-status)으로 신고',
            'Form 8854에서 직전 5년 세금 컴플라이언스를 확인',
          ] },
        ],
      },
      {
        h: '한국 거주자가 특히 챙길 점',
        body: [
          { list: [
            '한국 부동산, 국민연금·퇴직연금, 한국 상장·비상장 주식, 사업체 지분도 모두 간주매각 평가 대상입니다. 평가 시점 환율과 취득가액 산정이 세액을 크게 좌우합니다.',
            '한국 국적 회복·이중국적·병역 문제는 대한민국 국적법 소관으로, 미국 국적포기세와는 별개입니다. 실무상 두 절차의 순서·시점을 함께 설계해야 합니다.',
            '미국 세금을 신고해 오지 않았다면, 국적을 포기하기 "전에" Streamlined 절차 등으로 5년치 컴플라이언스를 먼저 정리하는 것이 일반적입니다.',
            'covered expatriate가 미국 시민·거주자에게 증여·상속하면, 받는 사람이 IRC 2801에 따라 세금을 부담할 수 있습니다.',
            '출생 시 이중국적이었고 일정 요건을 충족하는 경우 등 예외 규정이 있어, 대상 여부를 먼저 정확히 판정해야 합니다.',
          ] },
        ],
      },
      {
        h: '자주 하는 실수',
        body: [
          { list: [
            '"국적만 포기하면 세금 관계가 끝난다" — covered expatriate면 간주매각 과세가 남습니다.',
            'Form 8854를 제출하지 않아 순자산·소득과 무관하게 covered expatriate로 처리',
            '영주권을 오래 보유한 사람이 그린카드 반납만으로도 대상이 될 수 있다는 점을 간과',
            '국적포기 후에는 과거 미신고분을 IRS가 문제 삼지 못한다고 오해',
            '국민연금·퇴직금의 간주매각 평가·특례 적용을 검토하지 않고 신고',
          ] },
        ],
      },
    ],

    faq: [
      {
        q: '그린카드만 반납해도 국적포기세 대상인가요?',
        a: '직전 15년 중 8년 이상 영주권을 보유한 "장기 영주권자"가 영주권을 반납하거나 조세조약상 비거주자가 되면 대상 판정을 받습니다. 이후 순자산·세액·컴플라이언스 기준으로 covered expatriate 여부가 결정됩니다.',
      },
      {
        q: 'covered expatriate가 아니면 세금이 전혀 없나요?',
        a: '간주매각 과세는 없습니다. 다만 포기 연도까지의 정상적인 미국 세금 신고 의무와 Form 8854 제출 의무는 그대로 있습니다.',
      },
      {
        q: '국적을 포기하기 전에 무엇을 준비해야 하나요?',
        a: '직전 5년 세금 컴플라이언스 확보, 전 세계 순자산·자산별 취득가액 정리, 연금·이연보상 항목의 특례 검토, 증여·자산 이전 시점 설계 등이 필요합니다. 미신고 상태라면 Streamlined 절차를 먼저 검토합니다.',
      },
      {
        q: '미국 세금 신고를 안 해왔는데 국적포기가 가능한가요?',
        a: '국적포기 자체는 가능하지만, 그 상태로는 컴플라이언스 기준을 충족하지 못해 자동으로 covered expatriate가 됩니다. 통상 포기 전에 미신고분을 정리한 뒤 진행합니다.',
      },
    ],

    cta: {
      title: '국적포기 전 세무 검토를 도와드립니다',
      text: 'covered expatriate 여부 판정, 한국 자산·연금 평가, 컴플라이언스 정리 순서를 함께 설계합니다.',
      button: '상담 신청하기',
    },

    disclaimer:
      '본 페이지는 일반적인 정보 제공을 위한 것이며 세무 자문이 아닙니다. 금액·기준·서식은 과세연도에 따라 달라지며, 개인의 구체적 상황은 전문가 상담이 필요합니다. 한국 국적법·병역 관련 사항은 별도의 법률 자문이 필요합니다.',

    sources: [
      { label: 'IRS — Expatriation Tax', url: 'https://www.irs.gov/individuals/international-taxpayers/expatriation-tax' },
      { label: 'IRS — About Form 8854', url: 'https://www.irs.gov/forms-pubs/about-form-8854' },
      { label: 'IRS — Instructions for Form 8854', url: 'https://www.irs.gov/instructions/i8854' },
      { label: 'IRS — Expatriation After June 16, 2008 (IRC 877A)', url: 'https://www.irs.gov/individuals/international-taxpayers/expatriation-on-or-after-june-17-2008' },
    ],

    related: [
      { path: '/feie', label: { ko: '해외근로소득 공제(FEIE)', en: 'FEIE Guide' } },
      { path: '/streamlined', label: { ko: 'Streamlined 간소화 절차', en: 'Streamlined Procedures' } },
      { path: '/fbar', label: { ko: 'FBAR 신고 안내', en: 'FBAR Filing' } },
      { path: '/pfic', label: { ko: 'PFIC(해외 펀드 세금)', en: 'PFIC Guide' } },
    ],
  },

  en: {
    h1: 'U.S. Exit Tax (Expatriation Tax): A Practical Guide',
    lead:
      'When you renounce U.S. citizenship or give up a long-term green card and meet certain tests, the IRS treats your worldwide assets as sold the day before you expatriate (mark-to-market). A California CPA explains how Korean assets and pensions are valued and the order to prepare in.',
    reviewNote: 'Amounts, years, and thresholds below are finalized after review against current IRS guidance.',

    sections: [
      {
        h: 'What the exit tax is',
        body: [
          'The expatriation tax under IRC 877A applies to a "covered expatriate." Your worldwide assets are treated as sold at fair market value the day before your expatriation date, and gain above an exclusion amount is taxed.',
          { callout: { tone: 'info', text: 'The State Department renunciation fee (about USD 2,350 [verify]) is entirely separate — that is a State Department fee, not an IRS tax.' } },
        ],
      },
      {
        h: 'Who is covered — two groups',
        body: [
          { list: [
            'People who renounce U.S. citizenship',
            'Long-term residents: green card holders for 8 of the prior 15 years who surrender the card or become treaty non-residents',
          ] },
          'A person in either group is a "covered expatriate" if any one of the following applies:',
          { table: {
            headers: ['Test', 'Detail'],
            rows: [
              ['Net worth', 'Worldwide net worth of USD 2,000,000 or more on the expatriation date'],
              ['Tax liability', 'Average annual U.S. income tax over the prior 5 years exceeds the threshold (adjusted yearly; about USD 201,000 for 2024 [verify])'],
              ['Compliance', 'Cannot certify 5 years of U.S. tax compliance on Form 8854'],
            ],
          } },
          { callout: { tone: 'warn', text: 'Because of the third test, unfiled past U.S. returns make you a covered expatriate automatically, regardless of net worth or income.' } },
        ],
      },
      {
        h: 'How much is taxed — mark-to-market',
        body: [
          { list: [
            'All worldwide assets are treated as sold at fair market value the day before expatriation',
            'The total deemed gain is reduced by an exclusion amount (adjusted yearly; USD 866,000 for 2024 [verify])',
            'The excess is taxed under the capital gains / ordinary income rules',
          ] },
          'Deferred compensation, tax-deferred accounts (IRAs, etc.), and interests in non-grantor trusts follow special rules and need item-by-item review.',
        ],
      },
      {
        h: 'How to file',
        body: [
          { list: [
            'File Form 8854 (Initial and Annual Expatriation Statement) — failure to file means automatic covered-expatriate treatment plus penalties',
            'File the expatriation-year Form 1040 as a dual-status return',
            'Certify 5 years of tax compliance on Form 8854',
          ] },
        ],
      },
      {
        h: 'What Korea-based taxpayers should watch',
        body: [
          { list: [
            'Korean real estate, National Pension / retirement pensions, listed and unlisted Korean shares, and business interests are all in the mark-to-market base. The valuation-date exchange rate and cost basis drive the result.',
            'Korean nationality, dual citizenship, and military service are governed by Korean law, separate from the U.S. exit tax — but the timing of both processes should be planned together.',
            'If you have not filed U.S. taxes, you generally clean up 5 years of compliance (e.g., via the Streamlined procedures) before you expatriate.',
            'A gift or bequest from a covered expatriate to a U.S. citizen or resident can be taxed to the recipient under IRC 2801.',
            'Exceptions exist (e.g., certain dual citizens at birth), so confirm covered-expatriate status first.',
          ] },
        ],
      },
      {
        h: 'Common mistakes',
        body: [
          { list: [
            'Assuming renouncing ends all U.S. tax exposure — a covered expatriate still faces the mark-to-market tax.',
            'Not filing Form 8854, becoming a covered expatriate regardless of net worth or income.',
            'Overlooking that long-term green card holders can be covered by surrendering the card alone.',
            'Believing the IRS cannot pursue past unfiled years after expatriation.',
            'Filing without reviewing the valuation and special rules for pensions and retirement pay.',
          ] },
        ],
      },
    ],

    faq: [
      {
        q: 'Am I subject to the exit tax if I only surrender my green card?',
        a: 'A long-term resident (green card for 8 of the prior 15 years) who surrenders the card or becomes a treaty non-resident is tested. Covered-expatriate status then depends on the net worth, tax liability, and compliance tests.',
      },
      {
        q: 'If I am not a covered expatriate, is there no tax at all?',
        a: 'There is no mark-to-market tax. You still have your normal U.S. filing obligations through the expatriation year and must file Form 8854.',
      },
      {
        q: 'What should I prepare before renouncing?',
        a: 'Five years of tax compliance, a full worldwide net-worth and cost-basis inventory, review of special rules for pensions and deferred comp, and timing of gifts/transfers. If returns are unfiled, the Streamlined procedures are reviewed first.',
      },
      {
        q: 'Can I expatriate if I have not filed U.S. taxes?',
        a: 'You can expatriate, but in that state you fail the compliance test and become a covered expatriate automatically. Usually the unfiled years are resolved first.',
      },
    ],

    cta: {
      title: 'We review the tax picture before you expatriate',
      text: 'We assess covered-expatriate status, value your Korean assets and pensions, and sequence the compliance cleanup.',
      button: 'Request a consultation',
    },

    disclaimer:
      'This page is general information, not tax advice. Amounts, thresholds, and forms change by tax year, and your specific situation requires professional review. Korean nationality and military-service matters need separate legal advice.',

    sources: [
      { label: 'IRS — Expatriation Tax', url: 'https://www.irs.gov/individuals/international-taxpayers/expatriation-tax' },
      { label: 'IRS — About Form 8854', url: 'https://www.irs.gov/forms-pubs/about-form-8854' },
      { label: 'IRS — Instructions for Form 8854', url: 'https://www.irs.gov/instructions/i8854' },
      { label: 'IRS — Expatriation On or After June 17, 2008 (IRC 877A)', url: 'https://www.irs.gov/individuals/international-taxpayers/expatriation-on-or-after-june-17-2008' },
    ],

    related: [
      { path: '/feie', label: { ko: '해외근로소득 공제(FEIE)', en: 'FEIE Guide' } },
      { path: '/streamlined', label: { ko: 'Streamlined 간소화 절차', en: 'Streamlined Procedures' } },
      { path: '/fbar', label: { ko: 'FBAR 신고 안내', en: 'FBAR Filing' } },
      { path: '/pfic', label: { ko: 'PFIC(해외 펀드 세금)', en: 'PFIC Guide' } },
    ],
  },
};
