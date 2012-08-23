import {createApp} from 'vue'
import App from './App.vue'
import echoRouter from './router'
import i18n from './locales'

const app = createApp(App)
app.use(echoRouter)
app.use(i18n)
app.mount('#app')