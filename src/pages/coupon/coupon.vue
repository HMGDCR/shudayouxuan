<template>
  <div>
    <van-coupon-cell
      class="coupon"
      icon="coupon-o"
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showList = true"
      :title="title"
      :value='money*100 |formatMoney'
    />

    <!-- 优惠券列表 -->
    <van-popup v-model="showList" position="bottom">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  props: ["totalMoney"],
  data() {
    return {
      chosenCoupon: -1,
      coupons: [],
      disabledCoupons: [],
      showList: false,
      title: "优惠券",
      all: [], //存放的是可用和不可用的数据
      disUse: [],
      money:0 //优惠金额

    };
  },
  created() {
    this.getcoupons();
  },
  methods: {
    //根据商品的总价格对优惠券进行分类
    selectCoupon() {
      let arr = this.all.filter(item => {
        return item.conditionValue / 100 <= this.totalMoney;
      });
      return arr;
    },

    //不可用
    UnSelectCoupon() {
      let arr = this.all.filter(item => {
        return item.conditionValue / 100 > this.totalMoney;
      });
      return arr;
    },

    //获取优惠券
    getcoupons() {
      let url = "/coupon/all";
      this.$axios
        .post(url)
        .then(res => {
          this.all = res.list.map(item => {
            return {
              ...item
            };
          });
          this.coupons = this.selectCoupon();
          this.disabledCoupons = this.UnSelectCoupon();
        })
        .catch(err => {
          console.log("优惠券:", err);
        });
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;

      let detail = this.coupons[index]
      //子组件传参数
      if(index==-1){//不使用优惠券
        this.$emit("CounponMoney",0);
        return false;
      }
      else{//使用优惠券
         //使用折扣的情况
        if(detail.type=='02'){
             this.money= (10-detail.value)*Number(this.totalMoney)/10
             this.$emit("CounponMoney",this.money);
             return false;
        }
        //使用普通的券
        else{
          this.money = Number(detail.value)/100
           this.$emit("CounponMoney",this.money);
        }        
       
      }
     
    },
    onExchange(code) {
      this.coupons.push(coupon);
    }
  }
};
</script>
<style lang="less" scoped>
.coupon {
  font-size: 15px;
  color: #191a1b;
}
.van-cell__left-icon {
  min-width: 1em;
  height: 24px;
  font-size: 20px;
  line-height: 24px;
  color: #ee0a24;
}
.van-cell__value {
  color: #191a1b;
}
.van-popup {
  height: 100vh;
}
</style>



