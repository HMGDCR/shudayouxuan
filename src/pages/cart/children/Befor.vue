<template>
  <div class="cart-befor">
    <!-- 导航栏 -->
    <div class="navagator">
      <!-- <van-nav-bar title="购物车" right-text="编辑" class="edit" @click.native="toEdit">
            <van-icon  style="font-size:23px;" class="icon-line-height" name="wap-home-o" slot="left"/>
      </van-nav-bar>-->
      <van-nav-bar
        title="购物车"
        right-text="编辑"
        right-arrow
        @click-left="onClickLeft"
        @click-right="toEdit"
      >
        <van-icon name="wap-home-o" style="font-size:23px;" class="icon-line-height" slot="left" />
      </van-nav-bar>
    </div>
    <!-- 商城运费 -->
    <div
      style="height:44px;background:#fff;display:flex;line-height:44px;border-bottom:1px solid #F4F4F4"
    >
      <van-checkbox
        style="padding: 0 15px"
        v-model="checked"
        checked-color="#C03131"
        icon-size="15px"
      ></van-checkbox>
      <span style="font-size:15px; ">商城承担运费</span>
      <span class="no-fare">免运费</span>
    </div>
    <!-- 购物车列表 -->
           <van-checkbox-group v-model="result" ref="checkboxGroup">
    <div>
      <div class="flx-cent" v-for="(item,index) in carData" :key="index">
        <van-checkbox v-model="checked" checked-color="#C03131" icon-size="15px"></van-checkbox>
        <div class="cart-goods">
          <img :src="item.imgUrl" alt />
        </div>
        <div class="cart-container flex2 jc-sb">
          <p class="goods-msg">{{item.masterName}}</p>
          <div class="goods-price">
            <span class="price">￥44.9</span>
            <span class="old-price">￥55.9</span>
            <span class="count">X {{item.buyNum}}</span>
          </div>
        </div>
     
      </div>
      <!-- <div class="flx-cent">
        <van-checkbox v-model="checked" checked-color="#C03131" icon-size="15px"></van-checkbox>
        <div class="cart-goods">
          <img src="https://mall.s.maizuo.com/9085c7f2b5efb1a4abf3f3a962dcb088.png" alt />
        </div>
        <div class="cart-container flex2 jc-sb">
          <p class="goods-msg">商品信息多余文字会省略的啊啊啊啊啊啊</p>
          <div class="goods-price">
            <span class="price">￥44.9</span>
            <span class="old-price">￥55.9</span>
            <span class="count">X 1</span>
          </div>
        </div>     
      </div> -->
    </div>
        </van-checkbox-group>
    <!-- 底部结算 -->
    <div class="buttom-nav">
      <van-checkbox v-model="checked" type="primary" checked-color="#C03131" icon-size="15px" @click="checkAll">
        <span style="color: #797d82;">全选</span>
      
      </van-checkbox>
      <span class="all-price">￥ 44.5</span>
      <van-button style="height:49px;width:105px;font-size:17px" color="#C03131">结算</van-button>
    </div>
    <Navagater></Navagater>
  </div>
</template>

<script>
import Navagater from "@/components/Navagator";
export default {
  components: {
    Navagater,      
  },
  computed: {
     carTotal(){
             return  this.$store.state.carTotal
        }
  },
  created() {
    this.getCarData()
  },
  data() {
    return {
      checked: true,
      result:[],
      carData:[]
    };
  },
  methods: {
    //获取商品详情,通过这个来获取商品的价格
    getProductData(){
    let idArr=[]
    for(let i=0;i<this.carTotal.length;i++){
      if(idArr.indexOf(this.carTotal[i])==-1){       
           let url = "product/detail";
            let data = {
              productId:this.carTotal[i]
            }
              this.$axios.post(url,data).then(res=>{
          console.log("商品详情：",res)
        }).catch(err=>{
          console.log("错误",err)
        })

      }
    }
     
   
    },
    //获取数据
    getCarData(){
     
      let url ="cart/list"
      this.$axios.post(url).then(res=>{
        console.log("购物车的列表数据：",res)
        this.carData=res.list
        console.log("this.carData",this.carData)
          this.getProductData()

      
      }).catch(err=>{
        console.log("err",err)
      })
    },
    onClickLeft() {
        this.$router.push("/home/homePage");
    },
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(true);
    },
    toEdit() {
      console.log(1111111);
      this.$router.push("/cart/after");
    }
  }
};
</script>
<style lang="less">
.flx-cent {
  .van-card__title.van-multi-ellipsis--l2 {
    width: 200px;
    font-size: 15px;
    color: #2e2f30;
  }
}
</style>
<style lang="less" scoped>
.van-nav-bar__left,
.van-nav-bar__right {
  font-size: 17px;
}
.navagator .van-nav-bar .van-icon {
  color: #2e2f30;
  
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
.no-fare {
  position: absolute;
  right: 15px;
  color: #797d82;
  font-size: 12px;
}
.van-card__content {
  width: 200px;
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
  // width:115px;
  position: absolute;
  right: 0;
  color: rgb(184, 181, 181);
  font-size: 12px;
}
.small-box {
  width: 115px;
  display: inline-block;
  margin-top: 15px;
  height: 25px;
  span {
    height: 25px;
    display: inline-block;
    line-height: 25px;
    text-align: center;
  }
}
.all-price{
    display:inline-block;
    height:100%;
    color:rgb(194, 60, 60);
    font-size:16px;
    position:absolute;
    right:114px;
    // line-height:49px;
    margin-top:18px;
}
</style>