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

          <!-- 자격증 -->
          <div class="credentials">
            <h4>{{ $t('profile.sections.certification.title') }}</h4>
            <p>{{ $t('profile.sections.certification.content') }}</p>
          </div>

          <!-- 약력 -->
          <div class="career">
            <h4>{{ $t('profile.sections.career.title') }}</h4>
            <div class="career-list">
              <p>{{ $t('profile.sections.career.list[0]') }}</p>
              <p>{{ $t('profile.sections.career.list[1]') }}</p>
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

export default {
  name: 'HomeProfile',
  setup() {
    return {
      ceoPic
    };
  }
};
</script>

<style scoped>
:root {
  --primary-color: #2563eb; /* 현대적인 블루 */
  --secondary-color: #4f46e5; /* 인디고 */
  --accent-color: #8b5cf6; /* 보라색 */
  --highlight-color: #f59e0b; /* 골드/옐로우 계열 */
  --text-dark: #1e293b; /* 짙은 슬레이트 */
  --text-light: #f8fafc; /* 밝은 회색 */
  --bg-light: #f1f5f9; /* 밝은 배경 */
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);  /* 부드러운 애니메이션 */
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(37, 99, 235, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
}

.aboutus {
  padding: 4rem 2rem;
  background-color: var(--bg-light);
  animation: fadeIn 0.8s ease forwards;
  width: 100%;
  box-sizing: border-box;
}

.profile-container {
  min-height: auto;
  height: auto;
  display: flex;
  gap: 2.5rem; /* 간격 증가 */
  align-items: flex-start;
  max-width: 1200px; /* 최대 너비 제한 - HomeAboutUs와 일치 */
  margin: 0 auto; /* 중앙 정렬 */
  padding: 2rem 0;
}

.profile-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* 간격 증가 */
  max-width: 50%;
  border-radius: 16px; /* 더 둥근 모서리 */
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px); /* 모던 블러 효과 */
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06), 
              0 2px 5px rgba(0, 0, 0, 0.04),
              0 1px 30px rgba(37, 99, 235, 0.05); /* 다층 그림자 */
  animation: fadeIn 0.8s ease forwards;
}

.profile-image {
  flex: 1;
  max-width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: slideInRight 1s ease forwards;
}

.profile-image img {
  width: 70%;
  height: 70%;
  object-fit: cover;
  border-radius: 20px; /* 더 둥근 모서리 */
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12), 
              0 10px 20px rgba(0, 0, 0, 0.08),
              0 0 0 1px rgba(255, 255, 255, 0.1) inset; /* 깊이감 있는 그림자 */
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) 
         drop-shadow(0 4px 3px rgb(0 0 0 / 0.1)); /* 부드러운 드롭 쉐도우 */
  transition: var(--transition);
  transform: perspective(1000px) rotateY(2deg); /* 약간의 3D 효과 */
}

.profile-image img:hover {
  transform: perspective(1000px) rotateY(0deg);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15),
              0 15px 25px rgba(0, 0, 0, 0.1), 
              0 0 0 1px rgba(255, 255, 255, 0.2) inset;
}

.profile-name-title-container {
  background-image: linear-gradient(
    to right, 
    rgba(30, 77, 146, 0.8),  /* 진한 블루 (80% 투명도) */
    rgba(46, 94, 170, 0.8),  /* 아이덴티티 블루 (80% 투명도) */
    rgba(74, 116, 185, 0.8),  /* 중간 블루 (80% 투명도) */
    rgba(94, 138, 208, 0.8),  /* 밝은 블루 (80% 투명도) */
    rgba(117, 194, 246, 0.8)   /* 하늘색 (80% 투명도) */
  );
  border-radius: 16px;
  padding: 1.8rem;
  margin-top: 2rem;
  width: 80%;
  box-shadow: 0 15px 30px rgba(37, 99, 235, 0.2),
              0 5px 15px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(5px);
  transition: var(--transition);
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.profile-name-title-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: -50%;
  width: 150%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
    transform: skewX(-20deg) translateX(-150%);
  z-index: -1;
  animation: shine 3s infinite;
}

@keyframes shine {
  0% { left: -150%; }
  100% { left: 150%; }
}

.profile-name-title-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(37, 99, 235, 0.25),
              0 8px 20px rgba(0, 0, 0, 0.12);
}

.profile-name {
  color: white;
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.5px;
}

