<template>
    <div class="order-list">
        <div class="navagator">
            <!-- 导航 -->
            <div>
                <van-nav-bar title="我的订单" class="myOrder">
                    <van-icon name="wap-home-o" slot="left" @click="toHomePage" />
                </van-nav-bar>
            </div>
            <!-- 标签栏 -->
            <div>
            <van-tabs>
                <van-tab title="全部"></van-tab>
                <van-tab title="待分享"></van-tab>
                <van-tab title="待付款"></van-tab>
                <van-tab title="待发货"></van-tab>
                <van-tab title="待收货"></van-tab>
            </van-tabs>
            </div>
        </div>
        <!-- 商品详情 -->
        <div class="goodsDetail">
            <van-card num="1" price="42.5" title="海边理发店"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                style="font-size: 15px">
                <van-divider />
                <div slot="footer" style="height:40px">
                    <span style="line-height:40px">共1件商品 &nbsp;&nbsp;&nbsp;&nbsp; 实付￥42.5</span>
                </div>
                <div slot="footer">
                    <span class="flr">已取消</span>
                    <van-button size="small" class="buttosize">重新购买</van-button>
                </div>
            </van-card>
            <!-- <van-card num="1" price="42.5" title="海边理发店"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                style="font-size: 15px">
                <van-divider />
                <div slot="footer" style="height:40px">
                    <span style="line-height:40px">共1件商品 &nbsp;&nbsp;&nbsp;&nbsp; 实付￥42.5</span>
                </div>
                <div slot="footer">
                    <span class="flr">已取消</span>
                    <van-button size="small" class="buttosize">重新购买</van-button>
                </div>
            </van-card>
            <van-card num="1" price="42.5" title="海边理发店"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                style="font-size: 15px">
                <van-divider />
                <div slot="footer" style="height:40px">
                    <span style="line-height:40px">共1件商品 &nbsp;&nbsp;&nbsp;&nbsp; 实付￥42.5</span>
                </div>
                <div slot="footer">
                    <span class="flr">已取消</span>
                    <van-button size="small" class="buttosize">重新购买</van-button>
                </div>
            </van-card>
            <van-card num="1" price="42.5" title="海边理发店"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                style="font-size: 15px">
                <van-divider />
                <div slot="footer" style="height:40px">
                    <span style="line-height:40px">共1件商品 &nbsp;&nbsp;&nbsp;&nbsp; 实付￥42.5</span>
                </div>
                <div slot="footer">
                    <span class="flr">已取消</span>
                    <van-button size="small" class="buttosize">重新购买</van-button>
                </div>
            </van-card> -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            orderList:[]
        }
    },
    created() {
        this.getOrderList()
    },
    methods: {
        //获取所有的订单
        getOrderList(){
            let url = "/order/list"
            let data = {
                pageNum:2
            }
            this.$axios.post(url,data).then(res=>{
                console.log("我的订单:",res)
                this.orderList=res.list
             
            }).catch(err=>{
                console.log("获取订单失败：",err)
            })
        },
        toHomePage(){
            this.$router.push("/home/homePage")
        }
    },
}
</script>

<style lang="less" scoped>
.van-nav-bar .van-icon {
    color: #2e2f30;
    font-size: 22px;
}
.order-list{
    height:100vh;
    background: #F4F4F4;
    .navagator {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 9;
    }
    .goodsDetail {
        margin-top: 90px;
    }
}
img {
  width: 70px;
  height: 70px;
}

.van-card__thumb {
  width: 70px;
  height: 70px;
}
.van-image__error,
.van-image__img,
.van-image__loading {
  //  display: block;
  width: 70px;
  height: 70px;
}
.van-card__content {
  height: 70px;
}
.van-card__header {
  min-height: 70px;
}

.van-card__bottom {
  line-height: 20px;
  margin-top: 32px;
}
.van-card {
  background: white;
}
.flr {
  float: left;
  line-height: 33px;
  color: #bdc0c5;
}
.buttosize {
  width: 86px;
  height: 33px;
  font-size: 15px;
  border: 1px solid #2e2f30;
  box-sizing: border-box;
}
</style>