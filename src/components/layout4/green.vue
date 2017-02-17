
<template lang="jade" >

.greenbox
  span.icon 
    i.fa(:class="green_icon")
  .inner
    h3 Search
    p Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. 
    Layout4-button Learn More
    slot


</template>
<style <style lang="stylus" scoped >

h1, h2, h3, h4, h5 ,h6
  font-family "Droid Sans", Arial, sans-serif
  font-weight 400
  margin 0 0 20px 0
  
boxcolor = #17B794
iconcolor = #13977a

.greenbox 
  border-radius 1%
  box-sizing border-box
  width 33.33%
  float left
  position relative
  background boxcolor
  text-align center
  padding 30px
  button 
    font-size 16px
    padding 10px 15px
    border-width 2px
  span.icon
    display block 
    width 90px
    height 90px 
    margin 0 auto 10px auto 
    position relative
    background iconcolor
    top -3.5em
    border-radius 50%
    i 
      line-height 90px 
      height 90px
      font-size 40px 
      color #fff
  .inner 
    display block
    top -1em
    position relative
    h3 
      font-size 18px 
      margin-bottom 15px
      text-transform uppercase 
      color #fff
    p 
      color rgba(255, 255, 255, 0.7)
      font-size 16px
      line-height 1.7

</style>
<script>

export default {
  data () {
    return {
      green_icon: 'fa-' + this.icon
    }
  },
  props: {
    icon: {
      type: String,
      default: 'search'
    }
  }
}
  
</script>
