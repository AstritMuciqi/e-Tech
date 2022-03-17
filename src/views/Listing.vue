<template>
  <section>
    <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.$route.params.message">
      {{this.$route.params.message}}
    </v-alert>
    <div style="display:flex; justify-content:center;">
      <span class="h6-hover" style="border-left:1px solid gray;border-right:1px solid gray;" v-for="result in results" :key="result.id">
        <router-link style="font-size:14px;margin:20px;text-decoration:none;color:black;font-weight:bold" to="/admin/products">{{result.name}}</router-link>
      </span>
    </div>
    <hr style="border-top: 1px solid gray; margin-top: 0px; ">
    <div >
        <div style="display:flex;flex-wrap:wrap;width:1200px;margin-left:40px;" class="card-deck">
          <div style="flex:1 0 24.333333%;" class="card" v-for="product in productList" :key="product.id">
            <img style="height:300px" class="card-img-top"  v-bind:src="require(`../assets/${product.photo}`)"   alt="Card image cap">
            <div class="card-body">
              <h5 style="display:inline-block; white-space: nowrap;margin-right:10px;" class="card-title">{{product.name}} - {{product.model}}</h5>
              <p style="overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2; /* number of lines to show */
                        line-clamp: 2; 
                        -webkit-box-orient: vertical;" class="card-text">
                        {{product.description}} from {{product.brand}} in {{product.category}}
                </p>
            </div>
            <div class="card-footer ">
                  <p class="card-text" style="display:flex;">
                    <a style="width:70%;font-size:11px;" class="btn btn-dark text-light">
                        <i class="bi bi-cart-plus "></i> Add to Cart (Price {{product.price}})
                    </a>
                    <a v-bind:href="`view/${product._id}`" style="width:40%; font-size:10px;" class="btn btn-outline-dark float-right ">
                        <i class="bi bi-eye-fill "></i> Show Details
                    </a>
                  </p>
             </div>                        
          </div>
        </div>  
    </div>
  </section>
</template>

<style>
 .h6-hover{
   padding: 40px;
 }
 .h6-hover:hover{
   background-color: rgb(218, 218, 218);
 }
</style>


<script>
import { mapGetters } from "vuex";
import apiRequest from "../utility/apiRequest";
export default {
  created() {
    this.fetchCategories();
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      this.$isLoading(true) // show the loading screen
      const result = await apiRequest.getProductList();
      this.$store.dispatch("fetchProducts", result).finally(()=>{
              this.$isLoading(false)
      });
    },
    async fetchCategories(){
                const result = await apiRequest.getCategoryList();
                this.$store.dispatch("fetchCategories", result);
                this.results = result;
                
    },
  },
  data() {
    return {
      results:{},
    }
  },
  computed: {
    ...mapGetters({
      productList: "productList",

      
    }),
     ...mapGetters({
        user: "user",
      }),
  }
};
</script>


