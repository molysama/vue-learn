
<template lang="pug" >

.body 
  .box
    W3-shadow.ss
    p 简单投影

  .hr

  .box
    W3-shadow.ms
    p 双重投影

  .hr 

  .box 
    W3-shadow.outline
      p 可使用dashed 等属性
    p 双层边框时更灵活的outline属性

</template>

<script>
  
</script>

<style lang="stylus" scoped >

.box
  p
    margin 0 auto
    text-align center
    position relative
    top 10px
  .ss
    margin 0 auto
    box-shadow 0 0 0 10px #655
  .ms
    margin 0 auto
    box-shadow 0 0 0 10px #655, 0 0 0 15px deeppink
  .outline
    margin 0 auto
    border 10px solid #655
    outline 5px dashed deeppink

.hr 
  width 80%
  margin 0 auto
  margin-top 20px
  margin-bottom 20px
  border none 
  border-bottom 1px dashed black
  
  
</style>