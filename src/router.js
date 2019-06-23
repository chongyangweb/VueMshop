import Vue from 'vue'
import Router from 'vue-router'


import Index from '@/views/index.vue' // 首页

// 店铺
import Shops from '@/views/Shop/shops.vue' // 店铺列表
import ShopIndex from '@/views/Shop/index.vue' // 店铺首页

// import List from './views/list.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    // {
    //   path: '/',
    //   redirect: 'login',
    //   hidden: true
    //   // component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },

    // 404 page must be placed at the end !!!
    // { path: '*', redirect: '/404', hidden: true },
    // {path: '/404',name: '404',component: Error404},
  
    // 登录
    {path: '/',name: 'index',component: Index},

    // 店铺
    {path: '/shop/list',name: 'shops',component: Shops},// 店铺列表
    {path: '/shop/:id',name: 'shop_index',component: ShopIndex},// 店铺列表

    
    
  ]
})
