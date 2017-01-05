
// 动态注册compontents内的所有组件(不包含index.vue， 默认该文件为路由模板)，之后在全局无需注册即可使用
// 格式为  目录名-文件名， 首字母大写
// 例子1  src/components/page/header.vue, <Page-header>
// 例子2  src/components/Hello.vue, <Hello>

import Vue from 'vue'
const requireContext = require.context('../components', true, /(?!index)\.vue$/)

const components = requireContext.keys().map(key => {
  Vue.component(rename(key), requireContext(key))
})

function rename (key) {
  let name = key.replace(/\.+\//, "").replace(/\.vue/, "").replace(/\//, "-").replace(/^(\w)/, v => v.toUpperCase())
  return name
}

module.exports = components