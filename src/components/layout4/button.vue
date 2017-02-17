
<template lang="jade" >

el-button(:plain="true", type="text") {{ $slots.default[0].text }}

</template>
<style lang="stylus" scoped >

themecolor = #17B794
button 
  color #fff
  background none
  transition 0.3s
  padding 19px 30px
  font-size 18px
  font-weight 400
  border 1px solid #fff
  &:hover 
    background #fff!important
    color themecolor!important
    border-color transparent!important
  
</style>
<script>
  
</script>