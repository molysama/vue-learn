<template lang="pug" >
<div class="header" >
  el-menu(theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect")
    el-menu-item(index="1") logo
    el-submenu(:offset="6" index="2")
      template(slot="title") 技术应用
      el-menu-item(index="2-1") 选项1
      el-menu-item(index="2-2") 选项2
      el-menu-item(index="2-3") 选项3
      el-menu-item(index="2-4") 选项4
      el-menu-item(index="2-5") 选项5
    el-menu-item(index="3") 相关产品
    el-menu-item(index="4") 联系我们
    el-menu-item(index="5") FAQ
  div(v-html="html")
</template>

<script>

import axios from 'axios'

export default {
   data () {
     return {
       html: '<h2>Hello v-html</h2>'
     }
   },
   methods: {
   handleSelect(key, keyPath) {
    axios.get('/user')
       .then(res => {
        alert(JSON.stringify(res.data))
       })
       .catch(err => console.log(err))
   }
   }  
}
</script>
