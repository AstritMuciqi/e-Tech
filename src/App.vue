<template>
  <v-app>
    <div v-if="!$route.meta.component">
            <Navbar />
      </div> 
      <router-view></router-view>
      <div v-if="!$route.meta.component">
    <Footer />
          </div> 

  </v-app>
</template>

<script>
import Navbar from "./views/Navbar.vue";
import Footer from "./views/Footer.vue";

export default {
  name: 'App',
  components : {
    Navbar,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
