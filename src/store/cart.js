import Url from "../apiUrl/index";
import Api from "../ajaxHandler/index";
export default {
  namespaced: true,
  state: {
    data: {
      carts: []
    },
    timeSender: null,
    loading: "",
    isDisable: "",
    emptyCartDataTime: true
  },
  // 接收外部呼叫vuex方法
  actions: {
    async getCart({ commit }, params) {
      commit("setEmptyCartDataTime", true);
      let res = await Api.get(Url.getCartList);
      if (!res.data.success) {
        commit("setEmptyCartDataTime", false);
      }
      commit("setCartData", res.data.data);
    },
    async removeCart({ commit, dispatch }, params) {
      commit("setCartDisable", params);
      let res = await Api.delete(Url.deleteCart + `/${params}`);
      if (res.data.success) {
        let message = res.data.message + `商品`;
        dispatch(
          "updateMessage",
          { message, status: "danger" },
          { root: true }
        );
        commit("setCartDisable", params);
      }
    },
    async addCart({ commit, dispatch }, params) {
      commit("setItemLoading", params.id);
      let _params = {
        data: {
          product_id: params.id,
          qty: params.qty
        }
      };
      let res = await Api.post(Url.addCart, _params);
      if (res.data.success) {
        let message = res.data.message;
        dispatch(
          "updateMessage",
          { message, status: "success" },
          { root: true }
        );
      } else {
        let message = res.data.message;
        dispatch(
          "updateMessage",
          { message, status: "danger" },
          { root: true }
        );
      }
      dispatch("getCart");
      commit("setItemLoading", "");
    },
    setEmptyCartDataTime({ commit, dispatch }, param) {
      commit("setEmptyCartDataTime", param);
    }
  },
  // 接收actions資料並賦值state，或做計算
  mutations: {
    setCartData(state, payload) {
      payload.carts = payload.carts.reverse();
      state.data = payload;
    },
    setItemLoading(state, payload) {
      state.loading = payload;
    },
    setCartDisable(state, payload) {
      state.isDisable = payload;
    },
    setEmptyCartDataTime(state, payload) {
      state.emptyCartDataTime = payload;
    }
  }
};
