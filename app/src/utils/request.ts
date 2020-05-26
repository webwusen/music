import message from 'antd/es/message';
import axios from 'axios';

// const baseURL:string='http://localhost:3000'

// const baseUrl = 'http://localhost:3000';

// interface Params {
//   [propName: string]: any;
// }

// interface paramsObj {
//   method: string;
//   url: string;
//   timeout?: number;
//   body?: any;
// }

// let controller = new AbortController();
// let signal = controller.signal;

// // 超时promise
// const timeoutPromise = (timeout: number = 10000) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(new Response('timeout', { status: 504, statusText: 'timeout' }));
//       // 终止fetch请求
//       controller.abort();
//     }, timeout);
//   });
// };

// const requestPromise = (method: string, url: string, body: Params) => {
//   let Nmethod: string = method.toUpperCase();
//   let Nurl: string = baseUrl + url;
//   let config: Params = {
//     signal: signal,
//     method: Nmethod
//   };
//   let Nconfig: Params = {};
//   if (Nmethod === 'GET') {
//     // get请求
//     if (typeof body !== 'undefined') {
//       Nurl += '?';
//       for (let key in body) {
//         Nurl += `${key}=${body[key]}&`;
//       }
//       Nurl = Nurl.substring(0, Nurl.lastIndexOf('&'));
//     }
//   } else {
//     Nconfig = {
//       headers: {
//         'Content-type': 'application/json'
//       },
//       data: JSON.stringify(body)
//     };
//   }
//   return new Promise((resolve, reject) => {
//     fetch(Nurl, { ...config, ...Nconfig })
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         } else {
//           return Promise.reject(`${res.status}:${res.statusText}`);
//         }
//       })
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((err) => {
//         message.error(err);
//         return reject(err);
//       });
//   });
// };

// const _request = (params: paramsObj) => {
//   console.log(params);
//   return Promise.race([
//     timeoutPromise(params.timeout),
//     requestPromise(params.method, params.url, params.body)
//   ]);
// };

// interface requestParams {
//   url: string;
//   timeout?: number;
//   body?: any;
// }
// const request = {
//   get: (params: requestParams) => _request({ method: 'GET', ...params }),
//   post: (params: requestParams) => _request({ method: 'POST', ...params })
// };

// withCredentials: true;
const request = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
});

request.interceptors.request.use((config: any) => {
  return config;
}, function (error: any) {
  return Promise.reject(error);
});

request.interceptors.response.use((response: any) => {
  const res: any = response.data;
  if (res.code !== 200) {
    message.error(res.message)
  }
  return response;
},
  (error: any) => {
    return Promise.reject(error);
  },
)
export default request;
