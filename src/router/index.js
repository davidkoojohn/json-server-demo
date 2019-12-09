import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('../views/Todo')
  },
  {
    path: '/todo/create',
    name: 'todo-create',
    component: () => import('../views/TodoForm')
  },
  {
    path: '/todo/:id',
    name: 'todo-show',
    component: () => import('../views/TodoShow')
  },
  {
    path: '/todo/:id/edit',
    name: 'todo-edit',
    component: () => import('../views/TodoForm')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
