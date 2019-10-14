<template>
   <div>
       <el-card>
           <div slot="header">
               影院列表
           </div>
            <el-table v-loading="loading" :data="list" border style="width: 100%" >
                <el-table-column prop="name" label="影院名称" align="center"> </el-table-column>
                <el-table-column prop="address" label="影院地址" align="center"> </el-table-column>
                <el-table-column prop="lowPrice" label="最低价格" align="center"> </el-table-column>
                <el-table-column prop="cityName" label="城市名称" align="center"></el-table-column>
                <el-table-column prop="cityId" label="城市ID" align="center"></el-table-column>
                <el-table-column prop="areaName" label="地区名称" align="center"></el-table-column>
                <el-table-column prop="areaId" label="地区ID" align="center"></el-table-column>
                <el-table-column fixed="right" label="操作" width="150" align="center"> 
                    <template slot-scope="scope" class="handle">
                        <el-button @click="handleClick(scope)" type="danger" icon="el-icon-delete" class="deleteItem" circle size="small"></el-button>
                        <router-link :to="`/cinema/edit/${scope.row.name}/${scope.row.cinemaId}`" class="revision">
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
    data () {
        return {
            list:[],
            totalList:0,
            loading:false
        }
    },
    created(){
        this.getAreaList(1)
        this.loading = true
    },
    methods:{
        changePage(pageNums){
            this.getAreaList(pageNums)
            this.loading = true
        },
        // 获取影院列表
        getAreaList( pageNum ){
            let url = "/cinema/getList?pageNum=" + pageNum
            this.$axios.get(url).then(res => {
                console.log(res)
                this.list = res.cinemas
                this.totalList = res.total
                this.loading = false 
            })
        },
        // 删除事件
        handleClick(scope){
            console.log(scope)
            this.$confirm('此操作将永久删除该地区, 是否继续?', '删除提示！', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'}).then(() => {
                // 点击删除
                let $index = scope.$index
                let cinemaId = scope.row.cinemaId
                let data = { cinemaId }
                let url = "/cinema/delById"
                // 该请求删除后台数据
                this.$axios.post(url,data).then(res => {
                    // 删除页面数据
                    this.list.splice($index,1)
                }).catch(err => {
                    this.$message.error("删除失败！")
                }),
                this.$message({ type: 'success', message: '删除成功!'});
            }).catch(() => {
                this.$message({ type: 'info', message: '已取消删除'
                })        
            });
        }
    }
}
</script>

<style lang="less" scoped>
.pages {
    margin-top: 15px;
    width: 100%;
    display: flex;
    justify-content: center;
}
.handle {
    display: flex;
    justify-content: space-between;
}
.deleteItem {
    margin-left: 24px;
}
.revision {
    margin-left: 20px;
}
</style>