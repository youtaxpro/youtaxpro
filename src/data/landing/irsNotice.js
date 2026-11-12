// IRS 통지서·세무조사 대응 서비스 페이지 콘텐츠.
//
// ⚠️ 세무사 검수 대상: [확인] 표시 항목은 게시 전 임아름 CPA가 최신 IRS 자료로 검증해야 함.

const related = [
  { path: '/amended-return', label: { ko: '수정 신고(Form 1040-X)', en: 'Amended Return' } },
  { path: '/tax-return', label: { ko: '미국 소득세 신고 대행', en: 'Income Tax Return' } },
  { path: '/streamlined', label: { ko: 'Streamlined 간소화 절차', en: 'Streamlined Procedures' } },
  { path: '/gift-inheritance', label: { ko: '증여·상속 미국 신고(Form 3520)', en: 'Gifts & Inheritances' } },
];

const sources = [
  { label: 'IRS — Understanding Your IRS Notice or Letter', url: 'https://www.irs.gov/individuals/understanding-your-irs-notice-or-letter' },
  { label: 'IRS — Understanding Your CP2000 Notice', url: 'https://www.irs.gov/individuals/understanding-your-cp2000-notice' },
  { label: 'IRS — About Form 2848, Power of Attorney', url: 'https://www.irs.gov/forms-pubs/about-form-2848' },
  { label: 'IRS — Penalty Relief', url: 'https://www.irs.gov/payments/penalty-relief' },
  { label: 'IRS — Publication 556, Examination of Returns, Appeal Rights, and Claims for Refund', url: 'https://www.irs.gov/forms-pubs/about-publication-556' },
];

