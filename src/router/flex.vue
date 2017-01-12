<template>
<ul class="flex-container">
  <li class="flex-item">1</li>
  <li class="flex-item">1</li>
  <li class="flex-item">1</li>
  <li class="flex-item">1</li>
  <li class="flex-item">1</li>
  <li class="flex-item">1</li>
</ul>
</template>

<scirpt>
export default {
  
}
</scirpt>

<style lang="stylus" scoped >

.flex-container 
  padding: 0
  margin: 0
  list-style: none
  
  display: flex 
  flex-flow: row wrap
  justify-content: space-around  
  
.flex-item 
  background: tomato
  padding: 5px
  width: 200px
  height: 150px
  margin-top: 10px
  
  line-height: 150px
  color: white
  font-weight: bold
  font-size: 3em
  text-align: center
  

</style>