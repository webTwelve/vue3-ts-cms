import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface IXyInterceptors<T = AxiosResponse> {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (error: any) => any
  responseInterceptors?: (res: T) => T
  responseInterceptorsCatch?: (error: any) => any
}
export interface IXyInterceptorsConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: IXyInterceptors<T>
}
