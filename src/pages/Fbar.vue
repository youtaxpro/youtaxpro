<template>
     <MainLayout>
  <div id="fbar" 
         class="tax-website fbar-page"
         :class="{ 
           'hero-loaded': isHeroLoaded,
           'cards-loaded': isCardsLoaded 
         }">
    <!-- Hero -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>{{ $t('fbar.title') }}</h1>
        <p class="hero-description">{{ $t('fbar.description') }}</p>
        <router-link :to="lp('/contactus')" class="cta-button">
          {{ $t('fbar.ctaButton') }}
        </router-link>
      </div>
    </section>

    <!-- FBAR 정보 -->
    <section class="fbar-info-section">
      <div class="section-inner">
        <h3 class="section-h3">{{ $t('fbar.whatIsFbar') }}</h3>
        <div class="cards-grid">
          <div class="info-card">
            <h4>{{ $t('fbar.whoMustFile.title') }}</h4>
            <ul>
              <li>{{ $t('fbar.whoMustFile.bank') }}</li>
              <li>{{ $t('fbar.whoMustFile.threshold') }}</li>
              <li>{{ $t('fbar.whoMustFile.citizen') }}</li>
            </ul>
          </div>
          <div class="info-card">
            <h4>{{ $t('fbar.deadline.title') }}</h4>
            <ul>
              <li><strong>{{ $t('fbar.deadline.date') }}</strong></li>
              <li>{{ $t('fbar.deadline.method') }}</li>
              <li>{{ $t('fbar.deadline.free') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 벌금 테이블 -->
<!-- penalty-section 전체 교체 -->
<section class="penalty-section">
  <div class="section-inner">
    <h3 class="section-h3 penalty-title">{{ $t('fbar.penalties.title') }}</h3>
    
    <!-- 🔥 카드 스타일 벌금 테이블 -->
    <div class="penalty-cards">
      <!-- 비고의적 벌금 카드 -->
      <div class="penalty-card non-willful">
        <div class="penalty-icon">⚠️</div>
        <h4>{{ $t('fbar.penalties.nonWillful') }}</h4>
        <div class="penalty-amount">$16,536 <span><br> <form action=""></form></span></div>
        <p>{{ $t('fbar.penalties.case1') }}</p>
      </div>
      
      <!-- 고의적 벌금 카드 -->
      <div class="penalty-card willful">
        <div class="penalty-icon">🚨</div>
        <h4>{{ $t('fbar.penalties.willful') }}</h4>
        <div class="penalty-amount">$165,353 <span>or 50% assets</span></div>
        <p>{{ $t('fbar.penalties.case2') }}</p>
      </div>
    </div>
  </div>
</section>

<!-- 🔥 FATCA 완전 섹션 -->
<section class="fatca-section">
  <div class="section-inner">
    <h3 class="section-h3 fatca-title">{{ $t('fatca.title') }}</h3>
    
    <!-- FATCA 소개 -->
    <div class="fatca-intro">
      <p>{{ $t('fatca.intro') }}</p>
    </div>
    
    <!-- 신고 기준 카드 -->
    <div class="fatca-thresholds">
      <div class="threshold-card us-resident">
        <h4>{{ $t('fatca.usResident.title') }}</h4>
        <div class="threshold-amount">$50,000 <span>{{ $t('fatca.usResident.yearEnd') }}</span></div>
        <p>{{ $t('fatca.usResident.desc') }}</p>
      </div>
      <div class="threshold-card abroad-resident">
        <h4>{{ $t('fatca.abroadResident.title') }}</h4>
        <div class="threshold-amount">$200,000 <span>{{ $t('fatca.abroadResident.yearEnd') }}</span></div>
        <p>{{ $t('fatca.abroadResident.desc') }}</p>
      </div>
    </div>
    
    <!-- FBAR vs FATCA 비교표 -->
    <div class="fatca-full-table">
  <h4 class="table-title">{{ $t('fatca.table.fullTitle') }}</h4>
  <div class="threshold-grid">
    <!-- 미국 거주 독신 -->
    <div class="threshold-group us-single">
      <h5>{{ $t('fatca.table.usSingle') }}</h5>
      <div class="threshold-row">
        <span>{{ $t('fatca.table.yearEnd') }}</span>
        <strong>$50,000</strong>
      </div>
      <div class="threshold-row">
        <span>{{ $t('fatca.table.max') }}</span>
        <strong>$75,000</strong>
      </div>
    </div>
    
    <!-- 미국 거주 기혼 -->
    <div class="threshold-group">
      <h5>{{ $t('fatca.table.usMarried') }}</h5>
      <div class="threshold-row">
        <span>{{ $t('fatca.table.yearEnd') }}</span>
        <strong>$100,000</strong>
      </div>
      <div class="threshold-row">
        <span>{{ $t('fatca.table.max') }}</span>
        <strong>$150,000</strong>
      </div>
    </div>
    
    <!-- 해외 거주 독신 -->
    <div class="threshold-group abroad-single">
      <h5>{{ $t('fatca.table.abroadSingle') }}</h5>
      <div class="threshold-row">$200,000 / $300,000</div>
    </div>
    
    <!-- 해외 거주 기혼 -->
    <div class="threshold-group abroad-married">
      <h5>{{ $t('fatca.table.abroadMarried') }}</h5>
      <div class="threshold-row">$400,000 / $600,000</div>
      </div>
     </div>
    </div>
  </div>
</section>


    <!-- CTA -->
    <section class="cta-section">
      <div class="section-inner">
        <h3 class="section-h3">{{ $t('fbar.ctaTitle') }}</h3>
        <p>{{ $t('fbar.ctaDescription') }}</p>
        <router-link :to="lp('/contactus')" class="cta-button">
          {{ $t('fbar.ctaButton') }}
        </router-link>
      </div>
    </section>
  </div>
  </MainLayout>
</template>

<script>
import { ref, onMounted } from 'vue';
import MainLayout from '../layouts/MainLayout.vue';
import { useLocalePath } from '../composables/useLocalePath';

export default {
  name: 'Fbar',
  components: {
    MainLayout
  },
  setup() {
    const { lp } = useLocalePath();
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
      document.body.classList.add('fbar-page-loaded');
    });

    return {
      isHeroLoaded,
      isCardsLoaded,
      scrollProgress,
      lp,
    };
  }
};
</script>

