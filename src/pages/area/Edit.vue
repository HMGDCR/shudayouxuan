<template>
   <el-card>
        <div slot="header">
            区域修改
        </div>
        <div class="maincontents">

            <el-form ref="form" :model="cityform" label-width="80px">
                <el-form-item label="城市ID">
                    <el-input v-model="cityform.cityId" disabled></el-input>
                </el-form-item>
                <el-form-item label="城市名称">
                    <el-select v-model="value" clearable placeholder="请选择城市" style="width:422px;">
                        <el-option v-for="item in options" :key="item.name" :label="item.name" :value="item.cityId" @click.native="chose(item)">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>

            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="区域ID">
                    <el-input v-model="form.areaId" disabled></el-input>
                </el-form-item>
                <el-form-item label="区域名称">
                    <el-input v-model="form.name"></el-input>
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
                areaId:"",
                name: ''
            },
            value:"",
            options:[],
            cityform:{
                cityId:"",
                cityName:""
            }
        }
    },
    created(){
        let areaId = this.$route.params.areaId
        this.getArea(areaId)
        console.log(areaId)
        this.getCitylist()
    },
    methods: {
        // 获取城市列表
        getCitylist(){
            let url ="/city/allCity"
            this.$axios.get(url).then(res => {
                console.log(res)
                this.options = res.cities
            }).catch(err => {
                console.log(err)
            })
        },
        chose(item){
            console.log(item)
            this.cityform = {
                cityId:item.cityId,
                cityName:item.name
            }
        },

        getArea(areaId){
            let url = "/area/findById?areaId=" + areaId;
            this.$axios.get(url).then(res => {
                this.form = res.area
                this.cityform = res.area
                this.value = res.area.cityName
            }).catch(err => {
                
            })
        },
        onSubmit() {
            console.log('submit!');
            let url = "/area/edit";
            let data = Object.assign( this.form,this.cityform )
            console.log(data)
            this.loading = true;
            this.$axios
                .post(url,data)
                .then(res => {
                this.loading = false;
                this.$message.success('区域修改成功！');
            // 点击跳转退回
                this.$router.push("/area/list")                
            }).catch(err => {
                console.log(err);
                this.$message.error(err);
                this.loading = false;
            });
        },
        cancel(){
            this.$router.push("/area/list")           
        }
    }
  }
</script>

<style lang="less" scoped>
.maincontents {
    width: 500px;
}
</style>