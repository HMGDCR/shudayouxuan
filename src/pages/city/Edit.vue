<template>
   <el-card>
       <div slot="header">
            城市修改
        </div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="城市ID">
                <el-input v-model="form.cityId" disabled></el-input>
            </el-form-item>
            <el-form-item label="城市名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="城市拼音">
                <el-input v-model="form.pinyin"></el-input>
            </el-form-item>

            <el-form-item label="是否热门">
                <el-switch v-model="form.isHot" :active-text="form.isHot?'是':'否'"></el-switch>
            </el-form-item>
            
            <el-form-item>
                <el-button type="primary" @click="onSubmit" :loading="loading">立即修改</el-button>
                <el-button @click="cancel">取消</el-button>
            </el-form-item>
        </el-form>
   </el-card>
</template>

<script>
  export default {
    data() {
        return {
            loading:false,
            form: {
                cityId:"",
                name: '',
                pinyin: '',
                isHot: false
            }
        }
    },
    created(){
        let cityId = this.$route.params.cityId
        this.getCity(cityId)
    },
    methods: {
        getCity(cityId){
            let url = "/city/findById?cityId=" + cityId;
            this.$axios.get(url).then(res => {
                console.log(res)
                this.form = res.city
            }).catch(err => {

            })
        },
        onSubmit() {
            console.log('submit!');
            let url = "/city/edit";
            let data = this.form
            this.loading = true;
            this.$axios
                .post(url,data)
                .then(res => {
                this.loading = false;
                this.$message.success('城市修改成功！');
                this.$router.push("/city/list")
            }).catch(err => {
                console.log(err);
                this.$message.error(err);
                this.loading = false;
            });
        },
        cancel(){
            this.$router.push("/city/list")
        }
    }
  }
</script>