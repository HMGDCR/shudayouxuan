<template>
    <div class="my-set">
        <van-nav-bar title="系统设置" left-arrow @click-left="onClickLeft" >
    <van-icon name="wap-home-o" size="23px" color="black" slot="left" />
    </van-nav-bar>
        <div class="label flex aic jc-sb border-bottom">
            <span>清除缓存</span>
            <span class="kb">1010.6 KB</span>
        </div>
        <div class="label flex aic jc-sb">意见反馈</div>
        <div class="label flex aic jc-c loginOut" @click="goBack">退出</div>
        <div class="vs">版本号 V1.6.0</div>
    </div>
</template>

<script>
export default {
    methods: {
        onClickLeft() {
            this.$router.push("/my/center")
        },
        goBack(){
            console.log(2222)
            this.$dialog.confirm({
            title: '提示',
            message: '退出登录'
            }).then(() => {
            this.$router.push("/my/center")
            // on confirm
            }).catch(() => {
            // on cancel
            });
        }
    }
}
</script>

<style>
.label{
    height:49px;
    width:100%;
    padding:0 15px;
    background-color:white;
}
.kb{
    font-size: 13px;
    color: #bdc0c5;
}
.border-bottom{
    border-bottom:1px solid #f3f1f1;
}
.my-set{
    background-color:#f4f4f4;;
    height:100vh;
}
.vs{
    color:#bdc0c5;
    margin-top:23px;
    font-size:13px;
    text-align:center;
}
.loginOut{
    position:fixed;
    bottom:0;
    color:#c03131;
}
.van-button__text{
    color:black;
}
.van-dialog{
    border-radius:0;
}
</style>