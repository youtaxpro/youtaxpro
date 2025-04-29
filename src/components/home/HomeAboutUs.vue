<template>
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
</template>

<script>
import taxExpertiseIcon from '../../assets/tax-expertise.jpg';

export default {
  name: 'HomeAboutUs',
  setup() {
    return {
      taxExpertiseIcon
    };
  }
};
</script>

<style scoped>
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
  background-image: linear-gradient(
    to right, 
    rgba(30, 77, 146, 0.8),  /* 진한 블루 (80% 투명도) */
    rgba(46, 94, 170, 0.8),  /* 아이덴티티 블루 (80% 투명도) */
    rgba(74, 116, 185, 0.8),  /* 중간 블루 (80% 투명도) */
    rgba(94, 138, 208, 0.8),  /* 밝은 블루 (80% 투명도) */
    rgba(117, 194, 246, 0.8)   /* 하늘색 (80% 투명도) */
  );
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

  .aboutus-hero-image {
    height: auto; /* 높이를 자동으로 조정 */
    max-height: none; /* 모바일에서는 최대 높이 제한 해제 */
    aspect-ratio: 16/9; /* 이미지 비율 유지 (필요에 따라 조정) */
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
</style>