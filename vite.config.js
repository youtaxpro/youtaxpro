import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
// 이미지 최적화 플러그인 import
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: path.resolve(__dirname, "./path/to/locales/**")
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 70,
      },
      pngquant: {
        quality: [0.6, 0.8],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
      webp: {
        quality: 75,
        lossless: false,
      },
    }),
  ],

   // 🔥 빌드 오류 해결 핵심 추가!
  assetsInclude: ['**/*.gz', '**/*.webp', '**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.svg'],
  
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined  // 청크 분할 비활성
      }
    },
    assetsInlineLimit: 4096,  // 작은 이미지 인라인
  },
  
  base: "/", // 여기를 수정! 커스텀 도메인을 사용할 때는 그냥 "/"로 설정
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});