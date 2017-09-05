import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/Hello'

import Login from 'view/auth/Login'

Vue.use(VueRouter)
Vue.use(Login)

export default new VueRouter({
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
