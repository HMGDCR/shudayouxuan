<template>
  <div class="payment">
    <!-- 导航栏 -->
    <div class="navPay">
      <van-nav-bar :title="isShow?'微信支付':'支付宝支付'" left-arrow>
        <van-icon name="wap-home-o" slot="left" style="color:black;" @click="goHome" />
      </van-nav-bar>
    </div>
    <!-- 商品信息 -->
    <div class="ctxPay">
      <div class="titlePay">苏打优选商品</div>
      <div class="pricePay">￥{{payMoney |formatMoney}}</div>
    </div>
    <!-- 收款方 -->
    <div class="context">
      <div class="collectPay">
        <div class="leftPay">收款方</div>
        <div class="rightPay">苏打优选</div>
      </div>
    </div>
    <!-- 支付按钮 -->
    <div class="btnPay">
      <van-button type="primary" size="large" @click="pay">立即支付</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderId:"",
      payMoney:0,
      isShow:true
    };
  },
  created() {
    //获取payWay组件传过来的支付方式
    this.isShow =this.$route.params.isShow=='1'?true:false
    console.log("isShow",this.isShow)
    this.getOrder();
  },
  methods: {
    //获取订单
    getOrder() {
      let url = "/order/all";
      this.$axios
        .post(url)
        .then(res => {
          console.log("获取订单所有数据：", res);
          
          this.payMoney=Number(res.list[0].allFee)*100
          this.orderId=res.list[0].orderId
        })
        .catch(err => {
          console.log("获取订单详情数据：", err);
        });
    },
    goHome() {
      this.$router.push("/home/homePage");      
    },
    pay() {
      let url = "/order/pay";
      let data = {
        orderId: this.orderId,
        allFee: this.payMoney
      };
      this.$axios
        .post(url, data)
        .then(res => {
          let toastClear = this.$toast.success("支付成功");
          setTimeout(() => {
            toastClear.clear();
            this.$router.push("/order/detail");
          }, 1000);
        })
        .catch(err => {
          console.log("支付失败", err);
          this.$toast.fail("支付失败");
        });
    }
  },
 
};
</script>

<style lang="less" scoped>
.navPay .van-nav-bar {
  height: 44px;
  line-height: 44px;
}
.payment {
  width: 100vw;
  height: 100vh;
  background-color: #f4f4f4;
  .van-nav-bar__title {
    font-size: 17px;
  }
  .van-icon,
  .van-icon::before {
    color: #565958;
    font-size: 23px;
    font-weight: 100;
  }
  .ctxPay {
    width: 100vw;
    text-align: center;
    .titlePay {
      margin-top: 20px;
      font-size: 15px;
      color: #2c3e50;
      height: 22px;
      line-height: 22px;
    }
    .pricePay {
      margin-top: 20px;
      color: #2d3e4f;
      font-size: 30px;
      font-weight: 700;
      height: 45px;
      line-height: 45px;
    }
  }
  .context {
    width: 100vw;
    border-top: 1px solid #eae8e8;
    border-bottom: 1px solid #eae8e8;
    margin-top: 10px;
    color: #2c3e50;
    .collectPay {
      height: 49px;
      line-height: 49px;
      font-size: 15px;
      margin: 0 15px;
      display: flex;
      justify-content: space-between;
    }
  }
  .btnPay {
    width: 97.5%;
    margin: 0 auto;
    .van-button {
      border-radius: 10px;
      margin-top: 28px;
      background: #04be01;
    }
  }
  .van-button {
    height: 45px;
    line-height: 45px;
    font-size: 15px;
  }
}
</style>