<template>
  <MainLayout>
    <article class="ab">
      <header class="ab-hero">
        <figure class="ab-photo">
          <picture>
            <source :srcset="ceoAvif" type="image/avif" />
            <source :srcset="ceoWebp" type="image/webp" />
            <img :src="ceoPic" :alt="`${doc.name} — ${doc.title}`" width="420" height="520" decoding="async" />
          </picture>
        </figure>
        <div class="ab-intro">
          <span class="ab-eyebrow">{{ doc.eyebrow }}</span>
          <h1>{{ doc.h1 }}</h1>
          <p class="ab-title">{{ doc.title }}</p>
          <p class="ab-lead">{{ doc.lead }}</p>
          <div class="ab-actions">
            <router-link :to="lp('/contactus')" class="ab-btn ab-btn--primary">{{ doc.ctaButton }}</router-link>
            <router-link :to="lp('/services')" class="ab-btn">{{ doc.servicesLink }}</router-link>
          </div>
        </div>
      </header>

      <section class="ab-section">
        <h2>{{ doc.factsTitle }}</h2>
        <dl class="ab-facts">
          <div v-for="(f, i) in doc.facts" :key="i">
            <dt>{{ f[0] }}</dt>
            <dd>{{ f[1] }}</dd>
          </div>
        </dl>
      </section>

      <section v-for="(sec, i) in doc.sections" :key="i" class="ab-section">
        <h2>{{ sec.h }}</h2>
        <p v-for="(p, j) in sec.body || []" :key="`p${j}`">{{ p }}</p>
        <ul v-if="sec.list" class="ab-list">
          <li v-for="(li, k) in sec.list" :key="k">{{ li }}</li>
        </ul>
      </section>

      <section class="ab-section">
        <h2>{{ doc.officeTitle }}</h2>
        <ul class="ab-list ab-list--plain">
          <li>{{ $t('footer.companyName') }}</li>
          <li>{{ $t('footer.address') }}</li>
          <li><a :href="CONTACT.phoneHref">{{ CONTACT.phoneDisplay }}</a> · <a :href="`mailto:${CONTACT.email}`">{{ CONTACT.email }}</a></li>
        </ul>
      </section>

      <aside class="ab-cta">
        <h2>{{ doc.ctaTitle }}</h2>
        <p>{{ doc.ctaText }}</p>
        <router-link :to="lp('/contactus')" class="ab-btn ab-btn--light">{{ doc.ctaButton }}</router-link>
        <router-link :to="lp('/guides')" class="ab-cta-link">{{ doc.guidesLink }} →</router-link>
      </aside>
    </article>
  </MainLayout>
</template>

<script>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import MainLayout from '../layouts/MainLayout.vue';
import { useLocalePath } from '../composables/useLocalePath';
import { about } from '../data/about';
import { CONTACT } from '../data/site';
import ceoPic from '../assets/250220_ceo_pic.jpg';
import ceoWebp from '../assets/optimized/250220_ceo_pic.webp';
import ceoAvif from '../assets/optimized/250220_ceo_pic.avif';

export default {
  name: 'About',
  components: { MainLayout },
  setup() {
    const { locale } = useI18n();
    const { lp } = useLocalePath();
    const doc = computed(() => about[locale.value] || about.ko);
    return { doc, lp, CONTACT, ceoPic, ceoWebp, ceoAvif };
  },
};
</script>

<style scoped>
.ab {
  max-width: 920px;
  margin: 120px auto 4rem;
  padding: 0 1.25rem;
  color: #2d3748;
  font-size: 0.96rem;
  line-height: 1.75;
  text-align: left;
}

.ab-hero {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 2.25rem;
  align-items: center;
  padding-bottom: 2rem;
  border-bottom: 2px solid #e2e8f0;
  margin-bottom: 2rem;
}

.ab-photo {
  margin: 0;
}

.ab-photo img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 14px;
  box-shadow: 0 10px 30px rgba(10, 35, 80, 0.12);
}

.ab-eyebrow {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #d99400;
  margin-bottom: 0.5rem;
}

.ab h1 {
  font-size: 1.9rem;
  color: #002676;
  line-height: 1.3;
  margin: 0 0 0.4rem;
}

.ab-title {
  font-weight: 600;
  color: #1e4d92;
  margin: 0 0 0.9rem;
}

.ab-lead {
  color: #3a4657;
  margin: 0 0 1.25rem;
}

.ab-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.ab-btn {
  display: inline-block;
  padding: 0.65rem 1.2rem;
  border-radius: 10px;
  border: 1px solid #c7d2e5;
  color: #0b2d63;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  background: #fff;
  transition: background 0.15s ease, border-color 0.15s ease;
}

.ab-btn:hover {
  border-color: #0b2d63;
}

.ab-btn--primary {
  background: #0b2d63;
  border-color: #0b2d63;
  color: #fff;
}

.ab-btn--primary:hover {
  background: #0a2350;
}

.ab-btn--light {
  background: #fdb515;
  border-color: #fdb515;
  color: #061735;
}

.ab-section {
  margin-bottom: 2.25rem;
}

.ab-section h2 {
  font-size: 1.25rem;
  color: #0b2d63;
  margin: 0 0 0.9rem;
}

.ab-section p {
  margin: 0 0 0.9rem;
}

.ab-facts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin: 0;
}

.ab-facts > div {
  background: #f7f8fb;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 0.85rem 1rem;
}

.ab-facts dt {
  font-size: 0.78rem;
  font-weight: 700;
  color: #64748b;
  margin-bottom: 0.15rem;
}

.ab-facts dd {
  margin: 0;
  color: #0f172a;
  font-weight: 600;
}

.ab-list {
  margin: 0;
  padding-left: 1.2rem;
}

.ab-list li {
  margin-bottom: 0.4rem;
}

.ab-list--plain {
  list-style: none;
  padding-left: 0;
}

.ab-list a {
  color: #0047ab;
}

.ab-cta {
  background: #0b2d63;
  color: #fff;
  border-radius: 14px;
  padding: 2rem 1.5rem;
  text-align: center;
}

.ab-cta h2 {
  color: #fff;
  font-size: 1.3rem;
  margin: 0 0 0.5rem;
}

.ab-cta p {
  color: #dbe4f3;
  margin: 0 0 1.2rem;
}

.ab-cta-link {
  display: block;
  margin-top: 1rem;
  color: #dbe4f3;
  font-size: 0.88rem;
}

@media (max-width: 720px) {
  .ab {
    margin-top: 90px;
  }

  .ab-hero {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .ab-photo {
    max-width: 220px;
    margin: 0 auto;
  }

  .ab-intro {
    text-align: center;
  }

  .ab-actions {
    justify-content: center;
  }

  .ab-facts {
    grid-template-columns: 1fr;
  }

  .ab h1 {
    font-size: 1.6rem;
  }
}
</style>
