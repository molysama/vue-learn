<template lang="pug" >
  #app
  
    // 引入左侧导航栏
    //Navigation
    Nav-list-c
    
    // 切换路由内容不重新刷新
    keep-alive

    // 路由视图
      router-view

</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
</style>
