// ITIN (Individual Taxpayer Identification Number, Form W-7) 랜딩 콘텐츠.
//
// ⚠️ 세무사 검수 대상: [확인] 표시된 처리기간·서류 요건·재한 CAA 관련 사항은
//    게시 전 임아름 CPA가 최신 IRS 자료(아래 sources)로 검증해야 함.

export default {
  slug: 'itin',
  name: 'ITIN',
  summary: {
    ko: '미국 사회보장번호(SSN)를 받을 수 없지만 미국 세금 신고가 필요한 사람을 위한 납세자 식별번호. Form W-7 신청.',
    en: 'A taxpayer ID for people who need to file U.S. tax but cannot get an SSN. Applied for with Form W-7.',
  },

  ko: {
    h1: 'ITIN(개인 납세자 식별번호) 신청 가이드',
    lead:
      'ITIN은 미국 사회보장번호(SSN)를 받을 수 없지만 미국 세금 신고 의무가 있거나 부양가족·배우자로 신고에 포함되는 사람에게 발급되는 9자리 번호입니다. 한국인 배우자, 외국 국적 부양가족, 미국 소득·부동산이 있는 한국 거주자에게 자주 필요합니다.',
    reviewNote: '아래 처리기간·서류 요건·재한 CAA 관련 정보는 최신 IRS 자료 기준으로 최종 확인 후 게시됩니다.',

    sections: [
      {
        h: 'ITIN이 필요한 경우',
        body: [
          { list: [
            'SSN을 받을 수 없는데 미국 연방 세금 신고 의무가 있는 사람 (예: 미국 소득·부동산 매각이 있는 한국 거주 외국인)',
            '미국 시민권자·영주권자와 공동신고(MFJ)하는 외국 국적 배우자',
            '미국 세금 신고서에 부양가족으로 포함되는 외국 국적 가족',
            '조세조약 혜택을 신청하는 비거주 외국인 등',
          ] },
          { callout: { tone: 'info', text: 'SSN을 받을 자격이 있는 사람은 ITIN을 신청할 수 없습니다. ITIN은 취업 허가나 신분 증명이 아니라 오직 세금 목적의 번호입니다.' } },
        ],
      },
      {
        h: '신청 방법 — Form W-7',
        body: [
          { list: [
            'Form W-7 작성',
            '원칙적으로 해당 연도 연방 세금 신고서(Form 1040 등)를 함께 첨부 (일부 예외 사유는 신고서 없이 신청 가능)',
            '신원과 외국인 신분을 증명하는 서류 제출 — 유효한 여권은 단독으로 두 가지를 모두 증명',
          ] },
          '제출 경로는 세 가지입니다.',
          { table: {
            headers: ['경로', '설명'],
            rows: [
              ['IRS ITIN 처리부서로 우편 발송', '여권 원본 또는 발급기관(외교부)의 인증 사본을 동봉해야 함 [확인]'],
              ['IRS Taxpayer Assistance Center(TAC) 방문', '예약 필요, 미국 내 방문. 서류 원본 확인 후 반환'],
              ['공인 인증 대행기관(Certifying Acceptance Agent, CAA)', 'CAA가 서류를 직접 확인·인증하므로 여권 원본을 IRS에 보내지 않아도 됨. 한국 내 CAA 이용 가능 여부 확인 [확인]'],
            ],
          } },
          '처리 기간은 통상 7~11주이며 세금 신고 성수기에는 더 길어질 수 있습니다. [확인]',
        ],
      },
      {
        h: 'ITIN 만료와 갱신',
        body: [
          { list: [
            '연속 3개 과세연도 동안 세금 신고서에 사용되지 않은 ITIN은 만료됩니다.',
            '만료된 ITIN으로 신고서를 제출하면 처리가 지연되고 일부 공제·크레딧이 보류될 수 있습니다.',
            '갱신도 Form W-7으로 하며, 갱신 시에는 세금 신고서를 첨부하지 않아도 됩니다. [확인]',
          ] },
        ],
      },
      {
        h: '한국 거주자가 특히 챙길 점',
        body: [
          { list: [
            '한국인 배우자를 공동신고에 포함하려면 배우자의 ITIN이 필요하며, 첫 해에는 세금 신고서와 함께 W-7을 제출합니다.',
            '여권 원본을 우편으로 보내는 부담을 피하려면 여권 발급기관(외교부)의 인증 사본을 받거나, 이용 가능하다면 CAA를 통해 신청합니다. 주한 미국대사관은 ITIN 서류 인증을 하지 않습니다. [확인]',
            'ITIN이 나오면 그 번호로 과거 몇 년치 신고(예: Streamlined)를 함께 정리하는 경우가 많습니다.',
            '나중에 SSN을 받게 되면 ITIN 사용을 중단하고 IRS에 통지해 기록을 SSN으로 통합해야 합니다.',
          ] },
        ],
      },
      {
        h: '자주 하는 실수',
        body: [
          { list: [
            '세금 신고서를 첨부해야 하는데 W-7만 단독 제출 → 반려',
            '여권 사본을 인증 없이 제출 → 반려',
            'ITIN 만료 여부를 확인하지 않고 신고서 제출 → 처리 지연·크레딧 보류',
            'SSN 발급 후에도 계속 ITIN 사용 → 기록 불일치',
            '신원 서류의 이름·생년월일이 세금 신고서·여권과 불일치',
          ] },
        ],
      },
    ],

    faq: [
      {
        q: '한국인 배우자인데 ITIN이 꼭 필요한가요?',
        a: '미국 시민권자·영주권자 배우자와 공동신고(MFJ)하거나 배우자를 신고서에 포함하려면 ITIN이 필요합니다. 각각 따로(부부별도, MFS) 신고하는 경우에도 배우자 정보 기재를 위해 필요할 수 있습니다.',
      },
      {
        q: '여권 원본을 IRS에 보내야 하나요?',
        a: '우편 신청 시에는 여권 원본이나 발급기관의 인증 사본이 필요합니다. 원본을 보내고 싶지 않다면 공인 인증 대행기관(CAA)을 통해 신청하면 서류를 직접 확인받을 수 있습니다.',
      },
      {
        q: 'ITIN이 있으면 미국에서 일할 수 있나요?',
        a: '아닙니다. ITIN은 세금 신고·납부 목적의 번호일 뿐 취업 허가나 SSN을 대체하지 않습니다.',
      },
      {
        q: '내 ITIN이 만료됐는지 어떻게 아나요?',
        a: '최근 3개 연속 과세연도에 세금 신고서에 사용하지 않았다면 만료됐을 가능성이 높습니다. 신고 전에 상태를 확인하고 필요하면 Form W-7으로 갱신합니다.',
      },
    ],

    cta: {
      title: 'ITIN 신청·갱신을 도와드립니다',
      text: '배우자·부양가족 ITIN, 여권 인증 방법, 세금 신고서와의 동시 제출까지 함께 처리합니다.',
      button: '상담 신청하기',
    },

    disclaimer:
      '본 페이지는 일반적인 정보 제공을 위한 것이며 세무 자문이 아닙니다. 서류 요건·처리기간·인증 절차는 변경될 수 있으며, 개인의 구체적 상황은 전문가 상담이 필요합니다.',

    sources: [
      { label: 'IRS — Individual Taxpayer Identification Number (ITIN)', url: 'https://www.irs.gov/individuals/individual-taxpayer-identification-number' },
      { label: 'IRS — About Form W-7', url: 'https://www.irs.gov/forms-pubs/about-form-w-7' },
      { label: 'IRS — Instructions for Form W-7', url: 'https://www.irs.gov/instructions/iw7' },
      { label: 'IRS — Acceptance Agent Program (CAA)', url: 'https://www.irs.gov/individuals/international-taxpayers/acceptance-agent-program' },
    ],

    related: [
      { path: '/feie', label: { ko: '해외근로소득 공제(FEIE)', en: 'FEIE Guide' } },
      { path: '/fbar', label: { ko: 'FBAR·FATCA 신고 안내', en: 'FBAR / FATCA' } },
      { path: '/streamlined', label: { ko: 'Streamlined 간소화 절차', en: 'Streamlined Procedures' } },
    ],
  },

  en: {
    h1: 'ITIN (Individual Taxpayer Identification Number): Application Guide',
    lead:
      'An ITIN is a nine-digit number for people who must file U.S. tax, or be included on a return as a dependent or spouse, but cannot get an SSN. It is often needed by Korean spouses, foreign-national dependents, and Korea residents with U.S. income or property.',
    reviewNote: 'Processing times, document rules, and Korea CAA availability below are finalized after review against current IRS guidance.',

    sections: [
      {
        h: 'When you need an ITIN',
        body: [
          { list: [
            'You cannot get an SSN but have a U.S. federal filing obligation (e.g., a Korea-resident foreign national with U.S. income or a property sale)',
            'A foreign-national spouse filing jointly (MFJ) with a U.S. citizen or green card holder',
            'A foreign-national family member claimed as a dependent on a U.S. return',
            'A nonresident alien claiming a tax-treaty benefit',
          ] },
          { callout: { tone: 'info', text: 'People eligible for an SSN cannot apply for an ITIN. An ITIN is not work authorization or proof of status — it is only a tax number.' } },
        ],
      },
      {
        h: 'How to apply — Form W-7',
        body: [
          { list: [
            'Complete Form W-7',
            'Generally attach that year’s federal return (Form 1040, etc.); some exception categories allow applying without a return',
            'Submit documents proving identity and foreign status — a valid passport is a standalone document for both',
          ] },
          'There are three submission routes:',
          { table: {
            headers: ['Route', 'Detail'],
            rows: [
              ['Mail to the IRS ITIN operation', 'Include the original passport or a copy certified by the issuing agency [verify]'],
              ['IRS Taxpayer Assistance Center (TAC)', 'By appointment, in the U.S. Originals are verified and returned'],
              ['Certifying Acceptance Agent (CAA)', 'A CAA verifies and certifies your documents, so you do not mail the passport to the IRS. Confirm CAA availability in Korea [verify]'],
            ],
          } },
          'Processing generally takes 7–11 weeks and longer in filing season. [verify]',
        ],
      },
      {
        h: 'Expiration and renewal',
        body: [
          { list: [
            'An ITIN not used on a return for three consecutive tax years expires.',
            'Filing with an expired ITIN delays processing and can hold certain deductions and credits.',
            'Renew with Form W-7; a return is not required for a renewal. [verify]',
          ] },
        ],
      },
      {
        h: 'What Korea-based taxpayers should watch',
        body: [
          { list: [
            'To include a Korean spouse on a joint return, the spouse needs an ITIN; in the first year the W-7 is filed with the return.',
            'To avoid mailing your original passport, get a copy certified by the issuing agency, or apply through a CAA if available. The U.S. Embassy in Seoul does not certify ITIN documents. [verify]',
            'Once the ITIN is issued, back-year returns (e.g., Streamlined) are often cleaned up under it.',
            'If you later get an SSN, stop using the ITIN and notify the IRS to consolidate your records.',
          ] },
        ],
      },
      {
        h: 'Common mistakes',
        body: [
          { list: [
            'Submitting W-7 alone when a return must be attached — rejected',
            'Submitting an uncertified passport copy — rejected',
            'Filing without checking whether the ITIN has expired — delays and held credits',
            'Continuing to use the ITIN after receiving an SSN — mismatched records',
            'Name or date of birth on the ID documents not matching the return and passport',
          ] },
        ],
      },
    ],

    faq: [
      {
        q: 'I am a Korean spouse — do I really need an ITIN?',
        a: 'Yes, to file jointly (MFJ) with a U.S. citizen or green card holder spouse or to be included on the return. It may also be needed to list a spouse when filing separately (MFS).',
      },
      {
        q: 'Do I have to mail my original passport to the IRS?',
        a: 'For a mailed application you need the original or an issuing-agency certified copy. To avoid sending the original, apply through a Certifying Acceptance Agent, who verifies your documents.',
      },
      {
        q: 'Can I work in the U.S. with an ITIN?',
        a: 'No. An ITIN is only for tax filing and payment; it is not work authorization and does not replace an SSN.',
      },
      {
        q: 'How do I know if my ITIN has expired?',
        a: 'If it was not used on a return for the last three consecutive tax years, it has likely expired. Check the status before filing and renew with Form W-7 if needed.',
      },
    ],

    cta: {
      title: 'We help with ITIN applications and renewals',
      text: 'Spouse and dependent ITINs, passport certification options, and filing the W-7 together with your return.',
      button: 'Request a consultation',
    },

    disclaimer:
      'This page is general information, not tax advice. Document rules, processing times, and certification procedures can change, and your specific situation requires professional review.',

    sources: [
      { label: 'IRS — Individual Taxpayer Identification Number (ITIN)', url: 'https://www.irs.gov/individuals/individual-taxpayer-identification-number' },
      { label: 'IRS — About Form W-7', url: 'https://www.irs.gov/forms-pubs/about-form-w-7' },
      { label: 'IRS — Instructions for Form W-7', url: 'https://www.irs.gov/instructions/iw7' },
      { label: 'IRS — Acceptance Agent Program (CAA)', url: 'https://www.irs.gov/individuals/international-taxpayers/acceptance-agent-program' },
    ],

    related: [
      { path: '/feie', label: { ko: '해외근로소득 공제(FEIE)', en: 'FEIE Guide' } },
      { path: '/fbar', label: { ko: 'FBAR·FATCA 신고 안내', en: 'FBAR / FATCA' } },
      { path: '/streamlined', label: { ko: 'Streamlined 간소화 절차', en: 'Streamlined Procedures' } },
    ],
  },
};
