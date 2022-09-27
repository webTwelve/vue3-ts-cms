import { defineStore } from 'pinia'
import {
  accountLoginRequest,
  userInfoRequest,
  userRoleRequest
} from '@/service/login/index'
import { mapMenusToRoutes } from '@/utils/map-menus'
import type { IAccount } from '@/service/login/type'
import localCache from '@/utils/cache'
import router from '@/router'
const useCommonStore = defineStore('login', {
  state: (): any => {
    return {
      token: '',
      id: 0,
      userInfo: {},
      userRole: {}
    }
  },
  //开启持久化
  persist: {
    enabled: true,
    strategies: [
      { storage: localStorage, paths: ['token', 'userInfo', 'userRole'] }
    ]
  },
  actions: {
    async accountLoginAction(account: IAccount) {
      // 获取TOKEN
      const res = await accountLoginRequest(account)
      this.token = res.data.token
      this.id = res.data.id
      localCache.setCache('token', res.data.token)
      // 获取用户信息
      const userInfoRes = await userInfoRequest(res.data.id)
      this.userInfo = userInfoRes.data
      localCache.setCache('userInfo', userInfoRes.data)
      // 获取用户菜单
      const userRoleRes = await userRoleRequest(res.data.id)
      this.userRole = userRoleRes.data
      localCache.setCache('userRole', userRoleRes.data)
      router.push('/main')
      const routes = mapMenusToRoutes(this.userRole)
      routes.forEach((item) => router.addRoute('main', item))
    },
    async loadLocalLogin() {
      // 获取用户菜单
      const userRoleRes = await userRoleRequest(this.userInfo.id)
      this.userRole = userRoleRes.data
      router.push('/main')
      const routes = mapMenusToRoutes(this.userRole)
      routes.forEach((item) => router.addRoute('main', item))
    }
  }
})
export function setupStore() {
  useCommonStore().loadLocalLogin()
}
export default useCommonStore
