<template>
  <div id="app">
    <!--<img src="./assets/logo.png">
    <hello></hello>-->
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>

import mockTest from './config/mockTest'

export default {
  name: 'app',
}
</script>

<style>
  @import 'styles/common.css'
</style>
