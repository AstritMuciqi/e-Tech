<template>
  <v-container style="width:800px !important">
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title>Edit Brand</v-card-title>
          <v-divider></v-divider>
          <v-form ref="form" @submit.prevent="updateForm" class="pa-5" enctype="multipart/form-data">
            <v-text-field  label="Brand Name" prepend-icon="mdi-note" v-model="form.name" :rules="rules"></v-text-field>

            <v-file-input @change="selectFile"  show-size counter multiple label="Select Image"  ></v-file-input>
            <v-img :src="require(`../../assets/${form.photo}`)" width="120" height="120"></v-img>
            <v-btn type="submit" style="margin-right:800px" color="success">Edit Brand</v-btn>
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
        photo: "",
      },
      photo: "",
    };
    
  },
  async created(){
    const response = await apiRequest.getBrand(this.$route.params.id);
    this.form = response;


  },
  methods: {
 
    selectFile(file){
      this.photo = file[0];
    },
    async updateForm(){
        this.form.photo = this.photo.name;
        if(this.$refs.form.validate()){
        const response = await apiRequest.editBrand(this.$route.params.id,{...this.form});
        this.$router.push({ name : "Brands", params : { message: response.message}});
      }
    }
  },
  
};


  
</script>