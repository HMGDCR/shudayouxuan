<template>
    <div class="order-detail">
        <!-- 顶部导航栏 -->
        <div class="posflex">
            <van-nav-bar title="订单详情">
                <van-icon name="arrow-left " slot="left" @click.native="goBack"/>
            </van-nav-bar>
        </div>
        <!-- 主体 -->
        <div style="">
            <div class="view">
            <span style="color:#fff">订单已取消</span>
            <img style="height:67px;width:99px"
            src="https://file.sdyxmall.com/h5/v1/public/app/img/cancel.ff91da7.png" alt />
        </div>
        <div class="user-address" style="background:white">
            <div class="user-address-right" style="line-height:22px">
                <img style="height:20px;width:20px;"
                src="data:image/png;base64,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"
                alt />
                <span style="margin-right:10px;font-size:13px;padding-left:12px;">何木高</span>
                <span style="font-size:13px;color:#797d82;">13800320000</span>
            </div>
            <div class="user-button-address" style="padding-left:32px;color:#797d82;" >
                广东省深圳市福田区华强北振兴路205栋商务中心大厦三楼(茂业百货,国美)三有国际5楼501室
            </div>
        </div>
        <div style="padding:15px;background:white" class="orderGoods">
            <van-card num="1" price="42.5" desc="描述信息" title="海边理发店"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                style="font-size: 15px" >
                <van-divider />
            </van-card>
        </div>
        <div style="display:flex;flex-direction: column;padding: 12px 15px;height:98px;background:white" class="payMoney">
            <div style="line-height:24px;flex-grow:1;display:flex;justify-content:space-between">
                <span style="color: #797d82;font-size: 13px;">商品金额</span>
                <span style="color: #2e2f30;font-size: 13px;">￥99.00</span>
            </div>
            <div style="line-height:24px;flex-grow: 1;display:flex;justify-content:space-between">
                <span style="color: #797d82;font-size: 13px;">运费</span>
                <span style="color: #2e2f30;font-size: 13px;">￥0.00</span>
            </div>
            <div style="line-height:24px;flex-grow: 1;display:flex;justify-content:space-between">
                <span>实付</span>
                <span style="color: #c03131;">￥99.00</span>
            </div>
        </div>
        <div style="padding: 12px 15px ;color: #797d82;font-size: 11px;background:white">
            <div style="display:flex;justify-content:space-between">
                <div style="line-height:22px">
                <span style="margin-right:10px">订单编号</span>
                <span>2019 1021 1406 5392 749</span>
                </div>
                <div>
                <van-button type="default" size="mini">复制</van-button>
                </div>
            </div>

            <div>
                <span style="margin-right:10px">下单时间</span>
                <span>2019-10-21 14:06:54</span>
            </div>
        </div>
        </div>


        <!-- 底部 -->
        <div class="fixl">
            <div style="padding-left:12px">
                <van-icon style="font-size:25px" name="service" />
            </div>
            <div style="padding-right:15px">
                <van-button style="font-size:15px" type="default" size="small">重新购买</van-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            addressInfo:{},//地址
            expressFee:0,//运费
            allFee:0,//商品总价
            totalMoney:0,//实付
        }
    },
    created() {
        this.getDetail()
    },
    methods: {
        getDetail(){
            let url ="/order/detail"
            let data={
                orderId:this.orderId
            }
            this.$axios.post(url,data).then(res=>{
                console.log("res",res)
            }).catch(err=>{
                console.log("err",err)
            })
            
        },
        goBack(){
            this.$router.push("/order/list")
        }
    },
    computed: {
        orderId(){
            return this.$store.state.orderId;
        }
    },
};
</script>

<style lang="less" scoped>
.posflex{
    position: fixed;
    width: 100%;
    height: 46px;
    top:0px
}
.van-nav-bar .van-icon {
    color: #2e2f30;
    font-size: 22px;
}
.orderGoods {
    margin-bottom: 10px;
}
.payMoney {
    margin-bottom: 10px;
}
.fixl{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background:white;
    height: 49px;
    bottom: 0;
    position: fixed;
    width: 100%;
    z-index: 1;

}
.order-detail{
    height:100vh;
    background: #F4F4F4;
    
}
.van-card__bottom {
  line-height: 20px;
  margin-top: 25px;
  
}
.van-card {
  background: white;
  flex-grow: 1;
}

.user-button-address {
  font-size: 13px;
}

.user-address {
    padding: 15px;
    height: 87px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    margin-bottom: 10px;
}
.view {
    box-sizing: border-box;
    padding-top: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 30px;
    padding-left: 40px;
    height: 125px;
    background: url(https://file.sdyxmall.com/h5/v1/public/app/img/group5@2x.0b65469.png) no-repeat;
}
</style>