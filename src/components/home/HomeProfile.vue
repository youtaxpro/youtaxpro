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
  background-image: linear-gradient(
    to right, 
    rgba(30, 77, 146, 0.8),  /* 진한 블루 (80% 투명도) */
    rgba(46, 94, 170, 0.8),  /* 아이덴티티 블루 (80% 투명도) */
    rgba(74, 116, 185, 0.8),  /* 중간 블루 (80% 투명도) */
    rgba(94, 138, 208, 0.8),  /* 밝은 블루 (80% 투명도) */
    rgba(117, 194, 246, 0.8)   /* 하늘색 (80% 투명도) */
  );
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

@media screen and (max-width: 768px) {
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
}
</style>