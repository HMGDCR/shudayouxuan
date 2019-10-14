<template>
   <el-card>
        <div slot="header">
            影院修改
        </div>
        <div class="maincontents">
            <el-form ref="form" :model="cityform" label-width="80px">
                <el-form-item label="城市ID">
                    <el-input v-model="cityform.cityId" disabled></el-input>
                </el-form-item>
                <el-form-item label="区域ID">
                    <el-input v-model="cityform.areaId" disabled></el-input>
                </el-form-item>
                <el-form-item label="城市区域">
                    <el-cascader v-model="value" 
                    placeholder="请选择城市区域"
                    style="width:100%;"
                    :options="citiOptions" 
                    :props="{ expandTrigger: 'hover' }" 
                    @change="handleChange">
                    </el-cascader>
                </el-form-item>
            </el-form>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="影院名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="影院地址">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item label="最低价格">
                    <el-input v-model="form.lowPrice"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" :loading="loading">立即修改</el-button>
                    <el-button @click.native="cancel">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
   </el-card>
</template>

<script>
  export default {
    data() {
        return {
            loading:false,
            form: {
                address:"",
                name: '',
                lowPrice:""
            },
            value:["5da41bdbeaa375006dbc6a45","5da41c7930863b00683c5c23"],

            options:[],

            cityform:{
                cityId:"11",
                areaId:"22",
                cityName:"",
                areaName:""
            },

            citiOptions: [{
                value: 'zhinan',
                label: '指南',
                children: [{ value: 'shejiyuanze', label: '设计原则1' }]
            }],
            cityList:[],
            areaList:[]
        }
    },
    created(){
        // 获取动态路由传过来的参数【 影院名称、影院id 】
        let cinemaId = this.$route.params.cinemaId
        console.log( cinemaId )
        this.getData()
        // 进入之后的根据 cinemaId 获取影院信息
        this.getCinema(cinemaId)
    },
    methods: {
        // 进入之后的根据 cinemaId 获取影院信息
        getCinema(cinemaId){
            let url = "/cinema/getDetail?cinemaId=" + cinemaId;
            this.$axios.get(url).then(res => {
                console.log( res )
                this.form = res.cinema
                // 给 cityId areaId 赋初始值
                this.cityform.cityId = res.cinema.cityId
                this.cityform.areaId = res.cinema.areaId
                this.cityform.cityName = res.cinema.cityName
                this.cityform.areaName = res.cinema.areaName
                console.log( this.cityform.cityId,this.cityform.areaId )
            }).catch(err => {
                
            })
        },

        // 获取城市、区域的数据,用于级联选择器数据渲染
        getData(){
            let cityUrl = "/city/allCity"
            let areaUrl = "/area/allArea"
            let cityPromise = this.$axios.get( cityUrl )
            let areaPromise = this.$axios.get( areaUrl )
            // 同时获取城市、区域数据
            Promise.all([cityPromise,areaPromise]).then(res => {
                let cityList = res[0].cities
                this.cityList = cityList
                let areaList = res[1].areas
                this.areaList = res[1].areas
                // 获取城市列表
                this.citiOptions = cityList.map(city => {
                    // 获取城市对应的区域列表
                    let areaData = areaList.filter(area => {
                        return area.cityId == city.cityId;
                    })
                    areaData = areaData.map(area => {
                        return {
                            value:area.areaId,
                            label:area.name
                        }
                    })
                    return {
                        value:city.cityId,
                        label:city.name,
                        children:areaData
                    }
                })
            }).catch(err => {
                this.$message.error(err);
            })
        },

        chose(item){
            console.log(item)
            this.cityform = {
                cityId:item.cityId,
                cityName:item.name
            }
        },

        
        handleChange(value){
            let cityItem = this.cityList.filter(items => {
                return items.cityId == value[0]
            })
            let areaItem = this.areaList.filter(ite => {
                return ite.areaId == value[1]
            })
            this.cityform = {
                cityId:value[0],
                areaId:value[1],
                cityName:cityItem[0].name,
                areaName:areaItem[0].name
            }
            
        },
        onSubmit() {
            console.log('submit!');
            let url = "/cinema/edit";
            let data = Object.assign( this.form,this.cityform )
            console.log(data)
            this.loading = true;
            this.$axios
                .post(url,data)
                .then(res => {
                this.loading = false;
                this.$message.success('影院修改成功！');
            // 点击跳转退回
                this.$router.push("/cinema/list")                
            }).catch(err => {
                console.log(err);
                this.$message.error(err);
                this.loading = false;
            });
        },
        cancel(){
            this.$router.push("/cinema/list")           
        }
    }
  }
</script>

<style lang="less" scoped>
.maincontents {
    width: 500px;
}
</style>