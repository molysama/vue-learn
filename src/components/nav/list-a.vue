
<template>
<div class="side-panel a">
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
  
</script>
<style lang="stylus"  scoped >
@import './list.styl'

.a {
  > ul {
    width: 150px;
    transform: translateX(-110px);
  }
  span[class*="entypo-"] {
    display: inline-block;
    position: relative;
    left: 105px;
  }
  .menu-item {
    color = #483430;
    position: absolute;
    top: 50%;
    left: 100%;
    display: block;
    padding: 8px 13px;
    color: #efefef;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 1px;
    white-space: nowrap;
    transform: translate(-100%, -50%) translateZ(0);
    background: color;
    border-radius: 3px;
    border-right-color: color;
    transition: all .3s ease-in-out;
    z-index: -2;
    
    &:before {
      size = 5px;
      color = #efefef;
      position: absolute;
      content: "";
      width: 0;
      height: 0;
      top: 50%;
      right: 100%;
      margin-top: size * -1;
      border-top: size solid transparent;
      border-bottom: size solid transparent; 
      border-right:size solid color;
      border-right-color: inherit;
    }
  }
  li:hover .menu-item {
    transform: translate(10px, -50%);
  }
  > ul {
    ul {
      display: block;
      opacity: 0;
      transform: translate(-100%);
      transition: all .3s ease-in-out;
      z-index: -1;
    }
    > li:first-child:hover .menu-item {
      transform: translate(-100%, -50%);
    }
  }
  li:hover ul {
    opacity: 1;
    transform: translate(0);
  }
}
</style>