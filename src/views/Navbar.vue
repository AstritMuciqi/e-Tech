<template>

  <div style="color:white;">
    <div
      style="background-color:black; display:flex; margin-bottom:0px; height: 100px;"
      class="container-fluid"
    >
      <a style="margin:auto;padding-top:15px;" class="navbar-brand">
        <router-link style="text-decoration:none; display:flex;" to="/home"
          ><p
            style="font-family: Lucida Handwriting, cursive;color:red; margin-right:5px; font-size: 30px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 20px; text-decoration:none"
          >
            e
          </p>
          <p
            style="font-family: Lucida Handwriting, cursive; font-size: 26px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 20px; color:white;text-decoration:none"
          >
            TECH
          </p>
        </router-link>
      </a>
      <form style="align-items:center; margin-left:280px; margin-right:130px;" class="d-flex">
        <input
          style="width:500px"
          class="form-control me-2"
          type="search"
          placeholder="Kërko"
          aria-label="Search"
          v-model="product.name"
        />
        <v-btn
          @click.prevent="searchByName(product.name)"
          style="height:38px; margin-left:-60px;background-color:white"
          type="submit"
          ><v-icon>mdi-magnify</v-icon></v-btn
        >
      </form>
      <form style="align-items:center;  margin-right:150px;" class="d-flex">
        <router-link to="/login"
          ><button
            v-if="!user.loggedIn"
            style="height:40px;width:80px; "
            class="btn btn-outline-primary"
            type="submit"
          >
            Login
          </button></router-link
        >
        <button
          v-if="user.loggedIn"
          style="height:40px;width:80px;"
          class="btn btn-outline-danger"
          type="submit"
          @click="handleLogout"
        >
          Logout
        </button>
        <CartHeader />
      </form>
    </div>
  </div>
</template>
<script>
import CartHeader from "./CartHeader.vue";
import { getAuth, signOut } from "@firebase/auth";
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "Navbar",
  data(){
    return{
      product:{
        name:""
      }
    }
    
  },
  components: {
    CartHeader
  },
  methods: {
    handleLogout() {
      signOut(getAuth());
    },
    async searchByName(product) {
      this.$isLoading(true)
      const result = await (
        await axios.get(
          `http://localhost:5000/api/v1/products/?name=${product}`
        )
      ).data;
      const data = result.data;
      this.$store.dispatch("fetchProducts", data);
      console.log(this.$store.state);
      window.scroll(100, 300);
      this.$isLoading(false)
      
    },
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
  }
};
</script>
