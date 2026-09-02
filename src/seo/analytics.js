// GA4(gtag.js)는 index.html에서 로드된다. 로드 실패·차단 시에도 앱이
// 죽지 않도록 항상 존재 여부를 확인하고 호출한다.

export function gaEvent(name, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
}

export function gaPageView({ path, title }) {
  gaEvent('page_view', {
    page_path: path,
    page_title: title,
    page_location: typeof window !== 'undefined' ? window.location.href : undefined,
  });
}
