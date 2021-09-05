import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// style
import '@fortawesome/fontawesome-pro/css/all.css'
import './assets/scss/index.scss'

createApp(App).use(store).use(router).mount('#app')
