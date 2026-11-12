// 수정 신고(Form 1040-X) 서비스 페이지 콘텐츠.
//
// ⚠️ 세무사 검수 대상: [확인] 표시 항목은 게시 전 임아름 CPA가 최신 IRS 자료로 검증해야 함.

const related = [
  { path: '/tax-return', label: { ko: '미국 소득세 신고 대행', en: 'Income Tax Return' } },
  { path: '/streamlined', label: { ko: 'Streamlined 간소화 절차', en: 'Streamlined Procedures' } },
  { path: '/irs-notice', label: { ko: 'IRS 통지서 대응', en: 'IRS Notices' } },
  { path: '/feie', label: { ko: '해외근로소득 공제(FEIE)', en: 'FEIE Guide' } },
];

const sources = [
  { label: 'IRS — About Form 1040-X', url: 'https://www.irs.gov/forms-pubs/about-form-1040x' },
  { label: 'IRS — Topic No. 308, Amended Returns', url: 'https://www.irs.gov/taxtopics/tc308' },
  { label: 'IRS — Where’s My Amended Return?', url: 'https://www.irs.gov/filing/wheres-my-amended-return' },
  { label: 'IRS — Time You Can Claim a Credit or Refund', url: 'https://www.irs.gov/filing/time-you-can-claim-a-credit-or-refund' },
];

