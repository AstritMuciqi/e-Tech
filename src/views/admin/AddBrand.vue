<template>
  <v-container style="width:800px !important">
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title>Add New Brand</v-card-title>
          <v-divider></v-divider>
          <v-form ref="form" @submit.prevent="submitForm" class="pa-5" enctype="multipart/form-data">
            <v-text-field  label="Brand Name" prepend-icon="mdi-note" v-model="form.name" :rules="rules"></v-text-field>
            <v-col
              class="d-flex"
              cols="12"
              sm="6"
            >
      
            </v-col>
            <v-file-input @change="selectFile"  :rules="rules" show-size counter multiple label="Select Image"  ></v-file-input>
            <v-btn type="submit" class="mt-3" color="primary">Add Brand</v-btn>
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

  methods: {
    selectFile(file){
      this.photo = file[0];
    },
 
    async submitForm(){
      this.form.photo = this.photo.name;

        console.log({...this.form});
        if(this.$refs.form.validate()){
                     this.$isLoading(false)

        const response = await apiRequest.createBrand({...this.form}).finally(()=>{
            this.$isLoading(true)
        });
        this.$router.push({ name : "Brands", params : { message: "Brand Added Successfully!"}});

      }
      
    },
    
  },
 /* computed: {
    ...mapGetters({
      brandtList: "brandList",
    }),
  },*/
  
};
</script>