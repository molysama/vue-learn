<template>
  <div id="app">
    <!--<img src="./assets/logo.png">
    <hello></hello>-->
    <Navigation></Navigation>
    <router-view></router-view>
    <page/>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Navigation from './components/Navigation'
import Page from './components/page'

export default {
  name: 'app',
  components: {
    Navigation,
    Page
  }
}
</script>

<style>
  @import 'styles/common.css'
</style>
