import axios from 'axios'

export default {
  namespaced: true,
  state: {
    product: []
  },
  // 接收外部呼叫vuex方法
  actions: {
    getProducts (context) {
      context.commit('LOADING', true, { root: true })
      return new Promise((resolve) => {
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
        axios.get(api).then((response) => {
          if (response.data.success) {
            let filter = Object.values(response.data.products).map((item) => {
              return item
            })
            context.commit('PRODUCT', filter)
            context.commit('LOADING', false, { root: true })
            resolve()
          }
        })
      })
    }
  },
  // 接收actions資料並賦值state，或做計算
  mutations: {
    PRODUCT (state, payload) {
      state.product = payload
    }
  }
}
