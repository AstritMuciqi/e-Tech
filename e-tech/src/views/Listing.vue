<template>
  <section>
    <h1>
      Hello these are the available Products
    </h1>
    <div >
        <div style="display:flex;flex-wrap:wrap;width:1200px;margin-left:40px;" class="card-deck">
          <div style="flex:1 0 24.333333%;" class="card" v-for="product in productList" :key="product.id">
            <img style="height:300px" class="card-img-top" v-bind:src="require(`../assets/${product.name}.jpg`)"   alt="Card image cap">
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
                    <a style="width:40%; font-size:10px;" class="btn btn-outline-dark float-right ">
                        <i class="bi bi-eye-fill "></i> Show Details
                    </a>
                  </p>
             </div>                        
          </div>
        </div>  
    </div>
  </section>
</template>

<script>
import apiRequest from "../utility/apiRequest";
import { mapGetters } from "vuex";
export default {
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      const result = await apiRequest.getProductList();
      this.$store.dispatch("fetchProducts", result);
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      productList: "productList",
    }),
  },
};
</script>
