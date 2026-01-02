<template>
       <MainLayout>
  <div id="streamlined" class="tax-website streamlined-page">
    <!-- Hero -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>{{ $t('streamlined.title') }}</h1>
        <p class="hero-description">{{ $t('streamlined.description') }}</p>
        <router-link to="/contactus" class="cta-button">
          {{ $t('streamlined.ctaButton') }}
        </router-link>
      </div>
    </section>

    <!-- Streamlined 소개 -->
    <section class="streamlined-info-section">
      <div class="section-inner">
        <h3 class="section-h3">{{ $t('streamlined.purpose.title') }}</h3>
        <div class="cards-grid">
          <div class="info-card non-willful">
            <h4>{{ $t('streamlined.purpose.nonWillful') }}</h4>
            <p>{{ $t('streamlined.purpose.content') }}</p>
          </div>
          <div class="info-card eligibility">
            <h4>{{ $t('streamlined.eligibility.title') }}</h4>
            <ul>
              <li>{{ $t('streamlined.eligibility.usResident') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 비교표 -->
    <section class="comparison-section">
      <div class="section-inner">
        <h3 class="section-h3">{{ $t('streamlined.comparison.title') }}</h3>
        <div class="comparison-table-wrapper">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>{{ $t('streamlined.comparison.headers.type') }}</th>
                <th>{{ $t('streamlined.comparison.headers.penalty') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ $t('streamlined.comparison.rows.foreign') }}</td>
                <td>{{ $t('streamlined.comparison.rows2.foreign') }}</td>
              </tr>
              <tr class="highlight">
                <td>{{ $t('streamlined.comparison.rows.domestic') }}</td>
                <td>{{ $t('streamlined.comparison.rows2.domestic') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 주의사항 -->
    <section class="warning-section">
      <div class="section-inner">
        <h3 class="section-h3 warning-title">{{ $t('streamlined.warning.title') }}</h3>
        <div class="warning-cards">
          <div class="warning-card">
            <div class="warning-icon">⚠️</div>
            <h4>{{ $t('streamlined.warning.audit') }}</h4>
            <p>{{ $t('streamlined.warning.auditDesc') }}</p>
          </div>
          <div class="warning-card">
            <div class="warning-icon">🚨</div>
            <h4>{{ $t('streamlined.warning.criminal') }}</h4>
            <p>{{ $t('streamlined.warning.criminalDesc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="section-inner">
        <h3 class="section-h3">{{ $t('streamlined.ctaTitle') }}</h3>
        <p>{{ $t('streamlined.ctaDescription') }}</p>
        <router-link to="/contactus" class="cta-button">
          {{ $t('streamlined.ctaButton') }}
        </router-link>
      </div>
    </section>
  </div>
  </MainLayout>
</template>

<script>
import { ref, onMounted } from 'vue';
import MainLayout from '../layouts/MainLayout.vue';

export default {
  name: 'Streamlined',
  components: {
    MainLayout
  },
  setup() {
    // FBAR 전용 ref 상태들
    const isHeroLoaded = ref(false);
    const isCardsLoaded = ref(false);
    const scrollProgress = ref(0);

    // 페이지 로딩 애니메이션 제어
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.value = (window.scrollY / docHeight) * 100;
    };

    onMounted(() => {
      // Hero 섹션 로딩 완료
      setTimeout(() => {
        isHeroLoaded.value = true;
      }, 300);

      // 카드 섹션 로딩 완료  
      setTimeout(() => {
        isCardsLoaded.value = true;
      }, 600);

      // 스크롤 이벤트 리스너
      window.addEventListener('scroll', handleScroll);
      
      // DOM 로드 후 클래스 추가 (Home.vue 스타일 통일)
      document.body.classList.add('streamlined-page-loaded');
    });

    return {
      isHeroLoaded,
      isCardsLoaded,
      scrollProgress,
    };
  }
};

</script>

<style scoped>
/* 🔥 Fbar.vue 스타일 100% 계승 */
.tax-website {
  position: relative;
  background-image: linear-gradient(to right, #0047AB, #4169E1);
  background-clip: text;
  -webkit-background-clip: text;
  min-height: 100vh;
  width: 100% !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  background-color: #f8f9fa !important;
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box;
}

.streamlined-page {
  width: 100vw !important;
  max-width: none !important;
  overflow-x: hidden;
}


/* Home.vue section 스타일 정확 복사 */
section {
  padding: 4rem 2rem !important;
  width: 100% !important;
  margin: 0 !important;
  max-width: none !important;
  
}


/* FBAR 페이지 스타일 재사용 + Streamlined 테마 */
.streamlined-page {
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  
}

/* Hero - 초록 테마 */
/* Hero */
.hero-section {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  text-align: center;
  padding: 6rem 2rem;
}

.hero-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-content h1 {
  font-size: 3rem !important;
  font-weight: 800 !important;
  color: white !important;
  margin-bottom: 1.5rem;
  margin-top: 5rem;
}

.hero-content h2 {
  font-size: 2rem !important;
  font-weight: 700;
  color: white;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.hero-description {
  font-size: 1.3rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  color: rgba(255,255,255,0.9);
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

/* 카드 그리드 */
.streamlined-info-section {
  background: #f0fdf4;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 2;
}

.info-card {
  background: rgba(255, 255, 255, 0.95); /* 동일 */
  backdrop-filter: blur(20px);
  border-radius: 24px; /* 동일 */
  padding: 3rem 2.5rem; /* 동일 */
  box-shadow: 
    0 25px 60px rgba(102, 126, 234, 0.25), /* 파랑 테마 */
    0 10px 30px rgba(0, 0, 0, 0.15);
  border: 2px solid rgba(102, 126, 234, 0.3); /* 파랑 테마 */
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); /* 동일 */
  position: relative;
  overflow: hidden;
  text-align: center; /* 기존 유지 */
}

.info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  transition: left 0.6s;
}

.info-card h4 {
  font-size: 2rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 2rem;
  margin-bottom: 1.2rem 0 2rem 0; /* 조정 */
  line-height: 1.3;
}

.info-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

.info-card li {
  padding: 1.2rem 0;
  border-bottom: 1px solid #f1f5f9;
  font-size: 1.2rem;
  color: #374151;
}

.non-willful {
  border-left-color: #059669;
}

.eligibility {
  border-left-color: #059669;
}



/* 비교표 - 초록/회색 */
/* 비교표 - Fbar 스타일 통합 */
.comparison-section {
  background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%) !important;
  padding: 6rem 1.5rem !important;  /* ✅ 좌우 패딩 축소 */
  position: relative !important;
  overflow: visible !important;     /* ✅ overflow visible */
}

.comparison-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.comparison-table-wrapper {
  background: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(20px) !important;
  border-radius: 24px !important;
  box-shadow: 
    0 25px 60px rgba(16, 185, 129, 0.25),
    0 10px 30px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.6) !important;
  border: 2px solid rgba(16, 185, 129, 0.3) !important;
  overflow: hidden !important;
  max-width: 1000px !important;
  margin: 0 auto !important;
  position: relative !important;
  z-index: 2 !important;
}

.comparison-table {
  width: 100% !important;
  border-collapse: collapse !important;
}

.comparison-table th {
  background: linear-gradient(135deg, #10b981, #059669) !important;
  color: white !important;
  padding: 1.5rem 1rem !important;
  text-align: center !important;
  font-weight: 800 !important;
  font-size: 1.1rem !important;
}

.comparison-table td {
  padding: 1.5rem 1rem !important;
  text-align: center !important;
  border-bottom: 1px solid #f1f5f9 !important;
  font-size: 1.15rem !important;
  color: #374151 !important;
  font-weight: 500 !important;
}


/* 모바일 */
@media (max-width: 768px) {
  .comparison-table-wrapper {
    margin: 0 -1.5rem !important;
    border-radius: 0 !important;
  }
  
  .comparison-table {
    font-size: 1rem !important;
  }
}


.warning-section {
  background: linear-gradient(135deg, #fef2f2, #fee2e2);
}

.warning-title {
  background: linear-gradient(135deg, #dc2626, #b91c1c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.warning-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 3rem 2.5rem;
  box-shadow: 
    0 25px 60px rgba(220, 38, 38, 0.25),
    0 10px 30px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  border: 2px solid rgba(248, 113, 113, 0.3);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
  text-align: center;
}

.warning-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  transition: left 0.6s;
}

.warning-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  margin: 0 auto 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  color: white;
  font-weight: bold;
}

.warning-card h4 {
  font-size: 1.6rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 1.2rem;
  line-height: 1.3;
}

.warning-amount {
  font-size: 2.2rem;
  font-weight: 900;
  background: linear-gradient(135deg, #dc2626, #b91c1c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.warning-amount span {
  font-size: 0.85em;
  font-weight: 600;
  color: #6b7280;
  display: block;
  margin-top: 0.25rem;
}

.warning-card p {
  color: #4b5563;
  font-size: 1.5rem;
  line-height: 1.7;
  margin: 0;
  font-weight: 500;
}

/* CTA */
.cta-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.cta-section .section-h3 {
  font-size: 3rem !important;
  font-weight: 800 !important;
  color: white !important;
}

.cta-button {
  display: inline-block;
  background: #ff6b6b;
  color: white;
  padding: 1.8rem 4rem;
  border-radius: 60px;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.3rem;
  margin-top: 2.5rem;
  transition: all 0.4s ease;
  box-shadow: 0 12px 35px rgba(255, 107, 107, 0.4);
}

.cta-button:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 50px rgba(255, 107, 107, 0.6);
}

/* Home.vue 폰트 스타일 정확 적용 */
.section-h3 {
  font-size: 3rem !important;
  font-weight: 800 !important;
  color: #1e293b !important;
  text-align: center;
  margin-bottom: 4rem;
}


/* 반응형 동일 */
@media (max-width: 768px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
}
</style>
