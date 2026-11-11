<template>
  <Teleport to="body">
    <div v-if="kakaoQrOpen" class="kq-backdrop" @click.self="close">
      <div ref="dialog" class="kq-dialog" role="dialog" aria-modal="true" aria-labelledby="kq-title" tabindex="-1">
        <button type="button" class="kq-close" aria-label="닫기" @click="close"><X :size="22" aria-hidden="true" /></button>
        <h2 id="kq-title">카카오톡 상담</h2>
        <p class="kq-sub">휴대폰 카메라나 카카오톡으로 QR 코드를 스캔해 주세요.</p>
        <img src="/kakao-qr.webp" alt="Berkeley US Tax 카카오톡 QR 코드" width="300" height="370" />
        <p class="kq-id">카카오톡 ID <strong>berkeleytax</strong></p>
      </div>
    </div>
  </Teleport>
</template>

<script>
import { watch, ref, nextTick, onMounted, onBeforeUnmount } from 'vue';
import { X } from 'lucide-vue-next';
import { kakaoQrOpen } from '../../composables/useKakao';

export default {
  name: 'KakaoQrModal',
  components: { X },
  setup() {
    const dialog = ref(null);
    const close = () => { kakaoQrOpen.value = false; };
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    watch(kakaoQrOpen, async (open) => {
      if (open) { await nextTick(); dialog.value?.focus(); }
    });
    onMounted(() => window.addEventListener('keydown', onKey));
    onBeforeUnmount(() => window.removeEventListener('keydown', onKey));
    return { kakaoQrOpen, close, dialog };
  },
};
</script>

<style scoped>
.kq-backdrop {
  position: fixed;
  inset: 0;
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: rgba(6, 23, 53, 0.6);
  backdrop-filter: blur(3px);
}
.kq-dialog {
  position: relative;
  width: 100%;
  max-width: 360px;
  padding: 1.75rem 1.5rem 1.5rem;
  border-radius: 18px;
  background: #fff;
  color: var(--ink);
  text-align: center;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  outline: none;
}
.kq-close {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 6px;
  border-radius: 8px;
  background: transparent;
  color: var(--muted);
  line-height: 0;
}
.kq-close:hover { background: var(--navy-50); color: var(--ink); }
.kq-dialog h2 { font-size: 1.2rem; color: var(--navy-900); margin-bottom: 0.3rem; }
.kq-sub { font-size: 0.88rem; color: var(--body); margin-bottom: 1rem; }
.kq-dialog img { display: block; width: 100%; height: auto; border-radius: 12px; }
.kq-id { margin-top: 0.9rem; font-size: 0.9rem; color: var(--body); }
.kq-id strong { color: var(--ink); }
</style>
