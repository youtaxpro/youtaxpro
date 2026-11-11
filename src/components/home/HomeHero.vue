<template>
  <header class="hero">
    <picture class="hero-bg" aria-hidden="true">
      <source :srcset="bgAvif" type="image/avif" />
      <source :srcset="bgWebp" type="image/webp" />
      <img :src="bgJpg" alt="" fetchpriority="high" decoding="async" />
    </picture>

    <div class="container hero-grid">
      <div class="hero-copy">
        <span class="hero-eyebrow">{{ t.eyebrow }}</span>
        <h1>
          {{ t.h1a }}<br />
          <em>{{ t.h1b }}</em>
        </h1>
        <p class="hero-sub">{{ t.sub }}</p>

        <ul class="hero-points">
          <li v-for="p in t.points" :key="p"><Check :size="18" aria-hidden="true" />{{ p }}</li>
        </ul>

        <div class="hero-actions">
          <a href="#consult" class="btn btn-gold">{{ t.cta }}</a>
          <router-link :to="lp('/guides')" class="btn btn-ghost">{{ t.cta2 }}</router-link>
        </div>

        <p class="hero-season">{{ t.season }}</p>
      </div>

      <div id="consult" class="consult">
        <h2>{{ t.formTitle }}</h2>
        <p class="consult-sub">{{ t.formSub }}</p>

        <!-- 접수 완료 -->
        <div v-if="status === 'success'" class="form-done" role="status" aria-live="polite">
          <div class="form-done-check" aria-hidden="true"><Check :size="28" /></div>
          <p class="form-done-title">{{ t.doneTitle }}</p>
          <p class="form-done-text">{{ t.doneText }}</p>
          <button type="button" class="submit-btn" @click="resetForm">{{ t.again }}</button>
        </div>

        <form v-else @submit.prevent="submitForm" novalidate>
          <!-- 스팸 방지 (사람에겐 안 보임) -->
          <input
            v-model="formData.botcheck"
            type="checkbox"
            name="botcheck"
            class="hp-field"
            tabindex="-1"
            autocomplete="off"
            aria-hidden="true"
          />

          <label class="sr-only" for="cf-name">{{ t.name }}</label>
          <input id="cf-name" v-model.trim="formData.fullName" type="text" name="Full Name" :placeholder="t.name" autocomplete="name" required class="form-input" />

          <div class="form-row">
            <div>
              <label class="sr-only" for="cf-email">{{ t.email }}</label>
              <input id="cf-email" v-model.trim="formData.email" type="email" name="Email" :placeholder="t.email" autocomplete="email" required class="form-input" />
            </div>
            <div>
              <label class="sr-only" for="cf-phone">{{ t.phone }}</label>
              <input id="cf-phone" v-model.trim="formData.phone" type="tel" name="Phone" :placeholder="t.phone" autocomplete="tel" required class="form-input" />
            </div>
          </div>

          <label class="sr-only" for="cf-status">{{ t.statusType }}</label>
          <select id="cf-status" v-model="formData.statusType" name="Status Type" class="form-input status-select" required>
            <option value="" disabled>{{ t.statusType }}</option>
            <option value="US Citizen / Green Card Holder">{{ t.status1 }}</option>
            <option value="Foreign National Individual">{{ t.status2 }}</option>
            <option value="Expatriate Individual">{{ t.status3 }}</option>
          </select>

          <label class="sr-only" for="cf-message">{{ t.message }}</label>
          <textarea id="cf-message" v-model.trim="formData.details" name="Message" :placeholder="t.message" class="form-input form-textarea" rows="4"></textarea>

          <p v-if="status === 'invalid'" class="form-error" role="alert">{{ t.invalid }}</p>
          <p v-if="status === 'error'" class="form-error" role="alert">{{ t.error }}</p>

          <button type="submit" class="submit-btn" :disabled="status === 'submitting'">
            {{ status === 'submitting' ? t.sending : t.submit }}
          </button>
          <p class="consult-note">{{ t.note }}</p>
        </form>
      </div>
    </div>

    <!-- 핵심 지표 -->
    <div class="container">
      <dl class="hero-stats">
        <div v-for="s in t.stats" :key="s.label">
          <dt>{{ s.value }}</dt>
          <dd>{{ s.label }}</dd>
        </div>
      </dl>
    </div>
  </header>
