<template>
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

          <!-- 약력 -->
          <div class="description">
            <h4>{{ $t('profile.sections.career.title') }}</h4>
            <div class="career-list">
              <p>{{ $t('profile.sections.career.list[0]') }}</p>
              <p>{{ $t('profile.sections.career.list[1]') }}</p>
              <p>{{ $t('profile.sections.career.list[2]') }}</p>
            </div>
          </div>
        </div>
        
        <div class="profile-image">
          <img :src="ceoPic" alt="CEO Profile" />          
          <div class="profile-name-title-container">
            <h3 class="profile-name">{{ $t('profile.name') }}</h3>
            <h3 class="profile-title">{{ $t('profile.title') }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ceoPic from '../../assets/250220_ceo_pic.jpg';
import americanFlag from '../../assets/american_flag.jpg';  // ✅ 추가

export default {
  name: 'HomeProfile',
  setup() {
    return {
      ceoPic,
      americanFlag
    };
  }
};
</script>

<style scoped>
/* 🔥 CPA 디자인 - Pilot/Luminary 스타일 */

.team-member {
  position: relative !important;
  background-image: url('../../assets/american_flag.jpg') !important;
  background-size: cover !important;
  background-position: center bottom !important;
  background-attachment: fixed !important;
  min-height: 100vh !important;
  padding: 4rem 2rem !important;  /* 내부 패딩만 유지 */
  overflow: hidden !important;
}

/* 화이트 오버레이 */
.team-member::before {
  content: '' !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  background: 
  linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(240,246,253,0.78) 100%) !important;
  z-index: 1 !important;
}

.profile-container {
  position: relative !important;
  z-index: 3 !important;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 5rem;
  align-items: start;
  z-index: 3 !important;  
}

.profile-content {
    display: flex !important;
  flex-direction: column !important;
  gap: 1.5rem !important;
  height: 850px !important;  /* ✅ 높이 증가 */
  min-height: 850px !important;
  z-index: 4 !important;  
}

.description, .career {
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;  /* ✅ 세로 가운데 정렬 */
  padding: 2rem 2.5rem !important;
  background: #fafbfc !important;
  border: 1px solid #e5e7eb !important;
  border-radius: 16px !important;
  overflow: hidden !important;
  height: auto;
}

.description:nth-child(1),
.description:nth-child(2),
.description:nth-child(3) {
  grid-row: span 1 !important;  /* 각 섹션 1행씩 */
}

.description h4 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.description h4::before {
  content: '';
  width: 4px;
  height: 24px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border-radius: 2px;
}

.career h4::before {
  background: linear-gradient(135deg, #10b981, #059669);
}

.description p {
  color: #4b5563;
  line-height: 1.75;
  font-size: 1.1rem;
  margin: 0;
}

.career-list p {
  color: #374151;
  font-size: 1.05rem;
  line-height: 1.6;
  position: relative;
  padding-left: 1.75rem;
  margin-bottom: 1rem;
}

.career-list p::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: 900;
  font-size: 1rem;
}

/* 프로필 섹션 - 미니멀 원형 */
.profile-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
}

.profile-image img {
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 50%;
  border: 6px solid #f8fafc;
  box-shadow: 
    0 20px 50px rgba(0,0,0,0.1),
    0 10px 25px rgba(0,0,0,0.05),
    inset 0 2px 0 rgba(255,255,255,1);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.profile-name-title-container {
  background: white;
  padding: 2rem 1.5rem;
  border-radius: 20px;
  border: 2px solid #f3f4f6;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
  text-align: center;
  width: 100%;
}

.profile-name {
  font-size: 2.25rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #1f2937, #374151);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.profile-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #6b7280;
  margin: 0;
  letter-spacing: 0.025em;
}


@keyframes floatGentle {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(1deg); }
}

/* 모바일에서 축소 */
@media (max-width: 768px) {
  .team-member {
    background-attachment: scroll !important;
    padding: 3rem 1rem !important;
  }
  
  .flag-decoration {
    width: 100px !important;
    height: 65px !important;
    bottom: 1.5rem !important;
    right: 1.5rem !important;
  }
}

/* 모바일 */
@media (max-width: 1024px) {
  .profile-container {
    grid-template-columns: 1fr;
    gap: 4rem;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .team-member {
    padding: 3rem 1rem;
  }
  
  .description, .career {
    padding: 2rem 1.5rem;
  }
  
  .profile-image img {
    width: 240px;
    height: 240px;
  }
}
</style>

