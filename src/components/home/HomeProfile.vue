<template>
  <section class="section section--tint profile">
    <div class="container profile-grid">
      <figure class="profile-photo">
        <picture>
          <source :srcset="ceoAvif" type="image/avif" />
          <source :srcset="ceoWebp" type="image/webp" />
          <img :src="ceoPic" :alt="`${$t('profile.name')} — ${$t('profile.title')}`" width="420" height="520" loading="lazy" decoding="async" />
        </picture>
        <figcaption>
          <strong>{{ $t('profile.name') }}</strong>
          <span>{{ $t('profile.title') }}</span>
        </figcaption>
      </figure>

      <div class="profile-body">
        <span class="eyebrow">{{ locale === 'en' ? 'Your CPA' : '담당 CPA' }}</span>
        <h2>{{ locale === 'en' ? 'A decade of U.S. tax practice, now in Seoul' : '10년 이상의 미국 세무 실무, 서울에서 직접' }}</h2>
        <p>{{ $t('profile.sections.intro.content') }}</p>
        <p>{{ $t('profile.sections.experience.content') }}</p>
        <p>{{ $t('profile.sections.expertise.content') }}</p>

        <h3>{{ $t('profile.sections.career.title') }}</h3>
        <ul class="career">
          <li v-for="n in 3" :key="n">{{ $t(`profile.sections.career.list[${n - 1}]`) }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n';
import ceoPic from '../../assets/250220_ceo_pic.jpg';
import ceoWebp from '../../assets/optimized/250220_ceo_pic.webp';
import ceoAvif from '../../assets/optimized/250220_ceo_pic.avif';

export default {
  name: 'HomeProfile',
  setup() {
    const { locale } = useI18n();
    return { locale, ceoPic, ceoWebp, ceoAvif };
  },
};
</script>

<style scoped>
.profile-grid {
  display: grid;
  grid-template-columns: minmax(0, 380px) minmax(0, 1fr);
  gap: 4rem;
  align-items: center;
}

.profile-photo {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  background: var(--navy-100);
}
.profile-photo img { display: block; width: 100%; height: auto; aspect-ratio: 4 / 5; object-fit: cover; object-position: top; }
.profile-photo figcaption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 2.5rem 1.25rem 1.1rem;
  background: linear-gradient(to top, rgba(6, 23, 53, 0.92), rgba(6, 23, 53, 0));
  color: #fff;
}
.profile-photo strong { display: block; font-size: 1.25rem; }
.profile-photo span { font-size: 0.88rem; color: var(--gold-500); font-weight: 600; }

.profile-body h2 { font-size: clamp(1.5rem, 2.8vw, 2rem); color: var(--navy-900); margin-bottom: 1.25rem; }
.profile-body p { color: var(--body); line-height: 1.8; margin-bottom: 0.9rem; }
.profile-body h3 { font-size: 0.95rem; color: var(--navy-800); margin: 1.5rem 0 0.75rem; }

.career { list-style: none; display: grid; gap: 0.5rem; }
.career li {
  position: relative;
  padding-left: 1.1rem;
  color: var(--ink);
  font-size: 0.95rem;
  font-weight: 500;
}
.career li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.62em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold-500);
}

@media (max-width: 860px) {
  .profile-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .profile-photo { max-width: 360px; margin: 0 auto; }
}
</style>
