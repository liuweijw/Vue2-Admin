import Vue from 'vue'
import VueRouter from 'vue-router'
import PageRouter from './page/index'
import ExampleRouter from './page/example'
import ViewsRouter from './views/index'
Vue.use(VueRouter)
export default new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      }
    }
  }
})
export const asyncRouterMap = [].concat(PageRouter, ExampleRouter, ViewsRouter)
