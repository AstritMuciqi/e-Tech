<template>
  <v-main>
    <h1 style="padding:10px">Orders</h1>
    <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.$route.params.message">
      {{this.$route.params.message}}
    </v-alert>
    <v-data-table
    style="width:1144px !important;margin-left:60px !important;"
    :headers="headers"
    :items="orderList"
    :items-per-page="5"
    class="elevation-1"
  >
          <template v-slot:[`item.items`]="{ item }">
            <v-list-item v-for="items in item.items" :key="items" >
                   <img width="50px" height="50px" :src="require(`../../assets/${items.product.photo}`)" alt=""> {{items.product.name}} - {{items.quantity}}x{{items.product.price}}€
            </v-list-item>
            
          </template>
           
          <template v-slot:[`item.actions`]="{ item }">
            <div style="white-space: nowrap;">
              <button @click="deleteOrder(item._id)" class="btn btn-outline-danger">Delete</button>
            </div>
            
          </template>
          
          </v-data-table>
  </v-main>
</template>

<style>
 .v-data-table-header{
   background-color: aqua;
      white-space: nowrap;

 }
 .v-data-table-header tr th span{
   color: rgb(0, 0, 0);
   font-size: 14px;
   white-space: nowrap;
  
}

</style>

<script>
import apiRequest from "../../utility/apiRequest";
import { mapGetters } from "vuex";
  export default {
    created() {
      this.fetchOrders();
    },

    methods: {
      async fetchOrders() {
        this.$isLoading(true);
        const result = await apiRequest.getOrdersList();
        this.$store.dispatch("fetchOrders", result).finally(()=>{
              this.$isLoading(false)
      });
      },

      async deleteOrder(id){
        this.$isLoading(true)
        const response = await apiRequest.removeOrder(id)
        .finally(()=>{
              this.$isLoading(false)
        });
        window.location.reload();
        this.$router.push({ name : "Orders",params : { message: response.message}});
        alert("Order Deleted Successfully");
      }
    },
    computed: {
      ...mapGetters({
        orderList: "orderList",
      }),
    },
    data () {
      return {
        count:0,
        headers: [
          // {
          //   text: 'Image',
          //   align: 'start',
          //   sortable: false,
          //   value: 'photo',
          // },
          { text: 'Full Name', value: 'username' },
          { text: 'Items', value: 'items' },
          { text: 'Price', value: 'value' },
          { text: 'City', value: 'city' },
          { text: 'Address', value: 'address' },
          { text: 'Payment', value: 'payment'},
          { text: 'Actions', value: 'actions'},



        ],
      }
    },
  }
</script>
