<template>
  <header class="hero-section">
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">{{ $t('hero.title') }}</h1>
        <p class="hero-subtitle">{{ $t('hero.subtitle') }}</p>
      </div>
      
      <div class="consultation-form">
        <div class="form-wrapper">
          <h2 class="form-title">Tax Consultation</h2>
          <p class="form-subtitle">Our Tax Experts will contact you!</p>
          
          <form @submit.prevent="submitForm">
            <!-- Web3Forms Access Key -->
            <input type="hidden" name="access_key" value="10f32bb4-f34d-4088-af76-7ffd7a7557d0">
            
            <div class="form-group">
              <input 
                v-model="formData.fullName"
                type="text"
                name="Full Name"
                placeholder="Full Name"
                required
                class="form-input"
              />
            </div>

            <div class="form-group">
              <input 
                v-model="formData.email"
                type="email"
                name="Email"
                placeholder="Email"
                required
                class="form-input"
              />
            </div>

            <div class="form-group">
              <input 
                v-model="formData.phone"
                type="tel"
                name="Phone"
                placeholder="Phone number"
                required
                class="form-input"
              />
            </div>

            <div class="form-group">
              <select 
                v-model="formData.statusType"
                name="Status Type"
                class="form-input status-select"
                required
              >
                <option value="" disabled selected>Status Type</option>
                <option value="US Citizen / Green Card Holder">US Citizen / Green Card Holder</option>
                <option value="Foreign National Individual">Foreign National Individual</option>
                <option value="Expatriate Individual">Expatriate Individual</option>
              </select>
            </div>

            <div class="form-group">
              <textarea 
                v-model="formData.details"
                name="Message"
                placeholder="Kindly detail your inquiry so we can assist you appropriately 한국어문의가능"
                class="form-input form-textarea"
                rows="4"
              ></textarea>
            </div>

            <button type="submit" class="submit-btn">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'HomeHero',
  setup() {
    // 상담 폼 데이터
    const formData = ref({
      fullName: '',
      email: '',
      phone: '',
      statusType: '',
      details: ''
    });

    // 폼 제출 처리
    const submitForm = async () => {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: '10f32bb4-f34d-4088-af76-7ffd7a7557d0',
            full_name: formData.value.fullName,
            email: formData.value.email,
            phone: formData.value.phone,
            status_type: formData.value.statusType,
            message: formData.value.details
          })
        });

        const result = await response.json();
        
        if (result.success) {
          alert('Thank you! We will contact you soon.');
          resetForm();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error. Please try again.');
      }
    };

    // 폼 초기화
    const resetForm = () => {
      formData.value = {
        fullName: '',
        email: '',
        phone: '',
        statusType: '',
        details: ''
      };
    };

    return {
      formData,
      submitForm
    };
  }
};
</script>

<style scoped>
/* Hero Section */
.hero-section {
  width: 100%;
  padding: 8rem 2rem;
  background-image: url('../../assets/sanfran1.jpg');
  background-size: cover;
  background-position: center;
  min-height: 900px;
  display: flex;
  align-items: center;
  justify-content: left;
  position: relative; /* 추가 */
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2); /* 검은색 오버레이, 투명도 50% */
  z-index: 1; /* 배경 이미지 위에 오버레이가 위치하도록 함 */
}

/* hero-section 내부 요소들이 오버레이 위에 보이도록 함 */
.hero-section > * {
  position: relative;
  z-index: 2;
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative; /* 추가 */
}

.hero-content {
  flex: 1;
  text-align: left;
  color: white;
  max-width: 50%; /* 추가 */
}

.hero-title {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-weight: 1000;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 2.5rem;
  opacity: 0.9;
}

.consultation-form {
  flex: 0 0 450px;
  z-index: 99;
  position: absolute; /* 추가 */
  right: 2rem; /* 추가 */
  top: 50%; /* 추가 */
  transform: translateY(-50%); /* 추가 */
}

.form-wrapper {
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
  color: white;
}

.form-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
  color: white;
}

.form-subtitle {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: white;
}

.form-group {
  margin-bottom: 1rem;
}

/* 폼 입력 요소 스타일 수정 */
.form-input {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  background: white;
  color: #333; /* 텍스트 색상 명시적 설정 */
  -webkit-text-fill-color: #333; /* 웹킷 기반 브라우저용 */
  opacity: 1; /* 투명도 설정 */
}

/* 플레이스홀더 스타일 명시적 설정 */
.form-input::placeholder {
  color: #666;
  opacity: 1; /* 플레이스홀더 투명도 설정 */
}

/* 포커스 상태 스타일 */
.form-input:focus {
  outline: 2px solid #4169E1; /* 포커스 시 테두리 추가 */
  color: #333;
  -webkit-text-fill-color: #333;
  background-color: white;
}

/* 특히 Samsung Internet 브라우저를 위한 수정 */
@supports (-webkit-touch-callout: none) {
  .form-input {
    color-scheme: light; /* 라이트 모드 강제 적용 */
    color: #333 !important;
    -webkit-text-fill-color: #333 !important;
    background-color: white !important;
  }
}

/* 입력 시 자동완성 스타일 */
.form-input:-webkit-autofill,
.form-input:-webkit-autofill:hover, 
.form-input:-webkit-autofill:focus {
  -webkit-text-fill-color: #333;
  -webkit-box-shadow: 0 0 0px 1000px white inset;
  transition: background-color 5000s ease-in-out 0s;
}

/* 드롭다운 셀렉트 박스 화살표 스타일 유지 */
.status-select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 0.65rem auto;
  padding-right: 2.5rem;
  color: #333;
  -webkit-text-fill-color: #333;
  background-color: white;
}

/* 폼 전체 스타일 조정 */
.consultation-form {
  color-scheme: light;
}

/* 텍스트 영역 스타일 */
.form-textarea {
  color: #333;
  -webkit-text-fill-color: #333;
  background-color: white;
  resize: vertical;
  min-height: 100px;
}

.form-input::placeholder {
  color: #666;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(to right, #e3780e, #FFb87e, #ffeb8c);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.submit-btn:hover {
  background: #FDB515;
}

@media screen and (max-width: 768px) {
  .hero-container {
    flex-direction: column;
    align-items: center;
  }

  .hero-content {
    max-width: 100%;
    text-align: center;
    margin-bottom: 2rem;
    display: none;
  }

  .consultation-form {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    width: 100%;
    max-width: 450px;
    margin: 2rem auto 0;
  }

  .hero-title {
    font-size: 3.5rem;
  }

  .hero-subtitle {
    font-size: 2.5rem;
  }
}

@media screen and (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }
}
</style>