<template>
  <section id="services" class="services-section">
    <div class="services-container">
      <div class="services-header">
        <div class="title-wrapper">
          <div class="line"></div>
          <h3>{{ $t('services.title') }}</h3>
          <div class="line"></div>
        </div>
        <p class="services-description">{{ $t('services.description') }}</p>
      </div>
      
      <div class="service-cards">
        <div v-for="i in 8" :key="i" class="service-card">
          <div class="service-image">
            <img :src="getServiceImage(i)" :alt="'Service ' + i">
          </div>
          <div class="service-content">
            <p>
              {{ $t(`services.service${i}.items[0]`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import service1 from '../../assets/service1.jpg';
import service2 from '../../assets/service2.jpg';
import service3 from '../../assets/service3.jpg';
import service4 from '../../assets/service4.jpg';
import service5 from '../../assets/service5.jpg';
import service6 from '../../assets/service6.jpg';
import service7 from '../../assets/service7.jpg';
import service8 from '../../assets/service8.jpg';

export default {
  name: 'HomeServices',
  setup() {
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

    return {
      getServiceImage
    };
  }
};
</script>

<style scoped>
/* Title Wrapper Styles */
.title-wrapper {
  background-image: linear-gradient(
    to right, 
    rgba(30, 77, 146, 0.8),  /* 진한 블루 (80% 투명도) */
    rgba(46, 94, 170, 0.8),  /* 아이덴티티 블루 (80% 투명도) */
    rgba(74, 116, 185, 0.8),  /* 중간 블루 (80% 투명도) */
    rgba(94, 138, 208, 0.8),  /* 밝은 블루 (80% 투명도) */
    rgba(117, 194, 246, 0.8)   /* 하늘색 (80% 투명도) */
  );
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

/* Services Section */
.services-section {
  padding: 4rem 2rem;
  background-color: #f8f9fa;
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
}

.services-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
}

.services-description {
  color: #4a5568;
  line-height: 1.6;
  text-align: center;
  font-size: 1.2rem;
  margin-top: 1.5rem;
}

/* 서비스 카드 그리드 레이아웃 */
.service-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
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
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
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

/* 태블릿 화면 */
@media screen and (max-width: 1024px) and (min-width: 769px) {
  .service-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 모바일 화면 */
@media screen and (max-width: 768px) {
  .service-cards {
    grid-template-columns: 1fr;
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

  .service-content p {
    font-size: 1.1rem;
    padding: 0.5rem;
  }
}
</style>