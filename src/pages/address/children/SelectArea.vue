<template>
  <div class="selectArea">
    <van-nav-bar :title="add?'新建地址':'编辑地址'" left-text left-arrow @click-left="onClickLeft" />
    <div class="search">
      <div class="flot-rigth">请选择</div>
      <van-search class="flot-left" placeholder="请输入搜索关键词" v-model="value" />
    </div>
    <div>
      <van-address-edit
      :address-info="addressInfo"
        :area-list="areaList"
        delete
        save
        show-postal
       :save-button-text="buttonText"
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
//  :address-info="addressInfo"
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
      newArr: [],
      addressId:""
    
    };
  },
  methods: {
    onClickLeft() {
      //返回
      console.log("返回");
      this.$router.go(-1);
    },
    onSave(content) {  
      /////////////////添加地址的情况下
      if(this.add){      
      this.newArr = content; //需要保存的对象      
      let url = "/address/add";
      let data = content;
      this.$axios
        .post(url, data)
        .then(res => {
          this.$toast.success("添加地址成功");
        })
        .catch(err => {
          this.$toast.fail("添加地址失败");
        });
      }
      /////////////////////////修改
      else{
         this.newArr = content; //需要保存的对象           
              console.log("修改",this.editaddress)
               let data = content;
           //调用编辑接口
            let url ="/address/edit?addressId="+this.addressId
             
            this.$axios.post(url,data).then(res=>{
               let toastClear= this.$toast.success("修改成功")
               console.log("res",res)
                setTimeout(()=>{
                    toastClear.clear()
                     this.$router.push("/address/list")
                },1000)
            }).catch(err=>{
                this.$toast.fail("修改失败")
                console.log("修改失败",err)
            })
      }


    },
    onDelete(content) {
      //删除
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          //详细地址的选择
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          },
          {
            name: "广西自治区",
            address: "河池市"
          },
          {
            name: "新疆",
            address: "维吾尔"
          },
          {
            name: "新疆11",
            address: "维吾尔11"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  },
  created() {
 
   this.addressInfo=this.add?{}:this.editaddress
   this.buttonText=this.add?"保存":"修改"
   this.addressId=this.addressInfo.addressId
   console.log("this.addressInfo",this.addressInfo)
    this.areaList = {
      province_list: {
        110000: "北京市",
        120000: "天津市",
        130000: "柳州市",
        140000: "桂平市",
        150000: "贵港市",
        160000: "玉林市",
        170000: "河池市"
      },
      city_list: {
        110100: "北京市",
        110200: "县",
        120100: "天津市",
        120200: "县",
        130100: "柳南区",
        130200: "柳北区",
        170100: "南丹县",
        170200: "天鹅县"
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
        130201: "五星街",
        130301: "五星街",
        170101: "里湖乡",
        170102: "六寨镇",
      }
    };
  },
  computed: {
    add(){ //判断我们是否是通过添加地址跳转过来的
    console.log(this.$route.path.includes("area"));
       return this.$route.path.includes("area");
    },
    editaddress(){
      return this.$store.state.editaddress
    }
   
   
  },
};
</script>

<style lang="less">
.van-picker__toolbar .van-picker__confirm {
  color: black;
}
.van-picker__toolbar .van-picker__cancel {
  color: black;
}
</style>
<style scoped lang="less">
.search .flot-left {
  width: 79%;
}

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


