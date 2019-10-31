import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import "./assets/css/common.css"
import "./assets/css/reset.css"
// 引入vuex
import store from "./store/index"
//全局引入mixin
import mixin from '@/mixin/mixin'
import $axios from '@/utils/request';
Vue.prototype.$axios = $axios;

//导入适配
import 'amfe-flexible'

// 有赞UI库引入
import Vant from 'vant';
import 'vant/lib/index.css';
// 全局使用mixin
Vue.mixin(mixin)
Vue.use(Vant);

// Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')