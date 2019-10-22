<template>
    <div class="payment">
        <!-- 导航栏 -->
        <div class="navPay">
            <van-nav-bar title="微信支付" left-arrow>
                <van-icon name="wap-home-o" slot="left" style="color:black;" @click="goHome" />
            </van-nav-bar>
        </div>
        <!-- 商品信息 -->
        <div class="ctxPay">
            <div class="titlePay">苏打优先商品</div>
            <div class="pricePay">￥0</div>
        </div>
        <!-- 收款方 -->
        <div class="context">
            <div class="collectPay">
                <div class="leftPay">收款方</div>
                <div class="rightPay">苏打优选</div>
            </div>
        </div>
        <!-- 支付按钮 -->
        <div class="btnPay">
            <van-button type="primary" size="large" @click="goHome">立刻支付</van-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        goHome(){
            this.$router.push("/home/homePage")
        }
    }
};
</script>

<style lang="less" scoped>
.payment {
    width: 100vw;
    height: 100vh;
    background-color: #f4f4f4;
    .van-nav-bar__title {
        font-size: 20px;
    }
    .van-icon,
    .van-icon::before {
        color: black;
        font-size: 25px;
    }
    .ctxPay {
        width: 100vw;
        text-align: center;
        .titlePay {
            margin-top: 30px;
            font-size: 20px;
            font-weight: 600;
        }
        .pricePay {
            margin-top: 30px;
            color: #2d3e4f;
            font-size: 35px;
            font-weight: 600;
        }
    }
    .context {
        width: 100vw;
        border-top: 1px solid #eae8e8;
        border-bottom: 1px solid #eae8e8;
        margin-top: 30px;
        .collectPay {
            height: 50px;
            line-height: 50px;
            font-size: 14px;
            margin: 0 20px;
            display: flex;
            justify-content: space-between;
        }
    }
    .btnPay {
        width: 96%;
        margin: 0 auto;
        .van-button {
            border-radius: 10px;
            margin-top: 35px;
        }
    }
}
</style>