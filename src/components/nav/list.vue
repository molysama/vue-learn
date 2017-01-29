
<template lang="pug" >
.side-panel
  
  Nav-menus(:items="navs")
          

</template>
<script>

import {navs} from '../../config/router_path.toml'
export default {

  data () {
    return {
      navs: [
        {
          "class": "fa-cog",
          "title": "MIND",
          "name": "mind",
          "child": [
          {
            "class": "fa-cog",
            "title": "mind1",
            "name": "mind1"
          },
          {
            "class": "fa-book",
            "title": "GIRL",
            "name": "girl"
          }
          ]
        },
        {
          "class": "fa-pencil",
          "title": "VUE",
          "name": "page"
        },
        {
          "class": "fa-paper-plane",
          "title": "FLEX",
          "name": "flex"
        }
      ]
    }
  },

  created () {

    //TODO: 生成路由时添加图标样式
    // let navClasses = ["fa-cog", "fa-pencil"]

    // this.navs = navs.map(nav => {

    // })
  }

}
  
</script>
<style lang="stylus" scoped >
  
* {
  box-sizing: border-box;
}
.side-panel {
  position fixed
  top 200px
  left 0px
  z-index 999
  
  &:nth-child(2n) {
    background: #483430;
  }
}
</style>