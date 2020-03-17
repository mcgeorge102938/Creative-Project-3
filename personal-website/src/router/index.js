import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Doggo from '../views/Doggo.vue'
import Resume from '../views/Resume.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/doggo',
    name: 'Doggo',
    component: Doggo
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
