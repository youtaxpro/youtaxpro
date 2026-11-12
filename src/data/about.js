// CPA 프로필(/about) 페이지 데이터. Vue 의존성이 없어야 한다(빌드 스크립트도 사용).
// 여기 적는 자격·경력은 사실만 기재한다. 확인되지 않은 수치·번호는 넣지 않는다.

export const about = {
  ko: {
    eyebrow: '담당 CPA',
    name: '임아름',
    nameAlt: 'Ahreum Im, CPA',
    title: '미국공인회계사 (캘리포니아주) · 버클리유에스택스어드바이저 대표',
    h1: '임아름 CPA 프로필',
    lead:
      '임아름 CPA는 캘리포니아주 미국공인회계사로, 10년 이상 미국 개인 세무를 다뤄 왔습니다. 서울 강남에서 한국 거주 미국 시민권자·영주권자의 미국 세금 신고와 해외자산 보고를 직접 처리합니다.',
    factsTitle: '한눈에 보기',
    facts: [
      ['자격', '미국공인회계사(CPA), 캘리포니아주'],
      ['학력', 'UC Berkeley 통계학과 졸업'],
      ['경력', '미국 세무 실무 10년 이상'],
      ['처리 건수', '개인 세무 신고 5,000건 이상'],
      ['신고 범위', '연방 세금과 미국 50개 주 세금 신고 경험'],
      ['소속 단체', '미국공인회계사협회(AICPA), 캘리포니아공인회계사협회(CalCPA) 회원'],
      ['전자신고', 'IRS 전자신고 식별번호(EFIN) 보유'],
      ['상담 언어', '한국어, 영어'],
    ],
    sections: [
      {
        h: '경력',
        body: [
          '미국계 세무법인 H&R Block에서 10년간 근무하며 한국과 일본에 주둔하는 미군과 군무원의 세무 서비스를 담당했습니다. 이 기간에 5,000건 이상의 개인 세무 신고를 처리했고, 연방 세금과 50개 주의 세금 신고를 다뤘습니다.',
          '세무조사에 참여한 경험을 바탕으로 IRS 통지서와 조사 대응도 지원합니다. 현재는 버클리유에스택스어드바이저 대표로서 해외 소득 신고와 해외 금융계좌 보고를 전문으로 하고 있습니다.',
        ],
        list: [
          '現 버클리유에스택스어드바이저 대표',
          '前 미국계 세무법인 H&R Block 10년 근무',
          '前 영국계 제약회사 GlaxoSmithKline 컴플라이언스 인턴',
        ],
      },
      {
        h: '전문 분야',
        list: [
          '한국 거주 미국 시민권자·영주권자의 소득세 신고 (Form 1040)',
          '해외 금융계좌와 해외자산 보고 (FBAR, Form 8938, Form 8621, Form 3520)',
          '과거 미신고 정리 (Streamlined 간소화 절차, 수정 신고)',
          '해외근로소득 공제와 외국납부세액공제를 통한 이중과세 방지',
          '시민권 포기·영주권 반납 관련 세무 (Exit Tax)',
          'IRS 통지서와 세무조사 대응',
        ],
      },
      {
        h: '일하는 방식',
        list: [
          '상담부터 신고서 작성, 제출, 사후 대응까지 CPA가 직접 담당합니다.',
          '한국 서류(원천징수영수증, 금융 거래내역 등)를 그대로 받아 미국 신고서에 맞게 정리합니다.',
          '신고서 제출 전에 내용을 설명드리고, 선택 가능한 방법이 있으면 장단점을 비교해 드립니다.',
          '비용은 신고 범위를 확인한 뒤 작업 시작 전에 안내합니다.',
        ],
      },
    ],
    officeTitle: '사무실',
    ctaTitle: '임아름 CPA와 상담하기',
    ctaText: '신분과 소득 상황을 알려 주시면 필요한 신고 범위를 안내해 드립니다.',
    ctaButton: '상담 신청하기',
    servicesLink: '서비스 안내 보기',
    guidesLink: '미국세금 가이드 보기',
  },

  en: {
    eyebrow: 'Your CPA',
    name: 'Ahreum Im, CPA',
    nameAlt: '임아름',
    title: 'Certified Public Accountant (California) · CEO, Berkeley U.S. Tax Advisors',
    h1: 'Ahreum Im, CPA',
    lead:
      'Ahreum Im is a California-licensed CPA with more than ten years in U.S. individual taxation. From Gangnam, Seoul, she personally handles U.S. tax returns and foreign asset reporting for U.S. citizens and green card holders living in Korea.',
    factsTitle: 'At a glance',
    facts: [
      ['License', 'Certified Public Accountant (CPA), California'],
      ['Education', 'B.A. in Statistics, UC Berkeley'],
      ['Experience', 'More than 10 years in U.S. tax practice'],
      ['Returns prepared', 'More than 5,000 individual returns'],
      ['Coverage', 'Federal returns and returns for all 50 states'],
      ['Memberships', 'AICPA and CalCPA member'],
      ['E-filing', 'Holds an IRS Electronic Filing Identification Number (EFIN)'],
      ['Languages', 'Korean and English'],
    ],
    sections: [
      {
        h: 'Background',
        body: [
          'She spent ten years at H&R Block, serving U.S. military personnel and civilian employees stationed in Korea and Japan. In that time she prepared more than 5,000 individual returns, covering federal tax and all 50 states.',
          'Drawing on experience in tax examinations, she also assists with IRS notices and audits. She now leads Berkeley U.S. Tax Advisors, focusing on foreign income and foreign financial account reporting.',
        ],
        list: [
          'CEO, Berkeley U.S. Tax Advisors (current)',
          'H&R Block, 10 years',
          'Compliance intern, GlaxoSmithKline',
        ],
      },
      {
        h: 'Areas of practice',
        list: [
          'Income tax returns (Form 1040) for U.S. citizens and green card holders in Korea',
          'Foreign account and asset reporting (FBAR, Forms 8938, 8621 and 3520)',
          'Catching up on unfiled years (Streamlined procedures, amended returns)',
          'Avoiding double taxation with the FEIE and the Foreign Tax Credit',
          'Tax matters on giving up citizenship or a green card (exit tax)',
          'IRS notices and examinations',
        ],
      },
      {
        h: 'How she works',
        list: [
          'The CPA handles your matter personally, from consultation through preparation, filing and follow-up.',
          'Korean documents such as withholding receipts and account statements are accepted as they are and organized for the U.S. return.',
          'Before filing, she explains the return and compares the options where a choice exists.',
          'Fees are quoted after the scope is confirmed and before work begins.',
        ],
      },
    ],
    officeTitle: 'Office',
    ctaTitle: 'Talk to Ahreum Im, CPA',
    ctaText: 'Tell us your status and income and we will set out what needs to be filed.',
    ctaButton: 'Request a consultation',
    servicesLink: 'See our services',
    guidesLink: 'Read the tax guides',
  },
};
