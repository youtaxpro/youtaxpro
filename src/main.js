import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'

const app = createApp(App)

// 먼저 모든 플러그인을 등록
app.use(i18n)
app.use(router)

// 마지막으로 마운트
app.mount('#app')