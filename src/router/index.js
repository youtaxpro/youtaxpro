import { createRouter, createWebHashHistory } from 'vue-router';  // History 변경
import FAQ from '../pages/FAQ.vue';
import Home from '../pages/Home.vue';
import ContactUs from '../pages/ContactUs.vue';

const router = createRouter({
  history: createWebHashHistory('/youtaxpro/'), // Hash 모드로 변경
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
