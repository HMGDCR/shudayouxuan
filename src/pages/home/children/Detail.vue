<template>
    <div class="big-body">
        <!-- 轮播图 -->
        <van-swipe @change="onChange">
            <van-swipe-item v-for="(item,index) in result.banners" :key="index">               
                <img :src="item" alt />
            </van-swipe-item>
            <!-- <van-swipe-item>
                <img src="https://mall.s.maizuo.com/71e5b918b306be65390ff0c3fb8155f2.jpg?x-oss-process=image/resize,w_563" alt />
            </van-swipe-item>
            <van-swipe-item>
                <img src="https://mall.s.maizuo.com/85692b2f7a7c0ac417a39ec33b4d8895.jpg?x-oss-process=image/resize,w_563" alt />
            </van-swipe-item>
            <van-swipe-item>
                <img src="https://mall.s.maizuo.com/ebbcef931beb1d633533835ef7f51639.jpg?x-oss-process=image/resize,w_563" alt />
            </van-swipe-item> -->
            <!-- 此处使用三元表达式，判断数据回来之前使用0，回来之后使用result -->
            <div class="custom-indicator" slot="indicator">{{ current + 1 }}/{{result.banners?result.banners.length:0}}</div>
        </van-swipe>
        <div class="return" @click="goBack"><van-icon name="arrow-left" size="23px"/></div>    
        <!-- 商品介绍 -->
        <div class="item-info">
            <div class="item-info-container">
                <div class="item-info-master">
                <span class="label f12" style="background-color: rgb(120, 160, 209);">直降</span>
                <span class="label f12" style="background-color: rgb(145, 188, 111);">包邮</span>
                <!-- 极鲜网 冻巴沙鱼柳 450-500g*2袋 分活动是佛活动啊过分分活动是佛光复读机啊过分活动啊过分分活动啊过分分活动啊过分分活动啊过分分活动啊过分分 -->
             {{result.masterName}}
                </div>
                <!-- <div class="item-info-slave color-gray">果园生态种植 皮薄香甜爽口 富含天然维C</div> -->
                <div class="item-info-slave color-gray">  {{result.slaveName}}</div>
                <div class="item-info-price flex jc-sb ai-fe mt-10">
                <span>
                    <span class="price mr-5" style="font-size:15px">￥</span>
                    <span class="f20 price mr-5">{{result.minPrice/100}}</span>
                    <span class="f12 old-price mr-5 color-gray" style="text-decoration:line-through;">￥{{result.maxPrice/100}}</span>
                </span>
                <span class="f12 color-gray">3932人购买</span>
                </div>
            </div>
        </div>
        <!-- 数目弹框 -->
        <div class="item-cell">
            <van-cell is-link @click="showPopup" style="font-size:13px"><span class="color-gray">规格： X </span>{{count}}</van-cell>
            <van-popup v-model="show" position="bottom" :style="{ height: '60%' }">
                <div class="topic flex mt-15">
                <img class="img-backcolor" :src="result.banners&&result.banners[0]" alt />
                <div class="flex2 jc-c" style="height:100%">
                    <div style="margin-bottom:4px">
                    <span class="price mr-5" style="font-size:15px;">￥</span>
                    <span class="f20 price mr-5" style="margin-bottom:4px;">44.9</span>
                    </div>
                    <div>&nbsp;X {{count}}</div>
                </div>
                </div>
                <div class="count-box">
                <div>数量</div>
                <div class="small-box">
                    <span style="width:40px;border:1px solid gray;" @click="subtraction">-</span>
                    <span style="width:72px;border:1px solid gray;border-left:0;">{{count}}</span>
                    <span style="width:40px;border:1px solid gray;border-left:0;" @click="add">+</span>
                </div>
                </div>
                <van-goods-action style="width:100%">
                <van-goods-action-button color="white" style="color:black" class="add-cart" type="warning"  text="加入购物车"  @click="onClickButton" />
                <van-goods-action-button style="border-radius:0;height:50px;margin-right:0" type="danger" text="立即购买" color="#c03131" @click="onClickButton" />
                </van-goods-action>
            </van-popup>
        </div>
        <!-- 未登录地址选择弹框 -->
        <div class="address-select">
            <van-cell is-link @click="showPopup2" class="fcc"><span class="color-gray">配送至：</span><span class="more-text selected-address" style="">上海黄浦区非机动啥假发票感觉到破案机机感觉到破案机机感觉到破案机机机机机构</span></van-cell>
            <van-popup v-model="show2" position="bottom" :style="{ height: '60%' }">
                <div class="msg">
                <div class="f15" style="margin-bottom:4px;">请选择配送区域</div>
                <div class="f12" style="color:red;">未显示地区即超出配送范围，无法进行选择</div>
                </div>
                <div style="height:20px" class="ml-15">湖南省/衡阳市/耒阳市</div>
                <van-area :area-list="areaList" style="color:black"/>
            </van-popup>
        </div>
        <!-- 登录地址选择弹框 -->
        <!-- <div class="address-select">
        <van-cell is-link @click="showPopup3">配送至：<span class="more-text" style="width:260px;height:19px;display:inline-block;font-size:13px;line-height:19px;padding-top:3px;">上海黄浦区佛非机动啥假发票感觉到破案机构</span></van-cell>
        <van-popup v-model="show3" position="bottom" :style="{ height: '60%' }">
            <div style="font-size:17px;height:49px;padding:12px 19px;">配送至：</div>
            <div class="selected fcc">
                <van-icon name="location-o" size="16px"/>
                <span class="more-text" style="margin:0 10px;width:260px;height:19px;display:inline-block;font-size:13px;line-height:19px;padding-top:3px;">上海黄浦区佛非机动啥假发票感觉到破案机构感觉到破感觉到破感觉到破</span>
                <van-radio-group v-model="radio">
                    <van-radio name="1" icon-size="16px"></van-radio>
                    <van-radio name="2" checked-color="red" icon-size="16px"></van-radio>
                </van-radio-group>
            </div>
            <div class="fcc f15" style="background-color:red;color:white;width:100%;height:50px;position:fixed;bottom:0;">
                选择其他地址
            </div>
        </van-popup>
        </div> -->
        <div class="baged f12 flex ai-c" style><van-icon name="passed" icon-size="12px" color="red" style="margin-right:5px;"/><span class="color-gray">包邮</span></div>
        <div class="mt-10 f12 fcc color-gray" style="background-color:white;height:46px;">—— 商品详情 ——</div>
        <div class="images">
            <img :src="item" alt="" v-for="(item,index) in result.descPics" :key="index">
            
            <!-- <img src="https://mall.s.maizuo.com/92d393d03848b8ea112d609e0ae11a00.png" alt="">
            <img src="https://mall.s.maizuo.com/30266ad53356660a815d8b799eac35bf.jpg" alt="">
            <img src="https://mall.s.maizuo.com/e828214d7b75e7db532bf1cf3cf13f2f.jpg" alt="">
            <img src="https://mall.s.maizuo.com/f2919825a151d5631530d47b26fc27cd.jpg" alt="">
            <img src="https://mall.s.maizuo.com/c9a60deecd83d63a7ff49512f92ff57f.jpg" alt=""> -->
            <div class="mt-10 f12 fcc color-gray" style="background-color:white;height:46px;">—— 预定流程及须知 ——</div>
            <img src="https://file.sdyxmall.com/h5/v1/public/app/img/group5.b0b24d0.png" alt="">
        </div>
        <div class="context">
            <p class="big-item">一、关于发货</p>
            <p class="small-item">个工作日内发出（周末、法定节假日需顺延）个工作日内发出（周末、法定节假日需顺延）；</p>
            <p class="big-item">二、关于发货</p>
            <p class="small-item">个工作日内发出（周末、法定节假日需顺延）个工作日内发出（周末、法定节假日需顺延）；</p>
            <p class="big-item">二、关于发货</p>
            <p class="small-item">个工作日内发出（周末、法定节假日需顺延）个工作日内发出（周末、法定节假日需顺延）；</p>
            <p class="big-item">二、关于发货</p>
            <p class="small-item">个工作日内发出（周末、法定节假日需顺延）个工作日内发出（周末、法定节假日需顺延）；</p>
        </div>
        <!-- 底部购物车 -->
        <van-goods-action style="width:100%">
            <van-goods-action-icon icon="cart-o" :info="result.cartNum==0?'':result.cartNum" class="ml-10" @click="onClickIcon" />
            <van-goods-action-button color="white" style="border-radius:0;color:black;height:50px;" type="warning"  text="立即购买" @click="buyImmediate" />
            <van-goods-action-button style="border-radius:0;height:50px;margin-right:0" type="danger" text="加入购物车" color="#c03131" @click="onClickButton" />
        </van-goods-action>
    </div>
