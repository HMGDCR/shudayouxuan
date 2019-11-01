import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from 'vuex-persistedstate'
//导入adress模块
import address from './address/address'

Vue.use(Vuex)

const config = {
    // 本地持久化
    plugins: [createPersistedState()],

    state: {
        total: 0,
        cartNum: 0, //购物车的数量
        totalPrice: 0, //结算的总价格   
        username: "",
        phone: "",
        isLogin: false,
        payWayFlag: false,
        token: "",
        SeletCarNum: [], //存放选中购物车的Id,当购物车Befor的商品被选中的时候，使用
        preOrderId: "", //预订单的Id,
        allFee: 0, //实际支付
        discount: 0, //优惠金额      
        addressInfo: "", //用户的地址
        payMoney: 0, //修改后的实际金额
        orderId: "", //订单的Id,
        editaddress: {}, //修改地址

        demoUserName: "李白"



    },

    getters: {
        token: (state) => state.token
    },

    mutations: {
        demoUserName(state, payload) {
            state.demoUserName = payload
        },
        // 修改地址
        editaddress(state, payload) {
            state.editaddress = payload
        },
        //订单的Id
        orderId(state, payload) {
            state.orderId = payload
        },
        payMoney(state, payload) {
            state.payMoney = payload
        },
        //优惠金额
        discount(state, payload) {
            state.discount = payload
        },

        //用户地址
        addressInfo(state, payload) {
            state.addressInfo = payload
        },

        //最后支付
        allFee(state, payload) {
            state.allFee = payload
        },
        // 修改预订单Id
        updataPreOrderId(state, payload) {
            state.preOrderId = payload
        },
        //当我们支付成功之后，删除我们已经购买商品的购物车
        SeletCarNum(state, payload) {
            state.SeletCarNum = payload
        },

        //结算的总价格
        totalPrice(state, payload) {
            state.totalPrice = payload
        },
        //用户名
        username(state, payload) {
            state.username = payload
        },
        //手机号码
        phone(state, payload) {
            state.phone = payload
        },
        //登录状态
        isLogin(state, payload) {
            state.isLogin = payload
        },

        //updateToken
        updateToken(state, payload) {
            state.token = payload
        },

        // 支付方式页面的显示与隐藏
        payWayFlagChange(state, payload) {
            state.payWayFlag = payload
        },
        // 获取用户名
        login(state, payload) {

        },

        //购买总数
        addtoCart(state, payload) {
            state.total = state.total + 1
        },
        // 购物车的商品数量
        cartNum(state, payload) {
            //把商品的Id传到购物车中         
            state.cartNum = payload


        }
    },

    actions: {

    },

    modules: {
        address
    }


}



export default new Vuex.Store(config)