<template>
  <div class="cart-befor">
    <!-- 导航栏 -->
    <div class="navagator">
      <van-nav-bar
        title="购物车"
        right-text="完成"
        right-arrow
        @click-left="onClickLeft"
        @click-right="toCart"
      >
        <van-icon name="wap-home-o" style="font-size:23px;" class="icon-line-height" slot="left" />
      </van-nav-bar>
    </div>
    <!-- 商城运费 -->
    <div
      v-if="false"
      style="height:44px;background:#fff;display:flex;line-height:44px;border-bottom: 1px solid #F4F4F4"
    >
      <van-checkbox
        style="padding: 0 15px"
        v-model="checked"
        checked-color="#C03131"
        icon-size="15px"
      ></van-checkbox>
      <span style="font-size:15px">商城承担运费</span>
    </div>
    <!-- 购物车列表 -->
    <div>

      <div class="flx-cent" v-for="(item,index) in carData" :key="index">
        <van-checkbox
          v-model="item.checked"
          checked-color="#C03131"
          icon-size="15px"
          @change="selectOne"
        ></van-checkbox>
        <div class="cart-goods">
          <img :src="item.imgUrl" alt />
        </div>
        <div class="cart-container flex2 jc-sb">
          <p class="goods-msg">{{item.masterName}}</p>
          <div class="goods-price">
            <span class="price">￥{{item.price/100}}</span>         
            <span class="count">
              <div class="small-box">
                <span
                :class="item.buyNum>1?'subtractYess':'subtractNo'"
                  style="width:34px;"
                  @click="subtract(item.cartId,item.buyNum,index)"
                >-</span>
                <span style="width:46px;border:1px solid gray;border-left:0;">{{item.buyNum}}</span>
                <span
                  style="width:34px;border:1px solid gray;border-left:0;"
                  @click="addOne(item.cartId,item.buyNum,index)"
                >+</span>
              </div>
            </span>
          </div>
        </div>
      </div>
       <Nothing  v-if="carData.length==0?true:false"></Nothing> 
    
    </div>
    <!-- 底部结算 -->    
    <div class="buttom-nav">
      <van-checkbox
        v-model="checkedAll"
        checked-color="#C03131"
        icon-size="15px"
        @click="selectAll"
      >
        <span style="color: #797d82;fontSize:18px;">全选</span>
      </van-checkbox>
      <van-button
        style="display:flex; justify-content: center;  align-items: center; height:33px; width:85px;margin-top: 8px;margin-right: 15px; font-size:16px;"
        color="#ef4040"
        @click="delCar"
      >
        <span style="display:block;width:85px; height:33px;background: rgb(192, 49, 49);display:flex; justify-content: center;  align-items: center;">删除</span>
      </van-button>
    </div>
    <div class="kongbai"></div>
    <Navagater></Navagater>
  </div>
</template>

