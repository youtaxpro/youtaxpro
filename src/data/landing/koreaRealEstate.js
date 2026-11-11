// 한국 부동산 매각과 미국 세금 랜딩 콘텐츠.
// [확인] 표시는 내부 검수용이며 화면에는 노출되지 않는다(landing/index.js 에서 제거).

const related = [
  { path: '/gift-inheritance', label: { ko: '증여·상속과 Form 3520', en: 'Gifts & Inheritances (Form 3520)' } },
  { path: '/feie', label: { ko: '해외근로소득 공제(FEIE)', en: 'FEIE Guide' } },
  { path: '/fbar', label: { ko: 'FBAR · FATCA 신고', en: 'FBAR & FATCA' } },
  { path: '/tax-calendar', label: { ko: '2027년 신고 일정·기준 금액', en: '2027 Tax Calendar' } },
];

const sources = (ko) => [
  { label: ko ? 'IRS Topic 701 — 주택 매각' : 'IRS Topic 701 — Sale of your home', url: 'https://www.irs.gov/taxtopics/tc701' },
  { label: ko ? 'IRS Publication 523 (주택 매각)' : 'IRS Publication 523, Selling Your Home', url: 'https://www.irs.gov/forms-pubs/about-publication-523' },
  { label: ko ? 'IRS — 외국납부세액공제' : 'IRS — Foreign Tax Credit', url: 'https://www.irs.gov/individuals/international-taxpayers/foreign-tax-credit' },
  { label: ko ? 'IRS Topic 559 — 순투자소득세(NIIT)' : 'IRS Topic 559 — Net Investment Income Tax', url: 'https://www.irs.gov/taxtopics/tc559' },
  { label: ko ? 'IRS — 연평균 환율' : 'IRS — Yearly average currency exchange rates', url: 'https://www.irs.gov/individuals/international-taxpayers/yearly-average-currency-exchange-rates' },
];

