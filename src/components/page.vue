<template>

    <div class="page-body">
         <page_header/> 
         <page_banner/> 
         <page_content/> 
         <page_footer/> 
    
    </div>

</template>

<script>

import page_header from './page/header'
import page_banner from './page/banner'
import page_content from './page/content'
import page_footer from './page/footer'

export default {
    data () {
        return {}
    },
    
    components: {
        page_header,
        page_banner,
        page_content,
        page_footer
    }
}
    
</script>

<style lang="stylus" scoped>

.page-body
    margin: 0 auto
    background: url("../assets/page/clouds.gif") repeat-x

    
</style>