export default {
  slug: 'irs-notice',
  updated: '2026-11-12',
  name: { ko: 'IRS 통지서', en: 'IRS Notices' },
  summary: {
    ko: 'IRS에서 온 통지서(CP2000 등)의 의미와 대응 기한, 세무조사 종류, 벌금 감면 요청까지. 한국 거주자가 놓치기 쉬운 점 정리.',
    en: 'What IRS notices such as the CP2000 mean, how long you have to respond, types of examination, and penalty relief, with points taxpayers in Korea often miss.',
  },

  ko: {
    h1: 'IRS 통지서·세무조사 대응',
    lead:
      'IRS 통지서는 종류마다 의미와 대응 기한이 다릅니다. 대부분은 정해진 기한 안에 서면으로 답하면 해결되지만, 기한을 넘기면 제안된 세액이 그대로 확정되거나 불복할 권리를 잃을 수 있습니다. 한국에서는 우편 도착이 늦어지므로 받은 즉시 통지서 번호와 기한부터 확인해야 합니다.',
    reviewNote: '최종 업데이트: 2026년 11월',

    sections: [
      {
        h: '통지서를 받으면 먼저 할 일',
        body: [
          { list: [
            '오른쪽 위 또는 아래에 있는 통지서 번호(CP 또는 LTR로 시작)와 답변 기한을 확인합니다.',
            '통지서의 금액과 내용을 제출한 신고서와 비교합니다.',
            '동의하면 안내에 따라 납부하거나 서명해 회신하고, 동의하지 않으면 근거 자료와 함께 서면으로 답합니다.',
            '보낸 서류의 사본과 발송 증빙을 보관합니다.',
            '주소가 바뀌었다면 Form 8822로 IRS에 알립니다.',
          ] },
          { callout: { tone: 'warn', text: 'IRS는 처음 연락할 때 우편을 사용합니다. 전화·문자·이메일로 즉시 송금이나 상품권 결제를 요구하면 사기를 의심해야 합니다.' } },
        ],
      },
      {
        h: '자주 받는 통지서',
        body: [
          { table: {
            headers: ['통지서', '의미', '대응'],
            rows: [
              ['CP2000', 'IRS가 받은 소득 자료와 신고서가 달라 세액 변경을 제안', '청구서가 아닌 제안. 통상 30일(해외 거주 60일) 안에 동의 또는 이의 회신 [확인]'],
              ['CP14', '미납 세금 안내', '금액 확인 후 납부 또는 분할 납부 신청'],
              ['CP501·CP503·CP504', '미납 독촉. CP504는 압류 예고', '방치하지 말고 납부·분납·이의 중 하나로 대응'],
              ['CP11·CP12', '계산 오류 정정으로 세액 또는 환급액 변경', '동의하지 않으면 60일 안에 이의 제기'],
              ['CP15 등 벌금 통지', 'Form 3520·5471 등 정보 보고 미제출 벌금 부과', '합리적 사유서로 감면 요청 또는 불복'],
              ['Letter 5071C·4883C', '본인 확인 요청', '안내된 방법으로 신원 확인. 완료 전에는 신고서 처리가 멈춤'],
              ['Notice of Deficiency (CP3219A 등)', '세액 결정 통지', '90일(미국 밖 주소로 발송된 경우 150일) 안에 조세법원 제소 가능'],
              ['LT11·Letter 1058', '압류 최종 통지', '30일 안에 징수 적법절차 청문 요청 가능'],
            ],
          } },
        ],
      },
      {
        h: '세무조사의 종류',
        body: [
          { table: {
            headers: ['유형', '방식'],
            rows: [
              ['서면 조사 (Correspondence)', '우편으로 특정 항목의 증빙을 요청. 가장 흔한 형태'],
              ['사무실 조사 (Office)', 'IRS 사무실에서 면담'],
              ['현장 조사 (Field)', '조사관이 납세자 또는 대리인의 장소를 방문'],
            ],
          } },
          '해외 거주 납세자는 대부분 서면 조사로 진행됩니다. 해외근로소득 공제의 체류 요건, 외국납부세액공제의 납부 증빙, 해외 계좌 소득이 자주 확인 대상이 됩니다.',
        ],
      },
      {
        h: '대리인을 통한 대응',
        body: [
          { list: [
            'Form 2848(위임장)을 제출하면 CPA가 납세자를 대신해 IRS와 직접 통화하고 서면을 주고받을 수 있습니다.',
            '시차와 언어 때문에 직접 대응이 어려운 한국 거주자에게 특히 유용합니다.',
            '기한 안에 답하기 어렵다면 대리인이 기한 연장을 요청할 수 있습니다.',
          ] },
        ],
      },
      {
        h: '벌금 감면과 납부 방법',
        body: [
          { list: [
            '최초 위반 감면(First-Time Abatement): 최근 3년간 벌금 이력이 없고 신고·납부를 이행했다면 무신고·미납 가산세 감면을 요청할 수 있습니다.',
            '합리적 사유(Reasonable Cause): 질병, 재해, 전문가의 잘못된 조언 등 통상적인 주의를 다했음에도 지키지 못한 사정을 서면으로 설명합니다.',
            '분할 납부(Installment Agreement): 일시 납부가 어려우면 월 분납을 신청할 수 있습니다.',
          ] },
          '이자는 원칙적으로 감면되지 않습니다. 벌금이 감면되면 그 벌금에 붙은 이자는 함께 줄어듭니다.',
        ],
      },
    ],

    faq: [
      {
        q: 'CP2000을 받았습니다. 세무조사인가요?',
        a: '정식 세무조사는 아닙니다. IRS가 금융기관 등에서 받은 자료와 신고서가 일치하지 않아 세액 변경을 제안하는 통지입니다. 기한 안에 동의하거나 근거와 함께 이의를 제기하면 됩니다.',
      },
      {
        q: '통지서를 늦게 받아 기한이 지났으면 어떻게 하나요?',
        a: '가능한 한 빨리 답변을 보내고, 해외 우편 지연 사실을 설명합니다. 통지서 종류에 따라 재검토 요청이나 다른 불복 절차가 남아 있을 수 있습니다.',
      },
      {
        q: '통지서 내용이 틀렸다고 생각하면 어떻게 하나요?',
        a: '동의하지 않는 이유를 적고 증빙 자료를 첨부해 기한 안에 서면으로 답합니다. 한국 서류는 영문 번역이나 설명을 함께 제출하는 것이 좋습니다.',
      },
      {
        q: 'Form 3520 미제출 벌금 통지를 받았습니다. 감면받을 수 있나요?',
        a: '합리적 사유를 구체적으로 소명하면 감면될 수 있습니다. 증여·상속 경위, 신고 의무를 알지 못한 사정, 인지 후 조치 내용을 사실대로 정리해 제출합니다.',
      },
      {
        q: 'IRS와 직접 통화해야 하나요?',
        a: 'Form 2848로 위임하면 CPA가 대신 연락할 수 있습니다. 본인 확인 통지처럼 본인이 직접 해야 하는 절차도 일부 있습니다.',
      },
    ],

    cta: {
      title: '받으신 통지서를 보내 주세요',
      text: '통지서 번호와 날짜가 보이도록 사진을 보내 주시면 의미와 기한, 대응 방법을 안내해 드립니다.',
      button: '상담 신청하기',
    },

    disclaimer:
      '본 페이지는 일반적인 정보 제공을 위한 것이며 세무 자문이 아닙니다. 대응 기한은 통지서에 적힌 날짜가 우선하며, 개인의 구체적 상황은 전문가 상담이 필요합니다.',

    sources,
    related,
  },

  en: {
    h1: 'IRS Notices and Examinations',
    lead:
      'Each IRS notice means something different and carries its own deadline. Most are resolved by answering in writing on time, but missing the deadline can make a proposed amount final or cost you the right to contest it. Mail reaches Korea late, so check the notice number and the deadline the day it arrives.',
    reviewNote: 'Last updated: November 2026',

    sections: [
      {
        h: 'First steps when a notice arrives',
        body: [
          { list: [
            'Find the notice number (starting with CP or LTR) in a corner of the page, and the response deadline.',
            'Compare the amounts and items with the return you filed.',
            'If you agree, pay or sign and return as instructed. If you disagree, answer in writing with supporting documents.',
            'Keep copies of what you send and proof of mailing.',
            'If your address has changed, tell the IRS with Form 8822.',
          ] },
          { callout: { tone: 'warn', text: 'The IRS makes first contact by mail. A call, text or email demanding immediate payment or gift cards is a sign of fraud.' } },
        ],
      },
      {
        h: 'Notices you are likely to see',
        body: [
          { table: {
            headers: ['Notice', 'What it means', 'Response'],
            rows: [
              ['CP2000', 'Income reported to the IRS does not match your return, and a change is proposed', 'A proposal, not a bill. Agree or dispute, usually within 30 days (60 if abroad) [verify]'],
              ['CP14', 'Balance due', 'Check the amount, then pay or request an installment agreement'],
              ['CP501, CP503, CP504', 'Reminders of a balance due; CP504 warns of levy', 'Do not ignore: pay, arrange payments, or dispute'],
              ['CP11, CP12', 'A math error correction changed your tax or refund', 'Dispute within 60 days if you disagree'],
              ['CP15 and other penalty notices', 'A penalty for a missing information return such as Form 3520 or 5471', 'Request abatement with a reasonable cause statement, or appeal'],
              ['Letter 5071C, 4883C', 'Identity verification', 'Verify as instructed; the return is on hold until you do'],
              ['Notice of Deficiency (CP3219A and others)', 'A formal determination of tax', 'Petition the Tax Court within 90 days (150 if addressed outside the U.S.)'],
              ['LT11, Letter 1058', 'Final notice of intent to levy', 'Request a Collection Due Process hearing within 30 days'],
            ],
          } },
        ],
      },
      {
        h: 'Types of examination',
        body: [
          { table: {
            headers: ['Type', 'How it works'],
            rows: [
              ['Correspondence', 'Documents for specific items are requested by mail. The most common type'],
              ['Office', 'An interview at an IRS office'],
              ['Field', 'An agent visits the taxpayer or the representative'],
            ],
          } },
          'For taxpayers abroad, examinations are mostly by correspondence. The presence test for the FEIE, proof of foreign tax paid for the Foreign Tax Credit, and income from foreign accounts are frequent subjects.',
        ],
      },
      {
        h: 'Working through a representative',
        body: [
          { list: [
            'With Form 2848 (power of attorney), a CPA can speak and correspond with the IRS on your behalf.',
            'This helps taxpayers in Korea, where time difference and language make direct contact hard.',
            'If the deadline cannot be met, the representative can ask for more time.',
          ] },
        ],
      },
      {
        h: 'Penalty relief and payment',
        body: [
          { list: [
            'First-Time Abatement: if you had no penalties in the prior three years and are otherwise compliant, you can request relief from failure-to-file and failure-to-pay penalties.',
            'Reasonable cause: a written explanation of circumstances such as illness, disaster or incorrect professional advice, showing you used ordinary care.',
            'Installment agreement: monthly payments when you cannot pay in full.',
          ] },
          'Interest is generally not waived. When a penalty is abated, the interest charged on that penalty is reduced with it.',
        ],
      },
    ],

    faq: [
      {
        q: 'I received a CP2000. Is this an audit?',
        a: 'It is not a formal audit. The IRS is proposing a change because information from payers or financial institutions does not match your return. You agree, or dispute it with support, by the deadline.',
      },
      {
        q: 'The notice arrived late and the deadline has passed. What now?',
        a: 'Respond as soon as possible and explain the overseas mail delay. Depending on the notice, reconsideration or another appeal route may still be open.',
      },
      {
        q: 'What if I think the notice is wrong?',
        a: 'State why you disagree and attach supporting documents, in writing and by the deadline. Korean documents are best sent with an English translation or explanation.',
      },
      {
        q: 'I received a penalty notice for not filing Form 3520. Can it be removed?',
        a: 'It can be abated if you show reasonable cause in specific terms: how the gift or inheritance arose, why you did not know of the requirement, and what you did once you learned of it.',
      },
      {
        q: 'Do I have to call the IRS myself?',
        a: 'With Form 2848 your CPA can make contact for you. Some steps, such as identity verification, must be done by you.',
      },
    ],

    cta: {
      title: 'Send us the notice you received',
      text: 'A photo showing the notice number and date is enough for us to explain what it means, the deadline and how to respond.',
      button: 'Request a consultation',
    },

    disclaimer:
      'This page is general information, not tax advice. The deadline printed on your notice controls, and your own situation requires professional advice.',

    sources,
    related,
  },
};
