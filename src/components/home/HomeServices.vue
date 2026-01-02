<template>
  <section id="services" class="services-section">
    <div class="services-container">
      <div class="services-header">
        <div class="title-wrapper">
          <div class="line"></div>
          <h3>{{ $t('services.title') }}</h3>
          <div class="line"></div>
        </div>
        </div>
      
      <div class="service-cards">
                <div v-for="i in 8" :key="i" 
             class="service-card"
             :class="{ 'service-clickable fbar-card': i === 2,
              'service-clickable streamlined-card': i === 4
              }"
             @click="handleServiceClick(i)">
          <div class="service-image">
            <div class="service-overlay"></div>
            <!-- 최적화된 이미지 로딩 방식 사용 -->
            <picture>
              <source v-if="webpSupport" :srcset="getServiceImageWebP(i)" type="image/webp">
              <source v-if="avifSupport" :srcset="getServiceImageAVIF(i)" type="image/avif">
              <img 
                :src="getServiceImage(i)"
                :alt="'Service ' + i"
                class="lazy-image"
                loading="lazy"
              >
            </picture>
          </div>
          <div class="service-content">
            <div class="service-icon">
              <div class="icon-circle">{{ i }}</div>
            </div>
            <p>{{ $t(`services.service${i}.items[0]`) }}</p>
                        <!-- FBAR 카드에만 화살표 표시 -->
            <div v-if="i === 2" class="service-arrow">
              → {{ $t('fbar.ctaButton') }}
            </div>
            <!-- service4 카드 (i===4일 때) -->
            <div v-if="i === 4" class="service-arrow">
              → {{ $t('streamlined.ctaButton') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'; // 👈 추가!
import service1 from '../../assets/service1.jpg';
import service2 from '../../assets/service2.jpg';
import service3 from '../../assets/service3.jpg';
import service4 from '../../assets/service4.jpg';
import service5 from '../../assets/service5.jpg';
import service6 from '../../assets/service6.jpg';
import service7 from '../../assets/service7.jpg';
import service8 from '../../assets/service8.jpg';
// 최적화된 이미지 로더 임포트
import { setupLazyLoading } from '../../utils/imageLoader';

// 최적화된 WebP 이미지 임포트
const webpImages = import.meta.glob('../../assets/optimized/*.webp', { eager: true });
// 최적화된 AVIF 이미지 임포트
const avifImages = import.meta.glob('../../assets/optimized/*.avif', { eager: true });

export default {
  name: 'HomeServices',
  setup() {
    // 브라우저 이미지 형식 지원 여부 확인
    const webpSupport = ref(false);
    const avifSupport = ref(false);
    const router = useRouter(); // 👈 라우터 인스턴스

    onMounted(() => {
      // WebP 지원 확인
      const webpTest = new Image();
      webpTest.onload = () => { webpSupport.value = true; };
      webpTest.onerror = () => { webpSupport.value = false; };
      webpTest.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';

      // AVIF 지원 확인
      const avifTest = new Image();
      avifTest.onload = () => { avifSupport.value = true; };
      avifTest.onerror = () => { avifSupport.value = false; };
      avifTest.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK';

      // 이미지 지연 로딩 설정
      setupLazyLoading('.lazy-image');
    });

    // 기본 이미지 매핑 함수
    const getServiceImage = (index) => {
      // 서비스별 기본 이미지 매핑
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

    // WebP 이미지 매핑 함수
    const getServiceImageWebP = (index) => {
      const webpPath = `../../assets/optimized/service${index}.webp`;
      return webpImages[webpPath]?.default || getServiceImage(index);
    };

    // AVIF 이미지 매핑 함수
    const getServiceImageAVIF = (index) => {
      const avifPath = `../../assets/optimized/service${index}.avif`;
      return avifImages[avifPath]?.default || getServiceImageWebP(index);
    };

const handleServiceClick = (index) => {
    console.log('Service 클릭!', index);
  if (index === 2) {
    router.push('/fbar');      // FBAR (기존)
  } else if (index === 4) {     // ✅ Streamlined 추가
    router.push('/streamlined');
  }
};

    return {
      getServiceImage,
      getServiceImageWebP,
      getServiceImageAVIF,
      webpSupport,
      avifSupport,
      handleServiceClick
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
  --card-bg: rgba(255, 255, 255, 0.9);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 이미지 로딩 관련 애니메이션 */
@keyframes lazyLoad {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(79, 70, 229, 0); }
  100% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); }
}

@keyframes shine {
  0% { left: -100%; }
  100% { left: 100%; }
}

/* 🔥 FBAR 2번 카드 특화 스타일 */
.fbar-card {
  border: 2px solid transparent;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(135deg, #ff6b6b, #ff8e8e) border-box;
}

.fbar-card:hover {
  transform: translateY(-15px) !important;
  box-shadow: 0 25px 50px rgba(255, 107, 107, 0.3),
              0 10px 25px rgba(0, 0, 0, 0.15) !important;
}

.fbar-card .icon-circle {
  background: linear-gradient(135deg, #ff6b6b, #ff5252) !important;
  color: white !important;
  animation: pulse 2s infinite !important;
  border-color: #ffd700 !important;
}

.fbar-card .service-overlay {
  background: linear-gradient(
    to bottom,
    rgba(255, 107, 107, 0.2),
    rgba(255, 107, 107, 0.4)
  ) !important;
}

.streamlined-card {
  border: 2px solid transparent;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(135deg, #ff6b6b, #ff8e8e) border-box;
}

.streamlined-card:hover {
  transform: translateY(-15px) !important;
  box-shadow: 0 25px 50px rgba(255, 107, 107, 0.3),
              0 10px 25px rgba(0, 0, 0, 0.15) !important;
}

.streamlined-card .icon-circle {
  background: linear-gradient(135deg, #ff6b6b, #ff5252) !important;
  color: white !important;
  animation: pulse 2s infinite !important;
  border-color: #ffd700 !important;
}

.streamlined-card .service-overlay {
  background: linear-gradient(
    to bottom,
    rgba(255, 107, 107, 0.2),
    rgba(255, 107, 107, 0.4)
  ) !important;
}

/* 클릭 가능한 카드 커서 */
.service-clickable {
  cursor: pointer !important;
}

/* FBAR 화살표 */
.service-arrow {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  background: #ff6b6b;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.4);
  z-index: 10;
}

.fbar-card:hover .service-arrow {
  opacity: 1;
  bottom: -12px;
  animation: float 2s ease-in-out infinite;
}

.streamlined-card:hover .service-arrow {
  opacity: 1;
  bottom: -12px;
  animation: float 2s ease-in-out infinite;
}

/* 클릭 피드백 */
.service-clickable:active {
  transform: translateY(-8px) scale(0.98) !important;
}

/* 모바일 반응형 유지 */
@media (max-width: 768px) {
  .service-arrow {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
}



/* Title Wrapper Styles */
.title-wrapper {
  background-image: linear-gradient(
    
  );
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(37, 99, 235, 0.2),
              0 5px 15px rgba(0, 0, 0, 0.08);
  margin: 2rem auto;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  z-index: 1;
  animation: fadeIn 0.8s ease-out;
}

.title-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: skewX(-25deg) translateX(-150%);
  z-index: 2;
  animation: shine 6s infinite;
}

.title-wrapper h3 {
  color: white;
  font-size: 2.2rem;
  font-weight: 800;
  margin: 0;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.5px;
  position: relative;
  z-index: 3;
}

.title-wrapper .line {
  height: 3px;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.3)
  );
  flex: 1;
  max-width: 150px;
  border-radius: 3px;
  position: relative;
  z-index: 3;
}

/* Services Section */
.services-section {
  padding: 5rem 2rem;
  background-color: var(--bg-light);
  background-image: 
    radial-gradient(circle at 10% 20%, rgba(37, 99, 235, 0.03) 0%, transparent 20%),
    radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.03) 0%, transparent 20%),
    radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.03) 0%, transparent 40%);
}

.services-container {
  max-width: 1400px;
  margin: 0 auto;
}

.services-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
}

