
<template>

  <div>
  <div class="logo"><a href="">
    <img src="../../assets/limi/logo.png" alt="">
  </a></div>
  
  <ul class="nav">
    <li v-for="(nav, index) in navs" v-show="nav.show" ><a @click.stop="showNavs(index)" href="#">{{nav.title}}</a></li>
    <li class="active" ><a href="#">点击左边的标签会消失哦</a></li>
  </ul>
  
  </div>

</template>

<script>

import {titles} from './item.toml'

export default {
  
  data () {
    return {
      
      //必须在data里存在navs，才能在函数内通过this调用
      navs: []
    }
  },
  methods: {
    showNavs (index) {
      this.navs[index].show = false
    },

    addNavs () {
      let navs = []
      
      //遍历配置文件中的titls，为其添加show属性以决定是否显示
      titles.forEach(title => {
        let nav = {}
        nav.title = title
        nav.show = true
      
        navs.push(nav)
      })
      this.navs = navs
    }
  },
  
  //组件初始化时， 初始化导航栏
  created () {
    this.addNavs()
  }
  
}
  
</script>

<style lang="stylus" scoped >
  @import './header.styl'
</style>