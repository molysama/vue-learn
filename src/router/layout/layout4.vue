
<template lang="pug" >

.body
  .page
    nav 
      .container
        el-row 
          el-col(:span="24")
            ul 
              li
                a 
                  i.fa.fa-lg.fa-mobile
                  |  +1(0)123456789
              li
                a 
                  i.fa.fa-lg.fa-twitter
              li
                a 
                  i.fa.fa-lg.fa-envelope-o
              li
                a 
                  i.fa.fa-lg.fa-facebook-f
        el-row
          el-col(:sm="8", :xs="24")
            .logo
              a MolySama
                em .
          el-col(:xs="16").nav-wrapper
            ul 
              li
                a Home
              li
                a About
              li
                a Services
              li
                a Dropdown
              li
                a Portfolio
              li
                a Contact
                  
    header
      .container
        el-row
          el-col(:span="24")
            .title
              h1 Your Business To the Next Level
              h2 Free HTML5 Bootstrap Templates Made 
              el-button(:plain="true", type="text") Get In Touch
      
    .toTop
      a 
        i.fa.fa-lg.fa-long-arrow-up


  



</template>
<style lang="stylus" scoped>
themecolor = #17B794
h1, h2, h3, h4, h5 
  color #fff
  margin 0
.body
  font-family "Droid Sans", Arial, sans-serif
  font-weight 400
  font-size 16px
  line-height 1.7
  color #777
  background #fff
  .page 
    position relative
    overflow-x hidden
    width 100%
    height 100%
    transition 0.5s
    nav 
      position absolute
      top 0
      margin 0
      width 100%
      padding 20px 0
      z-index 1001
      .logo 
        font-size 20px 
        margin 0
        padding 0
        text-transform uppercase
        font-weight bold
        a 
          color #fff 
          padding 5px 10px
          letter-spacing 1px
          em 
            color themecolor
            padding-left 5px
      .el-row:first-child .el-col
        text-align right
        ul 
          li
            display inline-block
            a 
              font-size 14px 
              font-weight bold
              margin-left 0px
              color rgba(255, 255, 255, 0.5)
              padding 30px 10px
              cursor pointer
              transition-duration .2s
              &:hover 
                color #fff
                i 
                  color @color
              i 
                transition-duration 0s
                color themecolor
                line-height 14px 
      .nav-wrapper 
        text-align right
        ul 
          li 
            display inline-block
            a 
              font-size 16px
              padding 30px 10px
              color rgba(255, 255, 255, 0.5)
              transition 0.5s
              cursor pointer
              &:hover 
                color #fff
  header 
    background rgba(29, 43, 83, 1)
    height 900px
    width 100%
    position relative
    .title 
      padding-top 200px
      padding-left 50px
      h1 
        color #fff
        font-size 59px
        font-weight 400
        line-height 1.5
      h2 
        font-size 22px 
        line-height 1.5
        margin-bottom 30px
      button 
        color #fff
        background none
        transition 0.3s
        padding 19px 30px
        font-size 18px
        font-weight 400
        border 1px solid #fff
        &:hover 
          background #fff
          color rgba(29, 43, 83, 1)
      
// 改变选中的div的样式
::selection
  color #fff
  background themecolor
* 
  box-sizing border-box
*:before, *:after 
  box-sizing border-box
  
.container 
  max-width 1140px
  position relative 
  margin 0 auto 
  padding-left 15px
  padding-right 15px
  
.toTop 
  position fixed
  bottom 20px 
  right 20px
  z-index 999
  transition 0.5s
  a
    width 50px
    height 50px
    line-height 50px
    border-radius 10%
    display block 
    color #fff
    background rgba(0, 0, 0, 0.5)
    text-align center
    cursor pointer
    transition 0.3s
    &:hover 
      color themecolor
  // .row 
  //   margin-left -15px
  //   margin-right -15px
  //   // 清除浮动
  //   &:before, &:after
  //     content: " "
  //     display table
  //   &:after 
  //     clear both
  
</style>
<script>
  
</script>