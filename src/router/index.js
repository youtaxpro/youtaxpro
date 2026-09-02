import { createRouter, createWebHistory } from 'vue-router';
import { i18n } from '../i18n';
import {
  SITE_NAME,
  LOCALES,
  routeSeoByName,
  canonicalFor,
  alternatesFor,
} from '../seo/routeMeta';
import { gaPageView } from '../seo/analytics';
import FAQ from '../pages/FAQ.vue';
import Home from '../pages/Home.vue';
import ContactUs from '../pages/ContactUs.vue';
import Fbar from '../pages/Fbar.vue';

// 기준 라우트(ko). en은 /en 접두어로 자동 복제된다.
const Landing = () => import('../pages/LandingPage.vue');

const baseRoutes = [
  { seg: '', name: 'Home', component: Home },
  { seg: 'faq', name: 'FAQ', component: FAQ },
  { seg: 'contactus', name: 'ContactUs', component: ContactUs },
  { seg: 'feie', name: 'FeieLanding', component: Landing },
  { seg: 'fbar', name: 'Fbar', component: Fbar },
  { seg: 'streamlined', name: 'Streamlined', component: () => import('../pages/Streamlined.vue') },
  { seg: 'privacy', name: 'PrivacyPolicy', component: () => import('../pages/PrivacyPolicy.vue') },
];

const routes = [];
for (const locale of LOCALES) {
  const prefix = locale === 'en' ? '/en' : '';
  for (const r of baseRoutes) {
    routes.push({
      path: r.seg === '' ? prefix || '/' : `${prefix}/${r.seg}`,
      name: locale === 'ko' ? r.name : `${r.name}__en`,
      component: r.component,
      meta: { seo: routeSeoByName[r.name] || null, locale },
    });
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    return { top: 0 };
  },
});

// URL이 로케일의 기준 — 진입 시 i18n 로케일을 URL에 맞춘다.
router.beforeEach((to) => {
  const locale = (to.meta && to.meta.locale) || 'ko';
  if (i18n.global.locale.value !== locale) i18n.global.locale.value = locale;
});

// --- 페이지별 <title> / description / canonical / hreflang / OG 갱신 ---
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

function setLink(rel, href, hreflang) {
  const sel = hreflang
    ? `link[rel="alternate"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]`;
  let el = document.head.querySelector(sel);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (hreflang) el.setAttribute('hreflang', hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

router.afterEach((to) => {
  const locale = (to.meta && to.meta.locale) || 'ko';
  const seo = (to.meta && to.meta.seo) || null;
  const basePath = seo ? seo.path : '/';
  const title = (seo && localized(seo.title, locale)) || SITE_NAME;
  const description = seo ? localized(seo.description, locale) : '';
  const canonical = canonicalFor(basePath, locale);

  document.title = title;
  document.documentElement.lang = locale;
  setMeta('meta[name="description"]', 'content', description);
  setLink('canonical', canonical);
  for (const alt of alternatesFor(basePath)) setLink('alternate', alt.href, alt.hreflang);

  setMeta('meta[property="og:title"]', 'content', title);
  setMeta('meta[property="og:description"]', 'content', description);
  setMeta('meta[property="og:url"]', 'content', canonical);
  setMeta('meta[property="og:locale"]', 'content', locale === 'en' ? 'en_US' : 'ko_KR');
  setMeta('meta[name="twitter:title"]', 'content', title);
  setMeta('meta[name="twitter:description"]', 'content', description);
  setMeta('meta[name="twitter:url"]', 'content', canonical);

  gaPageView({ path: to.fullPath, title });
});

export default router;
