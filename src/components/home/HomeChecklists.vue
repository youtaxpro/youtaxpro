<template>
  <section id="checklists" class="section process">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Process</span>
        <h2>{{ locale === 'en' ? 'How filing works' : '신고 절차' }}</h2>
        <p>{{ $t('checklists.description') }}</p>
      </div>

      <ol class="steps">
        <li v-for="n in 6" :key="n">
          <span class="step-no">{{ String(n).padStart(2, '0') }}</span>
          <span class="step-icon"><component :is="icons[n - 1]" :size="22" aria-hidden="true" /></span>
          <h3>{{ $t(`checklists.steps.step${n}.title`) }}</h3>
          <p>{{ $t(`checklists.steps.step${n}.description`) }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { UserPlus, ClipboardList, FileCheck, Calculator, FileSearch, Send } from 'lucide-vue-next';

export default {
  name: 'HomeChecklists',
  components: { UserPlus, ClipboardList, FileCheck, Calculator, FileSearch, Send },
  setup() {
    const { locale } = useI18n();
    const icons = ['UserPlus', 'ClipboardList', 'FileCheck', 'Calculator', 'FileSearch', 'Send'];
    return { locale, icons };
  },
};
</script>

<style scoped>
.process {
  background: var(--navy-900);
  color: #fff;
}
.process .section-head h2 { color: #fff; }
.process .section-head p { color: rgba(255, 255, 255, 0.72); }
.process .eyebrow { color: var(--gold-500); }

.steps {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.steps li {
  position: relative;
  padding: 1.6rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.04);
}

.step-no {
  position: absolute;
  top: 1.2rem;
  right: 1.4rem;
  font-size: 1.6rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.14);
  letter-spacing: 0.02em;
}

.step-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(253, 181, 21, 0.14);
  color: var(--gold-500);
  margin-bottom: 1rem;
}

.steps h3 { font-size: 1.05rem; margin-bottom: 0.45rem; }
.steps p { font-size: 0.9rem; line-height: 1.7; color: rgba(255, 255, 255, 0.72); }

@media (max-width: 960px) {
  .steps { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .steps { grid-template-columns: 1fr; }
}
</style>
