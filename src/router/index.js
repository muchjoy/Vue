import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/tabbar/home/Home')
const Category = () => import('../views/tabbar/category/Category')
const Shopcart = () => import('../views/tabbar/shopcart/Shopcart')
const Profile = () => import('../views/tabbar/profile/Profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
