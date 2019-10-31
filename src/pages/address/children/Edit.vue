<template >
    <div class="first">
        <!-- 顶部导航栏 -->
        <div class="navigation">
            <div class="returnClick" @click="onClickReturn">
                <van-icon name="wap-home-o"  class="returnIcon"/>
            </div>
            <van-nav-bar title="编辑地址" right-text="保存" fixed @click-right="onClickSave" />
        </div>
        <div class="All">
            <van-cell-group>
                <van-field placeholder="姓名" v-model="from.name" />
            </van-cell-group>
            <van-cell-group>
                <van-field placeholder="手机号码" v-model="from.tel"/>
            </van-cell-group>
            <van-cell-group>
                <van-icon name="location-o" class="site" @click.native="siteSwitch" />
                <van-field placeholder="点击选择地址" style="padding-left:32px;" v-model="from.addressDetail"/>
            </van-cell-group>
            <van-cell-group>
                <van-field placeholder="详细地址:例如17号楼601等" v-model="from.detailedAddress"/>
            </van-cell-group>
            <van-cell-group style="margin-top:10px;">
                <van-field placeholder="身份证号(选填)" />
            </van-cell-group>
            <div class="upPadding">购买跨境商品时需要姓名、身份证号用于清关，信息将被加密保存</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: "",
            addresId:"",
           
            from:{
                name:'陈媛媛',
                tel:"2457584377",
                addressDetail:"湖北省安陆市",
                detailedAddress:"碧涢路东苑小区B座3栋301",
            }
        }
    },
    created() {
    this.addresId= this.$route.params.addressId
    
    this.getEdit(this.addresId)
    },

    methods: {
        //获取数据
        getEdit(addressId){
            let url = "/address/detail"
            let data={
                addressId:addressId
            }
            this.$axios.post(url,data).then(res=>{
                console.log("编辑：",res.result)
               this.from = res.result              
            }).catch(err=>{
                console.log("获取编辑失败",err)
            })
        },

        //   导航栏返回事件
        onClickReturn() {
            this.$router.push("/home/homePage")
        },
        // 导航栏保存事件
        onClickSave() {
            
            //调用编辑接口
            let url ="/address/edit"
            let data = {
                addressId:this.addresId
            }   
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
           
        },
        // 地址切换事件
        siteSwitch() {
            alert("选择地址");
        }
    },
    computed: {
        // editAddress(){           
        //     return this.$store.state.editAddress
        // }
    },
};
</script>

<style lang="less">
// 中部input占位符样式
.van-field__control {
    font-size: 15px;
}
// 提示文字样式
.upPadding {
    font-size: 11px;
    color: #bdc0c5;
    text-align: left;
    margin-top: 10px;
    padding: 0 15px;
}
</style>

<style lang="less" scoped>
// body的样式
.first {
    background: #f4f4f4;
    width: 100vw;
    min-height: 100vh;
}
// 导航栏
.navigation {
    height: 44px;
    width: 100vw;
    display: flex;
}
.van-hairline--bottom {
    height: 44px;
}
// 返回按钮
.returnClick {
    display: flex;
    height: 100%;
    width: 41px;
    box-sizing: border-box;
    align-items: center;
}
// 返回图标
.returnIcon {
    margin-left: 14px;
    vertical-align: middle;
    width: 11px;
    height: 22px;
    font-size: 21px;
    color: #191a1b;
}
// 顶部导航栏地址管理样式
.van-nav-bar__title {
    font-size: 17px;
    font-family: 600;
}
// 顶部导航栏右边添加样式
.van-nav-bar__text {
    color: black;
    font-size: 15px;
    color: #797d82;
}
// 顶部导航栏左边返回号样式
.returnClick {
    z-index: 999;
    position: relative;
}
.van-icon-arrow-left {
    color: black;
    height: 100%;
    font-size: 20px;
    left: 5px;
}
.van-cell-group {
    margin-top: -1px;
}
//地址的字体图标
.site {
    position: absolute;
    z-index: 999;
    line-height: 52px;
    height: 100%;
    font-size: 16px;
    width: 40px;
    text-align: center;
    color: #ccdcff;
    left: 2px;
}
// 中部输入栏
.van-hairline--top-bottom {
    height: 52px;
    align-items: center;
    .van-field {
        padding: 14px 16px;
    }
}
// 提示文字样式
.upPadding {
    font-size: 11px;
    color: #bdc0c5;
    text-align: left;
    margin-top: 10px;
    padding: 0 15px;
}
</style>