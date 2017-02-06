<template lang="pug" >

.body
  h2 This is mind page
  p 当前路由是: {{ routeName }}
  
  router-view
  
</template>
<script>

export default {
  data() {
    return {

    }
  },

  computed: {
    routeName () {
      return this.$route.name
    }
  }
}
  
</script>

<style lang="stylus" scoped >

.body 
  max-width 960px
  margin 0 auto
  >h2 
    text-align center

</style>