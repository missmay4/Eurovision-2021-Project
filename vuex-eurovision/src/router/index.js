import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store'
import Home from '../views/Home.vue'
import Rotterdam from '../views/Rotterdam.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rotterdam',
    name: 'Rotterdam',
    component: Rotterdam
  },
  {
    path: '/singers',
    name: 'listParticipants',
    component: () => import(/* webpackChunkName: "listParticipants" */ '../views/listParticipants.vue'),
  },
  {
    path: '/firstSemifinal',
    name: 'listCountryVote',
    component: () => import(/* webpackChunkName: "listParticipants" */ '../views/listCountryVotes.vue')
  },
  {
    path: '/secondSemifinal',
    name: 'listCountrySemifinal',
    component: () => import(/* webpackChunkName: "listParticipants" */ '../views/listCountrySemifinal.vue')
  },
  {
    path: '/Final',
    name: 'listCountryFinal',
    component: () => import(/* webpackChunkName: "listParticipants" */ '../views/listCountryFinal.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
