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
  >h2 
    text-align center

</style>