<template lang="pug" >
  #app
  
    // 引入左侧导航栏
    //Navigation
    Nav-list
    
    // 切换路由内容不重新刷新
    keep-alive
      router-view

</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
@import './styles/common.css'
</style>
