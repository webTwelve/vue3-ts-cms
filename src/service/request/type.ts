import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface IXyInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (error: any) => any
  responseInterceptors?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorsCatch?: (error: any) => any
}
export interface IXyInterceptorsConfig extends AxiosRequestConfig {
  interceptors?: IXyInterceptors
}
