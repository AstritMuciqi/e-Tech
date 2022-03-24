<template>
  <section>
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
                    <button :id="product._id" :disabled="product.button"  @click="addToCart(product)" style="width:70%;font-size:11px;" class="btn btn-dark text-light">
                        <i class="bi bi-cart-plus "></i> Add to Cart (Price {{product.price}}Є | Stock({{product.quantity}}))
                    </button>
                    <a v-bind:href="`view/${product._id}`" style="width:40%; font-size:10px;" class="btn btn-outline-dark float-right ">
                        <i class="bi bi-eye-fill "></i> Show Details
                    </a>
                  </p>
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
import axios from 'axios';
import { mapActions } from "vuex";
export default {
  name:"ProductCard",
  props: ["product"],
  methods:{
    ...mapActions(["addProductsToCart"]),
    addToCart(product) {
      let import_button = document.getElementById(`${product._id}`);
      product.quantity--;
      product.button = true;
      axios.put(`http://localhost:5000/api/v1/products/${product._id}`, product)
      .then(() => import_button.disabled = true);
       this.addProductsToCart({
        product: this.product,
        quantity: 1,
        _id : this.product._id
      })
      
    },
    
  }
  
};
</script>


