
<template>
<ul class="navigation">
  <li><a href="#">Home</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Products</a></li>
  <li><a href="#">Contact</a></li>
</ul>
</template>

<script>

export default {
    
}
    
</script>

<style scoped lang="stylus">

.navigation
    margin 0 
    background deepskyblue
    display flex
    flex-flow row wrap 
    justify-content flex-end 
 
    a 
        text-decoration none
        display block
        padding 1em 
        color white 
        &:hover 
            background darken(deepskyblue, 2%)

@media all and (max-width 800px)
    .navigation 
        justify-content space-around
        
@media all and (max-width 600px)
    .navigation
        flex-flow column wrap
        padding 0
        
        a 
            text-align center
            padding 10px
            border-top 1px solid rgba(255, 255, 255, 0.3)
            border-bottom 1px solid rgba(0, 0, 0, 0.1)
            
        li:last-of-type a 
            border-bottom none
            

</style>