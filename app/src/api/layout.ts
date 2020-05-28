import request from '../utils/request';

interface loginParams {
  email: string;
  password: string
}

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

export function getUserDetail(params: userDetailParams): any {
  return request({
    method: 'get',
    url: '/user/detail',
    params
  });
}