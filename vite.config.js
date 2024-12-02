import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/youtaxpro/',  // GitHub Pages를 위한 base URL 설정
})