</template>
<script>
export default {
    data() {
        return {
            count:1,
            productId:"",
            radio: '1',            
            current: 0,
            show: false,
            show2: false,
            show3: false,
            areaList: {
                province_list: {
                110000: "北京市",
                120000: "天津市"
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
                }
            },
            result:{} //详情数据
           
        };
    },
    //监听属性
    watch: {
    
    },
    //计算属性
    computed: {       
        total(){
             return  this.$store.state.total
        },
        cartNum(){
            return this.$store.state.cartNum
        },
       
    },
    methods: {
        //减法
        subtraction(){
       
        if(this.count>1){
        this.count--}
        },
        add(){
   
        this.count++
        },
        goBack(){
            this.$router.go(-1)
        },
        buyImmediate(){
            this.$router.push("/order/confirm")
        },
        onClickIcon() {
            this.$router.push("/cart/befor")
        },
        onClickButton() {
            //添加到购物车
            //（1） 购物车的商品数量增加
            //  this.$store.commit("addtoCart")
             //（2）把商品的Id传到购物
     
            
            let url ="cart/add";
        // this.add()
            let data = {
                productId:this.productId,
                buyNum:this.count
            };
            this.$axios.post(url,data).then(res=>{
                
                this.result.cartNum= this.result.cartNum++
                let Num = this.result.cartNum++
                this.$store.commit("cartNum",Num+1)

                console.log("返回结果",res)             
              console.log("catNum",this.cartNum)
            }).catch(err=>{
                console.log("购物车错误：",err)
            })
        },
        onChange(index) {    
            this.current = index;
  
        },
        showPopup() {
            this.show = true;
        },
        showPopup2() {
            this.show2 = true;
        },
        showPopup3() {
            this.show3 = true;
        },
        //获取商品详情的数据
        getDetail(productId){         
            let url ="product/detail?productId="+productId          
            this.$axios.post(url).then(res=>{
                
              this.result= res.result
              console.log("详情：",this.result)
            
            }).catch(err=>{
                console.log("err",err)
            })
        }
    },

    created() {
       this.productId=  this.$route.params.productId
       this.getDetail(this.productId)
       console.log("穿过来的Id",this.productId)
    },
};
</script>

