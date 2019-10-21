<template>
   <div class="footNave">
        <van-grid>
            <ul class="navagator">
                <li>
                    <i class="iconfont icon-shouye1"></i>
                    <span>首页</span>
                </li>
                <li>
                    <i class="iconfont icon-fuli-"></i>
                    <span>企业福利</span>
                </li>
                <li>
                    <i class="iconfont cart icon-gouwu"></i>
                    <span>购物车</span>
                </li>
                <li>
                    <i class="iconfont icon-wode"></i>
                    <span>我的</span>
                </li>
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
            .iconfont {
                font-size: 20px;
            }
            .iconfont.cart {
                font-size: 25px;
            }
            span {
                margin-top: 2px;
                font-size: 12px;
                color: #797d82;
            }
        }
    }
}


</style>