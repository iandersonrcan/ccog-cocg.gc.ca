// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'

import Welcome from './components/en/Welcome'
import About from './components/en/About'
import Topics from './components/en/Topics'
import Members from './components/en/Members'
import Accord from './components/en/Accord'
import Publications from './components/en/Publications'

import Bienvenue from './components/fr/Bienvenue'
import Faisons from './components/fr/Faisons'
import Sujets from './components/fr/Sujets'
import Membres from './components/fr/Membres'
import AccordFR from './components/fr/Accord'
import PublicationsFR from './components/fr/Publications'

Vue.config.productionTip = false

const routes = [
  { path: '/', redirect: '/en/welcome' },
  { path: '/welcome', redirect: '/en/welcome' },
  { path: '/about', redirect: '/en/about' },
  { path: '/topics', redirect: '/en/topics' },
  { path: '/members', redirect: '/en/members' },
  { path: '/accord', redirect: '/en/accord' },
  { path: '/publications', redirect: '/en/publications' },

  { path: '/en/welcome', component: Welcome },
  { path: '/en/about', component: About },
  { path: '/en/topics', component: Topics },
  { path: '/en/members', component: Members },
  { path: '/en/accord', component: Accord },
  { path: '/en/publications', component: Publications },

  { path: '/fr/bienvenue', component: Bienvenue },
  { path: '/fr/faisons', component: Faisons },
  { path: '/fr/sujets', component: Sujets },
  { path: '/fr/membres', component: Membres },
  { path: '/fr/accord', component: AccordFR },
  { path: '/fr/publications', component: PublicationsFR }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes,
  scrollBehavior: function (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

Vue.use(VueRouter)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
