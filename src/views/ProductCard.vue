<template>
  <section class="mySection">
              <div style="height:200px" class="img">
                            <img style="height:200px" class="card-img-top"  v-bind:src="require(`../assets/${product.photo}`)"   alt="Card image cap">

                <a v-bind:href="`view/${product._id}`" style="width:100%;font-size:15px; color:white" class="btn btn-primary float-right ">
                        <v-icon style="color:white">mdi-eye</v-icon> Show Details
                    </a>
                    </div>      
            <div class="card-body">
              <h5 style="display:inline-block; white-space: nowrap;margin-right:10px; font-size:13px;font-weight:bold" class="card-title">{{product.name}} - {{product.model}}</h5>
              <p style="overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2; /* number of lines to show */
                        line-clamp: 2; 
                        -webkit-box-orient: vertical;
                        font-size:12px;
                        text-align:justify" class="card-text">
                        {{product.description}} from {{product.brand}} in {{product.category}}
                </p>
            </div>
            <div class="card-footer ">
                    
                  <p class="card-text" style="display:flex;">
                    <button v-if="quantity&&product.button || quantity&&!product.button" :id="product._id" :disabled="product.button"  style="width:100%;font-size:14px;" class="btn btn-secondary text-light">
                        <span style="color:white">🛒 Not in Stock ( <strong>Price {{product.price}} Є</strong>  )</span> 
                    </button>
                    <button v-if="!product.button&&!quantity" :id="product._id" @click="addToCart(product)" style="width:100%;font-size:14px;" class="btn btn-dark text-light">
                        <span >🛒 Add to Cart  ( <strong>Price {{product.price}} Є</strong>  ) </span>
                    </button>
                    <button v-if="product.button&&!quantity" :id="product._id" :disabled="product.button"  @click="addToCart(product)" style="width:100%;font-size:13px;" class="btn btn-dark text-light">
                        <span :id="product.name" style="color:white">🛒 Added to Cart ( <strong>Price {{product.price}} Є</strong>  )</span> 
                    </button>
                    
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
 .btn.btn-dark.text-light:disabled{
   background-color: rgb(201, 0, 0);
 }
 .card-img-top:hover{
       transform: scale(1.1);

 }

 .btn.btn-primary.float-right{
   display: none;
 }
 .img:hover > .btn.btn-primary.float-right{
   display: block;
   position: absolute;
   margin-top: 5px;
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
      let import_span = document.getElementById(`${product.name}`);
      product.quantity--;
      product.button = true;
      axios.put(`http://localhost:5000/api/v1/products/${product._id}`, product)
      .then(() => import_button.disabled = true).then(
          () =>
            (import_span.textContent = `🛒 Added to Cart ( Price ${product.price} Є  )`)
        );
       this.addProductsToCart({
        product: this.product,
        quantity: 1,
        _id : this.product._id
      })
      
    },
    

    
  },
  computed:{
      quantity(){
        if(this.product.quantity === 0){
          return true;
        }else{
          return false;
        }
      }
    }
  
};
</script>


