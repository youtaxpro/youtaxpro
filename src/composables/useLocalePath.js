import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { localeOfPath, localizedPath, stripLocalePrefix } from '../seo/routeMeta';

// 현재 URL의 로케일에 맞춰 내부 링크 경로를 만들어 준다.
// 템플릿에서 <router-link :to="lp('/faq')"> / <router-link :to="lp('/#services')">
export function useLocalePath() {
  const route = useRoute();
  const currentLocale = computed(() => localeOfPath(route.path));

  const lp = (base) => {
    const [path, hash] = String(base).split('#');
    const out = localizedPath(path || '/', currentLocale.value);
    return hash ? `${out}#${hash}` : out;
  };

  // 같은 페이지의 반대 언어 경로 (언어 전환 버튼용)
  const switchLocalePath = (targetLocale) => {
    const out = localizedPath(stripLocalePrefix(route.path), targetLocale);
    return out + (route.hash || '');
  };

  return { currentLocale, lp, switchLocalePath };
}
