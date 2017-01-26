
<template>
<div class="side-panel b">
  <ul>
    <li><a><span class="entypo-plus-circled"></span><span class="menu-item">Quick Add</span></a>
      <ul>
        <li><a class="entypo-doc-text-inv">Post</a></li>
        <li><a class="entypo-layout">Template</a></li>
        <li><a class="entypo-rocket">Rocket</a></li>
      </ul>
    </li>
    <li><a><span class="entypo-mail"></span><span class="menu-item">Messages</span></a></li>
      <li><a><span class="entypo-heart"></span><span class="menu-item">Favorites</span></a></li>
      <li><a><span class="entypo-doc-text-inv"></span><span class="menu-item">Posts</span></a></li>
      <li><a><span class="entypo-layout"></span><span class="menu-item">Templates</span></a></li>
      <li><a><span class="entypo-rocket"></span><span class="menu-item">Rocket</span></a></li>
      <li><a><span class="entypo-cog"></span><span class="menu-item">Settings</span></a></li>
  </ul>
</div>


</template>

<script>

export default {

}
  
</script>

<style lang="stylus" scoped >
@import './list.styl'
  
.b {
  li {
    [class*="entypo-"] {
      display: inline-block;
      position: relative;
      left: 105px;
      transform: translateX(0);
      transition: all .3s ease-in-out;
      transition-delay: .1s;
    }
  }
  .menu-item {
    display: inline-block;
    opacity: 0;
    transition: opacity .3s ease-in-out;
  }
  > ul {
    position: relative;
    left: -110px;
    transform: translate(0) translateZ(0);
    width: 150px;
    transition: transform .3s .1s ease-in-out;
    
    &:hover {
      transform: translateX(110px);
      transition: all .3s ease-in-out;
      
      li {
        [class*="entypo-"] {
          transform: translateX(-110px);
          transition-delay: 0;
        }
      }
      .menu-item {
        opacity: 1;
        transition: opacity .3s .2s ease-in-out;
      }
    }
  }
  > ul {
    ul {
      display: block;
      opacity: 0;
      transform: translate(-100%);
      transition: all .3s ease-in-out;
      z-index: -1;
    }
  }
  li:hover ul {
    opacity: 1;
    transform: translate(0);
  }
}

</style>