import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/register',
    alias: '/register',
    name: 'register',
    component: () => import('../components/Register.vue')
  },
  {
    path: '/register2/:email/:password',
    alias: '/register2',
    name: 'register2',
    component: () => import('../components/Register2.vue')
  },
  {
    path: '/login',
    alias: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/list/:email',
    alias: '/list',
    name: 'list',
    component: () => import('../components/Company/List.vue')
  },
  {
    path: '/add/:email',
    alias: '/add',
    name: 'add',
    component: () => import('../components/Company/Add.vue')
  },
  {
    path: '/edit/:id/:cn',
    alias: '/edit',
    name: 'edit',
    component: () => import('../components/Company/Edit.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
