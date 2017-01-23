<template lang="pug" >

.body(v-once)
  .girlBox
  
    //- 帽子
    .capBox
      .topBox
        .top
      .pinkBox
        .pink 
      .bottomBox
        .bottom1
        .bottom2
    
    //- 头部  
    .headerBox
      .header.absolute
      .ear.earl
        .earlineBox
          .earline
      .ear.earr
        .earlineBox
          .earline
    .hair.hairl
  
  
</template>
<script>
  
</script>

<style scoped lang="stylus">

.absolute
  position absolute

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
      

.headerBox  
  width 360px
  height 250px 
  position relative
  left 58px
  top -45px
  overflow hidden
  .header
    width 320px
    height 230px
    background #a14a24
    margin-top -35px
    border-radius 50%
    left 20px
  .ear
    width 38px
    height 51px
    background #f9cdbb
    z-index 16
    top 130px
    position absolute
    border-radius 50%
    border #fad6c9 solid 1px
  .earl
    left 30px
    transform rotate(-15deg)

  .earlineBox
    width 20px
    height 6px
    overflow hidden
    margin-left 5px
    margin-top 2px

    .earline
      width @width
      height 20px
      overflow hidden
      border #daa58c solid 3px
      border-radius 50% 
    
  .earr 
    right 30px
    transform rotate(15deg)
  
      
      



</style>