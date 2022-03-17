<template>
  <v-container style="width:800px !important">
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title>Edit Product</v-card-title>
          <v-divider></v-divider>
          <v-form ref="form" @submit.prevent="updateForm" class="pa-5" enctype="multipart/form-data">
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
            <v-file-input @change="selectFile"  show-size counter multiple label="Select Image"  ></v-file-input>
            <!-- <v-btn color="red" text @click="removeProduct(form._id)">Delete</v-btn> -->
            <v-img :src="require(`../../assets/${form.photo}`)" width="120" height="120"></v-img>
            <v-btn type="submit" style="margin-right:800px" color="success">Edit Product</v-btn>
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
  async created(){
    this.$isLoading(true);
    const response = await apiRequest.getProduct(this.$route.params.id)
    .finally(()=>{
              this.$isLoading(false)
    });
    this.form = response;
    this.fetchCategories();

  },
  methods: {
    // async removeProduct(id){
    //   const response = await apiRequest.removeProduct(id);
    //   this.$router.push({name : "listing", params: {message : response.message}});
    // },
    async fetchCategories(){
      const result = await apiRequest.getCategoryList();
      this.$store.dispatch("fetchCategories", result);
    },
    selectFile(file){
      this.photo = file[0];
    },
    async updateForm(){
        this.$isLoading(true)
        this.form.photo = this.photo.name;
        if(this.$refs.form.validate()){
        const response = await apiRequest.editProduct(this.$route.params.id,{...this.form})
        .finally(()=>{
              this.$isLoading(false)
        });
        this.$router.push({ name : "Products", params : { message: response.message}});
      }
    }
  },
  computed: {
    ...mapGetters({
      categoryList: "categoryList",
    }),
  },
};

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
  
</script>

