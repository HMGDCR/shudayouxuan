<template>
   <el-card>
       <div slot="header">
            城市添加  
        </div>
        <div class="maincont">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="城市名称">
                    <el-input v-model="form.name" placeholder="请输入城市名称"></el-input>
                </el-form-item>
                <el-form-item label="城市拼音">
                    <el-input v-model="form.pinyin" placeholder="请输入城市拼音"></el-input>
                </el-form-item>

                <el-form-item label="是否热门">
                    <el-switch v-model="form.isHot" :active-text="form.isHot?'是':'否'"></el-switch>
                </el-form-item>
                
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" :loading="loading">立即添加</el-button>
                    <el-button @click.native="clearinput">取消</el-button>
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
            name: '',
            pinyin: '',
            isHot: false
            }
        }
    },
    methods: {
        onSubmit() {
            if( this.form.name && this.form.pinyin ){
                console.log('submit!');
                let url = "/city/add";
                let data = this.form
                this.loading = true;
                this.$axios
                    .post(url,data)
                    .then(res => {
                    this.loading = false;
                    this.$message.success('城市添加成功！');
                }).catch(err => {
                    this.$message.error(err);
                    this.loading = false;
                });
            }else{
                this.$message.error('请输入完整信息！');
            }
        },
        clearinput(){
            this.form.name = ""
            this.form.pinyin = ""
        }
    }
  }
</script>

<style lang="less" scoped>
.maincont {
    width: 500px;
}
</style>