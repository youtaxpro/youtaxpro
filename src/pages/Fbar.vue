<template>
  <div id="fbar" class="tax-website fbar-page">
    <!-- Hero -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>{{ $t('fbar.title') }}</h1>
        <h2>{{ $t('fbar.subtitle') }}</h2>
        <p class="hero-description">{{ $t('fbar.description') }}</p>
        <router-link to="/contactus" class="cta-button">
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
        <div class="penalty-amount">$16,536 <span>. <form action=""></form></span></div>
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


    <!-- CTA -->
    <section class="cta-section">
      <div class="section-inner">
        <h3 class="section-h3">{{ $t('fbar.ctaTitle') }}</h3>
        <p>{{ $t('fbar.ctaDescription') }}</p>
        <router-link to="/contactus" class="cta-button">
          {{ $t('fbar.ctaButton') }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Fbar'
}

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
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 3rem;
  width: 100%;
  margin-top: 4rem;
}

.info-card {
  background: white;
  padding: 3.5rem 2.5rem;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
  border-left: 6px solid #667eea;
  text-align: center;
  transition: all 0.3s ease;
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
  font-size: 1.15rem;
  line-height: 1.7;
  margin: 0;
  font-weight: 500;
}

/* 모바일 반응형 */
@media (max-width: 768px) {
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
