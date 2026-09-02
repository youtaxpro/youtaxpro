<template>
  <MainLayout>
    <article v-if="doc" class="lp">
      <header class="lp-header">
        <h1>{{ doc.h1 }}</h1>
        <p class="lp-lead">{{ doc.lead }}</p>
        <p v-if="doc.reviewNote" class="lp-review">{{ doc.reviewNote }}</p>
      </header>

      <section v-for="(sec, i) in doc.sections" :key="i" class="lp-section">
        <h2>{{ sec.h }}</h2>
        <template v-for="(block, j) in sec.body" :key="j">
          <p v-if="typeof block === 'string'">{{ block }}</p>

          <ul v-else-if="block.list" class="lp-list">
            <li v-for="(li, k) in block.list" :key="k">{{ li }}</li>
          </ul>

          <div v-else-if="block.table" class="lp-table-scroll">
            <table>
              <thead>
                <tr><th v-for="(h, k) in block.table.headers" :key="k">{{ h }}</th></tr>
              </thead>
              <tbody>
                <tr v-for="(row, r) in block.table.rows" :key="r">
                  <td v-for="(cell, c) in row" :key="c">{{ cell }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p
            v-else-if="block.callout"
            class="lp-callout"
            :class="`lp-callout--${block.callout.tone || 'info'}`"
          >{{ block.callout.text }}</p>
        </template>
      </section>

      <section v-if="doc.faq && doc.faq.length" class="lp-section">
        <h2>{{ locale === 'en' ? 'FAQ' : '자주 묻는 질문' }}</h2>
        <div v-for="(item, i) in doc.faq" :key="i" class="lp-faq">
          <h3>{{ item.q }}</h3>
          <p>{{ item.a }}</p>
        </div>
      </section>

      <aside class="lp-cta">
        <h2>{{ doc.cta.title }}</h2>
        <p>{{ doc.cta.text }}</p>
        <router-link :to="lp('/contactus')" class="lp-cta-btn">{{ doc.cta.button }}</router-link>
      </aside>

      <nav v-if="doc.related && doc.related.length" class="lp-related" aria-label="관련 가이드">
        <p class="lp-related-title">{{ locale === 'en' ? 'Related guides' : '관련 가이드' }}</p>
        <ul>
          <li v-for="(r, i) in doc.related" :key="i">
            <router-link :to="lp(r.path)">{{ r.label[locale] || r.label.ko }}</router-link>
          </li>
        </ul>
      </nav>

      <footer class="lp-foot">
        <p class="lp-disclaimer">{{ doc.disclaimer }}</p>
        <p class="lp-sources-title">{{ locale === 'en' ? 'Sources' : '출처' }}</p>
        <ul class="lp-sources">
          <li v-for="(s, i) in doc.sources" :key="i">
            <a :href="s.url" target="_blank" rel="noopener nofollow">{{ s.label }}</a>
          </li>
        </ul>
      </footer>
    </article>
  </MainLayout>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import MainLayout from '../layouts/MainLayout.vue';
import { landingDoc } from '../data/landing';
import { useLocalePath } from '../composables/useLocalePath';

export default {
  name: 'LandingPage',
  components: { MainLayout },
  setup() {
    const route = useRoute();
    const { locale } = useI18n();
    const { lp } = useLocalePath();
    const key = computed(() => route.meta?.seo?.landingKey);
    const doc = computed(() => landingDoc(key.value, locale.value));
    return { doc, locale, lp };
  },
};
</script>

<style scoped>
.lp {
  max-width: 820px;
  margin: 120px auto 4rem;
  padding: 0 1.25rem;
  color: #2d3748;
  font-size: 0.95rem;
  line-height: 1.75;
  text-align: left;
}

.lp-header {
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

.lp h1 {
  font-size: 1.8rem;
  color: #002676;
  line-height: 1.3;
  margin-bottom: 0.75rem;
}

.lp-lead {
  font-size: 1.02rem;
  color: #3a4657;
}

.lp-review {
  margin-top: 0.75rem;
  font-size: 0.82rem;
  color: #8a94a6;
}

.lp-section {
  margin-bottom: 2rem;
}

.lp-section h2 {
  font-size: 1.2rem;
  color: #0047ab;
  margin-bottom: 0.75rem;
}

.lp-section p {
  margin-bottom: 0.7rem;
}

.lp-list {
  margin: 0 0 0.8rem 1.2rem;
}

.lp-list li {
  margin-bottom: 0.4rem;
}

.lp-table-scroll {
  overflow-x: auto;
  margin: 0.9rem 0 1.2rem;
}

.lp-table-scroll table {
  border-collapse: collapse;
  width: 100%;
  min-width: 480px;
  font-size: 0.88rem;
}

.lp-table-scroll th,
.lp-table-scroll td {
  border: 1px solid #e2e8f0;
  padding: 0.55rem 0.7rem;
  text-align: left;
  vertical-align: top;
}

.lp-table-scroll th {
  background: #f1f5f9;
  font-weight: 700;
}

.lp-callout {
  margin: 0.9rem 0 1.2rem;
  padding: 0.85rem 1rem;
  border-radius: 8px;
  border-left: 4px solid;
  font-size: 0.9rem;
}

.lp-callout--info {
  background: #eff6ff;
  border-color: #3b82f6;
}

.lp-callout--warn {
  background: #fff7ed;
  border-color: #f59e0b;
}

.lp-faq {
  margin-bottom: 1.1rem;
}

.lp-faq h3 {
  font-size: 1rem;
  color: #1e293b;
  margin-bottom: 0.35rem;
}

.lp-cta {
  background: linear-gradient(135deg, #1e4d92, #2e5eaa);
  color: #fff;
  border-radius: 12px;
  padding: 1.8rem;
  text-align: center;
  margin: 2.5rem 0;
}

.lp-cta h2 {
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.lp-cta p {
  opacity: 0.95;
  margin-bottom: 1.2rem;
  font-size: 0.92rem;
}

.lp-cta-btn {
  display: inline-block;
  background: linear-gradient(to right, #e3780e, #FFB87e, #ffeb8c);
  color: #1a1a1a;
  font-weight: 700;
  padding: 0.75rem 1.75rem;
  border-radius: 6px;
  text-decoration: none;
}

.lp-related {
  margin: 2rem 0;
}

.lp-related-title {
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.lp-related ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.lp-related a {
  display: inline-block;
  padding: 0.4rem 0.9rem;
  border: 1px solid #cbd5e1;
  border-radius: 999px;
  color: #0047ab;
  text-decoration: none;
  font-size: 0.85rem;
}

.lp-related a:hover {
  background: #eff6ff;
}

.lp-foot {
  border-top: 1px solid #e2e8f0;
  padding-top: 1.5rem;
  font-size: 0.82rem;
  color: #64748b;
}

.lp-disclaimer {
  margin-bottom: 1rem;
}

.lp-sources-title {
  font-weight: 700;
  margin-bottom: 0.35rem;
}

.lp-sources {
  margin: 0 0 0 1.1rem;
}

.lp-sources a {
  color: #0047ab;
}

@media (max-width: 600px) {
  .lp {
    margin-top: 90px;
  }
}
</style>
