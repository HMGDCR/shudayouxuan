<template>
  <div class="displays" >
    <div class="mongolian"></div>
    <div class="low">
      <div class="choose">
        <span>选择支付方式</span>
        <van-icon name="cross" @click.native="show" />
      </div>
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell icon="like-o" title="微信支付" clickable @click="radio = '1'">
            <van-radio slot="right-icon" name="1" checked-color="#c03131" />
          </van-cell>
          <van-cell icon="like-o" title="支付宝支付" clickable @click="radio = '2'">
            <van-radio slot="right-icon" name="2" checked-color="#c03131" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
      <div class="submit">
        <van-button
          class="button"
          type="danger"
          size="large"
          @click="payMoney"
        >支付 ¥{{allFee*100 |formatMoney}}</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "1"
    };
  },
  methods: {
  

    payMoney() {
       this.$store.commit("payWayFlagChange", !this.$store.state.payWayFlag);
      console.log("radio",this.radio)
      let isShow =this.radio=='1'?'1':'2'
      /////////////////////////////////////////////点击支付生成订单
      let urlOrder = "/order/add";    
      let dataOrder = {
        preOrderId: this.preOrderId,
        allFee: this.allFee,
        addressInfo: this.addressInfo,
        discount: this.discount
      };     

      this.$axios
        .post(urlOrder, dataOrder)
        .then(res => {
          this.$store.commit("orderId", res.result.orderId);
          //支付成功之后，取反
         
        })
        .catch(err => {
          console.log("生成订单失败：", err);
        });



      ///////////////////////////////支付成功够，我们需要把存在vuex中的被选中的购物车Id删除，这就需要调用删除购物车的方法
      let url = "cart/del";
      let data = {
        cartId: this.SeletCarNum
      };
      this.$axios
        .post(url, data)
        .then(res => {
          //删除成功后，需要清空vuex中的被选中商品的购物车Id
          this.$store.commit("SeletCarNum", []);
          this.$store.commit("cartNum", 0);

        })
        .catch(err => {
          console.log("删除购物车失败：", err);
        });
      this.$router.push(`/pay/payMoney/${isShow}`);
    },
    goBack() {
      this.$router.go(-1);
      this.$store.commit("SeletCarNum", []);
      this.$store.commit("allFee", 0);
    },
    show() {
      this.$store.commit("payWayFlagChange", !this.$store.state.payWayFlag);
    }
  },
  computed: {
    ////////////////获取预订单Id
    preOrderId() {
      return this.$store.state.preOrderId;
    },
    /////////////////获取vuex中的被选中商品购物车的Id
    SeletCarNum() {
      return this.$store.state.SeletCarNum;
    },
    //////////////////商品的总价格
    allFee() {
      return this.$store.state.allFee;
    },
    ////////////////////用户地址
    addressInfo() {
      return this.$store.state.address.address;
    },
    //优惠券
    discount() {
      return this.$store.state.discount;
    }
  }
};
</script>

<style scoped lang="less">
.displays {
  .mongolian {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: black;
    opacity: 0.3;
    z-index: 10;
  }
  .low {
    height: 235px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    z-index: 999;
    .submit {
      width: 100%;
      padding: 0 20px;
      .button {
        margin-top: 32px;
      }
      .van-button--danger {
        background-color: #c03131;
        border: 1px solid #c03131;
      }
    }
    .choose {
      height: 50px;
      padding-left: 100px;
      padding-right: 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        color: #191a1b;
        font-size: 15px;
      }
      .van-icon {
        color: #b3b5b8;
        font-size: 16px;
      }
    }
    .van-cell__title {
      span {
        font-size: 15px;
        color: #191a1b;
      }
    }
    .van-cell__left-icon {
      margin-right: 12px;
    }
  }
}
</style> 