// PFIC (Passive Foreign Investment Company, IRC 1291~1298) 랜딩 콘텐츠.
//
// ⚠️ 세무사 검수 대상: [확인] 표시된 금액·기준·거래소 판정은 게시 전
//    임아름 CPA가 최신 IRS 자료(아래 sources)로 검증해야 함.

export default {
  slug: 'pfic',
  name: 'PFIC',
  summary: {
    ko: '한국 펀드·ETF는 대부분 PFIC. 매년 Form 8621 신고, 선택하지 않으면 불리한 §1291 과세.',
    en: 'Most Korean funds and ETFs are PFICs — annual Form 8621, with a harsh §1291 regime absent an election.',
  },

  ko: {
    h1: 'PFIC(해외 펀드 세금) 완벽 가이드',
    lead:
      '한국의 펀드·ETF·리츠 등 대부분의 집합투자기구는 미국 세법상 PFIC로 분류됩니다. PFIC 지분을 보유한 미국 납세자는 Form 8621을 매년 제출해야 하며, 별도 선택을 하지 않으면 매우 불리한 과세 방식이 적용됩니다. 캘리포니아 CPA가 규정과 대안을 정리했습니다.',
    reviewNote: '아래 금액·기준·거래소 인정 여부는 최신 IRS 자료 기준으로 최종 확인 후 게시됩니다.',

    sections: [
      {
        h: 'PFIC란 무엇인가',
        body: [
          '외국 법인이 다음 두 가지 중 하나에 해당하면 PFIC입니다.',
          { list: [
            '소득 기준: 총소득의 75% 이상이 이자·배당·자본이득 등 수동소득',
            '자산 기준: 자산의 50% 이상이 수동소득을 창출하거나 창출을 위해 보유되는 자산',
          ] },
          '이 기준 때문에 한국의 공모·사모 펀드, 상장 ETF, 리츠(REITs), 해외투자펀드, 일부 변액보험의 투자 부분 등이 대체로 PFIC에 해당합니다.',
          { callout: { tone: 'info', text: '삼성전자 같은 개별 한국 상장주식은 사업회사이므로 PFIC가 아닙니다. 문제는 "여러 종목을 담은 펀드/ETF" 형태입니다.' } },
        ],
      },
      {
        h: '무엇을 신고하나 — Form 8621',
        body: [
          { list: [
            'PFIC마다, 매 과세연도마다 Form 8621을 Form 1040에 첨부',
            '분배금을 받거나, 지분을 처분해 이익을 인식하거나, QEF·시가평가 등 선택을 하는 경우 제출 의무',
            '선택을 하지 않은 주주도 PFIC 지분 합계 가치가 일정 금액(1인 USD 25,000 / 부부합산 USD 50,000)을 넘으면 원칙적으로 제출 [확인]',
          ] },
          { callout: { tone: 'warn', text: 'PFIC 신고는 FBAR·FATCA(Form 8938)와 완전히 별개입니다. 같은 펀드가 FBAR·8938·8621에 모두 걸릴 수 있습니다.' } },
        ],
      },
      {
        h: '3가지 과세 방식',
        body: [
          { table: {
            headers: ['방식', '내용', '한국 펀드에서의 현실'],
            rows: [
              ['① 초과분배 / §1291 (기본값)', '초과분배·처분이익을 보유기간에 안분해 각 과거 연도 최고 세율로 과세하고 이자상당액을 가산. 가장 불리함', '아무 선택도 안 하면 자동 적용'],
              ['② QEF 선택', '펀드의 경상이익·순자본이득 중 지분 몫을 매년 소득에 산입. 펀드가 "PFIC Annual Information Statement"를 제공해야 가능', '대부분의 한국 펀드는 해당 자료를 제공하지 않아 사실상 불가'],
              ['③ 시가평가(MTM) 선택', '"정규 거래소에서 정기적으로 거래되는" 유가증권일 때 가능. 매년 평가익을 경상소득으로 인식, 손실은 제한', '한국 거래소 상장 ETF 등은 가능할 수 있으나 거래소 인정 여부 확인 필요 [확인]'],
            ],
          } },
          '이미 §1291 방식으로 여러 해가 지난 뒤 QEF·MTM로 전환하려면 "정화(purging) 선택"이 필요할 수 있습니다.',
        ],
      },
      {
        h: '한국 거주자가 특히 챙길 점',
        body: [
          { list: [
            '한국 증권사에서 국내 펀드·해외펀드·ETF를 매수해 장기 보유하면, 매도 시점에 §1291 규정으로 세금과 이자상당액이 한꺼번에 부과될 수 있습니다.',
            '연금저축펀드·IRP·퇴직연금 안에서 보유하는 펀드도 PFIC 논점이 있으며, 계좌 성격에 따라 취급이 달라 개별 검토가 필요합니다.',
            '한국 상장 ETF는 시가평가(MTM) 선택이 가능한 경우가 있으나, 해당 거래소가 IRS가 인정하는 "qualified exchange"인지 확인해야 합니다. [확인]',
            '실무적으로는 미국 증권사에서 미국 상장 펀드·ETF를 보유하거나 개별 종목으로 투자하면 PFIC 문제를 피할 수 있습니다.',
            '과거 미신고 상태라면 Streamlined 절차와 함께 8621 소급 작성을 검토합니다.',
          ] },
        ],
      },
      {
        h: '자주 하는 실수',
        body: [
          { list: [
            '한국 펀드·ETF가 PFIC라는 사실을 몰라 수년간 Form 8621 미제출',
            '금액이 작으면 신고 의무가 없다고 단정 (선택 여부·분배·처분에 따라 기준이 달라짐)',
            'FBAR나 Form 8938을 냈으니 PFIC도 커버된다고 오해',
            '수년 보유한 펀드를 매도하고 나서야 §1291 세금·이자 폭탄을 확인',
            'QEF 선택이 항상 가능하다고 가정 (한국 펀드는 대부분 자료 미제공으로 불가)',
          ] },
        ],
      },
    ],

    faq: [
      {
        q: '한국 펀드나 ETF를 갖고 있으면 무조건 신고해야 하나요?',
        a: '대부분의 한국 펀드·ETF는 PFIC이며, 분배금 수령·지분 처분·선택을 하거나 지분 합계 가치가 기준선을 넘으면 Form 8621 제출 의무가 생깁니다. 소액이라도 분배·처분이 있으면 신고 대상이 될 수 있습니다.',
      },
      {
        q: '삼성전자 같은 개별 한국 주식도 PFIC인가요?',
        a: '아닙니다. 개별 사업회사 주식은 PFIC가 아닙니다. PFIC 문제는 여러 자산을 담은 펀드·ETF·리츠 등 집합투자기구에서 발생합니다.',
      },
      {
        q: '이미 몇 년째 한국 펀드를 보유 중인데 지금 어떻게 해야 하나요?',
        a: '보유 기간, 분배·처분 이력, 계좌 성격에 따라 §1291 소급 계산, MTM 전환 가능성, 정화 선택 등을 검토합니다. 미신고 상태라면 Streamlined 절차와 함께 진행하는 것이 일반적입니다.',
      },
      {
        q: '연금저축펀드·IRP 안의 펀드도 PFIC인가요?',
        a: '계좌 안에서 펀드를 보유하면 PFIC 논점이 있습니다. 다만 계좌의 세제 성격, 한미조세조약상 취급 등에 따라 결론이 달라질 수 있어 개별 상담이 필요합니다.',
      },
    ],

    cta: {
      title: '보유 중인 한국 펀드의 PFIC 노출을 점검해 드립니다',
      text: '펀드별 PFIC 여부, 적용 가능한 선택(QEF·MTM), §1291 소급 영향, 정리 순서를 함께 설계합니다.',
      button: '상담 신청하기',
    },

    disclaimer:
      '본 페이지는 일반적인 정보 제공을 위한 것이며 세무 자문이 아닙니다. 금액·기준·서식·거래소 인정 여부는 과세연도와 사실관계에 따라 달라지며, 개인의 구체적 상황은 전문가 상담이 필요합니다.',

    sources: [
      { label: 'IRS — Passive Foreign Investment Company (PFIC)', url: 'https://www.irs.gov/instructions/i8621' },
      { label: 'IRS — About Form 8621', url: 'https://www.irs.gov/forms-pubs/about-form-8621' },
      { label: 'IRS — Instructions for Form 8621', url: 'https://www.irs.gov/instructions/i8621' },
      { label: 'U.S. Code — IRC §1291~§1298 (PFIC)', url: 'https://www.law.cornell.edu/uscode/text/26/subtitle-A/chapter-1/subchapter-P/part-VI' },
    ],

    related: [
      { path: '/fbar', label: { ko: 'FBAR·FATCA 신고 안내', en: 'FBAR / FATCA' } },
      { path: '/feie', label: { ko: '해외근로소득 공제(FEIE)', en: 'FEIE Guide' } },
      { path: '/streamlined', label: { ko: 'Streamlined 간소화 절차', en: 'Streamlined Procedures' } },
    ],
  },

  en: {
    h1: 'PFIC (Foreign Fund Taxation): A Practical Guide',
    lead:
      'Most Korean funds, ETFs, and REITs are PFICs for U.S. tax purposes. A U.S. taxpayer who holds PFIC shares must file Form 8621 every year, and without an election a very unfavorable regime applies. A California CPA explains the rules and the alternatives.',
    reviewNote: 'Amounts, thresholds, and qualified-exchange treatment below are finalized after review against current IRS guidance.',

    sections: [
      {
        h: 'What a PFIC is',
        body: [
          'A foreign corporation is a PFIC if it meets either test:',
          { list: [
            'Income test: 75% or more of gross income is passive (interest, dividends, capital gains, etc.)',
            'Asset test: 50% or more of assets produce, or are held to produce, passive income',
          ] },
          'As a result, Korean public and private funds, listed ETFs, REITs, offshore funds, and the investment portion of some variable insurance are generally PFICs.',
          { callout: { tone: 'info', text: 'An individual Korean stock like Samsung Electronics is an operating company, not a PFIC. The problem is pooled vehicles that hold many positions.' } },
        ],
      },
      {
        h: 'What you file — Form 8621',
        body: [
          { list: [
            'Attach Form 8621 to Form 1040 for each PFIC, each tax year',
            'Required if you receive distributions, recognize gain on disposition, or make a QEF / mark-to-market election',
            'A shareholder with no election generally must file if aggregate PFIC value exceeds USD 25,000 (USD 50,000 MFJ) [verify]',
          ] },
          { callout: { tone: 'warn', text: 'PFIC reporting is entirely separate from FBAR and FATCA (Form 8938). The same fund can appear on FBAR, 8938, and 8621.' } },
        ],
      },
      {
        h: 'Three tax regimes',
        body: [
          { table: {
            headers: ['Regime', 'Detail', 'Reality for Korean funds'],
            rows: [
              ['1. Excess distribution / §1291 (default)', 'Excess distributions and disposition gains are spread over the holding period, taxed at the top rate for each prior year, plus an interest charge. The least favorable.', 'Applies automatically if no election is made'],
              ['2. QEF election', 'Include your share of the fund’s ordinary earnings and net capital gain each year. Requires the fund to provide a PFIC Annual Information Statement.', 'Most Korean funds do not provide it, so usually unavailable'],
              ['3. Mark-to-market (MTM) election', 'Available for stock that is "marketable" (regularly traded on a qualified exchange). Recognize gain annually as ordinary income; losses limited.', 'May be possible for listed Korean ETFs, but qualified-exchange status must be confirmed [verify]'],
            ],
          } },
          'Moving from §1291 to QEF/MTM after several years may require a "purging" election.',
        ],
      },
      {
        h: 'What Korea-based taxpayers should watch',
        body: [
          { list: [
            'Buying Korean or offshore funds/ETFs through a Korean broker and holding long-term can produce a §1291 tax plus an interest charge all at once on sale.',
            'Funds held inside pension-savings, IRP, or retirement-pension accounts raise PFIC questions too; treatment depends on the account type and needs individual review.',
            'Listed Korean ETFs may allow the MTM election, but confirm the exchange is an IRS "qualified exchange". [verify]',
            'In practice, holding U.S.-listed funds/ETFs at a U.S. broker, or individual stocks, avoids the PFIC problem.',
            'If past years are unfiled, retroactive Form 8621 is reviewed together with the Streamlined procedures.',
          ] },
        ],
      },
      {
        h: 'Common mistakes',
        body: [
          { list: [
            'Not knowing Korean funds/ETFs are PFICs, leaving Form 8621 unfiled for years',
            'Assuming small holdings never need reporting (it depends on elections, distributions, and dispositions)',
            'Thinking FBAR or Form 8938 already covers PFICs',
            'Discovering the §1291 tax and interest only after selling a long-held fund',
            'Assuming a QEF election is always available (usually not for Korean funds)',
          ] },
        ],
      },
    ],

    faq: [
      {
        q: 'If I hold a Korean fund or ETF, do I always have to file?',
        a: 'Most Korean funds and ETFs are PFICs. A filing obligation arises if you receive distributions, dispose of shares, make an election, or your aggregate PFIC value exceeds the threshold. Even a small holding can trigger filing if there is a distribution or sale.',
      },
      {
        q: 'Is an individual Korean stock like Samsung Electronics a PFIC?',
        a: 'No. Shares of an operating company are not PFICs. The PFIC issue arises with pooled vehicles — funds, ETFs, REITs.',
      },
      {
        q: 'I have held a Korean fund for several years — what should I do now?',
        a: 'Depending on the holding period, distribution/disposition history, and account type, we review the §1291 computation, whether MTM is available, and a purging election. If years are unfiled, this is usually done alongside the Streamlined procedures.',
      },
      {
        q: 'Are funds inside a pension-savings or IRP account also PFICs?',
        a: 'Holding a fund inside the account raises the PFIC question. The conclusion can vary with the account’s tax character and treaty treatment, so individual advice is needed.',
      },
    ],

    cta: {
      title: 'We review the PFIC exposure of your Korean funds',
      text: 'We assess PFIC status per fund, which elections (QEF / MTM) are available, the retroactive §1291 impact, and the cleanup sequence.',
      button: 'Request a consultation',
    },

    disclaimer:
      'This page is general information, not tax advice. Amounts, thresholds, forms, and qualified-exchange treatment change by tax year and facts, and your specific situation requires professional review.',

    sources: [
      { label: 'IRS — Instructions for Form 8621 (PFIC)', url: 'https://www.irs.gov/instructions/i8621' },
      { label: 'IRS — About Form 8621', url: 'https://www.irs.gov/forms-pubs/about-form-8621' },
      { label: 'U.S. Code — IRC §1291–§1298 (PFIC)', url: 'https://www.law.cornell.edu/uscode/text/26/subtitle-A/chapter-1/subchapter-P/part-VI' },
    ],

    related: [
      { path: '/fbar', label: { ko: 'FBAR·FATCA 신고 안내', en: 'FBAR / FATCA' } },
      { path: '/feie', label: { ko: '해외근로소득 공제(FEIE)', en: 'FEIE Guide' } },
      { path: '/streamlined', label: { ko: 'Streamlined 간소화 절차', en: 'Streamlined Procedures' } },
    ],
  },
};
