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

    <a
      class="fab-item fab-kakao"
      href="/berkeley-us-tax.vcf"
      download
      title="번호를 저장하면 카카오톡으로 상담할 수 있습니다"
      aria-label="전화번호 저장 후 카카오톡 상담"
      @click="track('kakao')"
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

export default {
  name: 'ContactFab',
  components: { Phone, Mail, MessageCircle },
  methods: {
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
