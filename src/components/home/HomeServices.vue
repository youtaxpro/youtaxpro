<template>
  <section id="services" class="section section--tint">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Services</span>
        <h2>{{ locale === 'en' ? 'What we handle' : '서비스 안내' }}</h2>
        <p>
          {{ locale === 'en'
            ? 'From a simple annual return to multi-year catch-up filings — one firm, one point of contact.'
            : '매년 하는 정기 신고부터 여러 해 미신고 정리까지, 한 곳에서 처리합니다.' }}
        </p>
      </div>

      <ul class="svc-grid">
        <li v-for="(s, i) in services" :key="i">
          <router-link :to="lp(s.to)" class="svc-card">
            <span class="svc-icon"><component :is="s.icon" :size="24" aria-hidden="true" /></span>
            <h3>{{ $t(`services.service${i + 1}.items[0]`) }}</h3>
            <p>{{ s.desc[locale] || s.desc.ko }}</p>
            <span class="svc-more">
              {{ s.guide ? (locale === 'en' ? 'Read the guide' : '가이드 보기') : (locale === 'en' ? 'Ask about this' : '상담 문의') }}
              <ArrowRight :size="16" aria-hidden="true" />
            </span>
          </router-link>
        </li>
      </ul>

      <p class="svc-all">
        <router-link :to="lp('/services')" class="btn btn-line">
          {{ locale === 'en' ? 'All services' : '서비스 전체 보기' }}
        </router-link>
      </p>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n';
import {
  FileText, Landmark, Plane, LifeBuoy, History, FilePenLine, UserRound, MailWarning, ArrowRight,
} from 'lucide-vue-next';
import { useLocalePath } from '../../composables/useLocalePath';

// 순서는 i18n services.service1~8 과 일치해야 한다.
const services = [
  { icon: 'FileText', to: '/tax-return', guide: true, desc: { ko: 'Form 1040과 주(State) 신고서. 한국 소득·금융자산을 포함한 전 세계 소득을 정확히 반영합니다.', en: 'Form 1040 plus state returns, reflecting worldwide income including Korean income and assets.' } },
  { icon: 'Landmark', to: '/fbar', guide: true, desc: { ko: '해외 금융계좌 합계 1만 달러 초과 시 FBAR, 기준 초과 시 Form 8938. 계좌별 최고잔액을 계산해 전자신고합니다.', en: 'FBAR above USD 10,000 in aggregate and Form 8938 above its thresholds — maximum balances computed and e-filed.' } },
  { icon: 'Plane', to: '/feie', guide: true, desc: { ko: '해외근로소득 공제(FEIE)와 외국납부세액공제(FTC)를 비교해 이중과세를 최소화합니다.', en: 'We compare the FEIE and the Foreign Tax Credit to minimize double taxation.' } },
  { icon: 'LifeBuoy', to: '/streamlined', guide: true, desc: { ko: '몰라서 신고하지 못한 경우를 위한 IRS 공식 구제 절차. 해외 거주자는 벌금 없이 정리할 수 있습니다.', en: 'The IRS relief route for non-willful non-filers. Taxpayers abroad can catch up with no penalty.' } },
  { icon: 'History', to: '/streamlined', guide: true, desc: { ko: '기한이 지난 연도의 신고서를 작성하고, 가산세·이자를 줄일 수 있는 방법을 함께 검토합니다.', en: 'We prepare late returns and review options to reduce penalties and interest.' } },
  { icon: 'FilePenLine', to: '/amended-return', guide: true, desc: { ko: '누락·오류가 있는 신고서를 Form 1040-X로 바로잡습니다. 환급 청구 기한도 확인해 드립니다.', en: 'Fix omissions and errors with Form 1040-X, including refund-claim deadlines.' } },
  { icon: 'UserRound', to: '/nonresident', guide: true, desc: { ko: '미국 원천소득이 있는 비거주 외국인의 Form 1040-NR 신고와 ITIN 신청을 지원합니다.', en: 'Form 1040-NR for nonresidents with U.S.-source income, plus ITIN applications.' } },
  { icon: 'MailWarning', to: '/irs-notice', guide: true, desc: { ko: 'IRS 통지서(CP2000 등)의 의미와 대응 기한을 설명하고, 답변서 작성과 세무조사 대응을 돕습니다.', en: 'We explain IRS notices (CP2000 and others), draft responses and assist with examinations.' } },
];

export default {
  name: 'HomeServices',
  components: { FileText, Landmark, Plane, LifeBuoy, History, FilePenLine, UserRound, MailWarning, ArrowRight },
  setup() {
    const { locale } = useI18n();
    const { lp } = useLocalePath();
    return { services, locale, lp };
  },
};
</script>

<style scoped>
.svc-all {
  margin-top: 1.75rem;
  text-align: center;
}

.svc-grid {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.svc-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.5rem;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  color: var(--ink);
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}
.svc-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--navy-100);
  color: var(--ink);
}

.svc-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: var(--navy-800);
  color: var(--gold-500);
  margin-bottom: 1.1rem;
}

.svc-card h3 { font-size: 1.02rem; line-height: 1.4; margin-bottom: 0.5rem; }
.svc-card p { font-size: 0.88rem; color: var(--body); line-height: 1.65; margin-bottom: 1.1rem; }

.svc-more {
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--navy-600);
}
.svc-card:hover .svc-more svg { transform: translateX(3px); }
.svc-more svg { transition: transform 0.18s ease; }

@media (max-width: 1024px) {
  .svc-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .svc-grid { grid-template-columns: 1fr; }
}
</style>
