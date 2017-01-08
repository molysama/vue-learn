# vue-learn

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 模板注册
 ```components/xxx/index.vue ``` 默认为路由模板，需在```src/config/router_path.toml```内配置, 其他组件全局注册
 ```
 
# 使用组件时首字母大写, 目录名-文件名，如：
 <Page-header> 
 <Limi-content> 
 <Hello>
 ```
