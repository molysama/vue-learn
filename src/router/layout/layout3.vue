
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
          span.icon
            i item          
          span.icon
            i item          
          span.icon
            i item          
    section.gray-section 
      .article-preview.clearfix
        .img-section
          img(src="../../assets/layout3/pic01.jpg", alt="")
        .text-section
          h2 标题
          .sub-heading 副标题
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, accusamus, quisquam. Veniam hic itaque necessitatibus, qui. Provident voluptas minima, dolores, illum qui, dolorum commodi porro asperiores ducimus ipsam, beatae expedita.
      .article-preview.clearfix
        .text-section
          h2 标题
          .sub-heading 副标题
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, accusamus, quisquam. Veniam hic itaque necessitatibus, qui. Provident voluptas minima, dolores, illum qui, dolorum commodi porro asperiores ducimus ipsam, beatae expedita.
        .img-section
          img(src="../../assets/layout3/pic02.jpg", alt="")
      .article-preview.clearfix
        .img-section
          img(src="../../assets/layout3/pic03.jpg", alt="")
        .text-section
          h2 标题
          .sub-heading 副标题
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, accusamus, quisquam. Veniam hic itaque necessitatibus, qui. Provident voluptas minima, dolores, illum qui, dolorum commodi porro asperiores ducimus ipsam, beatae expedita.
    section.purple-section
      .heading-wrapper
        h2 标题
        div.sub-heading Lorem ipsum dolor sit amet, consectetur adipisicing elit. A repudiandae, eligendi nesciunt dolore natus deleniti. Facilis eius mollitia, vitae culpa assumenda similique ex. Omnis ipsam adipisci beatae iste provident nulla!
        .car-group.clearfix
          .card(data-aos="fade-left")
            h3 小标题
            p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate suscipit, quaerat laboriosam commodi, voluptatum ipsam architecto, ea voluptas at aut aspernatur debitis tempore dolores facere. Ducimus maxime magnam reprehenderit deserunt.
          .card(data-aos="fade-left")
            h3 小标题
            p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate suscipit, quaerat laboriosam commodi, voluptatum ipsam architecto, ea voluptas at aut aspernatur debitis tempore dolores facere. Ducimus maxime magnam reprehenderit deserunt.
          .card(data-aos="fade-left")
            h3 小标题
            p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate suscipit, quaerat laboriosam commodi, voluptatum ipsam architecto, ea voluptas at aut aspernatur debitis tempore dolores facere. Ducimus maxime magnam reprehenderit deserunt.
          .card(data-aos="fade-left")
            h3 小标题
            p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate suscipit, quaerat laboriosam commodi, voluptatum ipsam architecto, ea voluptas at aut aspernatur debitis tempore dolores facere. Ducimus maxime magnam reprehenderit deserunt.
          .card(data-aos="fade-left")
            h3 小标题
            p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate suscipit, quaerat laboriosam commodi, voluptatum ipsam architecto, ea voluptas at aut aspernatur debitis tempore dolores facere. Ducimus maxime magnam reprehenderit deserunt.
          .card(data-aos="fade-left")
            h3 小标题
            p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate suscipit, quaerat laboriosam commodi, voluptatum ipsam architecto, ea voluptas at aut aspernatur debitis tempore dolores facere. Ducimus maxime magnam reprehenderit deserunt.
            
  footer  
    ul.share-group
      li item 
      li item 
      li item 
      li item 
      li item 
    .copyright &copy MolySama




</template>
<style lang="stylus" scoped>
  
.page-wrapper
  background #444 url(../../assets/layout3/banner.jpg) 
  background-attachment fixed // 背景图片不动
  background-repeat no-repeat // 不重复
  background-size cover
  background-position center center
header 
  background rgba(0, 0, 0, 0.4)
nav
  background transparent
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
  background transparent
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
  background #078494
  &:hover 
    background #078699
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
    margin-top 60px
    .icon
      display inline-block 
      width 80px 
      height 80px 
      background #0D6F7C
      margin 20px
      transform rotate(45deg)
      border 1px solid #655
      i 
        display inline-block
        transform rotate(-45deg) translate(-50%, 50%)
      
.gray-section 
  background #655
  .article-preview
    >div 
      float left
    .img-section 
      width 45%
      img 
        width 100%
        display block //解决图片占不全的问题
    .text-section 
      width 55%
      box-sizing border-box
      padding-top 50px
      padding-left 50px
      p 
        font-size 15px
        letter-spacing 1px

.purple-section 
  background #3F3965
  color #fff
  padding 80px
  .hr 
    background #373259
  .heading-wrapper 
    text-align center
    .card 
      float left 
      width 50% 
      min-height 300px
      padding 20px
      box-sizing border-box
      color #ddd
      &:first-child 
        background rgba(0, 0, 0, 0.05)
      &:nth-child(2)
        background rgba(0, 0, 0, 0.09)
      &:nth-child(3)
        background rgba(0, 0, 0, 0.13)
      &:nth-child(4)
        background rgba(0, 0, 0, 0.17)
      &:nth-child(5)
        background rgba(0, 0, 0, 0.21)
      &:nth-child(6)
        background rgba(0, 0, 0, 0.25)

p 
  font-size 18px
  letter-spacing 1px

.wrapper
  max-width 1080px
  margin 0 auto
.hr
  width 40%
  height 2px 
  margin 20px auto 
  background #fff

footer 
  background #333
  color #fff
  min-height 150px
  text-align center
  ul.share-group 
    display block 
    width 100%
    margin 0 auto
    padding 50px 0 20px
    li 
      display inline-block
      padding 10px
  .copyright
      padding-bottom 20px
      
      


</style>
<script>

// TODO: 整合aos动画库
// import aos from '../../aos'
export default {
  
}
  
</script>