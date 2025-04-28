<template>
  <MainLayout withBgImage>
    <!-- FAQ Content -->
    <div class="faq-content">
      <h2>{{ $t('faq.title') }}</h2>
      <div class="faq-list">
        <div v-for="(item, index) in $t('faq.items').slice(0, 8)" 
     :key="index" 
     class="faq-item">
          <div class="faq-question"
               @click="toggleItem(index)"
               :class="{ active: openStates[index] }">
            <h3>{{ $t(`faq.items[${index}].question`) }}</h3>
            <span class="toggle-icon">{{ openStates[index] ? '−' : '+' }}</span>
          </div>
          <transition name="fade">
            <div v-show="openStates[index]" class="faq-answer">
              <p>{{ $t(`faq.items[${index}].answer`) }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import { ref, onMounted } from 'vue';
import MainLayout from '../layouts/MainLayout.vue';

export default {
  name: 'FAQ',
  components: {
    MainLayout
  },
  setup() {
    const openStates = ref([]);

    const toggleItem = (index) => {
      openStates.value[index] = !openStates.value[index];
    };

    onMounted(() => {
      // 초기화: 모든 아이템을 닫힌 상태로 설정
      const faqItems = document.querySelectorAll('.faq-item');
      openStates.value = Array(faqItems.length).fill(false);
    });

    return {
      openStates,
      toggleItem,
    };
  }
};
</script>

<style scoped>
/* FAQ Content Styles */
.faq-content {
  width: 95%;
  padding: 1rem;
  margin-top: 120px;
  animation: fadeIn 0.5s ease-out;
}

h2 {
  text-align: center;
  color: white;
  margin-bottom: 4rem;
  font-size: 2.5rem;
  font-weight: bold;
  position: relative;
  padding-bottom: 1rem;
}

h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, #ffec9a, #ffc857);
  border-radius: 2px;
}

.faq-list {
  margin-top: 2rem;
  text-align: left;
}

.faq-item {
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out backwards;
}

.faq-question {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.faq-question:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.faq-question h3 {
  margin: 0;
  font-size: 1.2rem;
  color: white;
}

.toggle-icon {
  font-size: 1.5rem;
  color: white;
}

.faq-answer {
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, 0.7);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.faq-answer p {
  margin: 0;
  line-height: 1.8;
  white-space: pre-line;
  text-align: left;
  color: white;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
  max-height: 1000px;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  max-height: 0;
}

/* FAQ Item Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.faq-item:nth-child(1) { animation-delay: 0.4s; }
.faq-item:nth-child(2) { animation-delay: 0.5s; }
.faq-item:nth-child(3) { animation-delay: 0.6s; }
.faq-item:nth-child(4) { animation-delay: 0.7s; }
.faq-item:nth-child(5) { animation-delay: 0.8s; }
.faq-item:nth-child(6) { animation-delay: 0.9s; }
.faq-item:nth-child(7) { animation-delay: 1.0s; }
.faq-item:nth-child(8) { animation-delay: 1.1s; }

/* 반응형 디자인 */
@media screen and (max-width: 768px) {
  .faq-content {
    width: 95%;
    padding: 1rem;
    margin-top: 80px;
  }

  .faq-question,
  .faq-answer {
    padding: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .faq-question h3 {
    font-size: 1.1rem;
  }
}

@media screen and (max-width: 480px) {
  .faq-content {
    width: 95%;
    padding: 1rem;
    margin-top: 120px;
  }

  .faq-question,
  .faq-answer {
    padding: 0.8rem;
  }
}
</style>
