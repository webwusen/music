import message from 'antd/es/message';
import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 10000,
});

request.interceptors.request.use((config: any) => {
  return config;
}, (error: any) => {
  return Promise.reject(error);
});

request.interceptors.response.use((response: any) => {
  const res: any = response.data;
  if (res.code === 200) {
    return res;
  } else {
    message.error(res.message)
    return Promise.reject(new Error(res.message || 'Error'))
  }
},
  (error: any) => {
    message.error(error.message)
    return Promise.reject(error);
  },
)

export default request;
