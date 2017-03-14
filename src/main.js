// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Landing from './components/Landing'
import Splash from './components/Splash'
import Welcome from './components/Welcome'
import About from './components/About'
import Issues from './components/Issues'
import Members from './components/Members'
import Accord from './components/Accord'
import Publications from './components/Publications'

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Landing },
  { path: '/welcome', component: Welcome },
  { path: '/about', component: About },
  { path: '/issues', component: Issues },
  { path: '/members', component: Members },
  { path: '/accord', component: Accord },
  { path: '/publications', component: Publications },
  { path: '/splash', component: Splash }
]

const router = new VueRouter({
  routes // short for routes: routes
})

Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
