<template>
  <section id="aboutus" class="section about">
    <div class="container about-grid">
      <div class="about-copy">
        <span class="eyebrow">About</span>
        <h2>{{ t.title }}</h2>
        <p>{{ $t('aboutus.content1') }} {{ $t('aboutus.content3') }}</p>
        <p>{{ $t('aboutus.content5') }} {{ $t('aboutus.content7') }}</p>
        <router-link :to="lp('/contactus')" class="btn btn-navy">{{ $t('aboutus.cta.button') }}</router-link>
      </div>

      <ul class="about-cards">
        <li v-for="c in t.cards" :key="c.title">
          <span class="about-icon"><component :is="c.icon" :size="24" aria-hidden="true" /></span>
          <h3>{{ c.title }}</h3>
          <p>{{ c.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { Globe2, ShieldCheck, Scale, MessagesSquare } from 'lucide-vue-next';
import { useLocalePath } from '../../composables/useLocalePath';

const copy = {
  ko: {
    title: '한국 거주 미국 납세자만을 위한 세무 파트너',
    cards: [
      { icon: 'Globe2', title: '해외 거주자 신고에 특화', text: 'FEIE, 외국납부세액공제, 한미 조세조약, 한국 금융상품(PFIC)까지 — 한국에 사는 미국 납세자의 실제 상황을 다룹니다.' },
      { icon: 'ShieldCheck', title: '벌금 위험 사전 차단', text: 'FBAR·FATCA·Form 3520 등 정보보고 누락은 세금보다 벌금이 큽니다. 신고 전 누락 항목을 먼저 점검합니다.' },
      { icon: 'Scale', title: '두 방식 모두 계산 후 선택', text: 'FEIE와 FTC, 표준공제와 항목별 공제를 모두 계산해 세 부담이 가장 낮은 방법을 근거와 함께 안내합니다.' },
      { icon: 'MessagesSquare', title: '담당 CPA와 직접 소통', text: '접수부터 전자신고까지 캘리포니아 CPA가 직접 검토합니다. 한국어·영어로 이메일·전화·대면 상담이 가능합니다.' },
    ],
  },
  en: {
    title: 'A tax partner built for U.S. taxpayers living in Korea',
    cards: [
      { icon: 'Globe2', title: 'Specialized in expat filings', text: 'FEIE, Foreign Tax Credit, the U.S.–Korea treaty and Korean financial products (PFIC) — the real issues of Americans in Korea.' },
      { icon: 'ShieldCheck', title: 'Penalty risks caught early', text: 'Missed FBAR, FATCA or Form 3520 reports often cost more than the tax itself. We check for gaps before filing.' },
      { icon: 'Scale', title: 'Both methods calculated', text: 'We compute FEIE vs. FTC and standard vs. itemized, then recommend the lower-tax option with the numbers.' },
      { icon: 'MessagesSquare', title: 'Direct access to your CPA', text: 'A California CPA reviews everything from intake to e-file. Email, phone or in-person, in Korean or English.' },
    ],
  },
};

export default {
  name: 'HomeAboutUs',
  components: { Globe2, ShieldCheck, Scale, MessagesSquare },
  setup() {
    const { locale } = useI18n();
    const { lp } = useLocalePath();
    const t = computed(() => copy[locale.value] || copy.ko);
    return { t, lp };
  },
};
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 4rem;
  align-items: center;
}

.about-copy h2 { font-size: clamp(1.6rem, 3vw, 2.2rem); color: var(--navy-900); margin-bottom: 1.25rem; }
.about-copy p { color: var(--body); line-height: 1.8; margin-bottom: 1rem; }
.about-copy .btn { margin-top: 0.75rem; }

.about-cards { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.about-cards li {
  padding: 1.5rem;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: #fff;
  box-shadow: var(--shadow-sm);
}
.about-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: var(--navy-50);
  color: var(--navy-800);
  margin-bottom: 1rem;
}
.about-cards h3 { font-size: 1.02rem; color: var(--ink); margin-bottom: 0.4rem; }
.about-cards p { font-size: 0.9rem; color: var(--body); line-height: 1.65; }

@media (max-width: 960px) {
  .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
}
@media (max-width: 560px) {
  .about-cards { grid-template-columns: 1fr; }
}
</style>
