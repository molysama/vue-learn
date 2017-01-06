<template>
<div>

  <my-button v-for="n in items" ></my-button>
  
  <div><add-button @addBtn="parentAddBtn" /></div>
  
  <div>
    <childCMP @childEvent="parentEvent" :items="items" ></childCMP>
  </div>
</div>
</template>

<script>

  export default {
  
  components: {
    
    "add-button": { template: '<button @click="addButton" >点击增加按钮</button>' , methods: { addButton() { this.$emit('addBtn')} }},
    "myButton": { template: '<button @click="count++" >{{count}}</button>', data () {return {count: 0}} },
    "childCMP": { props: ['items'], template: '<span @click="childEvent" >parent text is {{items}}</span>', methods: { childEvent(){this.$emit("childEvent")}}}
     
  },
  data () {
    return {
      items: ['1', '2', '3'] 
    }
  },
  methods: {
    parentEvent () {
      alert('parent event is emit.')
    },
    parentAddBtn () {
      this.items.push('default')
    }
  }
  
}
</script>
<style lang="stylus" >

  
</style>