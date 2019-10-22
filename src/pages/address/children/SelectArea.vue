<template>
  <div>
    <van-nav-bar title="新建地址" left-text left-arrow @click-left="onClickLeft" />
    <div class="search">
      <div class="flot-rigth">
        请选择
        <van-icon class="ml-5" name="arrow-down" />
      </div>
      <van-search class="flot-left" placeholder="请输入搜索关键词" v-model="value" />
    </div>
    <van-area :area-list="areaList" />

    <!-- </div> -->
    <ul class="list">
      <li>
        <!-- <div></div> -->
        <h4>众创.瞪羚谷</h4>
        <div>观澜街道观光路大富工业区桂丰1号</div>
      </li>
      <li>
        <!-- <div></div> -->
        <h4>众创.瞪羚谷</h4>
        <div>观澜街道观光路大富工业区桂丰1号</div>
      </li>
      <li>
        <!-- <div></div> -->
        <h4>众创.瞪羚谷</h4>
        <div>观澜街道观光路大富工业区桂丰1号</div>
      </li>
      <li>
        <!-- <div></div> -->
        <h4>众创.瞪羚谷</h4>
        <div>观澜街道观光路大富工业区桂丰1号</div>
      </li>
      <li>
        <!-- <div></div> -->
        <h4>众创.瞪羚谷</h4>
        <div>观澜街道观光路大富工业区桂丰1号</div>
      </li>
      <li>
        <!-- <div></div> -->
        <h4>众创.瞪羚谷</h4>
        <div>观澜街道观光路大富工业区桂丰1号</div>
      </li>
      <li>
        <!-- <div></div> -->
        <h4>众创.瞪羚谷</h4>
        <div>观澜街道观光路大富工业区桂丰1号</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      areaList: {}
      //   searchResult: [],
    };
  },
  methods: {
    onClickLeft() {
      //   Toast('返回');
    }
  },
  created() {
    this.areaList = {
      province_list: {
        110000: "北京市",
        120000: "天津市",
        130000: "柳州市",
        140000: "桂平市",
        150000: "贵港市",
        160000: "玉林市"
      },
      city_list: {
        110100: "北京市",
        110200: "县",
        120100: "天津市",
        120200: "县"
      },
      county_list: {
        110101: "东城区",
        110102: "西城区",
        110105: "朝阳区",
        110106: "丰台区",
        120101: "和平区",
        120102: "河东区",
        120103: "河西区",
        120104: "南开区",
        120105: "河北区"
        // ....
      }
    };
  }
};
</script>

<style scoped lang="less">
.van-nav-bar__arrow {
  font-size: 23px;
  color: black;
}
.van-nav-bar {
  height: 44px;
}
.flot-left {
  width: 80%;
  float: right;
}
.flot-rigth {
  float: left;
  margin: 16px 0px 0px 12px;
  font-size: 14px;
  color: #797d82;
}
.search {
  width: 100%;
  height: 54px;
}
.van-search {
  padding: 10px 12px 10px 6px;
}
.van-address-edit {
  height: 420px;
}
// .van-address-edit {
//     // display: none;
// }
.list {
  width: 100%;

  li {
    height: 75px;
    width: 100%;
    padding-left: 38px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    div {
      font-size: 13px;
      color: #797d82;
    }
    h4 {
      font-size: 15px;
      color: #191a1b;
      margin-bottom: 7px;
    }
    &:after {
      content: "";
      width: 8px;
      height: 8px;
      background: #d1c8ca;
      position: absolute;
      top: 25px;
      left: 15px;
      border-radius: 4px;
    }
  }
  li:first-child {
    &:after {
      content: "";
      width: 8px;
      height: 8px;
      background: #971934;
      position: absolute;
      top: 25px;
      left: 15px;
      border-radius: 4px;
    }
  }
}
.van-picker{
    margin-top: 3px;
}
</style>


