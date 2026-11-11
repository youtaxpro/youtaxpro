<template>
  <MainLayout>
    <div class="cu">
      <PageHero
        eyebrow="CONTACT"
        :title="t.title"
        :lead="t.lead"
      >
        <div class="cu-hero-actions">
          <a :href="CONTACT.phoneHref" class="btn btn-gold"><Phone :size="18" aria-hidden="true" />{{ CONTACT.phoneDisplay }}</a>
          <a :href="kakaoWebUrl" class="btn btn-ghost" @click="openKakao"><MessageCircle :size="18" aria-hidden="true" />{{ t.kakao }}</a>
        </div>
      </PageHero>

      <section class="section">
        <div class="container cu-grid">
          <!-- 연락 방법 -->
          <div class="cu-cards">
            <a :href="CONTACT.phoneHref" class="cu-card">
              <span class="cu-icon"><Phone :size="22" aria-hidden="true" /></span>
              <span class="cu-text"><small>{{ $t('contact.phone.title') }}</small><strong>{{ CONTACT.phoneDisplay }}</strong></span>
            </a>
            <a :href="kakaoWebUrl" class="cu-card" @click="openKakao">
              <span class="cu-icon cu-icon--kakao"><MessageCircle :size="22" aria-hidden="true" /></span>
              <span class="cu-text"><small>{{ t.kakao }}</small><strong>ID berkeleytax</strong></span>
            </a>
            <a :href="`mailto:${CONTACT.email}`" class="cu-card">
              <span class="cu-icon"><Mail :size="22" aria-hidden="true" /></span>
              <span class="cu-text"><small>{{ $t('contact.email.title') }}</small><strong>{{ CONTACT.email }}</strong></span>
            </a>
            <div class="cu-card">
              <span class="cu-icon"><Printer :size="22" aria-hidden="true" /></span>
              <span class="cu-text"><small>{{ $t('contact.fax.title') }}</small><strong>{{ CONTACT.fax }}</strong></span>
            </div>
            <div class="cu-card cu-card--wide">
              <span class="cu-icon"><Clock :size="22" aria-hidden="true" /></span>
              <span class="cu-text">
                <small>{{ $t('contact.hours.title') }}</small>
                <strong>{{ $t('contact.hours.weekday') }}</strong>
                <em>{{ $t('contact.hours.weekend') }}</em>
              </span>
            </div>
            <div class="cu-card cu-card--wide">
              <span class="cu-icon"><BookOpen :size="22" aria-hidden="true" /></span>
              <span class="cu-text">
                <small>{{ t.channels }}</small>
                <span class="cu-links">
                  <a v-for="s in SOCIAL" :key="s.key" :href="s.url" target="_blank" rel="noopener">{{ s.label[locale] || s.label.ko }}</a>
                </span>
              </span>
            </div>
            <router-link :to="lp('/#consult')" class="btn btn-navy cu-form-btn">{{ t.form }}</router-link>
          </div>

          <!-- 오시는 길 -->
          <div class="cu-map">
            <div class="cu-map-frame">
              <iframe
                :title="t.mapTitle"
                src="/kakao-map.html"
                loading="lazy"
              ></iframe>
            </div>
            <div class="cu-address">
              <MapPin :size="20" aria-hidden="true" />
              <div>
                <strong>{{ $t('footer.address') }}</strong>
                <p>{{ t.subway }}</p>
              </div>
            </div>
            <div class="cu-map-links">
              <a :href="kakaoMapUrl" target="_blank" rel="noopener" class="btn btn-line">{{ t.kakaoMap }}</a>
              <a :href="naverMapUrl" target="_blank" rel="noopener" class="btn btn-line">{{ t.naverMap }}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </MainLayout>
</template>

<script>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { Phone, Mail, MessageCircle, Printer, Clock, MapPin, BookOpen } from 'lucide-vue-next';
import MainLayout from '../layouts/MainLayout.vue';
import PageHero from '../components/common/PageHero.vue';
import { CONTACT, SOCIAL } from '../data/site';
import { kakaoWebUrl, openKakao } from '../composables/useKakao';
import { useLocalePath } from '../composables/useLocalePath';

