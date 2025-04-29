<template>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './assets/styles/common.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #F5F7FA; /* 배경색 변경 - 연한 회색 */
  color: #2D3748; /* 텍스트 색상 변경 - 짙은 회색 */
  line-height: 1.6;
}
</style>
