<template>
    <div class="cart-befor">
        <!-- 导航栏 -->
        <div class="navagator">
            <van-nav-bar title="购物车" right-text="完成"  class="edit">
                <van-icon style="font-size:23px;" name="wap-home-o" class="icon-line-height" slot="left" @click.native="toCart" />
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
                 <div class="cart-goods">
                <img src="https://mall.s.maizuo.com/5f727ae93559d9c445e944a58211b538.png" alt="">
            </div>
            <div class="cart-container flex2 jc-sb">
                <p class="goods-msg">商品信息多余文字会省略的啊啊啊啊啊啊</p>
                <div class="goods-price">
                    <span class="price">￥44.9</span>
                    <!-- <span class="old-price">￥55.9</span> -->
                    <span class="count">
                    <div class="small-box">
                        <span style="width:34px;border:1px solid gray;">-</span>
                        <span style="width:46px;border:1px solid gray;border-left:0;">3</span>
                        <span style="width:34px;border:1px solid gray;border-left:0;">+</span>
                    </div>
                </span>
                </div>
            </div>
            </div>
            <div class="flx-cent">
                <van-checkbox  v-model="checked" checked-color="#C03131" icon-size="15px"></van-checkbox>
                <div class="cart-goods">
            <img src="https://mall.s.maizuo.com/9085c7f2b5efb1a4abf3f3a962dcb088.png" alt="">
            </div>
           <div class="cart-container flex2 jc-sb">
                <p class="goods-msg">商品信息多余文字会省略的啊啊啊啊啊啊</p>
                <div class="goods-price">
                    <span class="price">￥44.9</span>
                    <!-- <span class="old-price">￥55.9</span> -->
                    <span class="count">
                    <div class="small-box">
                        <span style="width:34px;border:1px solid gray;">-</span>
                        <span style="width:46px;border:1px solid gray;border-left:0;">3</span>
                        <span style="width:34px;border:1px solid gray;border-left:0;">+</span>
                    </div>
                </span>
                </div>
            </div>
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
.edit .van-nav-bar__text{
    font-size:15px;
    padding:0 19px;
}
.icon-line-height{
    margin-bottom:5px;
}
.cart-goods{
    img{
        width:95px;
        height:95px;
        background-color:#f8f8f8;
        margin-left:15px;
    }
}
.cart-container{
    width:100%;
    height:100%;
    padding-left:15px;
}
.goods-msg{
    display: inline-block;
    width:207px;    
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis
}
.goods-price{
    position:relative;
    display:flex;
    align-items: flex-end;
    margin-top:50px;
    height:26px;
}
.price{
    font-size:15px;
    margin-right:8px;
    color:rgb(185, 23, 23);
}
.old-price{
    font-size:12px;
    color:rgb(172, 170, 170);
    text-decoration: line-through;
}
.count{
    display:inline-block;
    width:115px;
    position:absolute;
    right:0;
    color:rgb(184, 181, 181);
    font-size:12px;
}
.small-box {
    width:115px;
    display:inline-block;
    margin-top: 15px;
    height: 25px;
    span {
        height: 25px;
        display: inline-block;
        line-height: 25px;
        text-align: center;
    }
}
</style>