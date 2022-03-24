<template>
  <v-container style="width:800px !important">
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title>Checkout Page</v-card-title>
          <v-divider></v-divider>
          <v-form ref="form" @submit.prevent="submitForm" class="pa-5" enctype="multipart/form-data">
            <v-main hidden="hidden" v-for="(item, i) in form.items" :key="i">
               <v-text-field   v-model="form.items[i]._id" :rules="rules"></v-text-field>
            </v-main>
                        <v-main hidden="hidden">

            <v-text-field hidden="hidden"  v-model="form.value" :rules="rules"></v-text-field>
                        </v-main>
            <v-text-field  label="Full Name" prepend-icon="mdi-note" v-model="form.username" :rules="rules"></v-text-field>
            <v-text-field  label="City" prepend-icon="mdi-note" v-model="form.city" :rules="rules"></v-text-field>
            <v-text-field  label="Address" prepend-icon="mdi-note" v-model="form.address" :rules="rules"></v-text-field>
            <v-col
              class="d-flex"
              cols="12"
              sm="6"
            >
              <v-select :items="items" 
              item-text="name" 
              item-value="name"
              v-model="form.payment"
              single-line 
              auto 
              label="Select Payment"></v-select>

            </v-col>
            <v-btn type="submit" class="mt-3" color="primary">Checkout Details</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import apiRequest from "../utility/apiRequest";
import { mapGetters } from "vuex";
export default {
  
  data() {
    var arr = this.$store.state.products.cart;
    return {
      rules: [(value)=> !!value ||  "This field is required!"],
      form: {
        username: "",
        city: "",
        address: "",
        value:this.$store.getters.cartTotalPrice,
        items: arr.filter((item)=>{
        return item._id
        }),
        payment: "",
      },
      items:[
        "Debit Card",
        "Paypal",
        "Credit Card",
        "Cash"
      ]
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
    
    
    async submitForm(){
        if(this.$refs.form.validate()){
        const newOrder = await apiRequest.createOrder({...this.form});
        this.$router.push({ name: "OrderDetails", params: { id: newOrder.data._id } });
      }
      
    },
    
  },
  

  
};
</script>

