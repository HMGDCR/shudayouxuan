<template>
  <div class="nothingBox">
    <div class="nothing">
   <i class="iconfont cart icon-gouwu"></i>
   <p>去挑些喜欢的东西吧</p>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
.nothingBox{
    margin:50% auto;  
}
  .nothing{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    i{
     color:  #bdc0c5;
     font-size: 100px;
    }
    p{
      margin-top: 25px;
      color:  #bdc0c5;
    }
    
  }
</style>