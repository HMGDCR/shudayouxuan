import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import "./assets/css/common.css"
import "./assets/css/reset.css"
import store from "./store/index"

import $axios from '@/utils/request';
Vue.prototype.$axios = $axios;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,store
}).$mount('#app')
