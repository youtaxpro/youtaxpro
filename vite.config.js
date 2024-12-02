import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/youtaxpro/',  // GitHub Pages를 위한 base URL 설정
  resolve: {
    alias: {
      // 여기에 필요한 별칭 설정을 추가할 수 있습니다
    }
  }
})