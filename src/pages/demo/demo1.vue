<template>
  <el-card>
     


        <div class="block">
    <span class="demonstration">显示总数</span>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="100" layout="total, prev, pager, next" :total="1000">
    </el-pagination>
  </div>
  </el-card>
</template>

<script>
  export default {
    data() {
        return {
            
        }
    }
  }
</script>