<template>
  <v-container style="width:800px !important">
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title>Order Details</v-card-title>


          <v-divider></v-divider>

        <table id="customers">
                <tr>
                  <th>Product Photo</th>                   
                  <th>Product Name</th>                   
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
                                                
                <tr v-for="item in order.items" :key="item._id">
                  <td><img width="50px" height="50px" :src="require(`../assets/${item.product.photo}`)" alt=""></td>
                  <td style="text-align:start">{{item.product.name}} {{item.product.model}}</td>
                  <td>{{item.product.price}}</td>
                  <td>{{item.quantity}}</td>   
        
                </tr>
                <tr>
                  <td style="font-weight:bold; font-size:19px" colspan="4">Total Price : {{cartTotalPrice}}</td>
                </tr>
                  
              </table>
    
            <p style="display:flex; justify-content: space-between">
              <v-btn @click="removeOrder(order._id)" class="mt-3" color="warning">Back To Cart</v-btn>
              <v-btn @click="clearCartItems()"  class="mt-3" color="primary">Complete Order</v-btn> 
            </p>
          
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
</style>
<script>
import apiRequest from "../utility/apiRequest";
export default {
  created() {
    this.getOrder();
  },
  data() {
    return {
      order: null,
    };
  },
  methods: {
    async getOrder() {
      this.order = await apiRequest.getOrder(this.$route.params.id);
    },

    async removeOrder(id){
      
        
      await apiRequest.removeOrder(id);
      this.$router.push(`/cart`);
      
    },
    async clearCartItems(){
      this.$store.state.products.cart.forEach((item)=>{
        if(item.product.quantity!==0){
          item.product.button = false;
          apiRequest.editProduct(item._id, item.product);
        }
      })
      const result = await apiRequest.deleteAll();
      this.$store.dispatch("clearCartItems", result);
      this.$router.push(`/complete`);

    },
  },
  computed:{
    cartTotalPrice(){
      return  this.$store.getters.cartTotalPrice;
    }
  }
};
</script>

