import Vue from 'vue'
import VueRouter from 'vue-router'

// 载入路由表配置
import {navs} from './router_path.toml'

//注册所有组件
import components from './load_components'

Vue.use(VueRouter)

const routes = []
navs.forEach(nav => {
  
  //待完成路由组件不注册
  if (!nav.do) {
    return;
  }
  
  // 动态生成路由模板
  routes.push({ 
    path: nav.path, 
    component: resolve => require(['../components/' + nav.component], resolve) 
  })
})

//实例化路由组件
const router = new VueRouter({
  mode: 'history',
  routes
})
module.exports = router
