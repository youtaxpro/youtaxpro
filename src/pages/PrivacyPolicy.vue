<template>
  <MainLayout>
    <div class="policy-wrap">
      <article class="policy-card">
        <h1>{{ doc.title }}</h1>
        <p class="policy-updated">{{ doc.updated }}</p>
        <p class="policy-intro">{{ doc.intro }}</p>

        <section v-for="(sec, i) in doc.sections" :key="i" class="policy-section">
          <h2>{{ sec.h }}</h2>
          <template v-for="(block, j) in sec.body" :key="j">
            <p v-if="typeof block === 'string'">{{ block }}</p>
            <ul v-else-if="block.list">
              <li v-for="(li, k) in block.list" :key="k">{{ li }}</li>
            </ul>
            <div v-else-if="block.table" class="policy-table-scroll">
              <table>
                <thead>
                  <tr>
                    <th v-for="(hd, k) in block.table.headers" :key="k">{{ hd }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, r) in block.table.rows" :key="r">
                    <td v-for="(cell, c) in row" :key="c">{{ cell }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </template>
        </section>
      </article>
    </div>
  </MainLayout>
</template>

<script>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import MainLayout from '../layouts/MainLayout.vue';
import { privacyPolicy } from '../data/privacyPolicy';

export default {
  name: 'PrivacyPolicy',
  components: { MainLayout },
  setup() {
    const { locale } = useI18n();
    const doc = computed(() => privacyPolicy[locale.value] || privacyPolicy.ko);
    return { doc };
  },
};
</script>

<style scoped>
.policy-wrap {
  max-width: 860px;
  margin: 120px auto 4rem;
  padding: 0 1.25rem;
}

.policy-card {
  background: #fff;
  color: #3a4657;
  border-radius: 14px;
  padding: 2.25rem clamp(1.1rem, 3.5vw, 2.5rem);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  font-size: 0.82rem;
  line-height: 1.65;
  text-align: left;
}

.policy-card h1 {
  font-size: 1.35rem;
  color: #002676;
  margin-bottom: 0.4rem;
}

.policy-updated {
  color: #8a94a6;
  font-size: 0.75rem;
  margin-bottom: 1.25rem;
}

.policy-intro {
  margin-bottom: 1.5rem;
}

.policy-section {
  margin-bottom: 1.25rem;
}

.policy-section h2 {
  font-size: 0.92rem;
  color: #0047ab;
  margin-bottom: 0.45rem;
}

.policy-section p {
  margin-bottom: 0.5rem;
}

.policy-section ul {
  margin: 0 0 0.5rem 1.1rem;
}

.policy-section li {
  margin-bottom: 0.3rem;
}

.policy-table-scroll {
  overflow-x: auto;
  margin: 0.75rem 0 1rem;
}

.policy-table-scroll table {
  border-collapse: collapse;
  width: 100%;
  min-width: 480px;
  font-size: 0.78rem;
}

.policy-table-scroll th,
.policy-table-scroll td {
  border: 1px solid #e2e8f0;
  padding: 0.45rem 0.6rem;
  text-align: left;
  vertical-align: top;
}

.policy-table-scroll th {
  background: #f1f5f9;
  font-weight: 700;
}

@media (max-width: 600px) {
  .policy-wrap {
    margin-top: 90px;
  }
}
</style>
