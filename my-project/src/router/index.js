import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Login from 'view/auth/Login'

Vue.use(Router)
Vue.use(Login)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
