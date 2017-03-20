// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import CCOG from './CCOG'
import Welcome from './components/Welcome'
import Bienvenue from './components/Bienvenue'
import About from './components/About'
import Issues from './components/Issues'
import Members from './components/Members'
import Accord from './components/Accord'
import Publications from './components/Publications'

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Welcome },
  { path: '/welcome', component: Welcome },
  { path: '/bienvenue', component: Bienvenue },
  { path: '/about', component: About },
  { path: '/issues', component: Issues },
  { path: '/members', component: Members },
  { path: '/accord', component: Accord },
  { path: '/publications', component: Publications }
]

const router = new VueRouter({
  routes // short for routes: routes
})

Vue.use(VueRouter)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#ccog',
  router,
  template: '<CCOG/>',
  components: { CCOG }
})
