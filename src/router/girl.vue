<template lang="pug" >

.body(v-once)
  .girlBox
    .capBox
      .topBox
        .top
      .pinkBox
        .pink 
      .bottomBox
        .bottom1
        .bottom2
    .headBox
    .hair.hair1
  
  
</template>
<script>
  
</script>

<style scoped lang="stylus">

.body
  background #ef9825
  padding-top 85px
  display block
  
.girlBox 
  width 470px
  height 506px
  margin 20px auto
  position relative
  
.capBox 
  width 420px
  height 152px
  margin-left 18px
  top 20px
  position relative
  z-index 18
  
  // 帽子顶部
  .topBox 
    position absolute
    top 0
    left 55px
    width 300px
    height 60px
    overflow hidden
    .top
      width 300px
      height 300px
      background #f4d641 
      border-radius 50% 
    
  .pinkBox 
    position absolute
    top 30px
    left 36px
    z-index 6
    height 70px
    overflow hidden
    // border-top-left-radius 50%
    // border-top-right-radius 50%
   
    .pink 
      width 260px
      height 100px
      background #e05882 
      margin-left 40px
      margin-top 0px 
      border-radius 50% 

  .bottomBox
    position absolute
    width 480px
    height 205px
    left -20px
    top 55px 
    border-bottom-left-radius 50% 
    border-bottom-right-radius 50% 
    z-index 7 
    overflow hidden 
   
    .bottom1 // 帽沿
      width 360px 
      height 200px
      position absolute
      background none
      border #f4d641 solid 60px
      border-radius 50%
      
    .bottom2 // 帽子阴影
      background none
      width 360px
      height 200px
      position absolute
      border #c29b1e solid 53px
      opacity 0.23
      border-radius 50%
      margin-top 40px
      left 10px
      
      
  
      
      

</style>