// 개인정보처리방침 본문. 한국어가 법적 기준, 영어는 참고 번역.
// 보유기간·개인정보 보호책임자 등은 회사 정책에 맞게 조정 가능.

export const EFFECTIVE_DATE = '2026-09-02';

export const privacyPolicy = {
  ko: {
    title: '개인정보처리방침',
    updated: '시행일: 2026년 9월 2일',
    intro:
      '주식회사 버클리유에스택스어드바이저(이하 "회사")는 「개인정보 보호법」 등 관련 법령을 준수하며, 정보주체의 개인정보를 보호하고 관련 고충을 신속하게 처리하기 위하여 다음과 같이 개인정보처리방침을 수립·공개합니다.',
    sections: [
      {
        h: '1. 개인정보의 처리 목적',
        body: [
          '회사는 다음의 목적을 위하여 개인정보를 처리하며, 목적 이외의 용도로는 이용하지 않습니다.',
          { list: [
            '세무 상담 신청의 접수·확인 및 상담 결과 회신',
            '서비스 제공 및 계약의 이행에 관한 연락',
            '웹사이트 이용 현황 분석 및 서비스 개선',
          ] },
        ],
      },
      {
        h: '2. 수집하는 개인정보 항목 및 수집 방법',
        body: [
          '가. 홈페이지 상담 신청 폼',
          { list: [
            '필수 항목: 성명, 이메일 주소, 전화번호, 납세자 신분 유형(미국 시민권자·영주권자, 외국인, 국외 거주자 등)',
            '선택 항목: 이용자가 문의 내용에 직접 기재하는 정보',
          ] },
          '나. 서비스 이용 과정에서 자동으로 생성·수집되는 정보',
          { list: [
            '쿠키, 접속 IP 주소, 브라우저 및 기기 정보, 방문 일시, 서비스 이용 기록(웹 분석 도구를 통해 자동 수집)',
          ] },
          '수집 방법: 홈페이지 상담 신청 폼 입력, 웹 분석 도구(Google Analytics)를 통한 자동 수집.',
        ],
      },
      {
        h: '3. 개인정보의 처리 및 보유 기간',
        body: [
          { list: [
            '상담 신청 정보: 상담 완료 후 3년간 보관 후 파기합니다. 다만 이용자가 그 전에 삭제를 요청하는 경우 지체 없이 파기합니다.',
            '자동 수집 정보(웹 분석): 수집일로부터 최대 26개월',
            '관계 법령에 따라 보존이 필요한 경우 해당 법령에서 정한 기간 동안 보관합니다.',
          ] },
        ],
      },
      {
        h: '4. 개인정보의 제3자 제공',
        body: [
          '회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우에는 예외로 합니다.',
        ],
      },
      {
        h: '5. 개인정보 처리업무의 위탁 및 국외 이전',
        body: [
          '회사는 원활한 서비스 제공을 위하여 아래와 같이 개인정보 처리업무를 위탁하고 있으며, 해당 수탁업체는 국외에 소재합니다. 각 이전은 서비스 이용 시점에 정보통신망을 통하여 이루어집니다.',
          { table: {
            headers: ['수탁업체', '위탁 업무', '이전 국가', '보유·이용 기간'],
            rows: [
              ['Web3Forms (web3forms.com)', '상담 신청 폼 데이터의 전송 및 이메일 회신 처리', '미국', '위탁 목적 달성 시까지'],
              ['Google LLC', 'Google Analytics를 통한 웹사이트 이용 분석', '미국', '최대 26개월'],
              ['GitHub, Inc.', '웹사이트 호스팅(GitHub Pages) 및 접속 로그 처리', '미국', '위탁계약 종료 시까지'],
            ],
          } },
          '이용자는 개인정보의 국외 이전을 거부할 수 있으며, 이 경우 상담 신청 등 일부 서비스 이용이 제한될 수 있습니다.',
        ],
      },
      {
        h: '6. 정보주체의 권리·의무 및 행사 방법',
        body: [
          '이용자는 언제든지 자신의 개인정보에 대한 열람·정정·삭제·처리정지를 요구할 수 있습니다. 요청은 아래 "개인정보 보호책임자"에게 이메일 또는 전화로 하실 수 있으며, 회사는 관련 법령에 따라 지체 없이 조치합니다.',
        ],
      },
      {
        h: '7. 쿠키의 설치·운영 및 거부',
        body: [
          '회사는 이용 현황 분석을 위하여 Google Analytics의 쿠키를 사용합니다. 이용자는 웹브라우저 설정을 통해 쿠키 저장을 거부할 수 있으며, Google Analytics 차단 브라우저 부가기능(tools.google.com/dlpage/gaoptout)을 설치할 수 있습니다. 쿠키 저장을 거부하더라도 홈페이지의 주요 기능 이용에는 지장이 없습니다.',
        ],
      },
      {
        h: '8. 개인정보의 파기 절차 및 방법',
        body: [
          '보유기간이 경과하였거나 처리 목적이 달성된 개인정보는 지체 없이 파기합니다. 전자적 파일 형태의 정보는 복구가 불가능한 방법으로 삭제하며, 종이 문서에 기록된 정보는 분쇄하거나 소각합니다.',
        ],
      },
      {
        h: '9. 개인정보의 안전성 확보 조치',
        body: [
          '회사는 개인정보에 대한 접근 권한을 업무상 필요한 최소한의 인원으로 제한하고, 개인정보가 전송되는 구간을 암호화(HTTPS)하며, 관련 법령에 따른 관리적·기술적 보호조치를 시행합니다.',
        ],
      },
      {
        h: '10. 개인정보 보호책임자',
        body: [
          { list: [
            '성명: 임아름',
            '직책: 대표',
            '연락처: amy@youtaxpro.com / 010-5909-4868',
          ] },
          '이용자는 회사의 서비스를 이용하면서 발생한 모든 개인정보 보호 관련 문의, 불만 처리, 피해 구제 등을 개인정보 보호책임자에게 문의할 수 있습니다.',
        ],
      },
      {
        h: '11. 권익침해 구제 방법',
        body: [
          '개인정보 침해로 인한 상담·신고가 필요한 경우 아래 기관에 문의하실 수 있습니다.',
          { list: [
            '개인정보분쟁조정위원회: kopico.go.kr / 1833-6972',
            '개인정보침해신고센터: privacy.kisa.or.kr / 국번 없이 118',
            '대검찰청 사이버수사과: spo.go.kr / 국번 없이 1301',
            '경찰청 사이버수사국: ecrm.police.go.kr / 국번 없이 182',
          ] },
        ],
      },
      {
        h: '12. 개인정보처리방침의 변경',
        body: [
          '이 개인정보처리방침은 2026년 9월 2일부터 적용됩니다. 법령·정책 또는 보안기술의 변경에 따라 내용의 추가·삭제 및 수정이 있을 경우, 변경 시행 최소 7일 전에 홈페이지를 통하여 고지합니다.',
        ],
      },
    ],
  },

  en: {
    title: 'Privacy Policy',
    updated: 'Effective date: September 2, 2026',
    intro:
      'Berkeley U.S. Tax Advisors Co., Ltd. ("the Company") complies with the Personal Information Protection Act ("PIPA") of the Republic of Korea and other applicable laws. This Privacy Policy explains how the Company collects, uses, and protects personal information. This policy is governed by the laws of the Republic of Korea; the Korean-language version prevails in the event of any discrepancy.',
    sections: [
      {
        h: '1. Purposes of Processing',
        body: [
          'The Company processes personal information for the following purposes only:',
          { list: [
            'Receiving and confirming consultation requests and replying with results',
            'Communicating about the provision of services and performance of engagements',
            'Analyzing website usage and improving the service',
          ] },
        ],
      },
      {
        h: '2. Items Collected and Methods of Collection',
        body: [
          'a. Consultation request form on the website',
          { list: [
            'Required: name, email address, phone number, taxpayer status (U.S. citizen / green card holder, foreign national, expatriate, etc.)',
            'Optional: any information the user chooses to enter in the message field',
          ] },
          'b. Information generated automatically during use of the service',
          { list: [
            'Cookies, access IP address, browser and device information, visit date and time, and service usage records (collected automatically via web analytics)',
          ] },
          'Methods: direct entry in the website consultation form; automatic collection via web analytics (Google Analytics).',
        ],
      },
      {
        h: '3. Retention Period',
        body: [
          { list: [
            'Consultation request information: retained for 3 years after the consultation is completed, then destroyed. If the user requests deletion earlier, it is destroyed without delay.',
            'Automatically collected analytics data: up to 26 months from collection',
            'Where retention is required by law, the information is kept for the period prescribed by that law.',
          ] },
        ],
      },
      {
        h: '4. Provision to Third Parties',
        body: [
          'The Company does not, as a rule, provide users’ personal information to third parties, except where required by law or requested by an investigative authority in accordance with the procedures and methods prescribed by law.',
        ],
      },
      {
        h: '5. Outsourcing and Overseas Transfer',
        body: [
          'The Company outsources the processing of personal information as set out below. These processors are located outside the Republic of Korea, and each transfer occurs over the network at the time the service is used.',
          { table: {
            headers: ['Processor', 'Outsourced task', 'Country', 'Retention'],
            rows: [
              ['Web3Forms (web3forms.com)', 'Transmission of consultation form data and email delivery', 'United States', 'Until the purpose is fulfilled'],
              ['Google LLC', 'Website usage analysis via Google Analytics', 'United States', 'Up to 26 months'],
              ['GitHub, Inc.', 'Website hosting (GitHub Pages) and access logs', 'United States', 'Until the contract ends'],
            ],
          } },
          'Users may refuse the overseas transfer of their personal information; in that case, some services such as submitting a consultation request may be unavailable.',
        ],
      },
      {
        h: '6. Rights of the Data Subject and How to Exercise Them',
        body: [
          'Users may at any time request access to, correction of, deletion of, or suspension of processing of their personal information. Requests may be made to the Personal Information Protection Officer below by email or phone, and the Company will act on them without delay in accordance with the law.',
        ],
      },
      {
        h: '7. Cookies',
        body: [
          'The Company uses Google Analytics cookies to analyze usage. Users can refuse cookies through their browser settings and can install the Google Analytics opt-out browser add-on (tools.google.com/dlpage/gaoptout). Refusing cookies does not affect use of the website’s main features.',
        ],
      },
      {
        h: '8. Destruction of Personal Information',
        body: [
          'Personal information is destroyed without delay once the retention period expires or the purpose of processing is achieved. Electronic files are deleted by a method that prevents recovery; paper records are shredded or incinerated.',
        ],
      },
      {
        h: '9. Security Measures',
        body: [
          'The Company limits access to personal information to the minimum number of staff necessary, encrypts data in transit (HTTPS), and applies the administrative and technical safeguards required by law.',
        ],
      },
      {
        h: '10. Personal Information Protection Officer',
        body: [
          { list: [
            'Name: Ahreum Im',
            'Title: CEO',
            'Contact: amy@youtaxpro.com / +82-10-5909-4868',
          ] },
          'Users may direct all inquiries, complaints, and remedy requests relating to personal information protection to the officer above.',
        ],
      },
      {
        h: '11. Remedies for Infringement',
        body: [
          'For consultation or reporting of personal information infringement, users may contact the following (Korean) authorities:',
          { list: [
            'Personal Information Dispute Mediation Committee: kopico.go.kr / +82-1833-6972',
            'Privacy Infringement Report Center (KISA): privacy.kisa.or.kr / 118',
            'Supreme Prosecutors’ Office Cybercrime Division: spo.go.kr / 1301',
            'National Police Agency Cyber Bureau: ecrm.police.go.kr / 182',
          ] },
        ],
      },
      {
        h: '12. Changes to This Policy',
        body: [
          'This Privacy Policy takes effect on September 2, 2026. If content is added, deleted, or amended due to changes in law, policy, or security technology, the Company will announce the change on the website at least 7 days before it takes effect.',
        ],
      },
    ],
  },
};
