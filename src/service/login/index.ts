import xyRequest from '../index'
import {
  IAccount,
  IAccountData,
  RootObject,
  IUserInfoRes,
  IUserRole
} from './type'
enum Elogin {
  accountLogin = '/login',
  userInfo = '/users/', //用法 /users/1
  userRole = '/role/' //用法 /role/4/menu
}
export const accountLoginRequest = (account: IAccount) => {
  return xyRequest.post<RootObject<IAccountData>>({
    url: Elogin.accountLogin,
    data: account
  })
}
export const userInfoRequest = (id: number) => {
  return xyRequest.get<RootObject<IUserInfoRes>>({
    url: Elogin.userInfo + id,
    isShowLoading: false
  })
}
export const userRoleRequest = (id: number) => {
  return xyRequest.get<RootObject<IUserRole>>({
    url: Elogin.userRole + id + '/menu',
    isShowLoading: false
  })
}
