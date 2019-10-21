<template>
   <div class="footNave">
        <van-grid>
            <van-grid-item icon="wap-home-o" text="首页" style="font-size: 10px;" />
            <van-grid-item icon="point-gift-o" text="企业福利" />
            <van-grid-item icon="shopping-cart-o" text="购物车" />
            <van-grid-item icon="manager-o" text="我的" />
        </van-grid>
   </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.footNave .van-grid-item__content .van-grid-item__icon {
    font-size: 31px;
    color: #797d82;
    font-weight: 300;
}  
.footNave .van-grid-item__content .van-grid-item__text {
    margin-top: 0;
} 
.footNave .van-grid-item .van-grid-item__content {
    padding-top: 0;
} 
</style>

<style scoped lang="less">
.footNave {
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 49px;
}


</style>