import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export const routes = [
    {
        path:"",
        redirect: "/home/homePage",
        meta:{
            title:"首页",
        }
    },
    // 首页
    {
        path:"/home",
        component:() => import("@/pages/home/Index"),
        children:[
            {
                path:"homePage",
                component:() => import("@/pages/home/children/HomePage")
            },
            {
                path:"list",
                component:() => import("@/pages/home/children/List")
            },
            {
                path:"detail",
                component:() => import("@/pages/home/children/Detail")
            }
        ]
    },
    // 个人中心
    {
        path:"/my",
        component:() => import("@/pages/my/Index"),
        children:[
            // 个人设置
            {
                path:"set",
                component:() => import("@/pages/my/children/Set")
            },
            // 个人中心
            {
                path:"center",
                component:() => import("@/pages/my/children/Center")
            },
        ]
    },
    
    // 订单详情
    {
        path :"/order",
        component:() => import("@/pages/order/Index"),
        children:[
            {
                path:"list",
                component:() => import("@/pages/order/children/List")
            },
            {
                path:"detail",
                component:() => import("@/pages/order/children/Detail")
            },
            {
                path:"confirm",
                component:() => import("@/pages/order/children/ConfirmOrder")
            }
        ]
    },
    // 地址
    {
        path:"/address",
        component:() => import("@/pages/address/Index"),
        children:[
            {
                path:"add",
                component:() => import("@/pages/address/children/Add")
            },
            {
                path:"edit",
                component:() => import("@/pages/address/children/Edit")
            },
            {
                path:"list",
                component:() => import("@/pages/address/children/List")
            }
        ]
    },
    // 用户 user
    {
        path:"/user",
        component:() => import("@/pages/user/Index"),
        children:[
            {
                path:"login",
                component:() => import("@/pages/user/children/Login")
            },
            {
                path:"register",
                component:() => import("@/pages/user/children/Register")
            }
        ]
    },
    // 支付
    {
        path:"/pay",
        component:() => import("@/pages/pay/Pay")
    },
    // 购物车
    {
        path:"/cart",
        component:() => import("@/pages/cart/Index")
    }
]

let router = new Router({
    routes
})


export default router;