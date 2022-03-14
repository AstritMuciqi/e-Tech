<template>
  <v-container style="width:800px !important">
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title>Add New Product</v-card-title>
          <v-divider></v-divider>
          <v-form ref="form" @submit.prevent="submitForm" class="pa-5" enctype="multipart/form-data">
            <v-text-field  label="Product Name" prepend-icon="mdi-note" v-model="form.name" :rules="rules"></v-text-field>
            <v-text-field  label="Product Model" prepend-icon="mdi-note" v-model="form.model" :rules="rules"></v-text-field>
            <v-text-field  label="Product Price" prepend-icon="mdi-note" v-model="form.price" :rules="rules"></v-text-field>
            <v-col
              class="d-flex"
              cols="12"
              sm="6"
            >
      <v-select :items="categoryList" 
      item-text="name" 
      item-value="name"
      v-model="form.category"
      single-line 
      auto 
      label="Select Category"></v-select>

            </v-col>
            <v-text-field  label="Product Brand" prepend-icon="mdi-note" v-model="form.brand" :rules="rules"></v-text-field>
            <v-textarea  label="Product Description" prepend-icon="mdi-note-plus" v-model="form.description" :rules="rules"></v-textarea>
            <v-file-input @change="selectFile"  :rules="rules" show-size counter multiple label="Select Image"  ></v-file-input>
            <v-btn type="submit" class="mt-3" color="primary">Add Product</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import apiRequest from "../../utility/apiRequest";
import { mapGetters } from "vuex";
export default {
  created() {
    this.fetchCategories();
  },
  data() {
    return {
      rules: [(value)=> !!value ||  "This field is required!"],
      form: {
        name: "",
        model: "",
        description: "",
        price: 0,
        category: "",
        brand:"",
        photo: "",
      },
      photo: "",
    };
    
  },
  //  methods: {
  //    selectFile(file){
  //      this.image = file[0];
  //    },
  //   async createProduct() {
  //     //   const validationResult = realEstateSchema.validate(this.form);
  //     //   if (validationResult.error) {
  //     //       this.error = error;
  //     //       return;
  //     //   }

  //     const newProduct = await apiRequest.createProduct({ ...this.form });
  //     this.$router.push({ name: "View", params: { id: newProduct._id } });
  //     // this.$router.push(`/view/${newRealEstate._id}`);
  //   },
  methods: {
    selectFile(file){
      this.photo = file[0];
    },
    async fetchCategories(){
      const result = await apiRequest.getCategoryList();
      this.$store.dispatch("fetchCategories", result);
    },
    async submitForm(){
      this.form.photo = this.photo.name;

        console.log({...this.form});
        if(this.$refs.form.validate()){
        const response = await apiRequest.createProduct({...this.form});
        this.$router.push({ name : "Products", params : { message: response.message}});
      }
      
    },
    
  },
  computed: {
    ...mapGetters({
      categoryList: "categoryList",
    }),
  },
  
};
</script>

