import axios from "axios" //下载的插件在node_modules里面 要用什么要import axios from 'axios'怎么去导入

const service = axios.create({ //创建一个axios实例(对象)，对象里面包含了get和post方法（请求）
    // 配置基本的路径
    // baseURL: 'http://122.51.25.152:3000/admin',
    baseURL: 'http://test.huruqing.cn:3007/',
    timeout: 5000 // 请求超时时间(因为需要调试后台,所以设置得比较大)
})

// response 拦截器
service.interceptors.response.use(res => { //后台给我们返回的信息
        if (res.data.code == 666) {
            return res.data
        } else {
            return Promise.reject(res.data.msg); //msg: "success"
        }
    },
    error => {
        return Promise.reject(error)
    });

export default service;