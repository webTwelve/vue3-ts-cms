import request from './request'
import { baseURL } from './request/config'
const xyRequest = new request({
  baseURL,
  timeout: 10000,
  interceptors: {
    requestInterceptors(config) {
      console.log('实例内部请求成功拦截器')
      return config
    },
    requestInterceptorsCatch(error) {
      console.log('实例内部请求失败拦截器')
      return error
    },
    responseInterceptors(config) {
      console.log('实例内部响应成功拦截器')
      return config
    },
    responseInterceptorsCatch(error) {
      console.log('实例内部响应失败拦截器')
      return error
    }
  }
})
export default xyRequest
