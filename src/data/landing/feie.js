// 해외근로소득 공제 (Foreign Earned Income Exclusion, FEIE) 랜딩 콘텐츠.
//
// ⚠️ 세무사 검수 대상: [확인] 표시된 금액·연도·서식·기준은 게시 전에
//    임아름 CPA가 최신 IRS 자료로 검증해야 함. 각 항목에 IRS 출처 링크 있음.
//
// 렌더링: src/pages/LandingPage.vue (블록 타입: 문자열 | {list} | {table} | {callout})

export default {
  slug: 'feie',
  name: 'FEIE',

  ko: {
    h1: '해외근로소득 공제 (FEIE) 완벽 가이드',
    lead:
      '해외에서 일하는 미국 시민권자·영주권자는 근로소득의 일정 금액까지 미국 과세소득에서 제외할 수 있습니다. 한국 거주자가 놓치기 쉬운 요건과 선택 전략을 캘리포니아 CPA가 정리했습니다.',
    reviewNote: '아래 금액·연도·서식은 최신 IRS 자료 기준으로 최종 확인 후 게시됩니다.',

    sections: [
      {
        h: 'FEIE란 무엇인가',
        body: [
          'FEIE(Foreign Earned Income Exclusion)는 해외에서 벌어들인 근로소득 중 연간 한도까지를 미국 연방소득세 과세대상에서 제외해 주는 제도입니다. IRS Form 2555를 Form 1040에 첨부하여 신청합니다.',
          '제외 대상은 "근로소득(earned income)"에 한합니다. 급여·자영업 소득은 포함되지만 배당·이자·자본이득·연금·사회보장급여는 포함되지 않습니다.',
          { callout: { tone: 'info', text: 'FEIE를 적용해도 미국 신고 의무 자체는 사라지지 않습니다. 소득이 신고 기준을 넘으면 Form 1040을 제출해야 하며, FBAR·FATCA(Form 8938) 신고 의무도 별개로 유지됩니다.' } },
        ],
      },
      {
        h: '누가 받을 수 있나 — 3가지 요건',
        body: [
          '아래 세 가지를 모두 충족해야 합니다.',
          { list: [
            '① 해외 근로소득이 있을 것 (Foreign earned income)',
            '② 세무상 거주지(Tax Home)가 외국에 있을 것 — 주된 근무지가 한국 등 외국',
            '③ 다음 중 하나를 충족: 실제 거주 판정(Bona Fide Residence Test) 또는 물리적 체류 판정(Physical Presence Test)',
          ] },
          { table: {
            headers: ['판정', '기준', '주로 해당되는 경우'],
            rows: [
              ['실제 거주 판정 (Bona Fide Residence)', '한 과세연도 전체를 외국의 실제 거주자로 지냄', '한국에 생활 기반을 두고 장기 거주하는 교민·주재원'],
              ['물리적 체류 판정 (Physical Presence)', '연속된 12개월 중 외국에서 330일(전체 일수) 이상 체류 [확인]', '이주 첫 해, 또는 미국 방문이 잦은 경우'],
            ],
          } },
          { callout: { tone: 'warn', text: '미국 방문 일수가 많으면 Physical Presence Test의 330일 요건을 못 채울 수 있습니다. 출입국 기록으로 일수를 정확히 계산해야 합니다.' } },
        ],
      },
      {
        h: '공제 한도 (연도별)',
        body: [
          'FEIE 한도는 물가에 연동되어 매년 인상됩니다. [확인] — 아래 수치는 최종 검증 후 확정합니다.',
          { table: {
            headers: ['과세연도', 'FEIE 한도(1인)'],
            rows: [
              ['2023', 'USD 120,000'],
              ['2024', 'USD 126,500'],
              ['2025', 'USD 130,000 [확인]'],
            ],
          } },
          '부부가 모두 요건을 충족하면 각자 한도를 적용받습니다. 부분 연도(이주 첫 해 등)에는 해외 체류 일수 비율로 한도가 안분됩니다.',
          { callout: { tone: 'info', text: '해외주거비 공제(Foreign Housing Exclusion/Deduction)를 FEIE와 함께 적용할 수 있습니다. 기준 금액을 초과하는 임차료·관리비 등이 대상이며, 서울은 IRS instructions에서 별도의 높은 상한이 인정됩니다. [확인]' } },
        ],
      },
      {
        h: '신청 방법',
        body: [
          { list: [
            'Form 2555를 작성해 Form 1040에 첨부',
            '해외 거주·체류 사실, 근무 내용, 소득 내역을 기재',
            '전자신고(e-file) 가능. 신고 기한은 통상 4월 15일이며 해외 거주자는 6월 15일로 자동 연장, 10월 15일까지 추가 연장 가능 [확인]',
          ] },
          '한 번 FEIE를 선택하면 이후 연도에도 자동 유지됩니다. 반대로 한 번 철회(revoke)하면 IRS 승인 없이는 5년간 다시 선택할 수 없으므로 신중해야 합니다.',
        ],
      },
      {
        h: '한국 거주자가 특히 챙길 점',
        body: [
          { list: [
            '원화 소득은 IRS가 인정하는 환율(연평균 또는 거래일 환율)로 미국 달러 환산해 신고합니다.',
            'FEIE와 외국납부세액공제(Foreign Tax Credit, Form 1116)는 같은 소득에 중복 적용할 수 없습니다. 한국 소득세율이 미국보다 높은 구간에서는 FTC만 쓰는 편이 유리할 수 있습니다.',
            '한미조세조약이 있지만, 미국 시민권자·영주권자에게는 이른바 "saving clause" 때문에 조약만으로 과세가 면제되지는 않습니다.',
            'FEIE로 과세소득이 줄어도 자영업자는 자영업세(Self-Employment Tax)가 그대로 부과됩니다. 한미 사회보장협정(Totalization Agreement) 적용 여부를 확인해야 합니다.',
            '자녀세액공제(Child Tax Credit) 등 일부 환급형 공제는 FEIE를 적용하면 제한될 수 있어, FTC와 비교가 필요합니다.',
          ] },
        ],
      },
      {
        h: '자주 하는 실수',
        body: [
          { list: [
            '"FEIE를 쓰면 미국 세금이 무조건 0" — 한도 초과분, 근로 외 소득, 자영업세는 그대로 과세됩니다.',
            'FBAR(FinCEN 114)·FATCA(Form 8938)를 FEIE로 갈음할 수 있다고 오해 — 완전히 별개의 신고입니다.',
            '미국 체류 일수를 대략 계산해 330일 요건을 잘못 충족했다고 판단',
            '첫 해에 유리하다고 FEIE를 선택했다가, 이후 한국 세금이 늘어 FTC가 유리해졌을 때 이미 철회 5년 제한에 걸림',
            'Form 2555 미첨부 상태로 소득만 누락 신고 — 추후 IRS 통지 및 가산세 위험',
          ] },
        ],
      },
    ],

    faq: [
      {
        q: 'FEIE와 외국납부세액공제(FTC) 중 무엇이 유리한가요?',
        a: '소득 수준, 한국에서 실제로 낸 세금, 자녀세액공제 등 다른 공제와의 상호작용에 따라 달라집니다. 일반적으로 한국 실효세율이 미국보다 높으면 FTC가, 낮거나 한국 세금이 적으면 FEIE가 유리한 경향이 있으나, 실제로는 두 방식을 모두 계산해 비교해야 정확합니다.',
      },
      {
        q: '한국 회사에서 원화로 급여를 받는데 FEIE 대상인가요?',
        a: '근로의 대가로 받은 소득이고 세무상 거주지가 한국이며 거주·체류 요건을 충족하면 대상이 됩니다. 원화 급여는 IRS 인정 환율로 달러 환산해 신고합니다.',
      },
      {
        q: '미국을 자주 오가는데 FEIE를 받을 수 있나요?',
        a: 'Physical Presence Test는 연속 12개월 중 외국 체류 330일 이상을 요구하므로 미국 체류가 잦으면 충족이 어려울 수 있습니다. 다만 한국에 생활 기반을 둔 장기 거주자는 Bona Fide Residence Test로 인정받을 수 있습니다. 출입국 기록으로 판정하는 것이 안전합니다.',
      },
      {
        q: '과거에 FEIE를 신청하지 않았는데 소급 적용이 되나요?',
        a: '기한 후 신고나 수정신고를 통해 적용할 수 있는 경우가 있으며, 미신고 상태라면 Streamlined 절차와 함께 검토합니다. 개별 상황에 따라 방법과 위험이 다르므로 상담이 필요합니다.',
      },
    ],

    cta: {
      title: 'FEIE·FTC, 어느 쪽이 유리한지 계산해 드립니다',
      text: '한국 소득·미국 신고 상황을 바탕으로 두 방식을 모두 계산해 최적안을 제시합니다.',
      button: '상담 신청하기',
    },

    disclaimer:
      '본 페이지는 일반적인 정보 제공을 위한 것이며 세무 자문이 아닙니다. 금액·기준·서식은 과세연도에 따라 달라지며, 개인의 구체적 상황에 대한 판단은 전문가 상담이 필요합니다.',

    sources: [
      { label: 'IRS — Foreign Earned Income Exclusion', url: 'https://www.irs.gov/individuals/international-taxpayers/foreign-earned-income-exclusion' },
      { label: 'IRS — Form 2555 및 작성 안내', url: 'https://www.irs.gov/forms-pubs/about-form-2555' },
      { label: 'IRS Publication 54 (해외 거주 미국 시민·영주권자 세금 안내)', url: 'https://www.irs.gov/forms-pubs/about-publication-54' },
      { label: 'IRS — Foreign Housing Exclusion or Deduction', url: 'https://www.irs.gov/individuals/international-taxpayers/foreign-housing-exclusion-or-deduction' },
    ],

    related: [
      { path: '/exit-tax', label: { ko: '국적포기세(Exit Tax)', en: 'U.S. Exit Tax' } },
      { path: '/fbar', label: { ko: 'FBAR 신고 안내', en: 'FBAR Filing' } },
      { path: '/streamlined', label: { ko: 'Streamlined 간소화 절차', en: 'Streamlined Procedures' } },
    ],
  },

  en: {
    h1: 'Foreign Earned Income Exclusion (FEIE): A Practical Guide',
    lead:
      'U.S. citizens and green card holders working abroad can exclude a capped amount of earned income from U.S. taxable income. A California CPA explains the tests and the FEIE-vs-FTC choice that Korea-based taxpayers most often get wrong.',
    reviewNote: 'Amounts, years, and form references below are finalized after review against current IRS guidance.',

    sections: [
      {
        h: 'What FEIE is',
        body: [
          'The Foreign Earned Income Exclusion lets you exclude foreign earned income up to an annual cap from U.S. federal income tax. You claim it by attaching IRS Form 2555 to Form 1040.',
          'Only earned income qualifies — wages and self-employment income count; dividends, interest, capital gains, pensions, and Social Security do not.',
          { callout: { tone: 'info', text: 'FEIE does not remove your filing obligation. If your income exceeds the filing threshold you still file Form 1040, and FBAR and FATCA (Form 8938) reporting are separate requirements.' } },
        ],
      },
      {
        h: 'Who qualifies — three requirements',
        body: [
          'You must meet all three:',
          { list: [
            '1. You have foreign earned income',
            '2. Your tax home is in a foreign country (your main place of work is Korea or another country)',
            '3. You meet either the Bona Fide Residence Test or the Physical Presence Test',
          ] },
          { table: {
            headers: ['Test', 'Standard', 'Typical fit'],
            rows: [
              ['Bona Fide Residence', 'A bona fide resident of a foreign country for an entire tax year', 'Long-term residents and assignees based in Korea'],
              ['Physical Presence', 'Present in a foreign country 330 full days in a consecutive 12-month period [verify]', 'First year abroad, or frequent U.S. travel'],
            ],
          } },
          { callout: { tone: 'warn', text: 'Frequent U.S. trips can break the 330-day Physical Presence Test. Count days from entry/exit records.' } },
        ],
      },
      {
        h: 'Exclusion cap (by year)',
        body: [
          'The FEIE cap is indexed for inflation and rises each year. [verify] — figures confirmed after review.',
          { table: {
            headers: ['Tax year', 'FEIE cap (per person)'],
            rows: [
              ['2023', 'USD 120,000'],
              ['2024', 'USD 126,500'],
              ['2025', 'USD 130,000 [verify]'],
            ],
          } },
          'If both spouses qualify, each gets a separate cap. For a partial year the cap is prorated by qualifying days abroad.',
          { callout: { tone: 'info', text: 'The Foreign Housing Exclusion/Deduction can be claimed alongside FEIE for qualifying housing costs above a base amount. Seoul has a higher limit in the IRS instructions. [verify]' } },
        ],
      },
      {
        h: 'How to claim it',
        body: [
          { list: [
            'Complete Form 2555 and attach it to Form 1040',
            'Report your foreign residence/presence, work, and income',
            'E-filing is available. The deadline is generally April 15, automatically extended to June 15 for taxpayers abroad, with a further extension to October 15 [verify]',
          ] },
          'Once elected, FEIE carries forward automatically. If you revoke it, you cannot re-elect for 5 years without IRS approval — so revoke with care.',
        ],
      },
      {
        h: 'What Korea-based taxpayers should watch',
        body: [
          { list: [
            'Convert KRW income to USD at an IRS-accepted exchange rate (yearly average or transaction-date).',
            'FEIE and the Foreign Tax Credit (Form 1116) cannot both be applied to the same income. Where Korean rates exceed U.S. rates, FTC alone can be better.',
            'The U.S.–Korea tax treaty exists, but the saving clause means it does not, by itself, exempt U.S. citizens/green card holders from U.S. tax.',
            'FEIE reduces income tax but self-employment tax still applies to self-employed filers. Check the U.S.–Korea Totalization Agreement.',
            'Some refundable credits (e.g., the Child Tax Credit) can be limited when FEIE is used — compare with FTC.',
          ] },
        ],
      },
      {
        h: 'Common mistakes',
        body: [
          { list: [
            'Assuming FEIE zeroes out all U.S. tax — income above the cap, non-earned income, and self-employment tax are still taxed.',
            'Treating FBAR / FATCA as covered by FEIE — they are entirely separate filings.',
            'Estimating U.S. days loosely and wrongly claiming the 330-day test.',
            'Electing FEIE early, then being stuck with the 5-year revocation limit when FTC later becomes better.',
            'Omitting income without attaching Form 2555 — risking IRS notices and penalties.',
          ] },
        ],
      },
    ],

    faq: [
      {
        q: 'FEIE or the Foreign Tax Credit — which is better?',
        a: 'It depends on your income level, the tax you actually paid in Korea, and interaction with other credits. As a rule of thumb, a higher Korean effective rate favors FTC and a lower one favors FEIE, but both should be computed and compared.',
      },
      {
        q: 'I am paid in KRW by a Korean employer — does FEIE apply?',
        a: 'Yes, if it is compensation for services, your tax home is Korea, and you meet a residence/presence test. Report KRW wages converted to USD at an accepted rate.',
      },
      {
        q: 'I travel to the U.S. often — can I still use FEIE?',
        a: 'The Physical Presence Test needs 330 foreign days in a 12-month period, so heavy U.S. travel makes it hard. Long-term Korea residents may still qualify under the Bona Fide Residence Test. Decide based on entry/exit records.',
      },
      {
        q: 'I never claimed FEIE in past years — can it be applied retroactively?',
        a: 'Sometimes, via a late or amended return, and if returns are unfiled it is reviewed together with the Streamlined procedures. The path and risks vary by situation, so a consultation is needed.',
      },
    ],

    cta: {
      title: 'We calculate FEIE vs FTC for your situation',
      text: 'We run both methods against your Korean income and U.S. filing profile and recommend the better one.',
      button: 'Request a consultation',
    },

    disclaimer:
      'This page is general information, not tax advice. Amounts, thresholds, and forms change by tax year, and your specific situation requires professional review.',

    sources: [
      { label: 'IRS — Foreign Earned Income Exclusion', url: 'https://www.irs.gov/individuals/international-taxpayers/foreign-earned-income-exclusion' },
      { label: 'IRS — About Form 2555', url: 'https://www.irs.gov/forms-pubs/about-form-2555' },
      { label: 'IRS Publication 54 (Tax Guide for U.S. Citizens and Residents Abroad)', url: 'https://www.irs.gov/forms-pubs/about-publication-54' },
      { label: 'IRS — Foreign Housing Exclusion or Deduction', url: 'https://www.irs.gov/individuals/international-taxpayers/foreign-housing-exclusion-or-deduction' },
    ],

    related: [
      { path: '/exit-tax', label: { ko: '국적포기세(Exit Tax)', en: 'U.S. Exit Tax' } },
      { path: '/fbar', label: { ko: 'FBAR 신고 안내', en: 'FBAR Filing' } },
      { path: '/streamlined', label: { ko: 'Streamlined 간소화 절차', en: 'Streamlined Procedures' } },
    ],
  },
};
