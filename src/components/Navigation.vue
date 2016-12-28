<template>
    <div class="navigation">
        <img src="../assets/navigate.png" alt="navigate_img" />
            <ul>
                <li v-for="(item, key) in items" >
                    <router-link 
                        :to="{ path: item.path }"
                        active-class="nav-active"
                        class="rounded">
                        <span>{{  item.title  }}</span>
                    </router-link>
                </li> 
            </ul>
    </div>
</template>
<script>

import settings from '../router_path.json'

    export default {
        data () {
            return {
                items: settings 
            }
        },
        methods: {
            // aClick (index) {
            //     Object.keys(this.items).map(key => {
            //         if(key == index) {
            //             this.items[key].isActive = true
            //         }else {
            //             this.items[key].isActive = false
            //         }
            //     })
            // }
        }
    }
    
</script>

<style scoped lang="stylus" >
    @import '../styles/navigation.styl'
</style>