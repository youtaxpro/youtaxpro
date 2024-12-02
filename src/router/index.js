import { createRouter, createWebHistory } from 'vue-router';
import FAQ from '../pages/FAQ.vue';
import Home from '../pages/Home.vue';
import ContactUs from '../pages/ContactUs.vue';

const router = createRouter({
  history: createWebHistory(),
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
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // 해시가 있는 경우 (예: /#aboutus)
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      // 해시가 없는 경우 페이지 최상단으로
      return { top: 0 };
    }
  },
});

export default router;
