<template>
  <v-main>
    <v-btn style="margin: 10px 930px 10px 0; font-size:20px; background-color:green;color:white;text-decoration:none;"  to="addProduct">Add Product</v-btn>
    <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.$route.params.message">
      {{this.$route.params.message}}
    </v-alert>
    <v-data-table
    style="width:1144px !important;margin-left:60px !important;"
    :headers="headers"
    :items="productList"
    :items-per-page="5"
    class="elevation-1"
  ><template v-slot:[`item.photo`]="{ item }">
            <div class="p-2">
              <img v-bind:src="require(`../../assets/${item.photo}`)" height="100px" width="120px">
            </div>
          </template>
          <template v-slot:[`item.description`]="{ item }">
            <p style="overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 5; /* number of lines to show */
                        line-clamp: 2; 
                        -webkit-box-orient: vertical;">
                        {{item.description}}

            </p>
          </template>
           
          <template v-slot:[`item.actions`]="{ item }">
            <div style="white-space: nowrap;">
              <a v-bind:href="`editProduct/${item._id}`"><button class="btn btn-outline-warning">Edit</button></a> | 
              <button @click="deleteProduct(item._id)" class="btn btn-outline-danger">Delete</button>
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
      this.fetchProducts();
    },

    methods: {
      async fetchProducts() {
        this.$isLoading(true);
        const result = await apiRequest.getProductList();
        this.$store.dispatch("fetchProducts", result).finally(()=>{
              this.$isLoading(false)
      });
      },

      async deleteProduct(id){
        this.$isLoading(true)
        const response = await apiRequest.removeProduct(id)
        .finally(()=>{
              this.$isLoading(false)
        });
        window.location.reload();
        this.$router.push({ name : "Products",params : { message: response.message}});
        alert("Product Deleted Successfully");
      }
    },
    computed: {
      ...mapGetters({
        productList: "productList",
        categoryList: "categoryList",
      }),
    },
    data () {
      return {
        headers: [
          {
            text: 'Image',
            align: 'start',
            sortable: false,
            value: 'photo',
          },
          { text: 'Name', value: 'name' },
          { text: 'Model', value: 'model' },
          { text: 'Description', value: 'description' },
          { text: 'Price', value: 'price' },
          { text: 'Qty', value: 'quantity' },
          { text: 'Category', value: 'category' },
          { text: 'Brand', value: 'brand' },
          { text: 'Actions', value: 'actions'},


        ],
      }
    },
  }
</script>
