import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const config = {
    // 本地持久化
    plugins: [createPersistedState()],

    state: {
        total: 0,
        carTotal: [], //购物车的数量

        username: "",
        payWayFlag: false
    },

    getters: {

    },

    mutations: {
        // 支付方式页面的显示与隐藏
        payWayFlagChange(state, payload) {
            state.payWayFlag = payload
        },
        // 获取用户名
        login(state, payload) {

        },
        //商品购买的个数
        // subtraction(state, paload) {
        //     if (state.count > 0) {
        //         state.count = state.count - 1
        //     }
        // },
        // add(state, payload) {
        //     state.count = state.count + 1
        // },
        //购买总数
        addtoCart(state, payload) {
            state.total = state.total + 1
        },
        // 购物车的商品数量
        carTotals(state, payload) {
            //把商品的Id传到购物车中         
            state.carTotal.push(payload)


        }
    },

    actions: {

    },

    modules: {

    }


}



export default new Vuex.Store(config)