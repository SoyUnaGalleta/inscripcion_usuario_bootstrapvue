import Vue from 'vue'
import VueRouter from 'vue-router'
import PrincipalView from '../views/PrincipalView.vue'
import NotFound from '../components/NotFoundComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'principal',
    component: PrincipalView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: "/:catchAll(.*)",
    name: 'notfound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
