<template>
    <div class="cart-befor">
        <!-- 导航栏 -->
        <div class="navagator">
            <van-nav-bar title="购物车" right-text="完成" @click.native="toCart">
                <van-icon style="font-size:20px;" name="wap-home-o" slot="left" />
            </van-nav-bar>
        </div>
        <!-- 商城运费 -->
        <div style="height:44px;background:#fff;display:flex;line-height:44px;border-bottom: 1px solid #F4F4F4">
            <van-checkbox style="padding: 0 15px" v-model="checked" checked-color="#C03131" icon-size="15px"></van-checkbox>
            <span style="font-size:15px">商城承担运费</span>
        </div>
        <!-- 购物车列表 -->
        <div>
            <div class="flx-cent">
                <van-checkbox  v-model="checked" checked-color="#C03131" icon-size="15px"></van-checkbox>
                <van-card price="42.5" title="海边理发店" thumb="https://img.yzcdn.cn/vant/t-thirt.jpg" style="font-size: 15px" >
                <van-divider />
            </van-card>
            <van-stepper style="padding-top:60px;padding-right:15px" v-model="value" />
            </div>
            <div class="flx-cent">
                <van-checkbox  v-model="checked" checked-color="#C03131" icon-size="15px"></van-checkbox>
                <van-card price="42.5" title="海边理发店" thumb="https://img.yzcdn.cn/vant/t-thirt.jpg" style="font-size: 15px" >
                <van-divider />
            </van-card>
            <van-stepper style="padding-top:60px;padding-right:15px" v-model="value" />
            </div>
        </div>
        <!-- 底部结算 -->
        <div class="buttom-nav">
        <van-checkbox v-model="checked" checked-color="#C03131" icon-size="15px" @click="checkAll"><span style="color: #797d82;">全选</span></van-checkbox>
            <van-button style="display:flex; justify-content: center;  align-items: center; height:33px; width:85px;margin-top: 8px;margin-right: 15px; font-size:16px;" color="#ef4040" ><span style="height:33px">删除</span></van-button>
        </div>
        <Navagater></Navagater>
    </div>
</template>

<script>
import Navagater from "@/components/Navagator"
export default {
    components:{
        Navagater
    },
    data(){
        return{
            value: 1,
            checked: true
        }
    },
    methods:{
        checkAll() {
        this.$refs.checkboxGroup.toggleAll(true);
        },
        toCart(){
            this.$router.push("/cart/befor")
        }
    }
};
</script>

<style lang="less" scoped>
.van-nav-bar__left, .van-nav-bar__right {
    font-size: 17px
}

.van-button{
    line-height: 0px;
}
.navagator .van-nav-bar .van-icon {
    color: #2e2f30;
}
.navagator .van-nav-bar__text {
    color: #2e2f30;
}
.buttom-nav{
   
    display: flex;
    justify-content: space-between;
    height: 49px;
    width: 100%;
    background:#fff;
    position: fixed;
    left: 0px;
    bottom:49px;
}
.van-card__content{
    padding-right: 15px;
}
.van-checkbox{
    padding: 0 15px;
    background:white
}
.flx-cent{
    padding:15px 15px 15px 0;
    display: flex;
    background:white;
    border-bottom: 1px solid #F4F4F4;
}
.cart-befor{
    height:100vh;
    background: #F4F4F4;
}
.van-card__bottom {
  line-height: 20px;
  margin-top: 50px;
}
.van-card {
    padding:0px;
    background: white;
    flex-grow: 2
}
.van-card:not(:first-child) {
    margin-top: 0px;
}
</style>