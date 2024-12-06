import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";  // 이 부분 변경

export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({  // 이 부분 변경
      include: path.resolve(__dirname, "./path/to/locales/**"),
    }),
  ],
  base: "/youtaxpro/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});