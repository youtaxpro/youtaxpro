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
        <span class="material-symbols-outlined">close</span>
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
        <p>&copy; 2024-2025 {{ $t('footer.companyName') }}</p>
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

export default {
  name: 'HomeNavigation',
  props: {
    isScrolled: Boolean,
  },
  emits: ['change-language'],
  setup(props, { emit }) {
    const { locale, t } = useI18n();
    const currentLanguage = ref(locale.value);
    const isMenuOpen = ref(false);
    const mobileNav = ref(null);
    
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
      
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
      emit('change-language', lang);
    };

    onMounted(() => {
      mobileNav.value = document.querySelector('nav');
      const savedLanguage = localStorage.getItem('userLanguage');
      if (savedLanguage) {
        changeLanguage(savedLanguage);
      }
    });

    return {
      BerkeleyLogo,
      currentLanguage,
      isMenuOpen,
      mobileNav,
      changeLanguage,
      toggleMenu
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
  /* 노란색 계열 그라데이션 효과 */
  background-image: linear-gradient(to right, #FFD700, #FFc700, #ffb700, #FFA500);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  /* 텍스트가 더 잘 보이도록 그림자 추가 */
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  /* 부드러운 전환 효과 */
  transition: all 0.3s ease;
}

.lang-btn.active {
  font-weight: bold;
  /* 활성화된 버튼은 살짝 큰 그라데이션 적용 */
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
  z-index: 1001; /* 다른 요소들 위에 표시되도록 z-index 추가 */
}

.mobile-menu-btn span {
  width: 100%;
  height: 3px;
  background: white;
  border-radius: 3px; /* 둥근 모서리 추가 */
  transition: all 0.3s linear;
  display: block; /* span을 블록 요소로 변경 */
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
    height: 40px; /* 모바일에서는 로고 크기를 약간 줄임 */
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
}

@media screen and (max-width: 480px) {
  .nav-content {
    justify-content: flex-end;
  }

  .language-switcher {
    margin-left: auto;
    margin-right: 1rem;
  }
}
</style>