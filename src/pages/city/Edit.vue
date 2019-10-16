<template>
   <el-card>
       <div slot="header">
           城市{{isAdd?"添加":"修改"}}
        </div>
        <div class="maincontents">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="城市ID" v-if="!isAdd">
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
                    <el-button type="primary" @click="onSubmit" :loading="loading">立即{{isAdd?"添加":"修改"}}</el-button>
                    <el-button @click="cancel">取消</el-button>
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
                cityId:"",
                name: '',
                pinyin: '',
                isHot: false
            }
        }
    },
    created(){
        if( this.isAdd ){
            return false
            // 该方法下面的代码不执行
        }
        let cityId = this.$route.params.cityId
        this.getCity(cityId)
        console.log( this.$route )
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
            let url = `/city/${this.isAdd?"add":"edit"}`;
            let data = this.form
            this.loading = true;
            this.$axios
                .post(url,data)
                .then(res => {
                this.loading = false;
                this.$message.success(`城市${this.isAdd?"添加":"修改"}成功！`);
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
    },
    computed:{
        isAdd(){
            console.log( this.$route )
            console.log( this.$route.path.includes("add") )
            return this.$route.path.includes("add")
        }
    }
  }
</script>

<style lang="less" scoped>
.maincontents {
    width: 500px;
}
</style>