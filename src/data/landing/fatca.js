// FATCA — Form 8938 (Statement of Specified Foreign Financial Assets) 서비스 페이지 콘텐츠.
//
// ⚠️ 세무사 검수 대상: [확인] 표시 항목은 게시 전 임아름 CPA가 최신 IRS 자료로 검증해야 함.

const related = [
  { path: '/fbar', label: { ko: 'FBAR 신고 가이드', en: 'FBAR Guide' } },
  { path: '/pfic', label: { ko: 'PFIC(해외 펀드 세금)', en: 'PFIC Guide' } },
  { path: '/streamlined', label: { ko: 'Streamlined 간소화 절차', en: 'Streamlined Procedures' } },
  { path: '/tax-return', label: { ko: '미국 소득세 신고 대행', en: 'Income Tax Return' } },
];

const sources = [
  { label: 'IRS — About Form 8938', url: 'https://www.irs.gov/forms-pubs/about-form-8938' },
  { label: 'IRS — Do I Need to File Form 8938?', url: 'https://www.irs.gov/businesses/corporations/do-i-need-to-file-form-8938-statement-of-specified-foreign-financial-assets' },
  { label: 'IRS — Comparison of Form 8938 and FBAR Requirements', url: 'https://www.irs.gov/businesses/comparison-of-form-8938-and-fbar-requirements' },
  { label: 'IRS — Basic Questions and Answers on Form 8938', url: 'https://www.irs.gov/businesses/corporations/basic-questions-and-answers-on-form-8938' },
];

