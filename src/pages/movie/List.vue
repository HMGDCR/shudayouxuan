<template>
   <div>
       <el-card>
           <div slot="header">
               电影列表
           </div>
            <el-table v-loading="loading" :data="list" border style="width: 100%" >
                <el-table-column prop="poster" label="海报" align="center">
                    <template   slot-scope="scope">            
                        <img :src="scope.row.poster" style="width:110px; heigth:60px;" />
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="电影名称" align="center"> </el-table-column>
                <el-table-column prop="filmType" label="电影类型" align="center"> </el-table-column>
                <el-table-column prop="director" label="导演" align="center"> </el-table-column>
                <el-table-column prop="language" label="语言" align="center"> </el-table-column>
                <el-table-column prop="nation" label="产地" align="center"> </el-table-column>
                <el-table-column fixed="right" label="操作" width="150" align="center"> 
                    <template slot-scope="scope" class="handle">
                        <el-button @click="handleClick(scope)" type="danger" icon="el-icon-delete" class="deleteItem" circle size="small"></el-button>
                        <router-link :to="`/movie/edit/${scope.row.filmId}`" class="revision">
                            <el-button type="primary" size="small" icon="el-icon-edit" circle></el-button>
                        </router-link>
                        <el-button @click="checkDetails(scope)" type="info" icon="el-icon-search" class="deleteItem" circle size="small"></el-button>
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
        this.movieList(1)
        this.loading = true
    },
    methods:{
        // 页码切换
        changePage(pageNums){
            this.movieList(pageNums)
            this.loading = true
        },
        // 获取城市列表
        movieList( pageNum ){
            let url = "/film/getList?pageNum=" + pageNum
            this.$axios.get(url).then(res => {
                console.log(res)
                this.list = res.films
                this.totalList = res.total
                this.loading = false 
            })
        },
        // 查看详情
        checkDetails( scope ){
            console.log( scope )
            this.$router.push({
                path:"/movie/movieDetail",
                query:{filmId:scope.row.filmId}
            })
            // this.$router.push("/movie/movieDetail")
        },
        // 删除事件
        handleClick(scope){
            this.$confirm('此操作将永久删除该地区, 是否继续?', '删除提示！', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'}).then(() => {
                // 点击删除
                let $index = scope.$index
                let filmId = scope.row.filmId
                let data = { filmId }
                let url = "/film/delById"
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
    justify-content: space-around;
}
.revision {
    margin: 0 12px;
}
</style>