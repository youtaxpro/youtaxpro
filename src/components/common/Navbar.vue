<template>
  <nav :class="{ 'nav-scrolled': isScrolled }">
    <div class="nav-container">
      <a href="/" class="logo flex items-center gap-8">
        <img :src="BerkeleyLogo" alt="Berkeley" style="height: 58px;" />
      </a>
    </div>

    <div class="nav-content" :class="{ 'show': isMenuOpen }">
      <ul class="nav-links" :class="{ 'active': isMenuOpen }">
        <li><router-link to="/#aboutus">{{ $t('nav.aboutUs') }}</router-link></li>
        <li><router-link to="/#services">{{ $t('nav.services') }}</router-link></li>
        <li><router-link to="/#checklists">{{ $t('nav.checklists') }}</router-link></li>
        <li><router-link to="/faq">{{ $t('nav.faq') }}</router-link></li>
        <li><router-link to="/contactus">{{ $t('nav.contactUs') }}</router-link></li>
      </ul>

      <div class="language-switcher">
        <button @click="changeLanguage('ko')" class="lang-btn" :class="{ 'active': currentLanguage === 'ko' }">KOR</button>
        <span class="lang-separator">|</span>
        <button @click="changeLanguage('en')" class="lang-btn" :class="{ 'active': currentLanguage === 'en' }">ENG</button>
      </div>
      <button class="mobile-menu-btn" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    
    <!-- Mobile Sidebar Menu -->
    <div class="sidebar-menu" :class="{ 'open': isMenuOpen }">
      <button class="sidebar-close-btn" @click="toggleMenu">
        <img src="@/assets/icons/webp/xmark-solid-full.svg" 
              alt="Close menu" 
              class="close-icon" />
      </button>
      <ul class="nav-links">
        <li><router-link to="/#aboutus" @click="toggleMenu">{{ $t('nav.aboutUs') }}</router-link></li>
        <li><router-link to="/#services" @click="toggleMenu">{{ $t('nav.services') }}</router-link></li>
        <li><router-link to="/#checklists" @click="toggleMenu">{{ $t('nav.checklists') }}</router-link></li>
        <li><router-link to="/faq" @click="toggleMenu">{{ $t('nav.faq') }}</router-link></li>
        <li><router-link to="/contactus" @click="toggleMenu">{{ $t('nav.contactUs') }}</router-link></li>
      </ul>
      <div class="language-switcher">
        <button @click="changeLanguage('ko')" class="lang-btn" :class="{ 'active': currentLanguage === 'ko' }">KOR</button>
        <span class="lang-separator">|</span>
        <button @click="changeLanguage('en')" class="lang-btn" :class="{ 'active': currentLanguage === 'en' }">ENG</button>
      </div>
      
      <!-- Copyright Info -->
      <div class="sidebar-footer">
        <p>&copy; 2024-2026 {{ $t('footer.companyName') }}</p>
        <p>{{ $t('footer.address') }}</p>
        <p>{{ $t('footer.phone') }}</p>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
import BerkeleyLogo from '../../assets/Berkeley.png';
import { setupOptimizedScroll } from '../../utils/scrollOptimizer';
import closeIcon from '../../assets/icons/webp/xmark-solid-full.svg';

export default {
  name: 'Navbar',
  emits: ['toggle-menu'],
  setup(props, { emit }) {
    const { locale } = useI18n();
    const isScrolled = ref(false);
    const currentLanguage = ref(locale.value);
    const isMenuOpen = ref(false);
    const mobileNav = ref(null);
    let removeScrollListener;

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
      emit('toggle-menu', isMenuOpen.value);
      
      // Add class to prevent body scrolling when sidebar is open
      if (isMenuOpen.value) {
        document.body.classList.add('sidebar-open');
      } else {
        document.body.classList.remove('sidebar-open');
      }
      
      if (mobileNav.value) {
        const menuBtn = mobileNav.value.querySelector('.mobile-menu-btn');
        menuBtn?.classList.toggle('active');
      }
    };

    const changeLanguage = (lang) => {
      locale.value = lang;
      currentLanguage.value = lang;
      localStorage.setItem('userLanguage', lang);
    };

    onMounted(() => {
      // 최적화된 스크롤 이벤트 리스너 설정
      removeScrollListener = setupOptimizedScroll((scrollY) => {
        isScrolled.value = scrollY > 50;
        if (isMenuOpen.value) {
          toggleMenu();
        }
      }, { throttleTime: 100, useRequestAnimationFrame: true });

      mobileNav.value = document.querySelector('nav');
      const savedLanguage = localStorage.getItem('userLanguage');
      if (savedLanguage) {
        changeLanguage(savedLanguage);
      }
    });

    onBeforeUnmount(() => {
      // 컴포넌트 언마운트 시 최적화된 스크롤 이벤트 리스너 제거
      if (removeScrollListener) removeScrollListener();
    });

    return {
      BerkeleyLogo,
      isScrolled,
      currentLanguage,
      isMenuOpen,
      changeLanguage,
      toggleMenu,
      closeIcon
    };
  }
};
</script>

