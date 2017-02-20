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

  const result = _.pick(route, ['name', 'path', 'alias', 'redirect', 'meta'])
  result.component = resolve => require(['../views/' + route.router], resolve)

  // 如果存在子路由
  if (route.child) {
    result.children = route.child.map(child => createRoute(child))
  }

  return result
}

//实例化路由组件
const router = new VueRouter({
  // mode: 'history',
  routes
})
module.exports = router
