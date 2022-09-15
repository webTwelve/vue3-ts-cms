import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { IXyInterceptors, IXyInterceptorsConfig } from './type'
class xyRequest {
  instance: AxiosInstance
  interceptors?: IXyInterceptors
  constructor(config: IXyInterceptorsConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )
    this.instance.interceptors.request.use(
      (res) => {
        console.log('全局请求成功拦截')
        return res
      },
      (error) => {
        return error
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('全局响应成功拦截')
        return res
      },
      (error) => {
        return error
      }
    )
  }
  request(config: IXyInterceptorsConfig) {
    if (config.interceptors?.requestInterceptors) {
      config = config.interceptors.requestInterceptors(config)
    }
    this.instance.request(config).then((res) => {
      return res
    })
  }
}
export default xyRequest
