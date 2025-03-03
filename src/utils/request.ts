import { message } from 'antd';
import axios, { AxiosError } from 'axios';
import { hideLoading, showLoading } from './loading';
import storage from './storage';

console.log(import.meta.env);

// 创建实例对象
const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 8000,
  timeoutErrorMessage: '请求超时，请稍后再试',
  withCredentials: true
});

// 请求拦截器 两个参数 拦截请求、捕捉报错
instance.interceptors.request.use(
  config => {
    console.log('请求拦截器');
    showLoading();
    const token = storage.get('token');
    if (token) {
      config.headers.Authorization = token;
    }
    if(import.meta.env.VITE_MOCK === true) {
      config.baseURL = import.meta.env.VITE_MOCK_API;
    }else {
      config.baseURL = import.meta.env.VITE_BASE_API;
    }
    return { ...config };
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  response => {
    console.log('响应拦截器');
    hideLoading();
    const { data } = response;
    if (data.code === 500001) {
      message.error(data.msg);
      localStorage.removeItem('token');
      window.location.href = '/login';
    } else if (data.code != 0) {
      message.error(data.msg);
      return Promise.reject(data.msg);
    }
    return data.data;
  },
  (error: AxiosError) => {
    hideLoading();
    message.error(error.message);
    return Promise.reject(error);
  }
);

export default {
  get<T>(url: any, params?: object): Promise<T> {
    return instance.get(url, { params }); // get请求的参数需要params包裹
  },
  post<T>(url: string, params: any): Promise<T> {
    return instance.post(url, params);
  }
};
