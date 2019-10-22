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
            <div class="titlePay">苏打优选商品</div>
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
            <van-button type="primary" size="large" @click="goHome">立即支付</van-button>
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
.navPay .van-nav-bar {
    height: 44px;
    line-height: 44px;
}
.payment {
    width: 100vw;
    height: 100vh;
    background-color: #f4f4f4;
    .van-nav-bar__title {
        font-size: 17px;
    }
    .van-icon,
    .van-icon::before {
        color: #565958;
        font-size: 23px;
        font-weight: 100;
    }
    .ctxPay {
        width: 100vw;
        text-align: center;
        .titlePay {
            margin-top: 20px;
            font-size: 15px;
            color: #2c3e50;
            height: 22px;
            line-height: 22px;
        }
        .pricePay {
            margin-top: 20px;
            color: #2d3e4f;
            font-size: 30px;
            font-weight: 700;
            height: 45px;
            line-height: 45px;
        }
    }
    .context {
        width: 100vw;
        border-top: 1px solid #eae8e8;
        border-bottom: 1px solid #eae8e8;
        margin-top: 10px;
        color: #2c3e50;
        .collectPay {
            height: 49px;
            line-height: 49px;
            font-size: 15px;
            margin: 0 15px;
            display: flex;
            justify-content: space-between;
        }
    }
    .btnPay {
        width: 97.5%;
        margin: 0 auto;
        .van-button {
            border-radius: 10px;
            margin-top: 28px;
            background: #04be01;
        }
    }
    .van-button {
        height: 45px;
        line-height: 45px;
        font-size: 15px;
    }
}
</style>