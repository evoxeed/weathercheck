import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import( '@/components/home/Home')
  },
  {
    path: '/home/:id',
    name: 'cityItem',
    component: () => import( '@/components/home/city')
  },
  {
    path: '/story',
    name: 'story',
    component: () => import( '@/components/story/Story')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import( '@/components/info/Info')
  },
  {
    path: '/',
    redirect: '/home',
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: "header__nav-link--active",
  mode: 'history'
})

export default router
