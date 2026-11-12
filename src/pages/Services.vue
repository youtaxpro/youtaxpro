<template>
  <MainLayout>
    <div class="sv">
      <header class="sv-header">
        <h1>{{ t(copy.h1) }}</h1>
        <p class="sv-lead">{{ t(copy.lead) }}</p>
      </header>

      <section v-for="(group, i) in groups" :key="i" class="sv-group">
        <h2>{{ t(group.title) }}</h2>
        <ul class="sv-list">
          <li v-for="item in group.items" :key="item.to">
            <router-link :to="lp(item.to)" class="sv-card">
              <h3>{{ t(item.title) }}</h3>
              <p>{{ t(item.desc) }}</p>
              <span class="sv-more">{{ t(copy.more) }} →</span>
            </router-link>
          </li>
        </ul>
      </section>

      <section class="sv-group">
        <h2>{{ t(copy.stepsTitle) }}</h2>
        <ol class="sv-steps">
          <li v-for="(step, i) in steps" :key="i">
            <span class="sv-step-no">{{ i + 1 }}</span>
            <div>
              <h3>{{ t(step.title) }}</h3>
              <p>{{ t(step.text) }}</p>
            </div>
          </li>
        </ol>
        <p class="sv-fee">{{ t(copy.feeNote) }}</p>
      </section>

      <aside class="sv-cta">
        <h2>{{ t(copy.ctaTitle) }}</h2>
        <p>{{ t(copy.ctaText) }}</p>
        <router-link :to="lp('/contactus')" class="sv-cta-btn">{{ t(copy.ctaButton) }}</router-link>
      </aside>
    </div>
  </MainLayout>
</template>

<script>
import { useI18n } from 'vue-i18n';
import MainLayout from '../layouts/MainLayout.vue';
import { useLocalePath } from '../composables/useLocalePath';
import { serviceGroups, serviceSteps, servicesCopy } from '../data/services';

export default {
  name: 'Services',
  components: { MainLayout },
  setup() {
    const { locale } = useI18n();
    const { lp } = useLocalePath();
    const t = (v) => v[locale.value] || v.ko;
    return { groups: serviceGroups, steps: serviceSteps, copy: servicesCopy, t, lp };
  },
};
</script>

<style scoped>
.sv {
  max-width: 980px;
  margin: 120px auto 4rem;
  padding: 0 1.25rem;
  text-align: left;
}

.sv-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.sv-header h1 {
  font-size: 1.9rem;
  color: #002676;
  margin-bottom: 0.7rem;
}

.sv-lead {
  max-width: 680px;
  margin: 0 auto;
  color: #475569;
  font-size: 0.98rem;
  line-height: 1.7;
}

.sv-group {
  margin-bottom: 2.5rem;
}

.sv-group > h2 {
  font-size: 1.2rem;
  color: #0b2d63;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
  margin: 0 0 1rem;
}

.sv-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.sv-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.25rem;
  text-decoration: none;
  color: #2d3748;
  transition: box-shadow 0.15s ease, transform 0.15s ease, border-color 0.15s ease;
}

.sv-card:hover {
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
  transform: translateY(-3px);
  border-color: #c7d2fe;
}

.sv-card h3 {
  font-size: 1.02rem;
  color: #0f172a;
  line-height: 1.4;
  margin: 0 0 0.5rem;
}

.sv-card p {
  flex: 1;
  font-size: 0.88rem;
  line-height: 1.6;
  color: #475569;
  margin: 0 0 0.9rem;
}

.sv-more {
  font-size: 0.83rem;
  font-weight: 700;
  color: #0047ab;
}

.sv-steps {
  list-style: none;
  padding: 0;
  margin: 0 0 1.25rem;
  display: grid;
  gap: 0.75rem;
}

.sv-steps li {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  background: #f7f8fb;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1rem 1.1rem;
}

.sv-step-no {
  flex: none;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #0b2d63;
  color: #fff;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sv-steps h3 {
  font-size: 1rem;
  color: #0f172a;
  margin: 0 0 0.2rem;
}

.sv-steps p {
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.6;
  margin: 0;
}

.sv-fee {
  font-size: 0.9rem;
  color: #475569;
  background: #fff4d6;
  border-radius: 10px;
  padding: 0.85rem 1rem;
  margin: 0;
}

.sv-cta {
  background: #0b2d63;
  border-radius: 14px;
  padding: 2rem 1.5rem;
  text-align: center;
}

.sv-cta h2 {
  color: #fff;
  font-size: 1.3rem;
  margin: 0 0 0.5rem;
}

.sv-cta p {
  color: #dbe4f3;
  margin: 0 0 1.2rem;
}

.sv-cta-btn {
  display: inline-block;
  background: #fdb515;
  color: #061735;
  font-weight: 700;
  padding: 0.7rem 1.4rem;
  border-radius: 10px;
  text-decoration: none;
}

@media (max-width: 600px) {
  .sv {
    margin-top: 90px;
  }

  .sv-header h1 {
    font-size: 1.6rem;
  }
}
</style>
