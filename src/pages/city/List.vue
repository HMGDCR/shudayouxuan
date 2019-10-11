<template>
   <div>
       <el-card>
           <div slot="header">
               城市列表
           </div>
            <el-table v-loading="loading" :data="listArr" border style="width: 100%;">
                <el-table-column prop="cityId" label="城市ID" align="center" ></el-table-column>
                <el-table-column prop="name" label="城市名称" align="center"> </el-table-column>
                <el-table-column prop="pinyin" label="城市拼音" align="center"> </el-table-column>
                <el-table-column prop="create" label="创建时间" align="center"> </el-table-column>
                <el-table-column prop="isHot" :formatter="formatHot" label="热门城市" align="center"> </el-table-column>
                <el-table-column fixed="right" label="操作" width="150" align="center"> 
                    <template slot-scope="scope" class="handle">
                        <el-button @click="handleClick(scope)" type="danger" icon="el-icon-delete" class="deleteItem" circle size="small"></el-button>
                        <router-link :to="`/city/edit/${scope.row.cityId}`" class="revision">
                            <el-button type="primary" size="small" icon="el-icon-edit" circle></el-button>
                        </router-link>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 页码显示 -->
            <div class="pages">
                <el-pagination @current-change="changePage" background layout="total,prev, pager, next" :total="totalList" :hide-on-single-page="true"> </el-pagination>
            </div>
        </el-card>
   </div>
</template>

<script>
export default {
    data(){
        return {
            list:[],
            totalList:0,
            loading:false,
            listArr:[]
        }
    },
    created() {
        this.getList(1)
        this.loading = true
    },
    methods:{
        // 热门城市 是 否 显示方法
        formatHot(format){
            return format.isHot?"是":"否"
        },
        // 页码
        changePage(pageNums){
            console.log(pageNums)
            this.getList(pageNums)
            this.loading = true
        },
        // 获取城市列表
        getList( page ) {
            let url = "/city/getList?pageNum=" + page;
            // let data = { params:{ pageNum:1 } }
            this.$axios.get(url).then(res => {
                this.list = res.cities;
                this.loading = false
                console.log(res);
                this.totalList = res.total
                this.getArr()
            }).catch(err => {
                console.log(err);
                this.loading = false
            });
        },
        getArr(){
            let arr = []
            this.list.forEach(item => {
                arr.push({
                    cityId:item.cityId,
                    isHot:item.isHot,
                    name:item.name,
                    pinyin:item.pinyin,
                    create:this.getTime(item.create)
                })
            })
            this.listArr = arr
        },
        getTime(time){
            let date = new Date(time)
            let year = date.getFullYear()
            let month = date.getMonth() + 1
            let dates = date.getDate()
            console.log( year,month,dates )
            if ( month < 10 ){
                month = '0' + month
            }
            if ( dates < 10 ){
                dates = "0" + dates
            }
            return year + "/" + month + "/" + dates
        },
        // 删除事件
        handleClick(scope){
            console.log(scope)

            this.$confirm('此操作将永久删除该城市, 是否继续?', '删除提示！', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'}).then(() => {
                // 点击删除
                let $index = scope.$index
                let cityId = scope.row.cityId
                let data = { cityId }
                let url = "/city/delById"
                // 该请求删除后台数据
                this.$axios.post(url,data).then(res => {
                    // 删除页面数据
                    this.list.splice($index,1)
                }).catch(err => {
                    this.$message.error("删除失败！")
                }),

                this.$message({ type: 'success', message: '删除城市成功!'});
            }).catch(() => {
                this.$message({ type: 'info', message: '已取消删除' })        
            });
        }
    }
}
</script>

<style scoped lang="less">
.handle {
    display: flex;
    justify-content: center;
}
.deleteItem {
    margin-left: 24px;
}
.revision {
    margin-left: 20px;
}
.pages {
    margin-top: 15px;
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>