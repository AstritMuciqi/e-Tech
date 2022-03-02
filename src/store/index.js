import Vue from "vue";
import Vuex from "vuex";
import products from "./modules/product";
import categories from "./modules/category";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    categories,
  },
});
