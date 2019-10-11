<template>
   <el-card>
       <div slot="header">
            区域修改
        </div>
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
            }
        }
    },
    created(){
        let areaId = this.$route.params.areaId
        this.getArea(areaId)
        console.log(areaId)
    },
    methods: {
        getArea(areaId){
            let url = "/area/findById?areaId=" + areaId;
            this.$axios.get(url).then(res => {
                console.log(res)
                this.form = res.area
            }).catch(err => {
                
            })
        },
        onSubmit() {
            console.log('submit!');
            let url = "/area/edit";
            let data = this.form
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