import message from 'antd/es/message';
import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 10000,
});

request.interceptors.request.use((config: any) => {
  return config;
}, (error: any) => {
  return Promise.reject(error.msg || error);
});

request.interceptors.response.use((response: any) => {
  const res: any = response.data;
  if (res.code === 200) {
    return res;
  } else {
    message.error(res.msg)
    return Promise.reject(res.msg || res)
  }
},
  (error: any) => {
    message.error(error.toString())
    return Promise.reject(error.msg || error);
  },
)

export default request;
