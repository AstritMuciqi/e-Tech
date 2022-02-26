<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div v-if="user.data">Hello</div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
// import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
  },
  // computed: {
  //   ...mapGetters({
  //     user: "user",
  //   }),
  // },
};
</script>
