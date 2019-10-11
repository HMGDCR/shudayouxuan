<template>
    <el-card>
        <div slot="header">
            区域添加
        </div>
        <div class="maincont">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="城市名称">
                    <el-select v-model="value" clearable placeholder="请选择城市" style="width:422px;">
                        <el-option v-for="item in options" :key="item.name" :label="item.name" :value="item.cityId" @click.native="chose(item)">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="区域名称">
                    <el-input v-model="form.areaName" placeholder="请输入区域名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" :loading="loading">立即创建</el-button>
                    <el-button>取消</el-button>
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
            options: [{ name: '选项5',cityId: '' }],
            value: '',
            form:{
                areaName: ''
            },
            choseItem:{}
      }
    },
    created(){
        this.getCityList()
    },
    methods:{
        chose(item){
            this.choseItem = item
        },
        getCityList(){
            let url = "/city/allCity"
            this.$axios.get(url).then(res => {
                console.log(res)
                let list = res.cities
                this.options = list
                console.log(this.options)
            }).catch(err => {
                this.$message.error(err);
            })
        },
        onSubmit(){
            let url = "/area/add";
            let data = {
                name:this.form.areaName,
                cityName:this.choseItem.name,
                cityId:this.choseItem.cityId
            }
            this.$axios.post(url,data).then(res => {
                console.log(res)
                this.$message.success('区域添加成功！');
            }).catch(err => {
                this.$message.error(err);
            })
        }
    }
    
}
</script>

<style scoped lang="less">
.maincont {
    width: 500px;
}
</style>