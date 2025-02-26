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
  
      <!-- Contact Content -->
      <div class="contact-content">
        <h2>{{ $t('contact.title') }}</h2>
        
        <!-- Office Information -->
        <div class="office-info">
          <h3>{{ $t('contact.officeTitle') }}</h3>
          <div class="info-grid">
            <div class="contact-card">
              <i class="fas fa-map-marker-alt"></i>
              <h4>{{ $t('contact.address.title') }}</h4>
              <p>{{ $t('footer.address') }}</p>
            </div>
            
            <div class="contact-card">
              <i class="fas fa-phone"></i>
              <h4>{{ $t('contact.phone.title') }}</h4>
              <p>{{ $t('footer.phone') }}</p>
            </div>
            
            <div class="contact-card">
                <i class="fas fa-fax"></i>
              <h4>{{ $t('contact.fax.title') }}</h4>
              <p>{{ $t('footer.fax') }}</p>
            </div>

            <div class="contact-card">
              <i class="fas fa-envelope"></i>
              <h4>{{ $t('contact.email.title') }}</h4>
              <p>{{ $t('footer.email') }}</p>
            </div>
  
            <div class="contact-card">
              <i class="fas fa-clock"></i>
              <h4>{{ $t('contact.hours.title') }}</h4>
              <p>{{ $t('contact.hours.weekday') }}</p>
              <p>{{ $t('contact.hours.weekend') }}</p>
            </div>

            <div class="contact-card">
              <i class="fas fa-blog"></i>
              <h4>{{ $t('contact.blog.title') }}</h4>
              <p>{{ $t('footer.blog') }}</p>
            </div>
          </div>
        </div>
  
        <!-- Google Map -->
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.7340392391656!2d127.05169491183!3d37.51419832798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca41fd3c87ef3%3A0x834d1f6840e4aee1!2s573%20Samseong-ro%2C%20Gangnam-gu%2C%20Seoul!5e0!3m2!1sen!2skr!4v1647841234567!5m2!1sen!2skr"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
  
      <!-- Footer -->
      <footer class="footer">
        <h4>&copy; 2024 Berkeley US Tax Advisors All rights reserved.</h4>
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
          <a>{{ $t('footer.blog') }}</a>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import { useI18n } from 'vue-i18n';
  import BerkeleyLogo from '../assets/Berkeley.png';
  
  export default {
    name: 'ContactUs',
    setup() {
    const { locale } = useI18n();
    const isScrolled = ref(false);
    const currentLanguage = ref(locale.value);
    const openStates = ref({});
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
      toggleItem,
      scrollTo,
      mobileNav,
      activeLink,
      handleLinkClick,
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
/* Global Styles */
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
  background-color: rgba(0, 0, 0, 0.3);
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

/* Language Switcher Styles */
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

/* Contact Content Styles */
.contact-content {
  max-width: 1200px;
  margin: 120px auto 2rem;
  padding: 2rem;
  color: white;
}

h2 {
  text-align: center;
  color: white;
  margin-bottom: 4rem;
  font-size: 2.5rem;
  font-weight: bold;
  position: relative;
  padding-bottom: 1rem;
}

h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background-color: #ffec9a;
  border-radius: 2px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.contact-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
  background-color: rgba(255, 255, 255, 0.2);
}

.contact-card h4 {
  margin: 1rem 0;
  font-size: 1.2rem;
}

.map-container {
  margin: 2rem auto; /* 상하 여백 유지하고 좌우 중앙 정렬 */
  border-radius: 10px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  width: 1000px; /* 화면 너비의 최대치에서 좌우 여백을 뺀 크기 */
  max-width: 1600px; /* 최대 너비 제한 - 기존보다 더 넓게 */
}

/* iframe 자체의 비율도 조정 */
.map-container iframe {
  width: 100%;
  height: 600px; /* 높이도 조금 더 크게 */
  border-radius: 8px;
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

.footer h4 {
  color: #00599c;
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



/* Media Queries */
@media screen and (max-width: 768px) {
  nav {
    padding: 0.5rem 0;
    width: 100%;
  }

  .nav-links {
    display: none;
    position: fixed;
    top: 106px; /* 네비게이션 바 높이에 맞춰 조정 */
    left: 0;
    width: 100%;
    background-color: rgba(11, 39, 99, 0.8);
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
    padding: 1rem 1rem; /* 상하 0.5rem, 좌우 1rem의 패딩 */
  }
  
  .logo img {
    height: 40px; /* 모바일에서는 로고 크기를 약간 줄임 */
  }

  .mobile-menu-btn {
    display: flex;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .contact-card {
    padding: 1.5rem;
  }

  .map-container {
    width: 600px;
    padding: 0.5rem;
  }

  .map-container iframe {
    height: 400px;
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
  
}

@media screen and (max-width: 480px) {
  .nav-content {
    justify-content: flex-end;
  }

  .language-switcher {
    margin-left: auto;
    margin-right: 1rem;
  }

  .map-container {
    width: 90%;
  }

  .map-container iframe {
    height: 300px;
  }
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

/* Router Link Active State */
.nav-links a.active,
.router-link-active {
  color: #3b82f6;
  font-weight: bold;
}

</style>