</template>

<script>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { Check } from 'lucide-vue-next';
import { gaEvent } from '../../seo/analytics';
import { useLocalePath } from '../../composables/useLocalePath';
import bgJpg from '../../assets/sanfran1.jpg';
import bgWebp from '../../assets/optimized/sanfran1.webp';
import bgAvif from '../../assets/optimized/sanfran1.avif';

const ACCESS_KEY = '10f32bb4-f34d-4088-af76-7ffd7a7557d0';
const emptyForm = () => ({ fullName: '', email: '', phone: '', statusType: '', details: '', botcheck: false });

const copy = {
  ko: {
    eyebrow: '캘리포니아 CPA · 서울 강남',
    h1a: '한국에서 하는 미국 세금 신고,',
    h1b: '정확하고 편안하게.',
    sub: '한국에 거주하는 미국 시민권자·영주권자를 위한 미국 세금 신고 전문. 연방·주 소득세부터 FBAR·FATCA, 미신고 정리(Streamlined)까지 캘리포니아 CPA가 직접 검토하고 신고합니다.',
    points: ['FBAR · FATCA · PFIC 해외자산 신고', '한·미 이중과세 최소화 (FEIE · 외국납부세액공제)', '한국어·영어 상담, 전 과정 비대면 가능'],
    cta: '상담 신청하기',
    cta2: '미국세금 가이드 보기',
    season: '2026 과세연도 신고(2027년 접수) · 해외 거주자 자동 연장 기한 2027년 6월 15일',
    formTitle: '상담 신청',
    formSub: '1영업일 이내에 담당 CPA가 연락드립니다.',
    name: '성함',
    email: '이메일',
    phone: '연락처',
    statusType: '신분 유형 선택',
    status1: '미국 시민권자 / 영주권자',
    status2: '외국인 (비거주자)',
    status3: '해외 주재원',
    message: '문의 내용을 간단히 적어 주세요 (English is welcome)',
    submit: '상담 신청하기',
    sending: '전송 중…',
    note: '입력하신 정보는 상담 목적으로만 사용됩니다.',
    invalid: '성함, 이메일, 연락처, 신분 유형을 모두 입력해 주세요.',
    error: '전송에 실패했습니다. 잠시 후 다시 시도하시거나 전화(010-5909-4868)로 문의해 주세요.',
    doneTitle: '문의가 접수되었습니다',
    doneText: '1영업일 이내에 이메일 또는 전화로 연락드리겠습니다.',
    again: '다른 문의하기',
    stats: [
      { value: '10년+', label: '미국 세무 실무 경력' },
      { value: '5,000건+', label: '개인 세금신고 처리' },
      { value: '50개 주', label: '주(State) 세금신고 경험' },
      { value: 'KO · EN', label: '한국어 · 영어 상담' },
    ],
  },
  en: {
    eyebrow: 'California CPA · Gangnam, Seoul',
    h1a: 'U.S. tax filing from Korea,',
    h1b: 'done right.',
    sub: 'U.S. tax services for American citizens and green card holders living in Korea. From federal and state returns to FBAR, FATCA and Streamlined catch-up filings — reviewed and filed by a California CPA.',
    points: ['FBAR · FATCA · PFIC foreign asset reporting', 'Minimize double taxation (FEIE · Foreign Tax Credit)', 'Korean & English, fully remote if you prefer'],
    cta: 'Request a consultation',
    cta2: 'Read the tax guides',
    season: 'Tax year 2026 returns (filed in 2027) · Automatic abroad deadline June 15, 2027',
    formTitle: 'Tax Consultation',
    formSub: 'A CPA will contact you within one business day.',
    name: 'Full name',
    email: 'Email',
    phone: 'Phone number',
    statusType: 'Select status type',
    status1: 'U.S. Citizen / Green Card Holder',
    status2: 'Foreign National Individual',
    status3: 'Expatriate Individual',
    message: 'Briefly describe your inquiry (한국어 문의 가능)',
    submit: 'Send request',
    sending: 'Sending…',
    note: 'Your information is used only to respond to your inquiry.',
    invalid: 'Please fill in your name, email, phone and status type.',
    error: 'Submission failed. Please try again shortly or call 010-5909-4868.',
    doneTitle: 'Thank you — request received',
    doneText: "We'll be in touch by email or phone within one business day.",
    again: 'Send another inquiry',
    stats: [
      { value: '10+ yrs', label: 'U.S. tax experience' },
      { value: '5,000+', label: 'Individual returns prepared' },
      { value: '50 states', label: 'State return experience' },
      { value: 'KO · EN', label: 'Bilingual service' },
    ],
  },
};

