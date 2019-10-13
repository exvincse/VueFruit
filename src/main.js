// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VeeValidate from 'vee-validate'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'
import 'swiper/dist/css/swiper.css'
import zhTW from 'vee-validate/dist/locale/zh_TW'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

import App from './App'
import router from './router'
import curr from './filters/filter'
import date from './filters/datefilter'
import store from './store'

Vue.use(VueAwesomeSwiper)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
Vue.use(VueAxios, axios)
Vue.use(VeeValidate, {
  events: 'input|blur'
})
VeeValidate.Validator.localize('zh_TW', zhTW)

Vue.config.productionTip = false
axios.defaults.withCredentials = true

Vue.filter('currency', curr)
Vue.filter('DateFilter', date)

const firebaseConfig = {
  apiKey: 'AIzaSyD1bVOxZhRqni7RPwFNmCT-oeXP4k2Neb0',
  authDomain: 'fruitfamily-a1dd6.firebaseapp.com',
  databaseURL: 'https://fruitfamily-a1dd6.firebaseio.com',
  projectId: 'fruitfamily-a1dd6',
  storageBucket: 'fruitfamily-a1dd6.appspot.com',
  messagingSenderId: '328440189780',
  appId: '1:328440189780:web:51f7cc348119f130'
}
firebase.initializeApp(firebaseConfig)
Vue.prototype.$firebase = firebase

new Vue({
  render: h => h(App),
  components: { App },
  template: '<App/>',
  router,
  store
}).$mount('#app')

router.afterEach(() => {
  window.scrollTo(0, 0)
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`
    axios.post(api).then((response) => {
      if (response.data.success) {
        next()
      } else {
        next({
          path: '/login'
        })
      }
    })
  } else {
    next()
  }
})
