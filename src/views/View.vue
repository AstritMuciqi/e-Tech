<template> 
  <section v-if="this.product" class="product">
    <div class="product__photo">
      <div class="photo-container">
        <div class="photo-main">
            <img style="height:300px" class="card-img-top" v-bind:src="require(`../assets/${this.product.name}.jpg`)"   alt="Card image cap">
        </div>
        
      </div>
    </div>
    <div class="product__info">
      <div class="title">
        <h4><p style="font-size:15px">Product Name : </p>{{this.product.name}}</h4>
        <h4><p style="font-size:15px">Product Model : </p>{{this.product.model}}</h4>
        <h4><p style="font-size:15px">Category : </p>{{this.product.category}}</h4>
        <h4><p style="font-size:15px">Brand : </p>{{this.product.brand}}</h4>

        <span>{{this.product.model}}</span>
      </div>
      <div class="price">
        <h4><p style="font-size:15px">Price : </p>{{this.product.price}}</h4>
      </div>
      
      <div class="description">
        <h5><p style="font-size:15px">Product Description : </p>{{this.product.description}}</h5>
      </div>
      <button class="buy--btn">ADD TO CART</button>
    </div>
  </section>
</template>

<style>
/* ----- Variables ----- */
$color-primary: #4c4c4c;
$color-secondary: #a6a6a6;
$color-highlight: #ff3f40;

/* ----- Global ----- */
* {
	box-sizing: border-box;
}

h3 {
	font-size: 0.7em;
	letter-spacing: 1.2px;
	color: $color-secondary;
}

img {
			max-width: 100%;
			filter: drop-shadow(1px 1px 3px $color-secondary);
}

/* ----- Product Section ----- */
.product {
  width:70%;
  height:900px;
	display: grid;
	grid-template-columns: 0.9fr 1fr;
	margin: auto;
	padding: 2.5em 0;
	min-width: 600px;
	background-color: white;
	border-radius: 5px;
}

/* ----- Photo Section ----- */
.product__photo {
	position: relative;
}
h4 p{
  display:inline-block;
}

.photo-container {
	position: absolute;
	left: -2.5em;
	display: grid;
	grid-template-rows: 1fr;
	width: 100%;
	height: 100%;
	border-radius: 6px;
	box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
}

.photo-main {
	border-radius: 6px 6px 0 0;
	background-color: #9be010;
	background: radial-gradient(#e5f89e, #96e001);

	.controls {
		display: flex;
		justify-content: space-between;
		padding: 0.8em;
		color: #fff;

		i {
			cursor: pointer;
		}
	}

	img {
		position: absolute;
		left: -3.5em;
		top: 2em;
		max-width: 110%;
		filter: saturate(150%) contrast(120%) hue-rotate(10deg)
			drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));
	}
}

/* ----- Informations Section ----- */
.product__info {
	padding: 0.8em 0;
}

.title {
	h1 {
		margin-bottom: 0.1em;
		color: $color-primary;
		font-size: 1.5em;
		font-weight: 900;
	}

	span {
		font-size: 0.7em;
		color: $color-secondary;
	}
}

.price {
	margin: 1.5em 0;
	color: $color-highlight;
	font-size: 1.2em;

	span {
		padding-left: 0.15em;
		font-size: 2.9em;
	}
}



.description {
	clear: left;
	margin: 2em 0;

	h3 {
		margin-bottom: 1em;
	}

	ul {
		font-size: 0.8em;
		list-style: disc;
		margin-left: 1em;
	}

	li {
		text-indent: -0.6em;
		margin-bottom: 0.5em;
	}
}

.buy--btn {
	padding: 1.5em 3.1em;
	border: none;
	border-radius: 7px;
	font-size: 0.8em;
	font-weight: 700;
	letter-spacing: 1.3px;
	color: #fff;
	background-color: $color-highlight;
	box-shadow: 2px 2px 25px -7px $color-primary;
	cursor: pointer;

	&:active {
		transform: scale(0.97);
	}
}


</style>
<script>
import apiRequest from "../utility/apiRequest";

export default {

  created() {
    this.fetchCategories();
  },
  data() {
    return {
      product: null,
    };
  },
  methods: {
    async fetchCategories() {
      this.product = await apiRequest.getProduct(this.$route.params.id);
    },
  },
};
</script>
