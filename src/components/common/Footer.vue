<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <div class="footer-logo">
          <img src="/berk.png" alt="" width="52" height="52" loading="lazy" />
          <div>
            <strong>Berkeley U.S. Tax Advisors</strong>
            <span>{{ $t('footer.companyName') }}</span>
          </div>
        </div>
        <p class="footer-tagline">
          {{ locale === 'en'
            ? 'U.S. tax filing for American citizens and green card holders in Korea and around the world — handled by a California CPA in Gangnam, Seoul.'
            : '한국을 비롯해 해외에 거주하는 미국 시민권자·영주권자를 위한 미국 세금 신고. 서울 강남에서 캘리포니아 CPA가 직접 처리합니다.' }}
        </p>
        <SocialLinks />
      </div>

      <nav class="footer-col" :aria-label="locale === 'en' ? 'Guides' : '가이드'">
        <h3>{{ locale === 'en' ? 'Tax Guides' : '미국세금 가이드' }}</h3>
        <ul>
          <li v-for="g in guides" :key="g.path">
            <router-link :to="lp(g.path)">{{ g.name || g.title }}</router-link>
          </li>
        </ul>
      </nav>

      <nav class="footer-col" :aria-label="locale === 'en' ? 'Company' : '회사'">
        <h3>{{ locale === 'en' ? 'Company' : '회사' }}</h3>
        <ul>
          <li><router-link :to="lp('/about')">{{ $t('nav.aboutUs') }}</router-link></li>
          <li><router-link :to="lp('/services')">{{ $t('nav.services') }}</router-link></li>
          <li><router-link :to="lp('/#checklists')">{{ $t('nav.checklists') }}</router-link></li>
          <li><router-link :to="lp('/faq')">{{ $t('nav.faq') }}</router-link></li>
          <li><router-link :to="lp('/contactus')">{{ $t('nav.contactUs') }}</router-link></li>
          <li v-for="s in SOCIAL" :key="s.key">
            <a :href="s.url" target="_blank" rel="noopener">{{ s.label[locale] || s.label.ko }}</a>
          </li>
        </ul>
      </nav>

      <div class="footer-col">
        <h3>{{ $t('contact.title') }}</h3>
        <ul class="footer-contact">
          <li><a :href="CONTACT.phoneHref">{{ $t('footer.phone') }}</a></li>
          <li><a :href="`mailto:${CONTACT.email}`">{{ CONTACT.email }}</a></li>
          <li>{{ $t('footer.fax') }}</li>
          <li>{{ $t('footer.address') }}</li>
          <li>{{ $t('contact.hours.weekday') }}</li>
          <li>{{ $t('contact.hours.weekend') }}</li>
        </ul>
      </div>
    </div>

    <div class="container footer-bottom">
      <p class="footer-legal">
        {{ $t('footer.companyName') }} · {{ $t('footer.representative') }} · {{ $t('footer.businessNumber') }}
      </p>
      <div class="footer-meta">
        <span>&copy; 2024–{{ year }} Berkeley U.S. Tax Advisors. All rights reserved.</span>
        <router-link :to="lp('/privacy')">{{ $t('nav.privacy') }}</router-link>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import SocialLinks from './SocialLinks.vue';
import { useLocalePath } from '../../composables/useLocalePath';
import { guidesList } from '../../data/landing';
import { CONTACT, SOCIAL } from '../../data/site';

export default {
  name: 'Footer',
  components: { SocialLinks },
  setup() {
    const { lp } = useLocalePath();
    const { locale } = useI18n();
    const guides = computed(() => guidesList(locale.value));
    const year = new Date().getFullYear();
    return { lp, locale, guides, year, CONTACT, SOCIAL };
  },
};
</script>

<style scoped>
.footer {
  width: 100%;
  background: var(--navy-950);
  color: rgba(255, 255, 255, 0.72);
  text-align: left;
  font-size: 0.9rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 0.9fr 1.4fr;
  gap: 2.5rem;
  padding-top: 3rem;
  padding-bottom: 2.5rem;
}

.footer-logo { display: flex; align-items: center; gap: 0.8rem; margin-bottom: 1rem; }
.footer-logo img { background: #fff; border-radius: 50%; }
.footer-logo strong { display: block; color: #fff; font-size: 1.05rem; font-weight: 700; }
.footer-logo span { font-size: 0.8rem; }
.footer-tagline { line-height: 1.7; margin-bottom: 1.25rem; max-width: 340px; }

.footer-col h3 {
  color: #fff;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.footer-col ul { list-style: none; display: grid; gap: 0.55rem; }
.footer-col a { color: rgba(255, 255, 255, 0.72); font-weight: 400; }
.footer-col a:hover { color: var(--gold-500); }
.footer-contact li { line-height: 1.55; }

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  padding-bottom: 6rem; /* 플로팅 상담 버튼과 겹치지 않도록 */
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  display: grid;
  gap: 0.4rem;
}
.footer-meta { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 0.75rem; margin-top: 0.5rem; }
.footer-meta a { color: rgba(255, 255, 255, 0.85); font-weight: 600; }
.footer-meta a:hover { color: var(--gold-500); }

@media (max-width: 960px) {
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 560px) {
  .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
}
</style>