.services-description {
  color: var(--text-dark);
  line-height: 1.8;
  text-align: center;
  font-size: 1.2rem;
  margin-top: 2rem;
  font-weight: 400;
  animation: fadeIn 1s ease-out 0.3s both;
}

/* 서비스 카드 그리드 레이아웃 */
.service-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.service-card {
  background: var(--card-bg);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06), 
              0 2px 5px rgba(0, 0, 0, 0.04),
              0 1px 30px rgba(37, 99, 235, 0.05);
  transition: var(--transition);
  position: relative;
  z-index: 1;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transform: translateY(30px);
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
  animation-delay: calc(0.1s * var(--i, 1));
}

.service-card:nth-child(1) { --i: 1; }
.service-card:nth-child(2) { --i: 2; }
.service-card:nth-child(3) { --i: 3; }
.service-card:nth-child(4) { --i: 4; }
.service-card:nth-child(5) { --i: 5; }
.service-card:nth-child(6) { --i: 6; }
.service-card:nth-child(7) { --i: 7; }
.service-card:nth-child(8) { --i: 8; }

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(37, 99, 235, 0.12),
              0 8px 20px rgba(0, 0, 0, 0.08);
}

.service-image {
  width: 100%;
  height: 220px;
  overflow: hidden;
  position: relative;
}

