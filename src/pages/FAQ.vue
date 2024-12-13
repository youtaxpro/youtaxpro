<template>
  <!-- 이전 template 코드와 동일 -->
  <div id="home" class="tax-website">
    <!-- Navigation -->
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

    <!-- FAQ Content -->
    <div class="faq-content">
      <h2>{{ $t('faq.title') }}</h2>
      <div class="faq-list">
        <div v-for="(item, index) in $t('faq.items').slice(0, 8)" 
     :key="index" 
     class="faq-item">
          <div class="faq-question"
               @click="toggleItem(index)"
               :class="{ active: openStates[index] }">
            <h3>{{ $t(`faq.items[${index}].question`) }}</h3>
            <span class="toggle-icon">{{ openStates[index] ? '−' : '+' }}</span>
          </div>
          <transition name="fade">
            <div v-show="openStates[index]" class="faq-answer">
              <p>{{ $t(`faq.items[${index}].answer`) }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2024 Berkeley US Tax Advisors All rights reserved.</p>
      <div class="social-links">
        <a>{{ $t('footer.companyName') }}</a>
        <a>{{ $t('footer.representative') }}</a>
        <a>{{ $t('footer.address') }}</a>
      </div>
      <div class="social-links">
        <a>{{ $t('footer.businessNumber') }}</a>
        <a>{{ $t('footer.phone') }}</a>
        <a>{{ $t('footer.fax') }}</a>
        <a>{{ $t('footer.email') }}</a>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
import BerkeleyLogo from '../assets/Berkeley.png';

export default {
  name: 'FAQ',
  setup() {
    const { locale } = useI18n();
    const isScrolled = ref(false);
    const currentLanguage = ref(locale.value);
    const openStates = ref([]);
    const isMenuOpen = ref(false);
    const mobileNav = ref(null);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
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

    const activeLink = ref(''); // 현재 활성화된 링크 상태 저장

const handleLinkClick = (section) => {
  activeLink.value = section;
  if (section.startsWith('#')) {
    // 홈페이지 내 섹션으로 이동하는 경우
    const element = document.querySelector(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50;
      if (isMenuOpen.value) {
        toggleMenu();
      }
    };

    const scrollTo = (sectionId) => {
      const targetElement = document.getElementById(sectionId);
      if (!targetElement) return;

      const startPosition = window.pageYOffset;
      const targetPosition = targetElement.offsetTop;
      const distance = targetPosition - startPosition;
      const duration = 1000;
      let startTime = null;

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    };

    const toggleItem = (index) => {
      openStates.value[index] = !openStates.value[index];
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      mobileNav.value = document.querySelector('nav');
      const savedLanguage = localStorage.getItem('userLanguage');
      if (savedLanguage) {
        changeLanguage(savedLanguage);
      }
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      BerkeleyLogo,
      isScrolled,
      currentLanguage,
      openStates,
      isMenuOpen,
      changeLanguage,
      toggleMenu,
      scrollTo,
      mobileNav,
      activeLink,
      handleLinkClick,
      toggleItem,
    };
  }
};

// easeInOutQuad 함수도 추가
function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}
</script>

<style scoped>
/* FAQ 페이지 기본 스타일 */
.tax-website {
  position: absolute;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  min-height: 100vh;
  width: 100%;
  background-image: url('../assets/sanfran1.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tax-website::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

/* nav를 제외한 모든 자식 요소에 position: relative 적용 */
.tax-website *:not(nav) {
  
  z-index: 2;
}

/* nav에 대한 별도의 z-index 설정 */
.tax-website nav {
  position: fixed;
  z-index: 1000;
}

/* Navigation */
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  padding: 1rem 3rem;
  background-color: #002676;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: all 0.5s ease;
}

.nav-scrolled {
  background-color: rgba(11, 39, 99, 0.8);
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
  color: #ffec9a;
}

.lang-btn.active {
  font-weight: bold;
}

.lang-separator {
  color: white;
  opacity: 0.5;
}

/* FAQ Content Styles */
.faq-content {
  max-width: 1000px;
  width: 90%;
  margin: 120px auto 2rem;
  padding: 2rem;
}

.faq-list {
  margin-top: 2rem;
  text-align: left;
}

.faq-item {
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out backwards;
}

.faq-question {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.faq-question:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.faq-question h3 {
  margin: 0;
  font-size: 1.2rem;
}

.toggle-icon {
  font-size: 1.5rem;
}

.faq-answer {
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, 0.7);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.faq-answer p {
  margin: 0;
  line-height: 1.8;
  white-space: pre-line;
  text-align: left;
}

/* Footer */
.footer {
  padding: 2rem;
  background-color: gainsboro;
  width: 100%;
  text-align: center;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  justify-content: center;  /* flex 아이템들 가운데 정렬 */
  align-items: center;     /* 세로축에서도 가운데 정렬 */
}

.social-links a {
  color: black;
  margin: 0 1rem;
  font-size: 0.7rem;
}

/* 모바일 메뉴 버튼 */
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
  border-radius: 3px; /* 둥근 모서리 추가 */
  transition: all 0.3s linear;
  display: block; /* span을 블록 요소로 변경 */
}


/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
  max-height: 1000px;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  max-height: 0;
}

/* FAQ Item Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.faq-item:nth-child(1) { animation-delay: 0.4s; }
.faq-item:nth-child(2) { animation-delay: 0.5s; }
.faq-item:nth-child(3) { animation-delay: 0.6s; }
.faq-item:nth-child(4) { animation-delay: 0.7s; }
.faq-item:nth-child(5) { animation-delay: 0.8s; }
.faq-item:nth-child(6) { animation-delay: 0.9s; }
.faq-item:nth-child(7) { animation-delay: 1.0s; }
.faq-item:nth-child(8) { animation-delay: 1.1s; }

/* 반응형 디자인 */
@media screen and (max-width: 768px) {
  nav {
    padding: 1px;
  }

  .nav-links {
    display: none;
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #002676;
    padding: 1rem;
    flex-direction: column;
  }

  .nav-links.active {
    display: flex;
  }

  .mobile-menu-btn {
    display: flex;
    
  }

  @keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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

  /* FAQ 특정 스타일 */
  .faq-content {
    width: 95%;
    padding: 1rem;
    margin-top: 80px;
    animation: fadeIn 0.5s ease-out;
  }

  .faq-question,
  .faq-answer {
    padding: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .faq-question h3 {
    font-size: 1.1rem;
  }

  footer {
    padding: 2rem 1rem;
  }

  .social-links {
    flex-direction: column;
    gap: 0.5rem;
  }

  .social-links a {
    padding: 0.3rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  .social-links a:last-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  /* copyright 텍스트 스타일 */
  .footer p {
    padding-bottom: 1rem;
    color: #00599c;
  }
}

/* 더 작은 모바일 화면 */
@media screen and (max-width: 480px) {
  .nav-content {
    justify-content: flex-end;
  }

  .language-switcher {
    margin-left: auto;
    margin-right: 1rem;
  }

  .faq-content {
    width: 100%;
    padding: 0.5rem;
    margin-top: 70px;
  }

  .faq-question,
  .faq-answer {
    padding: 0.8rem;
  }
}

/* Router Link Active State */
.nav-links a.active,
.router-link-active {
  color: #3b82f6;
  font-weight: bold;
}
</style>