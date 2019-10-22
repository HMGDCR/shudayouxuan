<template>
  <div class="cart-befor">
    <!-- 导航栏 -->
    <div class="navagator">
        <van-nav-bar title="购物车" right-text="编辑" class="edit" @click.native="toEdit">
            <van-icon  style="font-size:23px;" class="icon-line-height" name="wap-home-o" slot="left" />
        </van-nav-bar>
    </div>
    <!-- 商城运费 -->
    <div style="height:44px;background:#fff;display:flex;line-height:44px;border-bottom:1px solid #F4F4F4">
        <van-checkbox style="padding: 0 15px" v-model="checked" checked-color="#C03131" icon-size="15px"></van-checkbox>
        <span style="font-size:15px; ">商城承担运费</span>
        <span class="no-fare">免运费</span>
    </div>
    <!-- 购物车列表 -->
    <div >
        <div class="flx-cent">
            <van-checkbox  v-model="checked" checked-color="#C03131" icon-size="15px"></van-checkbox>
            <van-card num="1" price="42.5" title="海边理发店" 
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg" style="font-size: 15px" >
            <van-divider />
        </van-card>
        </div>
        <div class="flx-cent">
            <van-checkbox  v-model="checked" checked-color="#C03131" icon-size="15px"></van-checkbox>
            <van-card num="1" price="42.5" title="海边理发店"
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
            style="font-size: 15px" >
            <van-divider />
        </van-card>
        </div>
    </div>
    <!-- 底部结算 -->
    <div class="buttom-nav">
       <van-checkbox v-model="checked" checked-color="#C03131" icon-size="15px" @click="checkAll" ><span style="color: #797d82;">全选</span></van-checkbox>
        <van-button style="height:49px;width:105px;font-size:17px" color="#C03131" >结算</van-button>
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
        checked: true
        }
    },
    methods:{
        checkAll() {
            this.$refs.checkboxGroup.toggleAll(true);
        },
        toEdit(){
            console.log(1111111)
            this.$router.push("/cart/after")
        }
    }
};
</script>
<style lang="less">
    .flx-cent {
        .van-card__title.van-multi-ellipsis--l2{
        width:200px;
        font-size:15px;
        color:#2e2f30;
        }
    }
</style>
<style lang="less" scoped>
.van-nav-bar__left, .van-nav-bar__right {
    font-size: 17px;
    
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
    border-bottom: 1px solid #F4F4F4
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
.no-fare{
    position:absolute;
    right:15px;
    color:#797d82;
    font-size:12px;
}
</style>