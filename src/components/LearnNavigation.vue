<template>
    <div class="nav" @click="myClick($event)" >
    </div>
</template>

<script>
    export default {
        
        data () {
            return {
                item: 'Hello World'
            }
        },
        methods: {
            doReload (callback) {
                let _this = this
                _this.apis = 'APIS'
                callback()
            },
            myClick (e) {
                alert(e.target)
            }
        }
    }
</script>

<style lang="stylus" scoped >
   
   
.nav 
    width: 960px
    height: 35px
    background: #cccccc
    margin: 0 auto
    margin-top: 30px

</style>
