import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: '_Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/donate',
    name: 'Donate',
    // route level code-splitting
    // this generates a separate chunk (donate.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "donate" */ '../views/Donate.vue')
  },
  {
    path: '/swap',
    name: 'Swap',
    component: () => import(/* webpackChunkName: "swap" */ '@/views/swap/Index.vue')
  },
  {
    path: '/liquidity',
    name: 'Liquidity',
    component: () => import(/* webpackChunkName: "liquidity" */ '@/views/liquidity/Index.vue')
  },
  {
    path: '/dashboard',
    component: () => import(/* webpackChankName: "dashboard" */ '@/views/dashboard/Index.vue'),
    children: [
      {
        path: '/dashboard/home',
        name: 'DashboardHome',
        component: () => import(/* webpackChankName: "dashboard/home" */ '@/views/dashboard/Home.vue')
      },
      {
        path: '/dashboard/contracts/home',
        name: 'DashboardContractsHome',
        component: () => import(/* webpackChankName: "dashboard/contracts/home" */ '@/views/dashboard/contracts/Index.vue')
      }
    ]
  },
  {
    path: '/sports',
    component: () => import(/* webpackChunkName: "sports" */ '@/views/sports/Index.vue'),
    children: [
      {
        path: '/sports/football-squares',
        component: () => import(/* webpackChunkName: "sports/football-squares" */ '@/views/sports/FootballSquares.vue'),
        name: 'SportsFootballSquares'
      }
    ]
  },
  {
    path: '/wallet',
    component: () => import(/* webpackChankName: "wallet" */ '@/views/wallet/Index.vue'),
    children: [
      {
        path: '/wallet/home',
        name: 'WalletHome',
        component: () => import(/* webpackChankName: "wallet/home" */ '@/views/wallet/Home.vue')
      },
      {
        path: '/wallet/tokens',
        name: 'WalletTokens',
        component: () => import(/* webpackChankName: "wallet/tokens" */ '@/views/wallet/Tokens.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