export default {
  slug: 'korea-real-estate',
  updated: '2026-11-11', // 내용을 고칠 때마다 갱신 (sitemap lastmod · Article dateModified)
  name: { ko: '부동산', en: 'Real Estate' },
  summary: {
    ko: '한국 아파트를 팔면 한국에서 비과세여도 미국에는 양도차익을 신고해야 합니다. 주택 양도 공제, 환율, 외국납부세액공제 정리.',
    en: 'Selling Korean real estate is reportable in the U.S. even when Korea exempts it. The home-sale exclusion, exchange rates and the Foreign Tax Credit.',
  },

  ko: {
    h1: '한국 부동산 매각과 미국 세금',
    lead:
      '미국 시민권자·영주권자는 전 세계 소득에 대해 미국에 신고합니다. 한국 아파트를 팔아 한국에서 1세대 1주택 비과세를 받았더라도 미국 신고는 별개입니다. 계산 방법과 줄일 수 있는 방법을 정리했습니다.',
    reviewNote: '최종 업데이트: 2026년 11월',

    sections: [
      {
        h: '한국에서 비과세여도 미국에는 신고합니다',
        body: [
          '한국 부동산 양도차익은 미국 신고서의 Form 8949와 Schedule D에 기재합니다. 한국의 비과세·감면 규정은 미국 세법에 영향을 주지 않습니다.',
          { list: [
            '1년 초과 보유: 장기 양도소득 — 연방 세율 0% / 15% / 20%',
            '1년 이하 보유: 단기 양도소득 — 일반 소득세율',
            '소득이 일정 수준을 넘으면 순투자소득세(NIIT) 3.8%가 추가될 수 있음',
          ] },
          { callout: { tone: 'info', text: '부동산 자체는 FBAR·Form 8938 신고 대상이 아닙니다. 하지만 매각 대금이 한국 계좌에 들어오면 그 계좌는 신고 대상이 됩니다.' } },
        ],
      },
      {
        h: '거주 주택이라면 — 주택 양도소득 공제 (Section 121)',
        body: [
          '미국 밖에 있는 주택에도 동일하게 적용됩니다.',
          { table: {
            headers: ['요건', '내용'],
            rows: [
              ['소유·거주 요건', '매각일 이전 5년 중 2년 이상 소유하고, 2년 이상 주된 거주지로 사용'],
              ['공제 한도', '1인 USD 250,000 / 부부 공동신고 USD 500,000'],
              ['사용 빈도', '원칙적으로 2년에 한 번'],
              ['임대했던 기간이 있으면', '감가상각분은 공제되지 않고 과세(최고 25%)'],
            ],
          } },
          { callout: { tone: 'warn', text: '실제로 거주하지 않고 전세·월세를 준 주택은 한국에서 1세대 1주택이어도 미국의 주택 양도 공제를 받지 못할 수 있습니다.' } },
        ],
      },
      {
        h: '달러로 계산합니다 — 환율이 만드는 차익',
        body: [
          '미국 신고는 달러 기준입니다. 취득가액은 취득일 환율로, 양도가액은 양도일 환율로 각각 환산합니다.',
          { table: {
            headers: ['구분', '원화', '적용 환율(예시)', '달러 환산'],
            rows: [
              ['취득 (과거)', '6억 원', '1,100원', 'USD 545,455'],
              ['양도 (현재)', '9억 원', '1,400원', 'USD 642,857'],
              ['양도차익', '3억 원', '—', 'USD 97,402'],
            ],
          } },
          '원화 기준으로 50% 올랐지만 달러 기준 차익은 약 18%입니다. 반대로 원화 가치가 오른 기간에는 원화 차익이 없어도 달러 차익이 생길 수 있습니다.',
          { callout: { tone: 'warn', text: '원화 대출을 상환할 때도 환율 변동에 따른 외환차익(Section 988)이 별도로 발생할 수 있습니다. 대출이 있는 부동산은 반드시 함께 검토해야 합니다. [확인]' } },
        ],
      },
      {
        h: '한국 양도소득세는 외국납부세액공제로',
        body: [
          { list: [
            '한국에서 낸 양도소득세·지방소득세는 Form 1116으로 미국 세금에서 공제할 수 있습니다.',
            '한국 세율이 미국보다 높은 경우가 많아, 한국에서 과세된 거래는 미국 추가 세금이 없거나 적은 편입니다.',
            '문제는 한국에서 비과세·감면을 받은 경우입니다. 공제할 한국 세금이 없으므로 주택 양도 공제 한도를 넘는 차익에는 미국 세금이 그대로 나옵니다.',
            'NIIT(3.8%)는 외국납부세액공제로 상쇄되지 않습니다.',
          ] },
        ],
      },
      {
        h: '임대하던 부동산을 파는 경우',
        body: [
          { list: [
            '임대 기간에는 미국 신고서(Schedule E)에서 감가상각을 해야 합니다. 미국 밖 주거용 임대 부동산의 내용연수는 30년입니다(2018년 이전 취득분은 40년). [확인]',
            '감가상각을 실제로 신고하지 않았더라도, 매각 시에는 "했어야 할" 감가상각만큼 취득가액이 줄어듭니다.',
            '감가상각 상당액은 최고 25% 세율로 과세됩니다(unrecaptured Section 1250 gain).',
            '전세 보증금은 소득이 아니지만, 보증금을 운용해 얻은 이자는 소득입니다.',
          ] },
        ],
      },
      {
        h: '매각 전 체크리스트',
        body: [
          { list: [
            '매매계약서·취득세·중개수수료·자본적 지출(확장·대수선) 영수증 확보 — 취득가액에 가산',
            '취득일·양도일 환율 확인',
            '실거주 기간 증빙(주민등록, 공과금 등)',
            '상속·증여로 취득했다면 당시 평가 자료',
            '매각 대금 입금 계좌의 FBAR·Form 8938 신고 준비',
            '매각 연도의 예상 세액 계산 — 필요하면 분기별 예납(estimated tax)',
          ] },
        ],
      },
    ],

    faq: [
      { q: '한국에서 1세대 1주택 비과세를 받았습니다. 미국에도 세금이 없나요?', a: '아닙니다. 미국은 자체 기준으로 판단합니다. 5년 중 2년 이상 소유·거주했다면 1인 25만 달러(부부 50만 달러)까지 공제되고, 초과 차익은 과세됩니다. 한국에서 낸 세금이 없으므로 외국납부세액공제도 쓸 수 없습니다.' },
      { q: '영주권을 받기 전에 산 한국 아파트도 신고 대상인가요?', a: '네. 미국 납세자가 된 이후에 매각하면 전체 보유 기간의 차익이 원칙적으로 과세 대상입니다. 취득가액은 실제 취득 당시 금액(취득일 환율 환산)을 씁니다.' },
      { q: '부모님께 상속받은 한국 부동산을 팔면 어떻게 되나요?', a: '상속 재산의 취득가액은 사망일 시가입니다. 상속 직후 매각하면 차익이 거의 없을 수 있습니다. 상속 당시 감정평가서나 기준시가 자료를 보관해 두세요. 상속가액이 10만 달러를 넘으면 Form 3520 보고도 필요합니다.' },
      { q: '매각 대금을 미국으로 송금하면 세금이 또 붙나요?', a: '송금 자체에는 세금이 없습니다. 다만 매각 대금이 예치된 한국 계좌는 FBAR·Form 8938 대상이며, 은행의 고액 송금 보고는 세금과 무관한 절차입니다.' },
    ],

    cta: {
      title: '매각 전에 미국 세금부터 계산해 보세요',
      text: '계약 전에 예상 세액과 공제 가능 여부를 확인하면 매각 시기와 방법을 조정할 수 있습니다.',
      button: '상담 신청하기',
    },
    disclaimer:
      '본 페이지는 일반적인 정보 제공을 위한 것이며 세무 자문이 아닙니다. 예시의 환율·금액은 설명을 위한 가정이며, 개인의 구체적 상황에 대한 판단은 전문가 상담이 필요합니다.',
    sources: sources(true),
    related,
  },

  en: {
    h1: 'Selling Korean Real Estate: U.S. Tax Guide',
    lead:
      'U.S. citizens and green card holders report worldwide income. A sale that is tax-exempt in Korea is still reportable in the U.S. Here is how the gain is computed and how to reduce it.',
    reviewNote: 'Last updated: November 2026',

    sections: [
      {
        h: 'Exempt in Korea does not mean exempt in the U.S.',
        body: [
          'Gain on Korean real estate is reported on Form 8949 and Schedule D. Korean exemptions have no effect on U.S. tax.',
          { list: [
            'Held more than one year: long-term rates of 0% / 15% / 20%',
            'Held one year or less: ordinary rates',
            'The 3.8% Net Investment Income Tax may apply at higher incomes',
          ] },
          { callout: { tone: 'info', text: 'Real estate itself is not reported on the FBAR or Form 8938 — but the Korean account receiving the proceeds is.' } },
        ],
      },
      {
        h: 'Home-sale exclusion (Section 121)',
        body: [
          { table: {
            headers: ['Requirement', 'Rule'],
            rows: [
              ['Ownership and use', 'Owned and used as your main home for at least 2 of the 5 years before sale'],
              ['Exclusion', 'USD 250,000 single / USD 500,000 married filing jointly'],
              ['Frequency', 'Generally once every two years'],
              ['Prior rental use', 'Depreciation is not excluded and is taxed at up to 25%'],
            ],
          } },
          { callout: { tone: 'warn', text: 'A home you rented out and never lived in may qualify for Korea’s one-home exemption yet fail the U.S. use test.' } },
        ],
      },
      {
        h: 'Gain is computed in dollars',
        body: [
          'Translate the purchase price at the purchase-date rate and the sale price at the sale-date rate.',
          { table: {
            headers: ['', 'KRW', 'Rate (example)', 'USD'],
            rows: [
              ['Purchase', '600 million', '1,100', '545,455'],
              ['Sale', '900 million', '1,400', '642,857'],
              ['Gain', '300 million', '—', '97,402'],
            ],
          } },
          'A 50% gain in won is about 18% in dollars here; the reverse can also happen.',
          { callout: { tone: 'warn', text: 'Repaying a won-denominated mortgage can create a separate currency gain under Section 988. [verify]' } },
        ],
      },
      {
        h: 'Korean capital gains tax and the Foreign Tax Credit',
        body: [
          { list: [
            'Korean capital gains tax and local income tax are creditable on Form 1116.',
            'If Korea exempted the sale, there is no foreign tax to credit, so gain above the Section 121 exclusion is fully taxed in the U.S.',
            'The Foreign Tax Credit does not offset the 3.8% NIIT.',
          ] },
        ],
      },
      {
        h: 'Selling a former rental',
        body: [
          { list: [
            'Foreign residential rental property is depreciated over 30 years (40 years if placed in service before 2018). [verify]',
            'Basis is reduced by depreciation allowed or allowable — even if you never claimed it.',
            'That amount is taxed at up to 25% (unrecaptured Section 1250 gain).',
          ] },
        ],
      },
    ],

    faq: [
      { q: 'Korea exempted my sale under the one-household-one-home rule. Is it tax-free in the U.S. too?', a: 'Not automatically. If you owned and lived in the home for 2 of the last 5 years, up to USD 250,000 (USD 500,000 jointly) is excluded; the rest is taxable, with no Korean tax to credit.' },
      { q: 'I bought the apartment before getting my green card. Is the whole gain taxable?', a: 'Generally yes — the full gain since purchase, using your actual cost translated at the purchase-date rate.' },
      { q: 'What if I inherited the property?', a: 'Your basis is the fair market value at the date of death, so a prompt sale often produces little gain. Keep appraisal evidence, and file Form 3520 if the inheritance exceeded USD 100,000.' },
    ],

    cta: {
      title: 'Run the U.S. numbers before you sell',
      text: 'Knowing the expected tax and available exclusions before signing lets you adjust timing and structure.',
      button: 'Request a consultation',
    },
    disclaimer:
      'This page provides general information, not tax advice. Exchange rates and amounts in examples are illustrative; decisions about your situation require professional advice.',
    sources: sources(false),
    related,
  },
};
