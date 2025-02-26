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
  <div class="hero-container">
    <div class="hero-content">
      <h1 class="hero-title">{{ $t('hero.title') }}</h1>
      <p class="hero-subtitle">{{ $t('hero.subtitle') }}</p>
    </div>
    
    <div class="consultation-form">
  <div class="form-wrapper">
    <h2 class="form-title">Tax Consultation</h2>
    <p class="form-subtitle">Our Tax Experts will contact you!</p>
    
    <form @submit.prevent="submitForm">
      <!-- Web3Forms Access Key -->
      <input type="hidden" name="access_key" value="10f32bb4-f34d-4088-af76-7ffd7a7557d0">
      
      <div class="form-group">
        <input 
          v-model="formData.fullName"
          type="text"
          name="Full Name"
          placeholder="Full Name"
          required
          class="form-input"
        />
      </div>

      <div class="form-group">
        <input 
          v-model="formData.email"
          type="email"
          name="Email"
          placeholder="Email"
          required
          class="form-input"
        />
      </div>

      <div class="form-group">
        <input 
          v-model="formData.phone"
          type="tel"
          name="Phone"
          placeholder="Phone number"
          required
          class="form-input"
        />
      </div>

      <div class="form-group">
        <select 
          v-model="formData.statusType"
          name="Status Type"
          class="form-input status-select"
          required
        >
          <option value="" disabled selected>Status Type</option>
          <option value="US Citizen / Green Card Holder">US Citizen / Green Card Holder</option>
          <option value="Foreign National Individual">Foreign National Individual</option>
          <option value="Expatriate Individual">Expatriate Individual</option>
        </select>
      </div>

      <div class="form-group">
        <textarea 
          v-model="formData.details"
          name="Message"
          placeholder="Kindly detail your inquiry so we can assist you appropriately"
          class="form-input form-textarea"
          rows="4"
        ></textarea>
      </div>

      <button type="submit" class="submit-btn">SUBMIT</button>
    </form>
  </div>
</div>
</div>
</header>

<!-- About Us Section -->
<section id="aboutus" class="aboutus-section">
  <div class="title-wrapper">
    <div class="line"></div>
    <h3>{{ $t('aboutus.title') }}</h3>
    <div class="line"></div>
  </div>
  <br>
  <div class="aboutus-card">
    <div class="aboutus">
      <p>{{ $t('aboutus.content1') }}</p>
      <p>{{ $t('aboutus.content3') }}</p>
    </div>
    <br>
    <div class="aboutus">
      <p>{{ $t('aboutus.content4') }}</p>
      <p>{{ $t('aboutus.content5') }}</p>
    </div>
    <br>
    <div class="aboutus">
      <p>{{ $t('aboutus.content7') }}</p>
      <p>{{ $t('aboutus.content8') }}</p>
    </div>
  </div>
  <br>
  
  <!-- 구분선 추가 -->
  <hr class="section-divider">
      
  <!-- 프로필 섹션 -->
  <div class="aboutus team-member">
    <div class="profile-container">
      <div class="profile-content">
        <h3>{{ $t('profile.name') }}</h3>
        <h3>{{ $t('profile.title') }}</h3>
        
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
        <div class="career">
          <h4>{{ $t('profile.sections.career.title') }}</h4>
          <ul class="career-list">
            <p>{{ $t('profile.sections.career.list[0]') }}</p>
            <p>{{ $t('profile.sections.career.list[1]') }}</p>
          </ul>
        </div>
      </div>
      
      <div class="profile-image">
        <img :src="ceoPic" alt="CEO Profile" />
      </div>
    </div>
  </div>
</section>

