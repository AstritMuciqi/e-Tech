<template>
      <section>
        <Slider />
        <Listing />

      </section>

</template>

<script>
import Listing from "./Listing.vue";
import Slider from "./Slider.vue";
import { mapGetters } from "vuex";
 

export default {
  name: 'App',
  components : {
    Listing,
    Slider
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
