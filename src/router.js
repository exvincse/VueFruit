import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/index'
    },
    {
      path: '/admin',
      component: () => import('./components/admin/Dashboard'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'products',
          component: () => import('./components/admin/Products/Products'),
          meta: { requiresAuth: true }
        },
        {
          path: 'orderlist',
          component: () => import('./components/admin/Orderlist'),
          meta: { requiresAuth: true }
        },
        {
          path: 'coupons',
          component: () => import('./components/admin/Coupons/Coupons'),
          meta: { requiresAuth: true }
        },
        {
          path: 'question',
          component: () => import('./components/admin/Question'),
          meta: { requiresAuth: true }
        },
        {
          path: 'salescanvas',
          component: () => import('./components/admin/Salescanvas'),
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/login',
      component: () => import('./components/Login')
    },
    {
      path: '/index',
      component: () => import('./components/Indexmode'),
      children: [
        {
          path: '/',
          component: () => import('./components/custom/Index')
        },
        {
          path: '/getcoupon',
          component: () => import('./components/custom/Getcoupon')
        },
        {
          path: '/products',
          component: () => import('./components/custom/Products')
        },
        {
          // name: 'moreproduct',
          // path: '/moreproduct/:id',
          path: '/moreproduct',
          component: () => import('./components/custom/Moreproduct')
        },
        {
          path: '/cart',
          component: () => import('./components/custom/Cart')
        },
        {
          path: '/newmsg',
          component: () => import('./components/custom/Newmodel'),
          children: [
            {
              path: '/',
              component: () => import('./components/custom/Newmsg')
            },
            {
              path: 'article',
              component: () => import('./components/custom/Article')
            },
            {
              path: 'service',
              component: () => import('./components/custom/Service')
            }
          ]
        }
      ]
    },
    {
      path: '/checkout/:id',
      component: () => import('./components/custom/Checkout'),
      children: [
        {
          name: 'Paytype',
          path: 'paytype',
          component: () => import('./components/custom/Paytype')
        },
        {
          path: 'payinformation',
          component: () => import('./components/custom/Payinformation')
        },
        {
          path: 'paysuccess',
          component: () => import('./components/custom/Paysuccess')
        }
      ]
    }
  ]
})
