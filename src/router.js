import Vue from 'vue'
import VueRouter from 'vue-router'

import settings from './router_path'

Vue.use(VueRouter)

const routes = []
settings.forEach(set => { 
  if(!set.do){
    return; 
  }
  routes.push({ path: set.path, component: require('./components/' + set.component)})
})

const router = new VueRouter({
  routes
})
module.exports = router
