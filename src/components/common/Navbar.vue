<template>
  <nav class="nav" :class="{ 'nav--overlay': overlay && !isScrolled && !isMenuOpen }" aria-label="Primary">
    <div class="nav-inner">
      <router-link :to="lp('/')" class="brand" aria-label="Berkeley U.S. Tax Advisors">
        <img src="/berk.png" alt="" width="44" height="44" />
        <span class="brand-text">
          <strong>Berkeley</strong>
          <small>U.S. Tax Advisors</small>
        </span>
      </router-link>

      <ul class="nav-links">
        <li v-for="item in items" :key="item.to">
          <router-link :to="lp(item.to)">{{ $t(item.label) }}</router-link>
        </li>
      </ul>

      <div class="nav-actions">
        <div class="lang" role="group" aria-label="Language">
          <button type="button" :class="{ active: currentLocale === 'ko' }" @click="changeLanguage('ko')">KO</button>
          <button type="button" :class="{ active: currentLocale === 'en' }" @click="changeLanguage('en')">EN</button>
        </div>
        <router-link :to="lp('/contactus')" class="btn btn-gold nav-cta">
          {{ currentLocale === 'en' ? 'Free consultation' : '상담 신청' }}
        </router-link>
        <button
          type="button"
          class="menu-btn"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
          @click="toggleMenu"
        >
          <component :is="isMenuOpen ? 'X' : 'Menu'" :size="26" aria-hidden="true" />
        </button>
      </div>
    </div>

    <!-- 모바일 메뉴 -->
    <div id="mobile-menu" class="mobile-menu" :class="{ open: isMenuOpen }">
      <ul>
        <li v-for="item in items" :key="item.to">
          <router-link :to="lp(item.to)" @click="closeMenu">{{ $t(item.label) }}</router-link>
        </li>
      </ul>
      <router-link :to="lp('/contactus')" class="btn btn-gold" @click="closeMenu">
        {{ currentLocale === 'en' ? 'Free consultation' : '상담 신청' }}
      </router-link>
      <a :href="CONTACT.phoneHref" class="mobile-phone">{{ CONTACT.phoneDisplay }}</a>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { Menu, X } from 'lucide-vue-next';
import { useLocalePath } from '../../composables/useLocalePath';
import { CONTACT } from '../../data/site';

const items = [
  { to: '/#aboutus', label: 'nav.aboutUs' },
  { to: '/#services', label: 'nav.services' },
  { to: '/guides', label: 'nav.guides' },
  { to: '/#checklists', label: 'nav.checklists' },
  { to: '/faq', label: 'nav.faq' },
  { to: '/contactus', label: 'nav.contactUs' },
];

export default {
  name: 'Navbar',
  components: { Menu, X },
  props: {
    // 홈 히어로 위에서는 투명하게 겹쳐 보이도록
    overlay: { type: Boolean, default: false },
  },
  emits: ['toggle-menu'],
  setup(props, { emit }) {
    const router = useRouter();
    const { currentLocale, lp, switchLocalePath } = useLocalePath();
    const isScrolled = ref(false);
    const isMenuOpen = ref(false);

    const onScroll = () => {
      isScrolled.value = window.scrollY > 24;
    };

    const setMenu = (open) => {
      isMenuOpen.value = open;
      emit('toggle-menu', open);
    };
    const toggleMenu = () => setMenu(!isMenuOpen.value);
    const closeMenu = () => setMenu(false);

    const changeLanguage = (lang) => {
      try { localStorage.setItem('userLanguage', lang); } catch (e) { /* noop */ }
      closeMenu();
      router.push(switchLocalePath(lang));
    };

    onMounted(() => {
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    });
    onBeforeUnmount(() => window.removeEventListener('scroll', onScroll));

    return { items, CONTACT, isScrolled, isMenuOpen, currentLocale, lp, toggleMenu, closeMenu, changeLanguage };
  },
};
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: saturate(160%) blur(10px);
  border-bottom: 1px solid var(--line);
  transition: background-color 0.25s ease, border-color 0.25s ease;
}

.nav-inner {
  max-width: 1280px;
  margin: 0 auto;
  height: 72px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  color: var(--navy-800);
  text-align: left;
}
.brand img { width: 44px; height: 44px; background: #fff; border-radius: 50%; }
.brand-text { display: flex; flex-direction: column; line-height: 1.1; }
.brand-text strong { font-size: 1.12rem; font-weight: 800; letter-spacing: -0.01em; }
.brand-text small { font-size: 0.68rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; opacity: 0.75; }

.nav-links {
  display: flex;
  gap: 1.9rem;
  list-style: none;
}
.nav-links a {
  position: relative;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--ink);
  padding: 0.4rem 0;
}
.nav-links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background: var(--gold-500);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease;
}
.nav-links a:hover { color: var(--navy-800); }
.nav-links a:hover::after { transform: scaleX(1); }

.nav-actions { display: flex; align-items: center; gap: 0.9rem; }

.lang {
  display: flex;
  border: 1px solid var(--line);
  border-radius: 8px;
  overflow: hidden;
}
.lang button {
  padding: 0.35rem 0.6rem;
  border-radius: 0;
  background: transparent;
  color: var(--muted);
  font-size: 0.75rem;
  font-weight: 700;
}
.lang button.active { background: var(--navy-800); color: #fff; }

.nav-cta { height: 42px; padding: 0 1.1rem; font-size: 0.9rem; box-shadow: none; }

.menu-btn {
  display: none;
  padding: 0.35rem;
  border-radius: 8px;
  background: transparent;
  color: var(--navy-800);
  line-height: 0;
}
.menu-btn:hover { background: var(--navy-50); }

/* 홈 히어로 위: 투명 + 흰 글자 */
.nav--overlay {
  background: transparent;
  backdrop-filter: none;
  border-bottom-color: transparent;
}
.nav--overlay .brand,
.nav--overlay .nav-links a,
.nav--overlay .menu-btn { color: #fff; }
.nav--overlay .lang { border-color: rgba(255, 255, 255, 0.35); }
.nav--overlay .lang button { color: rgba(255, 255, 255, 0.8); }
.nav--overlay .lang button.active { background: #fff; color: var(--navy-800); }
.nav--overlay .menu-btn:hover { background: rgba(255, 255, 255, 0.12); }

.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem 24px 1.5rem;
  background: #fff;
  border-top: 1px solid var(--line);
  text-align: left;
}
.mobile-menu ul { list-style: none; }
.mobile-menu li a {
  display: block;
  padding: 0.9rem 0;
  font-size: 1.02rem;
  font-weight: 600;
  border-bottom: 1px solid var(--line);
}
.mobile-phone { text-align: center; font-weight: 700; color: var(--navy-800); }

@media (max-width: 1024px) {
  .nav-links { display: none; }
  .menu-btn { display: inline-flex; }
  .mobile-menu.open { display: flex; }
}

@media (max-width: 560px) {
  .nav-inner { height: 64px; padding: 0 16px; gap: 0.75rem; }
  .nav-cta { display: none; }
  .brand img { width: 38px; height: 38px; }
  .brand-text strong { font-size: 1rem; }
}
</style>
