<template>
    <div class="myCenter">
        <!-- 头部 -->
        <header>
            <div class="head">
                <img src="https://mall.s.maizuo.com/e915e2c990c30f8efa9e30bc75da41ee.jpg" alt="">
                <span>立即登录</span>
            </div>
        </header>
        <ul class="wealthBox">
            <li class="wealth">
                <span class="num">0.00<span class="numText">元</span> </span><span class="text">余额</span>
            </li>
            <li class="wealth">
                <span class="num">0<span class="numText">张</span> </span><span class="text">苏打券</span>
            </li>
            <li class="wealth">
                <span class="num">0<span class="numText">张</span> </span><span class="text">现金券</span>
            </li>
        </ul>

        <div style="margin:10px 0;" class="orderInfo">
            <van-cell-group class="user-group">
                <van-cell title="我的订单" is-link class="myOrder" />
            </van-cell-group>
            <van-row class="user-links">
                <van-col span="4">
                    <van-icon name="pending-payment" class="iconStyle" />
                    <div class="pt-10 fontColor">待付款</div>
                </van-col>
                <van-col span="4">
                    <van-icon name="flower-o" class="iconStyle" />
                    <div class="pt-10 fontColor">待分享</div>
                </van-col>
                <van-col span="4">
                    <van-icon name="tosend" class="iconStyle" />
                    <div class="pt-10 fontColor">待发货</div>
                </van-col>
                <van-col span="4">
                    <van-icon name="logistics" class="iconStyle" />
                    <div class="pt-10 fontColor">已发货</div>
                </van-col>
                <van-col span="4">
                    <van-icon name="after-sale" class="iconStyle" />
                    <div class="pt-10 fontColor">退出售后</div>
                </van-col>
            </van-row>
        </div>

        <van-cell-group>
            <van-cell icon="friends-o" title="我的体验" is-link class="myExperience" />
            <van-cell icon="cash-on-deliver" title="企业服利" is-link class="welfare" />
            <van-cell icon="service-o" title="客服" is-link class="service"/>
            <van-cell icon="setting-o" title="设置" is-link @click="toSet" />
        </van-cell-group>
        <Navagater></Navagater>
    </div>
</template>


<script>
import Navagater from "@/components/Navagator"
export default {
    data(){
        return{
            name: "myCenter",
        }
    },
    components: {
        Navagater
    },
    methods:{
        toSet(){
            console.log(1111111111)
            this.$router.push("/my/set")
        }
    }
};
</script>

<style lang="less" scoped>
.myCenter {
    height: 100vh;
    background: #f4f4f4;
}
header {
    height: 136px;
    background: url(../../../assets/img/mybg.png) no-repeat top;
    background-size: cover;
    padding: 56px 0 24px 20px;
    .head {
        display: flex;
        align-items: center;
        img {
            width: 65px;
            height: 65px;
            margin-right: 20px;
        }
        span {
            font-size: 15px;
            color: #2c3e50;
        }
    }
}
.wealthBox {
    height: 72px;
    background: white;
    font-size: 14px;
    display: flex;
    justify-content: space-around;
    .wealth {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        .num {
            color: #2e2f30;
            margin-bottom: 7px;
            font-size: 16px;
            .numText {
                font-size: 12px;
            }
        }
        .text {
            margin-top: 3px;
            color: #797d82;
        }
    }
}
.orderInfo .user-links .fontColor {
    color: #797d82;
    font-size: 13px;
}
.orderInfo .user-links .iconStyle {
    color: #797d82;
    font-size: 27px;
}
.user {
    &-poster {
        width: 100%;
        height: 53vw;
        display: block;
    }
    &-links {
        padding: 15px 0;
        font-size: 12px;
        text-align: center;
        background-color: #fff;
        display: flex;
        justify-content: space-around;
        .van-icon {
            display: block;
            font-size: 24px;
        }
    }
}
.orderInfo .myOrder {
    font-size: 15px;
}
.van-cell-group .van-cell__left-icon {
    font-size: 22px;
}
.van-cell-group .myExperience .van-cell__left-icon:first-child {
    color: #FAB646;
}
.van-cell-group .welfare .van-cell__left-icon:first-child {
    color: #EC8383;
}
.van-cell-group .service .van-cell__left-icon:first-child {
    color: #398BC9;
}
</style>