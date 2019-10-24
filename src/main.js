import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import "./assets/css/common.css"
import "./assets/css/reset.css"
import store from "./store/index"

import $axios from '@/utils/request';
Vue.prototype.$axios = $axios;

// 有赞UI库引入
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')