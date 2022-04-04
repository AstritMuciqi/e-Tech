import Vue from "vue";
import Vuex from "vuex";
import products from "./modules/product";
import categories from "./modules/category";
import brands from "./modules/brand";
import user from './modules/user';
import order from "./modules/order";
import contact from "./modules/contact";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    categories,
    user,
    brands,
    order,
    contact
    
  },
});