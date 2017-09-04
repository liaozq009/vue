// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

// font-awesome
import 'font-awesome/css/font-awesome.min.css'

// vuex
import store from './store/index.js'

// axios
import axios from 'axios'

// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  template: '<App/>',
  components: { App }
})
