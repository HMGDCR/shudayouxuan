<template >
  <div class="first">
    <!-- 顶部导航栏 -->
    <div class="navigation">
      <div class="returnClick" @click="onClickReturn">
        <img
          class="returnIcon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA2CAYAAACm9ZtyAAAAAXNSR0IArs4c6QAABApJREFUWAnlWUlPFEEUruoeyLgwoCYmTPewROTgeJQrW0KCkOBFExNioheNetfoD8DoWUj0ZFQS8cgBNIqG6InoTT1hhNk4uByYg8jMdPne0I/0TO/LyEESqKWr3vfVq9f9vSoY+x9+hBBcUZRxVVXHsP7P15xUlOn2pCLwF4kYCUjGRiPqipKaEoJdI9ucc0F1LBtKIKmqNzSh3doF5PxpNptd3G1DJWZsRFlvV9XLQhN3ySbnbL73eM+leg80JCCSydR5wbRZAK96GEDf7N8XH1tdXf1DhKiMfAuqQcbFYwJnnK8cams9YwWOJCL1ALxmA5pgL+BVi1dXyPknmbOBXC73q9q2+CNb9AXqSqVSpyqaeAmTD6ABcPvX5pg8DEH33clgJAQ6OjpOVDRtCYDadPB8U0weWl9fzzqB47PQMdDZ2dldrmiv4F0/UgVn7AeAjwD4NzdwfbyXYdZjALy9VK68gz0/tjOCb7KYNLyRyXy0nmHuDRyEEHCHK4ItMyFOolnY898SZ6ch4JbNMPY9gbYgnU4fBPBFA3iJM3HOL3iVuD036yddXV3x7VJ5Adw+pI/QOJMmC4XsM+sZzr2+PDA4OBjbLpXmDOAQxvxqUHCk5lkLABQ0PfUIpGyC1sQlfrOQyz2kdpDSswcUVb0vmJgkEIlLUwB+j9pBS09vAWq6UVZB2WYK+fz1oKDGea4EUNNrZJXx2Xw+e6FeVo1G/dQdY8BG0y9GBY5EbT1goelvm5tiY2tra1t+Vug21jIIbTR9ImpwSw8E0XS3VTo9r5HjoJruBOD2rGYLKhXtAUxowUkQaAVdVjfcjIR5XkMgjKGgc2sIyLJ0BQwV0Rh8epPb5cpr1Pygxr3MM72GpiBk/LMssX6nxNILkN2YGg/gINR00PazEAOlnUkijdqPOYCdkTD9Jg+QsT39ECEJ1HhIsXYPlZgDQC7wHHMCIhlFaesBMt5oMTLFAAFTiZoP2n+H2pgTQG4wTe2wZc2X0M5Ysbi5lEgkjsLzPn1MX6KlNY79dnO89rtuARnSU7InxqxIT8lCZUWuW0AEMAfo7e2BXIDNUx8mKqCc+PEK/OPZA4Swp2k5ksCcAM77E6BWKzopicF9QP3lExF2K317gAxaHM224Lsx6vd0FJgAEjEfTlkxJkt4J/CBiLqVoQjoJLrhhPwe1RPbEKQ/Y7Lcn8lkvriB43PPb4GdMbwHgFWPIDCOwXsCvC/AewO7Ocb+0ATQGK5WlqRRqPrOJUJvgXE1plzCwyVVJB4gEqZcAi4v3HKJSD1ARPzkEpF6gAjY5BJzVrlEQzxARLzkEg0lgETqj/ayxMchVhaIZEO2gIxjCUf52/CNmKE+lHWq/7NyJ5fYw3/ZOK30L7lS0JLnwwCCAAAAAElFTkSuQmCC"
          alt
        />
      </div>
      <van-nav-bar title="新增地址" right-text="保存" fixed @click-right="onClickSave" />
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
        <van-field placeholder="点击选择地址" style="padding-left:31px;" />
      </van-cell-group>
      <van-cell-group>
        <van-field placeholder="详细地址:例如17号楼601等" />
      </van-cell-group>
      <van-cell-group style="margin-top:10px;">
        <van-field placeholder="身份证号(选填)" />
      </van-cell-group>
      <div class="upPadding">购买跨境商品时需要姓名、身份证号用于清关，信息将被加密保存</div>
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
      alert("选择地址");
    }
  }
};
</script>
<style lang="less">
// 中部input占位符样式
.van-field__control {
  font-size: 15px;
}
// 提示文字样式
.upPadding {
  font-size: 11px;
  color: #bdc0c5;
  text-align: left;
  margin-top: 10px;
  padding: 0 15px;
}
.van-checkbox__label {
  color: #797d82;
}
</style>

<style lang="less" scoped>
// body的样式
.first {
  background: #f4f4f4;
  width: 100vw;
  min-height: 100vh;
}
// 导航栏
.navigation {
  height: 44px;
  width: 100vw;
  display: flex;
}
.van-hairline--bottom {
  height: 44px;
}
// 返回按钮
.returnClick {
  display: flex;
  height: 100%;
  width: 41px;
  box-sizing: border-box;
  align-items: center;
}
// 返回图标
.returnIcon {
  margin-left: 14px;
  vertical-align: middle;
  width: 11px;
  height: 19px;
  font-size: 15px;
  color: #191a1b;
}
// 顶部导航栏地址管理样式
.van-nav-bar__title {
  font-size: 17px;
  font-family: 600;
}
// 顶部导航栏右边添加样式
.van-nav-bar__text {
  color: black;
  font-size: 15px;
  color: #797d82;
}
// 顶部导航栏左边返回号样式
.returnClick {
  z-index: 999;
  position: relative;
}
.van-icon-arrow-left {
  color: black;
  height: 100%;
  font-size: 20px;
  left: 5px;
}
// // 中部
// .All {
//   padding-top: 45px;
// }
.van-cell-group {
  margin-top: -1px;
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
  color: #ccdcff;
  left: 2px;
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
  font-size: 11px;
  color: #bdc0c5;
  text-align: left;
  margin-top: 10px;
  padding: 0 15px;
}
// 设置默认按钮
.default {
  display: flex;
  justify-content: center;
  padding: 25px;
  font-size: 15px;
}
</style>