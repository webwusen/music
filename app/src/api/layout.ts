import request from '../utils/request';

interface loginParams {
  email: string;
  password: string
}
export function login(params: loginParams): any {
  return request({
    method: 'get',
    url: '/login',
    params: params
  });
}