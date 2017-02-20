<template >

<div class="page-body" >

  <!-- 子组件 -->
  <Page-child :parentData="data" @childEmit="parentFunc"></Page-child>
  <h2>父组件的值:{{data}}</h2>
</div>

</template>

<script>

export default {
  data () {
    return {
      data: 1
    }
  },
  methods: {
    parentFunc (param) {
      this.data = param
    }
  }
}
  
</script>

<style lang="stylus" scoped >

.page-body
  margin 0 auto
  max-width 960px
  
</style>