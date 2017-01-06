
<template>

  <div>
  <div class="logo"><a href="">
    <img src="../../assets/limi/logo.png" alt="">
  </a></div>
  
  <ul class="nav">
    <li v-for="(title, index) in titles" ><a href="#">{{title}}</a></li>
    <li class="active" ><a href="">样例</a></li>
  </ul>
  
  </div>

</template>

<script>

import {titles} from './item.toml'

export default {
  
  data () {
  return {
    titles: titles
  }
  }
  
}
  
</script>

<style lang="stylus" scoped >

.logo 
  width 220px
  height 54px
  float left
  background #991616
  
  a  
  display block
  
  img 
    display block
  
.nav 
  width 780px
  height 54px
  float left
  background #393838
  list-style none  
  position relative
  
  li 
  float left
  
  a 
    cursor pointer
    position relative
    box-sizing border-box
    border-bottom  4px solid transparent
    display block 
    width 86px 
    height 54px
    line-height 54px
    text-align center
    font-size 12px
    color #ccc
    text-decoration none
    &:hover 
    color #fff
  
    &.active 
      a 
      border-bottom  4px solid deepskyblue
      color #fff

</style>