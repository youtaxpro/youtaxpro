<template>
  <div id="home" class="tax-website">
    <!-- Navigation 컴포넌트 -->
    <HomeNavigation 
      :is-scrolled="isScrolled" 
      @change-language="changeLanguage" 
    />

    <!-- Hero Section 컴포넌트 -->
    <HomeHero />

    <!-- About Us Section 컴포넌트 -->
    <HomeAboutUs />
      
    <!-- 프로필 섹션 컴포넌트 -->
    <HomeProfile />

    <!-- Services Section 컴포넌트 -->
    <HomeServices />

    <!-- 신고절차 섹션 컴포넌트 -->
    <HomeChecklists />

    <!-- Footer 컴포넌트 -->
    <HomeFooter />
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
import HomeNavigation from '../components/home/HomeNavigation.vue';
import HomeHero from '../components/home/HomeHero.vue';
import HomeAboutUs from '../components/home/HomeAboutUs.vue';
import HomeProfile from '../components/home/HomeProfile.vue';
import HomeServices from '../components/home/HomeServices.vue';
import HomeChecklists from '../components/home/HomeChecklists.vue';
import HomeFooter from '../components/home/HomeFooter.vue';

export default {
  name: 'Home',
  components: {
    HomeNavigation,
    HomeHero,
    HomeAboutUs,
    HomeProfile,
    HomeServices,
    HomeChecklists,
    HomeFooter
  },
  setup() {
    const { locale } = useI18n();
    const isScrolled = ref(false);
    const scrollProgress = ref(0);
    
    const changeLanguage = (lang) => {
      locale.value = lang;
    };

    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      scrollProgress.value = (scrollPosition / docHeight) * 100;
      isScrolled.value = scrollPosition > 50;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      isScrolled,
      scrollProgress,
      changeLanguage
    };
  }
};
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
  background-color: #f8f9fa;
}

.tax-website h3 {
  font-size: 3rem;
  font-weight: 800;
  color: black;
}

.tax-website h4 {
  font-size: 2rem;
  font-weight: 800;
  color: black;
}

.tax-website h5 {
  color: #002676;
  font-size: large;
}

/* Common Section Styles */
section {
  padding: 4rem 2rem;
  width: 100%;
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
</style>