<template>
  <section id="guides" class="section guides">
    <!-- 뉴욕 스카이라인 배경: 섹션 전체 -->
    <div class="guides-bg" aria-hidden="true">
      <picture>
        <source :srcset="skylineAvif" type="image/avif" />
        <source :srcset="skylineWebp" type="image/webp" />
        <img :src="skylineJpg" alt="" loading="lazy" decoding="async" />
      </picture>
    </div>
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Guides</span>
        <h2>{{ locale === 'en' ? 'U.S. tax guides for Americans in Korea' : '주제별 미국세금 가이드' }}</h2>
        <p>
          {{ locale === 'en'
            ? 'Updated for the 2027 inflation adjustments (Rev. Proc. 2026-35).'
            : '2027년 인플레이션 조정(Rev. Proc. 2026-35)까지 반영해 정리했습니다.' }}
        </p>
      </div>

      <ul class="guide-grid">
        <li v-for="g in guides" :key="g.path">
          <router-link :to="lp(g.path)" class="guide-card">
            <span v-if="g.name" class="guide-tag">{{ g.name }}</span>
            <h3>{{ g.title }}</h3>
            <p>{{ g.summary }}</p>
          </router-link>
        </li>
      </ul>

      <div class="guide-all">
        <router-link :to="lp('/guides')" class="btn btn-line">
          {{ locale === 'en' ? 'All guides' : '가이드 전체 보기' }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { guidesList } from '../../data/landing';
import { useLocalePath } from '../../composables/useLocalePath';
import skylineJpg from '../../assets/tax-expertise.jpg';
import skylineWebp from '../../assets/optimized/tax-expertise.webp';
import skylineAvif from '../../assets/optimized/tax-expertise.avif';

export default {
  name: 'HomeGuides',
  setup() {
    const { locale } = useI18n();
    const { lp } = useLocalePath();
    const guides = computed(() => guidesList(locale.value));
    return { guides, locale, lp, skylineJpg, skylineWebp, skylineAvif };
  },
};
</script>

<style scoped>
/* 뉴욕 스카이라인 배경 + 밝은 오버레이 (전문가 소개 섹션의 국기 배경과 같은 방식) */
.guides { position: relative; isolation: isolate; background: var(--bg); overflow: hidden; }
.guides-bg { position: absolute; inset: 0; z-index: -2; }
.guides-bg img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: 22% center; } /* 자유의 여신상이 잘리지 않게 왼쪽 기준 */
.guides::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(180deg, rgba(247, 248, 251, 0.5) 0%, rgba(247, 248, 251, 0.72) 45%, rgba(247, 248, 251, 0.86) 100%);
}

.guide-grid {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.guide-card {
  display: block;
  height: 100%;
  padding: 1.4rem 1.5rem;
  border: 1px solid var(--line);
  border-left: 3px solid var(--gold-500);
  border-radius: 12px;
  background: #fff;
  color: var(--ink);
  transition: box-shadow 0.18s ease, transform 0.18s ease;
}
.guide-card:hover { box-shadow: var(--shadow-md); transform: translateY(-3px); color: var(--ink); }

.guide-tag {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--navy-600);
  background: var(--navy-50);
  border-radius: 999px;
  padding: 0.15rem 0.6rem;
  margin-bottom: 0.6rem;
}
.guide-card h3 { font-size: 1rem; line-height: 1.45; margin-bottom: 0.45rem; }
.guide-card p {
  font-size: 0.87rem;
  color: var(--body);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.guide-all { margin-top: 2rem; text-align: center; }

@media (max-width: 960px) {
  .guide-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .guide-grid { grid-template-columns: 1fr; }
  .guides-bg img { object-position: 12% center; } /* 좁은 화면에서도 자유의 여신상이 보이게 */
}
</style>
