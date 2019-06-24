import Vue from 'vue'
import Router from 'vue-router'


import Index from '@/views/index.vue' // 首页

// 店铺
import Shops from '@/views/Shop/shops.vue' // 店铺列表
import ShopIndex from '@/views/Shop/index.vue' // 店铺首页

// 商品
import Goods from '@/views/Goods/index.vue' // 商品

// 用户中心
import User from '@/views/User/index.vue' // 用户中心
import Register from '@/views/User/register.vue' // 注册
import Login from '@/views/User/login.vue' // 登录



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

    // 商品
    {path: '/goods/:id',name: 'goods_index',component: Goods},// 商品详情

    // 用户中心
    {path: '/user',name: 'user_index',component: User},
    {path: '/user/register',name: 'user_register',component: Register},
    {path: '/user/login',name: 'user_login',component: Login},
    
  ]
})