.profile-title {
  color: #FFD700;
  font-size: 1.75rem;
  font-weight: 600;
  margin-top: 0.25rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.5px;
}

.team-member {
  margin-top: 0rem;
}

.team-member h4 {
  color: var(--secondary-color);
  font-size: 1.5rem;
  margin: 0 0 0.75rem;
  font-weight: 600;
}

/* 섹션 컨테이너 스타일링 */
.description, .credentials, .career {
  padding: 1.5rem;
  background-color: white;
  border-radius: 14px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03),
              0 1px 3px rgba(0, 0, 0, 0.02);
  position: relative;
  transition: var(--transition);
  border-left: none;
  overflow: hidden;
  border-top: 4px solid transparent;
  background-clip: padding-box;
}

.description::before, .credentials::before, .career::before {
  content: "";
  position: absolute;
  top: -4px; /* border-top의 두께와 일치 */
  left: 0;
  right: 0;
  height: 4px; /* border-top의 두께와 일치 */
  background: linear-gradient(
    to right, 
    var(--secondary-color), 
    var(--accent-color), 
    var(--primary-color)
  );
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}

/* 섹션 제목 스타일링 */
.description h4, .credentials h4, .career h4 {
  font-size: 1.35rem;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  position: relative;
  font-weight: 600;
  color: var(--secondary-color);
  display: inline-block;
}

.description h4::after, .credentials h4::after, .career h4::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 100%;
  background: linear-gradient(
    to right, 
    var(--secondary-color), 
    var(--accent-color),
    var(--primary-color)
  );
  border-radius: 2px;
}

/* 섹션 호버 효과 */
.description:hover, .credentials:hover, .career:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(37, 99, 235, 0.12),
              0 4px 10px rgba(0, 0, 0, 0.05);
}

/* 텍스트 스타일링 */
.description p, .credentials p, .career p {
  line-height: 1.8;
  font-size: 1.05rem;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
}

/* 경력 리스트 스타일링 */
.career-list p {
  position: relative;
  padding-left: 1.8rem;
  margin-bottom: 0.85rem;
}

.career-list p::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--accent-color);
  border-radius: 50%;
  box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.2);
  transition: var(--transition);
}

.career-list p:hover::before {
  background-color: var(--primary-color);
  transform: scale(1.2);
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.25);
}

.career ul {
  list-style-type: none;
  padding-left: 0;
}

/* 모바일 반응형 */
@media screen and (max-width: 1024px) {
  .aboutus {
    padding: 3rem 1.5rem;
  }
  
  .profile-container {
    padding: 1.5rem 0;
  }

  .profile-content, .profile-image {
    max-width: 100%;
  }

  .profile-name {
    font-size: 2rem;
  }

  .profile-title {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 576px) {
  .aboutus {
    padding: 2rem 1rem;
  }
  
  .profile-container {
    padding: 0.5rem 0;
  }
  
  .profile-name {
    font-size: 1.5rem;
  }
  
  .profile-title {
    font-size: 1.3rem;
  }
  
  .description h4, .credentials h4, .career h4 {
    font-size: 1.2rem;
  }
  
  .description p, .credentials p, .career p {
    font-size: 0.95rem;
  }
}

@media screen and (max-width: 768px) {
  .aboutus {
    padding: 3rem 1rem;
  }
  
  .profile-container {
    flex-direction: column-reverse;
    min-height: auto;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem 0;
  }

  .profile-content,
  .profile-image {
    max-width: 100%;
  }

  .profile-image {
    margin: 2rem 0;
  }

  .profile-image img {
    width: 70%;
    height: 70%;
    margin: 0 auto;
    display: block;
  }

  .profile-name-title-container {
    width: 100%;
    padding: 1.5rem;
    margin-top: 1.5rem;
    margin-left: auto;
    margin-right: auto;
  }
  
  .profile-name {
    font-size: 1.75rem;
  }
  
  .profile-title {
    font-size: 1.5rem;
  }

  .description, .credentials, .career {
    padding: 0.5rem;
    border-radius: 10px;
    width: 100%;
    box-sizing: border-box;
  }

  .description h4, .credentials h4, .career h4 {
    font-size: 1.25rem;
    display: block;
    width: 100%;
    margin-bottom: 0.75rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .description p, .credentials p, .career p {
    font-size: 1rem;
    width: 100%;
    word-wrap: break-word;
  }
}
</style>