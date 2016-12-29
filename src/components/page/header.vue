<template>
<div class="header" >
    <div class="container">
    <div><a href="#" class="logo"></a></div>
    <ul class="nav">
        <li><a href="">首页</a></li>
        <li><a href="">培训课程</a></li>
        <li><a href="">优秀成员</a></li>
        <li><a href="">课程疑问</a></li>
        <li><a href="">职业生涯</a></li>
        <li><a href="">学员社区</a></li>
        <li><a href="">官方博客</a></li>
        <li><a href="">学院地址</a></li>
    </ul>
    </div>
</div>

</template>

<script>

export default {
    
}
</script>

<style scoped lang="stylus" >

.header 
    overflow: hidden
    padding-top: 45px

.container
    position: relative
    width: 1000px
    margin: 0 auto
    
.logo
    float: left
    background: url("../../assets/page/logo.png")
    width: 220px
    height: 54px
    
.nav 
    float: left
    height: 54px
    width: 780px
    background-color: #393838
    
li 
    float: left
    
    a 
        font-size: 12px
        width: 86px
        height: 54px
        line-height: 54px
        text-align: center
        color: #ccc
        text-decoration: none
        float: left
        
        &:hover 
            color: #fff
            
    &.active 
        background-color: #585656
        a 
            color: #fff

    
    
</style>
