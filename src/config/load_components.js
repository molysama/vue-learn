

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