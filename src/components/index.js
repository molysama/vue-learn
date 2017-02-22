
// 动态注册compontents内的所有组件，之后在全局无需注册即可使用
// 格式为  目录名-文件名， 首字母大写
// 例子1  src/components/page/header.vue, <Page-header>
// 例子2  src/components/Hello.vue, <Hello>

import Vue from 'vue'
const requireContext = require.context('components', true, /.*\.vue$/)

const components = requireContext.keys().map(key => {
  Vue.component(rename(key), requireContext(key))
})

/* 将组件注册成 目录-文件名的形式, 首字母大写 如 Page-header
 * 无目录则为文件名，首字母大写，如 Hello
 */ 
function rename (key) {
  let name = key.replace(/\.+\//, "").replace(/\.vue/, "").replace(/\//, "-").replace(/^(\w)/, v => v.toUpperCase())
  return name
}

module.exports = components