.service-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(79, 70, 229, 0.1),
    rgba(37, 99, 235, 0.3)
  );
  z-index: 2;
  transition: var(--transition);
}

.service-card:hover .service-overlay {
  background: linear-gradient(
    to bottom,
    rgba(79, 70, 229, 0.2),
    rgba(37, 99, 235, 0.5)
  );
}

.service-image img, .service-image picture {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease, opacity 0.3s ease;
  filter: brightness(0.95);
}

/* 지연 로딩 이미지 효과 */
.lazy-image {
  opacity: 0;
}

.lazy-image.loaded {
  opacity: 1;
  animation: lazyLoad 0.3s ease forwards;
}

.service-card:hover .service-image img {
  transform: scale(1.08);
  filter: brightness(1.05);
}

.service-content {
  padding: 1.8rem;
  background: white;
  text-align: center;
  position: relative;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  height: 120px; /* Fixed height for all cards */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.service-icon {
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}

.icon-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(
    135deg, 
    var(--secondary-color),
    var(--primary-color)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFD700;
  font-weight: 700;
  font-size: 1.25rem;
  box-shadow: 0 5px 15px rgba(37, 99, 235, 0.3);
  transition: var(--transition);
  border: 3px solid #FFD700;
}

.service-card:hover .icon-circle {
  transform: scale(1.1);
  animation: pulse 2s infinite;
}

.service-content p {
  color: var(--text-dark);
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0;
  line-height: 1.6;
  margin-top: 1rem;
  padding: 0 0.5rem;
  transition: var(--transition);
  width: 100%;
}

.service-card:hover .service-content p {
  transform: scale(1.02);
}

/* 태블릿 화면 */
@media screen and (max-width: 1024px) {
  .service-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .title-wrapper {
    padding: 2rem;
    gap: 1.5rem;
  }
  
  .title-wrapper h3 {
    font-size: 2rem;
  }
}

/* 모바일 화면 */
@media screen and (max-width: 768px) {
  .services-section {
    padding: 3rem 1.5rem;
  }
  
  .service-cards {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  
  .title-wrapper {
    padding: 1.5rem;
    gap: 1rem;
  }
  
  .title-wrapper h3 {
    font-size: 1.8rem;
  }
  
  .title-wrapper .line {
    max-width: 80px;
  }
  
  .service-image {
    height: 200px;
  }
  
  .service-content {
    padding: 1.5rem 1.2rem;
    height: 100px; /* Adjusted height for mobile */
  }
  
  .service-content p {
    font-size: 1rem;
  }
  
  .services-description {
    font-size: 1.1rem;
    margin-top: 1.5rem;
  }
}
</style>