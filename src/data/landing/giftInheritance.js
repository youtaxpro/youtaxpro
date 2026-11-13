// 한국에서 받은 증여·상속과 미국 신고 (Form 3520 / Form 709) 랜딩 콘텐츠.
// 금액 출처: Rev. Proc. 2025-32(2026년), Rev. Proc. 2026-35(2027년), Form 3520 Instructions.
// [확인] 표시는 내부 검수용이며 화면에는 노출되지 않는다(landing/index.js 에서 제거).

const related = [
  { path: '/korea-real-estate', label: { ko: '한국 부동산 매각과 미국 세금', en: 'Selling Korean Real Estate' } },
  { path: '/fbar', label: { ko: 'FBAR · FATCA 신고', en: 'FBAR & FATCA' } },
  { path: '/streamlined', label: { ko: 'Streamlined 간소화 절차', en: 'Streamlined Procedures' } },
  { path: '/exit-tax', label: { ko: '국적포기세(Exit Tax)', en: 'U.S. Exit Tax' } },
  { path: '/irs-notice', label: { ko: 'IRS 통지서·세무조사 대응', en: 'IRS Notices' } },
];

const sources = (ko) => [
  { label: ko ? 'IRS — Form 3520 및 작성 안내' : 'IRS — About Form 3520', url: 'https://www.irs.gov/forms-pubs/about-form-3520' },
  { label: ko ? 'IRS — 외국인으로부터 받은 증여' : 'IRS — Gifts from foreign person', url: 'https://www.irs.gov/businesses/gifts-from-foreign-person' },
  { label: ko ? 'IRS — Form 709 (증여세 신고서)' : 'IRS — About Form 709', url: 'https://www.irs.gov/forms-pubs/about-form-709' },
  { label: ko ? 'IRS — 증여세 자주 묻는 질문' : 'IRS — Frequently asked questions on gift taxes', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/frequently-asked-questions-on-gift-taxes' },
  { label: 'Rev. Proc. 2026-35 (2027 inflation adjustments)', url: 'https://www.irs.gov/pub/irs-drop/rp-26-35.pdf' },
];

export default {
  slug: 'gift-inheritance',
  updated: '2026-11-11', // 내용을 고칠 때마다 갱신 (sitemap lastmod · Article dateModified)
  name: 'Form 3520',
  summary: {
    ko: '한국 부모님께 받은 증여·상속은 미국 소득세 대상이 아니지만, 연 10만 달러를 넘으면 Form 3520 보고가 필요합니다.',
    en: 'Gifts and inheritances from Korean family are not U.S. income, but over USD 100,000 a year they must be reported on Form 3520.',
  },

  ko: {
    h1: '한국에서 받은 증여·상속과 미국 신고 (Form 3520)',
    lead:
      '한국에 계신 부모님께 증여나 상속을 받으면 미국에 세금을 내야 할까요? 대부분 세금은 없지만 "보고"를 빠뜨리면 받은 금액의 최대 25%가 벌금으로 부과될 수 있습니다. 받는 경우와 주는 경우를 나누어 정리했습니다.',
    reviewNote: '최종 업데이트: 2026년 11월 · 2027년 인플레이션 조정(Rev. Proc. 2026-35) 반영',

    sections: [
      {
        h: '핵심 요약',
        body: [
          { list: [
            '미국은 증여·상속에 대해 "주는 사람(증여자·피상속인)"에게 과세합니다. 받는 사람은 미국 소득세를 내지 않습니다.',
            '주는 사람이 미국 납세자가 아닌 한국 거주 가족이고 재산이 미국 밖에 있다면, 미국 증여세·상속세도 원칙적으로 발생하지 않습니다.',
            '다만 받는 사람이 미국 시민권자·영주권자라면, 한 해 동안 외국인 개인(또는 외국 상속재산)으로부터 받은 합계가 USD 100,000를 넘을 때 Form 3520으로 보고해야 합니다.',
          ] },
          { callout: { tone: 'warn', text: 'Form 3520은 세금을 내는 서식이 아니라 정보보고 서식입니다. 그런데 미제출·지연 제출 시 벌금은 받은 금액의 월 5%, 최대 25%입니다. 세금이 0원이어도 벌금은 클 수 있습니다.' } },
        ],
      },
      {
        h: 'Form 3520 — 누가, 언제 제출하나',
        body: [
          { table: {
            headers: ['항목', '내용'],
            rows: [
              ['보고 기준', '같은 해에 외국인 개인 또는 외국 상속재산으로부터 받은 증여·상속 합계가 USD 100,000 초과'],
              ['합산 범위', '서로 관련된 사람(예: 아버지와 어머니)에게서 받은 금액은 합산해 판단'],
              ['외국 법인·파트너십으로부터 받은 경우', '훨씬 낮은 기준 적용 — 2027년 USD 21,240 초과 시 보고 [확인]'],
              ['제출 기한', '소득세 신고 기한과 동일(연장 포함). 2026년에 받은 증여는 2027년 신고 시즌에 보고'],
              ['제출 방법', 'Form 1040에 첨부하지 않고 별도로 제출'],
            ],
          } },
          '10만 달러를 넘으면 개별 증여 건 중 USD 5,000를 초과하는 건을 각각 기재합니다. 현금뿐 아니라 부동산·주식·보험금 수령 등도 공정시장가치로 환산해 포함합니다.',
          { callout: { tone: 'info', text: '여러 번에 나누어 받아도 연간 합계로 판단합니다. 부모님이 각각 6만 달러씩 보내셨다면 합계 12만 달러로 보고 대상입니다.' } },
        ],
      },
      {
        h: '받은 재산의 취득가액(Basis) — 나중에 팔 때 중요합니다',
        body: [
          { table: {
            headers: ['구분', '취득가액', '의미'],
            rows: [
              ['상속받은 재산', '사망일 현재 공정시장가치(step-up)', '피상속인 생전의 가치 상승분에는 미국 양도소득세가 붙지 않음'],
              ['증여받은 재산', '증여자의 취득가액을 그대로 승계(carryover)', '증여자가 오래전 싸게 산 재산이면 팔 때 양도차익이 커짐'],
            ],
          } },
          '가치가 많이 오른 한국 부동산·주식이라면, 미국 세금만 놓고 보면 생전 증여보다 상속이 유리한 경우가 많습니다. 다만 한국 상속세·증여세까지 함께 계산해야 합니다.',
        ],
      },
      {
        h: '미국 납세자가 "주는" 경우 — Form 709',
        body: [
          '미국 시민권자·영주권자(미국 거주자로 보는 경우)가 가족에게 재산을 줄 때는 증여자에게 신고 의무가 있습니다.',
          { table: {
            headers: ['항목', '2026년', '2027년'],
            rows: [
              ['연간 증여 면제액 (수증자 1인당)', 'USD 19,000', 'USD 20,000'],
              ['미국 시민권자가 아닌 배우자에게 주는 증여 면제액', 'USD 194,000', 'USD 201,000'],
              ['통합 증여·상속 면제액 (평생)', 'USD 15,000,000', 'USD 15,480,000'],
            ],
          } },
          { list: [
            '연간 면제액을 넘는 증여는 Form 709로 신고합니다. 신고한다고 바로 세금이 나오는 것은 아니고, 평생 면제액에서 차감됩니다.',
            '배우자가 미국 시민권자면 배우자 간 증여는 무제한 공제되지만, 배우자가 한국 국적이면 위 표의 한도까지만 면제됩니다.',
            '부부가 함께 증여하는 gift-splitting을 쓰려면 금액이 면제액 이하여도 Form 709가 필요합니다.',
          ] },
        ],
      },
      {
        h: '한국 세금과의 관계',
        body: [
          { list: [
            '한국은 받는 사람(수증자·상속인)에게 증여세·상속세를 부과합니다. 미국과 과세 주체가 반대입니다.',
            '한미 간에는 상속·증여세 조세조약이 없습니다. 한국에서 낸 증여세·상속세는 미국 소득세의 외국납부세액공제 대상이 아닙니다.',
            '받은 뒤 한국 계좌에 예치하면 FBAR(합계 1만 달러 초과)와 Form 8938 신고 대상이 됩니다.',
            '받은 재산에서 생기는 이자·배당·임대료·양도차익은 그때부터 미국 소득세 신고 대상입니다.',
          ] },
          { callout: { tone: 'info', text: '주는 사람이 과거 미국 시민권·장기 영주권을 포기한 covered expatriate라면, 받는 미국 납세자에게 별도의 세금(IRC 2801)이 부과될 수 있습니다. 2027년 기준 연 USD 20,000 초과분이 대상입니다.' } },
        ],
      },
      {
        h: '자주 하는 실수',
        body: [
          { list: [
            '"세금이 없으니 신고도 필요 없다"고 생각해 Form 3520을 내지 않는 경우',
            '부모님 각각에게 받은 금액을 따로 계산해 10만 달러 미만이라고 판단하는 경우',
            '부모님이 한국 법인 계좌에서 직접 송금 — 법인으로부터의 증여는 낮은 기준이 적용되고 소득으로 재분류될 위험이 있음',
            '증여받은 한국 부동산을 팔 때 증여 당시 시가를 취득가액으로 잘못 적용',
            '부모님 명의 계좌에 본인이 서명 권한만 가진 경우에도 FBAR 대상이 될 수 있다는 점을 놓침',
          ] },
        ],
      },
    ],

    faq: [
      { q: '한국 부모님께 1억 원을 받았습니다. 미국에 세금을 내야 하나요?', a: '받은 사람은 미국 소득세를 내지 않습니다. 1억 원은 통상 10만 달러에 미치지 않아 Form 3520 보고 대상도 아닙니다. 다만 같은 해 부모님 두 분에게 받은 금액을 합산해 10만 달러를 넘는지 확인해야 하고, 예치한 계좌는 FBAR 신고 대상이 될 수 있습니다.' },
      { q: '과거에 받은 증여를 Form 3520으로 보고하지 않았습니다. 어떻게 하나요?', a: '늦게라도 제출하면서 합리적 사유(reasonable cause)를 소명하거나, 소득세·FBAR 미신고가 함께 있다면 Streamlined 절차 안에서 정리하는 방법을 검토합니다. 상황에 따라 벌금 위험이 달라지므로 제출 전에 상담을 권합니다.' },
      { q: '한국 아파트를 상속받았습니다. 미국에 신고할 것이 있나요?', a: '상속가액이 10만 달러를 넘으면 Form 3520으로 보고합니다. 부동산 자체는 FBAR·Form 8938 대상이 아니지만, 임대하면 임대소득을, 매각하면 양도차익을 신고해야 합니다. 취득가액은 사망일 시가이므로 감정평가 등 근거 자료를 보관하세요.' },
      { q: '미국 시민권자인 제가 한국인 배우자에게 생활비를 보내도 증여세 신고를 하나요?', a: '부양을 위한 통상적인 생활비는 증여로 보지 않는 것이 일반적입니다. 다만 배우자 명의로 자산을 이전하는 경우에는 비시민권자 배우자 연간 면제액(2026년 USD 194,000, 2027년 USD 201,000)을 넘으면 Form 709 신고가 필요합니다.' },
    ],

    cta: {
      title: '증여·상속, 받기 전에 먼저 확인하세요',
      text: '받는 시기와 방법에 따라 보고 의무와 이후 양도세가 달라집니다. 이미 받으셨다면 누락된 보고가 없는지 점검해 드립니다.',
      button: '상담 신청하기',
    },
    disclaimer:
      '본 페이지는 일반적인 정보 제공을 위한 것이며 세무 자문이 아닙니다. 금액·기준·서식은 과세연도에 따라 달라지며, 개인의 구체적 상황에 대한 판단은 전문가 상담이 필요합니다.',
    sources: sources(true),
    related,
  },

  en: {
    h1: 'Gifts and Inheritances from Korea: U.S. Reporting (Form 3520)',
    lead:
      'A gift or inheritance from family in Korea is usually not taxable in the U.S. — but failing to report it can cost up to 25% of the amount received. Here is what to file when you receive, and when you give.',
    reviewNote: 'Last updated: November 2026 · reflects the 2027 inflation adjustments (Rev. Proc. 2026-35)',

    sections: [
      {
        h: 'Key points',
        body: [
          { list: [
            'The U.S. taxes the giver (donor or decedent), not the recipient. Receiving a gift or bequest is not income.',
            'If the giver is a non-U.S. family member in Korea and the property is outside the U.S., U.S. gift and estate tax generally do not apply.',
            'A U.S. citizen or green card holder who receives more than USD 100,000 in a year from a foreign individual or foreign estate must report it on Form 3520.',
          ] },
          { callout: { tone: 'warn', text: 'Form 3520 is an information return, not a tax form. The penalty for late or missing filing is 5% of the gift per month, up to 25% — even when no tax is due.' } },
        ],
      },
      {
        h: 'Form 3520 — who files and when',
        body: [
          { table: {
            headers: ['Item', 'Rule'],
            rows: [
              ['Threshold', 'More than USD 100,000 in aggregate during the year from a foreign individual or foreign estate'],
              ['Aggregation', 'Gifts from related persons (e.g., both parents) are added together'],
              ['From foreign corporations or partnerships', 'A much lower threshold — more than USD 21,240 for 2027 [verify]'],
              ['Due date', 'Same as your income tax return, including extensions. Gifts received in 2026 are reported in the 2027 filing season'],
              ['How', 'Filed separately — not attached to Form 1040'],
            ],
          } },
          'Once over the threshold, each gift above USD 5,000 is listed separately. Real estate, securities and similar property count at fair market value.',
        ],
      },
      {
        h: 'Basis of what you receive',
        body: [
          { table: {
            headers: ['Type', 'Basis', 'Effect'],
            rows: [
              ['Inherited property', 'Fair market value at date of death (step-up)', 'Appreciation during the decedent’s life escapes U.S. capital gains tax'],
              ['Gifted property', 'Donor’s basis carries over', 'A low historic cost means a larger gain when you sell'],
            ],
          } },
          'For highly appreciated Korean real estate or shares, inheritance is often better than a lifetime gift for U.S. tax purposes — but Korean gift and inheritance tax must be modeled too.',
        ],
      },
      {
        h: 'When a U.S. taxpayer gives — Form 709',
        body: [
          { table: {
            headers: ['Item', '2026', '2027'],
            rows: [
              ['Annual exclusion (per recipient)', 'USD 19,000', 'USD 20,000'],
              ['Annual exclusion for gifts to a non-citizen spouse', 'USD 194,000', 'USD 201,000'],
              ['Lifetime basic exclusion amount', 'USD 15,000,000', 'USD 15,480,000'],
            ],
          } },
          { list: [
            'Gifts above the annual exclusion are reported on Form 709. No tax is normally due; the excess reduces your lifetime exclusion.',
            'Gifts to a U.S.-citizen spouse are unlimited; gifts to a non-citizen spouse are capped as shown above.',
            'Gift-splitting between spouses requires Form 709 even below the exclusion.',
          ] },
        ],
      },
      {
        h: 'Interaction with Korean tax',
        body: [
          { list: [
            'Korea taxes the recipient — the opposite of the U.S. system.',
            'There is no U.S.–Korea estate and gift tax treaty. Korean gift or inheritance tax is not creditable against U.S. income tax.',
            'Funds deposited in Korean accounts become reportable on the FBAR (over USD 10,000 in aggregate) and possibly Form 8938.',
            'Interest, dividends, rent and gains from the property are U.S.-taxable from then on.',
          ] },
          { callout: { tone: 'info', text: 'If the giver is a covered expatriate, the U.S. recipient may owe a separate tax under IRC 2801 on amounts above USD 20,000 (2027).' } },
        ],
      },
    ],

    faq: [
      { q: 'My parents in Korea gave me KRW 100 million. Do I owe U.S. tax?', a: 'No income tax is due, and KRW 100 million is normally below the USD 100,000 Form 3520 threshold. Add together gifts from both parents in the same year, and remember the account holding the funds may be FBAR-reportable.' },
      { q: 'I never filed Form 3520 for a past gift. What now?', a: 'Options include a late filing with a reasonable-cause statement or, if income tax returns and FBARs were also missed, resolving everything under the Streamlined procedures. The right route depends on your facts.' },
      { q: 'I inherited an apartment in Korea. What do I report?', a: 'Form 3520 if the value exceeds USD 100,000. The property itself is not on the FBAR or Form 8938, but rent and any later gain are reportable. Keep an appraisal supporting the date-of-death value.' },
    ],

    cta: {
      title: 'Check before you receive',
      text: 'Timing and method change both the reporting and the later capital gains tax. If you have already received a gift, we can check for missed filings.',
      button: 'Request a consultation',
    },
    disclaimer:
      'This page provides general information, not tax advice. Amounts, thresholds and forms change by tax year; decisions about your situation require professional advice.',
    sources: sources(false),
    related,
  },
};
