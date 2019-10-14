import Vue from 'vue'
import Vuex from 'vuex'

import Mproduct from './product'
import Mcart from './cart'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
    isdisabled: false,
    message: []
  },
  // 接收外部呼叫vuex方法
  actions: {
    updateLoading (context, payload) {
      context.commit('LOADING', payload)
    },
    IsDisabled (context, payload) {
      context.commit('ISDISABLE', payload)
    },
    updateMessage (context, { message, status }) {
      const timestamp = Math.floor(new Date() / 1000)
      context.commit('MESSAGE', { message, status, timestamp })
      context.dispatch('removeMessageWithTiming', timestamp)
    },
    removeMessage (context, num) {
      context.commit('REMOVE', num)
    },
    removeMessageWithTiming (context, timestamp) {
      setTimeout(() => {
        context.commit('TIMEREMOVE', timestamp)
      }, 5000)
    },
    view (context, id) {
      router.push({
        path: '/newmsg/article',
        query: {
          id
        }
      })
    }
  },
  // 接收actions資料並賦值state，或做計算
  mutations: {
    LOADING (state, payload) {
      state.isLoading = payload
    },
    ISDISABLE (state, payload) {
      state.isdisabled = payload
    },
    MESSAGE (state, { message, status, timestamp }) {
      state.message.push({
        message,
        status,
        timestamp
      })
    },
    TIMEREMOVE (state, timestamp) {
      state.message.forEach((item, i) => {
        if (item.timestamp === timestamp) {
          state.message.splice(i, 1)
        }
      })
    },
    REMOVE (state, num) {
      state.message.splice(num, 1)
    }
  },
  // 回傳state資料給呼叫的原件computed
  getters: {
    messages (state) {
      return state.message
    },
    loading (state) {
      return state.isLoading
    }
  },
  // import模組
  modules: {
    Mproduct,
    Mcart
  }
})
