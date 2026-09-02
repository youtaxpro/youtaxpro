import { createRouter, createWebHistory } from 'vue-router';
import { i18n } from '../i18n'; // i18n import 추가
import { SITE_NAME, routeSeoByName, canonicalFor } from '../seo/routeMeta';
import { gaPageView } from '../seo/analytics';
import FAQ from '../pages/FAQ.vue';
import Home from '../pages/Home.vue';
import ContactUs from '../pages/ContactUs.vue';
import Fbar from '../pages/Fbar.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/faq', name: 'FAQ', component: FAQ },
  { path: '/contactus', name: 'ContactUs', component: ContactUs },
  { path: '/fbar', name: 'Fbar', component: Fbar },
  { path: '/streamlined', name: 'Streamlined', component: () => import('../pages/Streamlined.vue') },
  { path: '/privacy', name: 'PrivacyPolicy', component: () => import('../pages/PrivacyPolicy.vue') },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes.map((r) => ({
    ...r,
    meta: { ...(r.meta || {}), seo: routeSeoByName[r.name] || null },
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
function localized(value, locale) {
  if (value == null) return '';
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
  const seo = (to.meta && to.meta.seo) || null;
  const title = (seo && localized(seo.title, locale)) || SITE_NAME;
  const description = seo ? localized(seo.description, locale) : '';
  const canonical = canonicalFor(to.path === '/' ? '/' : to.path);

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

  // SPA 페이지뷰 (첫 로드 포함 — index.html에서 send_page_view:false로 설정)
  gaPageView({ path: to.fullPath, title });
});

export default router;
