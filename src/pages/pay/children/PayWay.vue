<template>
    <div class="displays" @click="show">
        <div class="mongolian"></div>
        <div class="low">
        <div class="choose">
            <span>选择支付方式</span>
            <van-icon name="cross" @click.native="goBack" />
        </div>
        <van-radio-group v-model="radio">
            <van-cell-group>
            <van-cell icon="like-o" title="微信支付" clickable @click="radio = '1'">
                <van-radio slot="right-icon" name="1" checked-color="#c03131" />
            </van-cell>
            <van-cell icon="like-o" title="支付宝支付" clickable @click="radio = '2'">
                <van-radio slot="right-icon" name="2" checked-color="#c03131" />
            </van-cell>
            </van-cell-group>
        </van-radio-group>
        <div class="submit">
            <van-button class="button" type="danger" size="large" @click="payMoney">支付 ¥45.00</van-button>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        radio: "1"
        };
    },
    methods: {
        payMoney() {
            this.$router.push("/pay/payMoney");
        },
        goBack() {
            this.$router.go(-1);
        },
        show(){
            this.$store.commit('payWayFlagChange', !this.$store.state.payWayFlag)
            console.log("this.$store.state.payWayFlag",this.$store.state)
        }
    }
};
</script>

<style scoped lang="less">
.displays {
    .mongolian {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: black;
        opacity: 0.3;
        z-index: 10;
    }
    .low {
        height: 235px;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        background: #fff;
        z-index: 999;
        .submit {
        width: 100%;
        padding: 0 20px;
        .button {
            margin-top: 32px;
        }
        .van-button--danger {
            background-color: #c03131;
            border: 1px solid #c03131;
        }
        }
        .choose {
        height: 50px;
        padding-left: 100px;
        padding-right: 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
            color: #191a1b;
            font-size: 15px;
        }
        .van-icon {
            color: #b3b5b8;
            font-size: 16px;
        }
        }
        .van-cell__title {
        span {
            font-size: 15px;
            color: #191a1b;
        }
        }
        .van-cell__left-icon {
        margin-right: 12px;
        }
    }
}
</style> 