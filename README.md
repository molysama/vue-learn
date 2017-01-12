# vue-learn

> A Vue.js project

```

src/
├── App.vue ----------------------- 入口组件 
├── assets  ----------------------- 静态资源
│   ├── limi
│   ├── logo.png
│   ├── navigate.png
│   └── test.js
├── components -------------------- vue组件，全局注册为目录-文件名的形式，如：Page-header
│   ├── flex
│   ├── Hello.vue
│   ├── limi
│   ├── Navigation.vue
│   └── page
├── config ------------------------ 配置目录
│   ├── load_components.js -------- 全局注册components文件夹内的所有组件
│   ├── mockTest.js --------------- 配置mockjs，拦截http请求，后台测试数据的来源
│   ├── router.js ----------------- 动态加载路由
│   └── router_path.toml ---------- 路由配置文件
├── main.js
├── router ------------------------ 路由模板
│   ├── flex.vue
│   ├── girl.vue
│   ├── limi.vue
│   ├── page.vue
│   └── third.vue
├── styles ------------------------ 样式
    ├── common.css
    └── navigation.styl

```

## 练习用，目前引入的技术
> vue、vue-router、element-ui、stylus、pug、axios、mockjs