export default {
  name: 'HomeHero',
  components: { Check },
  setup() {
    const { locale } = useI18n();
    const { lp } = useLocalePath();
    const t = computed(() => copy[locale.value] || copy.ko);
    const formData = ref(emptyForm());
    // 'idle' | 'invalid' | 'submitting' | 'success' | 'error'
    const status = ref('idle');

    const submitForm = async () => {
      if (status.value === 'submitting') return;
      // 허니팟: 봇이 체크하면 조용히 성공 처리 (실제 전송 안 함)
      if (formData.value.botcheck) {
        status.value = 'success';
        return;
      }
      const f = formData.value;
      if (!f.fullName || !/^\S+@\S+\.\S+$/.test(f.email) || !f.phone || !f.statusType) {
        status.value = 'invalid';
        return;
      }

      status.value = 'submitting';
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: ACCESS_KEY,
            subject: 'youtaxpro.com 상담 신청',
            from_name: f.fullName || 'youtaxpro.com',
            botcheck: false,
            full_name: f.fullName,
            email: f.email,
            phone: f.phone,
            status_type: f.statusType,
            message: f.details,
          }),
        });
        const result = await response.json();
        if (!result.success) throw new Error(result.message || 'Form submission failed');
        gaEvent('generate_lead', { method: 'web3forms', status_type: f.statusType || 'unspecified' });
        status.value = 'success';
      } catch (error) {
        console.error('Error submitting form:', error);
        gaEvent('form_error', { form: 'consultation' });
        status.value = 'error';
      }
    };

    const resetForm = () => {
      formData.value = emptyForm();
      status.value = 'idle';
    };

    return { t, lp, formData, status, submitForm, resetForm, bgJpg, bgWebp, bgAvif };
  },
};
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  padding: 140px 0 0;
  color: #fff;
  background: var(--navy-950);
  isolation: isolate;
}

.hero-bg { position: absolute; inset: 0; z-index: -2; }
.hero-bg img { width: 100%; height: 100%; object-fit: cover; }
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(100deg, rgba(6, 23, 53, 0.94) 0%, rgba(10, 35, 80, 0.86) 45%, rgba(10, 35, 80, 0.55) 100%);
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  gap: 3.5rem;
  align-items: center;
}

.hero-eyebrow {
  display: inline-block;
  padding: 0.35rem 0.8rem;
  border: 1px solid rgba(253, 181, 21, 0.5);
  border-radius: 999px;
  color: var(--gold-500);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  margin-bottom: 1.25rem;
}

