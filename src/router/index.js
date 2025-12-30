import { createRouter, createWebHashHistory } from 'vue-router';
import { i18n } from '../i18n'; // i18n import 추가
import FAQ from '../pages/FAQ.vue';
import Home from '../pages/Home.vue';
import ContactUs from '../pages/ContactUs.vue';
import Fbar from '../pages/Fbar.vue';

const router = createRouter({
  history: createWebHashHistory('/youtaxpro/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQ,
    },
    {
      path: '/contactus',
      name: 'ContactUs',
      component: ContactUs,
    },
    {
      path: '/fbar',
      name: 'Fbar',
      component: Fbar,  // 👈 lazy loading 확인
      meta: {
        // 다국어 title 자동 설정
        title: () => i18n.global.locale.value === 'ko' 
          ? 'FBAR 신고 한국 전문 | 캘리포니아 CPA | Berkeley' 
          : 'FBAR Filing Expert | California CPA | Berkeley'
      }
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      return { top: 0 };
    }
  },
});

export default router;
