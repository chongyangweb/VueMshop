
const Index = () => import ('@/views/index.vue') // 首页

// 店铺
const Shops = () => import ('@/views/Shop/shops.vue') // 店铺列表
const ShopIndex = () => import ('@/views/Shop/index.vue') // 店铺首页

// 商品
const Goods = () => import ('@/views/Goods/index.vue') // 商品

// 用户中心
const User = () => import ('@/views/User/index.vue') // 用户中心
const Register = () => import ('@/views/User/register.vue') // 注册
const Login = () => import ('@/views/User/login.vue') // 登录

// 订单
const Order = () => import ('@/views/Order/index.vue') // 订单



export default new VueRouter({
  mode:'history',
  routes: [
  
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

    // 订单
    {path: '/order',name: 'order',component: Order},
    
  ]
})
