import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  { path: '/', component: 'Home' },
  { path: '/about', component: 'About' },
  { path: '*', component: 'NotFound' }
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})
console.log(routes)

Vue.use(Router)

export default new Router({
  routes: routes
  // routes: [
  //   routes,
  //   {
  //     path: '/hello',
  //     // name: 'HelloWorld',
  //     component: HelloWorld
  //   }
  // ]
})
