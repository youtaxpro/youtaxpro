<template>
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

    <!-- Hero Section -->
    <header class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">{{ $t('hero.title') }}</h1>
        <p class="hero-subtitle">{{ $t('hero.subtitle') }}</p>
      </div>
    </header>

<!-- About Us Section -->
<section id="aboutus" class="aboutus-section">
  <h3>{{ $t('aboutus.title') }}</h3>
  <br>
  <div class="aboutus-card">
    <div class="aboutus">
      <p>{{ $t('aboutus.content1') }}</p>
      <p>{{ $t('aboutus.content2') }}</p>
      <p>{{ $t('aboutus.content3') }}</p>
    </div>
    <br>
    <div class="aboutus">
      <p>{{ $t('aboutus.content4') }}</p>
      <p>{{ $t('aboutus.content5') }}</p>
    </div>
    <br>
    <div class="aboutus">
      <p>{{ $t('aboutus.content6') }}</p>
      <p>{{ $t('aboutus.content7') }}</p>
      <p>{{ $t('aboutus.content8') }}</p>
    </div>
  </div>
    <br>
    <div class="aboutus team-member">
  
  <!-- 구분선 추가 -->
  <hr class="section-divider">
      
      <!-- 프로필 섹션 -->
      <div class="aboutus team-member">
        <h3>{{ $t('profile.name') }}, {{ $t('profile.title') }}</h3>
        
        <!-- 소개 섹션 -->
        <div class="description">
          <h4>{{ $t('profile.sections.intro.title') }}</h4>
          <p>{{ $t('profile.sections.intro.content') }}</p>
        </div>

        <!-- 경력 사항 -->
        <div class="description">
          <h4>{{ $t('profile.sections.experience.title') }}</h4>
          <p>{{ $t('profile.sections.experience.content') }}</p>
        </div>

        <!-- 전문성 -->
        <div class="description">
          <h4>{{ $t('profile.sections.expertise.title') }}</h4>
          <p>{{ $t('profile.sections.expertise.content') }}</p>
        </div>

        <!-- 자격증 -->
        <div class="credentials">
          <h4>{{ $t('profile.sections.certification.title') }}</h4>
          <p>{{ $t('profile.sections.certification.content') }}</p>
        </div>

        <!-- 약력 -->
        <!-- 약력 - v-for 제거하고 직접 렌더링 -->
    <div class="career">
      <h4>{{ $t('profile.sections.career.title') }}</h4>
      <ul class="career-list">
        <p>{{ $t('profile.sections.career.list[0]') }}</p>
        <p>{{ $t('profile.sections.career.list[1]') }}</p>
      </ul>
    </div>
      </div>
    </div>
  </section>

    <section id="services" class="py-16 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-12">
      <h3 class="text-3xl font-bold mb-4">{{ $t('services.title') }}</h3>
      <br>
      <p class="text-gray-600">{{ $t('services.description') }}</p>
    </div>
    
    <div class="service-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <div v-for="i in 8" :key="i" 
       class="service-card transition-all duration-300 ease-in-out
              bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl
              overflow-hidden">
    <div class="p-6 h-full flex flex-col">
      <p class="text-gray-800 text-lg font-medium leading-relaxed
                transition-colors duration-300">
        {{ $t(`services.service${i}.items[0]`) }}
      </p>
    </div>
  </div>
    </div>
  </div>
</section>

<!-- 신고절차 섹션 -->
<section id="checklists" class="py-16 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-12">
      <h3 class="text-3xl font-bold mb-4">{{ $t('checklists.title') }}</h3>
      <br>
      <p class="text-gray-600">{{ $t('checklists.description') }}</p>
      <br>
    </div>
    
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="n in 6" :key="n" 
           class="relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl
                  transition-all duration-300 ease-in-out transform hover:-translate-y-1">
        <!-- 숫자 배지 -->
        <div class="absolute -top-4 left-6 w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700
                    rounded-full flex items-center justify-center text-white font-bold shadow-lg">
          {{ n }}
        </div>
        
        <!-- 내용 -->
        <div class="pt-6">
          <h3 class="text-xl font-semibold mb-3 text-gray-800">
            {{ $t(`checklists.steps.step${n}.title`) }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ $t(`checklists.steps.step${n}.description`) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2024 Berkeley U.S. Tax Advisors All rights reserved.</p>
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
import BerkeleyLogo from '../assets/Berkeley.png'

export default {
  name: 'Home',
  setup() {
    const { locale, t } = useI18n();
    const isScrolled = ref(false);
    const scrollProgress = ref(0);
    const currentLanguage = ref(locale.value);
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

    const changeLanguage = (lang) => {
      locale.value = lang;
      currentLanguage.value = lang;
      localStorage.setItem('userLanguage', lang);
      steps.value = createSteps();
    };

    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      scrollProgress.value = (scrollPosition / docHeight) * 100;
      isScrolled.value = scrollPosition > 50;
      
      if (isMenuOpen.value) {
        toggleMenu();
      }
    };

    const createSteps = () => [
      {
        number: 1,
        title: t('checklists.steps.step1.title'),
        description: t('checklists.steps.step1.description')
      },
      {
        number: 2,
        title: t('checklists.steps.step2.title'),
        description: t('checklists.steps.step2.description')
      },
      {
        number: 3,
        title: t('checklists.steps.step3.title'),
        description: t('checklists.steps.step3.description')
      },
      {
        number: 4,
        title: t('checklists.steps.step4.title'),
        description: t('checklists.steps.step4.description')
      },
      {
        number: 5,
        title: t('checklists.steps.step5.title'),
        description: t('checklists.steps.step5.description')
      },
      {
        number: 6,
        title: t('checklists.steps.step6.title'),
        description: t('checklists.steps.step6.description')
      }
    ];

    const steps = ref(createSteps());

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
      scrollProgress,
      currentLanguage,
      isMenuOpen,
      mobileNav,
      changeLanguage,
      toggleMenu,
      scrollTo,
      steps,
      activeLink,
      handleLinkClick,
    };
  }
};

