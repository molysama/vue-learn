// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//添加mockjs拦截请求，模拟返回服务器数据
import mock from './api/mock'

// element-ui 
import { Button, col, row } from 'element-ui'
Vue.use(Button)
Vue.use(col)
Vue.use(row)

// vuex
import store from './store'
import { currency } from './currency'
Vue.filter('currency', currency)

import components from './config/load_components'
import router from './config/router'

// 创建根实例
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})
