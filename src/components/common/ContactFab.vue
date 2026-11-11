<template>
  <div class="contact-fab" role="complementary" aria-label="상담 연락처">
    <a
      class="fab-item fab-phone"
      href="tel:+821059094868"
      aria-label="전화 상담 010-5909-4868"
      @click="track('phone')"
    >
      <Phone :size="20" aria-hidden="true" />
      <span class="fab-label">전화 상담</span>
    </a>

    <!-- 휴대폰: 카카오톡 앱을 바로 연다 / PC: 휴대폰으로 스캔할 QR 페이지를 연다 -->
    <a
      class="fab-item fab-kakao"
      :href="kakaoWebUrl"
      target="_blank"
      rel="noopener"
      aria-label="카카오톡으로 상담하기"
      @click="openKakao"
    >
      <MessageCircle :size="20" aria-hidden="true" />
      <span class="fab-label">카톡 상담</span>
    </a>

    <a
      class="fab-item fab-email"
      href="mailto:amy@youtaxpro.com"
      aria-label="이메일 문의 amy@youtaxpro.com"
      @click="track('email')"
    >
      <Mail :size="20" aria-hidden="true" />
      <span class="fab-label">이메일</span>
    </a>
  </div>
</template>

<script>
import { Phone, Mail, MessageCircle } from 'lucide-vue-next';
import { gaEvent } from '../../seo/analytics';
import { CONTACT } from '../../data/site';

export default {
  name: 'ContactFab',
  components: { Phone, Mail, MessageCircle },
  data() {
    return { kakaoWebUrl: `https://qr.kakao.com/talk/${CONTACT.kakaoQrId}` };
  },
  methods: {
    // qr.kakao.com 은 휴대폰에서 중간 페이지를 거쳐 앱을 연다. 같은 앱 주소로 바로 이동해 그 단계를 건너뛴다.
    openKakao(event) {
      this.track('kakao');
      const ua = navigator.userAgent || '';
      const id = CONTACT.kakaoQrId;
      const isAndroid = /Android/i.test(ua);
      const isIOS = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      if (!isAndroid && !isIOS) return; // PC: 기본 링크(QR 페이지)
      event.preventDefault();
      if (isAndroid) {
        const store = encodeURIComponent('https://play.google.com/store/apps/details?id=com.kakao.talk');
        window.location.href =
          `intent://viewer?#Intent;scheme=kakaotalkqrcode%3A%2F%2F${id};` +
          'action=android.intent.action.SEND;category=android.intent.category.BROWSABLE;' +
          `package=com.kakao.talk;S.browser_fallback_url=${store};end;`;
      } else {
        window.location.href = `kakaotalkqrcode://${id}`;
        // 앱이 없으면 페이지가 그대로 보이므로 App Store로 안내
        setTimeout(() => {
          if (!document.hidden) window.location.href = 'https://apps.apple.com/kr/app/id362057947';
        }, 1500);
      }
    },
    track(method) {
      gaEvent('contact_click', { method });
    },
  },
};
</script>

<style scoped>
.contact-fab {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 900;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
}

.fab-item {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 48px;
  padding: 0 16px 0 14px;
  border-radius: 999px;
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
  transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;
  white-space: nowrap;
}

.fab-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.24);
}

.fab-item:active {
  transform: translateY(0);
}

.fab-phone {
  background: #0047ab;
}

.fab-kakao {
  background: #fee500;
  color: #191600;
}

.fab-email {
  background: #4b5563;
}

/* 모바일: 아이콘만, 원형 버튼 */
@media (max-width: 640px) {
  .contact-fab {
    right: 12px;
    bottom: 12px;
    gap: 8px;
  }

  .fab-item {
    width: 48px;
    padding: 0;
    justify-content: center;
  }

  .fab-label {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fab-item {
    transition: none;
  }
}
</style>
