<template>
  <v-main>
    <v-btn style="margin: 10px 930px 10px 0; font-size:20px; background-color:green;color:white;text-decoration:none;"  to="./addCategory">Add Category</v-btn>
    <v-alert style="margin-left:70%;position:fixed; margin-top:-50px; padding:10px" width="300px"  close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.$route.params.message">
      {{this.$route.params.message}}
    </v-alert>
    <v-data-table
    style="width:1144px !important;margin-left:60px !important;"
    :headers="headers"
    :items="categoryList"
    :items-per-page="5"
    class="elevation-1"
  ><template v-slot:[`item.photo`]="{ item }">
            <div class="p-2">
              <img v-bind:src="require(`../../assets/${item.photo}`)" height="100px" width="120px">
            </div>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <div style="white-space: nowrap;">
              <a v-bind:href="`editCategory/${item._id}`"><button class="btn btn-outline-warning">Edit</button></a> | 
              <button @click="deleteCategory(item._id)" class="btn btn-outline-danger">Delete</button>
            </div>
            
          </template>
          
          </v-data-table>
  </v-main>
</template>

<style>
 .v-data-table-header{
   background-color: aqua;
      white-space: nowrap;

 }
 .v-data-table-header tr th span{
   color: rgb(0, 0, 0);
   font-size: 16px;
   white-space: nowrap;
  
}

</style>

<script>
import apiRequest from "../../utility/apiRequest";
import { mapGetters } from "vuex";
  export default {
    created() {
      this.fetchCategories();
    },

    methods: {
      async fetchCategories() {
                      this.$isLoading(true)

        const result = await apiRequest.getCategoryList();
        this.$store.dispatch("fetchCategories", result);
                      this.$isLoading(false)

      },

      async deleteCategory(id){
        const response = await apiRequest.removeCategory(id);
        window.location.reload();
        this.$router.push({ name : "Category",params : { message: response.message}});
        alert("Category Deleted Successfully");
      }
    },
    computed: {
      ...mapGetters({
        categoryList: "categoryList",
      }),
    },
    data () {
      return {
        headers: [
          {
            text: 'Image',
            align: 'start',
            sortable: false,
            value: 'photo',
          },
          { text: 'Name', value: 'name' },
          { text: 'Actions', value: 'actions'},


        ],
      }
    },
  }
</script>