<style lang="less">
.big-body .van-picker__confirm,.van-picker__cancel{
    color: black;
}
.big-body .van-goods-action-icon__icon{
    font-size:25px
}
</style>

<style lang="less" scoped>
// <!-- 轮播图 -->
.van-swipe {
  position: relative;
  background-color: rgb(249, 249, 249);
  img {
    height: 375px;
    width: 100%;
  }
}
.custom-indicator {
    transform: scale(.9);
    display: flex;
    justify-content: center;
    align-items: center;
    right: 14px;
    bottom: 14px;
    position: absolute;
    font-size: 14px;
    box-sizing: border-box;
    width: 27.2px;
    border: 1px solid #d2d6dc;
    background-color: white;
    color: #d2d6dc;
    z-index: 9;
}
.return{
    font-size:28px;
    position:fixed;
    left:10px;
    top:10px;
    height:28px;
    width:28px;
    border-radius:23px;
    background-color:rgba(255, 255, 255, 0.5);
    color:#2c3e50;
    text-align:center;
    line-height:28px;
}

// <!-- 商品介绍 -->
.item-info {
    background-color:white;
    border-bottom: 1px solid #f7f4f4;
    padding: 15px;
    box-sizing: border-box;
}
.van-cell.van-cell--clickable{
    border-bottom: 1px solid #f7f4f4;
}
.color-gray{
    color:#797d82
}
.item-info-container {
    font-size: 15px;
    color: #2c3e50;
}
.item-info-master {
    overflow: hidden;
    /* 将对象作为弹性伸缩盒子模型显示 。 */
    display: -webkit-box;
    /* 设置或检索伸缩盒对象的子元素的排列方式 。 */
    -webkit-box-orient: vertical;
    /* 显示为文本行数 */
    -webkit-line-clamp: 2;
    box-sizing: border-box;
    line-height: 25px;
    max-height: 44px;
}
.more-text{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.label {
  height: 15px;
  line-height: 15px;
  display: inline-block;
  text-align: center;
  color: white;
  width: 40px;
  margin-right: 5px;
}
.item-info-slave {
  font-size: 13px;
  margin-top: 8px;
}
.price {
  color: #c03131;
}
.item-info-price {
  height: 30px;
}
// <!-- 数目 -->
.item-cell {
    background-color:white;
    font-size: 13px;
    height: 100%;
}
.topic {
    height: 110px;
    margin: 0 15px;
    margin-top: 15px;
    img {
        margin-right: 15px;
        height: 110px;
        width: 110px;
    }
}
.count-box {
    height: 63px;
    margin: 12px 24px;
}
.small-box {
    margin-top: 15px;
    height: 35px;
    span {
        height: 35px;
        display: inline-block;
        line-height: 35px;
        text-align: center;
    }
}
.msg {
    height: 60px;
    padding: 10px 15px;
}
.selected{
    height:49px;
    padding:0 15px;
}
.baged{
    background-color:white;
    padding:10px 13px;
    height:38px;
}
.big-body{
    background-color:#f4f4f4;
}
.images{
    background:white;
    img{
        vertical-align: top;
        width:100%;
    }
}
.img-backcolor{
    background-color:#f9f9f9
}
.van-goods-action-icon__icon{
    width:30px;
    font-size:30px;
}
.selected-address{
    width:260px;
    height:19px;
    display:inline-block;
    font-size:13px;
    line-height:19px;
    padding-top:3px;
}
.add-cart{
    border-radius:0;
    color:black;
    height:50px;
    margin-left:0
}
.context{
    background-color: white;
    padding:15px 15px 65px;
}
.big-item{
    margin:12px 0;
    font-size:12px;
    font-weight:600;
    color:#A6A6A6;
    line-height:200%;
}
.small-item{
    margin:12px 0;
    font-size:12px;
    color:#A6A6A6;
    line-height:200%;
}
</style>

