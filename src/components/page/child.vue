
<template lang="pug" >
div 
  h2(@click="changeData") 点击后修改值,子组件的当前值为: {{ msg }}

</template>

<script>

export default {
  
  props: ['parentData'],
  data () {
    return {
    }
  },
  computed: {
    msg () {
      return this.parentData
    }
  },
  methods: {

    //点击时触发childEmit事件
    changeData () {

      let data = (this.msg === 1)?0:1
      this.$emit('childEmit', data)
    }
  }
    
}
</script>