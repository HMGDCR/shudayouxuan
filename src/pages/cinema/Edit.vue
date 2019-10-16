<template>
   <el-card>
        <div slot="header">
            影院修改
        </div>
        <div class="maincontents">
            <el-form ref="form" :model="cityform" label-width="80px">
                <el-form-item label="城市ID" disabled>
                    <el-input v-model="cityform.cityId" disabled></el-input>
                </el-form-item>
                <el-form-item label="区域ID" disabled>
                    <el-input v-model="cityform.areaId" disabled></el-input>
                </el-form-item>
                <el-form-item label="城市区域">
                    <el-cascader v-model="value" 
                    placeholder="请选择城市区域"
                    style="width:100%;"
                    :options="citiOptions" 
                    :props="{ expandTrigger: 'hover' }" 
                    clearable
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
            states:true,
            loading:false,
            form: {
                address:"",
                name: '',
                lowPrice:""
            },
            // 这个 value 是给级联选择器赋初始值
            value:[],
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
            areaList:[],
            enterLoading:""
        }
    },
    created(){
        // 获取动态路由传过来的参数【 影院名称、影院id 】
        let cinemaId = this.$route.params.cinemaId
        this.getData()
        // 进入之后的根据 cinemaId 获取影院信息
        this.getCinema(cinemaId)
        // 进入之后的 loading
        this.enterLoading = this.$loading({
            lock: true,
            text: '努力加载中...',
            // spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.6)'
        });
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
                console.log( res )
                this.value = [res.cinema.cityId,res.cinema.areaId]
            }).catch(err => {
                this.$message.error( err )
            }).finally(() => {
                // 得到数据后终止 loading
                this.enterLoading.close()
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
            console.log( value )
            // 当传过来的值为空时后面的就不执行了
            if( value.length == 0 ){
                return false
            }
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
            this.loading = true;
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
    },
    watch:{

        // 可以用监听来获取当前的 value 是否为空从而进行清空
        value:{
            handler( newValue ){
                if( newValue.length == 0 ){
                    this.cityform = {}
                }
            },
            deep:true,
            immediate:true
        }

    }
  }
</script>

<style lang="less" scoped>
.maincontents {
    width: 500px;
}
</style>