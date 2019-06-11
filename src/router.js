import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
      path: '/Posts_Resource',
      name: 'Posts_Resource',
      component: () => import(/* webpackChunkName: "Post_Resource" */ './views/Posts_Resource.vue')
    },
    {
      path: '/',
      name: 'Users_Resource',
      component: () => import(/* webpackChunkName: "Users_Resource" */ './views/Users_Resource.vue')
    },
    {
      path: '/Posts_Table',
      name: 'Posts_Table',
      component: () => import(/* webpackChunkName: "Photos_Resource" */ './views/Posts_Table.vue')
    },
    {
      path: '/Comment/:id',
      name: 'Comment',
      component: () => import(/* webpackChunkName: "Photos_Resource" */ './views/Comment.vue')
    },
  ]
})
