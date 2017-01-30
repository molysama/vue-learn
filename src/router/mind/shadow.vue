
<template lang="pug" >

.body 
  .shadow
    W3-simple-shadow.ss
    p 简单投影

  .hr

  .shadow
    W3-deeppink-shadow.ss
    p 双重投影

</template>

<script>
  
</script>

<style lang="stylus" scoped >

.shadow
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