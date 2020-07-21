import Url from "../apiUrl/index";
import Api from "../ajaxHandler/index";

export default {
  namespaced: true,
  state: {},
  actions: {
    // 登入
    async signIn({ commit }, params) {
      let res = await Api.post(Url.signIn, params);
      return res.data;
    },
    // 取得優惠券列表
    async getCouponList({ commit }, params) {
      let res = await Api.get(Url.getCouponList + `${params}`);
      return res.data;
    },
    // 新增優惠卷
    async addCoupon({ commit }, params) {
      let res = await Api.post(Url.addCoupon, params);
      return res.data;
    },
    // 修改優惠卷
    async modifyCoupon({ commit }, params) {
      let res = await Api.put(Url.addCoupon + `/${params.id}`, params);
      return res.data;
    },
    // 刪除優惠卷
    async deleteCoupon({ commit }, params) {
      let res = await Api.delete(Url.deleteCoupon + `/${params}`);
      return res.data;
    }
  },
  // 接收actions資料並賦值state，或做計算
  mutations: {}
};
