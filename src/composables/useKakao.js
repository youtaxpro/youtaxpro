import { ref } from 'vue';
import { CONTACT } from '../data/site';
import { gaEvent } from '../seo/analytics';

// 카카오톡 상담 열기: 휴대폰은 카카오톡 앱을 바로 열고, PC는 QR 코드 창을 띄운다.
export const kakaoQrOpen = ref(false);
export const kakaoWebUrl = `https://qr.kakao.com/talk/${CONTACT.kakaoQrId}`;

export function openKakao(event) {
  gaEvent('contact_click', { method: 'kakao' });
  const ua = navigator.userAgent || '';
  const id = CONTACT.kakaoQrId;
  const isAndroid = /Android/i.test(ua);
  const isIOS = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if (event) event.preventDefault();

  if (isAndroid) {
    const store = encodeURIComponent('https://play.google.com/store/apps/details?id=com.kakao.talk');
    window.location.href =
      `intent://viewer?#Intent;scheme=kakaotalkqrcode%3A%2F%2F${id};` +
      'action=android.intent.action.SEND;category=android.intent.category.BROWSABLE;' +
      `package=com.kakao.talk;S.browser_fallback_url=${store};end;`;
  } else if (isIOS) {
    window.location.href = `kakaotalkqrcode://${id}`;
    // 앱이 없으면 페이지가 그대로 보이므로 App Store로 안내
    setTimeout(() => {
      if (!document.hidden) window.location.href = 'https://apps.apple.com/kr/app/id362057947';
    }, 1500);
  } else {
    kakaoQrOpen.value = true; // PC: 휴대폰으로 스캔할 QR 코드
  }
}
