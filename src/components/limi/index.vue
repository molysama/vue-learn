
<template>

  <div class="body" >
    <Limi_header class="header" />
    <Limi_banner class="banner" />
    <Limi_content class="content" />
    <Limi_footer class="footer" />
  </div>


</template>

<script>

import Limi_header from './header'
import Limi_content from './content'
import Limi_banner from './banner'
import Limi_footer from './footer'

export default {
  components: {
    Limi_header, Limi_banner, Limi_content, Limi_footer
  }
}
  
</script>

<style lang="stylus" scoped >

.body 
  background url(../../assets/limi/clouds.gif) repeat-x
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