<template>
  <MainLayout>
    <div class="fq">
      <PageHero
        eyebrow="FAQ"
        :title="$t('faq.title')"
        :lead="locale === 'en'
          ? 'Common questions from U.S. citizens and green card holders living in Korea.'
          : '한국에 거주하는 미국 시민권자·영주권자가 가장 많이 묻는 질문을 모았습니다.'"
      />

      <section class="section">
        <div class="container fq-wrap">
          <div class="fq-list">
            <div v-for="(item, i) in items" :key="i" class="fq-item" :class="{ open: open === i }">
              <h2>
                <button
                  :id="`fq-q-${i}`"
                  type="button"
                  class="fq-q"
                  :aria-expanded="open === i"
                  :aria-controls="`fq-a-${i}`"
                  @click="open = open === i ? null : i"
                >
                  <span class="fq-num">Q{{ i + 1 }}</span>
                  <span class="fq-q-text">{{ item.question }}</span>
                  <ChevronDown :size="20" class="fq-chev" aria-hidden="true" />
                </button>
              </h2>
              <div v-show="open === i" :id="`fq-a-${i}`" class="fq-a" role="region" :aria-labelledby="`fq-q-${i}`">
                <p>{{ String(item.answer).trim() }}</p>
              </div>
            </div>
          </div>

          <aside class="fq-side">
            <div class="fq-box">
              <h3>{{ locale === 'en' ? 'Still have questions?' : '원하는 답을 찾지 못하셨나요?' }}</h3>
              <p>
                {{ locale === 'en'
                  ? 'Tell us your situation and a CPA will get back to you within one business day.'
                  : '상황을 알려 주시면 담당 CPA가 1영업일 이내에 답변드립니다.' }}
              </p>
              <router-link :to="lp('/contactus')" class="btn btn-gold">{{ $t('nav.contactUs') }}</router-link>
            </div>
            <div class="fq-box fq-box--light">
              <h3>{{ locale === 'en' ? 'Tax guides' : '주제별 가이드' }}</h3>
              <ul>
                <li v-for="g in guides" :key="g.path"><router-link :to="lp(g.path)">{{ g.title }}</router-link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  </MainLayout>
</template>

<script>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { ChevronDown } from 'lucide-vue-next';
import MainLayout from '../layouts/MainLayout.vue';
import PageHero from '../components/common/PageHero.vue';
import { guidesList } from '../data/landing';
import { useLocalePath } from '../composables/useLocalePath';

export default {
  name: 'FAQ',
  components: { MainLayout, PageHero, ChevronDown },
  setup() {
    const { locale, tm, rt } = useI18n();
    const { lp } = useLocalePath();
    const open = ref(0);
    const items = computed(() =>
      (tm('faq.items') || []).map((it) => ({ question: rt(it.question), answer: rt(it.answer) })),
    );
    const guides = computed(() => guidesList(locale.value));
    return { locale, lp, open, items, guides };
  },
};
</script>

<style scoped>
.fq { width: 100%; background: var(--bg); text-align: left; }
.section { padding: 72px 0 96px; }

.fq-wrap {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 2rem;
  align-items: start;
}

.fq-list { display: grid; gap: 0.75rem; }
.fq-item {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: border-color 0.15s ease;
}
.fq-item.open { border-color: var(--navy-100); }

.fq-item h2 { font-size: inherit; }
.fq-q {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  width: 100%;
  padding: 1.15rem 1.25rem;
  border-radius: 0;
  background: transparent;
  color: var(--ink);
  text-align: left;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
}
.fq-q:hover { background: var(--navy-50); }
.fq-num {
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: var(--navy-800);
  color: var(--gold-500);
  font-size: 0.85rem;
  font-weight: 800;
}
.fq-q-text { flex: 1; }
.fq-chev { flex: none; color: var(--muted); transition: transform 0.2s ease; }
.fq-item.open .fq-chev { transform: rotate(180deg); }

.fq-a { padding: 0 1.25rem 1.3rem calc(1.25rem + 38px + 0.9rem); }
.fq-a p { white-space: pre-line; color: var(--body); font-size: 0.95rem; line-height: 1.8; }

.fq-side { display: grid; gap: 1rem; position: sticky; top: 96px; }
.fq-box { padding: 1.5rem; border-radius: var(--radius); background: var(--navy-900); color: #fff; }
.fq-box h3 { font-size: 1.05rem; margin-bottom: 0.5rem; }
.fq-box p { font-size: 0.9rem; color: rgba(255, 255, 255, 0.75); margin-bottom: 1.1rem; line-height: 1.65; }
.fq-box .btn { width: 100%; }
.fq-box--light { background: #fff; color: var(--ink); border: 1px solid var(--line); }
.fq-box--light ul { list-style: none; display: grid; gap: 0.55rem; }
.fq-box--light a { font-size: 0.9rem; color: var(--navy-600); font-weight: 600; }

@media (max-width: 960px) {
  .fq-wrap { grid-template-columns: 1fr; }
  .fq-side { position: static; }
}
@media (max-width: 560px) {
  .fq-a { padding-left: 1.25rem; }
  .fq-num { width: 32px; height: 32px; }
}
</style>
