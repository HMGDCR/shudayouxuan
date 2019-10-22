<template>
    <div class="big-body">
        <!-- 轮播图 -->
        <van-swipe @change="onChange">
            <van-swipe-item>
                <img src="@/assets/img/45cd68e89267b113b20dc15742ffb5e9.png" alt />
            </van-swipe-item>
            <van-swipe-item>
                <img src="@/assets/img/45cd68e89267b113b20dc15742ffb5e9.png" alt />
            </van-swipe-item>
            <van-swipe-item>
                <img src="@/assets/img/45cd68e89267b113b20dc15742ffb5e9.png" alt />
            </van-swipe-item>
            <van-swipe-item>
                <img src="@/assets/img/45cd68e89267b113b20dc15742ffb5e9.png" alt />
            </van-swipe-item>
            <div class="custom-indicator" slot="indicator">{{ current + 1 }}/4</div>
        </van-swipe>
        <div class="return" @click="goBack"><van-icon name="arrow-left" size="23px"/></div>    
        <!-- 商品介绍 -->
        <div class="item-info">
            <div class="item-info-container">
                <div class="item-info-master">
                <span class="label f12" style="background-color: rgb(120, 160, 209);">直降</span>
                <span class="label f12" style="background-color: rgb(145, 188, 111);">包邮</span>
                极鲜网 冻巴沙鱼柳 450-500g*2袋 分活动是佛活动啊过分分活动是佛光复读机啊过分活动啊过分分活动啊过分分活动啊过分分活动啊过分分活动啊过分分
                </div>
                <div class="item-info-slave">果园生态种植 皮薄香甜爽口 富含天然维C</div>
                <div class="item-info-price flex jc-sb ai-fe">
                <span>
                    <span class="price mr-5" style="font-size:15px">￥</span>
                    <span class="f20 price mr-5">44.9</span>
                    <span class="f12 old-price mr-5" style="text-decoration:line-through;">￥56.9</span>
                </span>
                <span class="f12">3932人购买</span>
                </div>
            </div>
        </div>
        <!-- 数目弹框 -->
        <div class="item-cell">
            <van-cell is-link @click="showPopup" style="font-size:13px">规格： X {{count}}</van-cell>
            <van-popup v-model="show" position="bottom" :style="{ height: '60%' }">
                <div class="topic flex mt-15">
                <img src="@/assets/img/45cd68e89267b113b20dc15742ffb5e9.png" alt />
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
                    <span style="width:40px;border:1px solid gray;">-</span>
                    <span style="width:72px;border:1px solid gray;border-left:0;">{{count}}</span>
                    <span style="width:40px;border:1px solid gray;border-left:0;">+</span>
                </div>
                </div>
                <van-goods-action style="width:100%">
                <van-goods-action-icon icon="cart-o" info="5" text="购物车" @click="onClickIcon" class="ml-10"/>
                <van-goods-action-button color="white" style="border-radius:0;color:black;height:50px;" type="warning"  text="加入购物车" @click="onClickButton" />
                <van-goods-action-button style="border-radius:0;height:50px;margin-right:0" type="danger" text="立即购买" @click="onClickButton" />
                </van-goods-action>
            </van-popup>
        </div>
        <!-- 未登录地址选择弹框 -->
        <div class="address-select">
            <van-cell is-link @click="showPopup2" class="fcc">配送至：<span class="more-text" style="width:260px;height:19px;display:inline-block;font-size:13px;line-height:19px;padding-top:3px;">上海黄浦区非机动啥假发票感觉到破案机机感觉到破案机机感觉到破案机机机机机构</span></van-cell>
            <van-popup v-model="show2" position="bottom" :style="{ height: '60%' }">
                <div class="msg">
                <div class="f15" style="margin-bottom:4px;">请选择配送区域</div>
                <div class="f12" style="color:red;">未显示地区即超出配送范围，无法进行选择</div>
                </div>
                <div style="height:20px" class="ml-15">湖南省/衡阳市/耒阳市</div>
                <van-area :area-list="areaList"/>
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
        <div class="baged f12 flex ai-c" style><van-icon name="passed" icon-size="12px" color="red" style="margin-right:5px;"/>包邮</div>
        <div class="mt-10 f12 fcc" style="background-color:white;height:46px;color:gray">—— 商品详情 ——</div>
        <div class="images">
            <img src="https://mall.s.maizuo.com/92d393d03848b8ea112d609e0ae11a00.png" alt="">
            <img src="https://mall.s.maizuo.com/30266ad53356660a815d8b799eac35bf.jpg" alt="">
        </div>
        <!-- 底部购物车 -->
        <van-goods-action style="width:100%">
            <van-goods-action-icon icon="cart-o" info="5" text="购物车" @click="onClickIcon" class="ml-10"/>
            <van-goods-action-button color="white" style="border-radius:0;color:black;height:50px;" type="warning"  text="立即购买" @click="buyImmediate" />
            <van-goods-action-button style="border-radius:0;height:50px;margin-right:0" type="danger" text="加入购物车" @click="onClickButton" />
        </van-goods-action>
    </div>
</template>
<script>
export default {
    data() {
        return {
            radio: '1',
            count: 2,
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
            }
        };
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        },
        buyImmediate(){
            this.$router.push("/order/confirm")
        },
        onClickIcon() {

        },
        onClickButton() {

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
        }
    }
};
</script>

<style lang="less" scoped>
#bac-white{
    background-color:white;
}
// <!-- 轮播图 -->
.van-swipe {
  position: relative;
}
.custom-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    right: 10px;
    bottom: 10px;
    position: absolute;
    font-size: 14px;
    box-sizing: border-box;
    width: 27.2px;
    border: 1px solid rgb(133, 139, 137);
    background-color: white;
    color: rgb(133, 139, 137);
    z-index: 9;
}
.return{
    position:fixed;
    left:10px;
    top:10px;
    height:23px;
    width:23px;
    border-radius:23px;
    background-color:white;
    color:#ccc;
    text-align:center;
    line-height:23px;
}
img {
    height: 375px;
    width: 100%;
}
// <!-- 商品介绍 -->
.item-info {
    background-color:white;
    border-bottom: 1px solid rgb(221, 218, 218);
    padding: 15px;
    box-sizing: border-box;
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
  color: red;
}
.old-price {
  color: gray;
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
    background-color:#ccc;
}
.images{
    width:100%;
}
</style>

