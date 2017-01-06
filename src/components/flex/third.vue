
<template>
<div class="wrapper">
  <header class="header">Header</header>
  <article class="main">
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  
  </article>
  <aside class="aside aside-1">Aside 1</aside>
  <aside class="aside aside-2">Aside 2</aside>
  <aside class="aside aside-3">Aside 3</aside>
  <aside class="aside aside-4">Aside 4</aside>
  <footer class="footer">Footer</footer>
</div>

</template>

<script>

export default {
  
}
  
</script>

<style lang="stylus" scoped >

body 
  padding 2em

.wrapper
  display flex
  flex-flow row wrap
  font-weight bold
  text-align center
  
  >* 
    padding 10px
    flex 1 100%  
  
.header 
  background tomato
  
.footer 
  background lightgreen
  
.main 
  text-align left
  background deepskyblue
  
.aside-1
  background gold
  
.aside-2
  background hotpink
.aside-3
  background violet
  

@media all and (min-width 600px)
  .aside 
    flex 1 auto
    
@media all and (min-width 800px)
  .aside
    flex 1 auto
  .main   
    flex 2 0px
  .aside-1 
    order 1
  .main 
    order 3
  .aside-2
    order 2 
  
</style>