<!-- Services Section -->
<section id="services" class="services-section py-16 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-12">
      <div class="title-wrapper">
        <div class="line"></div>
        <h3 class="text-3xl font-bold mb-4">{{ $t('services.title') }}</h3>
        <div class="line"></div>
      </div>
      <p class="services-description text-gray-600">{{ $t('services.description') }}</p>
    </div>
    
    <div class="service-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="i in 8" :key="i" 
           class="service-card transition-all duration-300 ease-in-out transform hover:-translate-y-1">
        <div class="service-image">
          <img :src="getServiceImage(i)" :alt="'Service ' + i" class="w-full h-48 object-cover rounded-t-xl">
        </div>
        <div class="service-content p-6">
          <p class="text-gray-800 font-semibold text-lg">
            {{ $t(`services.service${i}.items[0]`) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 신고절차 섹션 -->
<section id="checklists" class="checklist-section py-16 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- 타이틀 영역 -->
    <div class="text-center max-w-3xl mx-auto mb-12">
      <div class="title-wrapper">
        <div class="line"></div>
        <h3 class="text-3xl font-bold mb-4">{{ $t('checklists.title') }}</h3>
        <div class="line"></div>
      </div>
      <p class="checklist-description text-gray-600">{{ $t('checklists.description') }}</p>
    </div>
    
    <!-- 체크리스트 그리드 -->
<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  <div v-for="n in 6" :key="n" 
       class="relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl
              transition-all duration-300 ease-in-out transform hover:-translate-y-1">
    <!-- 숫자 배지 -->
    <h5 class="absolute -top-4 left-6 w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700
                rounded-full flex items-center justify-center text-white font-bold shadow-lg">
      {{ n }}
    </h5>
    
    <!-- 아이콘 추가 -->
    <div class="flex justify-center mb-6 mt-4">
      <component :is="getProcessIcon(n)" class="w-16 h-16 text-blue-600" />
    </div>
    
    <!-- 내용 -->
    <div class="pt-2">
      <h4 class="text-xl font-semibold mb-3 text-gray-800">
        {{ $t(`checklists.steps.step${n}.title`) }}
      </h4>
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
        <a>{{ $t('footer.blog') }}</a>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
import BerkeleyLogo from '../assets/Berkeley.png'
import ceoPic from '../assets/250220_ceo_pic.jpg'
import service1 from '../assets/service1.jpg'
import service2 from '../assets/service2.jpg'
import service3 from '../assets/service3.jpg'
import service4 from '../assets/service4.jpg'
import service5 from '../assets/service5.jpg'
import service6 from '../assets/service6.jpg'
import service7 from '../assets/service7.jpg'
import service8 from '../assets/service8.jpg'
import { 
  UserPlus,  // or ClipboardSignature
  ClipboardList,  // or FileQuestion
  FileCheck,  // or HandshakeIcon
  Calculator,  // or FileSpreadsheet
  FileSearch,  // or MagnifyingGlass
  Send  // or Upload
} from 'lucide-vue-next';

export default {
  name: 'Home',
  setup() {
    const { locale, t } = useI18n();
    const isScrolled = ref(false);
    const scrollProgress = ref(0);
    const currentLanguage = ref(locale.value);
    const isMenuOpen = ref(false);
    const mobileNav = ref(null);
    
    // 아이콘 매핑 함수
    const getProcessIcon = (step) => {
      const icons = {
        1: UserPlus,
        2: ClipboardList,
        3: FileCheck,
        4: Calculator,
        5: FileSearch,
        6: Send
      };
      return icons[step];
    };

    // 상담 폼 데이터
    const formData = ref({
      fullName: '',
      email: '',
      phone: '',
      statusType: '',
      details: ''
    });

    // 폼 제출 처리
    const submitForm = async (e) => {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: '10f32bb4-f34d-4088-af76-7ffd7a7557d0',
            full_name: formData.value.fullName,
            email: formData.value.email,
            phone: formData.value.phone,
            status_type: formData.value.statusType,
            message: formData.value.details
          })
        });

        const result = await response.json();
        
        if (result.success) {
          alert('Thank you! We will contact you soon.');
          resetForm();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error. Please try again.');
      }
    };

    // 폼 초기화
    const resetForm = () => {
      formData.value = {
        fullName: '',
        email: '',
        phone: '',
        statusType: '',
        details: ''
      };
    };

        // 서비스 이미지 매핑
        const getServiceImage = (index) => {
      // 서비스별 이미지 매핑
      const images = {
        1: service1,
        2: service2,
        3: service3,
        4: service4,
        5: service5,
        6: service6,
        7: service7,
        8: service8
      };
      
      return images[index] || '/images/default-service.jpg';
    };



    // 기존 코드
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
      if (mobileNav.value) {
        const navLinks = mobileNav.value.querySelector('.nav-links');
        const menuBtn = mobileNav.value.querySelector('.mobile-menu-btn');
        navLinks?.classList.toggle('active');
        menuBtn?.classList.toggle('active');
      }
    };

    const activeLink = ref('');

    const handleLinkClick = (section) => {
      activeLink.value = section;
      if (section.startsWith('#')) {
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
      ceoPic,
      formData,
      submitForm,
      getServiceImage,
      // 아이콘 관련 추가
      getProcessIcon,
      UserPlus,  // or ClipboardSignature
      ClipboardList,  // or FileQuestion
      FileCheck,  // or HandshakeIcon
      Calculator,  // or FileSpreadsheet
      FileSearch,  // or MagnifyingGlass
      Send 
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
  color: black;
}

.tax-website h4{
  font-size: 2rem;
  font-weight: 800;
  color: black;
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

/* Hero Section */
.hero-section {
  width: 100%;
  padding: 8rem 2rem;
  background-image: url('../assets/sanfran1.jpg');
  background-size: cover;
  background-position: center;
  min-height: 900px;
  display: flex;
  align-items: center;
  justify-content: left;
  position: relative; /* 추가 */
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative; /* 추가 */
}

.hero-content {
  flex: 1;
  text-align: left;
  color: white;
  max-width: 50%; /* 추가 */
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
}

.consultation-form {
  flex: 0 0 450px;
  z-index: 99;
  position: absolute; /* 추가 */
  right: 2rem; /* 추가 */
  top: 50%; /* 추가 */
  transform: translateY(-50%); /* 추가 */
}

.form-wrapper {
  background-color: #2B4570;  /* 진한 네이비 블루 */
  padding: 2rem;
  border-radius: 10px;
  color: white;
}

.form-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
  color: white;
}

.form-subtitle {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: white;
}

.form-group {
  margin-bottom: 1rem;
}

.form-input {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  background: white;
}

.form-input::placeholder {
  color: #666;
}

.status-select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 0.65rem auto;
  padding-right: 2.5rem;
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background: #E69640;  /* 오렌지 컬러 */
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.submit-btn:hover {
  background: #FDB515;
}

@media screen and (max-width: 768px) {
  .hero-container {
    flex-direction: column;
    align-items: center;
  }

  .hero-content {
    max-width: 100%;
    text-align: center;
    margin-bottom: 2rem;
    display: none;
  }

  .consultation-form {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    width: 100%;
    max-width: 450px;
    margin: 2rem auto 0;
  }

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
  font-size: 1.5rem;
}

.profile-container {
  display: flex;
  gap: 3rem;
  align-items: stretch;
  min-height: 900px;  /* 전체 컨테이너 최소 높이 설정 */
}

.profile-content {
  flex: 1;  /* 전체 공간의 1을 차지 */
  max-width: 50%;  /* 최대 너비를 50%로 제한 */
}

.profile-image {
  flex: 1;  /* 전체 공간의 1을 차지 */
  max-width: 50%;  /* 최대 너비를 50%로 제한 */
  position: relative;
  margin-top: 3rem;
}

.profile-image img {
  width: 70%;
  height: 70%;
  object-fit: cover;  /* 비율 유지하면서 영역 채우기 */
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
  color: #1A5276;  /* A deep blue that's professional and elegant */
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  letter-spacing: -1px;
  border-bottom: 3px solid #2980B9;  /* A subtle underline */
  padding-bottom: 0.5rem;
}

.team-member h4 {
  color: #2C3E50;  /* A sophisticated dark gray */
  font-size: 2.5rem;
  margin: 1.5rem 0 0.75rem;
  font-weight: 600;
  font-style: italic;
}

.team-member p {
  font-size: 1.5rem;
}

.description, .credentials, .career {
  margin-bottom: 1.5rem;
}

.description p, .credentials p {
  color: black;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-weight: 600;
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

/* Title Wrapper Styles */
.title-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  max-width: 1200px;
  gap: 2rem;
  padding: 0 2rem;
  box-sizing: border-box;
}

.line {
  height: 2px;
  background-color: #002676;
  flex: 1;
  max-width: 200px;
}

/* Service Card New Styles */
.services-section {
  padding: 4rem 2rem;
  background-color: #f8f9fa;
}

.services-description {
  color: #4a5568;
  line-height: 1.6;
  text-align: center;
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 3rem;
}

.service-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e5e7eb;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.service-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.service-card:hover .service-image img {
  transform: scale(1.05);
}

.service-content {
  padding: 1.5rem;
  background: white;
}

.service-content p {
  color: #1a1a1a;
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0;
  line-height: 1.5;
}

.tax-website h5 {
  color: #002676;
  font-size: large;
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
  
  .profile-container {
    flex-direction: column;
    min-height: auto;
  }

  .profile-content,
  .profile-image {
    max-width: 100%;  /* 모바일에서는 전체 너비 사용 */
  }

  .profile-image {
    height: 400px;  /* 모바일에서 이미지 높이 고정 */
    margin: 2rem 0;
  }

  .section-divider {
    margin: 2rem 0;
  }

  .service-row {
    
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1rem;
    align-items: center;  /* 카드들을 가운데로 정렬 */
    text-align: center; 
  }

  .title-wrapper {
    gap: 1rem;
  }
  
  .line {
    max-width: 100px;
  }
  
  .service-card {
    margin-bottom: 1.5rem;
  }

  .service-card {
    width: 100%;
    margin: 0 auto;
    height: auto;
    min-height: 120px;
    padding: 1.5rem;
    
    align-items: center; 
  }

  .service-card p {
    font-size: 1.1rem;
    padding: 0.5rem;
    
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

/* Checklist Section Specific Styles */
.checklist-section {
  background-color: #f8f9fa;
  padding: 4rem 2rem;
  width: 100%;
}

.title-wrapper {
  text-align: center;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;
}

.line {
  height: 2px;
  background-color: #002676;
  flex: 1;
  max-width: 200px;
}

.checklist-section h3 {
  color: #1a1a1a;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 1rem 0;
}

.checklist-section .grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;  /* 중앙 정렬 */
  padding: 0 1rem; /* 좌우 여백 추가 */
}

.checklist-section .grid > div {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.checklist-section .grid > div:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

/* 번호 배지 스타일 */
.checklist-section h5 {
  position: absolute;
  top: -1.25rem;
  left: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  background: #002676;
  color: white;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  margin: 0;
}


/* 아이콘 스타일 */
.checklist-section .grid > div svg {
  width: 3rem;
  height: 3rem;
  color: #002676;
  margin: 1.5rem auto;
}

/* 텍스트 스타일 */
.checklist-section h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
  text-align: center;
}

.checklist-section .checklist-description {
  color: #4a5568;
  line-height: 1.6;
  text-align: center;
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 3rem;
}

.checklist-section p {
  color: #002676;
  line-height: 1.6;
  text-align: center;
  font-size: 1rem;
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

  .checklist-section .grid > div:nth-child(4)::after {
    display: none;
  }
}

/* 반응형 스타일 */
@media (max-width: 1024px) {
  .checklist-section .grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .checklist-section .grid > div:nth-child(2)::after {
    display: none;
  }
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

@media (max-width: 640px) {
  .checklist-section .grid {
    grid-template-columns: 1fr;
  }

  .checklist-section .grid > div {
    padding: 1.5rem;
  }

  .checklist-section h3 {
    font-size: 2rem;
  }
  
  .checklist-section .grid > div::after {
    display: none;
  }
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