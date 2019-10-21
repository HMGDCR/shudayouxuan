<template>
   <div class="pay">
        <div class="topTitle">
            <van-icon name="wap-home-o" />
            <span>微信支付</span>
            <span class="empty"></span>
        </div>
        <p class="goodClass">苏打优选商品</p>
        <p class="money">￥0</p>
        <div class="payWay">
            <span>收款方法</span>
            <span>苏打优选</span>
        </div>
        <p class="immediatePay">立即支付</p>
   </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    methods:{
        
    }
}
</script>

<style scoped lang="less">
.pay {
    height: 100vh;
    background: #f4f4f4;
    .topTitle {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 17px;
        height: 44px;
        background: #ffffff;
        .van-icon {
            width: 41.25px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
        }
        .empty {
            height: 44px;
            width: 63.75px;
        }
    }
    .goodClass{
        font-size: 15px;
        height: 22px;
        line-height: 22px;
        text-align: center;
        margin: 22px;
        color: #2c3e50;
        
    }
    .money {
        height: 45px;
        line-height: 45px;
        font-size: 27px;
        color: #2c3e50;
        font-weight: 700;
        text-align: center;
        margin-bottom: 22px;
    }
    .payWay {
        font-size: 15px;
        color: #666a6f;
        height: 49px;
        line-height: 49px;
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        border-top: 1px solid #ededed;
        border-bottom: 1px solid #ededed;
    }
    .immediatePay {
        height: 45px;
        line-height: 45px;
        font-size: 15px;
        color: #ffffff;
        background: #04be01;
        text-align: center;
        margin: 30px 5px;
        border-radius: 8px;
    }
}
</style>