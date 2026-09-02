import { createRouter, createWebHistory } from 'vue-router';
import { i18n } from '../i18n'; // i18n import 추가
import FAQ from '../pages/FAQ.vue';
import Home from '../pages/Home.vue';
import ContactUs from '../pages/ContactUs.vue';
import Fbar from '../pages/Fbar.vue';

const SITE_URL = 'https://youtaxpro.com';
const SITE_NAME = 'Berkeley U.S. Tax Advisors';

// 라우트별 다국어 메타 정보 (title / description)
const routeMeta = {
  Home: {
    title: {
      ko: '미국 세금 신고 전문 CPA | 한국 거주 미국인 | Berkeley U.S. Tax Advisors',
      en: 'U.S. Tax Filing for Americans in Korea | Berkeley U.S. Tax Advisors',
    },
    description: {
      ko: '한국 거주 미국 시민권자·영주권자 미국세금 신고 전문. 캘리포니아 CPA가 FBAR·FATCA·PFIC·Exit Tax·해외주식 신고와 이중과세를 정확하게 처리합니다. 상담전화 010-5909-4868',
      en: 'U.S. tax filing for American citizens and green card holders living in Korea. A California CPA handles FBAR, FATCA, PFIC, Exit Tax and double-taxation issues.',
    },
  },
  FAQ: {
    title: {
      ko: '미국세금 자주 묻는 질문(FAQ) | 한국 거주 미국인 세무 | Berkeley U.S. Tax Advisors',
      en: 'U.S. Tax FAQ for Americans in Korea | Berkeley U.S. Tax Advisors',
    },
    description: {
      ko: '미국 납세자 정의, 필요 서류, FBAR·FATCA, 이중과세 방지, IRS 처리 확인 등 한국 거주 미국인이 가장 많이 묻는 미국세금 질문과 답변.',
      en: 'Answers to the most common U.S. tax questions for Americans in Korea: who must file, required documents, FBAR/FATCA, double taxation and IRS processing.',
    },
  },
  ContactUs: {
    title: {
      ko: '상담 문의 · 오시는 길 | 강남 미국세금 전문 | Berkeley U.S. Tax Advisors',
      en: 'Contact & Location | U.S. Tax Advisors in Gangnam, Seoul',
    },
    description: {
      ko: '서울 강남 삼성로 사무실 위치, 전화·이메일·영업시간 안내. 한국에서 미국세금 상담을 받아보세요.',
      en: 'Office location in Samseong-ro, Gangnam, Seoul, with phone, email and business hours. Book a U.S. tax consultation in Korea.',
    },
  },
  Fbar: {
    title: {
      ko: 'FBAR(해외금융계좌 신고) 한국 전문 | 캘리포니아 CPA | Berkeley U.S. Tax Advisors',
      en: 'FBAR Filing for Americans in Korea | California CPA | Berkeley U.S. Tax Advisors',
    },
    description: {
      ko: '해외 계좌 합계가 연중 한 번이라도 $10,000을 넘으면 FBAR(FinCEN Form 114) 신고가 의무입니다. 한국 계좌 정확 계산과 빠른 e-filing으로 벌금 위험을 방지합니다.',
      en: 'FBAR (FinCEN Form 114) is mandatory if your foreign accounts exceed $10,000 at any point in the year. Accurate calculation of Korean accounts and fast e-filing.',
    },
  },
  Streamlined: {
    title: {
      ko: 'Streamlined 간소화 절차(IRS 벌금 면제 프로그램) 전문 | 캘리포니아 CPA',
      en: 'Streamlined Filing Procedures (IRS Amnesty Program) | California CPA',
    },
    description: {
      ko: '과거 FBAR·FATCA 미신고자를 위한 IRS 공식 구제 프로그램. 비고의적 위반·해외 거주자는 벌금 0%로 6년치 미신고를 정리할 수 있습니다.',
      en: 'The official IRS relief program for past FBAR/FATCA non-filers. Non-willful violators and overseas residents can resolve years of non-filing with a 0% penalty.',
    },
  },
};

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/faq', name: 'FAQ', component: FAQ },
  { path: '/contactus', name: 'ContactUs', component: ContactUs },
  { path: '/fbar', name: 'Fbar', component: Fbar },
  { path: '/streamlined', name: 'Streamlined', component: () => import('../pages/Streamlined.vue') },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes.map((r) => ({
    ...r,
    meta: { ...(r.meta || {}), ...(routeMeta[r.name] || {}) },
  })),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    return { top: 0 };
  },
});

// --- 페이지별 <title> / meta description / canonical / OG 태그 갱신 ---
function pick(value, locale) {
  if (value == null) return '';
  if (typeof value === 'function') return value();
  if (typeof value === 'string') return value;
  return value[locale] || value.ko || value.en || '';
}

function setMeta(selector, attr, value) {
  if (!value) return;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    const [, name] = selector.match(/\[(?:name|property)="?([^"\]]+)"?\]/) || [];
    if (selector.includes('property')) el.setAttribute('property', name);
    else el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

router.afterEach((to) => {
  const locale = i18n.global.locale.value || 'ko';
  const meta = to.meta || {};
  const title = pick(meta.title, locale) || `${SITE_NAME}`;
  const description = pick(meta.description, locale);
  const canonical = SITE_URL + (to.path === '/' ? '/' : to.path);

  document.title = title;
  document.documentElement.lang = locale;
  setMeta('meta[name="description"]', 'content', description);
  setCanonical(canonical);

  // Open Graph / Twitter 동기화
  setMeta('meta[property="og:title"]', 'content', title);
  setMeta('meta[property="og:description"]', 'content', description);
  setMeta('meta[property="og:url"]', 'content', canonical);
  setMeta('meta[name="twitter:title"]', 'content', title);
  setMeta('meta[name="twitter:description"]', 'content', description);
  setMeta('meta[name="twitter:url"]', 'content', canonical);
});

export default router;
