// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//引入饿了么UI组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

// 加入vue-router
import router from './router'

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
