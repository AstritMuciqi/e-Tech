import Vue from "vue";
import Vuex from "vuex";
import products from "./modules/product";
import categories from "./modules/category";
import store from './modules/store';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    categories,
    store
  },
});
