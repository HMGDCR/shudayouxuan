<template>
  <div class="mainContent">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white" class="swipe">
      <van-swipe-item v-for="(ite,inde) in swipValue" :key="inde">
        <img :src="ite" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- 宫格 -->
    <van-grid :column-num="4" :border="false" class="grid" @click.native="toList">
      <van-grid-item
        v-for="(item,index) in value"
        :key="index"
        :icon="item.iconUrl"
        :text="item.name"
      />
    </van-grid>
    <!-- 主体内容-->
    <div class="content">
      <ul class="navagater">
        <li>推荐</li>
        <li class="sales">
          <span>销量</span>
          <div class="van-icon-style">
            <van-icon name="arrow-up" />
            <van-icon name="arrow-down" />
          </div>
        </li>
        <li class="sales">
          <span>价格</span>
          <div class="van-icon-style">
            <van-icon name="arrow-up" />
            <van-icon name="arrow-down" />
          </div>
        </li>
      </ul>
      <ul class="goods">
        <li
          class="listItem"
          @click="toDetail(item.productId)"
          v-for="(item,index) in listValue"
          :key="index"
        >
          <img :src="item.imgUrl" alt />
          <div class="textDescribe">
            <span class="goodsName">{{item.masterName}}</span>
            <span class="goodDetails">{{item.slaveName}}</span>
            <div class="price">
              <span class="ren">￥</span>
              <span class="priceNum">{{item.minPrice/100}}</span>
            </div>
          </div>
        </li>
        <!-- <li class="listItem">
                    <img src="https://mall.s.maizuo.com/1f8134cb7efe19ea0cfc86a1c84ff4c2.png?x-oss-process=image/resize,w_248" alt="">
                    <div class="textDescribe">
                        <span class="goodsName">【广东】 港式网红鱼皮</span>
                        <span class="goodDetails">选取新鲜巴沙鱼皮 酥脆香浓口感 富含胶原蛋白</span>
                        <div class="price">
                            <span class="ren">￥</span><span class="priceNum">38.9</span>
                        </div>
                    </div>
                </li>
                <li class="listItem">
                    <img src="https://mall.s.maizuo.com/1f8134cb7efe19ea0cfc86a1c84ff4c2.png?x-oss-process=image/resize,w_248" alt="">
                    <div class="textDescribe">
                        <span class="goodsName">【广东】 港式网红鱼皮</span>
                        <span class="goodDetails">选取新鲜巴沙鱼皮 酥脆香浓口感 富含胶原蛋白</span>
                        <div class="price">
                            <span class="ren">￥</span><span class="priceNum">38.9</span>
                        </div>
                    </div>
                </li>
                <li class="listItem">
                    <img src="https://mall.s.maizuo.com/1f8134cb7efe19ea0cfc86a1c84ff4c2.png?x-oss-process=image/resize,w_248" alt="">
                    <div class="textDescribe">
                        <span class="goodsName">【广东】 港式网红鱼皮</span>
                        <span class="goodDetails">选取新鲜巴沙鱼皮 酥脆香浓口感 富含胶原蛋白</span>
                        <div class="price">
                            <span class="ren">￥</span><span class="priceNum">38.9</span>
                        </div>
                    </div>
        </li>-->
      </ul>
    </div>
    <Navagater></Navagater>
  </div>
</template>

