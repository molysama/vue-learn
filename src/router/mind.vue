<template lang="pug" >

.body
  el-row(:gutter="24")
    el-col(:span="8")
      ul 
        li ONE
        li TWO
        li THREE
        li FOUR
        li FIVE


  el-row 
    el-col(:span="8")
      .rotate-wrap
        .rotate
          p hi
    el-col(:span="8")
    el-col(:span="8")

  W3-bgclip
  
</template>
<script>
  
</script>

<style lang="stylus" scoped >

bgc = #e5e9f2
objbgc = deepskyblue

ul 

  li 
    text-align center
    float left
    background-color objbgc
    color darkgreen
    padding 2px
    margin 0 4px
    border-radius 15%
    width 80px
    height 30px
    line-height 30px
    cursor pointer
    transition .5s
    &:hover
      background-color lighten(objbgc, 9)
      color #fff
      transform rotate(40deg)

.el-col
  border 1px dashed limegreen
  background-color bgc
  padding 10px

.rotate-wrap
  height 200px
  position relative
  text-align center
  
  .rotate 
    width 100px
    height 50px
    background-color objbgc
    transform rotate(8deg) //deg即为角度
    border-radius 10px
    position absolute
    top 0
    right 0
    left 0
    bottom 0
    margin auto

    p
      line-height @height // @height 会往上冒泡直到找到height
  
</style>