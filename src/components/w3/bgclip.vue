
<template lang="pug" >

.body
  .div 一个案例，截取border的背景渲染范围

</template>

<script>

export default {

}
  
</script>

<style lang="stylus" scoped>

.body 
  background url('http://csssecrets.io/images/stone-art.jpg')
  .div 
    border 10px solid hsla(0, 0%, 100%, .5)
    background white
    background-clip padding-box

    max-width 20em
    padding 2em
    margin 2em auto 0
    font 100%/1.5 sans-serif

  
</style>