.hero h1 {
  font-size: clamp(2rem, 4.4vw, 3.4rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.25rem;
}
.hero h1 em { font-style: normal; color: var(--gold-500); }

.hero-sub { font-size: 1.08rem; line-height: 1.75; color: rgba(255, 255, 255, 0.84); max-width: 560px; margin-bottom: 1.5rem; }

.hero-points { list-style: none; display: grid; gap: 0.55rem; margin-bottom: 2rem; }
.hero-points li { display: flex; align-items: center; gap: 0.6rem; font-size: 0.98rem; font-weight: 500; color: rgba(255, 255, 255, 0.92); }
.hero-points svg { flex: none; color: var(--gold-500); }

.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.25rem; }
.hero-season { font-size: 0.85rem; color: rgba(255, 255, 255, 0.65); }

/* 상담 폼 카드 */
.consult {
  background: #fff;
  color: var(--ink);
  border-radius: 18px;
  padding: 2rem;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  color-scheme: light;
  scroll-margin-top: 96px;
}
.consult h2 { font-size: 1.4rem; color: var(--navy-900); margin-bottom: 0.25rem; }
.consult-sub { font-size: 0.9rem; color: var(--muted); margin-bottom: 1.25rem; }
.consult form { display: grid; gap: 0.7rem; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.7rem; }

.form-input {
  width: 100%;
  padding: 0.85rem 0.95rem;
  border: 1px solid var(--line);
  border-radius: 10px;
  font: inherit;
  font-size: 0.95rem;
  background: #fff;
  color: var(--ink);
  -webkit-text-fill-color: var(--ink);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
.form-input::placeholder { color: #94a3b8; -webkit-text-fill-color: #94a3b8; opacity: 1; }
.form-input:focus { outline: none; border-color: var(--navy-600); box-shadow: 0 0 0 3px rgba(30, 77, 146, 0.15); }
.form-input:-webkit-autofill { -webkit-text-fill-color: var(--ink); -webkit-box-shadow: 0 0 0 1000px #fff inset; }
.form-textarea { resize: vertical; min-height: 96px; }

.status-select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='none' stroke='%2364748b' stroke-width='1.8' d='M1 1.5l5 5 5-5'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
}

.submit-btn {
  width: 100%;
  height: 52px;
  padding: 0;
  border-radius: 10px;
  background: var(--navy-800);
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
}
.submit-btn:hover { background: var(--navy-600); }
.submit-btn:disabled { opacity: 0.7; cursor: progress; }
.consult-note { font-size: 0.78rem; color: var(--muted); text-align: center; }

.form-error {
  padding: 0.6rem 0.8rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  color: #b91c1c;
  font-size: 0.86rem;
}

.form-done { text-align: center; padding: 1.5rem 0 0.5rem; }
.form-done-check {
  width: 56px;
  height: 56px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  background: var(--gold-100);
  color: var(--gold-600);
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-done-title { font-size: 1.15rem; font-weight: 700; margin-bottom: 0.4rem; }
.form-done-text { font-size: 0.92rem; color: var(--body); margin-bottom: 1.25rem; }

/* 핵심 지표 */
.hero-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 4.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
}
.hero-stats > div { padding: 1.75rem 1rem 2rem; text-align: center; }
.hero-stats > div + div { border-left: 1px solid rgba(255, 255, 255, 0.12); }
.hero-stats dt { font-size: clamp(1.4rem, 2.6vw, 2rem); font-weight: 800; color: var(--gold-500); }
.hero-stats dd { font-size: 0.88rem; color: rgba(255, 255, 255, 0.72); }

.hp-field,
.sr-only {
  position: absolute !important;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 960px) {
  .hero { padding-top: 112px; }
  .hero-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .consult { max-width: 560px; }
}

@media (max-width: 560px) {
  .consult { padding: 1.5rem; }
  .form-row { grid-template-columns: 1fr; }
  .hero-stats { grid-template-columns: 1fr 1fr; margin-top: 3rem; }
  .hero-stats > div + div { border-left: 0; }
  .hero-stats > div:nth-child(even) { border-left: 1px solid rgba(255, 255, 255, 0.12); }
  .hero-stats > div:nth-child(n + 3) { border-top: 1px solid rgba(255, 255, 255, 0.12); }
  .hero-actions .btn { flex: 1 1 100%; }
}
</style>
