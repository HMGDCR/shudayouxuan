<template>
   <el-card>
        <div slot="header">
            影院添加    
        </div>   
        <div class="maincont">
            <el-form ref="form" :model="form" label-width="80px">
                
                <el-form-item label="城市区域">
                    <AddressAdd @datas="childData"></AddressAdd>
                </el-form-item>
                <el-form-item label="城市ID">
                    <el-input v-model="form.cityId" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="区域ID">
                    <el-input v-model="form.areaId" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="影院名称">
                    <el-input v-model="form.name" placeholder="请输入影院名称"></el-input>
                </el-form-item>
                <el-form-item label="影院地址">
                    <el-input v-model="form.address" placeholder="请输入影院地址"></el-input>
                </el-form-item>
                <el-form-item label="最低价格">
                    <el-input v-model="form.lowPrice" placeholder="请输入最低价格"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" :loading="loading">立即添加</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>    
   </el-card>
</template>

<script>
import AddressAdd from './components/AddressAdd'
export default {
    data(){
        return {
            loading:false,
            options: [{ name: '选项5',cityId: '' }],
            value: '',
            form:{
                cityId: "",
                areaId:"",
                address:"",
                name:"",
                lowPrice:"",
                cityName:"",
                areaName:""
            },
            choseItem:{}
        }
    },
    components:{
        AddressAdd
    },
    methods: {
        childData(childData){
            console.log( childData )
            this.form = {
                cityId:childData.cityId,
                areaId:childData.areaId,
                cityName:childData.cityName,
                areaName:childData.areaName
            }
        },
        onSubmit() {
            let url = "/cinema/add"
            let data = this.form
            console.log(data)
            this.$axios.post(url,data).then(res => {
                this.$message.success('影院添加成功！');
            }).catch(err => {
                this.$message.error('请输入完整信息！');
            })
        }
    }
}
</script>

<style scoped>
.maincont {
    width: 500px;
}
</style>