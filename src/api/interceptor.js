import axios from 'axios'
import {
    message
} from 'antd';
import router from '../router';
import store from '@/store'
// import {
//     getToken
// } from '@/utils/auth'

import globalConfig from '../../static/public/globalConfig'

// create an axios instance
const service = axios.create({
    // baseURL: globalConfig.ip, // api 的 base_url
    timeout: 5000 // request timeout
});
service.defaults.withCredentials = true;

// request interceptor
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log(error) // for debug
        Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        if (response.data.status == 401) {
            Message({
                message: '您暂无权限',
                type: 'error',
                duration: 5 * 1000
            });
            router.replace({
                path: '/login'
            });
        }
        if (response.data.status == -1) {
            Message({
                message: response.data.msg + '!请刷新后重试',
                type: 'error',
                duration: 5 * 1000
            });
            return response
        }
        if (response.data.code == 400) {
            // store.commit('logout', true)
            router.replace({
                path: '/login'
            });
        } else {
            // store.commit('logout', false)
            return response
        }
    },
    error => {
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
);
export default service;