<template>
  <section id="checklists" class="section process">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Process</span>
        <h2>{{ locale === 'en' ? 'How filing works' : '신고 절차' }}</h2>
        <p>{{ $t('checklists.description') }}</p>
      </div>

      <ol ref="list" :class="['steps', { 'is-ready': ready, 'is-in': revealed }]">
        <li v-for="n in 6" :key="n" class="step" :style="{ '--i': n - 1 }">
          <!-- 번호 노드 + 다음 단계로 이어지는 선 -->
          <div class="step-rail" aria-hidden="true">
            <span class="step-node">{{ String(n).padStart(2, '0') }}</span>
          </div>
          <div class="step-card">
            <span class="step-head">
              <span class="step-icon"><component :is="icons[n - 1]" :size="19" aria-hidden="true" /></span>
              <span class="step-label">STEP {{ String(n).padStart(2, '0') }} / 06</span>
            </span>
            <span class="step-watermark" aria-hidden="true">{{ String(n).padStart(2, '0') }}</span>
            <h3>{{ $t(`checklists.steps.step${n}.title`) }}</h3>
            <p>{{ $t(`checklists.steps.step${n}.description`) }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
import { UserPlus, ClipboardList, FileCheck, Calculator, FileSearch, Send } from 'lucide-vue-next';

export default {
  name: 'HomeChecklists',
  components: { UserPlus, ClipboardList, FileCheck, Calculator, FileSearch, Send },
  setup() {
    const { locale } = useI18n();
    const icons = ['UserPlus', 'ClipboardList', 'FileCheck', 'Calculator', 'FileSearch', 'Send'];

    // 화면에 들어오면 카드가 차례로 떠오르는 효과. JS가 없거나 모션 최소화 설정이면 그냥 보임.
    const list = ref(null);
    const ready = ref(false);
    const revealed = ref(false);
    let io;
    onMounted(() => {
      const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce || !('IntersectionObserver' in window) || !list.value) return;
      ready.value = true;
      io = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          revealed.value = true;
          io.disconnect();
        }
      }, { threshold: 0.15 });
      io.observe(list.value);
    });
    onBeforeUnmount(() => io && io.disconnect());

    return { locale, icons, list, ready, revealed };
  },
};
</script>

<style scoped>
/* 남색 바탕에 은은한 빛 번짐 */
.process {
  background:
    radial-gradient(900px 480px at 88% -12%, rgba(30, 77, 146, 0.55), transparent 62%),
    radial-gradient(700px 420px at -5% 110%, rgba(253, 181, 21, 0.09), transparent 60%),
    var(--navy-950);
  color: #fff;
}
.process .section-head h2 { color: #fff; }
.process .section-head p { color: rgba(255, 255, 255, 0.7); }
.process .eyebrow { color: var(--gold-500); }

.steps {
  --gap: 1.25rem;
  --node: 44px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: var(--gap);
  row-gap: 2.5rem;
}

.step { display: flex; flex-direction: column; }

/* 타임라인: 번호 원과 다음 카드로 이어지는 금색 선 */
.step-rail {
  position: relative;
  height: var(--node);
  margin-bottom: 1rem;
}
/* 옅은 기본 선 위에 금색 선이 일부 채워져 있고, 마우스를 올리면 끝까지 채워짐 */
.step-rail::before,
.step-rail::after {
  content: '';
  position: absolute;
  top: 50%;
  left: calc(var(--node) + 10px);
  right: calc(-1 * var(--gap) + 10px);
  height: 1px;
}
.step-rail::before { background: rgba(255, 255, 255, 0.1); }
.step-rail::after {
  background: linear-gradient(90deg, var(--gold-500), rgba(253, 181, 21, 0.35));
  transform: scaleX(0.35);
  transform-origin: left;
  transition: transform 0.5s ease;
}
.step:hover .step-rail::after { transform: scaleX(1); }
.step:nth-child(3n) .step-rail::before,
.step:nth-child(3n) .step-rail::after { display: none; }

.step-node {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--node);
  height: var(--node);
  border-radius: 50%;
  border: 1px solid rgba(253, 181, 21, 0.6);
  background: var(--navy-950);
  color: var(--gold-500);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  font-variant-numeric: tabular-nums;
  box-shadow: 0 0 0 6px rgba(253, 181, 21, 0.07);
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
}