export default {
  slug: 'fatca',
  updated: '2026-11-12',
  name: { ko: 'FATCA', en: 'FATCA' },
  summary: {
    ko: '해외 금융자산이 기준 금액을 넘으면 소득세 신고서에 첨부하는 Form 8938. 한국 거주자 기준 금액, 대상 자산, 벌금 정리.',
    en: 'Form 8938 is attached to your tax return when foreign financial assets exceed the threshold. Thresholds for Korea residents, covered assets and penalties.',
  },

  ko: {
    h1: 'FATCA 신고 가이드 (Form 8938)',
    lead:
      'Form 8938은 해외 금융자산이 기준 금액을 넘는 미국 납세자가 소득세 신고서(Form 1040)에 첨부해 IRS에 제출하는 보고서입니다. 한국에 거주하는 싱글 납세자는 연말 기준 20만 달러 또는 연중 최고 30만 달러를 넘으면 대상이며, FBAR와는 별개로 제출해야 합니다.',
    reviewNote: '최종 업데이트: 2026년 11월',

    sections: [
      {
        h: 'Form 8938이란',
        body: [
          'FATCA(해외금융계좌 납세순응법)에 따라 2011 과세연도부터 도입된 보고입니다. 한국 금융기관도 FATCA 협정에 따라 미국인 고객의 계좌 정보를 한국 국세청을 거쳐 IRS에 제공하고 있어, 누락하면 IRS가 불일치를 확인할 수 있습니다.',
          { list: [
            '소득세 신고서에 첨부해 함께 제출하며, 기한도 소득세 신고 기한(연장 포함)과 같습니다.',
            '해당 연도에 소득세 신고 의무가 없으면 자산이 기준을 넘어도 Form 8938을 낼 필요가 없습니다.',
            'FBAR를 제출했더라도 기준을 넘으면 Form 8938을 따로 제출해야 합니다.',
          ] },
        ],
      },
      {
        h: '신고 기준 금액',
        body: [
          { table: {
            headers: ['구분', '연말 기준', '연중 최고'],
            rows: [
              ['해외 거주(한국 포함) · 싱글 또는 부부별도신고', '$200,000 초과', '$300,000 초과'],
              ['해외 거주(한국 포함) · 부부공동신고', '$400,000 초과', '$600,000 초과'],
              ['미국 거주 · 싱글 또는 부부별도신고', '$50,000 초과', '$75,000 초과'],
              ['미국 거주 · 부부공동신고', '$100,000 초과', '$150,000 초과'],
            ],
          } },
          '두 금액 중 하나만 넘어도 대상입니다. 해외 거주 기준을 적용받으려면 해외에 과세상 주거지가 있고 거주 요건(해외 거주자 또는 12개월 중 330일 이상 해외 체류)을 충족해야 합니다.',
        ],
      },
      {
        h: '대상 자산과 제외 자산',
        body: [
          { table: {
            headers: ['자산', 'Form 8938'],
            rows: [
              ['한국 은행·증권 계좌', '대상'],
              ['한국 펀드·ETF', '대상 (Form 8621에 보고했다면 중복 기재 생략 가능)'],
              ['해지환급금이 있는 보험·연금보험', '대상'],
              ['금융계좌 밖에서 직접 보유한 한국 주식(비상장 주식 포함)', '대상'],
              ['한국 법인·파트너십 지분', '대상'],
              ['퇴직연금·개인연금 계좌', '일반적으로 대상 [확인]'],
              ['직접 보유한 부동산', '제외 (법인을 통해 보유하면 그 지분이 대상)'],
              ['직접 보유한 현금·귀금속·미술품', '제외'],
              ['국민연금 등 사회보장 성격의 급여', '제외'],
            ],
          } },
          { callout: { tone: 'info', text: 'Form 3520, 5471, 8621, 8865에 이미 보고한 자산은 Form 8938에 다시 상세히 적지 않고 해당 양식을 제출했다는 사실만 표시합니다. 다만 그 자산의 가치는 기준 금액 판단에 포함됩니다.' } },
        ],
      },
      {
        h: '가치 평가와 환율',
        body: [
          { list: [
            '자산별로 연중 최고 가치를 합리적으로 추정해 달러로 보고합니다. 금융계좌는 정기 거래명세서의 잔액을 사용할 수 있습니다.',
            '원화는 그 해 마지막 날 기준 미국 재무부 환율로 환산합니다.',
            '부부 공동 소유 자산은 신고 유형에 따라 전액 또는 절반을 반영합니다.',
          ] },
        ],
      },
      {
        h: '미제출 시 불이익',
        body: [
          { table: {
            headers: ['항목', '내용'],
            rows: [
              ['미제출 벌금', '1만 달러'],
              ['계속 미제출', 'IRS 통지 후 90일이 지나면 30일마다 1만 달러 추가, 최대 5만 달러'],
              ['과소신고 가산세', '미보고 해외 금융자산과 관련된 세액 과소신고분의 40%'],
              ['제척기간', '미보고 자산에서 5천 달러 초과 소득이 누락되면 6년으로 연장. Form 8938을 제출하지 않으면 해당 연도 신고서의 제척기간이 진행되지 않을 수 있음'],
            ],
          } },
          '합리적 사유가 있으면 벌금이 면제될 수 있으나, 외국 법률상 비밀 유지 의무는 합리적 사유로 인정되지 않습니다.',
        ],
      },
      {
        h: 'FBAR와 무엇이 다른가',
        body: [
          { table: {
            headers: ['항목', 'Form 8938', 'FBAR'],
            rows: [
              ['제출처', 'IRS (소득세 신고서 첨부)', 'FinCEN (별도 전자 제출)'],
              ['기준', '거주지·신고 유형별 20만~60만 달러(해외 거주)', '합산 1만 달러 초과'],
              ['계좌 밖 자산', '포함 (직접 보유 주식, 지분 등)', '제외'],
              ['서명 권한만 있는 계좌', '제외', '포함'],
            ],
          } },
          '많은 한국 거주 납세자는 FBAR만 대상이고, 자산이 커지면 두 보고가 모두 필요해집니다.',
        ],
      },
    ],

    faq: [
      {
        q: 'FBAR를 냈는데 Form 8938도 내야 하나요?',
        a: '해외 금융자산이 Form 8938 기준 금액을 넘으면 둘 다 제출해야 합니다. 제출처와 대상 자산이 다른 별개의 의무입니다.',
      },
      {
        q: '한국 아파트도 Form 8938에 적나요?',
        a: '직접 보유한 부동산은 대상이 아닙니다. 다만 한국 법인을 통해 보유하고 있다면 그 법인 지분이 보고 대상이 됩니다.',
      },
      {
        q: '국민연금도 보고 대상인가요?',
        a: '국민연금처럼 외국 정부의 사회보장 제도에 따른 급여는 Form 8938 대상에서 제외됩니다.',
      },
      {
        q: '소득세 신고를 하지 않는 해에도 Form 8938을 내야 하나요?',
        a: '아닙니다. 해당 연도에 소득세 신고 의무가 없으면 Form 8938도 제출하지 않습니다. FBAR는 소득세 신고 의무와 관계없이 기준을 넘으면 제출해야 합니다.',
      },
      {
        q: '과거에 Form 8938을 빠뜨렸다면 어떻게 하나요?',
        a: '관련 소득까지 누락됐다면 Streamlined 간소화 절차를, 소득은 모두 신고했고 양식만 빠졌다면 지연 정보 보고서 제출 절차를 검토합니다.',
      },
    ],

    cta: {
      title: 'Form 8938 대상인지 확인해 드립니다',
      text: '한국 자산 목록을 알려 주시면 FBAR와 Form 8938 해당 여부를 함께 판단하고 신고서에 반영합니다.',
      button: '상담 신청하기',
    },

    disclaimer:
      '본 페이지는 일반적인 정보 제공을 위한 것이며 세무 자문이 아닙니다. 기준 금액과 대상 자산 판단은 개인의 구체적 상황에 따라 달라지므로 전문가 상담이 필요합니다.',

    sources,
    related,
  },

  en: {
    h1: 'FATCA Reporting Guide (Form 8938)',
    lead:
      'Form 8938 is a statement U.S. taxpayers attach to Form 1040 when their foreign financial assets exceed a threshold. A single taxpayer living in Korea must file when those assets exceed USD 200,000 at year-end or USD 300,000 at any time in the year, and it is required in addition to the FBAR.',
    reviewNote: 'Last updated: November 2026',

    sections: [
      {
        h: 'What Form 8938 is',
        body: [
          'The form was introduced under FATCA starting with tax year 2011. Korean financial institutions also report U.S. customers’ accounts to the IRS through Korea’s tax authority under the FATCA agreement, so omissions can be matched.',
          { list: [
            'It is attached to and filed with the income tax return, and is due when the return is due, including extensions.',
            'If you are not required to file an income tax return for the year, you do not file Form 8938 even if your assets exceed the threshold.',
            'Filing an FBAR does not replace Form 8938 when the threshold is exceeded.',
          ] },
        ],
      },
      {
        h: 'Filing thresholds',
        body: [
          { table: {
            headers: ['Filer', 'Last day of year', 'Any time in year'],
            rows: [
              ['Living abroad (including Korea), single or married filing separately', 'Over USD 200,000', 'Over USD 300,000'],
              ['Living abroad (including Korea), married filing jointly', 'Over USD 400,000', 'Over USD 600,000'],
              ['Living in the U.S., single or married filing separately', 'Over USD 50,000', 'Over USD 75,000'],
              ['Living in the U.S., married filing jointly', 'Over USD 100,000', 'Over USD 150,000'],
            ],
          } },
          'Exceeding either figure triggers the requirement. To use the living-abroad thresholds you need a tax home abroad and must meet a residence test (bona fide resident, or 330 days abroad in a 12-month period).',
        ],
      },
      {
        h: 'What is and is not reported',
        body: [
          { table: {
            headers: ['Asset', 'Form 8938'],
            rows: [
              ['Korean bank and brokerage accounts', 'Reportable'],
              ['Korean funds and ETFs', 'Reportable (need not be listed again if reported on Form 8621)'],
              ['Insurance or annuity policies with a cash value', 'Reportable'],
              ['Korean stock held directly, outside a financial account (including unlisted shares)', 'Reportable'],
              ['Interests in Korean corporations or partnerships', 'Reportable'],
              ['Retirement and personal pension accounts', 'Generally reportable [verify]'],
              ['Real estate held directly', 'Not reportable (an interest in an entity holding it is)'],
              ['Cash, precious metals or art held directly', 'Not reportable'],
              ['Social-security-type benefits such as the National Pension', 'Not reportable'],
            ],
          } },
          { callout: { tone: 'info', text: 'Assets already reported on Form 3520, 5471, 8621 or 8865 are not detailed again on Form 8938; you indicate that those forms were filed. Their value still counts toward the threshold.' } },
        ],
      },
      {
        h: 'Valuation and exchange rate',
        body: [
          { list: [
            'Report a reasonable estimate of each asset’s maximum value during the year in U.S. dollars. Periodic account statements can be used for financial accounts.',
            'Convert won at the U.S. Treasury rate for the last day of the year.',
            'Jointly owned assets are counted in full or in half depending on filing status.',
          ] },
        ],
      },
      {
        h: 'Consequences of not filing',
        body: [
          { table: {
            headers: ['Item', 'Detail'],
            rows: [
              ['Failure-to-file penalty', 'USD 10,000'],
              ['Continued failure', 'USD 10,000 for each 30 days after 90 days from IRS notice, up to USD 50,000'],
              ['Understatement penalty', '40% of an understatement of tax attributable to undisclosed foreign financial assets'],
              ['Statute of limitations', 'Extended to six years if more than USD 5,000 of income from such assets is omitted. The period for the return may not start to run if Form 8938 is not filed'],
            ],
          } },
          'Penalties can be waived for reasonable cause, but a foreign secrecy law is not accepted as reasonable cause.',
        ],
      },
      {
        h: 'How it differs from the FBAR',
        body: [
          { table: {
            headers: ['Item', 'Form 8938', 'FBAR'],
            rows: [
              ['Filed with', 'The IRS, attached to the tax return', 'FinCEN, e-filed separately'],
              ['Threshold', 'USD 200,000 to 600,000 by residence and filing status (abroad)', 'Over USD 10,000 combined'],
              ['Assets outside an account', 'Included (directly held stock, entity interests)', 'Not included'],
              ['Signature-authority-only accounts', 'Not included', 'Included'],
            ],
          } },
          'Many taxpayers in Korea are subject only to the FBAR; as assets grow, both reports become necessary.',
        ],
      },
    ],

    faq: [
      {
        q: 'I filed an FBAR. Do I also need Form 8938?',
        a: 'If your foreign financial assets exceed the Form 8938 threshold, you file both. They go to different agencies and cover different assets.',
      },
      {
        q: 'Do I list my Korean apartment on Form 8938?',
        a: 'Directly held real estate is not reported. If you hold it through a Korean entity, your interest in that entity is reportable.',
      },
      {
        q: 'Is the National Pension reportable?',
        a: 'Benefits under a foreign government’s social security program, such as the National Pension, are excluded from Form 8938.',
      },
      {
        q: 'Do I file Form 8938 in a year I do not file a tax return?',
        a: 'No. If you have no income tax filing requirement for the year, Form 8938 is not required. The FBAR is required whenever its threshold is exceeded, regardless of the tax return.',
      },
      {
        q: 'What if I missed Form 8938 in past years?',
        a: 'If related income was also omitted, consider the Streamlined procedures. If all income was reported and only the form was missed, consider the delinquent information return route.',
      },
    ],

    cta: {
      title: 'We can check whether Form 8938 applies to you',
      text: 'Send us a list of your Korean assets and we will assess both the FBAR and Form 8938 and reflect them in your return.',
      button: 'Request a consultation',
    },

    disclaimer:
      'This page is general information, not tax advice. Thresholds and what counts as a reportable asset depend on your own facts and require professional advice.',

    sources,
    related,
  },
};
