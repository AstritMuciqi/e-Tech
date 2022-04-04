<template>
  <section style="display: flex" v-if="this.product">
    <div class="photo-main">
      <img
        :src="require(`../assets/${product.photo}`)"
        style="height: 400px"
        width="100%"
        alt="Card image cap"
      />
    </div>
    <div class="text_section">
      <h3>Product Name :</h3>
      <span>Product Model :</span> <br />
      <br />
      <span>Product Price :</span> <br />
      <br />
      <span>Product Brand : </span> <br />
      <br />
      <span>Product Category : </span> <br />
      <br />
      <p>Description :</p>
      <router-link style="text-decoration: none; color: white" to="/"
        ><button
          style="margin: 210px 0 0 80px; color: white"
          class="btn btn-primary"
          type="submit"
          value=""
        >
          <v-icon style="color: white">mdi-home</v-icon><b>Back To Products</b>
        </button></router-link
      >
    </div>
    <div class="value_section">
      <h3>{{ product.name }}</h3>
      <span>{{ product.model }}</span> <br />
      <br />
      <span>{{ product.price }}Є</span> <br />
      <br />
      <span>{{ product.brand }}</span> <br />
      <br />
      <span>{{ product.category }}</span> <br />
      <br />
      <p class="desc">{{ product.description }}</p>
      <button
        v-if="(quantity && product.button) || (quantity && !product.button)"
        :id="product._id"
        :disabled="product.button"
        style="
          width: 70%;
          font-size: 16px;
          margin: 80px 0 0 0;
          margin: 90px 0 0 0;
        "
        class="btn btn-secondary text-light"
      >
        <span style="color: white"
          >🛒 Not in Stock (
          <strong>Price {{ product.price }} Є</strong> )</span
        >
      </button>
      <button
        v-if="!product.button && !quantity"
        :id="product._id"
        @click="addToCart(product)"
        style="
          width: 70%;
          font-size: 16px;
          margin: 80px 0 0 0;
          margin: 90px 0 0 0;
        "
        class="btn btn-dark text-light"
      >
        <span
          >🛒 Add to Cart ( <strong>Price {{ product.price }} Є</strong> )
        </span>
      </button>
      <button
        v-if="product.button && !quantity"
        :id="product._id"
        :disabled="product.button"
        @click="addToCart(product)"
        style="
          width: 85%;
          font-size: 16px;
          margin: 80px 0 0 80px;
          margin: 90px 0 0 0;
        "
        class="btn btn-dark text-light"
      >
        <span :id="product.name" style="color: white"
          >🛒 Added to Cart (
          <strong>Price {{ product.price }} Є</strong> )</span
        >
      </button>
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
.p_value {
  font-size: 18px;
  margin-left: 700px;
  color: black;
}
.text_section {
  font-size: 16px;
  text-align: start;
  margin-top: 100px;
}
.value_section {
  margin-left: 10px;
  font-weight: bold;
  font-size: 16px;
  text-align: start;
  margin-top: 100px;
}
.desc {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  max-width: 350px;
  min-height: 144px;
  text-align: justify;
}
</style>
<script>
import apiRequest from "../utility/apiRequest";
import axios from "axios";
import { mapActions } from "vuex";

export default {
  created() {
    this.getProduct();
  },
  computed: {
    quantity() {
      if (this.product.quantity === 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  data() {
    return {
      product: null,
    };
  },
  methods: {
    async getProduct() {
      this.$isLoading(true);
      this.product = await apiRequest
        .getProduct(this.$route.params.id)
        .finally(() => {
          this.$isLoading(false);
        });
    },
    ...mapActions(["addProductsToCart"]),
    addToCart(product) {
      let import_button = document.getElementById(`${product._id}`);
      let import_span = document.getElementById(`${product.name}`);
      product.quantity--;
      product.button = true;
      axios
        .put(`http://localhost:5000/api/v1/products/${product._id}`, product)
        .then(() => (import_button.disabled = true))
        .then(
          () =>
            (import_span.textContent = `🛒 Added to Cart ( Price ${product.price} Є  )`)
        );
      this.addProductsToCart({
        product: this.product,
        quantity: 1,
        _id: this.product._id,
      });
    },
  },
};
</script>
