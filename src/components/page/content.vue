<template>
<div>

  <my-button v-for="n in items" ></my-button>
  
  <div><add-button @addBtn="parentAddBtn" /></div>
  
  <div>
    <childCMP @childEvent="parentEvent" :items="items" ></childCMP>
  </div>
  
  <Page-child :parentData="mulData" ></Page-child>
  
  <h2 @click="changeMul" >点击后修改name值点击后修改name值点击后修改name值</h2>
</div>
</template>

<script>


  import axios from 'axios'

  export default {
  
  components: {
    
    "add-button": { template: '<button @click="addButton" >点击增加按钮</button>' , methods: { addButton() { this.$emit('addBtn')} }},
    "myButton": { template: '<button @click="count++" >{{count}}</button>', data () {return {count: 0}} },
    "childCMP": { props: ['items'], template: '<span @click="childEvent" >parent text is {{items}}</span>', methods: { childEvent(){this.$emit("childEvent")}}}
     
  },
  data () {
    return {
      items: ['1', '2', '3'],
      globalData: global.myGlobalData,
      mulData: {
        "name": "parent",
        "result": [0,1,2]
      }
    }
  },
  methods: {
    parentEvent () {
      alert('parent event is emit.')
    },
    parentAddBtn () {
      this.items.push('default')
    },
    changeMul () {
      this.mulData.name = "lee"
    }
  },
  created () {
    axios.get('/loadParentData')
      .then(res => {
        this.mulData = res.data
      })
      .catch(err => console.log(err))
  }
  
}
</script>
<style lang="stylus" >

  
</style>