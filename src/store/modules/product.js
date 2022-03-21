import apiRequest from "../../utility/apiRequest";

const state = () => ({

  list: [],
  product:null,
  cart: [],
});

const mutations = {

  ADD_TO_CART(state, {product, quantity, _id}){
    let productInCart = state.cart.find(item => {
       return item.product.name == product.name
    });

    if (productInCart){
      productInCart.quantity += quantity;
      return;
    }


    state.cart.push({
      product,
      quantity,
      _id
    })


  },
  SET_CART(state, cart){
    state.cart = cart;
  },
  REMOVE_PRODUCT_FROM_CART(state, _id){
    state.cart = state.cart.filter(item => {
      return item._id !== _id;
    });
  },
  CLEAR_CART_ITEMS(state){
    state.cart = [];
  },
  SET_LIST(state, list) {
    state.list = list;
  },
};

const actions = {

  fetchProducts({ commit }, list) {
    commit("SET_LIST", list);
  },
  addProductsToCart({ commit}, { product, quantity, _id }){
    commit('ADD_TO_CART', { product, quantity, _id });
    apiRequest.store({
      product: product,
      quantity,
      _id
    });
    
    },
    getCartItems({ commit }, cart){
          commit('SET_CART', cart);
    },

    removeProductFromCart ({ commit}, _id){
      commit('REMOVE_PRODUCT_FROM_CART', _id);
      apiRequest.deleteItem(_id);
    },

    clearCartItems ({ commit }){
      commit('CLEAR_CART_ITEMS');
    }

  
};

const getters = {

  productList(state) {
    return state.list;
  },
  cartTotalPrice(state){
    let total = 0;

    state.cart.forEach(item => {
        total += item.product.price * item.quantity;
    })

    return total;
  },
  cartItemCount(state){
    return state.cart.length;
  },
  cartList(state){
    return state.cart;
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
};
