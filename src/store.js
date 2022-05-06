import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      total:null,
      count:100
  },
  getters: {
      getTotal: state => state.total
  },
  mutations: {
    increment(state, str) { // 第一引数にstateをとり、実際の変更を記述する
        state.total = str * state.count;
    }
  },
});