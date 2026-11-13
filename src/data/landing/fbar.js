// FBAR (FinCEN Form 114) · FATCA (Form 8938) 랜딩 콘텐츠.
//
// ⚠️ 세무사 검수 대상: [확인] 표시된 벌금 물가조정액·한국 퇴직연금 계좌 취급은
//    게시 전 임아름 CPA가 최신 FinCEN·IRS 자료(아래 sources)로 검증해야 함.

export default {
  slug: 'fbar',
  updated: '2026-11-12', // 내용을 고칠 때마다 갱신 (sitemap lastmod · Article dateModified)
  name: 'FBAR · FATCA',
  summary: {
    ko: '해외 계좌 합계가 연중 미화 1만 달러를 넘으면 FBAR(FinCEN 114) 신고 의무. FATCA(Form 8938)는 별도.',
    en: 'FBAR (FinCEN 114) is required if foreign accounts exceed USD 10,000 at any point in the year. FATCA (Form 8938) is separate.',
  },

  ko: {
    h1: 'FBAR(해외금융계좌 신고) · FATCA 가이드',
    lead:
      'FBAR는 미국 시민권자·영주권자 등이 보유한 해외 금융계좌의 합계가 연중 한 번이라도 미화 1만 달러를 넘으면 제출해야 하는 보고서(FinCEN Form 114)입니다. 세금을 내는 신고가 아니라 계좌를 알리는 보고이며, 한국의 은행·증권·보험 계좌가 모두 대상이 될 수 있습니다.',
    reviewNote: '최종 업데이트: 2026년 11월',

    sections: [
      {
        h: 'FBAR란 무엇인가',
        body: [
          'FBAR(Report of Foreign Bank and Financial Accounts)는 미국 재무부 산하 FinCEN에 제출하는 연례 보고서입니다. 소득세 신고서(Form 1040)와는 별개의 절차이고, 소득세 신고서에 첨부하지 않습니다.',
          { list: [
            '보고 대상은 계좌의 존재와 연중 최고 잔액이며, FBAR 자체로 내는 세금은 없습니다.',
            '계좌에서 과세 소득이 발생했는지와 관계없이 기준을 넘으면 보고해야 합니다.',
            '보고하지 않으면 세금이 없어도 벌금이 부과될 수 있습니다.',
          ] },
        ],
      },
      {
        h: '누가 신고해야 하나',
        body: [
          '아래 두 가지에 모두 해당하면 FBAR를 제출해야 합니다.',
          { list: [
            '미국인(U.S. person): 시민권자, 영주권자 등 미국 세법상 거주자, 미국 법인·파트너십·LLC·신탁·유산',
            '미국 밖 금융계좌에 재산상 이해관계(financial interest)가 있거나 서명 권한(signature authority)이 있고, 그 계좌들의 합산 가치가 해당 연도 중 한 번이라도 1만 달러를 초과',
          ] },
          { callout: { tone: 'info', text: '1만 달러는 계좌 하나의 금액이 아니라 모든 해외 계좌를 합친 금액입니다. 합계가 기준을 넘으면 잔액이 적은 계좌까지 전부 보고합니다.' } },
          '본인 명의가 아니어도 서명 권한만 있는 계좌(예: 부모님 계좌의 대리 권한, 회사 계좌의 서명권)는 보고 대상이 될 수 있습니다.',
        ],
      },
      {
        h: '어떤 한국 계좌가 포함되나',
        body: [
          { table: {
            headers: ['자산', 'FBAR 보고'],
            rows: [
              ['은행 예금·적금·외화예금', '포함'],
              ['증권사 계좌(주식·채권·ETF 보관 계좌)', '포함 (계좌 단위로 보고)'],
              ['펀드(뮤추얼펀드)', '포함'],
              ['해지환급금이 있는 생명보험·연금보험', '포함'],
              ['퇴직연금(DC·IRP)·연금저축 계좌', '일반적으로 포함 [확인]'],
              ['직접 보유한 한국 부동산', '제외'],
              ['직접 보유한 현금·귀금속·미술품', '제외'],
              ['국민연금 등 사회보장 성격의 급여', '제외'],
              ['금융계좌 밖에서 직접 보유한 비상장 주식', '제외 (Form 8938 대상일 수 있음)'],
            ],
          } },
          '부동산 자체는 대상이 아니지만, 전세보증금을 돌려받거나 매각 대금이 입금된 계좌의 잔액은 그 계좌의 최고 잔액에 포함됩니다.',
        ],
      },
      {
        h: '최고 잔액 계산과 환율',
        body: [
          { list: [
            '계좌별로 해당 연도 중 가장 높았던 잔액을 원화로 확인합니다. 은행·증권사의 거래내역이나 잔액증명으로 확인할 수 있습니다.',
            '원화 금액을 그 해 마지막 날 기준 미국 재무부 환율(Treasury Reporting Rates of Exchange)로 달러 환산합니다.',
            '모든 계좌의 최고 잔액을 더해 1만 달러 초과 여부를 판단합니다.',
          ] },
          { callout: { tone: 'warn', text: '계좌 간 이체로 같은 돈이 여러 계좌의 최고 잔액에 중복 계산되더라도, FBAR에는 계좌별 최고 잔액을 그대로 적습니다. 연말 잔액이 아니라 연중 최고 잔액이 기준입니다.' } },
        ],
      },
      {
        h: '신고 기한과 제출 방법',
        body: [
          { list: [
            '기한은 다음 해 4월 15일이며, 놓치면 10월 15일까지 자동 연장됩니다. 연장 신청서는 필요 없습니다.',
            'FinCEN의 BSA E-Filing 시스템으로 전자 제출합니다. 종이 제출은 FinCEN의 사전 승인이 있어야 합니다.',
            '부부가 모든 해외 계좌를 공동 소유하고 FinCEN Form 114a에 서명했다면, 배우자 한 명이 제출한 FBAR로 갈음할 수 있습니다.',
            '세무 대리인이 대신 제출할 때에도 Form 114a로 권한을 위임합니다. 이 양식은 제출하지 않고 보관합니다.',
          ] },
          '계좌 명의, 계좌번호, 금융기관 이름과 주소, 계좌 종류, 연중 최고 잔액을 확인할 수 있는 자료를 FBAR 기한으로부터 5년간 보관해야 합니다.',
        ],
      },
      {
        h: '미신고 벌금',
        body: [
          { table: {
            headers: ['구분', '민사 벌금 상한', '기준'],
            rows: [
              ['비고의적 위반', '$16,536 [확인]', '보고서(연도) 1건당. 2023년 미국 대법원 Bittner 판결로 계좌별이 아닌 보고서별 부과로 정리'],
              ['고의적 위반', '$165,353 또는 계좌 잔액의 50% 중 큰 금액 [확인]', '위반 1건당. 형사 처벌도 가능'],
            ],
          } },
          { list: [
            '벌금 상한은 매년 물가에 맞춰 조정됩니다.',
            '합리적 사유(reasonable cause)가 있고 계좌 잔액을 정확히 보고하면 비고의적 위반 벌금은 부과되지 않을 수 있습니다.',
            '실제 부과 여부와 금액은 사실관계에 따라 IRS가 판단합니다.',
          ] },
        ],
      },
      {
        h: 'FBAR와 FATCA(Form 8938)의 차이',
        body: [
          'FATCA에 따른 Form 8938은 FBAR와 별개의 의무입니다. FBAR를 냈다고 Form 8938이 면제되지 않고, 그 반대도 마찬가지입니다.',
          { table: {
            headers: ['항목', 'FBAR (FinCEN Form 114)', 'Form 8938'],
            rows: [
              ['제출처', 'FinCEN (BSA E-Filing)', 'IRS (Form 1040에 첨부)'],
              ['기준 금액', '합산 1만 달러 초과 (연중 한 번이라도)', '거주지·신고 유형별 기준 (아래 표)'],
              ['대상', '해외 금융계좌', '해외 금융계좌 + 계좌 밖 해외 금융자산(직접 보유 주식, 파트너십 지분 등)'],
              ['서명 권한만 있는 계좌', '포함', '제외'],
              ['기한', '4월 15일 (10월 15일까지 자동 연장)', '소득세 신고 기한과 동일 (연장 포함)'],
              ['미신고 벌금', '위 벌금 표 참고', '1만 달러, IRS 통지 후 계속 미제출 시 최대 5만 달러 추가'],
            ],
          } },
          'Form 8938 신고 기준 금액은 다음과 같습니다.',
          { table: {
            headers: ['구분', '연말 기준', '연중 최고'],
            rows: [
              ['해외 거주(한국 포함) · 싱글 또는 부부별도신고', '$200,000 초과', '$300,000 초과'],
              ['해외 거주(한국 포함) · 부부공동신고', '$400,000 초과', '$600,000 초과'],
              ['미국 거주 · 싱글 또는 부부별도신고', '$50,000 초과', '$75,000 초과'],
              ['미국 거주 · 부부공동신고', '$100,000 초과', '$150,000 초과'],
            ],
          } },
        ],
      },
      {
        h: '과거에 신고하지 못했다면',
        body: [
          { list: [
            '해외 계좌의 소득을 소득세 신고서에 모두 반영했고 FBAR만 빠뜨렸다면, 지연 사유를 적어 FBAR를 늦게라도 전자 제출하는 방법(Delinquent FBAR Submission Procedures)이 있습니다.',
            '해외 계좌의 이자·배당 등 소득 신고도 빠져 있었다면 Streamlined 간소화 절차를 검토합니다. 한국 거주자는 요건을 충족하면 벌금 없이 정리할 수 있습니다.',
            'IRS의 연락이나 조사가 시작되기 전에 먼저 정리하는 것이 중요합니다.',
          ] },
        ],
      },
    ],

    faq: [
      {
        q: '계좌마다 1만 달러를 넘어야 FBAR 대상인가요?',
        a: '아닙니다. 모든 해외 금융계좌의 연중 최고 잔액을 합친 금액이 1만 달러를 넘으면 대상입니다. 이 경우 잔액이 적은 계좌까지 전부 보고합니다.',
      },
      {
        q: 'FBAR를 내면 세금을 더 내야 하나요?',
        a: '아닙니다. FBAR는 계좌 정보를 알리는 보고서이고 그 자체로 세금이 계산되지 않습니다. 다만 계좌에서 발생한 이자·배당 등은 소득세 신고서에 따로 신고해야 합니다.',
      },
      {
        q: '한국 아파트도 FBAR에 적어야 하나요?',
        a: '직접 보유한 부동산은 FBAR와 Form 8938 대상이 아닙니다. 다만 임대 수입이나 매각 대금이 들어온 계좌는 보고 대상입니다.',
      },
      {
        q: 'FBAR를 냈는데 Form 8938도 내야 하나요?',
        a: '기준을 넘으면 둘 다 제출해야 합니다. 두 보고는 제출처와 기준 금액, 대상 자산이 다른 별개의 의무입니다.',
      },
      {
        q: '부부 공동명의 계좌는 누가 신고하나요?',
        a: '원칙적으로 각자 보고합니다. 모든 해외 계좌가 부부 공동 소유이고 FinCEN Form 114a에 서명한 경우에는 배우자 한 명이 제출한 FBAR로 함께 보고할 수 있습니다.',
      },
      {
        q: '몇 년 동안 FBAR를 내지 않았는데 어떻게 해야 하나요?',
        a: '소득 신고는 정확했고 FBAR만 누락했다면 지연 FBAR 제출을, 소득 신고도 누락됐다면 Streamlined 간소화 절차를 검토합니다. 상황에 따라 적합한 방법이 달라지므로 제출 전에 전문가와 확인하는 것이 안전합니다.',
      },
    ],

    cta: {
      title: 'FBAR·FATCA 신고를 도와드립니다',
      text: '한국 계좌별 최고 잔액 계산부터 전자 제출, 과거 미신고분 정리까지 캘리포니아 CPA가 함께 처리합니다.',
      button: '상담 신청하기',
    },

    disclaimer:
      '본 페이지는 일반적인 정보 제공을 위한 것이며 세무 자문이 아닙니다. 벌금 상한 등 수치는 매년 조정될 수 있으며, 개인의 구체적 상황은 전문가 상담이 필요합니다.',

    sources: [
      { label: 'IRS — Report of Foreign Bank and Financial Accounts (FBAR)', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/report-of-foreign-bank-and-financial-accounts-fbar' },
      { label: 'IRS — Comparison of Form 8938 and FBAR Requirements', url: 'https://www.irs.gov/businesses/comparison-of-form-8938-and-fbar-requirements' },
      { label: 'FinCEN — BSA E-Filing System (FBAR)', url: 'https://bsaefiling.fincen.treas.gov/NoRegFBARFiler.html' },
      { label: 'IRS — Delinquent FBAR Submission Procedures', url: 'https://www.irs.gov/individuals/international-taxpayers/delinquent-fbar-submission-procedures' },
      { label: 'U.S. Treasury — Treasury Reporting Rates of Exchange', url: 'https://fiscaldata.treasury.gov/datasets/treasury-reporting-rates-exchange/treasury-reporting-rates-of-exchange' },
    ],

    related: [
      { path: '/fatca', label: { ko: 'FATCA 신고 가이드(Form 8938)', en: 'FATCA (Form 8938)' } },
      { path: '/streamlined', label: { ko: 'Streamlined 간소화 절차', en: 'Streamlined Procedures' } },
      { path: '/pfic', label: { ko: 'PFIC(해외 펀드 세금)', en: 'PFIC Guide' } },
      { path: '/tax-calendar', label: { ko: '미국 세금신고 일정', en: 'U.S. Tax Calendar' } },
    ],
  },

  en: {
    h1: 'FBAR (Foreign Account Reporting) & FATCA Guide',
    lead:
      'The FBAR (FinCEN Form 114) is a report U.S. citizens, green card holders and other U.S. persons must file when their foreign financial accounts total more than USD 10,000 at any time during the year. It is a disclosure, not a tax, and Korean bank, brokerage and insurance accounts can all count.',
    reviewNote: 'Last updated: November 2026',

    sections: [
      {
        h: 'What the FBAR is',
        body: [
          'The FBAR (Report of Foreign Bank and Financial Accounts) is an annual report filed with FinCEN, a bureau of the U.S. Treasury. It is separate from your income tax return (Form 1040) and is not attached to it.',
          { list: [
            'You report the existence of each account and its maximum value during the year. No tax is due with the FBAR itself.',
            'You must file whether or not the accounts produced taxable income.',
            'Penalties can apply for not filing even when no tax is owed.',
          ] },
        ],
      },
      {
        h: 'Who must file',
        body: [
          'You must file an FBAR if both of these apply:',
          { list: [
            'You are a U.S. person: a citizen, a green card holder or other U.S. tax resident, or a U.S. corporation, partnership, LLC, trust or estate',
            'You have a financial interest in, or signature authority over, financial accounts outside the United States whose combined value exceeded USD 10,000 at any time during the year',
          ] },
          { callout: { tone: 'info', text: 'The USD 10,000 test applies to all foreign accounts combined, not to each account. Once the total is over the threshold, every account is reported, including small ones.' } },
          'Accounts you do not own but can sign on, such as a parent’s account you hold authority over or an employer’s account, can also be reportable.',
        ],
      },
      {
        h: 'Which Korean accounts count',
        body: [
          { table: {
            headers: ['Asset', 'FBAR reporting'],
            rows: [
              ['Bank deposits, installment savings, foreign-currency deposits', 'Reportable'],
              ['Brokerage accounts holding stocks, bonds or ETFs', 'Reportable (at the account level)'],
              ['Mutual funds', 'Reportable'],
              ['Life insurance or annuity policies with a cash value', 'Reportable'],
              ['Retirement pension (DC, IRP) and pension savings accounts', 'Generally reportable [verify]'],
              ['Korean real estate held directly', 'Not reportable'],
              ['Cash, precious metals or art held directly', 'Not reportable'],
              ['Social-security-type benefits such as the National Pension', 'Not reportable'],
              ['Unlisted shares held directly, outside a financial account', 'Not reportable (may be reportable on Form 8938)'],
            ],
          } },
          'Real estate itself is not reported, but a returned jeonse deposit or sale proceeds sitting in an account count toward that account’s maximum value.',
        ],
      },
      {
        h: 'Maximum value and exchange rate',
        body: [
          { list: [
            'For each account, find the highest balance during the year in Korean won, using statements or a balance certificate.',
            'Convert it to U.S. dollars at the Treasury Reporting Rate of Exchange for the last day of that year.',
            'Add the maximum values of all accounts to test the USD 10,000 threshold.',
          ] },
          { callout: { tone: 'warn', text: 'If transfers between accounts cause the same money to appear in more than one account’s maximum, you still report each account’s own maximum. The test uses the highest balance during the year, not the year-end balance.' } },
        ],
      },
      {
        h: 'Deadline and how to file',
        body: [
          { list: [
            'The FBAR is due April 15 of the following year, with an automatic extension to October 15. No extension request is needed.',
            'File electronically through FinCEN’s BSA E-Filing System. Paper filing requires prior approval from FinCEN.',
            'If spouses jointly own all their foreign accounts and have signed FinCEN Form 114a, one spouse’s FBAR can cover both.',
            'A tax professional filing on your behalf is also authorized with Form 114a, which you keep and do not submit.',
          ] },
          'Keep records showing the account name, account number, the institution’s name and address, the account type and the maximum value for five years from the FBAR due date.',
        ],
      },
      {
        h: 'Penalties for not filing',
        body: [
          { table: {
            headers: ['Type', 'Maximum civil penalty', 'Basis'],
            rows: [
              ['Non-willful violation', 'USD 16,536 [verify]', 'Per report (per year). The U.S. Supreme Court’s 2023 Bittner decision confirmed it applies per report, not per account'],
              ['Willful violation', 'The greater of USD 165,353 or 50% of the account balance [verify]', 'Per violation. Criminal penalties can also apply'],
            ],
          } },
          { list: [
            'The maximums are adjusted for inflation each year.',
            'A non-willful penalty may not be imposed if there was reasonable cause and the account balance was properly reported.',
            'Whether a penalty is asserted, and how much, depends on the facts and is decided by the IRS.',
          ] },
        ],
      },
      {
        h: 'FBAR versus FATCA (Form 8938)',
        body: [
          'Form 8938, required under FATCA, is a separate obligation. Filing an FBAR does not satisfy Form 8938, and the reverse is also true.',
          { table: {
            headers: ['Item', 'FBAR (FinCEN Form 114)', 'Form 8938'],
            rows: [
              ['Filed with', 'FinCEN (BSA E-Filing)', 'The IRS, attached to Form 1040'],
              ['Threshold', 'Over USD 10,000 combined at any time in the year', 'Depends on residence and filing status (see below)'],
              ['What is covered', 'Foreign financial accounts', 'Foreign financial accounts plus foreign financial assets held outside an account, such as directly held stock or partnership interests'],
              ['Signature-authority-only accounts', 'Included', 'Not included'],
              ['Due date', 'April 15, automatically extended to October 15', 'Same as the income tax return, including extensions'],
              ['Failure-to-file penalty', 'See the penalty table above', 'USD 10,000, plus up to USD 50,000 for continued failure after IRS notice'],
            ],
          } },
          'The Form 8938 thresholds are:',
          { table: {
            headers: ['Filer', 'Last day of year', 'Any time in year'],
            rows: [
              ['Living abroad (including Korea), single or married filing separately', 'Over USD 200,000', 'Over USD 300,000'],
              ['Living abroad (including Korea), married filing jointly', 'Over USD 400,000', 'Over USD 600,000'],
              ['Living in the U.S., single or married filing separately', 'Over USD 50,000', 'Over USD 75,000'],
              ['Living in the U.S., married filing jointly', 'Over USD 100,000', 'Over USD 150,000'],
            ],
          } },
        ],
      },
      {
        h: 'If you missed past years',
        body: [
          { list: [
            'If all income from the accounts was reported on your tax returns and only the FBAR was missed, you can file it late electronically with an explanation (the Delinquent FBAR Submission Procedures).',
            'If interest, dividends or other income from the accounts was also left off your returns, consider the Streamlined procedures. Taxpayers living in Korea who qualify can catch up with no penalty.',
            'It matters to act before the IRS contacts you or opens an examination.',
          ] },
        ],
      },
    ],

    faq: [
      {
        q: 'Does each account have to exceed USD 10,000?',
        a: 'No. The test is the combined maximum value of all your foreign financial accounts during the year. If the total exceeds USD 10,000, you report every account, including small ones.',
      },
      {
        q: 'Do I owe more tax by filing an FBAR?',
        a: 'No. The FBAR is a disclosure of account information and no tax is computed on it. Interest, dividends and other income from the accounts are reported separately on your income tax return.',
      },
      {
        q: 'Do I report my Korean apartment on the FBAR?',
        a: 'Directly held real estate is not reported on the FBAR or on Form 8938. Accounts that receive rent or sale proceeds are reportable.',
      },
      {
        q: 'I filed an FBAR. Do I also need Form 8938?',
        a: 'If you exceed its thresholds, you file both. The two reports go to different agencies and have different thresholds and covered assets.',
      },
      {
        q: 'Who reports a joint account held by spouses?',
        a: 'Generally each spouse reports it. If all foreign accounts are jointly owned and FinCEN Form 114a has been signed, one spouse’s FBAR can cover both.',
      },
      {
        q: 'I have not filed FBARs for several years. What should I do?',
        a: 'If your income reporting was correct and only FBARs were missed, consider the delinquent FBAR submission route. If income was also unreported, consider the Streamlined procedures. The right route depends on your facts, so confirm with a professional before submitting.',
      },
    ],

    cta: {
      title: 'We can handle your FBAR and FATCA filing',
      text: 'From computing the maximum value of each Korean account to e-filing and cleaning up past years, a California CPA handles it with you.',
      button: 'Request a consultation',
    },

    disclaimer:
      'This page is general information, not tax advice. Penalty maximums and other figures are adjusted over time, and your own situation requires professional advice.',

    sources: [
      { label: 'IRS — Report of Foreign Bank and Financial Accounts (FBAR)', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/report-of-foreign-bank-and-financial-accounts-fbar' },
      { label: 'IRS — Comparison of Form 8938 and FBAR Requirements', url: 'https://www.irs.gov/businesses/comparison-of-form-8938-and-fbar-requirements' },
      { label: 'FinCEN — BSA E-Filing System (FBAR)', url: 'https://bsaefiling.fincen.treas.gov/NoRegFBARFiler.html' },
      { label: 'IRS — Delinquent FBAR Submission Procedures', url: 'https://www.irs.gov/individuals/international-taxpayers/delinquent-fbar-submission-procedures' },
      { label: 'U.S. Treasury — Treasury Reporting Rates of Exchange', url: 'https://fiscaldata.treasury.gov/datasets/treasury-reporting-rates-exchange/treasury-reporting-rates-of-exchange' },
    ],

    related: [
      { path: '/fatca', label: { ko: 'FATCA 신고 가이드(Form 8938)', en: 'FATCA (Form 8938)' } },
      { path: '/streamlined', label: { ko: 'Streamlined 간소화 절차', en: 'Streamlined Procedures' } },
      { path: '/pfic', label: { ko: 'PFIC(해외 펀드 세금)', en: 'PFIC Guide' } },
      { path: '/tax-calendar', label: { ko: '미국 세금신고 일정', en: 'U.S. Tax Calendar' } },
    ],
  },
};
