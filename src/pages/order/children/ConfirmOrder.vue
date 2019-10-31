<template>
  <div id="background">
    <!-- //顶部导航栏 -->
    <van-nav-bar title="确认订单" left-arrow @click.native="goBack"></van-nav-bar>
    <!-- //水平分割线 -->
    <div class="decorate"></div>
    <!-- //地址区域 -->
    <van-cell icon="location-o" is-link id="area" @click="toAddressList">
      <!-- 使用 title 插槽来自定义标题 -->
      <template slot="title">
        <span class="custom-title">{{address.address.name}}</span>
        <span class="custom-title">&nbsp;</span>
        <span class="custom-title">{{address.address.tel}}</span>
        <div class="custom-title fonts">{{address.address.addressDetail}}</div>
      </template>
    </van-cell>
    <div id="goods">
      <!-- //商品部分 -->
      <!-- //头部单元格 -->
      <van-cell-group>
        <van-cell :title="`运费${expressFee/100}元（满${fullReduceMoney/100}元免运费）`" />
      </van-cell-group>

      <van-card
        v-for="(item,index) in carts"
        :key="index"
        :num="item.buyNum"
        :price="item.price | formatMoney"
        :desc="item.slaveName"
        :title="item.masterName"
        :thumb="item.imgUrl"
      ></van-card>

      <!-- //尾部单元格 -->
      <van-cell-group>
        <van-cell title="商品金额" :value="totalMoney" />
      </van-cell-group>
      <van-cell-group v-if="isExpressFee">
        <van-cell title="运费" :value="`￥${expressFee}`" />
      </van-cell-group>
    </div>
    <div id="cell">
      <coupon @CounponMoney="getCounponMoney" :totalMoney="totalMoney"></coupon>
      <van-cell icon="coupon-o" value="0张券可用" is-link>
        <!-- 使用 title 插槽来自定义标题 -->
        <template slot="title">
          <span class="custom-title">现金券</span>
        </template>
      </van-cell>
      <van-cell icon="gem-o" value>
        <!-- 使用 title 插槽来自定义标题 -->
        <template slot="title">
          <span class="custom-title">余额</span>
          （
          <span class="custom-title red">¥0.00</span>
          ）
        </template>
      </van-cell>
      <van-cell icon="balance-list-o" value="不开发票" is-link>
        <!-- 使用 title 插槽来自定义标题 -->
        <template slot="title">
          <span class="custom-title">发票</span>
        </template>
      </van-cell>
    </div>
    <div id="bottom">
      <!-- <van-submit-bar :price="payMoney" tip button-text="提交订单" @submit="onSubmit" /> -->
      <van-submit-bar :price="allFee*100" tip button-text="提交订单" @submit="onSubmit" />
    </div>
    <PayWay :class="$store.state.payWayFlag?'show':''"></PayWay>
  </div>
</template>

<script>
import PayWay from "@/pages/pay/children/PayWay.vue";
import coupon from "@/pages/coupon/coupon";
export default {
  data() {
    return {
      totalMoney: 0,
      carts: [], //购物车的列表数据
      expressFee: 0, //运费
      isExpressFee: true, //运费
      fullReduceMoney: 0, //满减
      discountMoney: 0, //优惠金额
      totalPay: 0, //实际支付
      counponMoney: 0, //实际支付
      conditionValue: 0, //优惠券满减
      payMoney: 0,
      type: "", //打折的类型 ‘01’代表的是满减，‘02’代表的是打折
      flag: false
    };
  },
  components: {
    PayWay,
    coupon
  },

  methods: {
    //获取子组件传值
    getCounponMoney(result) {
      this.discountMoney = result;
      console.log("优惠", result);
    },
    //获取预订单的详情数据
    getPreOrderData() {
      let url = "/preOrder/detail";
      let data = {
        preOrderId: this.preOrderId
      };
      this.$axios
        .post(url, data)
        .then(res => {
          this.carts = res.result.carts;
          this.totalMoney = Number(res.result.totalMoney); //商品总价格
          this.fullReduceMoney = Number(res.result.fullReduceMoney) / 100; //满减

          ////////////////////满减的情况
          if (this.totalMoney > this.fullReduceMoney) {
            this.expressFee = 0;
          } else {
            this.expressFee = res.result.expressFee / 100; //运费
            console.log(" this.expressFee", this.expressFee);
          }
        })
        .catch(err => {
          console.log("失败：", err);
        });
    },

    goBack() {
      this.$router.push("/cart/befor");
      this.$store.commit("SeletCarNum", []);
      this.$store.commit("totalPrice", 0);
    },
    onSubmit() {
      this.$store.commit("payWayFlagChange", !this.$store.state.payWayFlag);
      this.$store.commit("totalPay", this.allFee);
      this.$store.commit("discount", this.counponMoney);
      this.$store.commit("payMoney", this.payMoney);
      console.log('四个参数',this.allFee,this.preOrderId,this.address,this.allFee)
    },
    toAddressList() {
      this.$router.push("/address/list");
    }
  },
  created() {
    this.getPreOrderData();
  },
  computed: {
    //使用计算属性，计算总的实付金额
    allFee() {
      return (
        Number(this.totalMoney) +
        Number(this.expressFee) -
        Number(this.discountMoney)
      );
    },
    SeletCarNum() {
      return this.$store.state.SeletCarNum;
    },
    preOrderId() {
      return this.$store.state.preOrderId; //获取预订单的Id
    },
    //获取默认的地址
    address() {
      return this.$store.state.address;
    }
  }
};
</script>

