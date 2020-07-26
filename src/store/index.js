import Vue from "vue";
import Vuex from "vuex";
import productModules from "./product";
import cartModules from "./cart";
import dashboardModules from "./dashboard";
import clientModules from "./client";
import router from "../router";
Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
    message: []
  },
  // 接收外部呼叫vuex方法
  actions: {
    updateLoading({ commit }, params) {
      commit("setUpdateLoading", params);
    },
    updateMessage({ commit, dispatch }, params) {
      const timestamp = Math.floor(new Date() / 1000);
      let _params = {
        message: params.message,
        status: params.status,
        timestamp
      };
      commit("setMessage", _params);
      dispatch("removeMessageWithTiming", timestamp);
    },
    removeMessage({ commit }, params) {
      commit("setRemoveMessage", params);
    },
    removeMessageWithTiming({ commit }, params) {
      setTimeout(() => {
        commit("setRemoveTimer", params);
      }, 5000);
    },
    view({ commit }, params) {
      router.push({
        path: "/newmsg/article",
        query: {
          params
        }
      });
    }
  },
  // 接收actions資料並賦值state，或做計算
  mutations: {
    setUpdateLoading(state, payload) {
      state.isLoading = payload;
    },
    setMessage(state, payload) {
      state.message.push({
        message: payload.message,
        status: payload.status,
        timestamp: payload.timestamp
      });
    },
    setRemoveTimer(state, timestamp) {
      state.message.forEach((item, i) => {
        if (item.timestamp === timestamp) {
          state.message.splice(i, 1);
        }
      });
    },
    setRemoveMessage(state, num) {
      state.message.splice(num, 1);
    }
  },
  // import模組
  modules: {
    productModules,
    cartModules,
    dashboardModules,
    clientModules
  }
});
