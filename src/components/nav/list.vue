
<template lang="pug" >
.side-panel
  
  Nav-menus(:items="navs")
          

</template>
<script>

export default {

  data () {
    return {
      navs: [
        {
          "class": "fa-cog",
          "title": "HOME",
          "name": "mind",
          "child": [
          {
            "class": "fa-cog",
            "title": "child",
            "name": "child"
          }
          ]
        },
        {
          "class": "fa-book",
          "title": "GIRL",
          "name": "girl"
        },
        {
          "class": "fa-pencil",
          "title": "EDIT",
          "name": "page"
        }
      ]
    }
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
ul 
  width 150px
</style>