<script>
import Navagater from "@/components/Navagator";
export default {
  components: {
    Navagater
  },
  data() {
    return {
      swipValue: [],
      value: [],
      listValue: [], //商品列表
      pageNum: 1,
      isaddPageNum: true,
      resNumlength: 0
    };
  },
  //监听
  watch: {
    resNumlength() {
      if (this.resNumlength == 0) {
        this.removeScroll();
      }
    }
  },
  created() {
    this.getData();
    this.listScroll();
  },
  methods: {
    //下拉加载
    listScroll() {
      window.addEventListener("scroll", this.fn);
    },
    removeScroll() {
      window.removeEventListener("scroll", this.fn);
    },
    fn() {
      var mySrollTop =
        document.documentElement.scrollTop;
      // console.log(mySrollTop);
      //可视区高度
      var screamH = window.screen.height;
      // console.log(screamH);

      // 页面的高度
      var pageH = document.body.scrollHeight;
      // console.log(pageH);
     
        if (pageH <= mySrollTop + screamH+20 && this.isaddPageNum) {             
        this.isaddPageNum = false;        
          this.getList();
        }
      
    },

    //获取列表的数据
    getList() {
  
      let listUrl = "product/list?pageNum=" + this.pageNum;
      this.$axios
        .post(listUrl)
        .then(res => {
          this.resNumlength = res.list;
          this.isaddPageNum = true;
          this.pageNum++;
          this.listValue = [...this.listValue, ...res.list];

          // console.log("当前页", this.pageNum);
          // console.log("下来的数据", res);
        })
        .catch(err => {
          console.log("错误", err);
        });
    },
    //获取所有的数据
    getData() {
      let bannersUrl = "product/getBanners";
      let categoryUrl = "category/all";
      let listUrl = "product/list?pageNum=" + this.pageNum;
      let bannersPromise = this.$axios.get(bannersUrl);
      let categoryPromise = this.$axios.get(categoryUrl);
      let listPromise = this.$axios.get(listUrl);
      Promise.all([bannersPromise, categoryPromise, listPromise])
        .then(res => {
          // console.log("所有的数据", res);
          //轮播图
          this.swipValue = res ? res[0].banners : [];
          //全部列表
          for (var i = 0; i < 8; i++) {
            this.value.push(res[1].list[i]);
          }
          //商品列表
          this.listValue = res[2].list;
        })
        .catch(err => {
          console.log("错误：", err);
        });
    },
    toDetail(productId) {
      // console.log("productId:", productId);
      this.$router.push(`/home/detail/${productId}`);
    },
    toList() {
      this.$router.push("/home/list");
    }
  }
};
</script>

<style lang="less">
// 轮播图指示器样式调整
.van-swipe__indicators {
  left: 88%;
}
// 调宫格样式
.van-grid-item__icon {
  font-size: 45px;
}
.van-grid-item__content {
  padding: 8px 0;
}
</style>

<style scoped lang="less">
.mainContent {
  height: 100vh;
  background: #f4f4f4;
}
// 轮播图高度
.swipe {
  height: 210px;
  width: 100%;
  img {
    width: 100%;
  }
}
// 宫格样式调整
.grid {
  margin-bottom: 10px;
  height: 190px;
  padding: 15px 0;
  background: #ffffff;
}
// 主体内容
.content {
  background: #ffffff;
  margin-bottom: 49px;
  .navagater {
    height: 44px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #797d82;
    font-size: 14px;
    border-bottom: 1px solid #ededed;
    .sales {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .van-icon-style {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: 6px;
        margin-left: 5px;
        transform: scale(0.7);
      }
    }
  }
  .goods {
    padding-top: 15px;
    padding-right: 15px;
    padding-left: 15px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .listItem {
      width: 165px;
      height: 237px;
      margin-bottom: 20px;
      img {
        width: 165px;
        height: 165px;
        background: #f4f4f4;
      }
      .textDescribe {
        display: flex;
        flex-direction: column;
        .goodsName {
          margin-top: 12px;
          color: #2c3e50;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 10rem;
        }
        .goodDetails {
          font-size: 12px;
          color: #797d82;
          margin-top: 7px;
          margin-bottom: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 10rem;
        }
        .price {
          color: #c03131;
          margin-top: 4px;
          .ren {
            font-size: 10px;
            padding-right: 3px;
          }
          .priceNum {
            font-size: 15px;
          }
        }
      }
    }
  }
}
</style>