<template>
  <section id="checklists" class="checklist-section">
    <div class="checklists-container">
      <!-- 타이틀 영역 -->
      <div class="checklists-header">
        <div class="title-wrapper">
          <div class="line"></div>
          <h3>{{ $t('checklists.title') }}</h3>
          <div class="line"></div>
        </div>
        <p class="checklist-description">{{ $t('checklists.description') }}</p>
      </div>
      
      <!-- 체크리스트 그리드 -->
      <div class="checklist-grid">
        <div v-for="n in 6" :key="n" class="checklist-item">
          <!-- 숫자 배지 -->
          <h5 class="checklist-badge">
            {{ n }}
          </h5>
          
          <!-- 아이콘 추가 -->
          <div class="checklist-icon">
            <component :is="getProcessIcon(n)" />
          </div>
          
          <!-- 내용 -->
          <div class="checklist-content">
            <h4>
              {{ $t(`checklists.steps.step${n}.title`) }}
            </h4>
            <p>
              {{ $t(`checklists.steps.step${n}.description`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { 
  UserPlus,
  ClipboardList,
  FileCheck,
  Calculator,
  FileSearch,
  Send
} from 'lucide-vue-next';
import sanfranvilla from '../../assets/sanfranvilla.png';

export default {
  name: 'HomeChecklists',
  components: {
    UserPlus,
    ClipboardList,
    FileCheck,
    Calculator,
    FileSearch,
    Send,
    sanfranvilla
  },
  setup() {
    // 아이콘 매핑 함수
    const getProcessIcon = (step) => {
      const icons = {
        1: UserPlus,
        2: ClipboardList,
        3: FileCheck,
        4: Calculator,
        5: FileSearch,
        6: Send
      };
      return icons[step];
    };

    return {
      getProcessIcon
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

.checklist-section {
  position: relative !important;
  background-image: url('../../assets/sanfranvilla.png') !important;
  background-size: cover !important;
  background-position: center bottom !important;
  background-attachment: fixed !important;
  min-height: 100vh !important;
  padding: 4rem 2rem !important;  /* 내부 패딩만 유지 */
  overflow: hidden !important;
}

/* 화이트 오버레이 */
.checklist-section::before {
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

/* Checklist Section Specific Styles */
.checklist-section {
  background-color: #f8f9fa;
  padding: 4rem 2rem;
  width: 100%;
}

.checklists-container {
  position: relative !important;
  z-index: 3 !important;
  max-width: 1200px;
  margin: 0 auto;
}

.checklists-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
}

.checklist-description {
  color: #4a5568;
  line-height: 1.6;
  text-align: center;
  font-size: 1.2rem;
  margin-top: 1.5rem;
}

/* 그리드 레이아웃 */
.checklist-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.checklist-item {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* 숫자 배지 스타일 */
.checklist-badge {
  position: absolute;
  top: -1.25rem;
  left: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  background-image: linear-gradient(
    to right, 
    #00008B,
    #0047AB,
    #6495ED
  );
  color: white;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  margin: 0;
}

/* 아이콘 스타일 */
.checklist-icon {
  margin: 1.5rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
}

.checklist-icon svg {
  width: 3rem;
  height: 3rem;
  filter: brightness(0) saturate(100%) invert(32%) sepia(72%) saturate(1217%) hue-rotate(195deg) brightness(91%) contrast(101%); /* 파란색 필터 */
}

/* 텍스트 스타일 */
.checklist-content {
  padding-top: 0.5rem;
}

.checklist-content h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
  text-align: center;
}

.checklist-content p {
  color: #4a5568;
  line-height: 1.6;
  text-align: center;
  font-size: 1rem;
}

/* 반응형 디자인 */
@media (max-width: 1024px) {
  .checklist-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .checklist-grid {
    grid-template-columns: 1fr;
  }

  .checklist-item {
    padding: 1.5rem;
  }

  .title-wrapper {
    gap: 1rem;
  }
  
  .title-wrapper .line {
    max-width: 100px;
  }
  
  .title-wrapper h3 {
    font-size: 1.75rem;
  }
}
</style>