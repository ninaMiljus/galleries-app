import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import { globalAuthGuard } from '../guards/authGuard'
import Galleries from '../components/Galleries'
import Gallery from '../components/Gallery'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/galleries'
  },
  {
    path: '/galleries',
    name: 'galleries',
    component: Galleries,
    meta: { guestRequired: true },
  },
  {
    path: '/galleries/{$id}',
    name: 'gallery',
    component: Gallery,
    meta: { guestRequired: true },
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { guestRequired: true },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { guestRequired: true },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(globalAuthGuard);
export default router
