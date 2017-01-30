
<template lang="pug" >

.bgclip
  span.c background-clip
  span 案例， 截取
  span.c border
  span 的背景渲染范围, 此例中白色背景截止在
  span.c padding
  span 范围内

</template>

<script>

export default {

}
  
</script>

<style lang="stylus" scoped>

  .bgclip 
    background url('http://csssecrets.io/images/stone-art.jpg')
    border 10px solid hsla(0, 0%, 100%, .5)
    background white
    background-clip padding-box

    max-width 20em
    padding 2em
    margin 2em auto 0
    font 100%/1.5 sans-serif

  .c 
    font-weight 700
    color green
    padding-left 2px
    padding-right 2px
  
</style>