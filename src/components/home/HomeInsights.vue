<template>
  <section id="insights" class="section section--tint">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Insights</span>
        <h2>{{ locale === 'en' ? 'Latest columns' : '최신 미국세금 칼럼' }}</h2>
        <p>
          {{ locale === 'en'
            ? 'New Korean-language columns are posted on our blogs almost every day.'
            : '블로그에 거의 매일 새 칼럼이 올라옵니다. 궁금한 주제를 먼저 읽어 보세요.' }}
        </p>
      </div>

      <div class="insights-grid">
        <ul class="post-list">
          <li v-for="p in posts" :key="p.link">
            <a :href="p.link" target="_blank" rel="noopener" class="post" @click="track('post')">
              <span class="post-meta">
                <em v-if="p.category">{{ p.category }}</em>
                <time :datetime="p.date">{{ formatDate(p.date) }}</time>
              </span>
              <strong>{{ p.title }}</strong>
            </a>
          </li>
        </ul>

        <ul class="channels">
          <li v-for="s in SOCIAL" :key="s.key">
            <a :href="s.url" target="_blank" rel="noopener" :class="['channel', `channel--${s.key}`]" @click="track(s.key)">
              <span class="channel-mark" aria-hidden="true">
                <Instagram v-if="s.key === 'instagram'" :size="20" />
                <template v-else>{{ s.key === 'naver' ? 'N' : 'T' }}</template>
              </span>
              <span class="channel-text">
                <strong>{{ s.label[locale] || s.label.ko }}</strong>
                <small>{{ s.desc[locale] || s.desc.ko }}</small>
                <i>{{ s.handle }}</i>
              </span>
              <ArrowUpRight :size="18" class="channel-arrow" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { Instagram, ArrowUpRight } from 'lucide-vue-next';
import { SOCIAL } from '../../data/site';
import blog from '../../data/blogPosts.json';
import { gaEvent } from '../../seo/analytics';

export default {
  name: 'HomeInsights',
  components: { Instagram, ArrowUpRight },
  setup() {
    const { locale } = useI18n();
    const posts = (blog.posts || []).slice(0, 6);
    const formatDate = (iso) => (iso ? iso.slice(0, 10).replace(/-/g, '.') : '');
    const track = (target) => gaEvent('blog_click', { target });
    return { locale, posts, SOCIAL, formatDate, track };
  },
};
</script>

<style scoped>
.insights-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
  gap: 2rem;
  align-items: start;
}

.post-list {
  list-style: none;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
}
.post-list li + li { border-top: 1px solid var(--line); }
.post { display: block; padding: 1.05rem 1.4rem; color: var(--ink); transition: background-color 0.15s ease; }
.post:hover { background: var(--navy-50); color: var(--ink); }
.post-meta { display: flex; align-items: center; gap: 0.6rem; font-size: 0.76rem; color: var(--muted); margin-bottom: 0.25rem; }
.post-meta em { font-style: normal; font-weight: 700; color: var(--navy-600); }
.post strong { font-size: 0.98rem; font-weight: 600; line-height: 1.5; }

.channels { list-style: none; display: grid; gap: 1rem; }
.channel {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 1.3rem;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  color: var(--ink);
  transition: box-shadow 0.18s ease, transform 0.18s ease;
}
.channel:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); color: var(--ink); }

.channel-mark {
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 12px;
  color: #fff;
  font-weight: 800;
  font-size: 1.15rem;
}
.channel--naver .channel-mark { background: #03c75a; }
.channel--tistory .channel-mark { background: #eb531f; }
.channel--instagram .channel-mark { background: linear-gradient(45deg, #f09433, #dc2743 55%, #bc1888); }

.channel-text { display: flex; flex-direction: column; min-width: 0; }
.channel-text strong { font-size: 1rem; }
.channel-text small { font-size: 0.84rem; color: var(--body); line-height: 1.5; }
.channel-text i { font-style: normal; font-size: 0.76rem; color: var(--muted); margin-top: 0.2rem; }
.channel-arrow { flex: none; margin-left: auto; color: var(--muted); }

@media (max-width: 860px) {
  .insights-grid { grid-template-columns: 1fr; }
}
</style>
