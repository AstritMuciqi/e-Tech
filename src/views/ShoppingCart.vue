<template>
  <v-main>
    <div v-if="cart.length === 0">
      <p style="text-align:center;font-size:20px;color:gray; padding:100px">Cart Is Empty! <br> <br> <router-link  class="btn btn-outline-info"  to="/">Go To Products</router-link>
</p>
    </div>
    <div v-else>
      <v-btn style="margin: 10px 910px 10px 0;padding:20px ;font-size:20px; background-color:black;color:white;text-decoration:none;"  to="/cart">Shopping Cart</v-btn>
    <v-data-table
    style="width:1144px !important;margin-left:60px !important;"
    :headers="headers"
    :items="cart"
    :items-per-page="5"
    class="elevation-1"
  ><template v-slot:[`item.photo`]="{ item }">
            <div class="p-2">
              <img v-bind:src="require(`../assets/${item.product.photo}`)" height="100px">
            </div>
          </template>
          <template v-slot:[`item.quantity`]="{ item }">
            <v-btn style="min-width:5px !important; font-size:20px; font-weight:bold;" @click="decrase(item)">-</v-btn><input style="width:15%; margin-left:20px"  type="number" :value="item.quantity" min="1" :max="item.product.quantity"> <v-btn style="min-width:5px !important; font-size:20px; font-weight:bold;" @click="incrase(item)">+</v-btn>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <div style="white-space: nowrap;">
              <button  href="#"
            class="btn btn-danger"
            @click.prevent="removeProductFromCart(item)" >Delete</button>
            </div>
            
          </template>
          
          </v-data-table>
          <p style="display:flex; justify-content:space-between">
              <router-link style="margin: 10px 0 10px 60px; font-size:18px; background-color:blue;color:white;text-decoration:none; width:19%;padding:8px;"  to="/"><v-icon style="margin-left:5px" color="white" large>mdi-arrow-left-drop-circle</v-icon>Continue Shopping</router-link>
              <router-link to="/login"><button v-if="!user.loggedIn" style="margin: 10px 60px 10px 0;font-size:22px " class="btn btn-outline-primary" type="submit">Login to checkout</button></router-link>
              <v-btn v-if="user.loggedIn" style="margin: 10px 60px 10px 0; font-size:20px; background-color:green;color:white;text-decoration:none;padding:25px;"  to="/checkout">Checkout(Total: ${{ cartTotalPrice }}) <v-icon style="margin-left:5px" color="white" large>mdi-arrow-right-drop-circle</v-icon></v-btn>
          </p>
          

    </div>
    
  </v-main>
</template>

<style>
 .v-data-table-header{
   background-color: rgb(212, 207, 207);
      white-space: nowrap;

 }
 .v-data-table-header tr th span{
   color: rgb(0, 0, 0);
   font-size: 16px;
   white-space: nowrap;
  
}

</style>

<script>
import apiRequest from "../utility/apiRequest";
import axios from 'axios';
import { mapGetters } from 'vuex';
  export default {
    
    data () {
      return {
        headers: [
          {
            text: 'Image',
            align: 'start',
            sortable: false,
            value: 'photo',
          },
          { text: 'Product Name', value: 'product.name' },
          { text: 'Model', value: 'product.model' },
          { text: 'Quantity', value: 'quantity' },
          { text: 'Price', value: 'product.price' },
          { text: 'Actions', value: 'actions'},


        ],
      }
    },
    computed: {
    // Example 1: mapState ( It will only work if module is namespaced )

    // Example 2: mapState
    // ...mapState({
    //   cart: state => state.cart.cart
    // }),

    // Example 1: mapGetters
    // ...mapGetters("product",["cartTotalPrice","cartList"])

    // Example 2: mapGetters
    ...mapGetters({
      user: 'user',
    }),

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
      cart.quantity = cart.quantity+cart.product.quantity;
      cart.button = false;
      axios.put(`http://localhost:5000/api/v1/products/${cart._id}`, cart);
      this.$store.dispatch("removeProductFromCart", cart._id);
    },
      async clearCartItems(){
      const result = await apiRequest.deleteAll();
      this.$store.dispatch("clearCartItems", result);
    },

    decrase(cart) {
      if(cart.quantity < 2){
        alert("Quantity values can't be negative");
      }else{
          cart.quantity--;
          
          cart.product.quantity++;
          axios.put(`http://localhost:5000/api/v1/cart/${cart._id}`, cart);
      }


      
    },
    incrase(cart){
      if(cart.product.quantity===0){
        alert("You achive the maximum stock availiable");
      }else{
      cart.quantity++;
      
      cart.product.quantity--;
      axios.put(`http://localhost:5000/api/v1/cart/${cart._id}`, cart);
      }

    }




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
}
</script>
