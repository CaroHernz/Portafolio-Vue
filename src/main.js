import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './firebase'
import './style.css'
import 'bulma/css/bulma.css'

createApp(App).use(createPinia()).use(router).mount('#app')
