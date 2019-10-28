<template>
  <div>
    <van-coupon-cell
    class="coupon"
    icon="coupon-o"
  :coupons="coupons"
  :chosen-coupon="chosenCoupon"
  @click="showList = true"
  :title="title"
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
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 2000,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '20',
  unitDesc: '元'
};
export default {
    data() {
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList:false,
      title:"苏打券"
    }
  },

  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
         //子组件传参数
      this.$emit("CounponMoney",Number(this.coupons[index].valueDesc))
    },
    onExchange(code) {
      this.coupons.push(coupon);
    }
  }
}
</script>
<style lang="less" scoped>
    .coupon{
    font-size: 15px;
    color: #191a1b;
    }
  .van-cell__left-icon{
    min-width: 1em;
    height: 24px;
    font-size: 20px;
    line-height: 24px;
    color: #ee0a24;
}
.van-cell__value{
      color: #191a1b;
}

</style>



