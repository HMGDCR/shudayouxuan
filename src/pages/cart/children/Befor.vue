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
    v-if="false"
      style="height:44px;background:#fff;display:flex;line-height:44px;border-bottom:1px solid #F4F4F4"
    >
      <van-checkbox
        style="padding: 0 15px"
        v-model="checkedAll"
        checked-color="#C03131"
        icon-size="15px"
      ></van-checkbox>
      <span style="font-size:15px; ">商城承担运费</span>
      <span class="no-fare">免运费</span>
    </div>
    <!-- 购物车列表 -->

    <div>
      <!-- <router-link :to="`/home/detail/${item.productId}`" tag="div"></router-link> -->
      <div class="flx-cent" v-for="(item,index) in carData" :key="index">
        <van-checkbox
         v-model="item.checked" 
         checked-color="#C03131" 
         icon-size="15px"
         @change="selectOne(index)"
         ></van-checkbox>
        <router-link :to="`/home/detail/${item.productId}`" tag="div" class="cart-goods">
          <img :src="item.imgUrl" alt />
        </router-link>
        <div class="cart-container flex2 jc-sb">
          <p class="goods-msg">{{item.masterName}}</p>
          <div class="goods-price">
            <span class="price">￥{{item.price/100}}</span>
            <span class="old-price" v-if="false">￥{{item.maxPrice}}</span>
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
   <div class="kongbai"></div>
    <!-- 底部结算 -->
    <div class="buttom-nav"  v-if="carData.length>0?true:false">
      <van-checkbox v-model="checkedAll" 
    
       checked-color="#C03131" 
       icon-size="15px"
       @click="selectAll"
       >
        <span style="color: #797d82;">全选</span>
      
      </van-checkbox>
      <span class="all-price" v-show="totalPrice>0">￥{{totalPrice}}</span>
      <van-button  style="height:49px;width:105px;font-size:17px" color="#C03131" @click="payMoney">结算</van-button>
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
        },
        //计算总价钱
        totalPrice(){
          let money=0
          //筛选出选中的状态
          let listArr=this.carData.filter(item=>{
            return item.checked==true
          })
          // 遍历筛选的选项
          listArr.forEach(item => {
            money+=(item.buyNum*item.price/100);
          });
          return money.toFixed(2)>0?money.toFixed(2):0
        },

        //测试的，查看商品购物车被选中的carId
        SeletCarNum(){
          return this.$store.state.SeletCarNum;
        }


  },
  created() {
    this.getCarData()
  },
  data() {
    return {
      checkedAll: false,
      result:[],
      carData:[],
      seCarId:[] //存放购物车Id
    
    };
  },
  methods: {
    //结算
    payMoney(){
    //当购物车的长度为0的时候，结算按钮不能跳转    
    if(this.SeletCarNum.length>0){
      console.log("点击跳转")
      console.log("this.SeletCarNum",this.SeletCarNum)
      this.$loading(true)
      let $this = this
      //预订单接口
      let url = "/preOrder/add"
      let data={
        totalMoney:this.totalPrice,
        cartId:this.seCarId
      }
      this.$axios.post(url,data).then(res=>{
        console.log("添加预订单：",res)
        this.$store.commit("updataPreOrderId",res.result.preOrderId)
           setTimeout(()=>{
        this.$store.commit("totalPrice",this.totalPrice)
         this.$router.push("/order/confirm")
        $this.$loading(false)
      },500)
      }).catch(err=>{
        console.log("添加预订单失败：",err)
      })
      
   
    }else{
      this.$toast("亲，您还没有选择需要的宝贝呦！！！")
    }
      
   

     
    },
    //获取商品详情,通过这个来获取商品的价格
 
    // 单选 这里我们使用组件的change的事件，它自带一个回调参数，这个参数是布尔值，可以选中的状态
    selectOne(value){   
    
         // 被选中商品的数量
        let selectArr= this.carData.filter(item=>{

             return item.checked;
         })

         console.log("被选中的有：",selectArr)
        //把被选中的商品的购物车Id存起来
         this.seCarId=selectArr.map(item=>{
          return  item.cartId
         })
           console.log("被选中商品购物车的Id的有：",this.seCarId)
          //把被选中的商品的购物车Id存到vuex中，用于当我们支付完后，需要把他们删除
          this.$store.commit("SeletCarNum",this.seCarId)
          //查看被选中商品购物车的Id
          console.log("vuex中SeletCarNum的值：",this.SeletCarNum)

        // 判断被选中商品和全部商品的数量是否相等
        if(selectArr.length==this.carData.length){
          this.checkedAll=true
        }
        else{
          this.checkedAll=false
        }
    },
    // 全选 全使用的是点击事件click
    selectAll(value){
      console.log("多选：",this.checkedAll)
      this.carData=this.carData.map(item=>{
        return {
          ...item,
          checked: !this.checkedAll
        }
      })
    },

    //获取数据
    getCarData(){     
      let url ="cart/all"
      this.$axios.post(url).then(res=>{
      
    let resList= res.list.filter(item=>{
      return item.buyNum >0
       })
         console.log("购物车的列表数据：",resList)
        //由于返回的对象里没有我们需要的checked属性，所有我们需要对数组里的每一个对象添加checked属性，使用的方式是map和扩展运算符
        this.carData= resList.map(item=>{

          return {
            ...item,
            checked:false
          }
        })
        // this.carData=res.list
        console.log("this.carData",this.carData)
          // this.getProductData()      
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
.kongbai{

    height: 100px;
    width: 100%;
}
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
  .accounts{
    position: fixed;
    right: 0;
    bottom:49px;
  }
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