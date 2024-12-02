import { createRouter, createWebHistory } from 'vue-router';
import FAQ from '../pages/FAQ.vue';
import Home from '../pages/Home.vue';
import ContactUs from '../pages/ContactUs.vue';

const router = createRouter({
  history: createWebHistory('/youtaxpro/'), // GitHub Pages base URL 추가
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