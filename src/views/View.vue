<template> 
  <section style="display:flex" v-if="this.product">
		<div class="photo-main">
            <img :src="require(`../assets/${product.photo}`)" style="height:400px" class="card-img-top"    alt="Card image cap">
        </div>
		<div class="text_section">
			<h3>Product Name : </h3> 
			<span>Product Model :</span> <br> <br>
			<span>Product Price :</span> <br> <br>
			<span>Product Brand : </span> <br> <br>
			<span>Product Category : </span> <br> <br>
			<p>Description : </p> 
			<button style="margin:210px 0 0 80px" class="btn btn-success" type="submit" value=""><v-icon>mdi-cart</v-icon> Add to Cart</button>
		</div>
		<div class="value_section">
			<h3>{{product.name}}</h3> 
			<span>{{product.model}}</span> <br> <br>
			<span>{{product.price}}</span> <br> <br>
			<span>{{product.brand}}</span> <br> <br>
			<span>{{product.category}}</span> <br> <br>
			<p class="desc">{{product.description}}</p> 
			<router-link style="text-decoration:none;color:black" to="/"><button style="margin:90px 0 0 0" class="btn btn-warning" type="submit" value=""><v-icon>mdi-home</v-icon> Back To Products</button></router-link>
		</div>
  </section>
</template>

<style>


/* ----- Product Section ----- */


/* ----- Photo Section ----- */


.photo-main {
	border-radius: 6px 6px 0 0;
	background-color: #ffffff;
	height: 600px;
	width: 400px;
	margin: 30px 20px 50px 200px;
	border-radius: 6px;
	box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
}


.p_value{
	font-size:18px;
	margin-left: 700px;
	color: black;
}
.text_section{
	font-size: 16px;
	text-align: start;
	margin-top: 100px;

}
.value_section{
	margin-left: 10px;
	font-weight: bold;
	font-size: 16px;
	text-align: start;
	margin-top: 100px;

}
.desc{
	text-overflow: ellipsis;
	max-width: 200px;
	min-height:104px;

}



</style>
<script>
import apiRequest from "../utility/apiRequest";

export default {

  created() {
    this.getProduct();
  },
  data() {
    return {
      product: null,
    };
  },
  methods: {
    async getProduct() {
		this.$isLoading(true)
		this.product = await apiRequest.getProduct(this.$route.params.id).finally(()=>{
			this.$isLoading(false)
		});
    },
  },
};
</script>
