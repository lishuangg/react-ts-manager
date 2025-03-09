import axios, { AxiosError } from 'axios';
import { hideLoading, showLoading } from './loading';
import storage from './storage';
import env from '../config';
import { Result } from '@/types/api';
import { message } from './AntdGlobal';

console.log(env);

// console.log(import.meta.env);

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

    //------ 验证declare
    jQuery('id');
    Dev;
    String.prototype.getLen = function () {
      return this.length;
    };
    'Jack'.getLen();
    // ------

    if (config.showLoading) showLoading();
    const token = storage.get('token');
    if (token) {
      config.headers.Authorization = 'Token::' + token;
    }
    config.headers.icode = '';
    if (env.mock) {
      // config.baseURL = import.meta.env.VITE_MOCK_API;
      config.baseURL = env.mockApi;
    } else {
      // config.baseURL = import.meta.env.VITE_BASE_API;
      config.baseURL = env.baseApi;
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
    const data: Result = response.data;
    if (data.code === 500001) {
      message.error(data.msg);
      storage.remove('token');
      window.location.href = '/login';
    } else if (data.code != 0) {
      if (response.config.showError === false) {
        return Promise.resolve(data);
      } else {
        message.error(data.msg);
        return Promise.reject(data.msg);
      }
    }
    return data.data;
  },
  (error: AxiosError) => {
    hideLoading();
    message.error(error.message);
    return Promise.reject(error);
  }
);

interface IConfig {
  showLoading: boolean;
  showError: boolean;
}

export default {
  get<T>(url: any, params?: object, options: IConfig = { showLoading: true, showError: true }): Promise<T> {
    return instance.get(url, { params, ...options }); // get请求的参数需要params包裹
  },
  post<T>(url: string, params: any, options: IConfig = { showLoading: true, showError: true }): Promise<T> {
    return instance.post(url, params, options);
  }
};
