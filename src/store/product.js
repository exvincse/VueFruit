import Url from "../apiUrl/index";
import Api from "../ajaxHandler/index";

export default {
  namespaced: true,
  state: {
    product: []
  },
  // 接收外部呼叫vuex方法
  actions: {
    async getProducts({ commit }, params) {
      let res = await Api.get(Url.getAllProductNoKet);
      if (res.data.success) {
        commit("setProductData", res.data.products);
      }
    }
  },
  // 接收actions資料並賦值state，或做計算
  mutations: {
    setProductData(state, payload) {
      state.product = payload;
    }
  }
};
