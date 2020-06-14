// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入vue.js插件
import VueRouter from 'vue-router'
// 组件
import Main from './components/Main.vue'
import Login from './components/Login.vue'

import axios from 'axios'
Vue.prototype.$axios = axios;

Vue.config.productionTip = false
const routes = [
  { name: 'main', path: '/', component: Main },
  { name: 'login', path: '/login', component: Login }
]
var router = new VueRouter({
  routes
})
Vue.use(VueRouter)
var App = {
  template: '<router-view></router-view>'
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
