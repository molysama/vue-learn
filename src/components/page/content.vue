<template>
<div>
  <myButton></myButton>
  <myButton></myButton>
  <myButton></myButton>
  
  <div>
    <childCMP @childEvent="parentEvent" :item="item" ></childCMP>
  </div>
</div>
</template>

<script>

  export default {
  
  components: {
    
    "myButton": { template: '<button @click="count++" >{{count}}</button>', data () {return {count: 0}} },
    "childCMP": { props: ['item'], template: '<span @click="childEvent" >parent text is {{item}}</span>', methods: { childEvent(){this.$emit("childEvent")}}}
     
  },
  data () {
    return {
      item: 'YES'
    }
  },
  methods: {
    parentEvent () {
      alert('parent event is emit.')
    }
  }
  
}
</script>
<style lang="stylus" >

  
</style>