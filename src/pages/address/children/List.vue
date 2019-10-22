<template >
  <div class="first">
    <!-- 顶部导航栏 -->
    <van-nav-bar
      title="地址管理"
      right-text="添加"
      left-arrow
      fixed
      left-text="返回"
      @click-left="clickReturn"
      @click-right="clickAdd"
    />
    <!-- 中部地址栏 -->
    <van-address-list v-model="chosenAddressId" :list="list" @edit="onEdit" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenAddressId: "2",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ]
    };
  },
  methods: {
    //   返回按钮
    clickReturn() {
      alert("返回");
    },
    //   添加按钮
    clickAdd() {
      alert("添加");
    },
    //编辑按钮
    onEdit() {
      alert("编辑");
    }
  }
};
</script>

<style lang="less" scoped>
// body的样式
.first {
  background: #f4f4f4;
  width: 100vw;
  min-height: 100vh;
}
// 顶部导航栏地址管理样式
.van-nav-bar__title {
  font-size: 20px;
  font-family: 600;
}
// 顶部导航栏右边添加样式
.van-nav-bar__text {
  color: black;
}
// 顶部导航栏左边返回号样式
.van-icon::before {
  color: black;
  height: 100%;
  font-size: 20px;
  left: 10px;
}
// 顶部导航栏左边返回号边距
.van-nav-bar__left {
  left: 5px;
}
// vant组件下部新增地址删除样式
.van-button--danger {
  display: none;
}
// 中部地址栏top距离样式
.van-radio-group {
  padding-top: 45px;
}
// 中部地址栏地址溢出隐藏样式
.van-address-item__address {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 280px;
}
</style>