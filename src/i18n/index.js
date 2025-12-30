import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    nav: {
      aboutUs: 'About Us',
      services: 'Services',
      checklists: 'Tax Filing Process',
      faq: 'FAQ',
      contactUs: 'Contact Us'
    },
    hero: {
      title: 'Building Trust Through Expertise and Results',
      subtitle: 'Premium Tax Services Leading Global Standards, Your Compass to Financial Success',
    },
    aboutus: {
      title: 'About Berkeley U.S. Tax Advisors',
      content1: 'Berkeley U.S. Tax Advisors specializes in handling complex tax matters, allowing you to focus on your core business.',
      content3: 'Our team of tax experts provides comprehensive tax planning and consulting services tailored to individuals, businesses, and international clients.',
      content4: 'Berkeley U.S. Tax Advisors has deep understanding and experience in U.S. tax regulations and strategic tax consulting.',
      content5: 'We prioritize client information protection and business ethics while providing efficient and accurate solutions.',
      content7: 'We preemptively identify tax law changes and seek optimal tax-saving measures.',
      content8: 'With Berkeley U.S. Tax Advisors, your assets will shine more brilliantly. We will be the best tax partner that rewards your trust.',
      cta: {
        title: 'Reserve right now',
        description: 'Contact us today for professional tax advice tailored to your needs',
        button: 'Contact Us'
      }
    },
    profile: {
      name: 'Ahreum Im',
      title: 'U.S. Certified Public Accountant',
      sections: {
        intro: {
          title: 'Education and Background',
          content: 'As a U.S. Certified Public Accountant (CPA), I graduated from UC Berkeley with a degree in Statistics and have over 10 years of experience in U.S. taxation.'
        },
        experience: {
          title: 'Professional Experience',
          content: 'My key experience includes managing tax services for U.S. military personnel and civilian employees stationed in Korea and Japan at H&R Block, having processed over 5,000 individual tax returns. I have experience with federal taxes and all 50 state tax returns, specializing in foreign income reporting and foreign financial account reporting.'
        },
        expertise: {
          title: 'Expertise',
          content: 'Through my experience participating in tax audits, I have resolved various tax issues and excel at applying complex tax laws in ways optimized for clients. I am committed to helping clients reduce their tax-related burden while ensuring compliance and establishing optimal tax strategies.'
        },
        certification: {
          title: 'Admission',
          content: 'CPA, California'
        },
        career: {
          title: 'Professional Experience',
          list: [ 'Former employee at H&R Block (American tax firm), 10 years of service',
            'Former intern at GlaxoSmithKline (British pharmaceutical company), Compliance Team'
            
          ]
        }
      }
    },
        
    services: {
        title: 'Our Services',
        description: 'Maximizing your benefits with accurate and secure tax services, ensuring complete compliance.',
        service1: {
          items: ['Federal/State Tax Return Preparation']
        },
        service2: {
          items: ['FBAR/FATCA']
        },
        service3: {
          items: ['Expat Tax Services']
        },
        service4: {
          items: ['Streamlined Filing Procedures (IRS Amnesty Program)']
        },
        service5: {
          items: ['Past Due Tax Returns Assistance']
        },
        service6: {
          items: ['Amended Tax Return']
        },
        service7: {
          items: ['Non-Resident Tax Preparation']
        },
        service8: {
          items: ['IRS Letters Review, IRS Audit Representation']
        }
    },
    checklists: {
      title: 'Tax Filing Process',
      description: 'Your 6-Step Guide to Hassle-Free Tax Reporting',
      steps: {
        step1: {
          title: 'New Client Registration',
          description: 'We collect initial information needed for tax filing through visits, email, or phone consultations.'
        },
        step2: {
          title: 'Tax Questionnaire',
          description: 'Please complete the tax questionnaire and send related documents. We may ask additional questions after reviewing your submission.'
        },
        step3: {
          title: 'Service Agreement',
          description: 'Sign the service agreement that clearly outlines our services, responsibilities, and liability terms.'
        },
        step4: {
          title: 'Tax Return Preparation',
          description: 'We prepare your tax return and calculate taxes. Generally completed within 10 business days after receiving the signed agreement.'
        },
        step5: {
          title: 'Review Process',
          description: 'We\'ll notify you when the draft is ready for review and explain the details. We\'re happy to make any necessary adjustments.'
        },
        step6: {
          title: 'Filing Submission',
          description: 'After receiving your e-file consent and payment confirmation, we\'ll submit your return electronically.'
        }
      }
  },
    footer: {
      companyName: 'Berkeley U.S. Tax Advisors Co., Ltd.',
      representative: 'CEO: Ahreum Im',
      address: 'Ste 201, 573 Samseong-ro, Gangnam-gu, Seoul (Exit 6 of Samseong Jungang Station on Line 9)',
      businessNumber: 'Business Registration: 318-81-11334',
      phone: 'Tel: 010-5909-4868',
      fax: 'Fax: 02-6280-1040',
      email: 'amy@youtaxpro.com',
      blog: 'blog.naver.com/berkeleytax'
    },
    faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'How is a "U.S. person" defined for tax purposes, and what are the filing requirements for the 2026 tax year?',
            answer: `"U.S. person" for tax purposes includes U.S. citizens, permanent residents (green card holders), and individuals who meet the Substantial Presence Test. For the 2026 tax year, U.S. persons must file if their gross income exceeds certain thresholds, which vary based on filing status and age. It's crucial to consult with a tax professional to determine your specific filing requirements, as individual circumstances can greatly impact your obligations.`
          },
          {
            question: 'What essential tax documents should I gather and provide to my tax professional to ensure accurate filing?',
            answer: `Essential tax documents for accurate filing typically include:
•	Form W-2 (for employed individuals)
•	1099 forms (for various types of income)
•	1098 forms (for mortgage interest and education expenses)
•	Records of foreign income and assets
•	Receipts for deductible expenses
•	Prior year's tax return
However, the specific documents needed can vary greatly depending on your individual financial situation. A consultation with a tax professional can help ensure you have all necessary documentation for your unique circumstances.
`
          },
          {
            question: 'Could you explain FBAR and FATCA reporting requirements? Why are these filings necessary for U.S. persons with foreign financial assets?',
            answer: `FBAR (Foreign Bank and Financial Accounts Report) and FATCA (Foreign Account Tax Compliance Act) are reporting requirements for U.S. persons with foreign financial assets. FBAR requires reporting foreign financial accounts exceeding $10,000 at any time during the calendar year, while FATCA requires reporting specified foreign assets that exceed certain thresholds. These filings are necessary to ensure tax compliance and prevent offshore tax evasion. The complexities of these requirements often necessitate professional guidance to ensure proper compliance and avoid potential penalties.`
          },
          {
            question: `I'm already paying taxes in a foreign country. How does the U.S. tax system address potential double taxation for its citizens living abroad?`,
            answer: `The U.S. employs various mechanisms to address potential double taxation for its citizens living abroad. These include:
•	Foreign Earned Income Exclusion
•	Foreign Tax Credit
•	Tax treaties with specific countries
However, the application of these mechanisms can be complex and depends on individual circumstances, including the specific country of residence and the nature of the income. Professional tax advice is crucial to navigate these complexities effectively and ensure optimal tax outcomes.
`
          },
          {
            question: 'Beyond annual income and bank information, what additional financial data or assets might I need to report to the IRS?',
            answer: `Beyond annual income and bank information, you may need to report:
•	Foreign pension accounts
•	Investments in foreign mutual funds
•	Ownership in foreign corporations
•	Foreign real estate holdings
•	Cryptocurrency transactions
The reporting requirements can be intricate and vary based on the type and value of assets. A thorough review with a tax professional can help identify all reportable assets and ensure compliance with IRS regulations.
`
          },
          {
            question: 'What methods are available to verify that the IRS has successfully processed my tax return?',
            answer: `To verify that the IRS has processed your tax return, you can:
•	Use the "Where's My Refund?" tool on the IRS website
•	Check your IRS online account
•	Contact the IRS directly (though this may involve long wait times)
A tax professional can often provide insights into the status of your return and assist with any follow-up actions if needed.
`
          },
          {
            question: 'What payment options does the IRS offer for settling tax obligations, and how can I initiate these payments?',
            answer: `The IRS offers several payment options for settling tax obligations, including:
•	Direct Pay from a bank account
•	Credit or debit card payments
•	Installment agreements for those who cannot pay in full
Initiating these payments typically involves using the IRS website or working with a tax professional who can guide you through the process and help determine the most advantageous payment method for your situation.
`
          },
          {
            question: 'What are the most effective ways to contact the IRS for tax-related inquiries or concerns?',
            answer: `Effective ways to contact the IRS include:
•	Using the IRS website for online services and information
•	Calling the appropriate IRS hotline for your specific issue
•	Scheduling an in-person appointment at a local IRS office
However, IRS resources are often strained, leading to long wait times and potential frustration. Working with a tax professional can often provide quicker resolutions to tax-related inquiries or concerns. 
Given the complexities of U.S. tax law, especially for those with international financial interests, it's highly recommended to seek professional tax advice. A qualified tax professional can provide personalized guidance, ensure compliance with all relevant regulations, and potentially identify opportunities for tax optimization.
`
          },
        ]
      },
      contact: {
        title: 'Contact Us',
        officeTitle: 'Our Office',
        address: {
          title: 'Address'
        },

        
        phone: {
          title: 'Phone'
        },
        fax: {
          title: 'Fax'
        },
        email: {
          title: 'Email'
        },
        hours: {
          title: 'Business Hours',
          weekday: 'Monday - Friday: 9:00 AM - 6:00 PM',
          weekend: 'Saturday - Sunday: Closed, Saturday consultations available with prior appointment'
          
        },
        blog: {
          title: 'blog'
        },
      },
      // 🔥 FBAR 페이지 추가 (영어)
    fbar: {
        title: "FBAR Filing Guide",
        description: "Foreign accounts $10K+ = FBAR required! <strong>Berkeley U.S. Tax Advisors will help you</strong>. Accurate calculation, e-filing for fast compliance",
      whatIsFbar: "What is FBAR? (FinCEN Form 114)",
      whoMustFile: {
        title: "Who Must File",
        bank: "Korean bank/securities/insurance accounts", 
        threshold: "Foreign accounts total over $10,000",
        citizen: "US citizens/green card holders"
      },
      deadline: {
        title: "Deadline",
        date: "April 15 (auto extension Oct 15)",
        method: "E-Filing electronic submission",
        free: "We help you file."
      },
      penalties: {
         title: "Real Penalty Cases",
         nonWillful: "Non-Willful Violation",
          willful: "Willful Violation", 
          penaltyAmount: "Penalty Amount",
          cases: "Cases",
          case1: "Per form (not per account), per year.",
          case2: "Whichever is greater, assessed per account per year"
      },
      ctaTitle: "Safe Filing with Berkeley U.S. Tax Advisors",
      ctaDescription: "California CPA handles Korean accounts accurately + e-filing", 
      ctaButton: "Start FBAR Filing"
    }

  },
  ko: {
    nav: {
      aboutUs: '회사소개',
      services: '서비스',
      checklists: '신고절차',
      faq: '자주묻는질문',
      contactUs: '문의하기'
    },
    hero: {
      title: '미국 세금 신고 전문',
      subtitle: '신뢰할 수 있는 프리미엄 세무 서비스',
    },
    aboutus: {
      title: 'About Berkeley U.S. Tax Advisors',
      content1: 'Berkeley U.S. Tax Advisors는 복잡한 세무 업무를 전문적으로 다루며, 고객님께서 본업에 집중하실 수 있도록 돕겠습니다.',
      content3: '세무 전문가로 구성된 저희 팀은 개인, 사업자, 해외 고객님 각각의 특성에 맞춘 포괄적인 세무 계획과 컨설팅 서비스를 제공합니다.',
      content4: '저희는 미국 세무 규정, 전략적 세무 컨설팅에 대한 깊은 이해와 경험을 보유하고 있습니다.',
      content5: '효율적이고 정확한 솔루션을 제공하는 동시에 고객 정보 보호와 기업 윤리를 최우선으로 여깁니다.',
      content7: '세법 변화를 선제적으로 파악하고 최적의 절세 방안을 모색하여, 고객님의 재무적 성공을 든든히 뒷받침하겠습니다.',
      content8: 'Berkeley U.S. Tax Advisors는 고객님의 신뢰에 보답하는 최고의 세무 파트너가 되겠습니다.',
      cta: {
        title: '지금 바로 예약하세요',
        description: '개인 맞춤형 세금 상담은 저희에게 문의주세요',
        button: '문의하기'
      }
    },

  profile: {
    name: '임아름',
    title: '미국공인회계사',
    sections: {
      intro: {
        title: '소개',
        content: '미국 공인회계사(CPA)로서 UC Berkeley 통계학과를 졸업하고 10년 이상의 미국 세무 경력을 보유하고 있습니다.'
      },
      experience: {
        title: '경력 사항',
        content: '주요 경력으로는 H&R Block에서 한국과 일본 주둔 미군 및 군무원 대상 세무 서비스를 담당했으며, 5000건 이상의 개인 세무 신고를 처리했습니다. 연방 세금과 50개 주의 세금 신고 경험이 있으며, 해외 소득 신고와 해외 금융 계좌 신고를 전문적으로 다루고 있습니다.'
      },
      expertise: {
        title: '전문성',
        content: '세무 조사 참여 경험을 통해 다양한 세무 문제를 해결해왔으며, 복잡한 세법을 고객에게 최적화된 방식으로 적용하는 데 강점이 있습니다. 고객이 세금 문제로 인한 부담을 덜고, 법규를 준수하면서도 최적의 세무 전략을 수립할 수 있도록 돕겠습니다.'
      },
      certification: {
        title: '자격증',
        content: '미국공인회계사 (캘리포니아주)'
      },
      career: {
        title: '약력',
        list: [
          '前 미국계 세무법인 H&R Block 10년 근무',
          '前 영국계 제약회사 Glaxo Smith Kline 준법경영팀 인턴'
        ]
      }
    }
  },


    services: {
        title: 'Our Services',
        description: '정확하고 안전한 세무 서비스로 고객의 이익을 최대화하며, 언제나 규정 준수를 약속드립니다.',
        service1: {
          items: ['연방/주 세금 신고']
        },
        service2: {
          items: ['FBAR/FATCA 신고']
        },
        service3: {
          items: ['해외 거주 미국 시민, 영주권자 세금 서비스']
        },
        service4: {
          items: ['간소화 절차 (IRS 면세 프로그램)']
        },
        service5: {
          items: ['기한이 지난 세금 신고 지원']
        },
        service6: {
          items: ['수정 신고서']
        },
        service7: {
          items: ['비거주자 외국인 세금 신고']
        },
        service8: {
          items: ['IRS 통지서, 서신 검토 및 세무 조사 대응']
        }
    },
    checklists: {
      title: 'Tax Filing Process',
      description: '고객님의 원활한 세무 신고를 위한 6단계 프로세스',
      steps: {
        step1: {
          title: '신규 고객 등록',
          description: '대면 상담, 이메일 또는 전화 상담을 통해 신고서 작성에 필요한 기본 정보를 수집합니다.'
        },
        step2: {
          title: '세무 설문지 작성',
          description: '귀하께서 작성하신 세무 설문지와 제출 자료를 검토하며, 필요시 추가 정보를 요청드릴 수 있습니다.'
        },
        step3: {
          title: '수임 계약서 서명',
          description: '각 수임 계약서에는 저희가 제공할 서비스의 성격과 범위, Berkeley U.S. Tax Advisors와 고객님의 책임, 면책 조항이 명확히 명시되어 있습니다.'
        },
        step4: {
          title: '세무 신고서 준비',
          description: '저희는 세무 신고서 준비와 세금 계산 서비스를 제공합니다. 신고서 작성은 계약서 서명 접수 후 10영업일 이내에 완료됩니다.'
        },
        step5: {
          title: '신고서 검토',
          description: '세무 신고서 초안 완성 시 검토 안내 이메일을 발송해 드립니다. 신고서 내용을 상세히 설명해 드리며, 필요한 경우 수정 사항을 반영해 드립니다.'
        },
        step6: {
          title: '신고서 제출',
          description: '전자 신고 동의서 서명과 수수료 납부가 완료되면, 신고서는 전자 방식으로 제출됩니다.'
        }
      }
    },
    footer: {
      companyName: '주식회사 버클리유에스택스어드바이저',
      representative: '대표자: 임아름',
      address: '서울특별시 강남구 삼성로 573 201호 (9호선 삼성중앙역 6번출구 앞)',
      businessNumber: '사업자등록번호: 318-81-11334',
      phone: '대표전화: 010-5909-4868',
      fax: '팩스번호: 02-6280-1040',
      email: 'amy@youtaxpro.com',
      blog: 'blog.naver.com/berkeleytax'
    },
    faq: {
        title: '자주 묻는 질문',
        items: [
          {
            question: '세금 목적상 "미국인"은 어떻게 정의되며, 2026년 세금 연도의 신고 요건은 무엇인가요?',
            answer: '세금 목적상 "미국인"은 미국 시민, 영주권자(그린카드 소지자), 그리고 실질체류테스트를 충족하는 개인을 포함합니다. 2026년 세금 연도에는 총소득이 특정 기준을 초과하는 미국인은 신고해야 하며, 이 기준은 신고 상태와 나이에 따라 다릅니다. 개인의 상황에 따라 신고 의무가 크게 달라질 수 있으므로 당사의 세무 전문가와 상담하는 것이 중요합니다.'
          },
          {
            question: '정확한 세금 신고를 위해 세무 전문가에게 제공해야 할 필수 서류는 무엇인가요?',
            answer: `•	Form W-2 양식 (고용된 개인의 경우)
•	Form 1099 양식 (다양한 유형의 소득)
•	Form 1098 양식 (모기지 이자 및 교육 비용)
•	해외 소득 및 자산 기록
•	공제 가능한 비용에 대한 영수증
•	전년도 세금 신고서
그러나 필요한 구체적인 서류는 개인의 재정 상황에 따라 크게 달라질 수 있습니다. 당사의 세무 전문가의 상담을 통해 귀하의 특별한 상황에 필요한 서류가 무엇인지 정확히 파악할 수 있습니다. 복잡한 세금 문제도 걱정하지 마세요. 저희가 꼼꼼히 챙겨드리겠습니다.
`
          },
          {
            question: 'FBAR와 FATCA 보고 요건에 대해 설명해 주세요. 해외 금융 자산을 보유한 미국인에게 이러한 신고가 왜 필요한가요?',
            answer: `FBAR(해외 은행 및 금융 계좌 보고서)와 FATCA(해외 계좌 납세 의무 이행법)은 해외 금융 자산을 보유한 미국인을 위한 보고 요건입니다. FBAR는 달력 연도 중 언제든 10,000달러를 초과하는 해외 금융 계좌를 보고해야 하며, FATCA는 특정 기준을 초과하는 지정된 해외 자산을 보고해야 합니다. 이러한 신고는 세법 준수를 보장하고 역외 탈세를 방지하기 위해 필요합니다. 이러한 복잡한 규정도 저희의 도움을 받으면 불필요한 벌금도 피할 수 있고 안전하게 세금 문제를 해결할 수 있습니다.`
          },
          {
            question: '저는 이미 외국에서 세금을 납부하고 있습니다. 미국 세금 제도는 해외 거주 시민의 이중과세 문제를 어떻게 다루나요?',
            answer: `미국은 해외 거주 시민의 잠재적 이중과세 문제를 해결하기 위해 여러 가지 방법을 사용하고 있습니다. 예를 들어,
•	해외에서 번 돈에 대해 일정 금액까지 세금을 면제해 주는 제도
•	외국에 낸 세금을 미국 세금에서 공제해 주는 혜택
•	특정 국가들과 조세조약을 통한 세금 혜택
저희와 상담하시면 복잡한 세법 규정 속에서도 최적의 해결책을 찾으실 수 있습니다. 이를 통해 세금 절감과 함께 불필요한 걱정을 덜어드립니다.
`
          },
          {
            question: '연간 소득과 해외 은행 정보 외에 IRS에 보고해야 할 추가적인 재무 데이터나 자산은 무엇인가요?',
            answer: `연간 소득과 은행 정보 외에도 다음을 보고해야 할 수 있습니다:
•	해외 연금 계좌
•	해외 뮤추얼 펀드 투자
•	해외 기업 소유권
•	해외 부동산 보유
•	암호화폐 거래
자산의 종류나 금액에 따라 신고 방식이 다르니 보고 요건은 복잡할 수 있습니다. 귀하의 모든 자산을 꼼꼼히 살펴보고, 빠짐없이 신고할 수 있도록 안내해 드리겠습니다. IRS 규정을 제대로 지키면서도, 불필요한 신고는 피할 수 있도록 저희가 도와드리겠습니다.
`
          },
          {
            question: 'IRS가 제 세금신고서를 성공적으로 처리했는지 확인할 수 있는 방법은 무엇인가요?',
            answer: `IRS가 귀하의 세금 신고서를 처리했는지 확인하려면 다음과 같은 방법이 있습니다.
•	IRS 웹사이트의 "Where's My Refund?" 도구 사용
•	IRS 온라인 계정 확인
•	IRS에 직접 연락 (단, 대기 시간이 길 수 있음)
당사의 세무 전문가가 귀하의 신고서 처리 현황을 지속적으로 모니터링하며 상세히 안내해 드립니다. 추가 조치가 필요한 경우 즉시 연락드리고 필요한 지원을 제공해 드리니, 세금 문제는 저희에게 안심하고 맡겨주시기 바랍니다.
`
          },
          {
            question: 'IRS가 제공하는 세금 납부 옵션은 무엇이며, 어떻게 이러한 납부를 시작할 수 있나요?',
            answer: `IRS는 세금 납부를 위해 다음과 같은 여러 옵션을 제공합니다:
•	은행 계좌에서 직접 납부 (단 Routing number와 Account number가 있는 계좌여야 함)
•	신용카드 또는 직불카드 납부
•	전액 납부가 불가능한 경우 분할 납부 계약
이러한 납부를 시작하려면 보통 IRS 웹사이트를 이용하거나, 귀하의 상황에 가장 적합한 납부 방법을 찾는 데 도움을 줄 수 있는 저희와 상담하는 것이 좋습니다. 특히 미국 세법은 복잡하고, 국제 금융 관련 사항이 있는 경우 더욱 그렇기 때문에 전문적인 세무 조언을 받는 것이 중요합니다.
`
          },
          {
            question: '세금 관련 문의나 우려사항에 대해 IRS에 연락할 수 있는 가장 효과적인 방법은 무엇인가요?',
            answer: `IRS에 연락할 수 있는 효과적인 방법은 다음과 같습니다:
•	온라인 서비스 및 정보를 위해 IRS 웹사이트 사용
•	특정 문제에 대한 적절한 IRS 핫라인 전화
•	지역 IRS 사무소에서 대면 약속 예약
IRS는 업무 과중으로 처리가 지연되어 납세자들이 어려움을 겪을 수 있으나, 저희의 전문성을 활용하시면 세금 문제를 보다 효율적으로 해결하실 수 있습니다. 저희는 IRS 절차에 익숙하여 복잡한 세금 문제도 전문적으로 처리하며, 개인별 맞춤형 상담을 통해 귀하의 상황에 가장 적합한 해결책을 제시해 드립니다. 까다로운 세법에 대한 전문 지식을 바탕으로 법규 준수는 물론, 최적의 세금 절감 방안을 찾아 불필요한 세금 부담을 줄이고 효과적인 세무 전략을 수립해 드립니다.
`
          },
        ]
      },
      contact: {
        title: '문의하기',
        officeTitle: '사무실 정보',
        address: {
          title: '주소'
        },
        phone: {
          title: '전화'
        },
        fax: {
            title: '팩스'
        },
        email: {
          title: '이메일'
        },
        hours: {
          title: '영업시간',
          weekday: '월요일 - 금요일: 오전 9:00 - 오후 6:00',
          weekend: '토요일 - 일요일: 휴무, 사전 예약시 토요일 상담 가능'
        },
        blog: {
          title: '블로그'
        },
      },
    // 🔥 FBAR 페이지 추가 (한글)
    fbar: {
      title: "FBAR 신고 안내",
      description: "해외 계좌 $10K 초과 = FBAR 필수! 벌금 위험에서 <strong>버클리유에스택스어드바이져가 도와드리겠습니다</strong>. 정확한 계산, 전자제출로 빠르게",
      whatIsFbar: "FBAR란? (FinCEN Form 114)",
      ctaTitle: "Berkeley U.S. Tax Advisors에서 안전하게",
      ctaDescription: "캘리포니아 CPA가 한국계좌들을 정확하게 계산 + 전자신고",
      ctaButton: "FBAR 신고 문의",
      whoMustFile: {
        title: "신고 대상",
        bank: "한국 은행/증권/보험 계좌",
        threshold: "해외 계좌 총액 $10,000 초과", 
        citizen: "미국 시민권자/영주권자"
      },
      deadline: {
        title: "마감일",
        date: "4월 15일 (자동 연장 10/15)",
        method: "E-Filing 전자 제출",
        free: "신고를 도와드리고 있습니다."
      },
      penalties: {
      title: "실제 벌금 사례",
    nonWillful: "비고의적 위반",
    willful: "고의적 위반",
    penaltyAmount: "벌금액",
    cases: "사례",
    case1: "계좌별이 아니라 리포트당, 연도당",
    case2: "둘 중 큰 금액으로, 계좌별, 연도당 부과"
      }
    }
      }
};

export const i18n = createI18n({
  legacy: false,
  locale: 'ko',
  fallbackLocale: 'ko',  // 'en'에서 'ko'로 변경
  messages,
  silentFallbackWarn: true,  // 폴백 경고 메시지 숨기기
  silentTranslationWarn: true,  // 번역 누락 경고 숨기기
});