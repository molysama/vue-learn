
<template lang="pug" >

.body 
  .box
    W3-simple-shadow.ss
    p 简单投影

  .hr

  .box
    W3-deeppink-shadow.ss
    p 双重投影

  .hr 

  .box 
    W3-outline.ss
      p 可使用dashed 等属性
    p 双层边框时更灵活的outline属性

</template>

<script>
  
</script>

<style lang="stylus" scoped >

.box
  .ss
    margin 0 auto
  p
    margin 0 auto
    text-align center
    position relative
    top 10px

.hr 
  width 80%
  margin 0 auto
  margin-top 20px
  margin-bottom 20px
  border none 
  border-bottom 1px dashed black
  
  
</style>