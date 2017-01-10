<template>
  <div id="app">
  
    <!-- 引入左侧导航栏 -->
    <Navigation></Navigation>
    
    <!-- 切换路由内容不重新刷新  -->
    <keep-alive>

    <!-- 路由视图 -->
      <router-view></router-view>

    </keep-alive>
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
