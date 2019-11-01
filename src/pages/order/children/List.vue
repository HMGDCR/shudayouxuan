<template>
  <div class="order-list">
    <div class="navagator">
      <!-- 导航 -->
      <div>
        <van-nav-bar title="我的订单" class="myOrder">
          <van-icon name="wap-home-o" slot="left" @click="toHomePage" />
        </van-nav-bar>
      </div>
      <!-- 标签栏 -->
      <div>
        <van-tabs>
          <van-tab title="全部"></van-tab>
          <van-tab title="待分享"></van-tab>
          <van-tab title="待付款"></van-tab>
          <van-tab title="待发货"></van-tab>
          <van-tab title="待收货"></van-tab>
        </van-tabs>
      </div>
    </div>
    <!-- 商品详情 -->
    <div class="goodsDetail">
    
        <div class="list" v-for="(item,index) in orderList" :key="index">
                  <van-card :num="itemCarts.buyNum" :price="itemCarts.price | formatMoney" :title="itemCarts.masterName"
                  v-for="(itemCarts,cartsIndex) in item.carts" :key="cartsIndex"
                :thumb="itemCarts.imgUrl"
                style="font-size: 15px">
                <van-divider />
                             
            </van-card>
              <div class="listFooter">
                  <div class="footer" >
                      <span class="footerOne">运费{{item.expressFee | formatMoney}}</span><br/>

                    <span >共{{item.number}}件商品 &nbsp;&nbsp;&nbsp;&nbsp; 实付￥{{item.allFee | formatMoney}}</span>
                </div> 
                    
                     <div><van-button size="small" class="buttosize" @click.native="delCart(item.orderId,index)">删除</van-button>
                    <van-button size="small" class="buttosize">重新购买</van-button></div>
                </div>
        </div>          
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderList: []
    };
  },
  created() {
    this.getOrderList();
  },
  methods: {
      //删除购物车
      delCart(orderId,index){
          let url ="/order/del?orderId="+orderId
          this.$axios.post(url).then(res=>{
              console.log("删除成功：",res)
              this.orderList.splice(index,1)
          }).catch(err=>{
              console.log("删除失败：",err)
          })      
      },
    //获取所有的订单
    getOrderList() {
      let url = "/order/all";
      let data = {
        pageNum: 2
      };
      this.$axios
        .post(url, data)
        .then(res => {
          console.log("我的订单:", res);
          this.orderList = res.list;
         //为数据添加商品数量的属性，用于渲染
          this.orderList = this.orderList.map(item=>{
              let number=0
            item.carts.forEach(element => {
                number+=element.buyNum
            });
              return {
                  ...item,
                  number:number
              }
          })
           console.log("this.orderList",this.orderList)
         
        })
        .catch(err => {
          console.log("获取订单失败：", err);
        });
    },
    toHomePage() {
      this.$router.push("/home/homePage");
    }
  }
};
</script>

<style lang="less" scoped>
.van-nav-bar .van-icon {
  color: #2e2f30;
  font-size: 22px;
}
.order-list {
  height: 100vh;
  background: #f4f4f4;
  .navagator {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 9;
  }
  .goodsDetail {
    margin-top: 90px;
    .list{
        margin-bottom: 10px;
        background: #fff;
        .listFooter{
          height: 110px;
          color: #323233;
           padding-right: 10px;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items:flex-end;
          .footer{
              position: relative;
              .footerOne{
                  bottom: 25px;
                  position: absolute;
                  right: 0;
              }
               margin-right: 15px;
              font-size: 16px;
          }
         
        }
    }
  }
}
img {
  width: 70px;
  height: 70px;
}

.van-card__thumb {
  width: 70px;
  height: 70px;
}
.van-image__error,
.van-image__img,
.van-image__loading {
  //  display: block;
  width: 70px;
  height: 70px;
}
.van-card__content {
  height: 70px;
}
.van-card__header {
  min-height: 70px;
  padding-bottom: 10px;
}

.van-card__bottom {
  line-height: 20px;
  margin-top: 32px;
}
.van-card {
  background: white;
  border-bottom: 1px solid #f4f4f4; 
}
.flr {
  float: left;
  line-height: 33px;
  color: #bdc0c5;
}
.buttosize {
    margin-right: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    line-height: 25px;
    background: #c03131;
    color: #fff;

  height: 25px;
  font-size: 15px;

  box-sizing: border-box;
}
</style>