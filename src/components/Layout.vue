<template>
    <div class="main">
        <el-container style="height:100%;border: 1px solid #eee" class="layout">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)" class="asidesty">
                <el-menu :default-openeds="[menuIndex]">
                    <el-submenu @click.native="switchs(String(index+1))" :index="`${index+1}`" v-for="(item,index) in routes" :key="index" v-show="!item.meta.hidden">
                        <template slot="title"><i :class="`iconfont ${item.meta.iconfont}`"></i>{{item.meta&&item.meta.title}}</template>
                        <el-menu-item-group>
                            <!-- 遍历 children 的数组 -->
                            <el-menu-item :index="`${index}-${ind}`" v-for="(ite,ind) in item.children || []" :key="ite.path" v-show="!ite.meta.hidden">
                                <router-link :to="`${item.path}/${ite.path}`"><i :class="`iconfont ${ite.meta.iconfont}`"></i>{{ite.meta.title}}</router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <!-- <el-submenu @click.native="switchs('2')" index="2">
                        <template slot="title"><i class="el-icon-office-building"></i>城市导航</template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">
                                <router-link to="/city/add"><i class="el-icon-add-location"></i>添加城市</router-link>
                            </el-menu-item>
                            <el-menu-item index="2-2">
                                <router-link to="/city/list"><i class="el-icon-view"></i>城市列表</router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu @click.native="switchs('3')" index="3">
                        <template slot="title"><i class="el-icon-place"></i>区域模块</template>
                        <el-menu-item-group>
                            <el-menu-item index="3-1">
                                <router-link to="/area/add"><i class="el-icon-add-location"></i>区域添加</router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <el-menu-item index="3-2">
                                <router-link to="/area/list"><i class="el-icon-view"></i>区域列表</router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu @click.native="switchs('4')" index="4">
                        <template slot="title"><i class="el-icon-data-analysis"></i>影院导航</template>
                        <el-menu-item-group>
                            <el-menu-item index="4-1">
                                <router-link to="/cinema/add"><i class="el-icon-message"></i>添加影院</router-link>
                            </el-menu-item>
                            <el-menu-item index="4-2" router-link to="/cinema/add">
                                <router-link to="/cinema/list"><i class="el-icon-message"></i>影院列表</router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu @click.native="switchs('5')" index="5">
                        <template slot="title"><i class="el-icon-menu"></i>demo</template>
                        <el-menu-item-group>
                            <el-menu-item index="5-1">
                                <router-link to="/demo/demo1"><i class="el-icon-message"></i>demo1</router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu> -->
                    
                </el-menu>
            </el-aside>
            <el-container class="mains">
                <el-header style="text-align: right; font-size: 12px; background:#29B2AF" class="headers">
                    <div class="title">
                        <img src="@/assets/img/logo.png" alt="">
                        <span> 卖座后台管理系统 </span>
                    </div>
                    <div>
                        <el-dropdown>
                            <i class="el-icon-setting" style="margin-right: 14px; color:#fff; font-size:16px;"></i>
                            <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item @click.native="logOut">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <span style="font-size:14px; color:#fff;" v-text="username ||'请登录'" @click="logins"></span>
                    </div>
                </el-header>
                <router-view class="mainContent"></router-view>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import {routes} from "@/router/index.js"
export default {
    data () {
        return {
            menuIndex:0,
            routes,
        }
    },
    created(){
        console.log(this.routes)
    },
    methods:{
        switchs(e){
            this.menuIndex = e
            console.log(e)
        },
        // 退出登录
        logOut(){
            let url = "/user/logout"
            this.$axios.get(url).then(res => {
                this.$store.commit("login","")
                this.$router.push("/home")
                this.$message({ type: 'success', message: '退出成功!'})
                // 改变登录状态
                this.$store.commit("loginState",false)
            }).catch(err => {
                this.$message({ type: 'info', message: '退出失败！' })       
            })
        },
        // 当未登录时跳转到登录界面
        logins(){
            if( !this.$store.state.username ){
                this.$router.push("/home")
            }else{
                this.$message({ type: 'success', message: '您已经登录!'});
            }
        }
    },
    computed:{
        // 获取用户名
        username(){
            return this.$store.state.username
        },
        // 获取登录状态
        loginState(){
            return this.$store.state.isLogin
        }
    }
};
</script>

<style scoped lang="less">
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
}
.headers {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9;
    display: flex;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
}
.title {
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
    display: flex;
    align-items: center;
    img {
        width: 35px;
        margin-right: 20px;
    }
}
a {
    text-decoration: none;
    color: #303133;
}
.asidesty {
    position: fixed;
    top: 62px;
    z-index: 8;
    background: #ffffff;
    height: 100%;
}

.mainContent {
    margin-left: 208px;
    margin-top: 68px;
    margin-right: 8px;
}
.iconfont {
    font-size: 18px;
    margin-right: 10px;
    color: gray;
}
</style>