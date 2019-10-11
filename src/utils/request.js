import axios from "axios"

const service = axios.create({
    // 配置基本的路径
    baseURL: 'http://122.51.25.152:3000/admin',
    timeout: 5000 // 请求超时时间(因为需要调试后台,所以设置得比较大)
})

// response 拦截器
service.interceptors.response.use(res => {
    if (res.data.code == 666) {
        return res.data
    } else {
        return Promise.reject(res.data.msg);
    }
},
error => {
    return Promise.reject(error)
});

export default service;