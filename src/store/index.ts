import Vue from "vue";
import Vuex from "vuex";
import User from "../store/user";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "fghjk"
  },
  mutations: {},
  actions: {},
  modules: { User }
});
