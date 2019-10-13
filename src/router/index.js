import Vue from "vue"
import Router from "vue-router"
import store from "../store/index"
import Layout from "../components/Layout"

Vue.use(Router)

export const routes = [
    {
        path:"",
        redirect: "/home",
        mata:{
            title:"重定向",
            hidden:true,
            iconfont:"icon-shouye"
        }
    },
    {
        path:"/home",
        component:() => import("@/pages/home/Index"),
        mata:{
            title:"首页",
            hidden:true,
            iconfont:"icon-shouye"
        }
    },
    {
        path:"/city",
        component:Layout,
        mata:{
            title:"城市导航",
            hidden:false,
            iconfont:"icon-chengshi"
        },
        children:[
            {
                path:"add",
                component:() => import("@/pages/city/Add"),
                mata:{
                    title:"添加城市",
                    hidden:false,
                    iconfont:"icon-lvzhou_tianjiazizhanghaodequyushouquan"
                }
            },
            {
                path:"list",
                component:() => import("@/pages/city/List"),
                mata:{
                    title:"城市列表",
                    hidden:false,
                    iconfont:"icon-liebiao"
                }
            },
            {
                path:"edit/:cityId",
                component:() => import("@/pages/city/Edit"),
                mata:{
                    title:"城市修改",
                    hidden:true,
                    iconfont:"icon-xiugai07"
                }
            }
        ]
    },
    {
        path:"/area",
        component:Layout,
        mata:{
            title:"区域导航",
            hidden:false,
            iconfont:"icon-quyu"
        },
        children:[
            {
                path:"add",
                component:() => import("@/pages/area/AreaAdd"),
                mata:{
                    title:"区域添加",
                    hidden:false,
                    iconfont:"icon-lvzhou_tianjiazizhanghaodequyushouquan"
                }
            },
            {
                path:"list",
                component:() => import("@/pages/area/AreaList"),
                mata:{
                    title:"区域列表",
                    hidden:false,
                    iconfont:"icon-liebiao"
                }
            },
            {
                path:"edit/:areaId",
                component:() => import("@/pages/area/Edit"),
                mata:{
                    title:"区域修改",
                    hidden:true,
                    iconfont:"icon-xiugai07"
                }
            }
        ]
    },
    {
        path:"/cinema",
        component:Layout,
        mata:{
            title:"影院导航",
            hidden:false,
            iconfont:"icon-yingyuana"
        },
        children:[
            {
                path:"add",
                component:() => import("@/pages/cinema/Add"),
                mata:{
                    title:"影院添加",
                    hidden:false,
                    iconfont:"icon-lvzhou_tianjiazizhanghaodequyushouquan"
                }
            },
            {
                path:"list",
                component:() => import("@/pages/cinema/List"),
                mata:{
                    title:"影院列表",
                    hidden:false,
                    iconfont:"icon-liebiao"
                }
            }
        ]
    },
    {
        path:"/demo",
        component:Layout,
        mata:{
            title:"demo",
            iconfont:"icon-xiugai07"
        },
        children:[
            {
                path:"demo1",
                component:() => import("@/pages/demo/demo1"),
                mata:{
                    title:"demo01",
                    hidden:false,
                    iconfont:"icon-xiugai07"
                },
            }
        ]
    }
]

let router = new Router({
    routes
})

// 路由守卫
// 获取登录状态 isLogin 的值 this.$store.state
// router.beforeEach((to, from, next) => {
//     //修改网页标题
//     document.title = to.mata.title;

//     let isLogin = store.state.isLogin;
//     // 如果没有登录，并且去的页面不是登录页面，就跳转到电脑关了页面
//     if( !isLogin && to.path !== "/home" ){
//         next("/home");
//     }else{
//         next()
//     }
// })

export default router