<template>
  <div id="app">
  
    <!-- 引入左侧导航栏 -->
    <Navigation></Navigation>
    
    <!-- 路由视图 -->
    <router-view></router-view>
    
  </div>
</template>

<script>


export default {
  name: 'app',
}
</script>

<style>
  @import 'styles/common.css'
</style>