function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}
</script>

<style scoped>
.tax-website {
  position: relative;
  color: #00599c;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f9fa;;
}

.tax-website h3{
  font-size: 3rem;
  font-weight: 800;
  color: #002676;
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
  background-color: rgba(0, 0, 0, 0.8);
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
  color: #4caf50;
}

.lang-btn.active {
  font-weight: bold;
}

/* Hero Section */
.hero-section {
  width: 100%;
  padding: 8rem 2rem;
  background-image: url('../assets/sanfran1.jpg');
  background-size: cover;
  background-position: center;
  min-height: 1000px;
  display: flex;
  align-items: center;
  justify-content: left;
}

.hero-content {
  text-align: center;
  color: white;
}

.hero-title {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-weight: 1000;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 2.5rem;
  opacity: 0.9;
  font-weight: 600;
}

.aboutus-section {
  padding: 4rem 2rem;
  background-color: white;
}

.aboutus-card {
  max-width: 1200px;
  margin: 0 auto;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.aboutus p {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}



.section-divider {
  margin: 3rem 0;
  border: 0;
  border-top: 1px solid #e2e8f0;
}

.team-member {
  margin-top: 2rem;
}

.team-member h3 {
  color: #002676;
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.team-member h4 {
  color: #00599c;
  font-size: 2.5rem;
  margin: 1.5rem 0 0.75rem;
}

.team-member p {
  font-size: 2.0rem;
}

.description, .credentials, .career {
  margin-bottom: 1.5rem;
}

.description p, .credentials p {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.career ul {
  list-style-type: none;
  padding-left: 0;
}

.career ul li {
  color: #4a5568;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.career ul li::before {
  content: "•";
  color: #00599c;
  position: absolute;
  left: 0;
}

/* Common Section Styles */
section {
  padding: 4rem 2rem;
  width: 100%;
}

/* Service Cards */

.service-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

.service-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  justify-content: center;
}

.service-card {
  background: linear-gradient(135deg, #7cbbee 0%, #5ba4e0 80%);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  height: 120px;
  display: flex;           /* 추가 */
  justify-content: center; /* 추가 */
  align-items: center;     /* 추가 */
}

.service-card:hover {
  transform: translateY(-0px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.service-card p {
  color: white;
  font-weight: 800;
  font-size: 1rem;
  line-height: 1.5;
  justify-content: center;
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
}

.service-icon-wrapper {
  margin-bottom: 0.75rem;
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

/* Responsive Design */
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

  .hero-section {
    padding: 6rem 1rem;
  }

  .hero-title {
    font-size: 3.5rem;
  }

  .hero-subtitle {
    font-size: 2.5rem;
  }

  .aboutus-card {
    padding: 2.5rem;
  }

  .tax-website h3 {
    font-size: 2.5rem;
  }

  .team-member h3 {
    font-size: 2.5rem;
  }

  .team-member h4 {
    font-size: 1.125rem;
  }
  
  .section-divider {
    margin: 2rem 0;
  }

  .service-row {
    display: flex;
    flex-direction: column;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1rem;
    align-items: center;  /* 카드들을 가운데로 정렬 */
    text-align: center; 
  }

  .service-card {
    width: 90%;
    margin: 0 auto;
    height: auto;
    min-height: 120px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center; 
  }

  .service-card p {
    line-height: 1.6;
    margin-bottom: 1rem;
    align-items: center;
  }

  .service-card h3 {
    margin-bottom: 1rem;
    align-items: center;
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
    
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .service-row {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .service-card {
    width: 100%;
    min-height: auto;
    height: auto;
    padding: 1.5rem;
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

/* Checklist Section Specific Styles */

.checklist-section {
  background-color: linear-gradient(to bottom, #f8fafc, #ffffff);
  padding: 4rem 2rem;
}

.grid {
  display: grid;
  gap: 2rem;
}

.grid > div .w-8 {
  background: linear-gradient(135deg, #7cbbee 0%, #5ba4e0 100%);
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Additional Mobile Responsive Adjustments */
@media screen and (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }
  
  .nav-content {
    justify-content: flex-end;
  }

  .language-switcher {
    margin-left: auto;
    margin-right: 1rem;
  }
}

/* Router Link Active State */
.nav-links a.active,
.router-link-active {
  color: #3b82f6;
  font-weight: bold;
}
</style>