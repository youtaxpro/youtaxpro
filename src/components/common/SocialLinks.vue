<template>
  <ul class="social" :aria-label="locale === 'en' ? 'Official channels' : '공식 채널'">
    <li v-for="s in SOCIAL" :key="s.key">
      <a
        :href="s.url"
        target="_blank"
        rel="noopener"
        :class="['social-btn', `social-btn--${s.key}`]"
        :aria-label="s.label[locale] || s.label.ko"
        :title="s.label[locale] || s.label.ko"
        @click="track(s.key)"
      >
        <Instagram v-if="s.key === 'instagram'" :size="20" aria-hidden="true" />
        <span v-else class="social-glyph" aria-hidden="true">{{ s.key === 'naver' ? 'N' : 'T' }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { Instagram } from 'lucide-vue-next';
import { SOCIAL } from '../../data/site';
import { gaEvent } from '../../seo/analytics';

export default {
  name: 'SocialLinks',
  components: { Instagram },
  setup() {
    const { locale } = useI18n();
    const track = (channel) => gaEvent('social_click', { channel });
    return { SOCIAL, locale, track };
  },
};
</script>

<style scoped>
.social { list-style: none; display: flex; gap: 0.6rem; }

.social-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #fff;
  transition: background-color 0.15s ease, transform 0.15s ease, border-color 0.15s ease;
}
.social-btn:hover { transform: translateY(-2px); color: #fff; border-color: transparent; }
.social-btn--naver:hover { background: #03c75a; }
.social-btn--tistory:hover { background: #eb531f; }
.social-btn--instagram:hover { background: linear-gradient(45deg, #f09433, #dc2743 55%, #bc1888); }

.social-glyph { font-size: 1.05rem; font-weight: 800; line-height: 1; }
</style>
