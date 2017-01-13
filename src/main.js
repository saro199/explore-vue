// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Login from './components/login/Login.vue'
import MainFrame from './components/main/MainFrame.vue'
import store from './store'
// import TopFrame2 from './components/main/TopFrame2.vue'
// import TopFrame3 from './components/main/TopFrame3.vue'
import Profile from './components/Profile.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  { path: '/mainframe', component: MainFrame },
  { path: '/profile', component: Profile }
]

const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
