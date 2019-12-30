import { rejects } from 'assert';

/* const request = (url: string, config: any) => {
  return fetch(url, config)
    .then((res: any) => {
      if (!res.code) {
        throw new Error('接口返回异常');
      }
      return res;
    })
    .catch((err: any) => {
      return Promise.reject(err);
    });
};

export const get = (url: string) => {
  return request(url, { method: 'GET' });
};

export const post = (url: string, data: any) => {
  return request(url, {
    data: JSON.stringify(data),
    headers: { 'content-type': 'application/json' },
    method: 'POST'
  });
}; */

interface Params {
  [propName: string]: any;
}

interface paramsObj {
  method: string;
  url: string;
  timeout?: number;
  body?: any;
}

let controller = new AbortController();
let signal = controller.signal;

// 超时promise
const timeoutPromise = (timeout: number = 10000) => {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve(new Response('timeout', { status: 504, statusText: 'timeout' }));
      // 终止fetch请求
      controller.abort();
    }, timeout);
  });
};

const requestPromise = (method: string, url: string, body: Params) => {
  let Nmethod: string = method.toUpperCase();
  let Nurl: string = url;
  let config: Params = {
    signal: signal,
    method: Nmethod
  };
  let Nconfig: Params = {};
  if (Nmethod === 'GET') {
    // get请求
    if (typeof body !== 'undefined') {
      Nurl += '?';
      for (let key in body) {
        Nurl += `${key}=${body[key]}&`;
      }
      Nurl = Nurl.substring(0, Nurl.lastIndexOf('&'));
    }
  } else {
    Nconfig = {
      headers: {
        'Content-type': 'application/json'
      },
      data: JSON.stringify(body)
    };
  }
  return fetch(Nurl, { ...config, ...Nconfig });
};

const _request = (params: paramsObj) => {
  return () => {
    Promise.race([
      timeoutPromise(params.timeout),
      requestPromise(params.method, params.url, params.body)
    ]);
  };
};

interface requestParams {
  url: string;
  timeout?: number;
  body?: any;
}
const request = {
  get: (params: requestParams) => _request({ method: 'GET', ...params }),
  post: (params: requestParams) => _request({ method: 'POST', ...params })
};
export default request;
