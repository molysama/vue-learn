<template>
  <div class="navigation">
    <img src="../assets/navigate.png" alt="navigate_img" />
      <ul>
        <li v-for="(item, key) in items" >
          <router-link 
            v-if="item.do"
            :to="{ path: item.path }"
            active-class="nav-active"
            class="rounded">
            <span>{{  item.title  }}</span>
          </router-link>
        </li> 
      </ul>
  </div>
</template>
<script>

import {navs} from '../config/router_path.toml'

  export default {
    data () {
      return {
        items: navs
      }
    }
  }
  
</script>

<style scoped lang="stylus" >
  @import '../styles/navigation.styl'
</style>