<style scoped>
/* Navigation */
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  padding: 1rem 3rem;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: all 0.5s ease;
}

.nav-scrolled {
  background-image: linear-gradient(
    to right, 
    rgba(30, 77, 146, 0.8),  /* 진한 블루 (80% 투명도) */
    rgba(46, 94, 170, 0.8),  /* 아이덴티티 블루 (80% 투명도) */
    rgba(74, 116, 185, 0.8),  /* 중간 블루 (80% 투명도) */
    rgba(94, 138, 208, 0.8),  /* 밝은 블루 (80% 투명도) */
    rgba(117, 194, 246, 0.8)   /* 하늘색 (80% 투명도) */
  );
  box-shadow: 0 2px 5px rgba(46, 94, 170, 0.2);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  height: 100%;
}

.logo img {
  height: 50px;
  margin: auto 0;
}

.nav-content {
  display: flex;
  align-items: center;
  color: white;
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.nav-links a:hover {
  opacity: 0.8;
}

/* Language Switcher */
.language-switcher {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 2rem;
}

.lang-btn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.3rem 0.6rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.lang-btn:hover, .lang-btn.active {
  background-image: linear-gradient(to right, #FFA41B, #FFB443, #FFC56A, #FFD892);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.lang-btn.active {
  font-weight: bold;
  background-size: 200% auto;
}

.lang-separator {
  color: white;
  opacity: 0.5;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.mobile-menu-btn span {
  width: 100%;
  height: 3px;
  background: white;
  border-radius: 3px;
  transition: all 0.3s linear;
  display: block;
}

/* Mobile Menu Active States */
.mobile-menu-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

/* Router Link Active State */
.nav-links a.active,
.router-link-active {
  color: #FFA41B; /* 오렌지색으로 변경 */
  font-weight: bold;
}

/* Mobile Sidebar */
.sidebar-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 80%;
  max-width: 300px;
  height: 100vh;
  background-image: linear-gradient(
    to right, 
    rgba(30, 77, 146, 0.95),
    rgba(46, 94, 170, 0.95),
    rgba(117, 194, 246, 0.95)
  );
  box-shadow: -5px 0 15px rgba(46, 94, 170, 0.2);
  z-index: 2000;
  transition: right 0.3s ease-in-out;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.sidebar-menu.open {
  right: 0;
}

.sidebar-close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  position: absolute;
  right: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
}

.close-icon {
  width: 46px;
  height: 46px;
  filter: brightness(0) invert(1); /* SVG 흰색 변환 */
  display: block;
}

.sidebar-menu .nav-links {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  padding: 0;
}

.sidebar-menu .nav-links li {
  width: 100%;
}

.sidebar-menu .nav-links a {
  display: block;
  width: 100%;
  padding: 0.75rem 0;
  color: white;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.sidebar-menu .nav-links a:hover,
.sidebar-menu .nav-links a.router-link-active {
  color: #FFA41B; /* 오렌지색으로 변경 */
}

.sidebar-menu .language-switcher {
  margin-top: 2rem;
  justify-content: center;
  margin-left: 0;
}

/* Add a background overlay when sidebar is open */
body.sidebar-open::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
  z-index: 1999;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  nav {
    padding: 0.5rem 0;
    width: 100%;
    min-height: 70px; /* Ensure consistent height */
  }

  .nav-content .nav-links {
    display: none;
  }

  .logo {
    display: flex;
    align-items: center;
    min-height: 60px; /* Maintain height even with smaller logo */
  }
  
  .logo img {
    height: 40px;
    transform: scale(0.7);
  }

  .mobile-menu-btn {
    display: flex;
  }

  .nav-content {
    justify-content: flex-end;
  }

  .language-switcher {
    margin-left: auto;
    margin-right: 1rem;
  }

    .close-icon { width: 40px; height: 40px; 
  }
}

/* For accessibility - hide scrollbar when sidebar is open */
body.sidebar-open {
  overflow: hidden;
}

/* Sidebar Footer */
.sidebar-footer {
  margin-top: auto;
  width: 100%;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2rem;
  padding-top: 1.5rem;
  position: relative;
  bottom: 0;
}

.sidebar-footer p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}

.sidebar-footer p:first-child {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
