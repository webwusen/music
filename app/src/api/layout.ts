import request from '../utils/request';

interface loginParams {
  email: string;
  password: string
}
// 登录
export function login(params: loginParams): any {
  return request({
    method: 'get',
    url: '/login',
    params
  });
}

interface userDetailParams {
  uid: number;
}
// 获取用户信息
export function getUserDetail(params: userDetailParams): any {
  return request({
    method: 'post',
    url: '/user/detail',
    params
  });
}

// 私人FM
export function getPersonalFm(): any {
  return request({
    method: 'get',
    url: '/personal_fm'
  });
}