<template>
  <div
    class="dropdown-menu p-2"
    style="min-width:320px; right:0; left:auto"
    aria-labelledby="triggerId"
  >
    <div v-if="cart.length === 0">
      <p style="text-align:center;font-size:20px;color:gray">Cart Is Empty!</p>
    </div>
    <div v-else>
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
            @click.prevent="removeProductFromCart(item)"
          >remove</button>
        </div>
      </div>
      <hr />
      
    </div>
      <div class="d-flex justify-content-between">
        <router-link to="/cart" style="color:white;font-size:15px;margin:0 auto" class="btn btn-primary">Check Cart</router-link>
      </div>
    </div>
    

    
  </div>
</template>


<script type="text/javascript">
import apiRequest from "../utility/apiRequest";
import axios from 'axios';
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
    

    async removeProductFromCart(cart){
      let import_button = document.getElementById(`${cart._id}`);
      let import_span = document.getElementById(`${cart.product.name}`);
      cart.quantity = cart.quantity+cart.product.quantity;
      cart.button=false;
      axios.put(`http://localhost:5000/api/v1/products/${cart._id}`, cart)
      .then(() => import_button.disabled = false).then(() => import_span.textContent = `🛒 Add to Cart ( Price ${cart.product.price} Є  )`);
      this.$store.dispatch("removeProductFromCart", cart._id);

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
