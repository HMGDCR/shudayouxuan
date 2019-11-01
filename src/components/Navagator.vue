<template>
   <div >
       <!-- <div class="kongbai"></div> -->
        <van-grid class="footNave">
            <ul class="navagator">
                <router-link to="/home/homePage" tag="li">
                    <i class="iconfont icon-shouye1"></i>
                    <span>首页</span>
                </router-link>
                <router-link to="/home/list" tag="li">
                    <i class="iconfont icon-shangpinfenlei"></i>
                    <span>商品分类</span>
                </router-link>
                <router-link to="/cart/befor" tag="li">
                    <i class="iconfont cart icon-gouwu"></i>
                    <span class="cartNum"><span v-if="cartNum>0">{{cartNum}}</span>购物车</span>
                </router-link>
                <router-link to="/my/center" tag="li">
                    <i class="iconfont icon-wode"></i>
                    <span>我的</span>
                </router-link>
            </ul>
        </van-grid>
   </div>
</template>

<script>
export default {
computed: {
    cartNum(){
        console.log("this.$store.state.cartNum=======",this.$store.state.cartNum)
        return this.$store.state.cartNum
    }
},
}
</script>

<style scoped lang="less">

.router-link-exact-active{
   
     span,.iconfont{
        color: rgb(192, 49, 49);
    }
}

.footNave {
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 49px;
    box-sizing: border-box;
    background: #ffffff;
    .navagator {
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-top: 5px;
        li {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            color: #797d82;
            // color: #2e2f30;
            .iconfont {
                font-size: 20px;
            }
            .iconfont.cart {
                font-size: 25px;
            }
            span {
                margin-top: 2px;
                margin-bottom: 4px;
                font-size: 12px;
            }
            .cartNum{
                position: relative;
            }
            .cartNum>span{               
                position: absolute;
                bottom: 25px;
                left: 20px;
                height: 15px;
                width: 20px;
                border-radius: 10px;
                background: #c03131;
                color: #ffffff;
                font-size: 12px;
                text-align: center;
                line-height: 15px;
            }
        }
    }
}
</style>