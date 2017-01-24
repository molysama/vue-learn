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

      //- 左耳朵
      .ear.earl
        .earlineBox
          .earline
      
      //- 右耳朵
      .ear.earr
        .earlineBox
          .earline

      .face.absolute

        //- 刘海
        .bangBox
          -let num=[1,2,3,4,5]
          each item in num 
            .bang
        //- 左眉毛
        .browBox.browBoxl
          .brow.browl
        //- 右眉毛
        .browBox.browBoxr
          .brow.browr

        //- 左眼
        .eye.eyel
        //- 右眼
        .eye.eyer

        //- 左腮
        .blusher.blusherl
        //- 右腮
        .blusher.blusherr
        //- 嘴
        .mouthBox
          .mouth
            .red 
            .tongue
            .white2
            .white 
            .facecolor
            .facecolor2
            .whitel
            .whiter
        //- 下巴
        .jaw

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
  
  .face 
    width 250px
    height 240px
    background #f9cdaf
    left 52px
    top 0px
    border-radius 50%
    z-index 17

    .bangBox
      width 86px
      height 54px
      position absolute 
      top 5px
      left 82px
      .bang 
        width 10px
        height 54px
        border-radius 50%
        background #722f1b
        position absolute
      
      .bang:nth-child(1)
        top -5px
        transform rotate(40deg)
      .bang:nth-child(2)
        left 20px
        transform rotate(20deg)
      .bang:nth-child(3)
        top 10px
        left 40px
      .bang:nth-child(4)
        left 60px
        transform rotate(-20deg)
      .bang:nth-child(5)
        left 80px
        transform rotate(-40deg)

// for item in 1 2 3 4 5
//   .bang:nth-child(item)
//     transform rotate(60deg)

    .browBox
      position absolute
      top 50px
      height 8px
      line-height 8px
      overflow hidden
      .brow
        width 24px
        height 24px
        background none 
        border #8b492e solid 2px
        border-radius 50%
    .browBoxl
      left 40px
      transform rotate(-10deg) 
    .browBoxr
      right 40px
      transform rotate(10deg)


    .eye 
      width 19px
      height 27px
      background #722f1b
      position absolute
      top 118px
      border-radius 50%
    
    .eyel
      left 68px
    .eyer
      right 68px

    .blusher
      width 32px
      height 20px
      background #f19482
      position absolute
      top 140px
      border-radius 50%

    .blusherl
      left 30px
    .blusherr
      right 30px

    .mouthBox
      width 90px
      height 60px
      background none
      position absolute
      top 144px
      left 80px
      border-bottom-left-radius 50%
      border-bottom-right-radius 50%
      overflow hidden
      .mouth
        width 100%
        height 100px
        position absolute
        bottom 0
        border-bottom-left-radius 40%
        border-bottom-right-radius 50%
        border-top-left-radius 40%
        border-top-right-radius 50%


        .red 
          width 100%
          height 40px
          position absolute 
          bottom 0 
          background #a4223c
        .tongue 
          position absolute 
          width 50px
          height 16px
          left 20px
          bottom 8px
          background #f19482
          border-radius 50%
        .white2
          position absolute 
          width 80px
          height 20px
          left 5px
          bottom 28px
          border-radius 50%
          background #fff
        .white 
          position absolute 
          width 90px
          height 20px
          left 0px
          bottom 30px
          background #fff
          border-radius 50%
        .facecolor
          position absolute 
          width 110px
          height 30px
          left -10px
          top 28px
          border-radius 50%
          background #f9cdaf
        .facecolor2
          position absolute 
          width 70px
          height 30px
          left 10px
          border-radius 50%
          background #f9cdaf
          top 32px

        .whitel
          position absolute 
          width 20px
          height 12px
          left 0px
          bottom 34px
          border-radius 50%
          background #fff
          transform rotate(14deg)
        .whiter
          position absolute 
          width 20px
          height 12px
          right 0px
          bottom 34px
          border-radius 50%
          background #fff
          transform rotate(-14deg)

    .jaw    
      position absolute
      border-bottom #f3c4a5 solid 2px
      border-radius 50%
      width 40px
      height 20px
      top 196px
      left 105px
      
      
      



</style>