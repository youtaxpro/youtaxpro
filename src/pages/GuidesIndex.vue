<template>
  <MainLayout>
    <div class="gx-page">
    <!-- 맨해튼 스카이라인 배경 + 밝은 오버레이 -->
    <picture class="gx-bg" aria-hidden="true">
      <source :srcset="skylineAvif" type="image/avif" />
      <source :srcset="skylineWebp" type="image/webp" />
      <img :src="skylineJpg" alt="" decoding="async" />
    </picture>
    <div class="gx">
      <header class="gx-header">
        <h1>{{ locale === 'en' ? 'U.S. Tax Guides' : '미국세금 가이드' }}</h1>
        <p class="gx-lead">
          {{ locale === 'en'
            ? 'Plain-language guides for U.S. citizens and green card holders living in Korea.'
            : '한국 거주 미국 시민권자·영주권자를 위한 주제별 미국세금 안내입니다.' }}
        </p>
      </header>

      <ul class="gx-list">
        <li v-for="g in guides" :key="g.path" class="gx-card">
          <router-link :to="lp(g.path)" class="gx-card-link">
            <span v-if="g.name" class="gx-badge">{{ g.name }}</span>
            <h2>{{ g.title }}</h2>
            <p>{{ g.summary }}</p>
            <span class="gx-more">{{ locale === 'en' ? 'Read the guide →' : '가이드 보기 →' }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    </div>
  </MainLayout>
</template>

<script>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import MainLayout from '../layouts/MainLayout.vue';
import { guidesList } from '../data/landing';
import { useLocalePath } from '../composables/useLocalePath';
import skylineJpg from '../assets/nyc_skyline.jpg';
import skylineWebp from '../assets/optimized/nyc_skyline.webp';
import skylineAvif from '../assets/optimized/nyc_skyline.avif';

export default {
  name: 'GuidesIndex',
  components: { MainLayout },
  setup() {
    const { locale } = useI18n();
    const { lp } = useLocalePath();
    const guides = computed(() => guidesList(locale.value));
    return { guides, locale, lp, skylineJpg, skylineWebp, skylineAvif };
  },
};
</script>

<style scoped>
.gx-page {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  width: 100%;
  align-self: stretch;
  padding: 120px 0 4rem;
  background: #f7f8fb;
}
.gx-bg { position: absolute; inset: 0; z-index: -2; }
/* 하늘이 위쪽, 스카이라인이 페이지 아래쪽에 오도록 */
.gx-bg img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: 30% bottom; }
.gx-page::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(180deg, rgba(247, 248, 251, 0.62) 0%, rgba(247, 248, 251, 0.74) 55%, rgba(247, 248, 251, 0.6) 100%);
}

.gx {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.25rem;
}

.gx-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.gx-header h1 {
  font-size: 1.9rem;
  color: #002676;
  margin-bottom: 0.6rem;
}

.gx-lead {
  color: #475569;
  font-size: 0.98rem;
}

.gx-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
}

.gx-card-link {
  display: block;
  height: 100%;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.25rem;
  text-decoration: none;
  color: #2d3748;
  transition: box-shadow 0.15s ease, transform 0.15s ease, border-color 0.15s ease;
}

.gx-card-link:hover {
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
  transform: translateY(-3px);
  border-color: #c7d2fe;
}

.gx-badge {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #0047ab;
  background: #eff6ff;
  border-radius: 999px;
  padding: 0.15rem 0.6rem;
  margin-bottom: 0.6rem;
}

.gx-card-link h2 {
  font-size: 1.02rem;
  color: #0f172a;
  margin: 0 0 0.5rem;
  line-height: 1.4;
}

.gx-card-link p {
  font-size: 0.88rem;
  line-height: 1.6;
  color: #475569;
  margin: 0 0 0.9rem;
}

.gx-more {
  font-size: 0.83rem;
  font-weight: 700;
  color: #0047ab;
}

@media (max-width: 600px) {
  .gx-page {
    padding-top: 90px;
  }
}
</style>
