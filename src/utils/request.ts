import { message } from 'antd';
import axios, { AxiosError } from 'axios';

// 创建实例对象
const instance = axios.create({
    baseURL: '/api',
    timeout: 8000,
    timeoutErrorMessage: '请求超时，请稍后再试',
    withCredentials: true
});

// 请求拦截器 两个参数 拦截请求、捕捉报错
instance.interceptors.request.use(
    config => {
        console.log('请求拦截器');
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = token;
        }
        return { ...config };
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// 响应拦截器
instance.interceptors.response.use(response => {
    console.log('响应拦截器');
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
});

export default {
    get(url: any, params: any) {
        return instance.get(url, { params }); // get请求的参数需要params包裹
    },
    post(url: string, params: any) {
        return instance.post(url, params);
    }
};
