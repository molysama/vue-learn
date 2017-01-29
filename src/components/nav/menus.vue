
<template lang="pug" >
ul 
  // router-link(v-for="item in items", tag="li", :to="item.title", :name="item.title")

  li(v-for="item in items")
    router-link(:to="{ name: item.name}") 
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

@import './menus.styl'

</style>