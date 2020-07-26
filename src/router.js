import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: "*",
      redirect: "/index"
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("./components/admin/Dashboard"),
      meta: { requiresAuth: true },
      children: [
        {
          path: "products",
          name: "products",
          component: () => import("./components/admin/Products/Products"),
          meta: { requiresAuth: true }
        },
        {
          path: "orderlist",
          name: "orderlist",
          component: () => import("./components/admin/Orderlist"),
          meta: { requiresAuth: true }
        },
        {
          path: "coupons",
          name: "coupons",
          component: () => import("./components/admin/Coupons/Coupons"),
          meta: { requiresAuth: true }
        },
        {
          path: "question",
          name: "question",
          component: () => import("./components/admin/Question"),
          meta: { requiresAuth: true }
        },
        {
          path: "salescanvas",
          name: "salescanvas",
          component: () => import("./components/admin/Salescanvas"),
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./components/Login")
    },
    {
      path: "/index",
      name: "index",
      component: () => import("./components/Indexmode"),
      children: [
        {
          path: "/",
          component: () => import("./components/custom/Index")
        },
        {
          path: "/getcoupon",
          name: "getcoupon",
          component: () => import("./components/custom/Getcoupon")
        },
        {
          path: "/products",
          name: "products",
          component: () => import("./components/custom/Products")
        },
        {
          // name: 'moreproduct',
          // path: '/moreproduct/:id',
          path: "/moreproduct",
          name: "moreproduct",
          component: () => import("./components/custom/Moreproduct")
        },
        {
          path: "/cart",
          name: "cart",
          component: () => import("./components/custom/Cart")
        },
        {
          path: "/newmsg",
          name: "newmsg",
          component: () => import("./components/custom/Newmodel"),
          children: [
            {
              path: "/",
              component: () => import("./components/custom/Newmsg")
            },
            {
              path: "article",
              name: "article",
              component: () => import("./components/custom/Article")
            },
            {
              path: "service",
              name: "service",
              component: () => import("./components/custom/Service")
            }
          ]
        }
      ]
    },
    {
      path: "/checkout/:id",
      name: "admin",
      component: () => import("./components/custom/Checkout"),
      children: [
        {
          name: "Paytype",
          path: "paytype",
          component: () => import("./components/custom/Paytype")
        },
        {
          path: "payinformation",
          name: "payinformation",
          component: () => import("./components/custom/Payinformation")
        },
        {
          path: "paysuccess",
          name: "paysuccess",
          component: () => import("./components/custom/Paysuccess")
        }
      ]
    }
  ]
});
