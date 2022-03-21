<template>
  <div
    class="dropdown-menu p-2"
    style="min-width:320px; right:0; left:auto"
    aria-labelledby="triggerId"
  >
    <div v-for="item in cart" :key="item._id">
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>{{ item.product.name }}</strong>
          <br />
           ${{ item.product.price }}
        </div>
        <div>
          <button
            href="#"
            class="badge badge-secondary"
            @click.prevent="removeProductFromCart(item._id)"
          >remove</button>
        </div>
      </div>
      <hr />
    </div>

    <div class="d-flex justify-content-between">
        <router-link to="/cart" style="color:white;font-size:12px;margin:0 0 10px 10px" class="btn btn-primary">Cart Details</router-link>
        <a style="color:white;font-size:12px;margin-bottom:10px" @click.prevent="clearCartItems()" class="btn btn-danger">Clear Cart</a>


    </div>
  </div>
</template>


<script>
import apiRequest from "../utility/apiRequest";
export default {
  computed: {
    // Example 1: mapState ( It will only work if module is namespaced )

    // Example 2: mapState
    // ...mapState({
    //   cart: state => state.cart.cart
    // }),

    // Example 1: mapGetters
    // ...mapGetters("product",["cartTotalPrice","cartList"])

    // Example 2: mapGetters
    cart(){
      return this.$store.state.products.cart;
    },
    cartTotalPrice(){
      return this.$store.getters.cartTotalPrice;
    }
  },
  created() {
    this.getCartItems();
    
  },

  methods: {
    async getCartItems(){
      const result = await apiRequest.getAll();
      this.$store.dispatch("getCartItems", result);
                
    },

    async removeProductFromCart(product){
      this.$store.dispatch("removeProductFromCart", product);
    },
      async clearCartItems(){
      const result = await apiRequest.deleteAll();
      this.$store.dispatch("clearCartItems", result);
    },




    // Example 1: mapActions

    // ...mapActions({
    //             getCartItems: 'getCartItems',
    //         }),

    // Example 2: mapActions
    // ...mapActions({
    //   removeProductFromCart: 'removeProductFromCart',
    //   clearCartItems: 'clearCartItems',
    //   : 'getCartItems',
    // })
  }
};
</script>
