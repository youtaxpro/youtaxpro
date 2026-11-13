// Streamlined Filing Compliance Procedures (SFOP · SDOP) 랜딩 콘텐츠.
//
// ⚠️ 세무사 검수 대상: [확인] 표시 항목과 제출 주소는 게시 전 임아름 CPA가
//    최신 IRS 자료(아래 sources)로 검증해야 함.

export default {
  slug: 'streamlined',
  updated: '2026-11-12', // 내용을 고칠 때마다 갱신 (sitemap lastmod · Article dateModified)
  name: 'Streamlined',
  summary: {
    ko: '과거 FBAR·FATCA 미신고자를 위한 IRS 공식 구제 프로그램. 비고의적 위반·해외 거주자는 벌금 0%.',
    en: 'The IRS relief program for past FBAR/FATCA non-filers. Non-willful violators abroad face a 0% penalty.',
  },

  ko: {
    h1: 'Streamlined 간소화 절차 가이드 (미신고 구제 프로그램)',
    lead:
      'Streamlined 간소화 절차(Streamlined Filing Compliance Procedures)는 해외 금융자산과 그 소득을 몰라서 신고하지 못한 납세자가 과거 신고를 정리할 수 있도록 IRS가 운영하는 공식 절차입니다. 한국 등 해외에 거주하는 납세자는 요건을 충족하면 벌금 없이 최근 3년치 소득세 신고와 6년치 FBAR를 제출해 정리할 수 있습니다.',
    reviewNote: '최종 업데이트: 2026년 11월',

    sections: [
      {
        h: 'Streamlined 간소화 절차란',
        body: [
          '미국 시민권자·영주권자는 한국에 살아도 전 세계 소득을 미국에 신고해야 하고, 해외 계좌는 FBAR와 Form 8938로 보고해야 합니다. 이 의무를 모르고 지나친 사람이 스스로 바로잡을 수 있게 만든 절차가 Streamlined입니다.',
          { list: [
            '고의가 아닌(non-willful) 누락이었다고 본인이 서명으로 확인하는 것이 핵심입니다.',
            '해외 거주자용(SFOP)과 미국 거주자용(SDOP) 두 가지가 있습니다.',
            '2012년 9월에 도입되어 2014년에 확대되었고, 미국 내 거주자도 이용할 수 있게 되었습니다.',
          ] },
        ],
      },
      {
        h: '공통 자격 요건',
        body: [
          { list: [
            '개인 납세자(개인의 유산 포함)일 것',
            '누락이 비고의적일 것: 과실, 부주의, 착오, 또는 법 요건을 선의로 오해한 결과',
            'IRS가 어느 연도에 대해서든 민사 세무조사를 시작하지 않았을 것 (해외 자산과 무관한 조사도 해당)',
            'IRS 범죄수사국(Criminal Investigation)의 수사 대상이 아닐 것',
            '유효한 납세자 번호(SSN 또는 ITIN)가 있을 것. SSN 자격이 없고 ITIN도 없다면 ITIN 신청서를 함께 제출',
          ] },
          { callout: { tone: 'warn', text: '비고의성은 인증서에 구체적인 사실관계를 적어 설명해야 합니다. 신고 의무를 알면서 하지 않은 고의적 위반이라면 이 절차를 쓸 수 없습니다.' } },
        ],
      },
      {
        h: '두 가지 유형 비교',
        body: [
          { table: {
            headers: ['항목', '해외 거주자용 (SFOP)', '미국 거주자용 (SDOP)'],
            rows: [
              ['정식 명칭', 'Streamlined Foreign Offshore Procedures', 'Streamlined Domestic Offshore Procedures'],
              ['대상', '비거주 요건을 충족하는 납세자', '비거주 요건을 충족하지 못하는 납세자'],
              ['소득세 신고서', '최근 3년치 미제출 신고서 또는 수정 신고서', '최근 3년치 수정 신고서 (3년 모두 기존 신고가 있어야 함)'],
              ['FBAR', '최근 6년치', '최근 6년치'],
              ['인증서', 'Form 14653', 'Form 14654'],
              ['벌금', '없음', '해외 금융자산 최고 합계액의 5%'],
              ['납부', '미납 세금 + 이자', '미납 세금 + 이자 + 5% 벌금'],
            ],
          } },
          '한국에 거주하는 미국 시민권자·영주권자는 대부분 해외 거주자용(SFOP)에 해당합니다.',
        ],
      },
      {
        h: '해외 거주자용(SFOP)의 비거주 요건',
        body: [
          { list: [
            '시민권자·영주권자: 신고 기한이 지난 최근 3개 연도 중 1개 연도 이상에서 미국에 거주지(abode)가 없었고, 그 해에 미국 밖에서 330일 이상(만 하루 기준) 체류했을 것',
            '시민권자·영주권자가 아닌 경우: 같은 기간 중 1개 연도 이상에서 실질적 체류 기준(substantial presence test)을 충족하지 않았을 것',
            '부부 공동신고라면 부부 두 사람 모두 비거주 요건을 충족해야 합니다.',
          ] },
          { callout: { tone: 'info', text: '330일 기준은 한 해에 미국 체류가 약 35일 이하였다는 뜻입니다. 출입국 기록으로 날짜를 확인해 두는 것이 좋습니다.' } },
        ],
      },
      {
        h: '제출 서류와 절차',
        body: [
          { list: [
            '최근 3년치 소득세 신고서: 미제출분은 Form 1040, 이미 제출한 연도는 Form 1040-X(수정 신고)',
            '해당 연도에 필요한 국제 정보 보고서 첨부: Form 8938, 3520, 5471, 8621 등',
            '최근 6년치 FBAR(FinCEN Form 114): BSA E-Filing으로 전자 제출하고, 지연 사유는 "Other"를 선택한 뒤 Streamlined 절차에 따른 제출임을 기재',
            '인증서 원본: 해외 거주자는 Form 14653, 미국 거주자는 Form 14654. 사본을 각 신고서에 첨부',
            '미납 세금과 이자 전액 납부 (미국 거주자용은 5% 벌금 포함)',
          ] },
          { list: [
            '소득세 신고서와 인증서는 전자 제출이 불가하며, IRS 오스틴(Austin, TX) 전담 주소로 우편 발송합니다. [확인]',
            '각 신고서 첫 장 상단에 붉은색으로 "Streamlined Foreign Offshore"(미국 거주자용은 "Streamlined Domestic Offshore")라고 적습니다.',
            'IRS는 접수 확인서를 보내지 않으며, 종결 합의서(closing agreement)도 작성하지 않습니다.',
          ] },
        ],
      },
      {
        h: '미국 거주자용(SDOP)의 5% 벌금 계산',
        body: [
          { list: [
            '대상 기간(소득세 3년 + FBAR 6년)의 각 연도마다, 벌금 대상 해외 금융자산의 연말 잔액·가치를 합산합니다.',
            '그 연도별 합계 중 가장 큰 금액에 5%를 곱합니다.',
            '벌금 대상 자산은 FBAR나 Form 8938에 보고했어야 하는데 하지 않은 자산, 또는 보고는 했지만 소득을 신고하지 않은 자산입니다.',
          ] },
          '예를 들어 대상 기간 중 연말 합계가 가장 컸던 해의 금액이 30만 달러라면 벌금은 1만 5천 달러입니다.',
        ],
      },
      {
        h: '주의사항',
        body: [
          { list: [
            '세무조사 면제가 아닙니다. 제출한 신고서는 일반 신고서처럼 처리되며, 통상의 선정 절차에 따라 조사 대상이 될 수 있습니다.',
            '조사에서 원래의 누락이 사기 또는 고의로 판단되면 면제되었던 벌금이 부과될 수 있습니다.',
            '이미 부과된 벌금은 이 절차로 감면되지 않습니다.',
            '고의적 위반이 의심된다면 Streamlined가 아니라 IRS 범죄수사국의 자발적 공개 제도(Voluntary Disclosure Practice)를 검토해야 합니다.',
            '서류가 불완전하면 이 절차의 혜택 없이 일반 절차로 처리될 수 있습니다.',
            '제출 이후 연도는 정상 기한에 맞춰 계속 신고해야 합니다.',
          ] },
        ],
      },
      {
        h: 'Streamlined가 아닌 다른 방법이 맞는 경우',
        body: [
          { table: {
            headers: ['상황', '검토할 방법'],
            rows: [
              ['소득은 모두 신고했고 FBAR만 누락', '지연 FBAR 제출 절차 (Delinquent FBAR Submission Procedures)'],
              ['소득은 모두 신고했고 Form 3520·5471 등 정보 보고서만 누락', '지연 국제 정보 보고서 제출 절차 (합리적 사유서 첨부)'],
              ['해외 소득 신고도 누락, 고의는 아님', 'Streamlined 간소화 절차'],
              ['고의적 누락', 'IRS 범죄수사국 자발적 공개 제도'],
            ],
          } },
        ],
      },
    ],

    faq: [
      {
        q: 'Streamlined 절차를 쓰면 벌금이 정말 없나요?',
        a: '해외 거주자용(SFOP) 요건을 충족하면 무신고·미납 가산세, 정확성 관련 벌금, 정보 보고서 벌금, FBAR 벌금이 부과되지 않습니다. 다만 미납 세금과 이자는 내야 하고, 이후 조사에서 고의나 사기로 판단되면 벌금이 부과될 수 있습니다.',
      },
      {
        q: '몇 년치를 제출해야 하나요?',
        a: '신고 기한이 지난 최근 3년치 소득세 신고서와 최근 6년치 FBAR입니다.',
      },
      {
        q: '한국에 살면 무조건 해외 거주자용(SFOP)인가요?',
        a: '시민권자·영주권자는 최근 3개 연도 중 1개 연도 이상에서 미국에 거주지가 없고 미국 밖에서 330일 이상 체류했어야 합니다. 미국 체류가 길었던 해가 있다면 연도별로 확인이 필요합니다.',
      },
      {
        q: '"비고의적"이라는 것은 어떻게 증명하나요?',
        a: 'Form 14653 또는 14654에 신고하지 못한 구체적인 경위를 서술하고 위증 시 처벌을 받는다는 조건으로 서명합니다. 미국 거주 이력, 세무 대리인 이용 여부, 계좌 개설 배경 같은 사실관계가 근거가 됩니다.',
      },
      {
        q: '제출하면 세무조사를 받게 되나요?',
        a: '자동으로 조사 대상이 되지는 않습니다. 다만 일반 신고서와 같은 선정 절차가 적용되고, IRS는 금융기관 등 외부 자료와 대조할 수 있습니다.',
      },
      {
        q: 'SSN이 없는 배우자가 있어도 신청할 수 있나요?',
        a: '가능합니다. SSN 자격이 없는 사람은 ITIN 신청서(Form W-7)를 Streamlined 서류와 함께 제출할 수 있습니다.',
      },
    ],

    cta: {
      title: '미신고 연도를 함께 정리해 드립니다',
      text: '비거주 요건 확인, 3년치 신고서와 6년치 FBAR 작성, 인증서 준비까지 캘리포니아 CPA가 함께 진행합니다.',
      button: '상담 신청하기',
    },

    disclaimer:
      '본 페이지는 일반적인 정보 제공을 위한 것이며 세무 자문이 아닙니다. 절차 요건과 제출 방법은 변경될 수 있으며, 고의성 판단 등 개인의 구체적 상황은 전문가 상담이 필요합니다.',

    sources: [
      { label: 'IRS — Streamlined Filing Compliance Procedures', url: 'https://www.irs.gov/individuals/international-taxpayers/streamlined-filing-compliance-procedures' },
      { label: 'IRS — U.S. Taxpayers Residing Outside the United States (SFOP)', url: 'https://www.irs.gov/individuals/international-taxpayers/us-taxpayers-residing-outside-the-united-states' },
      { label: 'IRS — U.S. Taxpayers Residing in the United States (SDOP)', url: 'https://www.irs.gov/individuals/international-taxpayers/us-taxpayers-residing-in-the-united-states' },
      { label: 'IRS — Delinquent FBAR Submission Procedures', url: 'https://www.irs.gov/individuals/international-taxpayers/delinquent-fbar-submission-procedures' },
      { label: 'IRS — Delinquent International Information Return Submission Procedures', url: 'https://www.irs.gov/individuals/international-taxpayers/delinquent-international-information-return-submission-procedures' },
    ],

    related: [
      { path: '/fbar', label: { ko: 'FBAR·FATCA 신고 안내', en: 'FBAR / FATCA' } },
      { path: '/itin', label: { ko: 'ITIN 신청 가이드', en: 'ITIN Guide' } },
      { path: '/pfic', label: { ko: 'PFIC(해외 펀드 세금)', en: 'PFIC Guide' } },
      { path: '/amended-return', label: { ko: '수정 신고(Form 1040-X)', en: 'Amended Return' } },
    ],
  },

  en: {
    h1: 'Streamlined Filing Compliance Procedures: A Guide',
    lead:
      'The Streamlined Filing Compliance Procedures are the official IRS route for taxpayers who did not know they had to report foreign financial assets and the income from them. Taxpayers living in Korea or elsewhere abroad who qualify can catch up by filing the last three years of returns and six years of FBARs with no penalty.',
    reviewNote: 'Last updated: November 2026',

    sections: [
      {
        h: 'What the Streamlined procedures are',
        body: [
          'U.S. citizens and green card holders must report worldwide income even when living in Korea, and must report foreign accounts on the FBAR and Form 8938. The Streamlined procedures let people who missed these obligations correct them on their own initiative.',
          { list: [
            'The core requirement is certifying, under signature, that the failure was non-willful.',
            'There are two versions: one for taxpayers living abroad (SFOP) and one for those living in the U.S. (SDOP).',
            'The procedures began in September 2012 and were expanded in 2014 to include U.S. residents.',
          ] },
        ],
      },
      {
        h: 'Eligibility for both versions',
        body: [
          { list: [
            'You are an individual taxpayer (estates of individuals are included)',
            'The failure was non-willful: due to negligence, inadvertence or mistake, or a good-faith misunderstanding of the law',
            'The IRS has not started a civil examination of your returns for any year, whether or not it concerns foreign assets',
            'You are not under investigation by IRS Criminal Investigation',
            'You have a valid taxpayer identification number (SSN or ITIN). If you are not eligible for an SSN and have no ITIN, an ITIN application is submitted with the package',
          ] },
          { callout: { tone: 'warn', text: 'Non-willfulness must be explained with specific facts on the certification form. If you knew of the obligation and chose not to comply, these procedures are not available.' } },
        ],
      },
      {
        h: 'The two versions compared',
        body: [
          { table: {
            headers: ['Item', 'Living abroad (SFOP)', 'Living in the U.S. (SDOP)'],
            rows: [
              ['Full name', 'Streamlined Foreign Offshore Procedures', 'Streamlined Domestic Offshore Procedures'],
              ['Who', 'Taxpayers who meet the non-residency requirement', 'Taxpayers who do not meet it'],
              ['Income tax returns', 'Last 3 years, delinquent or amended', 'Last 3 years, amended only (returns must already have been filed for all 3)'],
              ['FBARs', 'Last 6 years', 'Last 6 years'],
              ['Certification', 'Form 14653', 'Form 14654'],
              ['Penalty', 'None', '5% of the highest aggregate value of foreign financial assets'],
              ['Payment', 'Tax due plus interest', 'Tax due plus interest plus the 5% penalty'],
            ],
          } },
          'Most U.S. citizens and green card holders living in Korea fall under the version for taxpayers abroad (SFOP).',
        ],
      },
      {
        h: 'The non-residency requirement (SFOP)',
        body: [
          { list: [
            'Citizens and green card holders: in at least one of the most recent three years whose due date has passed, you had no U.S. abode and were physically outside the United States for at least 330 full days',
            'Others: in at least one of those years, you did not meet the substantial presence test',
            'On a joint return, both spouses must meet the requirement.',
          ] },
          { callout: { tone: 'info', text: 'The 330-day rule means roughly 35 days or fewer in the United States that year. Check the dates against your entry and exit records.' } },
        ],
      },
      {
        h: 'What to submit and how',
        body: [
          { list: [
            'Income tax returns for the last three years: Form 1040 for unfiled years, Form 1040-X for years already filed',
            'Required international information returns for those years, such as Forms 8938, 3520, 5471 and 8621',
            'FBARs (FinCEN Form 114) for the last six years, e-filed through BSA E-Filing, selecting "Other" as the reason for late filing and stating that they are filed under the Streamlined procedures',
            'The original signed certification: Form 14653 for taxpayers abroad, Form 14654 for U.S. residents, with a copy attached to each return',
            'Full payment of tax due and interest (plus the 5% penalty under the domestic version)',
          ] },
          { list: [
            'The returns and certification cannot be e-filed. They are mailed to a dedicated IRS address in Austin, Texas. [verify]',
            'Write "Streamlined Foreign Offshore" (or "Streamlined Domestic Offshore") in red at the top of the first page of each return.',
            'The IRS does not acknowledge receipt and no closing agreement is signed.',
          ] },
        ],
      },
      {
        h: 'How the 5% penalty is computed (SDOP)',
        body: [
          { list: [
            'For each year in the covered period (three return years and six FBAR years), add up the year-end balances and values of the foreign financial assets subject to the penalty.',
            'Take the highest of those yearly totals and multiply it by 5%.',
            'Assets subject to the penalty are those that should have been reported on an FBAR or Form 8938 but were not, or that were reported while their income was not.',
          ] },
          'For example, if the largest year-end total in the covered period was USD 300,000, the penalty is USD 15,000.',
        ],
      },
      {
        h: 'Points to watch',
        body: [
          { list: [
            'This is not audit protection. The returns are processed like any others and can be selected for examination under normal procedures.',
            'If an examination finds the original failure was fraudulent or willful, the penalties that were waived can be imposed.',
            'Penalties already assessed are not abated under these procedures.',
            'If the conduct may have been willful, the route to consider is the IRS Criminal Investigation Voluntary Disclosure Practice, not Streamlined.',
            'An incomplete submission can be processed in the normal course without the favorable terms.',
            'After submitting, you must keep filing on time under regular procedures.',
          ] },
        ],
      },
      {
        h: 'When another route fits better',
        body: [
          { table: {
            headers: ['Situation', 'Route to consider'],
            rows: [
              ['All income reported, only FBARs missed', 'Delinquent FBAR Submission Procedures'],
              ['All income reported, only information returns such as Form 3520 or 5471 missed', 'Delinquent International Information Return Submission Procedures, with a reasonable cause statement'],
              ['Foreign income also unreported, not willful', 'Streamlined Filing Compliance Procedures'],
              ['Willful non-compliance', 'IRS Criminal Investigation Voluntary Disclosure Practice'],
            ],
          } },
        ],
      },
    ],

    faq: [
      {
        q: 'Is there really no penalty under the Streamlined procedures?',
        a: 'If you qualify for the version for taxpayers abroad (SFOP), no failure-to-file, failure-to-pay, accuracy-related, information return or FBAR penalties apply. You still pay the tax due and interest, and penalties can be imposed if a later examination finds willfulness or fraud.',
      },
      {
        q: 'How many years do I file?',
        a: 'Income tax returns for the most recent three years whose due dates have passed, and FBARs for the most recent six years.',
      },
      {
        q: 'If I live in Korea, do I automatically qualify for SFOP?',
        a: 'Citizens and green card holders must have had no U.S. abode and been outside the United States for at least 330 full days in at least one of the most recent three years. If you spent a long stretch in the U.S. in some year, check each year.',
      },
      {
        q: 'How do I show that my failure was non-willful?',
        a: 'On Form 14653 or 14654 you describe the specific facts behind the failure and sign under penalties of perjury. Your history of U.S. residence, whether you used a tax preparer, and how the accounts came to be opened are the kind of facts that support it.',
      },
      {
        q: 'Will I be audited if I submit?',
        a: 'Not automatically. The returns go through the same selection process as any others, and the IRS can check them against information from financial institutions and other sources.',
      },
      {
        q: 'Can I apply if my spouse has no SSN?',
        a: 'Yes. Someone not eligible for an SSN can submit an ITIN application (Form W-7) together with the Streamlined package.',
      },
    ],

    cta: {
      title: 'We can help you catch up on unfiled years',
      text: 'From checking the non-residency requirement to preparing three years of returns, six years of FBARs and the certification, a California CPA works through it with you.',
      button: 'Request a consultation',
    },

    disclaimer:
      'This page is general information, not tax advice. The requirements and submission steps can change, and questions such as willfulness depend on your own facts and require professional advice.',

    sources: [
      { label: 'IRS — Streamlined Filing Compliance Procedures', url: 'https://www.irs.gov/individuals/international-taxpayers/streamlined-filing-compliance-procedures' },
      { label: 'IRS — U.S. Taxpayers Residing Outside the United States (SFOP)', url: 'https://www.irs.gov/individuals/international-taxpayers/us-taxpayers-residing-outside-the-united-states' },
      { label: 'IRS — U.S. Taxpayers Residing in the United States (SDOP)', url: 'https://www.irs.gov/individuals/international-taxpayers/us-taxpayers-residing-in-the-united-states' },
      { label: 'IRS — Delinquent FBAR Submission Procedures', url: 'https://www.irs.gov/individuals/international-taxpayers/delinquent-fbar-submission-procedures' },
      { label: 'IRS — Delinquent International Information Return Submission Procedures', url: 'https://www.irs.gov/individuals/international-taxpayers/delinquent-international-information-return-submission-procedures' },
    ],

    related: [
      { path: '/fbar', label: { ko: 'FBAR·FATCA 신고 안내', en: 'FBAR / FATCA' } },
      { path: '/itin', label: { ko: 'ITIN 신청 가이드', en: 'ITIN Guide' } },
      { path: '/pfic', label: { ko: 'PFIC(해외 펀드 세금)', en: 'PFIC Guide' } },
      { path: '/amended-return', label: { ko: '수정 신고(Form 1040-X)', en: 'Amended Return' } },
    ],
  },
};
