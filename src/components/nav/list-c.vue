
<template lang="pug" >
.side-panel.c
  
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
          "child": [
          {
            "class": "fa-cog",
            "title": "child"
          },
          {
            "class": "fa-calendar-o",
            "title": "日历"
          },
          {
            "class": "fa-clone",
            "title": "新建"
          },
          ]
        },
        {
          "class": "fa-book",
          "title": "BOOK"
        },
        {
          "class": "fa-pencil",
          "title": "EDIT"
        }
      ]
    }
  }

}
  
</script>
<style lang="stylus" scopde >
@import './list-c.styl'
  
.c {
  ul {
    width: 150px;
  }
}
</style>