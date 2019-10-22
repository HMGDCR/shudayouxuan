<template>
   <div class="mainContent">
       <!-- 轮播图 -->
        <van-swipe :autoplay="3000" indicator-color="white" class="swipe">
            <van-swipe-item v-for="(ite,inde) in swipValue">
                <img :src="ite" alt="">
            </van-swipe-item>
        </van-swipe>
        <!-- 宫格 -->
        <van-grid :column-num="4" :border="false" class="grid" @click.native="toList">
            <van-grid-item v-for="(item,index) in value" :key="index" :icon="item.img" :text="item.name" />
        </van-grid>
        <!-- 主体内容-->
        <div class="content">
            <ul class="navagater">
                <li> 推荐 </li>
                <li class="sales">
                    <span>销量</span>
                    <div class="van-icon-style">
                        <van-icon name="arrow-up" />
                        <van-icon name="arrow-down" />
                    </div>
                </li>
                <li class="sales">
                    <span>价格</span>
                    <div class="van-icon-style">
                        <van-icon name="arrow-up" />
                        <van-icon name="arrow-down" />
                    </div>
                </li>
            </ul>
            <ul class="goods">
                <li class="listItem" @click="toDetail">
                    <img src="https://mall.s.maizuo.com/1f8134cb7efe19ea0cfc86a1c84ff4c2.png?x-oss-process=image/resize,w_248" alt="">
                    <div class="textDescribe">
                        <span class="goodsName">【广东】 港式网红鱼皮</span>
                        <span class="goodDetails">选取新鲜巴沙鱼皮 酥脆香浓口感 富含胶原蛋白</span>
                        <div class="price">
                            <span class="ren">￥</span><span class="priceNum">38.9</span>
                        </div>
                    </div>
                </li>
                <li class="listItem">
                    <img src="https://mall.s.maizuo.com/1f8134cb7efe19ea0cfc86a1c84ff4c2.png?x-oss-process=image/resize,w_248" alt="">
                    <div class="textDescribe">
                        <span class="goodsName">【广东】 港式网红鱼皮</span>
                        <span class="goodDetails">选取新鲜巴沙鱼皮 酥脆香浓口感 富含胶原蛋白</span>
                        <div class="price">
                            <span class="ren">￥</span><span class="priceNum">38.9</span>
                        </div>
                    </div>
                </li>
                <li class="listItem">
                    <img src="https://mall.s.maizuo.com/1f8134cb7efe19ea0cfc86a1c84ff4c2.png?x-oss-process=image/resize,w_248" alt="">
                    <div class="textDescribe">
                        <span class="goodsName">【广东】 港式网红鱼皮</span>
                        <span class="goodDetails">选取新鲜巴沙鱼皮 酥脆香浓口感 富含胶原蛋白</span>
                        <div class="price">
                            <span class="ren">￥</span><span class="priceNum">38.9</span>
                        </div>
                    </div>
                </li>
                <li class="listItem">
                    <img src="https://mall.s.maizuo.com/1f8134cb7efe19ea0cfc86a1c84ff4c2.png?x-oss-process=image/resize,w_248" alt="">
                    <div class="textDescribe">
                        <span class="goodsName">【广东】 港式网红鱼皮</span>
                        <span class="goodDetails">选取新鲜巴沙鱼皮 酥脆香浓口感 富含胶原蛋白</span>
                        <div class="price">
                            <span class="ren">￥</span><span class="priceNum">38.9</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <Navagater></Navagater>
   </div>
</template>

<script>
import Navagater from "@/components/Navagator"
export default {
    components:{
        Navagater
    },
    data(){
        return{
            swipValue:["https://mall.s.maizuo.com/fcfe073bb07867091766dd61aab873bb.jpg?x-oss-process=image/resize,w_563",
            "https://mall.s.maizuo.com/6c8290f0a3402039e65f42c39190d50d.jpg?x-oss-process=image/resize,w_563",
            "https://mall.s.maizuo.com/f75f10a671034507b1bcea9b46db4102.jpg?x-oss-process=image/resize,w_563"
            ],
            value:[
                {
                    img:"https://mall.s.maizuo.com/2023015378f55bdcf9583d385ee94b14.jpg?x-oss-process=image/resize,w_68",
                    name:"进口零食"
                },
                {
                    img:"https://mall.s.maizuo.com/2023015378f55bdcf9583d385ee94b14.jpg?x-oss-process=image/resize,w_68",
                    name:"进口零食"
                },
                {
                    img:"https://mall.s.maizuo.com/2023015378f55bdcf9583d385ee94b14.jpg?x-oss-process=image/resize,w_68",
                    name:"进口零食"
                },
                {
                    img:"https://mall.s.maizuo.com/2023015378f55bdcf9583d385ee94b14.jpg?x-oss-process=image/resize,w_68",
                    name:"进口零食"
                },
                {
                    img:"https://mall.s.maizuo.com/2023015378f55bdcf9583d385ee94b14.jpg?x-oss-process=image/resize,w_68",
                    name:"进口零食"
                },
                {
                    img:"https://mall.s.maizuo.com/2023015378f55bdcf9583d385ee94b14.jpg?x-oss-process=image/resize,w_68",
                    name:"进口零食"
                },
                {
                    img:"https://mall.s.maizuo.com/2023015378f55bdcf9583d385ee94b14.jpg?x-oss-process=image/resize,w_68",
                    name:"进口零食"
                },
                {
                    img:"https://mall.s.maizuo.com/2023015378f55bdcf9583d385ee94b14.jpg?x-oss-process=image/resize,w_68",
                    name:"进口零食"
                }
            ]
        }
    },
    methods:{
        toDetail(){
            this.$router.push("/home/detail")
        },
        toList(){
            this.$router.push("/home/list")
        }
    }

}
</script>

<style lang="less">
// 轮播图指示器样式调整
.van-swipe__indicators {
    left: 88%;
}
// 调宫格样式
.van-grid-item__icon {
    font-size: 45px;
}
.van-grid-item__content{
    padding: 8px 0;
}
</style>

<style scoped lang="less">
.mainContent {
    height: 100vh;
    background: #f4f4f4;
}
// 轮播图高度
.swipe {
    height: 210px;
    width: 100%;
    img {
        width: 100%;
    }
}
// 宫格样式调整

.grid {
    margin-bottom: 10px;
    
}
.van-grid-item__content {
    padding-top: 5.5px;
    padding-bottom: 5.5px;
}
// 主体内容
.content {
    background: #ffffff;
    margin-bottom: 49px;
    .navagater {
        height: 44px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #797d82;
        font-size: 14px;
        border-bottom: 1px solid #ededed;
        .sales {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            .van-icon-style {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                font-size: 6px;
                margin-left: 5px;
                transform: scale(0.7);
            }

        }
    }
    .goods {
        padding-top: 15px;
        padding-right: 15px;
        padding-left: 15px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .listItem {
            width: 165px;
            height: 237px;
            margin-bottom: 20px;
            img {
                width: 165px;
                height: 165px;
                background: #f4f4f4;
            }
            .textDescribe {
                display: flex;
                flex-direction: column;
                .goodsName {
                    font-size: 14px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    max-width: 10rem;
                }
                .goodDetails {
                    font-size: 12px;
                    color: #797d82;
                    margin-top: 5px;
                    margin-bottom: 5px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    max-width: 10rem;
                }
                .price {
                    color: #c03131;
                    .ren {
                        font-size: 10px;
                        padding-right: 3px;
                    }
                    .priceNum {
                        font-size: 15px;
                    }
                }
            }
        }
    }
}

</style>