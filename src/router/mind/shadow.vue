
<template lang="pug" >


.body 
  .box
    W3-shadow.ss
    p 简单投影

  .box
    W3-shadow.ms
    p 双重投影

  .box 
    W3-shadow.outline
      p 可使用dashed 等属性
    p 双层边框时更灵活的outline属性

  .box 
    W3-shadow.outline-offset
    p
      span.c outline-offset 
      span 偏移效果，可为负数
  
  .box 
    .something-meaningful
      div I have a nice subtle inner rounding,don't I look pretty
  .box 
    .something-meaningful
      div I have a nice subtle inner rounding,don't I look pretty

</template>

<script>
  
</script>

<style lang="stylus" scoped >

.box
  float left
  width 45%
  height 200px
  border 1px solid orange
  padding-top 20px
  margin 10px
  position relative
  >*
    margin 0 auto
  p
    text-align center
    position relative
    top 10px
  .ss
    box-shadow 0 0 0 10px #655
  .ms
    box-shadow 0 0 0 10px #655, 0 0 0 15px deeppink
  .outline
    border 10px solid #655
    outline 5px dashed deeppink
  .outline-offset 
    background #655
    border-radius 10%
    outline 1px dashed #fff
    outline-offset -12px
  .something-meaningful
    background #655
    padding .8em
    width 200px
    >div 
      background tan 
      border-radius .8em 
      padding 1em
  &:nth-child(6)
    .something-meaningful
      >div 
        background tan 
        border-radius .8em
        padding 1em
        box-shadow 0 0 0 .6em deeppink
        outline .6em solid #655
      
  
.c 
  font-weight 500
  color #fff
  padding-left 2px
  padding-right 2px
  
</style>