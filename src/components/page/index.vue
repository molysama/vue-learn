<template>

    <div class="page-body">
         <page_header/> 
         <page_banner/> 
         <page_content/> 
         <page_footer/> 
    </div>

</template>

<script>

import page_header from './header'
import page_banner from './banner'
import page_content from './content'
import page_footer from './footer'


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

<style lang="stylus" scoped >

.page-body
    margin: 0 auto
    
</style>