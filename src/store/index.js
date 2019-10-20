import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from 'vuex-persistedstate'
import { stat } from "fs"

Vue.use(Vuex)

const config = {
    // 本地持久化
    plugins: [createPersistedState()],
    state:{
        username:"",
        isLogin:false,
        // 清除影院添加的级联选择器数据标志
        isClear:false,
        // 编辑时海报默认选中
        posterDefault:"",
        clearPosterFlag:true
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
        },
        clearCinemaAdd( state,payload ){
            state.isClear = payload
        },
        posterToChild( state,payload ){
            state.posterDefault = payload
        },
        posterClear( state,payload ){
            state.posterDefault = payload
        },
        changeClearPosterFlag( state ){
            state.clearPosterFlag = !state.clearPosterFlag
        }
    },

    actions:{

    },

    modules:{
        
    }


}



export default new Vuex.Store(config)