<template>
    <div>
        <!-- 导航 -->
        <div class="bar">
        <van-row type="flex" justify="space-between">
            <van-icon name="arrow-left" @click="toHomePage" style="padding-left:10px;font-size:18px;padding-top:16px" />
            <i cionfont ic></i>
            <van-search v-model="value" placeholder="请输入搜索关键词" show-action
            shape="round" @search="onSearch" style=" width: 340px;" >
            <div slot="action" @click="onSearch">搜索</div>
            </van-search>
        </van-row>
        </div>
        <!-- 侧边栏和分类信息 -->
        <van-tree-select height="100vh" :items="items"
        :main-active-index.sync="activeIndex" style=" padding-top: 54px;" >
        <template slot="content">
            <van-grid :border="false" :column-num="2" v-if="activeIndex === 0">
            <van-grid-item>
                <van-image
                class="target-img"
                src="https://mall.s.maizuo.com/5f727ae93559d9c445e944a58211b538.png?x-oss-process=image/resize,w_158"
                />
                <span class="news">极鲜网 冻巴沙鱼柳 450-500g*2袋</span>
                <span class="coin">￥6666</span>
            </van-grid-item>
            <van-grid-item>
                <van-image
                class="target-img"
                src="https://mall.s.maizuo.com/a4456111b06a17ad94c8f2ed5f6d101d.png?x-oss-process=image/resize,w_158"
                />
                <span class="news">极鲜网 越南黑虎虾 400g*2盒</span>
                <span class="coin">￥888</span>
            </van-grid-item>
            </van-grid>

            <van-grid :border="false" :column-num="2" v-if="activeIndex === 0">
            <van-grid-item>
                <van-image
                class="target-img"
                src="https://mall.s.maizuo.com/5f727ae93559d9c445e944a58211b538.png?x-oss-process=image/resize,w_158" />
                <span class="news">极鲜网 冻巴沙鱼柳 450-500g*2袋</span>
                <span class="coin">￥6666</span>
            </van-grid-item>
            <van-grid-item>
                <van-image
                class="target-img"
                src="https://mall.s.maizuo.com/a4456111b06a17ad94c8f2ed5f6d101d.png?x-oss-process=image/resize,w_158" />
                <span class="news">极鲜网 越南黑虎虾 400g*2盒</span>
                <span class="coin">￥888</span>
            </van-grid-item>
            </van-grid>

            <van-grid :border="false" :column-num="2" v-if="activeIndex === 1">
            <van-grid-item>
                <van-image
                class="target-img"
                src="https://mall.s.maizuo.com/b014ebe90f95f48f790f4d4b5a3522cc.png?x-oss-process=image/resize,w_248" />
                <span class="news">【福建】古田鲜银耳 6朵装</span>
                <span class="coin">￥888</span>
            </van-grid-item>
            <van-grid-item>
                <van-image
                class="target-img"
                src="https://mall.s.maizuo.com/7a6da25a690fd3ee2ff3bee115f0ec3e.png?x-oss-process=image/resize,w_248" />
                <span class="news">【湖北】蕲春酸米粉 900g*2</span>
                <span class="coin">￥888</span>
            </van-grid-item>
            </van-grid>

            <van-grid :border="false" :column-num="2" v-if="activeIndex === 2">
            <van-grid-item>
                <van-image
                class="target-img"
                src="https://mall.s.maizuo.com/263841176c356ecb6548a913a9447b9d.png?x-oss-process=image/resize,w_248" />
                <span class="news">费乐·摩纳哥 慕斯蜡笔畅想画套装</span>
                <span class="coin">￥888</span>
            </van-grid-item>
            <van-grid-item>
                <van-image
                class="target-img"
                src="https://mall.s.maizuo.com/5695b4273be7435e2140205c886a0068.png?x-oss-process=image/resize,w_248" />
                <span class="news">巴巴腾智能陪护机器人A3</span>
                <span class="coin">￥888</span>
            </van-grid-item>
            </van-grid>

            <van-grid :border="false" :column-num="2" v-if="activeIndex === 3">
            <van-grid-item>
                <van-image
                class="target-img"
                src="https://mall.s.maizuo.com/b9c364f382cea29fce525b53fde65f69.png?x-oss-process=image/resize,w_248" />
                <span class="news">费乐·摩纳哥 慕斯蜡笔畅想画套装</span>
                <span class="coin">￥888</span>
            </van-grid-item>
            <van-grid-item>
                <van-image
                class="target-img"
                src="https://mall.s.maizuo.com/6b63a5589f26cd7d90509f5b927237a2.png?x-oss-process=image/resize,w_248" />
                <span class="news">巴巴腾智能陪护机器人A3</span>
                <span class="coin">￥888</span>
            </van-grid-item>
            </van-grid>

            <van-grid :border="false" :column-num="2" v-if="activeIndex === 4">
            <van-grid-item>
                <van-image
                class="target-img"
                src="https://mall.s.maizuo.com/64b859832d898ec2ed257f14d06a6313.png?x-oss-process=image/resize,w_248" />
                <span class="news">精铸不粘鸳鸯火锅30cm</span>
                <span class="coin">￥888</span>
            </van-grid-item>
            <van-grid-item>
                <van-image
                class="target-img"
                src="https://mall.s.maizuo.com/64b859832d898ec2ed257f14d06a6313.png?x-oss-process=image/resize,w_248" />
                <span class="news">Debo德铂 路卡斯 汤锅蒸锅多用锅</span>
                <span class="coin">￥888</span>
            </van-grid-item>
            </van-grid>

            <van-grid :border="false" :column-num="2" v-if="activeIndex === 5">
            <van-grid-item>
                <van-image
                class="target-img"
                src="https://mall.s.maizuo.com/9a03ee41a0a55d123b7a212598bef03a.png?x-oss-process=image/resize,w_248" />
                <span class="news">美的立式静音广角落地遥控扇 FSA40YCR</span>
                <span class="coin">￥888</span>
            </van-grid-item>
            <van-grid-item>
                <van-image
                class="target-img"
                src="https://mall.s.maizuo.com/f8f6a25f4c032f1f07ed12e34f59958c.png?x-oss-process=image/resize,w_248" />
                <span class="news">小熊多功能养生壶 YSH-A08G1</span>
                <span class="coin">￥888</span>
            </van-grid-item>
            </van-grid>

            <van-grid :border="false" :column-num="2" v-if="activeIndex === 6">
            <van-grid-item>
                <van-image
                class="target-img"
                src="https://mall.s.maizuo.com/f39f02145569388a56df0a5e7d1291ce.png?x-oss-process=image/resize,w_248" />
                <span class="news">方家铺子 福聚齐享礼盒</span>
                <span class="coin">￥888</span>
            </van-grid-item>
            <van-grid-item>
                <van-image
                class="target-img"
                src="https://mall.s.maizuo.com/25c32f178a5ae8438583bf56d9127eef.png?x-oss-process=image/resize,w_248"
                />
                <span class="news">一方善土 山茶油香辣鱼 240g</span>
                <span class="coin">￥888</span>
            </van-grid-item>
            </van-grid>

            <van-grid :border="false" :column-num="2" v-if="activeIndex === 7">
            <van-grid-item>
                <van-image
                class="target-img"
                src="https://mall.s.maizuo.com/9a03ee41a0a55d123b7a212598bef03a.png?x-oss-process=image/resize,w_248" />
                <span class="news">美的立式静音广角落地遥控扇 FSA40YCR</span>
                <span class="coin">￥888</span>
            </van-grid-item>
            <van-grid-item>
                <van-image
                class="target-img"
                src="https://mall.s.maizuo.com/f8f6a25f4c032f1f07ed12e34f59958c.png?x-oss-process=image/resize,w_248" />
                <span class="news">小熊多功能养生壶 YSH-A08G1</span>
                <span class="coin">￥888</span>
            </van-grid-item>
            </van-grid>

            <van-grid :border="false" :column-num="2" v-if="activeIndex === 8">
            <van-grid-item>
                <van-image
                class="target-img"
                src="https://mall.s.maizuo.com/75d11beb01ee4ad87f7e10f3f5d32876.png?x-oss-process=image/resize,w_248" />
                <span class="news">Calvin Klein authentic系列玫瑰金女士手表</span>
                <span class="coin">￥888</span>
            </van-grid-item>
            <van-grid-item>
                <van-image
                class="target-img"
                src="https://mall.s.maizuo.com/1c90fd3678ded68223f8fd1df44f045d.png?x-oss-process=image/resize,w_248" />
                <span class="news">APM Monaco钻捕梦者复古简约项链</span>
                <span class="coin">￥888</span>
            </van-grid-item>
            </van-grid>
        </template>
        </van-tree-select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: 0,
            value: "",
            items: [
                { text: "热门推荐" },
                { text: "生鲜" },
                { text: "儿童用品" },
                { text: "美妆护肤" },
                { text: "居家厨具" },
                { text: "小家电" },
                { text: "食品" },
                { text: "跨境" },
                { text: "饰品" }
            ]
        }
    },
    methods: {
        onSearch() {},
        onCancel() {},
        toHomePage(){
            this.$router.push("/home/homePage")
        }
    }
};
</script>

<style lang="less" scope>
.news {
    padding: 8px 0 6px 0;
    color: #191a1b;
    font-size: 12px;
    width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.coin {
    font-size: 8px;
    color: #c03131;
    display: inline-block;
    text-align: left;
    width: 100%;
    padding-left: 5px;
}
.target-img {
    background: #f4f4f4;
}
.bar {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 99;
    background: white;
    border-bottom: 2px solid  #F7F8FA
}
</style>