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
        <li v-for="(g, i) in guides" :key="g.path">
          <router-link :to="lp(g.path)" class="guide-card">
            <span class="guide-top">
              <span v-if="g.name" class="guide-tag">{{ g.name }}</span>
              <span class="guide-no" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
            </span>
            <h3>{{ g.title }}</h3>
            <p>{{ g.summary }}</p>
            <span class="guide-more">
              {{ locale === 'en' ? 'Read guide' : '가이드 읽기' }}
              <ArrowRight :size="15" aria-hidden="true" />
            </span>
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
import { ArrowRight } from 'lucide-vue-next';
import { guidesList } from '../../data/landing';
import { useLocalePath } from '../../composables/useLocalePath';
import skylineJpg from '../../assets/tax-expertise.jpg';
import skylineWebp from '../../assets/optimized/tax-expertise.webp';
import skylineAvif from '../../assets/optimized/tax-expertise.avif';

export default {
  name: 'HomeGuides',
  components: { ArrowRight },
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
  gap: 1.1rem;
}

.guide-card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.5rem 1.6rem 1.3rem;
  border: 1px solid rgba(10, 35, 80, 0.08);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.94);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  box-shadow: var(--shadow-sm);
  color: var(--ink);
  overflow: hidden;
  transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
}
/* 마우스를 올리면 위쪽에 금색 선이 왼쪽에서 펼쳐짐 */
.guide-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--gold-500), var(--gold-600));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s ease;
}
.guide-card:hover {
  transform: translateY(-4px);
  border-color: rgba(10, 35, 80, 0.16);
  box-shadow: 0 18px 40px rgba(10, 35, 80, 0.12);
  color: var(--ink);
}
.guide-card:hover::before { transform: scaleX(1); }

.guide-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.9rem;
}
.guide-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--navy-600);
}
.guide-tag::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold-500);
}
.guide-no {
  margin-left: auto;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: rgba(10, 35, 80, 0.22);
  font-variant-numeric: tabular-nums;
}

.guide-card h3 {
  font-size: 1.04rem;
  font-weight: 700;
  line-height: 1.45;
  color: var(--navy-900);
  margin-bottom: 0.5rem;
  word-break: keep-all;
}
.guide-card p {
  font-size: 0.87rem;
  color: var(--body);
  line-height: 1.65;
  margin-bottom: 1.1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.guide-more {
  margin-top: auto;
  padding-top: 0.9rem;
  border-top: 1px solid var(--line);
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--navy-600);
}
.guide-more svg { transition: transform 0.25s ease; }
.guide-card:hover .guide-more { color: var(--navy-800); }
.guide-card:hover .guide-more svg { transform: translateX(4px); }

@media (prefers-reduced-motion: reduce) {
  .guide-card, .guide-card::before, .guide-more svg { transition: none; }
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
