import request from '../utils/request';

interface loginParams {
  email: string;
  password: string
}
// 登录
export function login(params: loginParams): any {
  return request({
    method: 'post',
    url: '/login',
    params
  });
}

interface userDetailParams {
  uid: number;
}
// 获取用户详情
export function getUserDetail(params: userDetailParams): any {
  return request({
    method: 'post',
    url: '/user/detail',
    params
  });
}

// 获取用户信息 , 歌单，收藏，mv, dj 数量
export function getUserSubcount(): any {
  return request({
    method: 'post',
    url: '/user/subcount'
  });
}

// 私人FM
export function getPersonalFm(): any {
  return request({
    method: 'post',
    url: '/personal_fm'
  });
}
interface songDetail {
  ids: string;
}
// 获取歌曲详情
export function getSongDetail(params: songDetail): any {
  return request({
    method: 'get',
    url: '/song/detail',
    params
  })
}
interface songUrl {
  id: string;
}
// 获取歌曲url
export function getSongUrl(params: songUrl): any {
  return request({
    method: 'get',
    url: '/song/url',
    params
  })
}

// 获取歌曲专辑内容
export function getSongAlbum(params: songUrl): any {
  return request({
    method: 'get',
    url: '/album',
    params
  })
}