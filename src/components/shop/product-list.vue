
<template lang="pug" >

ul 
  li(v-for="p in products") {{ p.title }} - {{ p.price | currency}}
    br 
    button(:disabled="!p.inventory", @click="addToCart(p)") Add to cart

</template>
<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    products: 'allProducts'
  }),
  
  methods: mapActions([
    'addToCart'
  ]),
  
  created () {
    this.$store.dispatch('getAllProducts')
  }
}
  
</script>
<style lang="stylus" scoped>
  
</style>