<template lang="pug" >

.body
  el-row 
    el-col(:span="8")
      .rotate-wrap
        .rotate
          p hi
    el-col(:span="8")
    el-col(:span="8")
  
</template>
<script>
  
</script>

<style lang="stylus" scoped >

bgc = #e5e9f2
objbgc = deepskyblue

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