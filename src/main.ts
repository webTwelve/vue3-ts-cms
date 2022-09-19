import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
import 'normalize.css'
import './assets/style/index.less'
import globalElement from './global/register-element'
const app = createApp(App)

app.use(globalElement)
app.use(router)
app.use(store)
app.mount('#app')
