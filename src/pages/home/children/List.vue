

<template>
  <div class="sort-content">
    <!--  导航栏  -->
    <van-row type="flex" align="center" class="title">
      <van-col span="2" @click="gotoBack()">
        <van-icon name="arrow-left" style="padding-left:5px;font-size:18px" />
      </van-col>
      <van-col span="21">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          show-action
          shape="round"
          @search="onSearch"
        >
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
      </van-col>
    </van-row>

    <!-- 分类选择内容 -->
    <div class="shop-content">
      <div class="shop-select">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            v-for="(item,index) in items"
            :key="index"
            :title="item.name"
            @click.native="getTypeDetail(item.categoryId)"
            v-show="item.children&&item.children.length"
          />
        </van-sidebar>
      </div>
      <div class="shop-main">
        <van-grid :border="false" :column-num="2" class="shop-list">
          <van-grid-item
            @click="gotoDetail(item)"
            v-for="(item,index) in items[activeKey].children"
            :key="index"
          >
            <div class="shop-items">
              <div style="  background: #f4f4f4;">
                <van-image :src="item.imgUrl" width="120" height="120" />
              </div>
              <span class="shop-title">{{item.masterName}}</span>
              <span class="shop-price">￥{{item.minPrice|formatMoney}}</span>
            </div>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      value: "",
      activeKey: 0,
      activeIndex: 0,
      categoryId: "",
      items: [{ text: "百果园" }, { text: "时令鲜果" }, { text: "家禽蛋" }],
      isLodding:false
    };
  },
  created() {  
    this.getList();
  },
  methods: {
    getTypeDetail(categoryId) {
      console.log(this.activeKey);
    },
    onSearch() {},
    gotoBack() {
      this.$router.push("/home/homePage");
    },
    gotoDetail(item) {
      this.$router.push(`/home/detail/${item.productId}`);
    },
    getList() {
      this.$loading(true);
      
      let $this = this
      let list = this.$axios.get("/category/all");
      let allDetil = this.$axios.get("/product/all");
      Promise.all([list, allDetil])
        .then(res => {
          //关闭lodding
          
          console.log("数据",res);
          let list = res[0].list;
          let detail = res[1].list;
          let arr = list.map(item => {
            let children = [];
            detail.forEach(i => {
              if (item.categoryId === i.categoryId) {
                children.push(i);
              }
            }            
            );
            return {
              ...item,
              children
            };
          });
          this.items = arr;
          console.log(arr);
          this.$loading(false)          
        }
        )
        .catch(err => {
          console.log(err);
        });
      
    }
  }
};
</script>
<style >
/* body {
  min-height: 100vh;
  background: #f4f4f4;
} */
</style>
<style lang="less" scoped>
.van-grid-item /deep/ .van-grid-item__content {
  padding: 5px 5px;
}
// 大div样式
.sort-content {
  height: 100%;

  .title {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 6;
    background: white;
    padding: 0 8px;
    box-sizing: border-box;
    & /deep/ .van-search {
      padding: 8px 0 8px 4px;
      & /deep/ .van-cell {
        padding: 3px 5px;
      }
    }
    & /deep/ .van-col--21 {
      width: 92.5%;
    }
  }
}
.shop-content {
  margin-top: 51px;
  margin-bottom: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
  .shop-select {
    min-height: 100vh;
    background: #fafafa;
    width: 25%;
    font-size: 14px;
    position: fixed;
    box-sizing: border-box;
    .van-sidebar {
      width: 100%;
      & /deep/ .van-sidebar-item {
        padding: 12px 12px 10px 8px;
      }
    }
  }
  .shop-main {
    height: 100%;
    width: 100%;
    padding-left: 25%;

    // 选择分类页面的内容
    .shop-list {
      .shop-items {
        font-size: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }
      .shop-title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 10em;
        padding: 2px 0px 2px 3px;
        text-align: left;
        display: inline-block;
        width: 100%;
      }
      .shop-price {
        color: #ee0a24;
        text-align: left;
        display: inline-block;
        width: 100%;
        padding-left: 6px;
      }
      .a {
        position: fixed;
        top: 0;
        width: 100%;
      }
    }
  }
}
</style>