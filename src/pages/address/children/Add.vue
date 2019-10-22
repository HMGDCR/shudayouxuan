<template >
  <div class="first">
    <!-- 顶部导航栏 -->
    <div>
      <van-nav-bar
        title="新建地址"
        left-text="返回"
        left-arrow
        right-text="保存"
        fixed
        @click-left="onClickReturn"
        @click-right="onClickSave"
      />
    </div>
    <div class="All">
      <van-cell-group>
        <van-field placeholder="姓名" />
      </van-cell-group>
      <van-cell-group>
        <van-field placeholder="手机号码" />
      </van-cell-group>
      <van-cell-group>
        <van-icon name="location-o" class="site" @click.native="siteSwitch" />
        <van-field placeholder="点击选择地址" style="padding-left:30px;" />
      </van-cell-group>
      <van-cell-group>
        <van-field placeholder="详细地址:例如17号楼601等" />
      </van-cell-group>
      <van-cell-group class="mt-10">
        <van-field placeholder="身份证号(选填)" />
      </van-cell-group>
      <div class="upPadding">
        <span>购买跨境商品时需要姓名、身份证用于清关,信息将被加密保存</span>
      </div>
      <div class="default">
        <van-checkbox v-model="checked" checked-color="#C71D23">设为默认地址</van-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: ""
    };
  },
  methods: {
    //   导航栏返回事件
    onClickReturn() {
      alert("返回");
    },
    // 导航栏保存事件
    onClickSave() {
      alert("保存");
    },
    // 地址切换事件
    siteSwitch() {
      alert("111");
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
.van-icon-arrow-left {
  color: black;
  height: 100%;
  font-size: 20px;
  left: 5px;
}
// 顶部导航栏左边返回号边距
.van-nav-bar__left {
  left: 5px;
}
// 中部
.All {
  padding-top: 45px;
}
//地址的字体图标
.site {
  position: absolute;
  z-index: 999;
  line-height: 52px;
  height: 100%;
  font-size: 16px;
  width: 40px;
  text-align: center;
}
// 中部输入栏
.van-hairline--top-bottom {
  height: 52px;
  align-items: center;
  .van-field {
    padding: 14px 16px;
  }
}
// 提示文字样式
.upPadding {
  padding-top: 10px;
  font-size: 12px;
  color: #c5c7cc;
  span {
    padding-left: 10px;
  }
}
// 设置默认按钮
.default {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
</style>