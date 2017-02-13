
<template lang="jade" >

.cart
  h2 Your cart
  p(v-show="!products.length")
    i Please add some products to cart.
  ul 
    li(v-for="p in products")
      {{ p.title }} - {{ p.price | currency }} x {{ p.quantity }}
  p Total: {{ total | currency }}
  p 
    button(:disabled="!products.length", @click="checkout(products)") Checkout
  p(v-show="checkoutStatus") Checkout {{ checkoutStatus }}
  

</template>
<script>

import { mapGetters } from 'vuex'

//TODO: 开始分析dispatch、mapGetters等代码
export default {
  computed: {
    
    ...mapGetters({
      products: 'cartProducts',
      checkoutStatus: 'checkoutStatus'
    }),
    
    total () {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    }
  },
  
  methods: {
    checkout (products) {
      this.$store.dispatch('checkout', products)
    }
  }
  
  
}
  
</script>