<template>
  <header class="page-hero">
    <picture class="page-hero-bg" aria-hidden="true">
      <source :srcset="bgAvif" type="image/avif" />
      <source :srcset="bgWebp" type="image/webp" />
      <img :src="bgJpg" alt="" decoding="async" />
    </picture>
    <div class="container">
      <span v-if="eyebrow" class="page-hero-eyebrow">{{ eyebrow }}</span>
      <h1>{{ title }}</h1>
      <p v-if="lead">{{ lead }}</p>
      <slot />
    </div>
  </header>
</template>

<script>
import bgJpg from '../../assets/sanfran1.jpg';
import bgWebp from '../../assets/optimized/sanfran1.webp';
import bgAvif from '../../assets/optimized/sanfran1.avif';

// 내부 페이지 상단 배너 — 홈 히어로와 같은 네이비 톤
export default {
  name: 'PageHero',
  props: {
    eyebrow: { type: String, default: '' },
    title: { type: String, required: true },
    lead: { type: String, default: '' },
  },
  setup() {
    return { bgJpg, bgWebp, bgAvif };
  },
};
</script>

<style scoped>
.page-hero {
  position: relative;
  width: 100%;
  padding: 150px 0 72px;
  color: #fff;
  text-align: left;
  background: var(--navy-950);
  isolation: isolate;
}
.page-hero-bg { position: absolute; inset: 0; z-index: -2; }
.page-hero-bg img { width: 100%; height: 100%; object-fit: cover; }
.page-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(100deg, rgba(6, 23, 53, 0.95) 0%, rgba(10, 35, 80, 0.88) 55%, rgba(10, 35, 80, 0.65) 100%);
}
.page-hero-eyebrow {
  display: inline-block;
  padding: 0.3rem 0.75rem;
  border: 1px solid rgba(253, 181, 21, 0.5);
  border-radius: 999px;
  color: var(--gold-500);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 1rem;
}
.page-hero h1 { font-size: clamp(1.8rem, 3.6vw, 2.6rem); font-weight: 800; margin-bottom: 0.75rem; }
.page-hero p { max-width: 640px; font-size: 1.02rem; line-height: 1.7; color: rgba(255, 255, 255, 0.82); }

@media (max-width: 560px) {
  .page-hero { padding: 112px 0 48px; }
}
</style>
