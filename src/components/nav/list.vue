
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
            "title": "CLIP",
            "name": "mind1"
          },
          {
            "class": "fa-book",
            "title": "GIRL",
            "name": "girl"
          },
          {
            "class": "fa-cog",
            "title": "投影",
            "name": "shadow"
          },
          {
            "class": "fa-pencil",
            "title": "条纹",
            "name": "linear_gradient"
          }
          ]
        },
        {
          "class": "fa-pencil",
          "title": "布局",
          "name": "layout",
          "child": [
            {
              "class": "fa-pencil",
              "title": "布局1",
              "name": "layout1"
            },
            {
              "class": "fa-pencil",
              "title": "布局2",
              "name": "layout2"
            }
          ]
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