<template>
   <div class="mains">
        <div class="login">
            <p>卖座网后台管理系统</p>
            <el-input placeholder="请输入用户名" prefix-icon="el-icon-s-custom" v-model="account"> </el-input>
            <el-input placeholder="请输入密码" v-model="inputPwd" show-password @keyup.enter.native="submits"></el-input>
            <div class="loginButton">
                <el-button class="butt" type="success" @click.native="submitForm">登录</el-button>
                <el-button class="butt" type="info" @click.native="resetForm">取消</el-button>
            </div>
        </div>
   </div>
</template>

<script>
export default {
    data(){
        return {
            account:"zhangpeng",
            inputPwd:"123"
        }
    },
    methods: {
        // 回车提交
        submits(){
            this.submitForm()
        },
        submitForm() {
            let data = {
                username:this.account,
                password:this.inputPwd
            }
            let url = "/user/login"
            this.$axios.post(url,data).then(res => {
                this.$message({ type: 'success', message: '登录成功!'})
                // 保存用户名
                this.$store.commit("login",this.account)
                // 修改登录状态
                this.$store.commit("loginState",true)
                // 登录后跳转的目标位置
                this.$router.push("/city/showHome")
            }).catch(err => {
                this.$message({ type: 'info', message: '登录失败！' })        
            })
        },
        resetForm() {
            this.account = "",
            this.inputPwd = ""
        }
    }
}
</script>

<style scoped lang="less">
.mains {
    height: 100vh;
    background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570801393588&di=3c48ccbe82a2b6a517659c8f6e2a5b63&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F72b055b1df966883f629d1f1b3ddf8c0.jpeg%40wm_2%2Ct_55m%2B5a625Y%2B3L%2BW5sumUheWOhuWPsg%3D%3D%2Cfc_ffffff%2Cff_U2ltSGVp%2Csz_64%2Cx_40%2Cy_40') no-repeat;
    background-size: cover;
}
.login {
    width: 400px;
    height: 500px;
    padding-top: 260px;
    margin:  0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    p {
        font-size: 26px;
        font-weight: 700;
        text-align: center;
        color: #ffffff;
        margin-bottom: 30px;
    }
}
.loginButton {
    display: flex;
    .butt {
        flex: 1;
    }
}
</style>