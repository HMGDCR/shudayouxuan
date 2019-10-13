import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const config = {
    // 本地持久化
    plugins: [createPersistedState()],
    state:{
        username:"",
        isLogin:false
    },

    getters:{
        
    },

    mutations:{
        // 获取用户名
        login(state,payload){
            state.username = payload
        },
        // 获取登录状态
        loginState(state,payload){
            state.isLogin = payload
        }
    },

    actions:{

    },

    modules:{
        
    }


}



export default new Vuex.Store(config)