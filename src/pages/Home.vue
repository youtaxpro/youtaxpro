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
          placeholder="Kindly detail your inquiry so we can assist you appropriately 한국어문의가능"
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

<!-- About Us Section with Simplified Design -->
<section id="aboutus" class="aboutus-section">
  <div class="title-wrapper">
    <div class="line"></div>
    <h3>{{ $t('aboutus.title') }}</h3>
    <div class="line"></div>
  </div>
  
  <!-- Feature Grid Layout -->
  <div class="aboutus-card">
    <!-- Top Image Section -->
    <div class="aboutus-image-container">
      <img :src="taxExpertiseIcon" alt="Tax Expertise" class="aboutus-hero-image">
    </div>
    
    <!-- Content Sections -->
    <div class="aboutus-content-grid">
      <div class="aboutus-content-item">
        <p>{{ $t('aboutus.content1') }}</p>
        <p>{{ $t('aboutus.content3') }}</p>
      </div>
      
      <div class="aboutus-content-item">
        <p>{{ $t('aboutus.content4') }}</p>
        <p>{{ $t('aboutus.content5') }}</p>
      </div>
      
      <div class="aboutus-content-item">
        <p>{{ $t('aboutus.content7') }}</p>
        <p>{{ $t('aboutus.content8') }}</p>
      </div>
    </div>
  </div>
  
  <!-- Call to Action -->
  <div class="aboutus-cta">
    <div class="cta-content">
      <h3>{{ $t('aboutus.cta.title') }}</h3>
      <p>{{ $t('aboutus.cta.description') }}</p>
      <router-link to="/contactus" class="cta-button">{{ $t('aboutus.cta.button') }}</router-link>
    </div>
  </div>
  
  <hr class="section-divider">
</section>
      
  <!-- 프로필 섹션 -->
   <section>
  <div class="aboutus team-member">
    <div class="profile-container">
      <div class="profile-content">
        
        
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
        <div class="profile-name-title-container" style="margin-left: auto; margin-right: auto;">
    <h3 class="profile-name">{{ $t('profile.name') }}</h3>
    <h3 class="profile-title">{{ $t('profile.title') }}</h3>
  </div>
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
    <footer style="background: linear-gradient(135deg, #002676 0%, #004ea8 100%); color: white; padding: 2rem 0; width: 100vw;">
      <div style="width: 100%; padding: 0 3rem;">
        <!-- Top Section with Sections -->
        <div style="display: flex; flex-wrap: wrap; gap: 2rem; margin-bottom: 2rem;">
          <!-- Column 1 - About & Company Info -->
          <div style="flex: 1; min-width: 250px;">
            <h3 style="font-size: 1.4rem; margin-bottom: 1.5rem; color: white;">{{ $t('footer.companyName') }}</h3>
            <p style="margin-bottom: 0.5rem; color: rgba(255,255,255,0.8);">{{ $t('footer.representative') }}</p>
            <p style="margin-bottom: 0.5rem; color: rgba(255,255,255,0.8);">{{ $t('footer.address') }}</p>
            <p style="margin-bottom: 0.5rem; color: rgba(255,255,255,0.8);">{{ $t('footer.businessNumber') }}</p>
          </div>

          <!-- Column 2 - Contact -->
          <div style="flex: 1; min-width: 250px;">
            <h3 style="font-size: 1.4rem; margin-bottom: 1.5rem; color: white;">{{ $t('contact.title') }}</h3>
            <p style="margin-bottom: 0.5rem; color: rgba(255,255,255,0.8);">{{ $t('footer.phone') }}</p>
            <p style="margin-bottom: 0.5rem; color: rgba(255,255,255,0.8);">{{ $t('footer.fax') }}</p>
            <p style="margin-bottom: 0.5rem; color: rgba(255,255,255,0.8);">{{ $t('footer.email') }}</p>
            <p style="margin-bottom: 0.5rem; color: rgba(255,255,255,0.8);">{{ $t('footer.blog') }}</p>
          </div>

          <!-- Column 3 - Hours -->
          <div style="flex: 1; min-width: 250px;">
            <h3 style="font-size: 1.4rem; margin-bottom: 1.5rem; color: white;">{{ $t('contact.hours.title') }}</h3>
            <p style="margin-bottom: 0.5rem; color: rgba(255,255,255,0.8);">{{ $t('contact.hours.weekday') }}</p>
            <p style="margin-bottom: 0.5rem; color: rgba(255,255,255,0.8);">{{ $t('contact.hours.weekend') }}</p>
          </div>
        </div>

        <!-- Divider -->
        <div style="height: 1px; background-color: rgba(255,255,255,0.2); margin: 1.5rem 0;"></div>

        <!-- Copyright and Bottom Links -->
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; width: 100%;">
          <p style="color: rgba(255,255,255,0.6); font-size: 0.875rem;">&copy; 2024-2025 {{ $t('footer.companyName') }}</p>
          
          <div style="display: flex; gap: 1rem; margin-top: 1rem;">
            <a href="/#aboutus" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.875rem;">{{ $t('nav.aboutUs') }}</a>
            <a href="/#services" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.875rem;">{{ $t('nav.services') }}</a>
            <a href="/#checklists" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.875rem;">{{ $t('nav.checklists') }}</a>
            <a href="/faq" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.875rem;">{{ $t('nav.faq') }}</a>
            <a href="/contactus" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.875rem;">{{ $t('nav.contactUs') }}</a>
          </div>
        </div>
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
import taxExpertiseIcon from '../assets/tax-expertise.jpg'
import { 
  UserPlus,  // or ClipboardSignature
  ClipboardList,  // or FileQuestion
  FileCheck,  // or HandshakeIcon
  Calculator,  // or FileSpreadsheet
  FileSearch,  // or MagnifyingGlass
  Send,  // or Upload
  Briefcase,  // 추가
  Award       // 추가
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
      Send,
      taxExpertiseIcon
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
  
  background-image: linear-gradient(to right, #0047AB, #4169E1);
  background-clip: text;
  -webkit-background-clip: text;
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

.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2); /* 검은색 오버레이, 투명도 50% */
  z-index: 1; /* 배경 이미지 위에 오버레이가 위치하도록 함 */
}

