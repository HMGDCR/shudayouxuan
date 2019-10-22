<template>
    <div id="background">
        <!-- //顶部导航栏 -->
        <van-nav-bar title="确认订单" left-arrow @click.native="goBack"></van-nav-bar>
        <!-- //水平分割线 -->
        <div class="decorate"></div>
        <!-- //地址区域 -->
        <van-cell icon="location-o" is-link id="area">
        <!-- 使用 title 插槽来自定义标题 -->
        <template slot="title">
            <span class="custom-title">张三</span>
            <span class="custom-title">，</span>
            <span class="custom-title">13000000000</span>
            <div class="custom-title fonts">浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室</div>
        </template>
        </van-cell>
        <div id="goods">
        <!-- //商品部分 -->
        <!-- //头部单元格 -->
        <van-cell-group>
            <van-cell title="运费15元（满68元免运费）" />
        </van-cell-group>
        <van-card
            num="2"
            price="30"
            desc="单果重约12-16g"
            title="A级-阳光冬枣（中）约2.6-3斤"
            thumb="https://mall.s.maizuo.com/0238d75b8a9e13c5a18df9781c296c83.png"
        ></van-card>
        <!-- //尾部单元格 -->
        <van-cell-group>
            <van-cell title="商品金额" value="¥30.00" />
        </van-cell-group>
        <van-cell-group>
            <van-cell title="运费" value="¥15.00" />
        </van-cell-group>
        </div>
        <div id="cell">
        <van-cell icon="coupon-o" value="0张券可用" is-link>
            <!-- 使用 title 插槽来自定义标题 -->
            <template slot="title">
            <span class="custom-title">现金券</span>
            </template>
        </van-cell>
        <van-cell icon="comment-o" value="0张券可用" is-link>
            <!-- 使用 title 插槽来自定义标题 -->
            <template slot="title">
            <span class="custom-title">苏打券</span>
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
            <van-submit-bar :price="3050" tip button-text="提交订单" @submit="onSubmit" />
        </div>
        <PayWay :class="$store.state.payWayFlag?'show':''"></PayWay>
    </div>
</template>

<script>
import PayWay from "@/pages/pay/children/PayWay.vue";
export default {
    data() {
        return {
            showFlag:false
        };
    },
    components: {
        PayWay
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        onSubmit() {
            this.$store.commit('payWayFlagChange', !this.$store.state.payWayFlag)
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