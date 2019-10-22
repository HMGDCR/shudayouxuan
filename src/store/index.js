import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const config = {
    // 本地持久化
    plugins: [createPersistedState()],
    
    state:{
        username:"",
        payWayFlag:false
    },

    getters:{
        
    },

    mutations:{
        // 支付方式页面的显示与隐藏
        payWayFlagChange(state,payload){
            state.payWayFlag = payload
        },
        // 获取用户名
        login(state,payload){
            
        }
    },

    actions:{

    },

    modules:{
        
    }


}



export default new Vuex.Store(config)