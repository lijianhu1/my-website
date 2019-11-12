import Vue from 'vue';
import Vuex from 'vuex';
import ajax from '@/service/ajax';
import tool from '@/util/tool.js';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      resume_base: {},
      resume_skill: [],
      resume_work: [],
    }
  },
  mutations: {
    setUserInfo(state, data) {
      state.userInfo.resume_base = state.userInfo.resume_base || {};
      state.userInfo = Object.assign(state.userInfo, data);
      // tool.LocalStorage.set('userInfo', data);
    },
  },
  actions: {
    getUserInfo({ commit }) {
      ajax.getUserinfo((res: any) => {
        if (res.code === 0) {
          commit('setUserInfo', res.data);
        }
      });
    }
  },
  modules: {
  },
});
