
<template>

  <div class="body" >
    <Limi-header class="header" />
    <Limi-banner class="banner" />
    <Limi-content class="content" />
    <Limi-footer class="footer" />
  </div>


</template>

<script>

export default {
}
  
</script>

<style lang="stylus" scoped >

.body 
  background url(../assets/limi/clouds.gif) repeat-x
  padding-top 45px

.header, .banner, .content, .footer 
  margin 0 auto  //水平居中
  width 1000px
  overflow hidden
  
img 
  border none

div, p, ul ,li, dl, dt, dd, h1, a, img
  margin 0
  padding 0
  
  
</style>