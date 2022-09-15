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
        // if (!res.data.success) {
        //   console.log('错误信息')
        // }
        return res.data
      },
      (error) => {
        if (error.status == '404') {
          console.log('错误信息')
        }
        return error
      }
    )
  }
  request<T>(config: IXyInterceptorsConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get<T>(config: IXyInterceptorsConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: IXyInterceptorsConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
}
export default xyRequest
