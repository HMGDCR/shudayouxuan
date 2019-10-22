<template>
    <div class="my-set">
        <van-nav-bar title="系统设置" left-arrow @click-left="onClickLeft" >
    <van-icon name="wap-home-o" size="23px" color="black" slot="left" />
    </van-nav-bar>
        <div class="label flex aic jc-sb ">
            <span>清除缓存</span>
            <span>1010.6KB</span>
        </div>
        <div class="label flex aic jc-sb">意见反馈</div>
        <div class="label flex aic jc-c" style="position:fixed;bottom:0;color:red;" @click="goBack">退出</div>
        <div style="color:gray;margin-top:23px;font-size:13px;text-align:center">版本号 V16.0</div>
    </div>
</template>

<script>
export default {
    methods: {
        onClickLeft() {
            Toast('返回');
        },
        goBack(){
            this.$router.push("/my/center")
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
.my-set{
    background-color:#ccc;
    height:100vh;
}
</style>