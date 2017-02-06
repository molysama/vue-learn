<style lang="stylus" scoped>

.wrap
  width 600px
  height auto 
  margin 0 auto
  margin-top 45px
  border 1px solid black
.wrap-left 
  li 
    float left
.wrap-right 
  li 
    float right
.top 
    text-align center    
  h2
    //TODO: h2无法完美居中
    display inline-block
  a 
    float right 
    margin 5px 0
    &:hover 
      color snow
    &.active 
      color snow
ul 
  li 
    height 130px
    width 180px
    background #655
    margin 5px

</style>
<template lang="pug" >

.wrap(:class="wrapFloat")
  .top.clearfix 
    h2 通过按钮改变浮动模式
    a(href="#", title="右浮动模式", :class="{active: float==='right'}", @click="changeFloat")
      span.fa.fa-stack.fa-xs
        i.fa.fa-stack-2x.fa-square-o
        i.fa.fa-stack-1x.fa-th-list
    a(href="#", title="左浮动模式", :class="{active: float==='left'}", @click="changeFloat")
      span.fa.fa-stack.fa-xs
        i.fa.fa-stack-2x.fa-square-o
        i.fa.fa-stack-1x.fa-list
  ul.clearfix 
    li 
    li 
    li 
    li 
    li 

</template>
<script>
export default {
  data () {
    return {
      float: "left"
    }
  },
  methods: {
    changeFloat () {
      this.float = (this.float==="left"?"right":"left")
    }
  },
  computed: {
    wrapFloat () {
      return "wrap-" + this.float
    }
  }
}
  
</script>