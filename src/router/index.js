import Vue from "vue"
import Router from "vue-router"
import store from '@/store/index'

Vue.use(Router)

export const routes = [{
        path: "",
        redirect: "/home/homePage",

        meta: {
            title: "首页",
        }
    },
    // 首页
    {
        path: "/home",

        component: () =>

            import ("@/pages/home/Index"),
        children: [{
                path: "homePage",

                component: () =>
                    import ("@/pages/home/children/HomePage"),

            },

            {
                path: "list",
                component: () =>
                    import ("@/pages/home/children/List")
            },

            {
                path: "detail/:productId",
                component: () =>
                    import ("@/pages/home/children/Detail")
            }

        ]
    },
    // 个人中心
    {
        path: "/my",
        component: () =>
            import ("@/pages/my/Index"),
        children: [
            // 个人设置
            {
                path: "set",
                component: () =>
                    import ("@/pages/my/children/Set")
            },
            // 个人中心
            {
                path: "center",
                component: () =>
                    import ("@/pages/my/children/Center")
            },
        ]
    },

    // 订单详情
    {
        path: "/order",
        component: () =>
            import ("@/pages/order/Index"),
        children: [{
                path: "list",
                component: () =>
                    import ("@/pages/order/children/List")
            },
            {
                path: "detail",
                component: () =>
                    import ("@/pages/order/children/Detail")
            },
            {
                //need表示的是，这个页面需要登录的时候，用户才可以跳转到订单页面
                path: "confirm",
                meta: {
                    title: "确认订单",
                    needLogin: true
                },
                component: () =>
                    import ("@/pages/order/children/ConfirmOrder")
            }
        ]
    },
    // 地址
    {
        path: "/address",
        component: () =>
            import ("@/pages/address/Index"),
        children: [{
                path: "add",
                component: () =>
                    import ("@/pages/address/children/Add")
            },
            { //修改地址
                path: "edit/:addressId",
                component: () =>
                    import ("@/pages/address/children/SelectArea")
            },
            {
                path: "list",
                component: () =>
                    import ("@/pages/address/children/List")
            },
            { //新建地址
                path: "area",
                component: () =>
                    import ("@/pages/address/children/SelectArea")
            }
        ]
    },

    { //user组件合并
        path: "/logRe",
        component: () =>
            import ("@/pages/user/logRe"),
        children: [{
                //登录
                path: "login",
                component: () =>
                    import ("@/pages/user/logRe"),
            },
            {
                //注册
                path: "register",
                component: () =>
                    import ("@/pages/user/logRe"),
            },

        ]
    },
    // 支付
    {
        path: "/pay",
        component: () =>
            import ("@/pages/pay/Index"),
        children: [{
                path: "payWay",
                name: "payWay",
                component: () =>
                    import ("@/pages/pay/children/PayWay")
            },
            {
                path: "payMoney/:isShow",
                component: () =>
                    import ("@/pages/pay/children/Pay")
            },
        ]
    },
    // 购物车
    {
        path: "/cart",
        component: () =>
            import ("@/pages/cart/Index"),
        children: [{
                path: "befor",
                component: () =>
                    import ("../pages/cart/children/Befor")
            },
            {
                path: "after",
                component: () =>
                    import ("../pages/cart/children/After")
            }
        ]
    },
    //优惠券
    {
        path: "coupon",
        name: "coupon",
        component: () =>
            import ("@/pages/coupon/coupon")
    },


    // 测试
    {
        path: "/demo",
        name: "demo",
        component: () =>
            import ("@/pages/demo/demo")
    }
]

let router = new Router({
        routes
    })
    // 使用路由守卫
router.beforeEach((to, from, next) => {
    let { needLogin } = to.meta
    let { isLogin } = store.state

    // document.title = title;
    //判断，如果不是登录，且要跳转的页面需要登录的时候，我们是先需要跳转到登录页面的
    if (needLogin && !isLogin && to.path !== '/logRe/login') {
        next({
            path: "/logRe/login"
        })

    } else {
        next()
    }
})


export default router;