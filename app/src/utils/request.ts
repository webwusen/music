const request = (url: string, config: any) => {
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
};