const copy = {
  ko: {
    title: '문의하기',
    lead: '전화·카카오톡·이메일로 편하게 문의해 주세요. 사무실 방문 상담은 예약 후 가능합니다.',
    kakao: '카카오톡 상담',
    channels: '블로그 · 인스타그램',
    form: '상담 신청서 작성하기',
    mapTitle: '사무실 위치 지도',
    subway: '9호선 삼성중앙역 6번 출구 앞',
    kakaoMap: '카카오맵에서 보기',
    naverMap: '네이버 지도로 보기',
  },
  en: {
    title: 'Contact Us',
    lead: 'Reach us by phone, KakaoTalk or email. In-office meetings are by appointment.',
    kakao: 'KakaoTalk',
    channels: 'Blog · Instagram',
    form: 'Fill out the consultation form',
    mapTitle: 'Office location map',
    subway: 'In front of Exit 6, Samseong Jungang Station (Line 9)',
    kakaoMap: 'Open in Kakao Map',
    naverMap: 'View in Naver Map',
  },
};

export default {
  name: 'ContactUs',
  components: { MainLayout, PageHero, Phone, Mail, MessageCircle, Printer, Clock, MapPin, BookOpen },
  setup() {
    const { locale } = useI18n();
    const { lp } = useLocalePath();
    const t = computed(() => copy[locale.value] || copy.ko);
    // 지도 앱 링크는 API 키 없이 쓸 수 있는 공개 URL
    const kakaoMapUrl = 'https://place.map.kakao.com/1339308227';
    const naverMapUrl = `https://map.naver.com/p/search/${encodeURIComponent('서울 강남구 삼성로 573')}`;
    return { t, locale, lp, CONTACT, SOCIAL, kakaoWebUrl, openKakao, kakaoMapUrl, naverMapUrl };
  },
};
</script>

<style scoped>
.cu { width: 100%; background: var(--bg); text-align: left; }
.section { padding: 72px 0 96px; }

.cu-hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.75rem; }

.cu-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  gap: 2rem;
  align-items: start;
}

.cu-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; }
.cu-card {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 1.2rem 1.25rem;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  color: var(--ink);
  box-shadow: var(--shadow-sm);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
a.cu-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); color: var(--ink); }
.cu-card--wide { grid-column: 1 / -1; }

.cu-icon {
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: var(--navy-800);
  color: var(--gold-500);
}
.cu-icon--kakao { background: #fee500; color: #191600; }

.cu-text { display: flex; flex-direction: column; min-width: 0; }
.cu-text small { font-size: 0.78rem; color: var(--muted); font-weight: 600; }
.cu-text strong { font-size: 1rem; overflow-wrap: anywhere; }
.cu-text em { font-style: normal; font-size: 0.88rem; color: var(--body); }
.cu-links { display: flex; flex-wrap: wrap; gap: 0.4rem 1rem; }
.cu-links a { font-weight: 700; color: var(--navy-600); }

.cu-form-btn { grid-column: 1 / -1; width: 100%; }

.cu-map {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}
.cu-map-frame { aspect-ratio: 4 / 3; background: var(--navy-50); }
.cu-map-frame iframe { display: block; width: 100%; height: 100%; border: 0; }
.cu-address { display: flex; gap: 0.75rem; padding: 1.25rem 1.25rem 0.5rem; color: var(--navy-800); }
.cu-address svg { flex: none; margin-top: 2px; }
.cu-address strong { display: block; color: var(--ink); font-size: 0.98rem; }
.cu-address p { font-size: 0.88rem; color: var(--body); }
.cu-map-links { display: flex; flex-wrap: wrap; gap: 0.6rem; padding: 0.75rem 1.25rem 1.25rem; }
.cu-map-links .btn { height: 42px; font-size: 0.88rem; }

@media (max-width: 960px) {
  .cu-grid { grid-template-columns: 1fr; }
}
@media (max-width: 560px) {
  .cu-cards { grid-template-columns: 1fr; }
  .cu-hero-actions .btn { flex: 1 1 100%; }
}
</style>
