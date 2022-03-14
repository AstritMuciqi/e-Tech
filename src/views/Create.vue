<template>
  <section>
    <div class="row justify-content-center">
      <div class="col-8 col-md-6 col-lg-5">
        <form @submit.prevent="createProduct">
          <div class="form-group">
            <TextInput v-model="form.name" />
          </div>
          <div class="form-group">
            <TextInput v-model="form.model" />
          </div>
          <div class="form-group">
            <TextInput v-model="form.description" />
          </div>
          <div class="form-group">
            <NumberInput v-model="form.price" />
          </div>
          <div class="form-group">
            
              <select
                v-model="form.category"
                class="form-control"
                @input="$emit('input', $event.target.value)"
              >
                <option  v-for="category in categoryList" :key="category.id" :value="category._id" >
                  <li>{{ category.name }}</li> 
                </option>
              </select>
          </div>
          <div class="form-group">
            <TextInput v-model="form.brand" />
          </div>

          <div>
            <input type="file">
          
          </div>



          <div class="form-group">
            <button class="btn btn-primary" type="submit">Publish</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import apiRequest from "../utility/apiRequest";
import NumberInput from "@/components/form/NumberInput.vue";
import TextInput from "@/components/form/TextInput.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    NumberInput,
    TextInput
  },
  data() {
    return {
      form: {
        name: "",
        model: "",
        description: "",
        price: 0,
        category: "",
        brand: "",
      },
      error: null,
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async createProduct() {
      //   const validationResult = realEstateSchema.validate(this.form);
      //   if (validationResult.error) {
      //       this.error = error;
      //       return;
      //   }

      const newProduct = await apiRequest.createProduct({ ...this.form });
      this.$router.push({ name: "View", params: { id: newProduct._id } });
      // this.$router.push(`/view/${newRealEstate._id}`);
    },
    async fetchCategories(){
      const result = await apiRequest.getCategoryList();
      this.$store.dispatch("fetchCategories", result);
    }
  },
  computed: {
    ...mapGetters({
      categoryList: "categoryList",
    }),
  },
};
</script>
