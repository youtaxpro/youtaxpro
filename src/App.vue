<template>
  <div id="app-layout">
    <header>
      <!-- 로고 / 상단 네비게이션 (필요 없으면 비워두거나 나중에 추가) -->
      <!-- 예: <nav aria-label="Primary">...</nav> -->
    </header>

    <main id="maincontent" role="main">
      <!-- 라우터가 실제 페이지를 여기 안에 렌더링 -->
      <router-view />
    </main>

    <footer>
      <!-- 푸터 내용 (주소, 저작권 등) -->
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
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
  font-family: Arial, Helvetica, sans-serif;
  background-color: #F5F7FA; /* 배경색 변경 - 연한 회색 */
  color: #2D3748;           /* 텍스트 색상 변경 - 짙은 회색 */
  line-height: 1.6;
  min-height: 100vh;
}
</style>