<style lang="less" scoped>
#background {
  background-color: #f6f7f8;
}
.van-nav-bar__arrow {
  font-size: 20px;
  line-height: 27px;
}
.van-icon-arrow-left:before {
  color: black;
}
.van-nav-bar {
  height: 44px;
}
.van-nav-bar__title {
  font-size: 17px;
  max-width: 72%;
  color: #2e2f30;
}
.decorate {
  background: #fff url("../../../assets/img/colored-line.png");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 3px;
}
[class*="van-hairline"]::after {
  border-color: #fafafb;
}
#area {
  margin-bottom: 12px;
  padding: 14px 17px;
  height: 97px;
  .custom-title:nth-child(4) {
    font-size: 13px;
    color: #797d82;
    line-height: 21px;
    width: 280px;
  }
  .van-cell:not(:last-child)::after {
    left: 0;
  }
  .custom-title:nth-child(3) {
    font-size: 15px;
    color: #797d58;
  }
  .custom-title:first-child {
    font-weight: 700;
    font-size: 15px;
  }
  .van-cell__left-icon {
    margin-top: 12px;
    font-size: 27px;
    color: rgb(189, 193, 197);
  }
  .van-cell__right-icon {
    margin-top: 24px;
  }
  .van-cell {
    margin-bottom: 12px;
  }
}
#goods {
  margin-bottom: 12px;
  .van-cell__title {
    color: #797d82;
    font-size: 13px;
  }
  .van-cell__value {
    color: #c03131;
    font-size: 13px;
  }
  .van-card__bottom {
    padding-top: 28px;
    font-size: 16px;
  }
  .van-card {
    background-color: #fff;
    padding: 14px 16px;
  }
  .van-card__title {
    // font-weight: 700;
    font-size: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    height: 22px;
    line-height: 22px;
  }

  .van-card__desc {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 13px;
    color: #797d82;
  }
  .van-card__price {
    color: #191a1b;
    font-weight: 500;
    font-size: 12px;
  }
  .van-card__num {
    font-size: 12px;
    color: #bdc0c5;
  }
  .van-image {
    background-color: #f8f8f8;
  }
  .van-image__img {
    height: 85px;
    width: 85px;
  }
  .van-card:not(:first-child)::after {
    position: absolute;
    //   box-sizing: border-box;
    content: " ";
    right: 0;
    bottom: 0;
    left: 16px;
    border-bottom: 1px solid #f7f8fa;
  }
  .van-card:not(:first-child) {
    margin-top: 0px;
  }
  .van-cell-group {
    padding: 10px 15px 0px;
  }
  [class*="van-hairline"]::after {
    position: absolute;
    box-sizing: border-box;
    content: " ";
    pointer-events: none;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    border: 0 solid #ebedf0;
    // -webkit-transform: scale(0.5);
    // transform: scale(0.5);
  }
  .van-cell {
    padding: 0;
    color: #797d82;
  }
}
#cell {
  height: 200px;
  // margin-bottom: 12px;
  .van-cell--clickable {
    height: 50px;
    line-height: 30px;
  }
  .van-cell {
    height: 50px;
    line-height: 30px;
  }
  .van-cell__title {
    font-size: 15px;
    color: #191a1b;
  }
  .red {
    font-size: 13px;
    color: #c03131;
  }
  .van-cell__value {
    font-size: 14px;
    color: #191a1b;
  }
  .van-icon {
    margin-top: 4px;
  }
  .van-icon-coupon-o:before {
    color: #ee0a24;
    font-size: 20px;
  }
  .van-icon-comment-o:before {
    color: #f00a1d;
    font-size: 20px;
  }
  .van-icon-gem-o:before {
    color: orangered;
    font-size: 20px;
  }
  .van-icon-balance-list-o:before {
    color: salmon;
    font-size: 20px;
  }
}
#bottom {
  height: 50px;
  .van-submit-bar__text {
    font-size: 15px;
    color: #191a1b;
  }
  .van-submit-bar__price {
    font-size: 16px;
    color: #c03131;
  }
  .van-button--danger {
    color: #fff;
    background-color: #c03131;
    border: 1px solid #c03131;
  }
}
.show {
  display: none;
}
</style>