.step-card {
  position: relative;
  flex: 1;
  padding: 1.6rem 1.5rem 1.7rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.02));
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  overflow: hidden;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}
/* 카드 위쪽 가장자리의 얇은 빛 */
.step-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 1.5rem;
  right: 1.5rem;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent);
}

.step-head {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.15rem;
}
.step-icon {
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 11px;
  background: rgba(253, 181, 21, 0.12);
  box-shadow: inset 0 0 0 1px rgba(253, 181, 21, 0.18);
  color: var(--gold-500);
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
}
.step-label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: rgba(255, 255, 255, 0.45);
  font-variant-numeric: tabular-nums;
}

/* 카드 오른쪽 위의 큰 외곽선 숫자 */
.step-watermark {
  position: absolute;
  top: 0.7rem;
  right: 1.1rem;
  font-size: 3.6rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.04em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.07);
  pointer-events: none;
  user-select: none;
  transition: -webkit-text-stroke-color 0.3s ease;
}
.step:hover .step-watermark { -webkit-text-stroke-color: rgba(253, 181, 21, 0.22); }
.step-card h3,
.step-card p { position: relative; }
.step-card h3 {
  font-size: 1.08rem;
  font-weight: 700;
  line-height: 1.4;
  color: #fff;
  margin-bottom: 0.55rem;
  word-break: keep-all;
}
.step-card p {
  font-size: 0.89rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.72);
  word-break: keep-all;
}

.step:hover .step-card {
  transform: translateY(-4px);
  border-color: rgba(253, 181, 21, 0.38);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.035));
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.28);
}
.step:hover .step-icon { background: var(--gold-500); color: var(--navy-950); box-shadow: 0 8px 20px rgba(253, 181, 21, 0.25); }

/* 스크롤로 들어올 때 차례로 떠오름 */
.steps.is-ready .step {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  transition-delay: calc(var(--i) * 90ms);
}
.steps.is-ready.is-in .step { opacity: 1; transform: none; }
.step:hover .step-node {
  background: var(--gold-500);
  color: var(--navy-950);
  box-shadow: 0 0 0 6px rgba(253, 181, 21, 0.16);
}

/* 태블릿: 2열, 줄마다 끝 카드는 선 없음 */
@media (max-width: 960px) {
  .steps { grid-template-columns: repeat(2, 1fr); }
  .step:nth-child(3n) .step-rail::before,
  .step:nth-child(3n) .step-rail::after { display: block; }
  .step:nth-child(2n) .step-rail::before,
  .step:nth-child(2n) .step-rail::after { display: none; }
}

/* 모바일: 왼쪽에 세로 타임라인 */
@media (max-width: 640px) {
  .steps { grid-template-columns: 1fr; row-gap: 1rem; --node: 38px; }
  .step { display: grid; grid-template-columns: var(--node) 1fr; column-gap: 0.9rem; }
  .step-rail { height: auto; margin-bottom: 0; }
  .step-rail::before,
  .step:nth-child(2n) .step-rail::before,
  .step:nth-child(3n) .step-rail::before { display: none; }
  .step-rail::after,
  .step:nth-child(2n) .step-rail::after,
  .step:nth-child(3n) .step-rail::after {
    display: block;
    top: calc(var(--node) + 8px);
    bottom: calc(-1rem + 8px);
    left: 50%;
    right: auto;
    width: 1px;
    height: auto;
    transform: none;
    background: linear-gradient(180deg, rgba(253, 181, 21, 0.55), rgba(253, 181, 21, 0.08));
  }
  .step:last-child .step-rail::after { display: none; }
  .step-watermark { font-size: 3rem; }
  .step-node { font-size: 0.76rem; }
  .step-card { padding: 1.3rem 1.2rem 1.4rem; }
  .step-icon { width: 34px; height: 34px; }
  .step-head { margin-bottom: 0.85rem; }
}

@media (prefers-reduced-motion: reduce) {
  .step-card, .step-icon, .step-node, .step-rail::after { transition: none; }
  .step:hover .step-card { transform: none; }
}
</style>
