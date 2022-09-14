import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
import xyRequest from './service'
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
xyRequest.request({
  method: 'GET',
  url: '/get',
  interceptors: {
    requestInterceptors(config) {
      console.log('单独请求的interceptors')
      return config
    }
  }
})
