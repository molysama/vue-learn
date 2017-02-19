import Vue from 'vue'
import VueRouter from 'vue-router'
import _ from 'lodash/object'

// 载入路由表配置
import { navs } from './router_path.toml'

Vue.use(VueRouter)

const routes = navs.map(route => {
  return createRoute(route)
})

// 编译路由
function createRoute(route) {

  const result = _.pick(route, ['name', 'path', 'alias', 'redirect'])
  result.component = resolve => require(['../router/' + route.router], resolve)

  // 如果存在子路由
  /*TODO: 警告 duplicate named routes definition
          根据Issues#1119 vue-router 已更新至2.2.0
          然而警告依然存在
  */ 
  if (route.child) {
    result.children = route.child.map(child => {
      return createRoute(child)
    })
  }

  return result
}

//实例化路由组件
const router = new VueRouter({
  // mode: 'history',
  routes
})
module.exports = router