<script>
import Navagater from "@/components/Navagator";
import Nothing from './nothing'
export default {
  components: {
    Navagater,
    Nothing
  },
  data() {
    return {
      value: 1,
      checked: false,
      carData: [],
      checkedAll: false,
      count: [],
      isShow:false,
    
      
    };
  },
  created() {
    this.getCarData();
  },



  methods: {
    //删除购物车
    delCar(){
      
       let selectArr = this.carData.filter(item => {
        return item.checked == true;
      });
      let selectCarId=selectArr.map(item=>{
        return item.cartId
      })
      let url = "cart/del"
      let data={
        cartId:selectCarId
      }
      this.$axios.post(url,data).then(res=>{
        console.log("删除",res)
         this.$store.commit("cartNum",0)
        selectCarId.forEach(carId=>{
            this.carData=this.carData.filter(item=>{           
           return item.cartId!=carId
        })
        })
         
      }).catch(err=>{
        console.log("删除失败：",err)
      })
     
    },

    //单选
    selectOne(value) {
      console.log("单选：", value);
      //筛选出被选中的状态
      let selectArr = this.carData.filter(item => {
        return item.checked == true;
      });
      if (selectArr.length == this.carData.length) {
        this.checkedAll = true;
      } else {
        this.checkedAll = false;
      }
    },
    selectAll() {
      console.log("checkedAll", this.checkedAll);
      this.carData = this.carData.map(item => {
        return {
          ...item,
          checked: !this.checkedAll
        };
      });
    },

    addOne(cartId, buyNum, index) {
      this.isShow=true
      this.count[index]++;
      console.log("index", index);
      console.log(" this.count[index]+", this.count[index]);
      console.log("this.count", this.count);
      this.buyNums = buyNum + 1;
      this.updateNum(cartId,this.buyNums,index);
    },
    subtract(cartId, buyNum, index) {
      if(this.count[index]>1){
        this.count[index]--;      
        this.buyNums = buyNum - 1;
      this.updateNum(cartId, this.buyNums,index);
     
      }
      else{
        this.isShow=false
         
      }
     
    },
    //修改商品数量
    updateNum(cartId, buyNums,index) {
      let url = "cart/updateNum";
      let data = {
        cartId: cartId,
        buyNum: buyNums
      };
      this.$axios
        .post(url, data)
        .then(res => {
          console.log("修改商品数量：", res);
          this.carData[index].buyNum =this.count[index] 
          console.log("this.count",this.count)
          //遍历数据，统计购车的总数量
          let Num = 0
          this.count.forEach(item=>{
            Num+=item
           
          })
           console.log("购物车数量：",Num)
            this.$store.commit("cartNum",Num)        
        })
        .catch(err => {
          console.log("错误：", err);
        });
    },
    //获取数据
    getCarData() {
      let url = "cart/all";
      this.$axios
        .post(url)
        .then(res => {
          console.log("购物车的列表数据：", res);

          let resList = res.list.filter(item => {
            return item.buyNum > 0;
          });

          this.carData = resList.map(item => {
            return {
              ...item,
              checked: false
            };
          });

          // this.count=res.list.buyNum
          res.list.forEach(item => {
            this.count.push(item.buyNum);
          });

          console.log("this.count", this.count);
          console.log("this.carData", this.carData);
        })
        .catch(err => {
          console.log("err", err);
        });
    },
    onClickLeft() {
      this.$router.push("/home/homePage");
    },
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(true);
    },
    toCart() {
      this.$router.push("/cart/befor");
    }
  }
};
</script>

<style lang="less" scoped>
.kongbai {
  height: 100px;
  width: 100%;
}
.van-nav-bar__left,
.van-nav-bar__right {
  font-size: 17px;
}

.van-button {
  line-height: 0px; 
}
.navagator .van-nav-bar .van-icon {
  // color: #2e2f30;
    color: #797d82;
  font-size: 24px;
}
.navagator .van-nav-bar__text {
  color: #2e2f30;
}
.buttom-nav {
  display: flex;
  justify-content: space-between;
  height: 49px;
  width: 100%;
  background: #fff;
  position: fixed;
  left: 0px;
  bottom: 49px;
}
.van-card__content {
  padding-right: 15px;
}
.van-checkbox {
  padding: 0 15px;
  background: white;
}
.flx-cent {
  padding: 15px 15px 15px 0;
  display: flex;
  background: white;
  border-bottom: 1px solid #f4f4f4;
}
.cart-befor {
  height: 100vh;
  background: #f4f4f4;
}
.van-card__bottom {
  line-height: 20px;
  margin-top: 50px;
}
.van-card {
  padding: 0px;
  background: white;
  flex-grow: 2;
}
.van-card:not(:first-child) {
  margin-top: 0px;
}
.edit .van-nav-bar__text {
  font-size: 15px;
  padding: 0 19px;
}
.icon-line-height {
  margin-bottom: 5px;
}
.cart-goods {
  img {
    width: 95px;
    height: 95px;
    background-color: #f8f8f8;
    margin-left: 15px;
  }
}
.cart-container {
  width: 100%;
  height: 100%;
  padding-left: 15px;
}
.goods-msg {
  font-size: 16px;
  display: inline-block;
  width: 207px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-price {
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-top: 50px;
  height: 26px;
}
.price {
  font-size: 15px;
  margin-right: 8px;
  color: rgb(185, 23, 23);
}
.old-price {
  font-size: 12px;
  color: rgb(172, 170, 170);
  text-decoration: line-through;
}
.count {
  display: inline-block;
  width: 115px;
  position: absolute;
  right: 0;
  color: #797d82;
  font-size: 12px;
}
.small-box {
  width: 115px;
  display: inline-block;
  margin-top: 15px;
  height: 25px;
  .subtractNo{
   border:1px solid #d2d6dc;
  }.subtractYess{
   border:1px solid #797d82;
  }
  span {
    height: 25px;
    display: inline-block;
    line-height: 25px;
    text-align: center;
  }
}
</style>