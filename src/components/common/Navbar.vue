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
  </nav>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
import BerkeleyLogo from '../../assets/Berkeley.png';
import { setupOptimizedScroll } from '../../utils/scrollOptimizer';

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
      if (mobileNav.value) {
        const navLinks = mobileNav.value.querySelector('.nav-links');
        const menuBtn = mobileNav.value.querySelector('.mobile-menu-btn');
        navLinks?.classList.toggle('active');
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
  background-image: linear-gradient(
    to right, 
    #00008B,  /* 다크 블루 */
    #0047AB,  /* 코발트 블루 */
    #1E90FF,  /* 도저 블루 */
    #4169E1,  /* 로얄 블루 */
    #6495ED   /* 콘플라워 블루 */
  );
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: all 0.5s ease;
}

.nav-scrolled {
  background-image: linear-gradient(
    to right, 
    rgba(0, 0, 139, 0.8),  /* 다크 블루 (80% 투명도) */
    rgba(0, 71, 171, 0.8),  /* 코발트 블루 (80% 투명도) */
    rgba(30, 144, 255, 0.8),  /* 도저 블루 (80% 투명도) */
    rgba(65, 105, 225, 0.8),  /* 로얄 블루 (80% 투명도) */
    rgba(100, 149, 237, 0.8)   /* 콘플라워 블루 (80% 투명도) */
  );
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
  background-image: linear-gradient(to right, #FFD700, #FFc700, #ffb700, #FFA500);
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
  color: #3b82f6;
  font-weight: bold;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  nav {
    padding: 0.5rem 0;
    width: 100%;
  }

  .nav-links {
    display: none;
    position: fixed;
    top: 106px;
    left: 0;
    width: 100%;
    background-image: linear-gradient(
      to right, 
      rgba(0, 0, 139, 0.8),
      rgba(0, 71, 171, 0.8),
      rgba(30, 144, 255, 0.8),
      rgba(65, 105, 225, 0.8),
      rgba(100, 149, 237, 0.8)
    );
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    flex-direction: column;
    z-index: 1000;
    gap: 1rem;
  }

  .nav-links.active {
    display: flex;
    animation: slideDown 0.3s ease-in-out;
  }

  .logo {
    padding: 1rem 1rem;
  }
  
  .logo img {
    height: 40px;
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