<style scoped>
/* 🔥 Home.vue tax-website 스타일 100% 계승 */
.tax-website {
  position: relative;
  background-image: linear-gradient(to right, #0047AB, #4169E1);
  background-clip: text;
  -webkit-background-clip: text;
  min-height: 100vh;
  width: 100% !important; /* 강제 전체 너비 */
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  background-color: #f8f9fa !important;
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box;
}

.fbar-page {
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

/* 🔥 섹션 내부 컨테이너 */
.section-inner {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  padding: 0;
}

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
.fbar-info-section {
  background: #f8f9ff;
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

.info-card:hover::before {
  left: 100%;
}

.info-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 25px 60px rgba(102, 126, 234, 0.25);
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

/* 테이블 */
.penalty-section {
  background: linear-gradient(135deg, #fef2f2 0%, #fde8e8 50%, #f87171 100%);
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
}

.table-responsive {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; /* 모바일 스크롤 부드럽게 */
  border-radius: 16px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
  margin-top: 3rem;
  background: white;
}

/* 🔥 페널티 섹션 전용 스타일 */
.penalty-section {
  background: linear-gradient(135deg, #fef2f2 0%, #fde8e8 50%, #f87171 100%);
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
}

.penalty-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(248,113,113,0.1)"/><circle cx="75" cy="75" r="0.5" fill="rgba(248,113,113,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  pointer-events: none;
  z-index: 1;
}

.penalty-title {
  background: linear-gradient(135deg, #dc2626, #b91c1c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  font-size: 3.2rem !important;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;
}

.penalty-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 2;
}

.penalty-card {
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

.penalty-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  transition: left 0.6s;
}

.penalty-card:hover::before {
  left: 100%;
}

.penalty-card:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow: 
    0 40px 100px rgba(220, 38, 38, 0.4),
    0 20px 50px rgba(0, 0, 0, 0.25);
  border-color: rgba(220, 38, 38, 0.6);
}

/* 비고의적 (연한 빨강) */
.non-willful {
  border-left: 6px solid #f87171;
}

.non-willful .penalty-icon {
  background: linear-gradient(135deg, #f87171, #ef4444);
}

/* 고의적 (진한 빨강) */
.willful {
  border-left: 6px solid #dc2626;
}

.willful .penalty-icon {
  background: linear-gradient(135deg, #dc2626, #b91c1c);
}

.penalty-icon {
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

.penalty-card h4 {
  font-size: 1.6rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 1.2rem;
  line-height: 1.3;
}

.penalty-amount {
  font-size: 2.2rem;
  font-weight: 900;
  background: linear-gradient(135deg, #dc2626, #b91c1c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.penalty-amount span {
  font-size: 0.85em;
  font-weight: 600;
  color: #6b7280;
  display: block;
  margin-top: 0.25rem;
}

.penalty-card p {
  color: #4b5563;
  font-size: 1.5rem;
  line-height: 1.7;
  margin: 0;
  font-weight: 500;
}

/* 🔥 FATCA 섹션 */
.fatca-section {
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  padding: 6rem 2rem;
  position: relative;
}

.fatca-title {
  background: linear-gradient(135deg, #059669, #047857);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  font-size: 3.2rem !important;
  margin-bottom: 4rem;
}

.fatca-intro {
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 3rem;
  margin-bottom: 4rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 20px 50px rgba(0,0,0,0.1);
  border-left: 6px solid #10b981;
}

.fatca-thresholds {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.threshold-card {
  background: white;
  border-radius: 20px;
  padding: 3rem 2.5rem;
  box-shadow: 0 20px 50px rgba(0,0,0,0.1);
  text-align: center;
  transition: all 0.3s ease;
  border-left: 6px solid #10b981;
}

.threshold-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 70px rgba(16,185,129,0.25);
}

.threshold-card h4 {
  font-size: 1.6rem;
  font-weight: 800;
  color: #059669;
  margin-bottom: 1rem;
}

.threshold-amount {
  font-size: 2.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #059669, #047857);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.threshold-amount span {
  font-size: 1rem;
  color: #6b7280;
  display: block;
  margin-top: 0.5rem;
}

.table-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1e293b;
  text-align: center;
  margin-bottom: 2rem;
}

.fatca-full-table {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  box-shadow: 0 25px 60px rgba(0,0,0,0.1);
  backdrop-filter: blur(20px);
}

.threshold-grid {
  display: grid !important;
  grid-template-columns: repeat(2, 1fr) !important;  /* ✅ 2열 고정 */
  grid-template-rows: repeat(2, auto) !important;    /* ✅ 2행 고정 */  gap: 2rem !important;
    gap: 2rem !important;
  width: 100% !important;
  max-width: 1000px !important;  /* ✅ 최대 너비 제한 */
  margin: 0 auto !important;
}

.threshold-group {
  background: linear-gradient(135deg, #f0fdf4, #dcfce7) !important;
  border-radius: 20px !important;
  border-left: 6px solid #10b981 !important;
  height: 200px !important;  /* ✅ 높이 완전 통일 */
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  text-align: center !important;
}

.threshold-row {
  display: flex !important;
  justify-content: center !important;       /* ✅ 가운데 정렬 */
  align-items: center !important;           /* ✅ 세로 가운데 */
  width: 100% !important;
  padding: 1rem 0 !important;
  font-size: 1.15rem !important;
  gap: 1rem !important;                     /* 숫자 간격 */
  text-align: center !important;
  color: #059669 !important;

}

.threshold-row:last-child {
  border-bottom: none !important;
  color: #059669 !important;
}

.threshold-row strong {
  font-size: 1.4rem !important;
  background: linear-gradient(135deg, #059669, #047857) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  font-weight: 900 !important;
}


/* 모바일 완벽 */
@media (max-width: 768px) {
  .threshold-grid {
      grid-template-columns: 1fr !important;  /* 1열 */
    grid-template-rows: auto !important;    /* 자동 높이 */
    gap: 1.5rem !important;
  }
  
  .threshold-group {
    height: auto !important;
    padding: 2rem 1.5rem !important;
  }
}

/* 모바일 */
@media (max-width: 768px) {
  .fatca-thresholds {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .comparison-table {
    margin: 0 -1.5rem;
    border-radius: 0;
  }
}


/* 모바일 반응형 */
@media (max-width: 768px) {
  .cards-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 500px;
    margin: 0 auto;
        padding: 2.5rem 2rem;
  }

  .penalty-cards {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 500px;
    margin: 0 auto;
  }
  
  .penalty-card {
    padding: 2.5rem 2rem;
  }
  
  .penalty-icon {
    width: 70px;
    height: 70px;
    font-size: 2rem;
  }
  
  .penalty-amount {
    font-size: 1.9rem;
  }
}

@media (max-width: 480px) {
  .penalty-section {
    padding: 4rem 1.5rem;
  }
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

/* 모바일 */
@media (max-width: 768px) {
  .table-responsive {
    margin: 0 -1.5rem 0 -1.5rem; /* 섹션 좌우 풀 너비 */
    border-radius: 0;
    box-shadow: none;
  }
  
  .penalty-table {
    min-width: 650px; /* 모바일에서 더 넓게 */
  }
  
  .penalty-table th,
  .penalty-table td {
    padding: 1rem 0.8rem;
    font-size: 0.95rem;
  }
}

/* 🔥 초소형 모바일 */
@media (max-width: 480px) {
  .penalty-table {
    min-width: 550px;
  }
  
  .penalty-table th,
  .penalty-table td {
    padding: 0.9rem 0.5rem;
    font-size: 0.9rem;
  }
}
</style>
