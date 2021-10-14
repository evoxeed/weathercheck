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
  mode: 'history',
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return {
  //       savedPosition,
  //       selector: to.hash
  //     }
  //   } else {
  //     const position = {}
  //
  //     if (to.hash) {
  //
  //       if (to.hash === '#news') {
  //
  //         return {
  //           selector: to.hash,
  //           offset: {x: 0, y: 50}
  //         }
  //       }
  //
  //       if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
  //         return {
  //           position,
  //           selector: to.hash
  //         }
  //       }
  //
  //       return false
  //     }
  //
  //     return {x: 0, y: 0}
  //   }
  // }
})

export default router