/* hero-section 내부 요소들이 오버레이 위에 보이도록 함 */
.hero-section > * {
  position: relative;
  z-index: 2;
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
  background: linear-gradient(135deg, #002676 0%, #004ea8 80%);
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

/* 폼 입력 요소 스타일 수정 */
.form-input {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  background: white;
  color: #333; /* 텍스트 색상 명시적 설정 */
  -webkit-text-fill-color: #333; /* 웹킷 기반 브라우저용 */
  opacity: 1; /* 투명도 설정 */
}

/* 플레이스홀더 스타일 명시적 설정 */
.form-input::placeholder {
  color: #666;
  opacity: 1; /* 플레이스홀더 투명도 설정 */
}

/* 포커스 상태 스타일 */
.form-input:focus {
  outline: 2px solid #4169E1; /* 포커스 시 테두리 추가 */
  color: #333;
  -webkit-text-fill-color: #333;
  background-color: white;
}

/* 특히 Samsung Internet 브라우저를 위한 수정 */
@supports (-webkit-touch-callout: none) {
  .form-input {
    color-scheme: light; /* 라이트 모드 강제 적용 */
    color: #333 !important;
    -webkit-text-fill-color: #333 !important;
    background-color: white !important;
  }
}

/* 입력 시 자동완성 스타일 */
.form-input:-webkit-autofill,
.form-input:-webkit-autofill:hover, 
.form-input:-webkit-autofill:focus {
  -webkit-text-fill-color: #333;
  -webkit-box-shadow: 0 0 0px 1000px white inset;
  transition: background-color 5000s ease-in-out 0s;
}

/* 드롭다운 셀렉트 박스 화살표 스타일 유지 */
.status-select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 0.65rem auto;
  padding-right: 2.5rem;
  color: #333;
  -webkit-text-fill-color: #333;
  background-color: white;
}

/* 폼 전체 스타일 조정 */
.consultation-form {
  color-scheme: light;
}

/* 텍스트 영역 스타일 */
.form-textarea {
  color: #333;
  -webkit-text-fill-color: #333;
  background-color: white;
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
  background: linear-gradient(to right, #e3780e, #FFb87e, #ffeb8c);
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

/* Enhanced About Us Section Styles */
.aboutus-section {
  padding: 4rem 2rem;
  background-color: white;
}

/* Call to Action Section */
.aboutus-cta {
  margin: 5rem auto 2rem;
  max-width: 1000px;
  padding: 3rem;
  background: linear-gradient(135deg, #002676 0%, #004ea8 80%);
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 38, 118, 0.2);
  text-align: center;
  color: white;
}

.cta-content h3 {
  color: white;
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: linear-gradient(to right, #D4AF37, #FFD700);
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s, transform 0.3s;
}

.cta-button:hover {
  background-color: #FDB515;
  transform: translateY(-3px);
}

/* Responsive Design */
@media screen and (max-width: 992px) {
  .feature-item, .feature-item.reversed {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
  
  .feature-icon {
    flex: 0 0 100%;
  }
  
  .feature-content {
    flex: 0 0 100%;
  }
  
  .feature-content h4::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .aboutus-cta {
    padding: 2.5rem 1.5rem;
  }
  
  .cta-content h3 {
    font-size: 1.8rem;
  }
}

@media screen and (max-width: 576px) {
  .aboutus-section {
    padding: 3rem 1rem;
  }
  
  .feature-content h4 {
    font-size: 1.5rem;
  }
  
  .feature-content p {
    font-size: 1rem;
  }
  
  .cta-content h3 {
    font-size: 1.5rem;
  }
  
  .cta-content p {
    font-size: 1rem;
  }
  
  .cta-button {
    padding: 0.8rem 1.8rem;
  }
}

.profile-container {
  min-height: auto; /* 기존 min-height: 900px에서 변경 */
  height: auto; /* 컨텐츠에 맞게 자동 높이 조정 */
  display: flex;
  gap: 0.25rem;
  align-items: flex-start; /* flex-start로 변경하여 위에서부터 아이템 배치 */
}

.profile-content {
  flex: 1;  /* 전체 공간의 1을 차지 */
  display: flex;
  flex-direction: column;
  gap: 1.0rem;
  max-width: 50%;  /* 최대 너비를 50%로 제한 */
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  background-color: #f8f9fa;
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

.profile-name-title-container {
  background: linear-gradient(135deg, #002676 0%, #004ea8 60%);
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 1.5rem;
  width: 70%;
  box-shadow: 0 10px 25px rgba(0, 38, 118, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.profile-name {
  color: white;
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.profile-title {
  color: #FFD700;
  font-size: 1.75rem;
  font-weight: 600;
  margin-top: 0;
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
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

  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.team-member h4 {
  color: #00599c;
  font-size: 2.5rem;
  margin: 1.5rem 0 0.75rem;
}

.team-member h3:nth-of-type(1) {
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem; /* 이름과 직함 사이 간격 줄이기 */
}

.team-member h3:nth-of-type(2) {
  background-image: linear-gradient(to right, #FFD700,#FFc700, #ffb700, #FFA500);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-size: 2rem;
  font-weight: 600;
  margin-top: 0;
}

.team-member p {
  font-size: 1.5rem;
}

.description, .credentials, .career {
  padding: 1.25rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  /* 기존 왼쪽 테두리 제거 */
  border-left: none;
}

/* 섹션 제목 스타일링 */
.description h4, .credentials h4, .career h4 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #e2e8f0;
  
  /* 그라데이션 효과 추가 */
  background: linear-gradient(
    to right,
    #002676, /* 원래 색상인 짙은 파랑 */
    #1a56db, /* 중간 파랑 */
    #3182ce, /* 밝은 파랑 */
    #1a56db, /* 중간 파랑 */
    #002676  /* 원래 색상으로 돌아옴 */
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}


/* 각 설명 섹션 (소개, 경력, 전문성 등) 스타일링 */
.description, .credentials, .career {
  padding: 0.8rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  border-left: 4px solid #002676;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* 그라데이션 테두리 효과 추가 */
.description::before, .credentials::before, .career::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, #001a5c 0%, #0066cc 50%, #003b7e 100%);
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 38, 118, 0.3);
}

.description:hover::before, .credentials:hover::before, .career:hover::before {
  width: 6px; /* 호버 시 테두리 넓어짐 */
  box-shadow: 0 0 12px rgba(0, 38, 118, 0.5);
  transition: all 0.3s ease;
}

/* 섹션 호버 효과 강화 */
.description:hover, .credentials:hover, .career:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
}

/* 섹션 제목 스타일링 */
.description h4, .credentials h4, .career h4 {
  margin-top: auto;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #e2e8f0;
}

/* 텍스트 스타일링 */
.description p, .credentials p, .career p {
  line-height: 1.7;
  font-size: 1.1rem;
  color: black;
  
}

/* 경력 리스트 스타일링 */
.career-list p {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
}

.career-list p::before {
  content: "•";
  color: #00599c;
  font-size: 1.4rem;
  position: absolute;
  left: 0;
  top: -0.2rem;
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
  background: linear-gradient(135deg, #002676 0%, #004ea8 80%);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 38, 118, 0.15);
  margin: 2rem auto;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}


.title-wrapper h3 {
  color: white;
  font-size: 2.0rem;
  font-weight: 800;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.title-wrapper .line {
  height: 3px;
  background-color: rgba(255, 255, 255, 0.7);
  flex: 1;
  max-width: 150px;
  
}

/* Card Styling */
.aboutus-card {
  max-width: 1200px;
  margin: 2rem auto;
  background: #f8f9fa;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.aboutus-hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

/* Content Grid */
.aboutus-content-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2.5rem;
}

.aboutus-content-item {
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.aboutus-content-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.aboutus-content-item p {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.aboutus-content-item p:last-child {
  margin-bottom: 0;
}

/* Section Divider */
.section-divider {
  margin: 3rem 0;
  border: 0;
  border-top: 1px solid #e2e8f0;
}

/* Responsive Design */
@media screen and (max-width: 992px) {
  .aboutus-content-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .aboutus-content-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
  }
  
  .aboutus-image-container {
    height: 250px;
  }
  
  .aboutus-content-item p {
    font-size: 1rem;
  }

  .profile-name-title-container {
    width: 100%;
    padding: 1.25rem;
  }
  
  .profile-name {
    font-size: 1.75rem;
  }
  
  .profile-title {
    font-size: 1.5rem;
  }

  .aboutus-hero-image {
    height: auto; /* 높이를 자동으로 조정 */
    max-height: none; /* 모바일에서는 최대 높이 제한 해제 */
    aspect-ratio: 16/9; /* 이미지 비율 유지 (필요에 따라 조정) */
  }

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
  margin: 0 auto 3rem;
}

.service-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  z-index: 1;
}

.service-card::before {
  content: "";
  position: absolute;
  inset: 0;
  padding: 4px;
  z-index: -1;
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
  text-align: center;
}

.service-content p {
  background: linear-gradient(
    to right,
    #002676,
    #1a56db,
    #3182ce,
    #1a56db,
    #002676
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0;
  line-height: 1.5;
}

/* Checklist Section */
.checklist-section {
  background-color: #f8f9fa;
  padding: 4rem 2rem;
  width: 100%;
}

.checklist-description {
  color: #4a5568;
  line-height: 1.6;
  text-align: center;
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 3rem;
}

/* Responsive Design */
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

  .hero-title {
    font-size: 3.5rem;
  }

  .hero-subtitle {
    font-size: 2.5rem;
  }

  .aboutus-content-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
  }

  .profile-container {
    flex-direction: column;
    min-height: auto;
    align-items: center;
  }

  .profile-content,
  .profile-image {
    max-width: 100%;
  }

  .profile-image {
    height: 400px;
    margin: 2rem 0;
  }

  .profile-name-title-container {
    width: 100%;
    padding: 1.25rem;
  }
  
  .profile-name {
    font-size: 1.75rem;
  }
  
  .profile-title {
    font-size: 1.5rem;
  }

  .aboutus-hero-image {
    height: auto;
    max-height: none;
    aspect-ratio: 16/9;
  }
}

@media screen and (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }
}image {
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
  text-align: center;
}

.service-content p {
  background: linear-gradient(
    to right,
    #002676, /* 원래 색상인 짙은 파랑 */
    #1a56db, /* 중간 파랑 */
    #3182ce, /* 밝은 파랑 */
    #1a56db, /* 중간 파랑 */
    #002676  /* 원래 색상으로 돌아옴 */
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;  font-weight: 600;
  font-size: 1.1rem;
  margin: 0;
  line-height: 1.5;
  
}

.tax-website h5 {
  color: #002676;
  font-size: large;
}

/* Footer */

.footer h4 {
  color: transparent;
background-image: linear-gradient(
  to right, 
  #00008B 0%,    /* 다크 블루 시작 */
  #0047AB 25%,   /* 코발트 블루 25% 지점 */
  #1E90FF 50%,   /* 도저 블루 50% 지점 */
  #4169E1 75%,   /* 로얄 블루 75% 지점 */
  #6495ED 100%   /* 콘플라워 블루 끝 */
);
background-clip: text;
-webkit-background-clip: text;
font-size: medium;
}

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
  color: #333;
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
  /* Footer mobile styling */
  footer div[style*="flex-wrap: wrap; justify-content: space-between"] {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  footer div[style*="display: flex; gap: 1rem"] {
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1.5rem;
  }
  
  footer p[style*="color: rgba(255,255,255,0.6)"] {
    text-align: center;
    width: 100%;
    margin-bottom: 1rem;
  }
  
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
    background-image: linear-gradient(
    to right, 
    rgba(0, 0, 139, 0.8),  /* 다크 블루 (80% 투명도) */
    rgba(0, 71, 171, 0.8),  /* 코발트 블루 (80% 투명도) */
    rgba(30, 144, 255, 0.8),  /* 도저 블루 (80% 투명도) */
    rgba(65, 105, 225, 0.8),  /* 로얄 블루 (80% 투명도) */
    rgba(100, 149, 237, 0.8)   /* 콘플라워 블루 (80% 투명도) */
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
    font-size: 1.5rem;
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
    align-items: center;
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
  .footer h4 {
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
  background-image: linear-gradient(
    to right, 
    #00008B,  /* 다크 블루 */
    #0047AB,  /* 코발트 블루 */
    #6495ED   /* 콘플라워 블루 */
  );
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
  margin: 1.5rem auto;
  filter: brightness(0) saturate(100%) invert(32%) sepia(72%) saturate(1217%) hue-rotate(195deg) brightness(91%) contrast(101%); /* 파란색 필터 */
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
  background: linear-gradient(135deg, #7cbbee 0%, #5ba4e0 80%);
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