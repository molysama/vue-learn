
<template lang="pug" >

.page-wrapper
  header
    nav
      li.logo
        a 首页
      ul 
        li
          a 链接
        li
          a 链接
        li
          a 链接
        li
          a 链接
    .banner
      .inner 
        h1 Layout
        .hr
        p.sub-heading Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        button 了解我
        .more 更多
  
  .content
    section.green-section
      .wrapper 
        div
          h2 主标题
          .hr
          p.sub-heading Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        div.icon-group
          span.icon item          
          span.icon item          
          span.icon item          
    section.gray-section 
    section.purple-section

</template>
<style lang="stylus" scoped>
  
nav
  background #ccc
  height 50px
  li.logo 
    letter-spacing 1px
    font-size 20px
    font-weight 700
    margin-right 20px
    padding 10px
    float left
    a 
      color #fff
  ul 
    list-style none
    float right
    li 
      display inline-block
      line-height 50px
      margin-right 20px
      a 
        color #fff
        line-height @line-height
        text-decoration none
        display inline-block
        height @height
.banner 
  background #777
  height 700px
  button padding 14px 60px
  .inner 
    margin 0 auto
    position relative
    top 160px
    max-width 300px
    text-align center
    h1 
      margin 0
    .hr 
      background #ddd
      width 100%
    .more 
      margin-top 180px
p.sub-heading 
  line-height 30px
  font-size 14px
  margin 30px
  color #ddd
button 
  border none
  background #333
  color #eee
  background deepskyblue
  padding 10px
  border-radius 10%


.green-section
  background #078494
  color #fff
  text-align center
  padding 100px 0 
  .hr 
    background #fff
  .icon-group 
    .icon
      display inline-block 
      width 80px 
      height 80px 
      background #0D6F7C
      margin 20px
      transform rotate(45deg)
      border 1px solid #655
      

.wrapper
  max-width 1080px
  margin 0 auto
.hr
  width 40%
  height 2px 
  margin 20px auto 
  background #fff

      


</style>
<script>
  
</script>