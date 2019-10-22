import axios from 'axios'
export default {
  namespaced: true,
  state: {
    data: {
      carts: []
    },
    timeSender: null,
    loading: '',
    isdisable: '',
    hide: true
  },
  // 接收外部呼叫vuex方法
  actions: {
    getCart (context) {
      context.commit('HIDE', true)
      context.commit('LOADING', true, { root: true })
      return new Promise((resolve, reject) => {
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
        axios.get(api).then((response) => {
          if (response.data.success) {
            if (response.data.data.carts.length === 0) {
              context.commit('HIDE', false)
            }
            context.commit('GETCART', response.data.data)
            context.commit('LOADING', false, { root: true })
            resolve()
          } else {
            reject(new Error('error!'))
          }
        })
      })
    },
    removeCart (context, id) {
      context.commit('LOADING', true, { root: true })
      context.commit('DISABLE', id)
      return new Promise((resolve) => {
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
        axios.delete(api).then((response) => {
          if (response.data.success) {
            let message = response.data.message + `商品`
            context.dispatch('updateMessage', { message, status: 'danger' }, { root: true })
            context.commit('DISABLE', id)
            context.commit('LOADING', false, { root: true })
            resolve()
          }
        })
      })
    },
    addtocart (context, { id, qty }) {
      context.commit('LOADINGITEM', id)
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      let data = {
        data: {
          product_id: id,
          qty
        }
      }
      axios.post(api, data).then((response) => {
        if (response.data.success) {
          let message = response.data.message
          context.dispatch('updateMessage', { message, status: 'success' }, { root: true })
        } else {
          let message = response.data.message
          context.dispatch('updateMessage', { message, status: 'danger' }, { root: true })
        }
        context.dispatch('getCart')
        context.commit('LOADINGITEM', '')
      })
    }
  },
  // 接收actions資料並賦值state，或做計算
  mutations: {
    GETCART (state, payload) {
      payload.carts = payload.carts.reverse()
      state.data = payload
    },
    LOADINGITEM (state, payload) {
      state.loading = payload
    },
    DISABLE (state, payload) {
      state.isdisable = payload
    },
    HIDE (state, payload) {
      state.hide = payload
    }
  },
  // 回傳state資料給呼叫的原件computed
  getters: {
    data (state) {
      return state.data
    },
    loading (state) {
      return state.loading
    },
    isdisabled (state) {
      return state.isdisable
    }
  }
}
