<template>
  <div id="app-layout">
    <main id="maincontent" role="main">
      <!-- 라우터가 실제 페이지를 여기 안에 렌더링 -->
      <router-view />
    </main>

    <!-- 전 페이지 공통 상담 연락처 버튼 -->
    <ContactFab />
  </div>
</template>

<script>
import ContactFab from "./components/common/ContactFab.vue";

export default {
  name: "App",
  components: { ContactFab },
};
</script>

<style>
@import "./assets/styles/common.css";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* body 대신 루트 컨테이너에 스타일 주는 걸 권장 */
#app-layout {
  font-family: var(--font-sans);
  background-color: #F5F7FA; /* 배경색 변경 - 연한 회색 */
  color: #2D3748;           /* 텍스트 색상 변경 - 짙은 회색 */
  line-height: 1.6;
  min-height: 100vh;
}
</style>