export default {
  slug: 'amended-return',
  updated: '2026-11-12',
  name: { ko: '수정 신고', en: 'Amended Return' },
  summary: {
    ko: '이미 제출한 미국 세금신고서의 누락·오류를 Form 1040-X로 바로잡는 방법. 환급 청구 기한과 해외 소득 누락 시 주의점.',
    en: 'How to correct a filed U.S. return with Form 1040-X, the refund claim deadlines, and what to watch when foreign income was left out.',
  },

  ko: {
    h1: '미국 세금 수정 신고 (Form 1040-X)',
    lead:
      '수정 신고는 이미 제출한 소득세 신고서에 누락이나 오류가 있을 때 Form 1040-X로 바로잡는 절차입니다. 환급을 받으려면 원칙적으로 원래 신고서를 제출한 날부터 3년 또는 세금을 납부한 날부터 2년 중 늦은 날까지 청구해야 합니다.',
    reviewNote: '최종 업데이트: 2026년 11월',

    sections: [
      {
        h: '수정 신고가 필요한 경우',
        body: [
          { list: [
            '한국 이자·배당·임대·양도 소득 등 신고에서 빠진 소득이 있는 경우',
            '신고 유형(Filing Status)이나 부양가족을 잘못 적은 경우',
            '받을 수 있었던 공제·세액공제를 놓친 경우 (예: 외국납부세액공제, 자녀 세액공제)',
            '해외근로소득 공제와 외국납부세액공제 중 선택을 바꾸려는 경우',
            '신고 후 수정된 서류(정정된 원천징수 자료 등)를 받은 경우',
          ] },
          { callout: { tone: 'info', text: '단순 계산 오류나 첨부 서류 누락은 대개 IRS가 직접 정정하거나 추가 제출을 요청하므로 수정 신고가 필요 없습니다.' } },
        ],
      },
      {
        h: '환급 청구 기한',
        body: [
          { table: {
            headers: ['기준', '기한'],
            rows: [
              ['일반 원칙', '원래 신고서 제출일부터 3년, 또는 세금 납부일부터 2년 중 늦은 날'],
              ['기한 전에 제출한 신고서', '신고 기한일에 제출한 것으로 보고 3년을 계산'],
              ['외국납부세액공제 관련 환급', '해당 연도 신고 기한부터 10년의 특례 기간 적용 [확인]'],
            ],
          } },
          '기한이 지나면 환급액이 있어도 받을 수 없습니다. 반대로 추가로 낼 세금이 있는 수정 신고는 가능한 한 빨리 제출해야 이자와 가산세가 줄어듭니다.',
        ],
      },
      {
        h: '제출 방법과 처리 기간',
        body: [
          { list: [
            '당해 연도와 직전 2개 연도는 Form 1040-X를 전자 제출할 수 있습니다. 그 이전 연도는 우편으로 제출합니다.',
            '연도별로 각각 별도의 Form 1040-X를 작성하고, 변경된 양식과 스케줄을 첨부합니다.',
            '처리에는 보통 8~12주, 길면 16주까지 걸립니다.',
            '제출 약 3주 후부터 IRS의 "Where’s My Amended Return?"에서 진행 상태를 확인할 수 있습니다.',
            '주(State) 신고서를 냈다면 연방 수정 내용에 맞춰 주 신고서도 수정해야 할 수 있습니다.',
          ] },
        ],
      },
      {
        h: '해외 소득·자산이 빠졌을 때 주의할 점',
        body: [
          { list: [
            '해외 계좌 소득과 FBAR·Form 8938 같은 정보 보고가 함께 누락된 경우, 수정 신고서만 조용히 제출하면 정보 보고 미제출 벌금이 그대로 남을 수 있습니다.',
            '이런 경우에는 Streamlined 간소화 절차나 지연 정보 보고서 제출 절차가 더 적합할 수 있습니다.',
            '해외근로소득 공제를 철회하면 원칙적으로 5년간 IRS 승인 없이 다시 선택할 수 없습니다.',
          ] },
          { callout: { tone: 'warn', text: '어느 절차로 정리할지는 제출 전에 정해야 합니다. 수정 신고서를 먼저 내면 이후 선택지가 줄어들 수 있습니다.' } },
        ],
      },
      {
        h: '추가 세금이 나오는 경우',
        body: [
          { list: [
            '추가 세액에는 원래 납부 기한부터 이자가 붙습니다.',
            'IRS가 먼저 발견하기 전에 스스로 수정하면 정확성 관련 가산세를 피할 가능성이 높아집니다.',
            '한 번에 납부하기 어렵다면 분할 납부를 신청할 수 있습니다.',
          ] },
        ],
      },
    ],

    faq: [
      {
        q: '수정 신고를 하면 세무조사를 받게 되나요?',
        a: '수정 신고 자체가 조사를 뜻하지는 않습니다. 다만 IRS는 수정 내용을 검토하며, 환급액이 크거나 근거가 부족하면 추가 자료를 요청할 수 있습니다.',
      },
      {
        q: '몇 년 전 신고서까지 수정할 수 있나요?',
        a: '추가 세금을 내는 수정은 기간 제한 없이 제출할 수 있습니다. 환급을 받는 수정은 원칙적으로 제출일부터 3년 또는 납부일부터 2년 중 늦은 날까지입니다.',
      },
      {
        q: '수정 신고도 전자 제출이 되나요?',
        a: '당해 연도와 직전 2개 연도의 Form 1040-X는 전자 제출이 가능합니다.',
      },
      {
        q: '외국납부세액공제를 놓쳤는데 지금 받을 수 있나요?',
        a: '외국납부세액공제와 관련된 환급 청구에는 일반 3년보다 긴 특례 기간이 적용될 수 있습니다. 해당 연도와 납부 내역을 확인해 가능 여부를 판단합니다.',
      },
    ],

    cta: {
      title: '수정 신고가 맞는 방법인지 먼저 확인하세요',
      text: '기존 신고서와 누락 내용을 보내 주시면 수정 신고, Streamlined 등 적합한 절차를 판단해 드립니다.',
      button: '상담 신청하기',
    },

    disclaimer:
      '본 페이지는 일반적인 정보 제공을 위한 것이며 세무 자문이 아닙니다. 환급 청구 기한과 절차 선택은 개인의 구체적 상황에 따라 달라지므로 전문가 상담이 필요합니다.',

    sources,
    related,
  },

  en: {
    h1: 'Amending a U.S. Tax Return (Form 1040-X)',
    lead:
      'An amended return corrects omissions or errors on an income tax return you have already filed, using Form 1040-X. To get a refund you generally must file within three years of filing the original return or two years of paying the tax, whichever is later.',
    reviewNote: 'Last updated: November 2026',

    sections: [
      {
        h: 'When to amend',
        body: [
          { list: [
            'Income was left off, such as Korean interest, dividends, rent or gains',
            'The filing status or dependents were wrong',
            'A deduction or credit was missed, such as the Foreign Tax Credit or the child tax credit',
            'You want to change between the FEIE and the Foreign Tax Credit',
            'You received corrected documents after filing',
          ] },
          { callout: { tone: 'info', text: 'Simple math errors or missing attachments usually do not need an amended return; the IRS corrects them or asks for the missing item.' } },
        ],
      },
      {
        h: 'Refund claim deadlines',
        body: [
          { table: {
            headers: ['Rule', 'Deadline'],
            rows: [
              ['General rule', 'Three years from filing the original return, or two years from paying the tax, whichever is later'],
              ['Returns filed early', 'Treated as filed on the due date for the three-year count'],
              ['Refunds tied to the Foreign Tax Credit', 'A special ten-year period from the due date of the return for that year [verify]'],
            ],
          } },
          'Once the period closes, a refund cannot be paid. An amended return that shows more tax should be filed as soon as possible to limit interest and penalties.',
        ],
      },
      {
        h: 'How to file and how long it takes',
        body: [
          { list: [
            'Form 1040-X can be e-filed for the current year and the two prior years. Earlier years are mailed.',
            'Prepare a separate Form 1040-X for each year and attach the forms and schedules that changed.',
            'Processing generally takes 8 to 12 weeks and can take up to 16.',
            'About three weeks after filing you can track it with the IRS tool "Where’s My Amended Return?"',
            'If you filed a state return, it may need amending to match.',
          ] },
        ],
      },
      {
        h: 'When foreign income or assets were left out',
        body: [
          { list: [
            'If foreign account income was omitted together with information reports such as the FBAR or Form 8938, quietly filing only amended returns can leave the information-return penalties in place.',
            'In that case the Streamlined procedures or the delinquent information return route may fit better.',
            'Revoking the FEIE generally bars you from choosing it again for five years without IRS approval.',
          ] },
          { callout: { tone: 'warn', text: 'Decide on the route before submitting. Filing amended returns first can narrow the options that remain.' } },
        ],
      },
      {
        h: 'If more tax is due',
        body: [
          { list: [
            'Interest runs on the additional tax from the original due date.',
            'Correcting a return before the IRS finds the issue makes an accuracy-related penalty less likely.',
            'If you cannot pay at once, you can request an installment agreement.',
          ] },
        ],
      },
    ],

    faq: [
      {
        q: 'Will amending my return trigger an audit?',
        a: 'Amending does not by itself mean an audit. The IRS does review the changes and can ask for more support when the refund is large or the basis is unclear.',
      },
      {
        q: 'How far back can I amend?',
        a: 'An amendment that pays more tax can be filed at any time. One that claims a refund must generally be filed within three years of filing or two years of payment, whichever is later.',
      },
      {
        q: 'Can an amended return be e-filed?',
        a: 'Yes, Form 1040-X can be e-filed for the current year and the two prior years.',
      },
      {
        q: 'I missed the Foreign Tax Credit. Can I still claim it?',
        a: 'Refund claims tied to the Foreign Tax Credit can have a longer special period than the usual three years. We check the year and the tax paid to see whether a claim is still open.',
      },
    ],

    cta: {
      title: 'Check first whether amending is the right route',
      text: 'Send us the filed return and what was missed, and we will assess whether to amend or use another procedure such as Streamlined.',
      button: 'Request a consultation',
    },

    disclaimer:
      'This page is general information, not tax advice. Refund deadlines and the choice of procedure depend on your own facts and require professional advice.',

    sources,
    related,
  },
};
