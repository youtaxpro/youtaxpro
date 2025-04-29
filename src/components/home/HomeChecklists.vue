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

export default {
  name: 'HomeChecklists',
  components: {
    UserPlus,
    ClipboardList,
    FileCheck,
    Calculator,
    FileSearch,
    Send
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
/* Title Wrapper Styles */
.title-wrapper {
  background-image: linear-gradient(
    to right, 
    rgba(30, 77, 146, 0.8),
    rgba(46, 94, 170, 0.8),
    rgba(74, 116, 185, 0.8),
    rgba(94, 138, 208, 0.8),
    rgba(117, 194, 246, 0.8)
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

/* Checklist Section Specific Styles */
.checklist-section {
  background-color: #f8f9fa;
  padding: 4rem 2rem;
  width: 100%;
}

.checklists-container {
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

.checklist-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
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