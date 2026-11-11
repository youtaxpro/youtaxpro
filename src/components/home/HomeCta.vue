<template>
  <section class="cta">
    <div class="container cta-inner">
      <div>
        <h2>{{ $t('aboutus.cta.title') }}</h2>
        <p>
          {{ locale === 'en'
            ? 'Tell us your situation and we will explain what needs to be filed, by when, and what it costs.'
            : '상황을 알려 주시면 무엇을, 언제까지, 얼마의 비용으로 신고해야 하는지 안내해 드립니다.' }}
        </p>
      </div>
      <div class="cta-actions">
        <router-link :to="lp('/contactus')" class="btn btn-navy">{{ $t('aboutus.cta.button') }}</router-link>
        <a :href="CONTACT.phoneHref" class="btn btn-line"><Phone :size="18" aria-hidden="true" />{{ CONTACT.phoneDisplay }}</a>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { Phone } from 'lucide-vue-next';
import { useLocalePath } from '../../composables/useLocalePath';
import { CONTACT } from '../../data/site';

export default {
  name: 'HomeCta',
  components: { Phone },
  setup() {
    const { locale } = useI18n();
    const { lp } = useLocalePath();
    return { locale, lp, CONTACT };
  },
};
</script>

<style scoped>
.cta { background: var(--gold-500); padding: 56px 0; }
.cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap; }
.cta h2 { font-size: clamp(1.4rem, 2.6vw, 1.9rem); color: var(--navy-950); margin-bottom: 0.4rem; }
.cta p { color: rgba(6, 23, 53, 0.8); max-width: 560px; }
.cta-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; }
.cta .btn-line { border-color: transparent; }
</style>
