import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: path.resolve(__dirname, "./path/to/locales/**"),
      runtimeOnly: false
    }),
  ],
  base: "/", // 여기를 수정! 커스텀 도메인을 사용할 때는 그냥 "/"로 설정
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});