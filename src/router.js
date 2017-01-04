import Vue from 'vue'
import VueRouter from 'vue-router'

// import settings from './router_path'
import settings from './router_path.toml'

Vue.use(VueRouter)

const routes = []
settings.path.forEach(set => { 
  if(!set.do){
    return; 
  }
  routes.push({ path: set.path, component: require('./components/' + set.component)})
})

const router = new VueRouter({
  mode: 'history',
  routes
})
module.exports = router
