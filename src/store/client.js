import Url from "../apiUrl/index";
import Api from "../ajaxHandler/index";

export default {
  namespaced: true,
  state: {},
  actions: {
    // 套用優惠卷
    async useCoupon({ commit }, params) {
      let res = await Api.post(Url.useCoupon, params);
      return res.data;
    },
    // 取得單筆訂單
    async getSingleOrder({ commit }, params) {
      let res = await Api.get(Url.getSingleOrder + `/${params}`);
      return res.data;
    },
    // 結帳
    async createOrder({ commit }, params) {
      let res = await Api.post(Url.createOrder, params);
      return res.data;
    },
    // 取得單一商品
    async getSingleProduct({ commit }, params) {
      let res = await Api.get(Url.getSingleProduct, params);
      return res.data;
    },
    // 取得訂單列表
    async getOrderList({ commit }, params) {
      let res = await Api.get(Url.getOrderListNokey + `${params}`);
      return res.data;
    }
  },
  // 接收actions資料並賦值state，或做計算
  mutations: {}
};
