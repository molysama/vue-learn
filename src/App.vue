<template>
  <div id="app">
    <!--<img src="./assets/logo.png">
    <hello></hello>-->
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

import mockTest from './mockTest'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style>
  @import 'styles/common.css'
</style>
