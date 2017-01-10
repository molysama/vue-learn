
<template lang="pug" >
div 
  div(@click="consoleData(childData)" ) console the data: {{childData}}
  div(@click="consoleData(parentData.name)" ) console the parentData: {{ parentData.name }}
</template>

<script>

export default {
  
  props: ['parentData'],
  data () {
    return {
      childData: this.parentData.name
    }
  },
  methods: {
    consoleData (val){
      console.log(val)
    }
  }
    
}
</script>