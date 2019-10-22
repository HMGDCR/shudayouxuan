<template>
    <div id="background">
        <!-- //顶部导航栏 -->
        <van-nav-bar title="确认订单" left-arrow @click.native="goBack"></van-nav-bar>
        <!-- //水平分割线 -->
        <van-divider />
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
                <span class="custom-title">（¥0.00）</span>
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
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
      goBack(){
          this.$router.go(-1)
      },
      onSubmit(){
          this.$router.push("/pay/payWay")
      }
  }
};
</script>

<style lang="less" scoped>
#background {
    background-color: #f6f7f8;
}
.van-icon-arrow-left:before {
    color: black;
}
.van-nav-bar__title {
    font-size: 16px;
    font-weight: 700;
}
.van-divider {
    margin: 0;
}
[class*="van-hairline"]::after {
    border-color: #fafafb;
}
#area {
  margin-bottom: 12px;
  padding: 14px 16px;
  .fonts {
    font-size: 12px;
    color: #7d7e80;
    line-height: 16px;
  }
  .van-cell:not(:last-child)::after {
    left: 0;
  }
  .custom-title:not(:last-child) {
    font-size: 14px;
  }
  .custom-title:first-child {
    font-weight: 900;
    font-size: 16px;
  }
  .van-cell__left-icon {
    margin-top: 16px;
    font-size: 22px;
  }
  .van-cell__right-icon {
    margin-top: 16px;
  }
  .van-cell {
    margin-bottom: 12px;
  }
}
#goods {
  margin-bottom: 12px;
  .van-cell__value {
    color: #ee0a24;
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
    font-weight: 700;
    font-size: 14px;
  }
  .van-image {
    background-color: #fafafa;
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
    padding: 10px 16px 0px;
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
  }
}
#cell {
  height: 180px;
  // margin-bottom: 12px;
  .van-icon {
    margin-top: 0;
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
}
</style>