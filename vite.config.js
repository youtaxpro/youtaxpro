import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/youtaxpro/',  // 이미 설정되어 있네요. 이걸 그대로 사용하시면 됩니다
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})