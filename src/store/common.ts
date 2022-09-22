import { defineStore } from 'pinia'
import {
  accountLoginRequest,
  userInfoRequest,
  userRoleRequest
} from '@/service/login/index'
import { IAccount } from '@/service/login/type'
import cache from '@/utils/cache'
import router from '@/router'
const useCommonStore = defineStore('login', {
  state: () => {
    return {
      token: '',
      id: 0,
      userInfo: {},
      userRole: {}
    }
  },
  actions: {
    async accountLoginAction(account: IAccount) {
      // 获取TOKEN
      const res = await accountLoginRequest(account)
      this.token = res.data.token
      this.id = res.data.id
      cache.setCache('token', res.data.token)
      // 获取用户信息
      const userInfoRes = await userInfoRequest(res.data.id)
      this.userInfo = userInfoRes.data
      cache.setCache('userInfo', userInfoRes.data)
      // 获取用户菜单
      const userRoleRes = await userRoleRequest(res.data.id)
      this.userRole = userRoleRes.data
      cache.setCache('userRole', userRoleRes.data)
      router.push('/main')
    }
  }
})
export default useCommonStore
