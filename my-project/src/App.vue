<template>
  <div id="app">
    <img src="./assets/logo.png" height="200" width="200" alt="">
    <h1>Hello App!</h1>
    <!-- 第三步，使用 -->
    <firstcomponent></firstcomponent>
    <secondcomponent></secondcomponent>
    <ul>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <li><router-link to="/first">跳转到第一个页</router-link></li>
      <li><router-link to="/second">跳转到第二个页</router-link></li>
    </ul>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
// 第一步，引入组件
import firstcomponent from './components/firstcomponent.vue'
import secondcomponent from './components/secondcomponent.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  // 第二步，注册
  components: { firstcomponent, secondcomponent }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .router-link-active {
    color: red;
  }
</style>
