<template>
  <v-main>
    <h2 style="padding:10px; text-align:start; margin-left:65px">Messages from Contact Form</h2>
    <v-data-table
    style="width:1144px !important;margin-left:60px !important;"
    :headers="headers"
    :items="contactList"
    :items-per-page="5"
    class="elevation-1"
  >
   <template v-slot:[`item.actions`]="{ item }">
            <div style="white-space: nowrap;">
              <button @click="deleteContact(item._id)" class="btn btn-outline-danger">Delete</button>
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
   font-size: 14px;
   white-space: nowrap;
  
}

</style>

<script>
import apiRequest from "../../utility/apiRequest";
import { mapGetters } from "vuex";

  export default {
    created() {
      this.fetchContacts();
    },

    methods: {
      async fetchContacts() {
        const result = await apiRequest.getContactList();
        this.$store.dispatch("fetchContacts", result);
      },
      async deleteContact(id){
        const response = await apiRequest.removeContact(id);
        window.location.reload();
        this.$router.push({ name : "Contacts",params : { message: response.message}});
        alert("Message Deleted Successfully");
      }
    },
    
    data () {
      return {
        headers: [
          
          { text: 'E-Mail', value: 'email' },
          { text: 'Message', value: 'message' },
          { text: 'Actions', value: 'actions'},


        ],
      }
    },
    computed: {
      ...mapGetters({
        contactList: "contactList",
      }),
    },
  }
</script>
