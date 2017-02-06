// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//添加mockjs拦截请求，模拟返回服务器数据
import mockTest from './config/mockTest'

//引入饿了么UI组件
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
// Vue.use(ElementUI)

//注册所有组件
import components from './config/load_components'

// 引入路由组件
import router from './config/router'

global.myGlobalData = 'hello'

// 创建根实例
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
