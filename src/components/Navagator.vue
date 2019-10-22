<template>
   <div class="footNave">
        <van-grid>
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
                    <span>购物车</span>
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

}
</script>

<style scoped lang="less">
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
            .iconfont {
                font-size: 20px;
            }
            .iconfont.cart {
                font-size: 25px;
            }
            span {
                margin-top: 2px;
                font-size: 12px;
            }
        }
    }
}
</style>