
<template lang="pug" >
ul 
  // TODO: 当使用li作为link时，会附加浏览器点击样式 
  // router-link(v-for="item in items", tag="li", :to="item.title", :name="item.title")
  li(v-for="item in items")
    a 
      i.fa.fa-fw(:class="item.class")
      span.menu-item {{ item.title }}
    Nav-menus(:items="item.child", v-if="item.child")

</template>

<script>

export default {

  props: ["items"]

}
  
</script>

<style lang="stylus" scoped >
  
</style>