<template>
  <div>
    <!-- 头部 -->
    <header>
        <div class="head">
            <div class="logoBox">
                <van-icon name="friends" style="font-size:60px;" />
                <i class="logo iconfont icon-iconcopy"></i>
            </div>
            <span style="font-size:15px">立即登录</span>
        </div>
    </header>
    <ul class="wealthBox">
        <li class="wealth">
            <span class="num">
            0.00
            <span class="numText">元</span>
            </span>
            <span class="text">余额</span>
        </li>
        <li class="wealth">
            <span class="num">
            0
            <span class="numText">张</span>
            </span>

            <span class="text">苏打卡</span>
        </li>
        <li class="wealth">
            <span class="num">
            0
            <span class="numText">张</span>
            </span>
            <span class="text">现金券</span>
        </li>
    </ul>

    <div style="margin:10px 0;">
        <van-cell-group class="user-group">
            <van-cell title="全部订单" is-link />
        </van-cell-group>
        <van-row class="user-links">
            <van-col span="4">
            <van-icon name="pending-payment" />
            <div class="pt-10 fontColor">待付款</div>
            </van-col>
            <van-col span="4">
            <van-icon name="records" />
            <div class="pt-10 fontColor">待接单</div>
            </van-col>
            <van-col span="4">
            <van-icon name="tosend" />
            <div class="pt-10 fontColor">待发货</div>
            </van-col>
            <van-col span="4">
            <van-icon name="logistics" />
            <div class="pt-10 fontColor">已发货</div>
            </van-col>
            <van-col span="4">
            <van-icon name="after-sale" />
            <div class="pt-10 fontColor">退出售后</div>
            </van-col>
        </van-row>
    </div>

    <van-cell-group>
        <van-cell icon="cash-on-deliver" title="企业服利" is-link />
        <van-cell icon="service-o" title="客服" is-link />
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
<style>
body {
  background-color: #f4f4f4;
  height: 100vh;
  width: 100vw;
}
</style>


<style lang="less" scoped>
header {
    height: 136px;
    background: url(../../../assets/img/mybg.png) no-repeat top;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    .head {
        display: flex;
        align-items: center;
        .logoBox {
            height: 66px;
            width: 66px;
            background: #ff8462;
            border-radius: 50%;
            text-align: center;
            line-height: 66px;
            margin: 0 22px;
            .logo {
                font-size: 36px;
                color: white;
            }
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
            color: #797d82;
        }
    }
}
.fontColor {
    color: #9b9ea1;
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
</style>