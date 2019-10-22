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
    <div>
      <van-address-edit
        :area-list="areaList"
        delete
        save
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </div>
  </div>
</template>

<script>
// show-postal   是否显示邮编
// show-delete   是否显示删除
// show-set-default   是否显示默认地址栏
// show-search-result  是否显示搜索结果
export default {
  data() {
    return {
      value: "",
      areaList: {},
      searchResult: [],
      newArr: []
    };
  },
  methods: {
    onClickLeft() {  //返回
      
      // Toast('返回');
      console.log("返回");
      this.$router.go(-1);
    },
    onSave(content) {
      this.newArr = content; //保存
      console.log("保存");
      console.log(content); //回调参数
    },
    onDelete(content) {  //删除
      
      console.log(content); //回调参数
      console.log("删除");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [  //详细地址的选择
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          },
          {
            name: "广西自治区",
            address: "贵港市"
          },
              {
            name: "新疆",
            address: "维吾尔"
          }
        ];
      } else {
        this.searchResult = [];
      }
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
        120200: "县",
        130100: "柳南区",
        130200: "柳北区"
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
        120105: "河北区",
        130101: "飞鹅路",
        130201: "五星街"
        // ....
      }
    };
    console.log(this.newArr);
  }
};
</script>
<style scoped lang="less">
.van-nav-bar__arrow {
  font-size: 23px;
  color: black;
  opacity: 0.5;
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
</style>


