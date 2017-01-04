<template>
<div class="header" >
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">LOGO</el-menu-item>
      

      <el-submenu :offset="6" index="2">
        <template slot="title">技术应用</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-menu-item index="2-4">选项4</el-menu-item>
        <el-menu-item index="2-5">选项5</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">相关产品</el-menu-item>
      <el-menu-item index="4">联系我们</el-menu-item>
      <el-menu-item index="5">FAQ</el-menu-item>
      
    </el-menu>
</div>

</template>

<script>

import axios from 'axios'

export default {
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
