import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '@/components/home/Home')
  },
  {
    path: '/story',
    name: 'Story',
    component: () => import( '@/components/story/Story')
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import( '@/components/info/Info')
  },
]

const router = new VueRouter({
  routes,
  linkActiveClass: "header__nav-link--active",
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return {
        savedPosition,
        selector: to.hash
      }
    } else {
      const position = {}

      if (to.hash) {

        if (to.hash === '#news') {

          return {
            selector: to.hash,
            offset: {x: 0, y: 50}
          }
        }

        if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
          return {
            position,
            selector: to.hash
          }
        }

        return false
      }

      return {x: 0, y: 0}
    }
  }
})

export default router
