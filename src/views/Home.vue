<template>
        <Listing />
</template>

<script>
import Listing from "./Listing.vue";
// @ is an alias to /src
import { mapGetters } from "vuex";


export default {
  name: 'App',
  components : {
    Listing
  },

  data: () => ({
    //
  }),
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
};
</script>
